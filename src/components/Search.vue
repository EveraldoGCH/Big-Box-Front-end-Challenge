<template>
    <div>
      <Header/> 
      <div class="searchTrue" v-if="this.resultado.length>=1">
        <h1 class="searchTitleTrue">{{this.resultado[0].book_title}}</h1>
        <h2 class="searchDescripTrue">{{this.resultado[0].summary}}</h2>
        <h1 class="searchAuthorTrue">By: {{this.resultado[0].book_author}}</h1>
        <a :href="this.googleUrl + this.resultado[0].book_title + ' by ' + this.resultado[0].book_author"><button class="moreBtn">See more</button></a>
      </div>
      <div v-else class="searchFalse">
          <h2 class="searchFalse">Sorry, we haven't found any book with your search criteria.</h2>
          <router-link to="/"><button class="homeBtn">Home</button></router-link>
      </div>
      <Footer/>
    </div>
</template>

<script>
import axios from "axios"
import Header from "./Header.vue"
import Footer from './Footer.vue';
export default {
    components: { Header, Footer },
    data() {
        

        return {
            busqueda:this.$busqueda,
            resultado:"",
            url:"https://api.nytimes.com/svc/books/v3/reviews.json?title=",
            apiKey:"&api-key=wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j",
            googleUrl:"https://www.google.com/search?q="
        }
    },
    computed:{
        completeUrl: function(){
            return this.url + this.$store.state.busqueda + this.apiKey
        }
    },
    mounted(){
        console.log(this.completeUrl),
        axios.get(this.completeUrl)
        .then((response)=> {
            this.resultado = response.data.results}
        )
    }
    }
</script>

<style lang="scss" scoped>

.searchTrue, .searchFalse{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.searchTitleTrue, .searchFalse{
    font-size: 26px;
    font-family:  'Libre Baskerville', serif;
    color: black;
    margin: 10px 8px;
}
.searchDescripTrue{
    font-size: 20px;
    font-family:  'Libre Baskerville', serif;
    color: #333;
    margin: 10px 8px;
}
.searchAuthorTrue{
    font-size: 18px;
    font-family:  'Libre Baskerville', serif;
    color: black;
    margin: 10px 8px;
}

.homeBtn, .moreBtn{
    color: #444444;
    background: #F3F3F3;
    border: 1px #DADADA solid;
    padding: 5px 10px;
    border-radius: 2px;
    font-weight: bold;
    font-size: 9pt;
    outline: none;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    margin: 15px 0px;
}
.moreBtn{
    width: 120px;
    font-size: 16px;
    font-weight: 500;
    font-family:  'Libre Baskerville', serif;
}

@media (min-width:600px){
    .searchTitleTrue{
        font-size: 30px;
    }
    .searchDescripTrue{
        margin: 30px 10vw;
    }
}
</style>