<template>
  <router-link :to="{ name: 'home' }">
    <h1 class="text-center text-5xl font-semibold mb-11 mt-11 font-custom">
      Coffee Booking
    </h1>
  </router-link>

  <router-view></router-view>
</template>

<script setup></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@500&display=swap");

* {
  box-sizing: border-box;
}
body {
  background-color: #f5efe6;
}

label,
button {
  font-family: "Noto Sans Thai", sans-serif;
}
</style>
