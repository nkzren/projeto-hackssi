<template>
  <v-container>
    <v-row align="center" justify="space-around" class="pt-8">
      <v-col cols="12" sm="8" md="6" align-items="center">
        <v-card-title><h1>{{ name }}</h1></v-card-title>
        <v-card-subtitle><h4>{{ address }}</h4></v-card-subtitle>
        <v-img class="rounded-xl" elevation="0" height="50%" :src="image"></v-img>
        <v-card-actions class="d-flex flex-column" align-items="center" width="auto">
          <v-btn
            class="text-center white--text rounded-xl" 
            color="secondary"
            elevation="2"
            width="240"
            nuxt
            large
            to="/mapa">
            <h4>Confira as Atrações!</h4>
          </v-btn>
        </v-card-actions>
      
        <v-card-title><span class="secondary--text p-0"><h2>Review</h2></span></v-card-title>
        <v-card-text v-if="accessibility.includes('fisica')" class="pb-0"><h4>Deficiência física</h4></v-card-text>
          <v-rating
            v-if="accessibility.includes('fisica')"
            color="primary"
            hover
            length="5"
            readonly
            size="50"
            :value="rating.fisica"
          ></v-rating>
  
        <v-card-text v-if="accessibility.includes('visual')" class="pb-0"><h4>Deficiência visual</h4></v-card-text>
          <v-rating
            v-if="accessibility.includes('visual')"
            color="primary"
            hover
            length="5"
            readonly
            size="50"
            :value="rating.visual"
          ></v-rating>


        <v-card-text v-if="accessibility.includes('auditiva')" class="pb-0"><h4>Deficiência auditiva</h4></v-card-text >
        <v-rating
            v-if="accessibility.includes('auditiva')"
            color="primary"
            hover
            length="5"
            readonly
            size="50"
            :value="rating.auditiva"
          ></v-rating>



        <v-card-title><span class="secondary--text"><h2>Comunidades</h2></span></v-card-title>
        <v-card-subtitle><h4>Este lugar foi muito citado nas seguintes comunidades:</h4></v-card-subtitle>

        <v-card elevation="3" color="blocos">
          <v-row class="text-center mt-1" justify="center">
            <v-col cols="1" md="1"></v-col>
            <v-col cols="2" md="2">
              <v-img class="rounded-circle pa-7" aspect-ratio="1" src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"></v-img>
            </v-col>
            <v-col cols="9">
              <v-card-subtitle><span class="secondary--text"><h2>Nome da Comunidade</h2></span></v-card-subtitle>        
            </v-col>
          </v-row>
        </v-card>

        <br/><v-card-title><span class="secondary--text"><h2>Comentários</h2></span></v-card-title>
       
        <div
          v-for="comment in comments"
          :key="comment"
        >
          <v-card elevation="3" color="blocos">
              <v-card-subtitle><span class="secondary--text">
              <h2>{{ comment.author}}</h2>
              </span></v-card-subtitle>
              <v-card-text>{{ 
                "Deficiência " + Object.keys(comment.condition).filter(key => comment.condition[key] === true)[0] 
                }}</v-card-text>        
              <v-card-text>{{ comment.text}}</v-card-text>
          </v-card><br/>
          
        </div>
        
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
export default {
  async asyncData({ params, query, $axios }) {
    const data = await $axios.$get(`/locais/${params.id}`);
    return {
      ...data,
      address: query.address,
      name: query.name,
      accessibility: query.accessibility.split(","),
      image: query.image,
    };
  } 
}
</script>
        