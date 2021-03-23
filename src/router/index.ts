import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",

    component: () => import("../views/Login.vue"),
    meta: { guest: true },
  },
  {
    path: "/register",
    name: "Register",

    component: () => import("../views/Register.vue"),
    meta: { guest: true },
  },
  {
    path: "/dashboard",
    name: "Dashboard",

    component: () => import("../views/Dashboard.vue"),
    meta: { requireAuth: true },
  },
  {
    path: "/shoplists",
    name: "Shoplists",

    component: () => import("../views/Shoplists.vue"),
    meta: { requireAuth: true },
  },
  {
    path: "/shoplist/:id",
    name: "Shoplist",

    component: () => import("../views/Shoplist.vue"),
    meta: { requireAuth: true },
  },
];

const router = new VueRouter({
  routes,
});

// Handling auth
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    next();
  } else {
    next();
  }
});

export default router;
