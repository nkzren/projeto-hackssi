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
  const { q, filters } = req.query;

  if(!placesHeaders) return res.status(204).send({message: "Nenhum lugar encontrado!"});

  // const filterList = filters && filters.split(",") || [];

  // const filteredPlaces = placesHeaders.filter((place) => {
  //   for(let item of accessibilityList) {
  //     if(place.accessibility[item]) {
  //       return true;
  //     }
  //   }
  //   return false;
  // })
  const query = q && q.toLowerCase() || '';
  if (query) {
    return res.status(200).send(placesHeaders.filter(e => e.name.toLowerCase().includes(query.toLowerCase())));
  } else {
    return res.status(200).send(placesHeaders);
  }

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
