let cities = [
    {
        name: "New York City, NY",
        latitude: 40.7561,
        longitude: -73.9832
    },

    {
        name: "Nashville, TN",
        latitude: 36.1631,
        longitude: -86.7837
    },

    {
        name: "New Orleans, LA",
        latitude: 29.9192,
        longitude: -90.1083
    },

    {
        name: "Austin, TX",
        latitude: 30.2708,
        longitude:  -97.7413
    },

    {
        name: "Santa Clarita, CA",
        latitude: 34.3900, 
        longitude: -118.5423
    },
];


window.onload = function() {

    cityListDropdown();

    const cityList = document.getElementById("cityList");
    const infoContainer = document.getElementById("infoContainer");

    cityList.onchange = cityChange
}

function cityListDropdown(){
    const cityList = document.getElementById("cityList");

    for (let i = 0; i < cities.length; i++) {
        let option = new Option(cities[i].name)

        cityList.appendChild(option);
    }
}

function cityChange(){
    let infoContainer = document.getElementById("infoContainer");
    let cityListChoice = document.getElementById("cityList").value

    infoContainer.innerHTML = " "

    for (let i=0; i < cities.length; i++){
        let stationLookupUrl =`https://api.weather.gov/points/${cities[i].latitude},${cities[i].longitude}`;
        if (cityListChoice == cities[i].name){
            infoContainer.innerHTML = stationLookupUrl
            
        }

    }
}