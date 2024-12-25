<template>
  <nav class="w-full py-4 px-6 border-b border-gray-200">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo/Brand -->
      <router-link to="/" class="text-xl font-bold">
        <img src="/logo.png" class="w-14 h-14">
      </router-link>

      <!-- Mobile Menu Button -->
      <button 
        class="lg:hidden p-2 hover:bg-gray-100 rounded-md"
        @click="isOpen = !isOpen"
      >
        <svg 
          class="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            v-if="!isOpen" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path 
            v-else 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center gap-8">
        <div class="flex items-center gap-8">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            v-slot="{ isActive }"
            custom
          >
            <a 
              :class="[
                'px-4 py-1.5 text-sm transition-all',
                isActive 
                  ? 'bg-black text-white rounded-full'
                  : 'text-gray-600 hover:text-black'
              ]"
            >
              {{ link.name }}
            </a>
          </router-link>
        </div>

        <div class="flex items-center gap-4">
          <!-- Theme Toggle Button -->
          <button class="p-2 rounded-full hover:bg-gray-100">
            <svg 
              class="w-5 h-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2"
            >
              <path 
                d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"
              />
            </svg>
          </button>

          <!-- Become a Member Button -->
          <router-link 
            to="/join" 
            class="px-6 py-2 rounded-full border-2 border-black text-sm font-medium hover:bg-black hover:text-white transition-colors"
          >
            Become a Member!
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="isOpen"
      class="lg:hidden absolute left-0 right-0 top-[73px] bg-white border-b border-gray-200 py-4 px-6 shadow-lg"
    >
      <div class="flex flex-col gap-4">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          v-slot="{ isActive }"
          custom
        >
          <a 
            :class="[
              'text-sm transition-all',
              isActive 
                ? 'inline-block px-4 py-1.5 bg-black text-white rounded-full w-fit'
                : 'text-gray-600 hover:text-black'
            ]"
          >
            {{ link.name }}
          </a>
        </router-link>
        
        <div class="flex items-center justify-between pt-4 mt-4 border-t border-gray-200">
          <button class="p-2 rounded-full hover:bg-gray-100">
            <svg 
              class="w-5 h-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2"
            >
              <path 
                d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"
              />
            </svg>
          </button>
          
          <router-link 
            to="/join" 
            class="px-6 py-2 rounded-full border-2 border-black text-sm font-medium hover:bg-black hover:text-white transition-colors"
          >
            Become a Member!
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Github', path: '/github' },
]

// Close mobile menu when route changes
watch(() => route.path, () => {
  isOpen.value = false
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

nav {
  font-family: 'Inter', sans-serif;
  position: relative;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}
</style>