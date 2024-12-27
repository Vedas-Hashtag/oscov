<template>
  <Navbar/>
  <RouterView/>
  <Footer />
</template>

<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
:root {
  --background-color: #ffffff;
  --text-color: #333333;
  --hover-color: rgba(0, 0, 0, 0.05);
  --border-color: #e5e5e5;
}

:root.dark-theme {
  --background-color: #1a1a1a;
  --text-color: #ffffff;
  --hover-color: rgba(255, 255, 255, 0.1);
  --border-color: #404040;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}
</style>