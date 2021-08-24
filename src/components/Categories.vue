<template>
    <div class="CategoriesFlex">
        <h1 class="categoriesTitle">
            Best sellers
        </h1>
        <ul class="categoriesList">
            <li v-for="book in booksLimit10" :key="book.id">
                <a :href="'https://www.nytimes.com/books/best-sellers/' + book.list_name_encoded + '/'">
                    {{book.display_name}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data () {
        return {
            books:"",
            url:"https://api.nytimes.com/svc/books/v3/lists/current/",
            category:"",
            apiKey:"json?api-key=wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j"
        }
    },
    computed:{
        booksLimit10: function(){
            return this.books.slice(0,10);
        },
        completeUrl: function(){
            return this.url + book.list_name_encoded + this.apiKey
        }
    },
    mounted(){
        console.log("Bloque1"),
        axios.get("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j")
        .then(response=>{this.books = response.data.results
        console.log(this.books)})
        
    },
    name: "Categories"
}
</script>

<style lang="scss" scoped>
.CategoriesFlex{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.categoriesTitle{
    font-family:  'Libre Baskerville', serif;
    font-size: 8vw;
    color: black;
    margin-top: 6px;
}
.categoriesList{
    font-family:'Libre Baskerville', serif;
    margin: 12px 8px
}
.categoriesList li{
   margin: 16px 0;
   font-size: 16px;
   text-align: center;
}
.categoriesList a{
    text-decoration: none;
    color: #333;
}
@media (min-width:600px){

    .categoriesTitle{
        font-size: 6vw;
    }
    .categoriesList li{
        font-size:20px;
    }
}
</style>