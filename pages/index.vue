<template>
  <v-container class="pa-4" flat height="500px">
    <v-row>
      <!-- <v-col cols="12" align="center">
        <v-btn class="black--text" rounded x-large color="primary"> Conheça as Comunidades! </v-btn>
      </v-col> -->
    </v-row>

    <v-row>
      <v-col cols="12" align="center">
        <p class="mb-0 pb-0"> Qual(is) tipos de acessibilidade você deseja? </p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="pt-0 mb-4" cols="10">
        <div class="d-flex justify-center" @click="test">
          <v-chip-group
            multiple
            v-model="amenities"
            active-class="secondary"
          >
            <v-chip value="fisica">Física</v-chip>

            <v-chip value="auditiva">Auditiva</v-chip>

            <v-chip value="visual">Visual</v-chip>

          </v-chip-group>
        </div>
      </v-col>
    </v-row>

    <CommonSearch/>
    
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      amenities: []
    }
  },
  methods: {
    test() {
      console.log(this.amenities)
    }
  }
}
</script>

<style scoped>
</style>
