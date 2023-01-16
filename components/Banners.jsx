import { useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";
import { fetchBanners, fetchEvents } from "../backend/fetch";
import styles from "./../styles/Banners.module.scss";

const bannersActions = {
    SET : 0,
    NAVIGATORS : 1,
    NAVIGATE : 2
}

function bannersReducer( state, action ) {
    switch (action.type) {
        case bannersActions.SET:

            state.paths = action.payload;
            state.imgs = Array.from(state.paths).map( e => <img src={`http://localhost:5000/serve/${e.path}`} alt={e.filename} loading={"lazy"} /> );

            return {...state};

        case bannersActions.NAVIGATORS:

            state.navigators = Array.from(action.payload).map( ( e, i ) => <div className={styles[`banner-navigator${state.position === i ? `-active` : ``}`]} onClick={() => e.onclick(i)} ></div> );

            return {...state};

        case bannersActions.NAVIGATE:
            state.position = action.payload;

            return {...state};
    
        default:
            return state;
    }
}

function Banners() {

    const [ state, dispatch ] = useReducer( bannersReducer, {
        paths : [],
        imgs : [],
        navigators : [],
        position : 0
    } )

    const rootElement = useRef(null);
    const imgsContainer = useRef(null);

    useEffect(() => {
        fetchBanners( ( status, response ) => {
            if ( status === 200 ) {
                dispatch( {
                    type : bannersActions.SET,
                    payload : response
                } )
            }
        } )
    }, []);

    useEffect(() => {

        dispatch({
            type : bannersActions.NAVIGATORS,
            payload : Array.from(state.paths).map( e => {
                return { data : e, onclick : (i) => {
                    dispatch({
                        type : bannersActions.NAVIGATE,
                        payload : i
                    });
                } };
            } )
        })

        imgsContainer.current.scroll( {
            left : state.position * rootElement.current.clientWidth,
            behavior : 'smooth'
        } );

    }, [state.position, state.paths]);

    return (
        <div ref={rootElement} className={styles['banners-carousel']} >
            <div ref={imgsContainer} className={styles['banner-imgs-container']}>
                {state.imgs}
            </div>
            <div className={styles['banner-imgs-controller']}>
                {state.navigators}
            </div>
        </div>
    );
}

export default Banners;