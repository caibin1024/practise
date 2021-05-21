import { createRouter, createWebHistory } from 'vue-router'

const flex = () => import('../view/Flex')
const welcome = () => import('../view/Welcome')
const layout = () => import('../view/Layout')
const routes = [
  {
    path: '/welcome',
    name: 'welcome',
    component: welcome


  },
  {
    path: '/flex',
    name: 'flex',
    component: flex
  },
  {
    path: '/',
    redirect: '/welcome'
  },{
    path:'/layout',
    name:'layout',
    component:layout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
