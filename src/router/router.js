import Catalog from "@/components/Catalog"
import Cart from "@/components/Cart"
import Aut from "@/components/Aut"
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        component: Catalog
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
        props: true
    },
    {
        path: '/autorization',
        component: Aut
    },
]

const router = createRouter( {
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;