export function sendDocumentRequest( data, callback ) {

    let xhr = new XMLHttpRequest();

    xhr.open( 'POST', 'https://api.barangaysanjose.website/requests/requesting' );
    xhr.setRequestHeader( 'content-type', 'application/json' );
    xhr.onreadystatechange = () => {
        if ( xhr.readyState === 4 && xhr.status === 200 ) {
            callback( JSON.parse(xhr.response) );
        }
    }
    xhr.send(JSON.stringify(data));

}

export function checkRequestStatus( id, callback ) {

    let xhr = new XMLHttpRequest();

    xhr.open( "POST", "https://api.barangaysanjose.website/requests/checking" );
    xhr.setRequestHeader( "content-type", "application/json" );
    xhr.onreadystatechange = () => {
        if ( xhr.readyState === 4 && xhr.status === 200 ) {
            callback( JSON.parse(xhr.response) );
        }
    }
    xhr.send(JSON.stringify({ id : id }));
}