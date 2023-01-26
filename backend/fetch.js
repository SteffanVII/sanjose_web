export function fetchBanners( callback ) {
    let xhr = new XMLHttpRequest();

    xhr.open( "GET", "https://api.barangaysanjose.website/public/fetchbanners" );
    xhr.onreadystatechange = () => {
        if ( xhr.readyState === 4 ) callback( xhr.status, JSON.parse(xhr.response) );
    }
    xhr.send();
}

export function fetchEvents( callback ) {
    let xhr = new XMLHttpRequest();

    xhr.open( "GET", "https://api.barangaysanjose.website/public/fetchupcomingevents" );
    xhr.onreadystatechange = () => {
        if ( xhr.readyState === 4 ) callback( xhr.status, JSON.parse(xhr.response) );
    }
    xhr.send();
}