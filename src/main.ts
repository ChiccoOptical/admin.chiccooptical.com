import Vue from "vue";
import App from "./App.vue";

import router from "@/router";
import store from "@/store";
import firebase from "@/firebase";

import "./assets/css/tailwind.css";

import Multiselect from 'vue-multiselect';
Vue.component('multiselect', Multiselect)

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	firebase,
	render: h => h(App)
}).$mount("#app");