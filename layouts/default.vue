<script setup lang="ts">

import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
  ],
})
</script>

<template>
  <Header/>
  <slot />
  <Footer/>
</template>

<style lang="scss">
  @use "@/assets/scss/main.scss";
</style>