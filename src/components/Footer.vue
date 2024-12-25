<template>
  <footer class="w-full px-4 py-6 bg-white mt-12">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <!-- Logo Section -->
      <div class="flex items-center space-x-2">
        <router-link to="/">
          <img 
            src="/logo.png"  
            class="h-20 w-auto"
            alt="Company Logo"
          />
        </router-link>
      </div>

      <!-- Navigation Links -->
      <nav class="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-600">
        <template v-for="link in navigationLinks" :key="link.text">
          <router-link 
            v-if="link.internal"
            :to="link.href"
            class="hover:text-gray-900 transition-colors duration-200"
            :class="{ 'text-gray-900': $route.path === link.href }"
          >
            {{ link.text }}
          </router-link>
          <a
            v-else
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-gray-900 transition-colors duration-200"
          >
            {{ link.text }}
          </a>
        </template>
      </nav>

      <!-- Social Links and Discord Button -->
      <div class="flex items-center space-x-4">
        <!-- Social Icons -->
        <div class="flex space-x-4">
          <a 
            v-for="social in socialLinks" 
            :key="social.name"
            :href="social.href"
            :aria-label="social.name"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <component :is="social.icon" class="h-5 w-5" />
          </a>
        </div>

        <!-- Discord Button -->
        <router-link 
          to="/discord"
          class="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200 text-sm font-medium"
        >
          Meet us at Discord 👀
        </router-link>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-center mt-6 text-sm text-gray-500">
      © {{ currentYear }} OSCOV. All Rights Reserved.
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const LinkedInIcon = defineComponent({
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
  </svg>`
})

const InstagramIcon = defineComponent({
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
  </svg>`
})

const GithubIcon = defineComponent({
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.271.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/>
  </svg>`
})

const navigationLinks = [
  { text: 'Code of Conduct', href: '/code-of-conduct', internal: true },
  { text: 'Vedas Hashtag', href: 'https://hashtag.vedascollege.edu.np', internal: false },
  { text: 'Contributing Guidelines', href: '/contributing', internal: true },
  { text: 'Find Issues', href: '/issues', internal: true }
]

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/oscov', icon: LinkedInIcon },
  { name: 'Instagram', href: 'https://instagram.com/oscov', icon: InstagramIcon },
  { name: 'GitHub', href: 'https://github.com/oscov', icon: GithubIcon }
]
</script>