<template>
  <v-container>
    <CommonSearch />
    <ComunidadeListItem
      v-for="comunidade in comunidades"
      :key="comunidade.id"
      :name="comunidade.name"
      :description="comunidade.description"
      :imgPath="comunidade.imgPath"
      v-on:click.native="nextPage"
    />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      comunidades: [
        {
          id: 1,
          name: "Lugares bonitos em SP",
          description: "olosko",
          imgPath: "https://images.unsplash.com/photo-1629627262826-7e2e7c4db12e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        },
        {
          id: 2,
          name: "Jogos",
          description: "olosko",
          imgPath: "https://images.unsplash.com/photo-1629627262826-7e2e7c4db12e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        },
        {
          id: 3,
          name: "Cinemas e filmes acessíveis",
          description: "olosko",
          imgPath: "https://images.unsplash.com/photo-1629627262826-7e2e7c4db12e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        },
        {
          id: 4,
          name: "Lugares acessíveis com música",
          description: "olosko",
          imgPath: "https://images.unsplash.com/photo-1629627262826-7e2e7c4db12e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        },
        {
          id: 5,
          name: "Ar livre",
          description: "olosko",
          imgPath: "https://images.unsplash.com/photo-1629627262826-7e2e7c4db12e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        },
        {
          id: 6,
          name: "Oportunidades de emprego para deficientes",
          description: "olosko",
          imgPath: "https://images.unsplash.com/photo-1629627262826-7e2e7c4db12e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        },
      ],
    }
  },
  methods: {
    nextPage() {
      this.$router.push('/grupo');
    }
  }
};
</script>
