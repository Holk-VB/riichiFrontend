import { createRouter, createWebHistory } from "vue-router"
import HomePage from './views/HomePage.vue'
import LoginPage from './views/LoginPage.vue'
import RegisterPage from './views/RegisterPage.vue'
import GamePage from './views/GamePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/login'},
        {path: '/home', name: 'HomePage', component: HomePage},
        {path: '/login', name: 'LoginPage', component: LoginPage},
        {path: '/register', name: 'RegisterPage', component: RegisterPage},
        {path: '/game/:gameId', name: 'Game', component: GamePage},
    ]
})

export default router