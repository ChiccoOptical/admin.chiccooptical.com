<template>
  <div class="flex items-center justify-center h-screen w-screen bg-red-200">
    <div
      class="grid grid-cols-5 w-9/12 overflow-hidden shadow-xl"
      style="height:90%;border-radius:1rem"
    >
      <div class="col-span-3 bg-red-400 pl-20 p-10 text-white relative">
        <div class="w-1/3 opacity-50" id="logoMask">
          <img
            src="../assets/images/logo.svg"
            class="w-full opacity-0"
            alt="Logo"
          />
        </div>
        <div class="v-center">
          <h1 class="text-6xl font-extrabold font-Rale">Welcome Back</h1>
          <p class="text-3xl font-semibold">Login to access admin panel</p>
        </div>
      </div>
      <div class="col-span-2 bg-white h-full relative">
        <div class="v-center w-full px-8">
          <h1 class="text-3xl mb-4 font-Rale font-bold">Sign In</h1>
          <form @submit.prevent="checkLogin" class="flex flex-col">
            <input
              v-model.lazy="email"
              type="email"
              name="email"
              id="email"
              autocomplete="on"
              placeholder="Email..."
            />
            <input
              v-model.lazy="password"
              type="password"
              name="Password"
              id="password"
              autocomplete="on"
              placeholder="Password.."
            />
            <button type="submit" class="bg-red-600 rounded-xl p-4 text-white">
              <p class="text-xl font-Rale uppercase">Sign In</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import db from "@/firebase";
import "firebase/auth";

export default Vue.extend({
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
	},
  methods: {
    checkLogin() {
      console.log("Submitted");

      db.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(data => {
        this.$router.push("/");
      })
      .catch(data => {
        console.log("bad login");
      });
		}
	}
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap");
#logoMask {
  background-color: white;
  mask: url("../assets/images/logo.svg");
}
.v-center {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
input[type="email"],
input[type="password"] {
  padding: 0.5rem;
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
  border-radius: 0.3rem;
  background-color: #eeeeee;
}
button[type="submit"] {
  margin-top: 2rem;
}
</style>
