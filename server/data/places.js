
const placesDetails = {
  1: {
    rating: {
      visual: 5,
      fisica: 5,
      auditiva: 3.5
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
      fisica: 0,
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
  },
  3: {
    rating: {
      visual: 4.5,
      fisica: 4,
      auditiva: 0
    },
    comments: [
      {
        author: "Fulano",
        condition: {
          visual: true,
          fisica: false,
          auditiva: false
        },
        text: "Acessível e interessante!",
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
        rating: 3
      },
      {
        author: "Pessoa gente boa",
        condition: {
          visual: false,
          fisica: true,
          auditiva: false
        },
        text: "Muito acessivel para pessoas com deficiência fisica",
        rating: 5
      },
    ]
  }, 
  4: {
    rating: {
      visual: 4.5,
      fisica: 4,
      auditiva: 0
    },
    comments: [
      {
        author: "Fulano",
        condition: {
          visual: true,
          fisica: false,
          auditiva: false
        },
        text: "Acessível e interessante!",
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
        rating: 3
      },
      {
        author: "Pessoa gente boa",
        condition: {
          visual: false,
          fisica: true,
          auditiva: false
        },
        text: "Muito acessivel para pessoas com deficiência fisica",
        rating: 5
      },
    ]
  }
}

const placesHeaders= [
  {
    id: 1,
    name: "Cinema Tal",
    address: "Rua Qualquer, 41 - Centro, São Paulo",
    accessibility: {
      visual: true,
      fisica: true,
      auditiva: true
    },
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 2,
    name: "Pinacoteca de São Paulo",
    address: "Praça da Luz - Luz, São Paulo",
    accessibility: {
      visual: true,
      fisica: false,
      auditiva: true
    },
    image: "https://skyscanner-prod-trippy-public.s3.amazonaws.com/photos/v7/qF/1466831973/Pinacoteca_do_Estado_de_S-Pinacotheca_of_the_state_-20000000009506235-500x375.jpg",
  },
  {
    id: 3,
    name: "Museu do Tadeu",
    address: "Rua dos museu, 123 - Tatuapé - São Paulo - SP",
    accessibility: {
      visual: true,
      fisica: false,
      auditiva: true
    },
    image: "https://images.unsplash.com/photo-1601319839981-e5b7986cf461?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
  },
  {
    id: 4,
    name: "Cinemark Santa Cruz",
    address: "Rua Domingos de Morais, 2564 - Vila Mariana, São Paulo",
    accessibility: {
      visual: true,
      fisica: true,
      auditiva: true
    },
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  },
];

module.exports = {placesHeaders, placesDetails};