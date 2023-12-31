import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeLanding from './components/HomeLanding.vue'
import CreatePage from './components/CreatePage.vue'
import ArticleDetails from './components/ArticleDetails.vue'
import ArticleEdit from './components/ArticleEdit.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name:'home', component: HomeLanding },
  { path: '/create', name:'create', component: CreatePage },
  { path: '/details/:id', name:'details', component: ArticleDetails, props:true },
  { path: '/edit/:id', name:'articleedit', component: ArticleEdit, props: true }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
