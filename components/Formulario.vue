<template>
  <v-form v-model="valid">
    <v-row>
      <v-text-field
        v-model.number="val"
        label="value"
        :rules="[required]"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-select
        v-model="select"
        :items="items"
        :rules="[required]"
        label="Item"
        required
      ></v-select>
    </v-row>
    <v-row>
      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>
      <v-spacer></v-spacer>
      <v-menu
        v-model="abierto"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker without buttons"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="abierto = false" :rules="[required]"></v-date-picker>
      </v-menu>
    </v-row>
    <v-row>
      <v-btn :disabled="!valid" color="success" @click="add"> Submit </v-btn>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'Formulario',
  props: {
    nextKey: {
      type: Text,
      value: () => 0
    }
  },
  data: () => ({
    abierto: false,
    valid: true,
    val: 0.0,
    select: '',
    date: '',
  
    checkbox: false,
    items: ['Alquiler', 'Comida', 'Transporte'],
  }),
  
  methods: {
    required(v) {
      return !!v || 'required value'
    },
    add() {
    
      this.$emit('input', { key: this.nextKey, f1: this.val, f2: this.select, f3:this.date });
    },
  },
}
</script>

<style scoped></style>
