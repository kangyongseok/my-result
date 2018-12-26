// Open Weaher API : https://openweathermap.org/

const weather = document.querySelector('.js-weather');

const API_KEY = "ccba5abbb60f9eab32f734bd10f21ef3";
const COORDS = 'coords';

function getWeather (lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}℃ @ ${place}`;
    })
}

function saveCoords (coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess (position) {
    const lat = position.coords.latitude ;
    const long = position.coords.longitude ;
    const coordsObj = {
        lat,
        long
    };
    saveCoords(coordsObj);
    getWeather(lat, long);
}

function handleGeoError () {
    console.log('Canr Access geo location');
}

function askForCoords () {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords () {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.lat, parseCoords.long);
    }
}

function init () {
    loadCoords();
}

init();