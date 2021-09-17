<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" align-items="center">
      <v-card class="py-4 d-flex flex-column" align="center">
        <v-card-title class="headline justify-center">
          <h2>Crie sua conta</h2>
        </v-card-title>
        <v-card-subtitle>
          <h3>Insira seus dados para participar das comunidades</h3>
        </v-card-subtitle>
        <v-card-actions class="d-flex flex-column" align-items="center" width="auto">
          
      <v-row>
        <br/>
          <v-text-field
            v-model="Nome"
            label="Nome"
            required
          ></v-text-field>
      </v-row>

        <br/>
          <v-row>
          <v-text-field
            v-model="Sobrenome"
            label="Sobrenome"
            required
          ></v-text-field>
            </v-row>

        <br/>
        <v-row>
          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>
      </v-row>
        
        <v-checkbox
        v-model="checkbox1"
        :label="`Deficiência Visual`"
        ></v-checkbox>
        
        <v-checkbox
        v-model="checkbox2"
        :label="`Deficiência Auditiva`"
        ></v-checkbox>

        <v-checkbox
        v-model="checkbox3"
        :label="`Deficiência Física`"
        ></v-checkbox>
        
        <v-checkbox
        v-model="checkbox4"
        :label="`Outras deficiências`"
        ></v-checkbox>

        <v-checkbox
        v-model="checkbox5"
        :label="`Não possuo deficiência`"
        ></v-checkbox>

        <v-btn
            class="text-xs-center black--text" 
            color="primary"
            elevation="2"
            nuxt
            large
            to="/pesquisa"
          >
          Criar
          </v-btn>

        </v-card-actions>
      </v-card>
        <!-- fazer uma gambiarra p deixar bonito só, ja q n vamos usar -->

    </v-col>
  </v-row>
</template>

