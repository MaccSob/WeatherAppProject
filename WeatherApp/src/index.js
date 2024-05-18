
const button = document.querySelector('button');
const city = document.querySelector('#weather').value;

console.log(city);




async function getWeather() {

const response = await fetch(`http://api.weatherapi.com/v1/search.json?key=3c7acc06e2dc4fcfb39214313241505&q=${city}`)
const data = await response.json();
console.log(data);
}
button.addEventListener("click", getWeather());
