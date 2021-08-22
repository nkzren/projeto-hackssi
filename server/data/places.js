
const placesDetails = {
  1: {
    rating: {
      visual: 5,
      fisica: 5,
      auditiva: 3
    },
    comments: [
      {
        author: "Fulano",
        condition: {
          visual: true,
          fisica: false,
          auditiva: false
        },
        text: "Gostei. muito acessivel",
        rating: 5
      },
      {
        author: "Someone",
        condition: {
          visual: false,
          fisica: true,
          auditiva: false
        },
        text: "Gostei. muito acessivel",
        rating: 5
      },
      {
        author: "Pessoa gente boa",
        condition: {
          visual: false,
          fisica: false,
          auditiva: true
        },
        text: "Gostei, mas nem tanto acessivel para pessoas com deficiência auditiva",
        rating: 3
      },
    ]
  },
  2: {
    rating: {
      visual: 4.5,
      fisica: 4,
      auditiva: 5
    },
    comments: [
      {
        author: "Fulano",
        condition: {
          visual: true,
          fisica: false,
          auditiva: false
        },
        text: "Gostei. muito acessivel",
        rating: 4.5
      },
      {
        author: "Someone",
        condition: {
          visual: true,
          fisica: false,
          auditiva: false
        },
        text: "Gostei. muito acessivel",
        rating: 4
      },
      {
        author: "Pessoa gente boa",
        condition: {
          visual: false,
          fisica: false,
          auditiva: true
        },
        text: "Muito acessivel para pessoas com deficiência auditiva",
        rating: 5
      },
    ]
  }
}

const placesHeaders= [
  {
    id: 1,
    name: "Cinema tal",
    address: "Rua alguma, 234 - Centro - São Paulo - SP",
    accessibility: {
      visual: true,
      fisica: true,
      auditiva: true
    },
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 2,
    name: "Lanches do Geferson",
    address: "Rua nao sei, 555 - Liberdade - São Paulo - SP",
    accessibility: {
      visual: true,
      fisica: false,
      auditiva: true
    },
    image: "https://images.unsplash.com/photo-1609534655988-3f5225c13553?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZXRlcmlhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
];

module.exports = {placesHeaders, placesDetails};