import download from "downloadjs";
import { toPng } from "html-to-image";
import Head from "next/head";
import { useReducer, useRef, useState } from "react";
import { sendDocumentRequest } from "../../backend/requests";
import PageTitle from "../../components/PageTitle";
import RightMenu from "../../components/RightMenu";
import styles from '../../styles/DocumentRequest.module.scss';

const requestPortalActions = {
    CHANGEDOC : 0,
    ID : 1
}

const documentTypes = {
    BARANGAY_CLEARANCE : 0,
    BUSSINESS_CLEARANCE : 1,
    CERTIFICATE_OF_RESIDENCY : 2,
    CEDULA : 3
}

function requestPortalReducer( state, action ) {
    switch (action.type) {
        case requestPortalActions.CHANGEDOC:

            if ( parseInt(action.payload) === documentTypes.BARANGAY_CLEARANCE ) {
                state.inputs = barangayClearanceInputs();
            }
            else if ( parseInt(action.payload) === documentTypes.BUSSINESS_CLEARANCE ) {
                state.inputs = bussinessClearanceInputs();
            }
            else if ( parseInt(action.payload) === documentTypes.CERTIFICATE_OF_RESIDENCY ) {
                state.inputs = certificateOfResidencyInputs();
            }
            else if ( parseInt(action.payload) === documentTypes.CEDULA) {
                state.inputs = cedulaInputs();
            }

            return {...state};

        case requestPortalActions.ID:

            state.id = action.payload;
            state.inputs = barangayClearanceInputs();

            return {...state};
    
        default:
            return state;
    }
}

function barangayClearanceInputs() {
    

    return <fieldset>
                <div className={styles['fieldset-notes']}>
                    <span className={styles['note']} >Note :  Please bring the documents required for getting Barangay Clearance.</span> <br />
                    <span className={styles['note']}>- <strong>Latest Valid ID</strong></span> <br />
                    <span className={styles['note']}>- <strong>25 PHP</strong></span>
                </div>
                <div className={styles['splitter']}>
                    <div className={styles['split-left']}>
                        <div className={styles['name-inputs']} >
                            <label htmlFor="firstname">Firstname : <span className={styles['amp']} >*</span></label>
                            <input type="text" className={styles['important']} id="firstname" placeholder="Firstname" required />
                            <label htmlFor="firstname">Lastname : <span className={styles['amp']} >*</span></label>
                            <input type="text" className={styles['important']} id="lastname" placeholder="Lastname" required/>
                            <label htmlFor="firstname">Middlename : </label>
                            <input type="text" className={styles['important']} id="middlename" placeholder="Middlename"/>
                        </div>
                    </div>
                    <div className={styles['split-right']}>
                        <label htmlFor="address">Address : <span className={styles['amp']} >*</span></label>
                        <input type="text" id="address" placeholder="Full Address"/>
                        <div className={styles['collection-first']}>
                            <div className={styles['birthdate-wrapper']}>
                                <label htmlFor="birthdate">Birthdate : <span className={styles['amp']} >*</span></label>
                                <input type="date" id="birthdate"/>
                            </div>
                            <div className={styles['email-wrapper']}>
                                <label htmlFor="email">Email : </label>
                                <input type="email" id="email" placeholder="Email" />
                            </div>
                            <div className={styles['phone-wrapper']}>
                                <label htmlFor="phone">Phone Number : </label>
                                <input type="tel" pattern="09[0-9]{9}" id="phone" placeholder="09XXXXXXXXX"/>
                            </div>
                            <div className={styles['purok-wrapper']}>
                                <label htmlFor="purok">Purok Number : <span className={styles['amp']} >*</span></label>
                                <input type="number" id="purok" placeholder="Purok Number" required/>
                            </div>
                        </div>
                        <div className={styles['purpose-wrapper']}>
                            <label htmlFor="purpose">Purpose : </label>
                            <textarea id="purpose" placeholder="Purpose of the document." maxLength={512} ></textarea>
                            <span className={styles['max-char']} >Max 512 characters</span>
                        </div>
                    </div>
                </div>
                <div className={styles["fieldset-btns"]}>
                    <button type="reset" >Reset</button>
                    <button type="submit" >Request</button>
                </div>
           </fieldset>

}

