import {loadData,saveItem} from '@/services/storage'

export const state = () => ({
    items: [],
    initialized: false,
    nextKey:0
  })

 
  export const mutations = {
    add(state, item) {
      state.items.push(item)
      if(item.key>=state.nextKey){
        state.nextKey=item.key+1;
        console.log(state.items)
      }
      
    },
    remove(state, item) {
      state.items.splice(state.items.indexOf(item), 1)
    },
    toggle(state, item) {
      item.done = !item.done
    },
    initialize(state){
      state.initialized = true
    
    }
  }

  export const actions = {
    async add({state, getters, dispatch, commit}, item){
      item.key=state.nextKey;
      
      //state.nextKey=state.items.length(); //añadimos la clave en funcion de la longitud de el array indice+1
      commit('add', item);
      await saveItem(item);
      

    },
    async remove({state, getters, dispatch, commit}, item){
      commit('remove', item);
      await removeItem(item);
      
    },
    async initialize ({state, getters, dispatch, commit}, item){
      if(!state.initialized){
        commit('initialize')
        const data = await loadData()
        data.forEach ( d=> commit('add',d))
      }
      
    }
  }