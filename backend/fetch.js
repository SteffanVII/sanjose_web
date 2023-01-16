export function fetchBanners( callback ) {
    let xhr = new XMLHttpRequest();

    xhr.open( "GET", "http://localhost:5000/public/fetchbanners" );
    xhr.onreadystatechange = () => {
        if ( xhr.readyState === 4 ) callback( xhr.status, JSON.parse(xhr.response) );
    }
    xhr.send();
}

export function fetchEvents( callback ) {
    let xhr = new XMLHttpRequest();

    xhr.open( "GET", "http://localhost:5000/public/fetchevents" );
    xhr.onreadystatechange = () => {
        if ( xhr.readyState === 4 ) callback( xhr.status, JSON.parse(xhr.response) );
    }
    xhr.send();
}