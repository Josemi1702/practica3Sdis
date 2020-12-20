<template>
  <div>
    <v-card elevation="2">
      <v-card-text>
        <formulario @input="add"></formulario>
      </v-card-text>
    </v-card>
    <tabla :items="items" class="mt-5"></tabla>
    <estadisticas></estadisticas>
  </div>
</template>

<script>
import Formulario from '~/components/Formulario'
import Estadisticas from '../components/Estadisticas'
export default {
  name: 'pruebaFormulario',
  components: { Formulario, Estadisticas },
  data: () => ({
    items: [
      {f1: 'X', f2:'Y'}
    ]
  }),
  methods: {
    add(v){
      this.items.push(v)
      this.$store.commit('todos/add', v.target.value)
      e.target.value = ''
     }
    // addTodo (v) {
    //   this.$store.commit('todos/add', e.target.value)
    //   e.target.value = ''
    // },
  }
}
</script>

<style scoped></style>
