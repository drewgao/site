$('#checkButton').click(() => {
  var email = $('#email').val()
  var name = $('#name').val()
  var check

  // information validation
  if (!validateEmail(email)) {
    $('#email').addClass('is-danger')
    return
  } else $('#email').removeClass('is-danger')

  if (name == '') {
    $('#name').addClass('is-danger')
    return
  } else $('#name').removeClass('is-danger')

  $('#checkButton').addClass('is-loading')
  $.ajax({
    url: 'https://hydra.executebig.org/api/grant/status',
    data: {name: name, email: email},
    dataType: 'json',
    success: data => {
      $('#checkButton').removeClass('is-loading')

      var updated = new Date(Date.parse(data['updated'])).toLocaleDateString(
        'en-US',
        {
          hour: 'numeric',
          minute: 'numeric',
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      )
      $('#status-form').html(
        `<h1 class="title">Hi ${name},</h1><p>Thanks for your Travel Grant application to <strong>${data['event']}</strong>!</p>${data['html']}`
      )

      if (data['amount']) {
        $('#status-form').append(
          `<p>Your approved maximum amount of Travel Grant is <strong>$${data['amount']}</strong>. You're subject to the Travel Grant Student 
          Agreement (emailed) when booking your travel for the event. If you have any questions, please reach out to us via email: <a href="mailto:team@executebig.org">team@executebig.org</a>.</p>`
        )
      }

      $('#status-form').append(
        `<p>Your information was last updated at <strong>${updated}</strong>.</p>
        <p class="has-text-right"><strong>—Execute Big Team</strong><br /><small><code class="is-hint">ID: ${data['id']}</code></small></p>`
      )
    },
    error: err => {
      $('#checkButton').removeClass('is-loading')
      if (err.status == 404 || err.status == 403) {
        $('#status-form').html(
          `<h1 class="title">${err.status}: Data Error</h1><p>We cannot find your information in the database. Please note that email address is <strong>case-sensitive</strong>, 
          and you must enter your name as-typed on the application form for verification. If you believe that this is an error, please <a href="mailto:team@executebig.org">email us</a>.</p>`
        )
      } else {
        $('#status-form').html(
          `<h1 class="title">${err.status}: Unknown Server Error</h1><p>This is very likely on us, but we have no idea what just happened. Please <a href="mailto:team@executebig.org">email us</a>
          if you have any questions.</p>`
        )
      }
    }
  })
})

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
