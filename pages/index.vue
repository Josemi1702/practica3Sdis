<template>
  <div>
    <v-card elevation="2">
      <v-card-text>
        <formulario @input="add" :nextKey='nextKey'></formulario>
      </v-card-text>
    </v-card>
    <tabla :items="items" :todos="todos" class="mt-5"></tabla>
    <estadisticas  :items="items"  ></estadisticas>
    
   
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

import Formulario from '~/components/Formulario'
import Estadisticas from '~/components/Estadisticas'
import Tabla from '~/components/Tabla'

export default {
  name: 'pruebaFormulario',
  components: { Formulario, Estadisticas, Tabla },
  data: () => ({
    /*items: [
      
    ],
    labels: [
     
    ],
    value: [
    
    ]*/
  }),
  computed: {
   /* mostrar () {
      console.log(this.$store.state.items)
      return this.$store.state.items
    },*/
    ...mapState('model',['items', 'nextKey'])
  },
  methods: {
    /*add(v){
      //tabla
      this.items.push(v)
      this.labels.push(v)
      this.value.push(v)
      //this.$store.commit('model/add', v)
      console.log(this.$store.state.items)
      //estadistica
     
     },*/
     ...mapActions('model', ['add','remove','initialize'])
  },
  async fetch(){
    await this.initialize()
  }
}
</script>

<style scoped></style>
