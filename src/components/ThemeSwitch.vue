<!-- ThemeSwitcher.vue -->
<template>
    <button @click="toggleTheme" class="theme-switch" :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
        class="moon-icon" :class="{ 'moon-icon--active': isDark }">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  
  const isDark = ref(false)
  
  const toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark-theme')
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
  
  onMounted(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark)
    
    if (isDark.value) {
      document.documentElement.classList.add('dark-theme')
    }
  })
  </script>
  
  <style scoped>
  .theme-switch {
    background: none;
    border: none;
    padding: 8px;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.3s;
  }
  
  .theme-switch:hover {
    background-color: var(--hover-color);
  }
  
  .moon-icon {
    transition: transform 0.5s ease;
  }
  
  .moon-icon--active {
    transform: rotate(360deg);
    fill: currentColor;
  }
  </style>