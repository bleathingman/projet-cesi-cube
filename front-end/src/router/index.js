import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Shop from "../views/Shop.vue";

// Routes
const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "",
        name: "shop",
        component: Shop
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
