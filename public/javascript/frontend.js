$(document).ready(onload)

function onload() {
  console.log("onload funktion")
  const form = $('#newrecipyform')
  form.on('click', function(event) {
    console.log("ich bin eventlistener")
    event.stopPropagation()  
  })
  form.on('submit', function(event) {
    console.log("ich bin eventlistener2")
    event.preventDefault() 
    
  })
}


function createRecipy() {
    let Titel = $('#rezeptTitel').val()
    let rezeptBild = $('#rezeptBild').val()
    let data = {Titel: Titel, Pfad: rezeptBild}
    
    $.ajax({
      method: "POST",
      url: "/recipy",
      data: data
  
    })
    .done(function(result) {
      logger.log(result)
      Cookies.set("jwt", result)
      window.location.href = '/'
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      logger.log("POST/logindata failed", jqXHR, textStatus, errorThrown);
      $('#loginError').text(jqXHR.responseText);
  })  
}