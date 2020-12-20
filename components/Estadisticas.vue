<template>
  <v-card
    class="mt-4 mx-auto"
    max-width="1200"
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="green"
      elevation="12"
      max-width="calc(100% - 32px)"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">
        Gastos totales por día
      </div>
  
      <v-divider class="my-2"></v-divider>
      
      <span class="caption grey--text font-weight-light"></span>
    </v-card-text>
  </v-card>
</template>
   
<script>
let calculo
  export default {
    name: 'Estadisticas',
    props: {
    items: {
      type: Array,
      value: () => []
    } 
  },
    data: () => ({
     /*labels: [
        'f3',
        
        
      ],
      value: [
      'f1',
        
       
      ],*/
    }),
    computed: {
    /* labels: this.items.date,
     value: this.items.value*/
     labels(){
    return this.items.map(x=>x.f3).sort().filter((valor, indice, array)=> array.indexOf(valor)===indice); 
    //aplicamos la funcion map para obtener la fecha de items
    //aplicamos la funcion sort para ordenar los elementos
    //aplicamos la funcion filter para eliminar fechas repetidas
    },
    value(){
      
 
      
    return this.labels.map(x=> this.items.filter(y => y.f3===x).map(x=>x.f1).reduce((a, b) => a+b));
    
    }
    }
  }
</script>
