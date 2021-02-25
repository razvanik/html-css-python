// luam paragraful cu id-ul redplanet intr-o variabila

var planet = document.getElementById("redplanet")
var planet1 = document.getElementById("blueplanet")

planet.innerText = "Aliens landed on Mars"
planet.classList.add("alert", "alert-danger")

planet1.classList.add("alert","alert-warning")