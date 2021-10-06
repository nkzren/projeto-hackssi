<template>
  <v-container class="pa-4" flat height="500px">
    <v-row class="my-4">
      <v-col cols="12" align="center">
        <img class="align-center" height="250" src="@/assets/logo_pand.png"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" align="center">
        <p class="mb-0 pb-0"> Qual(is) tipos de acessibilidade você deseja? </p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="pt-0 mb-4" cols="10">
        <div class="d-flex justify-center">
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

    <CommonSearch @search="goToLocais" path="locais"/>
    
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
    goToLocais({content, filters}) {
      this.$router.push({ 
        path: `locais/`,
        query: {
          q: content,
          filters: filters.join(','),
        }
      });
    }
  }
}
</script>

<style scoped>
</style>
