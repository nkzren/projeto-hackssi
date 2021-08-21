const places = [
  {
    name: "Cinema tal",
    address: "Rua alguma, 234 - Centro - São Paulo - SP",
    accessibility: {
        visual: true,
        fisica: true,
        auditiva: true
      },
    note: 5,
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    comments: [
      {
        author: "Fulano",
        condition: {
          visual: true,
          fisica: false,
          auditiva: false
        },
        text: "Gostei. muito acessivel",
        note: 5
      },
      {
        author: "Someone",
        condition: {
          visual: false,
          fisica: true,
          auditiva: false
        },
        text: "Gostei. muito acessivel",
        note: 5
      },
    ] 
  },
  {
    name: "Lanches do Geferson",
    address: "Rua nao sei, 555 - Liberdade - São Paulo - SP",
    accessibility: {
        visual: true,
        fisica: true,
        auditiva: true
      },
    note: 4.5,
    image: "https://images.unsplash.com/photo-1609534655988-3f5225c13553?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZXRlcmlhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    comments: [
      {
        author: "Fulano",
        condition: {
          visual: true,
          fisica: false,
          auditiva: false
        },
        text: "Gostei. muito acessivel",
        note: 5
      },
      {
        author: "Someone",
        condition: {
          visual: false,
          fisica: true,
          auditiva: false
        },
        text: "Gostei. muito acessivel",
        note: 5
      },
    ] 
  },
];

module.exports = places;