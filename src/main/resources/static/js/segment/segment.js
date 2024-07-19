function getCookie1(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            let cookieValue = c.substring(name.length, c.length);
            console.log(`Cookie found: ${cookieValue}`);
            return cookieValue;
        }
    }
    console.log("Cookie not found");
    return "";
}


document.addEventListener("DOMContentLoaded", (event) => {
    const segmentTable = document.getElementById("segmentTable");
    console.log("JWT Cookie: ", getCookie("JWT_TOKEN"));
    console.log("Document Cookies: ", document.cookie);

    fetch("http://123.31.12.44:8080/produce-sevice/segment", {
        headers: {
            // "Authorization": `Bearer ${getCookie("JWT_TOKEN")}`
            credentials: 'include',
            "Access-Control-Allow-Credentials": true
        }
    })
        .then(response => response.json())
        .then(data = console.log(data))
        .catch(e => console.log(e));
});