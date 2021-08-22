const express = require('express');
const { json, urlencoded } = require('body-parser');
const cors = require('cors');
const app = express();

const { placesHeaders, placesDetails } = require('./data/places');
const groups = require('./data/groups');

app.use(cors());
app.use(json());
app.use(urlencoded({extended: true}));

app.get("/equipe", (req, res) => {

  return res.send("A Equipé é soda!!!");

});


app.get("/locais", (req, res) => {

  const { q, accessibility } = req.query;

  if(!placesHeaders) return res.status(404).send({message: "Nenhum lugar encontrado!"});

  const accessibilityList = accessibility.split(",");

  if(q){
    const filteredPlaces = placesHeaders.filter((place) => (place.name.toLowerCase().includes(q.toLowerCase())));

    return res.status(200).send(filteredPlaces);
  }

  return res.status(200).send(placesHeaders);

});

app.get("/locais/:id", (req, res) => {

  const { id } = req.params;

  if(!placesDetails[id]) return res.status(404).send({message: "Nenhum lugar encontrado com esse id!"});

  return res.status(200).send(placesDetails[id]);

})

app.get("/grupos", (req, res) => {

  return res.status(200).send(groups);

});

app.get("/grupos/:id", (req, res) => {

  const { id } = req.params;

  const group = groups.filter((group) => ( group.id === parseInt(id) ));

  if(group){
    return res.status(200).send(group[0]);
  }

  return res.status(404).send({message: "Grupo não encontrado!"});

});


port = process.env.PORT | 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
