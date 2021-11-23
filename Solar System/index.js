// 1) npm init
// 2) npm i express ejs
// fetch data from api package - npm i node-fetch@2.6
const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
  //  res.send('Hello Express app!')
   res.render("home")
});

app.get('/mercury', (req, res) => {
  //  res.send('Hello Express app!')
   res.render("mercury")
});

app.get('/venus', (req, res) => {
  //  res.send('Hello Express app!')
   res.render("venus")
});

app.get('/mars', (req, res) => {
  //  res.send('Hello Express app!')
   res.render("mars")
});

app.get('/earth', (req, res) => {
  //  res.send('Hello Express app!')
   res.render("earth")
});

app.get('/nasa_pic', async (req, res) => {
  let url = "https://api.nasa.gov/planetary/apod?api_key=9mUzIkhlZCZaOoMfspg7jMmwZCZ4LiRHtkgkambD&date=2021-10-14"

  let response = await fetch(url);
  let data = await response.json();
  let nasa_pic = data.url;
  let description = data.explanation;

  res.render("nasa_pic", {"images": nasa_pic, "imageTxt": description });
});

app.listen(3000, () => {
   console.log('server started');
});