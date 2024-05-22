var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var cityname = document.querySelector('#cityname')
var pressure = document.querySelector('#pressure');
var humidity = document.querySelector('#humidity');
var category = document.querySelector('.category')

const weatherD = document.querySelector('#weather');
const button = document.querySelector('button');
const apiKey = '24b17c0eac6ec17765a51e4e7f68330a'


button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+weatherD.value+'&appid='+apiKey+'&lang=pl')
  .then(res => res.json())
  .then(data => {
      var nameval = data['name']
      var temperature = data['main']['temp']
      var descrip = data['weather']['0']['description']
      var wndspd = data['wind']['speed']
      var press = data['main']['pressure']
      var hum = data['main']['humidity']
      console.log(data);




      document.body.setAttribute("category", descrip);




    temp.innerHTML = `Temperatura: ${(Math.round(temperature - 273.15))}`+ 'C°';
      cityname.innerHTML=`Nazwa: ${nameval}`
      description.innerHTML = `Zachmurzenie: ${descrip}`
      wind.innerHTML = `Wiatr: ${wndspd} km/h`
      pressure.innerHTML = `Ciśnienie: ${press}` + 'hpa'
    humidity.innerHTML = `Wilgotność: ${hum}` + '%'
  })


  
})