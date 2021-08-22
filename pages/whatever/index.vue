<template>
  <v-container class="fill-height">
    <v-row>
      <v-col cols="12" sm="8" md="6" align-items="center">
        <!-- align pra alinhamento horizontal, justify pra alinhamento vertical -->
        <div class="title headline justify-center my-16" align="center">
          <h1>Nome</h1>
        </div>
        <div class="description" align="center">
          <h3>Descrição</h3>
        </div>
      </v-col>
    </v-row>
    <v-row class="pt-16">
      <v-col cols="12" sm="8" md="6">
        <v-card-actions class="d-flex flex-column" align-items="center" width="auto">
          <v-btn
            class="text-xs-center black--text" 
            color="primary"
            elevation="2"
            nuxt
            large
            to="/registrar"
          >
          Criar nova conta de graça
          </v-btn>
          <v-btn
            class="ma-1 text-xs-center" 
            color="#000000"
            nuxt
            plain
            to="/entrar"
          >
          Já tenho uma conta
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>