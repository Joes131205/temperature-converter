const celciusEL = document.getElementById("celcius")
const kelvinEl = document.getElementById("kelvin")
const farenEl = document.getElementById("farenheit")

function celtokel() {
    kelvinEl.value = (Number(celciusEL.value) + 273.15).toFixed(2)
}

function celtofaren() {
    farenEl.value = (Number(celciusEL.value) * 9/5 + 32).toFixed(2)
}

function keltocel() {
    celciusEL.value = (Number(kelvinEl.value) - 273.15).toFixed(2)
}

function keltofaren() {
    farenEl.value = ((Number(kelvinEl.value) - 273.15) * 9/5 + 32).toFixed(2)
}

function farentocel() {
    celciusEL.value = ((Number(farenEl.value) - 32) * 5/9).toFixed(2)
}

function farentokel() {
    kelvinEl.value = ((Number(farenEl.value) - 32) * 5/9 + 273.15).toFixed(2)
}