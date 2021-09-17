<template>
  <v-card class="rounded-xl" elevation="0" color="blocos">
    <v-card-text class="pb-0 text-h4 font-weight-bold">{{ name }}</v-card-text>
    <v-card-subtitle class="text-h5 font-weight-medium">{{ address }}</v-card-subtitle>
    <v-img class="mx-1" height="150" :src=imageUrl></v-img>
    <v-row class="text-center mt-1 ml-2">
      <div
        v-for="item in availableAccessibility"
        :key="item"
        class="pa-5 my-2 mx-1 secondary rounded-circle d-inline-block"
      >
        <v-icon color="white" v-if="item === 'fisica'">mdi-wheelchair-accessibility</v-icon>
        <v-icon color="white" v-if="item === 'visual'">mdi-eye-off</v-icon>
        <v-icon color="white" v-if="item === 'auditiva'">mdi-ear-hearing-off</v-icon>
      </div>
    </v-row>
  </v-card>
</template>

<script>

  export default {
    props: {
      id: String,
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
