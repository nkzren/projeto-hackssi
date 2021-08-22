<template>
  <v-container>
    <CommonSearch/>
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
    async getPlaces() {
      const places = await this.$axios.$get("/locais");

      this.locais = places;

    },
    goTo(local) {
      this.$router.push({ name: `/locais/${local.id}`, params: {

      }});
    }
  },
  async created() {
    await this.getPlaces();
  }
}
</script>