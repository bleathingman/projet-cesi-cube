import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Shop from "../views/Shop.vue";
import ProductList from "../views/ProductList.vue";
import Settings from "../views/Settings.vue";

// Routes
const routes = [
    {
        path: "/",
        name: "shop",
        component: Shop,
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/dashboard/product",
        name: "product",
        component: ProductList,
    },
    {
        path: "/dashboard/settings",
        name: "settings",
        component: Settings,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