function bussinessClearanceInputs() {

    return <fieldset>
                <div className={styles['fieldset-notes']}>
                    <span className={styles['note']} >Note : Please use the name of the owner showing in the DTI registration. <br /></span>
                    <span className={styles['note']} >Note : Please bring the documents required for getting Bussiness Clearance <br />
                    - <strong>Barangay Clearance</strong><br />
                    - <strong>Certificate of Registration</strong><br />
                    - <strong>Contract of Lease</strong>, if you are leasing your bussiness area, however if you own the place, a copy of the 
                     <strong> Transfer Certificate of Title (TCT)</strong> or <strong>Tax Decleration</strong> is what you would provide.
                    - <strong>Certificate of Occupancy</strong>
                    </span>
                </div>
                <div className={styles['splitter']}>
                    <div className={styles['split-left']}>
                        <div className={styles['name-inputs']} >
                            <label htmlFor="firstname">Firstname : <span className={styles['amp']} >*</span></label>
                            <input type="text" className={styles['important']} id="firstname" placeholder="Firstname" required />
                            <label htmlFor="firstname">Lastname : <span className={styles['amp']} >*</span></label>
                            <input type="text" className={styles['important']} id="lastname" placeholder="Lastname" required/>
                            <label htmlFor="firstname">Middlename : </label>
                            <input type="text" className={styles['important']} id="middlename" placeholder="Middlename"/>
                        </div>
                    </div>
                    <div className={styles['split-right']}>
                        <label htmlFor="address">Address : <span className={styles['amp']} >*</span></label>
                        <input type="text" id="address" placeholder="Full Address"/>
                        <div className={styles['collection-first']}>
                            <div className={styles['birthdate-wrapper']}>
                                <label htmlFor="birthdate">Birthdate : <span className={styles['amp']} >*</span></label>
                                <input type="date" id="birthdate"/>
                            </div>
                            <div className={styles['email-wrapper']}>
                                <label htmlFor="email">Email : </label>
                                <input type="email" id="email" placeholder="Email" />
                            </div>
                            <div className={styles['phone-wrapper']}>
                                <label htmlFor="phone">Phone Number : </label>
                                <input type="tel" pattern="09[0-9]{9}" id="phone" placeholder="09XXXXXXXXX"/>
                            </div>
                        </div>
                        {/* <label htmlFor="owner-name">Owner Name : <span className={styles['amp']} >*</span></label>
                        <input type="text" id="owner-name" placeholder="Name of the owner showing in the DTI registration" /> */}
                        <label htmlFor="bussiness-name">Bussiness Name : <span className={styles['amp']} >*</span></label>
                        <input type="text" id="bussiness-name" placeholder="Name of the Bussiness" required/>
                        <label htmlFor="bussiness-address">Bussiness Address : <span className={styles['amp']} >*</span></label>
                        <input type="text" id="bussiness-address" placeholder="Address of the Bussiness" required/>
                        <label htmlFor="bussiness-description">Bussiness Description : <span className={styles['amp']} >*</span></label>
                        <input type="text" id="bussiness-description" placeholder="Nature of the Bussiness" required/>
                    </div>
                </div>

                <div className={styles["fieldset-btns"]}>
                    <button type="reset" >Reset</button>
                    <button type="submit" >Request</button>
                </div>
           </fieldset>

}

