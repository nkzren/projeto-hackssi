<template>
  <v-container>
    <v-card class="rounded-xl ma-0" color="blocos" elevation="0">
      <v-row class="my-2 pa-0 align-center">
        <v-col class="pa-0" cols="4">
          <v-img width="30" class="ml-4 my-1 pa-0 rounded-circle align-self-center" aspect-ratio="1"
            :src="groupImgPath"
          />
        </v-col>
        <v-col class="pa-0" cols="8">
          <v-card-subtitle class="my-0 pa-0 font-weight-bold">{{ groupTitle }}</v-card-subtitle>
        </v-col>
      </v-row>
    </v-card>
    <v-col class="pa-0" cols="10">
      <v-card-title class="text-xl font-weight-bold">{{ themeTitle }}</v-card-title>
    </v-col>
    <v-card-subtitle class="font-weight-bold">{{ themeDescription }}</v-card-subtitle>
    <v-card-text class="text-h5">Respostas:</v-card-text>
    <v-card class="rounded-xl pb-2 px-2" color="#FFECD1" v-for="reply in replies" :key="reply.text">
      <v-card-title>{{ reply.author }}</v-card-title>
      <v-card-text>{{ reply.text }}</v-card-text>
      <v-card v-on:click="$router.push('/locais/1')" class="rounded-xl" elevation="0" color="blocos">
        <v-row class="my-2 pa-0 align-center">
        <v-col class="pa-0" cols="4">
          <v-img width="60" class="ml-4 my-1 pa-0 rounded-circle align-self-center" aspect-ratio="1"
            src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          />
        </v-col>
        <v-col class="pa-0" cols="8">
          <v-card-subtitle class="my-0 pa-0 font-weight-bold">Cinema Tal</v-card-subtitle>
        </v-col>
      </v-row>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      groupTitle: "Lugares bonitos em SP",
      groupImgPath: "https://images.unsplash.com/photo-1629627262826-7e2e7c4db12e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      themeTitle: "Sugestões de lugares para assistir filmes",
      themeDescription: "Queria ver um filme, mas tem que ser em São Paulo e com audiodescrição. Alguém já foi?",
      replies: [
        {
          author: "Fulano Ciclano",
          text: "Assisti sdasd nesse shopping! Muito acessível, piso tátil e audiodescrição com fone. Posso ir junto?",
        }
      ],
    }
  },
  methods: {
    async nextPage() {
      const response = await this.$axios.get("/locais");
      console.log(response);

      this.$router.push({ 
        path: `/locais/${local.id}`,
        query: {
          address: response[0].address,
          image: response[0].image,
          accessibility: Object.keys(response[0].accessibility).filter(key => response[0].accessibility[key] === true).join(),
          name: response[0].name
        },
      })
    }
  }
}
</script>