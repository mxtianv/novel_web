import Vue from 'vue'
import VueRouter from 'vue-router'
const Index = () => import('../components/Index.vue')
const Search = () => import('../components/Search.vue')
const Book = () => import('../components/Book.vue')
const Chapter = () => import('../components/Chapter.vue')
const User = () => import('../components/User.vue')
const UserIndex = () => import('../components/UserIndex.vue')
const UserInfo = () => import('../components/UserInfo.vue')
const BookInfo = () => import('../components/BookInfo.vue')
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
    path: '/user',
    redirect: '/user/index'
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    children: [
      {
        path: '/user/index',
        name: 'UserIndex',
        component: UserIndex,
      },
      {
        path: '/user/info',
        name: 'UserInfo',
        component: UserInfo,
      }
    ]
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
    path: '/bookinfo/:id',
    name: 'BookInfo',
    component: BookInfo,
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
router.beforeEach((to, from, next) => {
  let url = to.path.split('/');
  //console.log(url);
  if (url[1] == "user") {
    var token = window.sessionStorage.getItem('token');
    if (!token) {
      return next('/')
    }
    //console.log(0);
  }
  next()
})
export default router
