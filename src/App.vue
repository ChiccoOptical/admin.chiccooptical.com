<template>
  <div id="app" class="bg-purple-300">
    <div
      id="sidebar"
      v-if="this.$route.path !== '/login'"
      class="fixed left-0 bg-white flex flex-col py-8 px-2 rounded-r-3xl"
      style="top:50%;transform:translateY(-50%);height:70%"
    >
      <img src="@/assets/logo.svg" alt="Logo" />
      <router-link to="/">
        <svg
          class="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          ></path>
        </svg>
      </router-link>
      <router-link to="/add">
        <svg
          class="w-10 h-10"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </router-link>
      <router-link to="/products">
        <svg
          class="w-10 h-10"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
          ></path>
        </svg>
      </router-link>
    </div>
    <div :style="this.$route.path != '/login' ? 'padding-left:3.5rem' : ''">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
#sidebar a {
  margin-top: 0.5rem;
}
</style>