function certificateOfResidencyInputs() {

    return <fieldset>
                <div className={styles['fieldset-notes']}>
                    <span className={styles['note']} >Note : Please bring the documents required for getting Certificate of Residency <br />
                    - <strong>Cedula</strong><br />
                    - <strong>Valid ID</strong><br />
                    </span>
                </div>
                <div className={styles['splitter']}>
                    <div className={styles['split-left']}>
                        <div className={styles['name-inputs']} >
                            <label htmlFor="firstname">Firstname : <span className={styles['amp']} >*</span></label>
                            <input type="text" className={styles['important']} id="firstname" placeholder="Firstname" required />
                            <label htmlFor="firstname">Lastname : <span className={styles['amp']} >*</span></label>
                            <input type="text" className={styles['important']} id="lastname" placeholder="Lastname" required/>
                            <label htmlFor="firstname">Middlename : </label>
                            <input type="text" className={styles['important']} id="middlename" placeholder="Middlename"/>
                        </div>
                    </div>
                    <div className={styles['split-right']}>
                        <label htmlFor="address">Address : <span className={styles['amp']} >*</span></label>
                        <input type="text" id="address" placeholder="Full Address"/>
                        <div className={styles['collection-first']}>
                            <div className={styles['birthdate-wrapper']}>
                                <label htmlFor="birthdate">Birthdate : <span className={styles['amp']} >*</span></label>
                                <input type="date" id="birthdate"/>
                            </div>
                            <div className={styles['email-wrapper']}>
                                <label htmlFor="email">Email : </label>
                                <input type="email" id="email" placeholder="Email" />
                            </div>
                            <div className={styles['phone-wrapper']}>
                                <label htmlFor="phone">Phone Number : </label>
                                <input type="tel" pattern="09[0-9]{9}" id="phone" placeholder="09XXXXXXXXX"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles["fieldset-btns"]}>
                    <button type="reset" >Reset</button>
                    <button type="submit" >Request</button>
                </div>
           </fieldset>

}

function cedulaInputs() {
    return <fieldset>
                <div className={styles['fieldset-notes']}>
                    <span className={styles['note']} >Note : Please bring the documents required for getting Cedula <br />
                    - <strong>Valid ID</strong><br />
                    - <strong>Proof of Income</strong><br />
                    - <strong>Payslip</strong><br />
                    - <strong>BIR Form 2316</strong><br />
                    - <strong>Accomplished Community Tax Declaration Form (CTDF) (from City Treasurer's Office)</strong><br />
                    </span>
                </div>
                <div className={styles['splitter']}>
                    <div className={styles['split-left']}>
                        <div className={styles['name-inputs']} >
                            <label htmlFor="firstname">Firstname : <span className={styles['amp']} >*</span></label>
                            <input type="text" className={styles['important']} id="firstname" placeholder="Firstname" required />
                            <label htmlFor="firstname">Lastname : <span className={styles['amp']} >*</span></label>
                            <input type="text" className={styles['important']} id="lastname" placeholder="Lastname" required/>
                            <label htmlFor="firstname">Middlename : </label>
                            <input type="text" className={styles['important']} id="middlename" placeholder="Middlename"/>
                        </div>
                    </div>
                    <div className={styles['split-right']}>
                        <label htmlFor="address">Address : <span className={styles['amp']} >*</span></label>
                        <input type="text" id="address" placeholder="Full Address"/>
                        <div className={styles['collection-first']}>
                            <div className={styles['birthdate-wrapper']}>
                                <label htmlFor="birthdate">Birthdate : <span className={styles['amp']} >*</span></label>
                                <input type="date" id="birthdate"/>
                            </div>
                            <div className={styles['email-wrapper']}>
                                <label htmlFor="email">Email : </label>
                                <input type="email" id="email" placeholder="Email" />
                            </div>
                            <div className={styles['phone-wrapper']}>
                                <label htmlFor="phone">Phone Number : </label>
                                <input type="tel" pattern="09[0-9]{9}" id="phone" placeholder="09XXXXXXXXX"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles["fieldset-btns"]}>
                    <button type="reset" >Reset</button>
                    <button type="submit" >Request</button>
                </div>
            </fieldset>
}

