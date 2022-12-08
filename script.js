
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4432b72749msh5ff315221d0fe02p1134c5jsn173b03c8fa0d',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
function getWeather(city) {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then((response) => {
            temp.innerHTML = response.temp
            humidity.innerHTML = response.humidity
            feels_like.innerHTML = response.feels_like
            wind_speed.innerHTML = response.wind_speed
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
        })
        .catch(err => console.error(err));
}
getWeather("Lahore")

let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let searchQuery = search.value
    city.innerHTML = searchQuery
    getWeather(searchQuery)
    search.value = ""
})
