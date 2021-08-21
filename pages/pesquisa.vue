<template>
  <v-container class="pa-4" flat height="300px">
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="150"
        src="https://theatromunicipal.org.br/wp-content/uploads/2019/01/Theatro_Municipal_foto__Sylvia_Masini-e1415019169286.jpg"
      ></v-img>

      <v-card-title>Teatro municipal</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

        <div>
          Small plates, salads & sandwiches - an intimate setting with 12 indoor
          seats plus patio seating.
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Tonight's availability</v-card-title>

      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>5:30PM</v-chip>

          <v-chip>7:30PM</v-chip>

          <v-chip>8:00PM</v-chip>

          <v-chip>9:00PM</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="reserve">
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-toolbar dense floating>
      <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
      ></v-text-field>
    </v-toolbar>

    <v-container class="pa-4" flat height="300px"> </v-container>
  </v-container>
</template>