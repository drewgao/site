const urlParams = new URLSearchParams(window.location.search)
const customEvent = urlParams.get("event")

if (customEvent) {
    $("#page-title").addClass("custom")
    $("#page-title").html(`Travel to <strong>${customEvent}</strong> For Free`)
    $("#page-subtitle").html(`<strong>Travel Grant</strong> is a scholarship awarded to <strong>passionate</strong> high school hackers <strong>in need</strong>,
    giving them the opportunity to attend awesome events like <strong>${customEvent}</strong>.`)
}