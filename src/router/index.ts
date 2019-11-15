import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Deployments from "@/views/Deployments.vue";
import Namespaces from "@/views/Namespaces.vue";
import Services from "@/views/Services.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/namespace/:namespace",
    name: "namespace",
    component: Namespaces,
    props: true
  },
  {
    path: "/namespaces",
    name: "namespaces",
    component: Namespaces
  },
  {
    path: "/deployments",
    name: "deployments",
    component: Deployments
  },
  {
    path: "/services",
    name: "services",
    component: Services,
    props: true
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
