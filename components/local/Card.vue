<template>
  <v-card class="rounded-xl" elevation="0" color="blocos">
    <v-card-title class="text-h4">{{ name }}</v-card-title>
    <v-card-subtitle class="text-h5">{{ address }}</v-card-subtitle>
    <v-img class="mx-1" height="100" :src=imageUrl></v-img>
    <v-row class="text-center mt-1 ml-2" justify="left">
      <div v-for="item in availableAccessibility" :key="item" class="pa-5 my-2 secondary rounded-circle d-inline-block"></div>
    </v-row>
  </v-card>
</template>

<script>
  export default {
    props: {
      name: String,
      address: String,
      imageUrl: String,
      accessibility: Object
    },
    data() {
      return {
        availableAccessibility: []
      }
    },
    methods: {
      listAccessibility() {
        const keys = Object.keys(this.accessibility).filter(key => this.accessibility[key] === true);

        this.availableAccessibility = keys;
      }
    },
    created() {
      this.listAccessibility();
    }
  }
</script>
