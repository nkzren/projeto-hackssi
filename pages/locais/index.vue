<template>
  <v-container>
    <CommonSearch :search="getPlaces"/>
    <LocalCard
      class="my-5"
      v-for="local in locais"
      v-on:click.native="goTo(local)"
      :key="local.id"
      :name="local.name"
      :accessibility="local.accessibility"
      :address="local.address"
      :imageUrl="local.image"/>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      locais: [],
    }
  },
  methods: {
    async getPlaces(search, accessibility) {
      const places = await this.$axios.$get("/locais", {
        params: {
          q: search,
          //accessibility,
       }
      });

      this.locais = places;

    },
    goTo(local) {

      this.$router.push({ 
        path: `locais/${local.id}`,
        query: {
          address: local.address,
          image: local.image,
          accessibility: Object.keys(local.accessibility).filter(key => local.accessibility[key] === true).join(),
          name: local.name
        },
        props: true,
      });
    }
  },
  async created() {
    await this.getPlaces();
  }
}
</script>