export default function DocumentRequest() {

    const [ state, dispatch ] = useReducer( requestPortalReducer, {
        inputs : barangayClearanceInputs(),
        id : null
    } );

    const documentSelect = useRef(null);
    const form = useRef(null);
    const field = useRef(null);
    const codeCon = useRef(null);
    const idSpan = useRef(null);

    function changeDocumentType( val ) {
        dispatch({
            type : requestPortalActions.CHANGEDOC,
            payload : val
        });
    }

    function requestOnSubmit( e ) {
        e.preventDefault();

        let data = {
            type : documentSelect.current.value,
            firstname : e.target.firstname.value,
            lastname : e.target.lastname.value,
            middlename : e.target.middlename.value,
            phone : e.target.phone.value,
            email : e.target.email.value,
            birthdate : e.target.birthdate.value,
            address : e.target.address.value
        }

        
        if ( parseInt(documentSelect.current.value) === documentTypes.BARANGAY_CLEARANCE ) {
            data['purpose'] = e.target.purpose.value;
            data['purok'] = e.target.purok.value;
        }
        
        if ( parseInt(documentSelect.current.value) === documentTypes.BUSSINESS_CLEARANCE ) {
            data['bussiness_name'] = e.target['bussiness-name'].value;
            data['bussiness_address'] = e.target['bussiness-address'].value;
            data['bussiness_description'] = e.target['bussiness-description'].value;
        }

        if ( parseInt(documentSelect.current.value) === documentTypes.CERTIFICATE_OF_RESIDENCY ) {

        }

        field.current.disabled = true;

        sendDocumentRequest( data, ( response ) => {
            form.current.reset();
            field.current.disabled = false;
            dispatch({
                type : requestPortalActions.ID,
                payload : response.id
            });
        } );
    }

    const [ open, setOpen ] = useState(false);

    return (
        <div className="page"
            id={styles['document-request-portal-page']}    
        >
            <Head>
                <title>Barangay SanJose | Document Request Service</title>
                <meta name="description" content="Barangay SanJose Official Website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <PageTitle title={"Document Request Portal - Request"} setOpen={setOpen} open={open} />
                <form ref={form} onSubmit={requestOnSubmit} >
                    <fieldset ref={field} className={styles["fieldset-container"]} >
                        <p className={styles['note']} >Note : All fields with (<span className={styles['amp']} >*</span>) is mandatory.</p>
                        <select ref={documentSelect} name="document-type"
                                onChange={( e ) => changeDocumentType( e.target.value )}
                        >
                            <option value={documentTypes.BARANGAY_CLEARANCE}>Barangay Clearance</option>
                            <option value={documentTypes.BUSSINESS_CLEARANCE}>Bussiness Clearance</option>
                            <option value={documentTypes.CERTIFICATE_OF_RESIDENCY}>Certificate of Residency</option>
                            <option value={documentTypes.CEDULA}>Cedula</option>
                        </select>
                        {state.inputs}
                    </fieldset>
                    <div ref={codeCon} className={`${styles["response-id-container"]} ${state.id !== null ? styles['show'] : ``}`}>
                        <button type="button"
                                onClick={() => {
                                    dispatch({
                                        type : requestPortalActions.ID,
                                        payload : null
                                    });
                                }}
                        >Close</button>
                        <button type="button"
                                onClick={async () => {
                                    try {
                                        await navigator.clipboard.writeText(idSpan.current.innerHTML);
                                    } catch ( err ) {
                                        console.error(err);
                                    }
                                }}
                        >Copy</button>
                        <p>Request Succesfully sent.</p>
                        <div className={styles["code-wrapper"]} >
                            <span
                                ref={idSpan}
                                onClick={( e ) => {
                                    toPng( codeCon.current )
                                    .then( function (dataUrl) {
                                        download( dataUrl, `request-code-${state.id}.png` );
                                    } );
                                }}
                            >{state.id}</span>
                        </div>
                        <p>Note : <strong> Please download the code for later uses.</strong> <br /> Click the code to download.</p>
                    </div>
                </form>

            </main>
            <RightMenu setOpen={setOpen} open={open}/>
        </div>
    );
}