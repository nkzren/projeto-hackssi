<template>
  <v-hover>
    <v-card class="rounded-xl" color="#FFECD1">
      <v-row class="my-2 align-center">
        <v-col cols="4">
          <v-img class="card-img ml-4 align-self-center" aspect-ratio="1"
            :src="imgPath"
          />
        </v-col>
        <v-col cols="8">
          <v-card-text class="my-0 secondary--text title font-weight-bold">{{ name }}</v-card-text>
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