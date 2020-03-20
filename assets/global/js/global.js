$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $('.navbar-burger').click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $('.navbar-burger').toggleClass('is-active')
    $('.navbar-menu').toggleClass('is-active')
  })
})

// script for announcement state saving
const lastClosed = parseInt(localStorage.getItem('lastClosed'))

if (typeof announcementId !== 'undefined' &&
  announcementId != -1 && // if there is an announcemnet
  !(lastClosed != NaN && lastClosed >= announcementId) // if the announcement has not been closed before
) {
  $('#announcement').show()
  $('#announcement').scroll()

  $('#close-announcement').click(() => {
    localStorage.setItem('lastClosed', announcementId)
    $('#announcement').hide()
  })
}
