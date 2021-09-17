<template>
  <v-container>
    <v-card class="rounded-xl" elevation="0">
      <v-row class="my-2 align-center">
        <v-col cols="4">
          <v-img class="card-img ml-4 rounded-circle align-self-center" aspect-ratio="1"
            :src="imgPath"
          />
        </v-col>
        <v-col cols="8">
          <v-card-text class="my-0 text-h3 font-weight-bold title">{{ groupTitle }}</v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <ComunidadeThemeItem
      class="my-5"
      v-for="tema in themes"
      v-on:click.native="nextPage"
      :key="tema.title"
      :title="tema.title"
      :availableAccessibility="tema.availableAccessibility"
    />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      groupTitle: "Lugares bonitos em SP",
      imgPath: "https://images.unsplash.com/photo-1629627262826-7e2e7c4db12e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      themes: [
      {
        title: "Sugestões de lugares para assistir filmes",
        availableAccessibility: ["fisica"]
      },
      {
        title: "Alguem quer fazer um rolê?",
        availableAccessibility: ["fisica", "visual"]
      },
      {
        title: "Prática de esportes paralímpicos",
        availableAccessibility: ["fisica", "auditiva", "visual"]
      },
      {
        title: "Sugestões de lugares para comer lanche",
        availableAccessibility: ["auditiva"]
      },
      {
        title: "Sugestões de lugares para baladar",
        availableAccessibility: ["fisica"]
      },
      {
        title: "Sugestões de lugares para assistir filmes",
        availableAccessibility: ["fisica"]
      },
    ]
    }
  },
  methods: {
    nextPage() {
      this.$router.push("/tema");
    }
  }
}
</script>

<style scoped>
.card-img {
  border-radius: 50%;
}
</style>