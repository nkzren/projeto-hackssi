<template>
  <v-container>
    <v-row height="50%">
      <v-col cols="12" sm="8" md="6" align-items="center">
        <br/><div class="title headline">
          <h1>Nome do lugar</h1>
        </div>
        <v-card-subtitle><h4>Endereço</h4></v-card-subtitle>
        <v-img class="rounded-xl"  elevation="0" center height="60%" src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"></v-img>

        <v-btn
            class="text-xs-center black--text" 
            color="secondary"
            elevation="2"
            text-color="white"
            nuxt
            large
            to="/dps"
          >
          Criar
          </v-btn>

      </v-col>
    </v-row>
    
    <!-- mee
    <v-card>
      <v-card-title>Nome do local</v-card-title>
      <v-card-subtitle>Endereço</v-card-subtitle>
      <v-img height="100" src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"></v-img>
      <v-row class="text-center mt-1" justify="center">
        <v-col cols="12" md="3">
          <div class="pa-7 secondary rounded-circle d-inline-block"></div>
        </v-col>
      </v-row>
    </v-card>-->
  </v-container>
</template>
