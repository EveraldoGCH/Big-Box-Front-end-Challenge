import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
     busqueda:"",
     busquedaInput:""
 },
 getters: {},
 mutations: {
     addBusqueda(state){
         state.busqueda=state.busquedaInput
     }
 },
 actions: {
     busquedaAction(context){
         context.commit("addBusqueda")
     }
 }
});