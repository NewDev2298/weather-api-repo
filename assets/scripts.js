// We want to capture the USER INPUT
// --> GRAB reference to the FORM or INPUT element (from HTML)
// --> ELEMENT.addEventListener('event'), callback function (what happens when the user clicks the BUTTON?) 

// -- IMPLEMENT AND TEST -- //


// We make a request for data (based on the USER input)
// --> 1.) format the request
// --> 2.) deal with that data
// --> 3.) Add user input to SEARCHED CITIES list


// 1.) fetchAPI 
/*
let url = "";  // address or endpoint 
fetch(url)   // kick off our REQUEST
    .then()
    .then()
*/

fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log("Response: ", response);
        return response.json()
      })  // parseing the data (JSON)
      .then(data => {
          console.log("Data: ", data)  // this should be a JS OBJECT
          console.log(typeof data);
          
        // 2.) Dig into the RESPONSE DATA (object/array/{})
        let userName = data[0].name;
        console.log(userName);

        // callAnotherFunction(data)

        // IF WE NEED THE DATA from the first request to make a SECOND REQUEST - IN THE (CALLBACK) FUNCTION SCOPE

        // 3.) UPDATE THE VIEW / DOM with our returned data
        // --> btn.textContent = data[0].name
      });

console.log("I am code after our fetch request...")


// ADD user city input to HISTORY (localStorage)
// Dynamically create new CARDS(?)
let historyContainer = document.querySelector(".history")

// historyContainer.append(newElement)
      // --> When the user clicks the button
      // --> Capture the VALUE (from the button/ELEMENT)
      // --> Using that value MAKE a NEW REQUEST