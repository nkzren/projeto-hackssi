<template>
  <v-container class="pa-4" flat height="500px">
    <v-row>
      <v-col cols="12" align="center">
        <!-- align pra alinhamento horizontal, justify pra alinhamento vertical -->
        <v-btn rounded x-large color="primary" dark> Conheça as Comunidades! </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" align="center">
        <!-- align pra alinhamento horizontal, justify pra alinhamento vertical -->
        <p class="mb-0 pb-0" >Acessível para pessoas com deficiencia:</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="pt-0 mb-4 ml-5" cols="10" align="center">
          <v-chip-group
            multiple
            v-model="amenities"
            active-class="secondary"
            column
          >
            <v-chip>Física</v-chip>

            <v-chip>Auditiva</v-chip>

            <v-chip>Visual</v-chip>

          </v-chip-group>
      </v-col>
    </v-row>

    <CommonSearch/>
    
  </v-container>
</template>

<style scoped>
</style>
