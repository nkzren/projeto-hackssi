<template>
  <v-container class="pa-2 mb-8">
    <v-row justify="center">
      <v-col cols="12" align="center">
        <v-text-field
          class="search-field"
          filled
          placeholder="Buscar..."
          background-color="blocos"
          rounded
          hide-details
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="5" align="center">
        <v-btn
          width="120"
          large
          rounded
          elevation="4"
          plain
        >
          Filtro
        </v-btn>
      </v-col>
      <v-col cols="5" align="center">
        <v-btn
          class="black--text"
          width="120"
          large
          rounded
          elevation="4"
          color="primary"
        >
          Pesquisar
        </v-btn>
      </v-col>
    </v-row>
  </v-container> 
</template>