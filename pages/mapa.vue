<template>
  <v-container>
    <v-row class="text-center mt-1 ml-2">
      <div
        v-for="item in availableAccessibility"
        :key="item"
        class="pa-2 my-2 mx-1 secondary rounded-circle d-inline-block"
      >
        <v-icon color="white" v-if="item === 'fisica'"
          >mdi-wheelchair-accessibility</v-icon
        >
        <v-icon color="white" v-if="item === 'visual'">mdi-eye-off</v-icon>
        <v-icon color="white" v-if="item === 'auditiva'"
          >mdi-ear-hearing-off</v-icon
        >
      </div>
    </v-row>

    <v-card :loading="loading" class="mt-5" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="primary"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
      ></v-img>

      <v-card-title class="pb-0">Teatro Municipal</v-card-title>

      <v-card-actions>
        <v-btn color="secundary" text @click="fazALgo"> Rotas </v-btn>
      </v-card-actions>
    </v-card>

    <v-row>
      <v-col class="mt-5 ml-15" cols="12" align="justify">
        <!-- align pra alinhamento horizontal, justify pra alinhamento vertical -->
        <v-btn class="mx-2" elevation="4" fab small color="black">
          <v-icon color="white"> mdi-information-outline </v-icon>
        </v-btn>

        <v-btn elevation="4" rounded x-large color="black" dark>
          UberAccess
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="ml-15" cols="12" align="justify">
        <v-btn class="mx-2" elevation="4" fab small color="black">
          <v-icon color="white"> mdi-information-outline </v-icon>
        </v-btn>

        <v-btn elevation="4" rounded x-large color="black" dark>
          uberASSIST
        </v-btn>
      </v-col>

      <v-col cols="12" align="center"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      availableAccessibility: ["fisica", "visual", "auditiva"],
    };
  },
};
</script>