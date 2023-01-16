import { useEffect, useLayoutEffect } from "react";

export function useClassToggle( className, condition ) {
    return `${className}${condition ? `-show` : ``}`;
}

export function useClickOutside( rootElement, callback ) {

    const func = (e) => {
        if ( !rootElement.contains(e.target) ) {
            callback();
        }
    }

    document.addEventListener('click', func);

    return () => {
        document.removeEventListener('click', func);
    }
}

export function parseMonth( num ) {
    switch (num) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            return;
    }
}