import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import db from "@/firebase";
import {getCurrentUser} from '@/firebase'
import "firebase/auth";

/* webpackChunkName: "Home" */
import Home from "../pages/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home"
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/Login.vue"),
    meta: {
      title: "Login"
    }
  },
  {
    path: "/add",
    name: "Add",
    component: () => import("@/pages/AddProduct.vue")
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("@/pages/ProductList.vue")
  },
  {
    path: "*",
    name: "404 Page",
    component: () => import("@/pages/PageNotFound.vue"),
    meta: {
      title: "404"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  // SET TITLE AND DESCRIPTIONS
	document.title = to.meta.title
		? to.meta.title + " | Admin Chicco Optical"
		: "Admin Chicco Optical";
  document
  	.getElementById("metaDescription")
    ?.setAttribute("content", to.meta.description);

  // CHECK IF LOGGED IN
  if (to.name !== "Login" && !await getCurrentUser()) {
    console.log("fuck you go login");
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
