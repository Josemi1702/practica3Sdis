<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  
</template>

<script>
export default {
  name: 'Tabla',
  props: {
    items: {
      type: Array,
      value: () => []
    }
  },
  data: () => ({
    headers: [
      { text: 'Gastos', value: 'f1' },
      { text: 'Categorías', value: 'f2' },
    ]
  })
}
</script>

<style scoped></style>
