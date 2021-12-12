import Vue from "vue";
import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import catalogo from './components/catalogo.vue'
import habitacion from './components/habitacion.vue'
import reservas from './components/reservas.vue'



const routes = [{
    
    path: '/',
    name: 'root',
    component: App
},
{
    path: '/user/logIn',
    name: "logIn",
    component: LogIn
},

{
    path: '/user/SignUp',
    name: "signUp",
    component: SignUp
},
{
    path: '/user/home',
    name: "home",
    component: Home
},
{
    path: '/user/catalogo',
    name: "catalogo",
    component: catalogo
},
{
    path: '/user/habitacion',
    name: "habitacion",
    component: habitacion
},
{
    path: '/user/reservas',
    name: "reservas",
    component: reservas
},


];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;