<template>
  <v-hover>
    <v-card rounded="true">
      <v-row class="my-2 align-center">
        <v-col cols="4">
          <v-img class="card-img ml-4 align-self-center" aspect-ratio="1"
            src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          />
        </v-col>
        <v-col cols="8">
          <v-card-title class="my-0">{{ name }}</v-card-title>
          <v-card-subtitle>{{ description }}</v-card-subtitle>
        </v-col>
      </v-row>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    imgPath: String,
  }
}
</script>

<style scoped>
.card-img {
  border-radius: 50%;
}
</style>