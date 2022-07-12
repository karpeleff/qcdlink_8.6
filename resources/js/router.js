import VueRouter from 'vue-router';
import Editor   from './components/Editor';
import Pages    from './components/Pages';
import Products from "./components/Products";
import User from "./components/User";

export default new VueRouter({
routes: [
    {
        path: '/home',
        component : Editor
    },
    {
        path: '/pages',
        component : Pages
    },
    {
        path: '/products',
        component : Products
    },
    {
        path: '/user',
        component : User
    },

],
    mode: "history"
})
