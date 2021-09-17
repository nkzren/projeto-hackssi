<template>
  <v-container>
    <CommonSearch @search="getPlaces" path="/locais" />
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
  async asyncData({ $axios, query }) {
    await setTimeout(() => {}, 200)
    const response = await $axios.$get('/locais', {
      params: {
        q: query.content,
        filters: query.filters
      }
    });

    return {
      locais: response,
    }
  },
  methods: {
    async getPlaces({ content, filters }) {
      console.log(content)
      const response = await this.$axios.$get('/locais', {
        params: {
          q: content,
          filters,
        }
      });
      this.locais = response;

    },
    goTo(local) {
      console.log(local.id)
      this.$router.push({ 
        path: `/locais/${local.id}`,
        query: {
          address: local.address,
          image: local.image,
          accessibility: Object.keys(local.accessibility).filter(key => local.accessibility[key] === true).join(),
          name: local.name
        },
      });
    }
  },
}
</script>