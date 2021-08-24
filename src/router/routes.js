import App from '../App.vue'
import Books from '../components/Books.vue'
import Categories from '../components/Categories.vue'
import Search from '../components/Search.vue'

export const routes=[
    {
      path: '/' , component: Books
    },
    {
        path: '/search' , component: Search
      },
  ]
