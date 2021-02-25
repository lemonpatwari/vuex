import Home from "@/views/Home";
import About from "@/views/About";
import Product from "@/views/Product/_id";
export default [
    {
        path:'/',
        component:Home,
        name:'home'
    },
    {
        path:'/about',
        component:About,
        name:'about'
    },
    {
        path:'/product/:id',
        component:Product,
        name:'product'
    },
]