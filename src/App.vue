<script setup lang="ts">
import FooterSection from './components/FooterSection.vue';
import HeroSection from './components/HeroSection.vue'
</script>

<template>
  <header class = "greenBackground">
    <HeroSection></HeroSection>
  </header>
  <main></main>
  <footer class="greenBackground">
    <FooterSection></FooterSection>
  </footer>
</template>

<style scoped>
header{
  width: 100%;
  padding-top: 1%;
  height: 30vh;
}

footer{
  margin-top: 25%;
}

</style>
