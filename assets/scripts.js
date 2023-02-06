var apiKey = '6f697439403e6464a7966d48364fc0f5'
var searchBtnEl = document.querySelector('#searchBtn')
var cityInputEl = document.querySelector('#city-input')

// We want to capture the USER INPUT
// --> GRAB reference to the FORM or INPUT element (from HTML)
// --> ELEMENT.addEventListener('event'), callback function (what happens when the user clicks the BUTTON?) 

// -- IMPLEMENT AND TEST -- //


// We make a request for data (based on the USER input)
// --> 1.) format the request
// --> 2.) deal with that data
// --> 3.) Add user input to SEARCHED CITIES list

var cityWeather = function() {
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=35.22&lon=-80.84&appid=${apiKey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        })
}

var cityCoordinates = function(){
    
    var inputCity = cityInputEl

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputCity}&limit=5&appid=${apiKey}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    })

};

          

console.log("test...")



