// index.js
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');
const getWeather = require('./bot.js');

const app = express();
app.use(bodyParser.json());

app.post('/errors', (req, res) => {
   console.error(req.body);
   res.sendStatus(200); 
});

app.post('/bot', (req, res) => {
    console.log("Message recieved");
    const memory = req.body.conversation.memory;
    const location = memory.location;

    const city = location.raw;
    console.log(city);
    return getWeather(city).then((text) => res.json({
        replies: text,
        conversation: {
            memory: { key: 'value' }
        }
    }));
});

app.listen(config.PORT, () => console.log(`App started on port ${config.PORT}`));
