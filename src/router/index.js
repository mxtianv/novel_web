import Vue from 'vue'
import VueRouter from 'vue-router'
const Index = () => import('../components/Index.vue')
const Search = () => import('../components/Search.vue')
const Book = () => import('../components/Book.vue')
const Chapter = () => import('../components/Chapter.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/search/:keyword',
    name: 'Search',
    component: Search,
    props: true
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: Book,
    props: true
  },
  {
    path: '/chapter/:id',
    name: 'Chapter',
    component: Chapter,
    props: true
  },
]

const router = new VueRouter({
  routes
})

export default router
