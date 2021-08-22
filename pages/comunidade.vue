<template>
  <v-container>
    <CommonSearch />
    <ComunidadeListItem
      v-for="comunidade in comunidades"
      :key="comunidade.id"
      :name="comunidade.name"
      :description="comunidade.description"
    />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      comunidades: [
        {
          id: 1,
          name: "Teste vfor",
          description: "olosko",
        },
        {
          id: 2,
          name: "Teste vfor",
          description: "olosko",
        },
      ],
    };
  },
};
</script>
