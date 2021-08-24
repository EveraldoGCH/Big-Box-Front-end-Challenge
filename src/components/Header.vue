<template>
<div class="container">
    <div class="cardFlex">
      <router-link to="/"><img src="/images/NYtimes.png" class="logoHeader" :key="2"></router-link>
      <div class="heading">
        <h4 class="title">NY Times Books</h4>
      </div>
      <div class="search">
        <form action="/search" method="GET">
        <input v-model="search" type="search" class="form-control" placeholder="Search by title" />
        <select name="selectCategory" class="dropDownCategory">
            <option value="none" selected>Category</option>
            <option v-for="categorie in categoriesLimit10" :key="categorie.id" :value="categorie.list_name_encoded" placeholder="Categorie">{{ categorie.list_name }}</option>
        </select>
        <router-link to="/search"><button type="submit" class="btnSearch" @click="addBusquedaGlobal"><i class="fas fa-search"></i></button></router-link>
        </form>
      </div>
    </div>
</div>
</template>

<script>

import axios from "axios";
export default {
    name:"Header",
    data () {
        

        return {
            search:"",
            categoriesList:""
        }
    },
    methods: {
        addBusquedaGlobal(){
            this.$store.state.busquedaInput=this.search
            this.$store.dispatch("busquedaAction")
        }
    },
    mounted(){
        console.log("me monte header comp")
        axios.get("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j")
        .then(response=>{this.categoriesList = response.data.results
        })
},
computed:{
        categoriesLimit10: function(){
            return this.categoriesList.slice(0,10);
        }
}}
</script>

<style lang="scss" scoped>

.container {
  z-index: 1;
  margin: 17px auto;
  max-width: 826px;
  background-color: white;
}

.cardFlex {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  padding: 14px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logoHeader{
  margin:10px 0px;
  width: 3em;
}
.heading {
  margin-bottom: 12px;

  .title {
    font-size: 18px;
    font-family: 'Libre Baskerville', serif;
    font-weight: 500;
    margin-top: 5px;
    color: black;
  }
}
.search {
  margin-bottom: 24px;
  display: inline-flex;
  .form-control {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ced4da;
    border-radius: 0;
    outline: 0;
    box-shadow: none;
    padding: 6px 0;
    width: 30vw;
    min-width: 115px;
    font-family: 'Libre Baskerville', serif;
    text-align: center;
    
  }
}
.fa-search{
  color: #333;
  font-size: 17px;
  position: relative;
  top: 1px;
}
.btnSearch{
  color: white;
  position: relative;
  background-color: white;
  top: 7px;
  border: none;
}
.dropDownCategory{
    width: 20vw;
    height: 20px;
    position: relative;
    top: 6px;
    border: 0px;
    outline: 0px;
    border-radius: 2px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    background-color: rgb(231, 231, 231);
    font-family: 'Libre Baskerville', serif;
}
@media (min-width:600px){

    .logoHeader{
        width: 3.5em;
        margin: 10px 0;
    }
}

</style>