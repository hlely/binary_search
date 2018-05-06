const axios = require('axios');
const config = require('./config.js');

function getWeather(city){
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${config.WEATHER_TOKEN}`
    ).then(results => {
        console.log(results.data);
        return [{
            type: 'text',
            content : `Here's what i found :\
            \n${results.data.name} : ${results.data.weather[0].description}, ${Math.floor(results.data.main.temp - 273.15)} °C`,
        }];
    }).catch(err =>{
        console.log("BIG ERROR");
        console.log(err);
        return [{
            type: 'text',
            content : `I'm sorry, i couldn't get the weather for ${city}...`,
        }];
    });
}

module.exports = getWeather;