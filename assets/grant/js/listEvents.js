const eventData = JSON.parse(rawEventData)[0]["records"]
for (var i = 0; i < Object.keys(eventData).length; i++) {
    document.getElementById("event-list").insertAdjacentHTML("beforeend", `
    <li>
        <a href="${eventData[i]["fields"]["Website"]}?ref=executebig-grant" target="_blank">${eventData[i]["fields"]["Event Name"]}</a>
    </li>
    `)
}

document.getElementById("event-list-updated").innerHTML = dataTimestamp;
document.getElementById("event-list-count").innerHTML = Object.keys(eventData).length + "+";