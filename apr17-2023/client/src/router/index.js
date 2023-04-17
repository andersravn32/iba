import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../pages/index.vue"),
      name: "Hjem",
    },
    {
      path: "/about",
      component: () => import("../pages/about.vue"),
      name: "Om",
    },
  ],
});

export default router;
