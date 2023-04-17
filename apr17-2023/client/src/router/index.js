import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../pages/index.vue")
        }
    ]
})

export default router;