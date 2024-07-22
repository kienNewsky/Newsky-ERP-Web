function genTableBody(tableData) {
    const segmentTable = document.getElementById("segmentTable");
    segmentTable.replaceChildren();

    let mlength = tableData.length
    for (let i = 0; i < mlength; i++) {
        let tr = document.createElement("tr")
        let tdSTT = document.createElement("td")
        tdSTT.textContent = i + 1
        tr.appendChild(tdSTT)
        let tdSegmentName = document.createElement("td")
        tdSegmentName.className = "text-primary"
        tdSegmentName.textContent = tableData[i].segmentName
        tdSegmentName.addEventListener("click", function () {
            alert("Click on ID: " + tableData[i].id)
        })
        tr.appendChild(tdSegmentName)
        segmentTable.appendChild(tr)
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    const token = document.getElementById("token").value;
    const username = getCookie("username")
    const sqlHost = "http://123.31.12.44:8080";

    const segmentTable = document.getElementById("segmentTable");

    asyncFetch("GET", sqlHost, "/produce-service/segment", token, username)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(`Response status: ${response.status}`);
            }
        })
        .then(data => {
            genTableBody(data)
        })
        .catch(e => console.log(e))

    // fetch("http://123.31.12.44:8080/produce-service/segment", {
    //     headers: {
    //         "Authorization": `Bearer ${token.value}`,
    //         "Content-Type": "application/json",
    //         "UserName": "tung"
    //     }
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         let str = ""
    //         let length = data.length;
    //         for (i = 0; i < length; i++) {
    //             str += `
    //                 <tr>
    //                     <td>${i + 1}</td>
    //                     <td>${data[i].segmentName}</td>
    //                 </tr>
    //             `
    //         }
    //         segmentTable.innerHTML = str;
    //     })
    //     .catch(e => console.log(e));
});