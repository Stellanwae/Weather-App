const aboutNav = document.getElementById("link-about")
const modalLink = document.getElementById("modal")
const cancelButton = document.getElementById("cancelAbout")
let cloudpct = document.getElementById("precipitationvalue")
let humidity = document.getElementById("humidityvalue")
let wind = document.getElementById("windvalue")
let inputEl = document.getElementById("input-el")
let buttonEl = document.getElementById("button-el")
let picture = document.getElementById("main-picture")
let currentLocation = document.getElementById("current-location-value")
let cloudRender = document.getElementById("cloud-render")
let linkContact = document.getElementById("link-contact")
const coffeeBtn = document.querySelector(".coffee-button")
const cancelCoffee = document.getElementById("can-btn")
const aboutModal = document.getElementById("about-modal")
const aboutCancelBtn = document.getElementById("about-canel-btn")
const contactCancel = document.getElementById("contactCancel")
//about us modal page 
aboutNav.addEventListener("click", function() {
  aboutModal.showModal()
})

aboutCancelBtn.addEventListener("click", function() {
  aboutModal.close()
})
//contact us modal 

linkContact.addEventListener("click", function() {
  contactModal.showModal()
})
contactCancel.addEventListener("click", function() {
  contactModal.close()
})

//buy me a coffee modal
coffeeBtn.addEventListener("click", function() {
  modalLink.showModal()
})

cancelCoffee.addEventListener("click", function() {
  modalLink.close()
})



 //Unsplash images API
let requestPictures = {
    method: 'GET',
    redirect: 'follow'
  };

// function to render picture from api
function renderPicture() { 
  fetch(`https://api.unsplash.com/search/photos?query=${inputEl.value}&client_id=bH1wAkUgvPyBNGKHRuGc7fgTminQz_lAKrUvBpje9yU`, requestPictures)
    .then(response => response.json())
    .then((result) => {
      let urlArray = result.results[0].urls.regular
      picture.innerHTML = `<img src=${urlArray}>`
      
    })
    .catch(error => console.log('error', error));
}

let myHeaders = new Headers();
myHeaders.append("X-Api-Key", "o71IHicXblHeovfGE0J0pA==FqM55J7liunZHpmV");
let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

//function to render weather from api
function renderWeather() {
  fetch("https://api.api-ninjas.com/v1/weather?city=" + inputEl.value, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    console.log(result.wind_speed)
    console.log(result.temp)
    cloudpct.innerHTML = `${result.cloud_pct} okta`
    humidity.innerHTML = `${result.humidity} %`
    wind.innerHTML = `${result.wind_speed} km\hr`
    if (result.humidity < 50) {
      picture.innerHTML += `<h1 style="color: #fff; position: absolute; top: 5px; right: 5px; font-size: 3rem;"><i class="bi bi-brightness-high-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
      <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
    </svg><span style="font-size: 20px;">${result.temp}℃<span></h1>`
      console.log('sun')
      
    } else if (result.humidity >= 50 && result.humidity <= 60) {
      picture.innerHTML += `<h1 style="color: #fff; position: absolute; top: 5px; right: 5px; font-size: 3rem;"><i class="bi bi-cloud-sun-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cloud-sun-fill" viewBox="0 0 16 16">
      <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>
      <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
    </svg><span style="font-size: 20px;">${result.temp}℃<span></h1>`
      console.log('cloud and sun')
    } else if (result.humidity >= 61 && result.humidity <= 90) {

      picture.innerHTML += `<h1 style="color: #fff; position: absolute; top: 5px; right: 5px; font-size: 3rem;"><i class="bi bi-clouds-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-clouds-fill" viewBox="0 0 16 16">
      <path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5z"/>
      <path d="M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z"/>
    </svg><span style="font-size: 20px;">${result.temp}℃<span></h1>`
    console.log('cloud')
    }else {
      picture.innerHTML += `<h1 style="color: #fff; position: absolute; top: 5px; right: 5px; font-size: 3rem;"><i class="bi bi-cloud-rain-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cloud-rain-fill" viewBox="0 0 16 16">
      <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"/>
    </svg><span style="font-size: 20px;">${result.temp}℃<span></h1>`
    console.log('rain')
    }
  })
  .catch(error => console.log('error', error));
}

//Geoplugin API for location
//currentLocation.innerHTML = geoplugin_city()
console.log(geoplugin_city())

//Local location render
/*
*This section renders all the info
* about the current location of the user
*/

//cloud
//time
const timeNow = new Date()
let currentTime = timeNow.toLocaleTimeString()
document.getElementById("time").innerHTML = currentTime

console.log(currentTime)
//date
document.getElementById("date").innerHTML = timeNow.toLocaleDateString()
//temperature
fetch("https://api.api-ninjas.com/v1/weather?city=" + geoplugin_city(), requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    console.log(result.wind_speed)
    console.log(result.temp)
    let tempArea = document.getElementById("temperature")
    //document.getElementById("temperature").innerHTML = result.temp + "℃"
    if (result.humidity < 50) {
      tempArea.innerHTML += `<i class="bi bi-brightness-high-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
      <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
    </svg><span style="font-size: 20px;">${result.temp}℃<span>`
      console.log('sun')
      
    } else if (result.humidity >= 50 && result.humidity <= 60) {
      tempArea.innerHTML += `<i class="bi bi-cloud-sun-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cloud-sun-fill" viewBox="0 0 16 16">
      <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>
      <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
    </svg><span style="font-size: 20px;">${result.temp}℃<span>`
      console.log('cloud and sun')
    } else if (result.humidity >= 61 && result.humidity <= 90) {

      tempArea.innerHTML += `<i class="bi bi-clouds-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-clouds-fill" viewBox="0 0 16 16">
      <path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5z"/>
      <path d="M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z"/>
    </svg><span style="font-size: 20px;">${result.temp}℃<span>`
    console.log('cloud')
    }else {
      tempArea.innerHTML += `<i class="bi bi-cloud-rain-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cloud-rain-fill" viewBox="0 0 16 16">
      <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"/>
    </svg><span style="font-size: 20px;">${result.temp}℃<span>`
    console.log('rain')
    }
    }
  )
  .catch(error => console.log('error', error));

//city

document.getElementById("city").innerHTML = geoplugin_city()

//country
document.getElementById("country").innerHTML = geoplugin_countryName()

//search button event listener
buttonEl.addEventListener("click", function() {
  renderWeather()
  renderPicture()
  currentLocation.innerHTML = inputEl.value.toUpperCase()
  console.log(geoplugin_city())
})


const now = new Date()

const currentTime2 = now.toLocaleTimeString()
console.log(currentTime)