const express = require('express');
const { json, urlencoded } = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({extended: true}));

app.get("/equipe", (req, res) => {

  return res.send("A Equipé é foda!!!");

});

app.get("/locais", (req, res) => {

  return res.send("locais");

});


port = process.env.PORT | 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
