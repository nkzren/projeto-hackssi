const groups = [
  {
    id: 1,
    title: "Lugares bonitos em SP",
    themes: [
      {
        title: "Sugestões de lugares para assistir filmes",
        text: "Queria ver um filme, mas tem que ser em Sâo Paulo com audiodescrição. Alguém já foi?",
        author: "Alguem",
        accessibility: {
          visual: false,
          fisica: true,
          auditiva: false
        },
        answers: [
          {
            author: "Fulano Ciclano",
            text: "Assisti x filem nesse shopping! Muito acessível, piso tátil e audiodescrição com fone. Posso ir junto?",
            place: 1, 
          }
        ]
      }
    ]
  },
];

module.exports = groups;