const http = require('http');
const axios = require('axios');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  axios.all([
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=371f668ca7a2429f03ec4e1032b75741'),
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Oran&appid=371f668ca7a2429f03ec4e1032b75741'),
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=New york&appid=371f668ca7a2429f03ec4e1032b75741'),

  ])
  .then(responseArr => {
    //this will be executed only when all requests are complete
    console.log('Paris: ', responseArr[0].data.weather);
    console.log('Oran: ', responseArr[1].data.weather);
    console.log('New york: ', responseArr[2].data.weather);
   
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});