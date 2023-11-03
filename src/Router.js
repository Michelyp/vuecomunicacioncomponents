import { createRouter, createWebHistory } from "vue-router";
import NumeroDoble from './components/NumeroDoble.vue';
import HomeComponent from './components/HomeComponent.vue'
const myRoutes = [
    {
        path:"/", component:HomeComponent
    },
    {
        path:"/numerodoble/:numero", component:NumeroDoble
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router;