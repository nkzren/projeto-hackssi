<template>
  <v-card class="rounded-xl" elevation="0" color="blocos">
    <v-card-text class="text-h4 font-weight-bold title">{{ title }}</v-card-text>
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
        title: String,
        availableAccessibility: Array
    }
}
</script>