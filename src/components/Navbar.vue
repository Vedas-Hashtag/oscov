<template>
  <nav class="w-full py-4 px-6 border-b border-gray-200 bg-white sticky top-0 z-50">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo/Brand -->
      <a href="#top" class="text-xl font-bold" @click.prevent="scrollToSection('top')">
        <img src="/logo.png" class="w-14 h-14" alt="Logo">
      </a>

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
          <template v-for="link in navLinks" :key="link.id || link.path">
            <!-- Home Link (Special Case) -->
            <template v-if="link.name === 'Home'">
              <RouterLink 
                v-if="route.path !== '/'"
                :to="link.path"
                class="px-4 py-1.5 text-sm transition-all"
                :class="[
                  route.path === link.path
                    ? 'bg-black text-white rounded-full'
                    : 'text-gray-600 hover:text-black'
                ]"
              >
                {{ link.name }}
              </RouterLink>
              <a 
                v-else
                :href="`#${link.id}`"
                class="px-4 py-1.5 text-sm transition-all"
                :class="[
                  activeSection === link.id
                    ? 'bg-black text-white rounded-full'
                    : 'text-gray-600 hover:text-black'
                ]"
                @click.prevent="scrollToSection(link.id)"
              >
                {{ link.name }}
              </a>
            </template>
            
            <!-- Regular Section Links -->
            <a 
              v-else-if="link.type === 'section'"
              :href="`#${link.id}`"
              class="px-4 py-1.5 text-sm transition-all"
              :class="[
                activeSection === link.id
                  ? 'bg-black text-white rounded-full'
                  : 'text-gray-600 hover:text-black'
              ]"
              @click.prevent="scrollToSection(link.id)"
            >
              {{ link.name }}
            </a>
            
            <!-- Regular Route Links -->
            <RouterLink 
              v-else
              :to="link.path"
              class="px-4 py-1.5 text-sm transition-all"
              :class="[
                route.path === link.path
                  ? 'bg-black text-white rounded-full'
                  : 'text-gray-600 hover:text-black'
              ]"
            >
              {{ link.name }}
            </RouterLink>
          </template>
        </div>

        <div class="flex items-center gap-4">
          <!-- Theme Toggle Button -->
          <button 
            class="p-2 rounded-full hover:bg-gray-100"
            @click="toggleTheme"
          >
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
          <RouterLink 
            to="/join"
            class="px-6 py-2 rounded-full border-2 border-black text-sm font-medium hover:bg-black hover:text-white transition-colors"
          >
              Become a Member!
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isOpen"
        class="lg:hidden absolute left-0 right-0 top-[73px] bg-white border-b border-gray-200 py-4 px-6 shadow-lg"
      >
        <div class="flex flex-col gap-4">
          <template v-for="link in navLinks" :key="link.id || link.path">
            <!-- Home Link (Special Case) -->
            <template v-if="link.name === 'Home'">
              <RouterLink 
                v-if="route.path !== '/'"
                :to="link.path"
                class="text-sm transition-all"
                :class="[
                  route.path === link.path
                    ? 'inline-block px-4 py-1.5 bg-black text-white rounded-full w-fit'
                    : 'text-gray-600 hover:text-black'
                ]"
                @click="isOpen = false"
              >
                {{ link.name }}
              </RouterLink>
              <a 
                v-else
                :href="`#${link.id}`"
                class="text-sm transition-all"
                :class="[
                  activeSection === link.id
                    ? 'inline-block px-4 py-1.5 bg-black text-white rounded-full w-fit'
                    : 'text-gray-600 hover:text-black'
                ]"
                @click.prevent="scrollToSection(link.id)"
              >
                {{ link.name }}
              </a>
            </template>
            
            <!-- Regular Section Links -->
            <a 
              v-else-if="link.type === 'section'"
              :href="`#${link.id}`"
              class="text-sm transition-all"
              :class="[
                activeSection === link.id
                  ? 'inline-block px-4 py-1.5 bg-black text-white rounded-full w-fit'
                  : 'text-gray-600 hover:text-black'
              ]"
              @click.prevent="scrollToSection(link.id)"
            >
              {{ link.name }}
            </a>
            
            <!-- Regular Route Links -->
            <RouterLink 
              v-else
              :to="link.path"
              class="text-sm transition-all"
              :class="[
                route.path === link.path
                  ? 'inline-block px-4 py-1.5 bg-black text-white rounded-full w-fit'
                  : 'text-gray-600 hover:text-black'
              ]"
              @click="isOpen = false"
            >
              {{ link.name }}
            </RouterLink>
          </template>
          
          <div class="flex items-center justify-between pt-4 mt-4 border-t border-gray-200">
            <button 
              class="p-2 rounded-full hover:bg-gray-100"
              @click="toggleTheme"
            >
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
            
            <a 
              href="#join"
              class="px-6 py-2 rounded-full border-2 border-black text-sm font-medium hover:bg-black hover:text-white transition-colors"
              @click.prevent="scrollToSection('join')"
            >
              Become a Member!
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)
const isDarkTheme = ref(false)
const activeSection = ref('')

const navLinks = [
  { name: 'Home', id: 'home', path: '/', type: 'both' },
  { name: 'About Us', id: 'about', type: 'section' },
  { name: 'Events', id: 'events', type: 'section' },
  { name: 'Github', path: '/github', type: 'route' }
]

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    activeSection.value = sectionId
    isOpen.value = false
  }
}

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
  // theme toggle logic chai is to do. pachi add
}

// handle active section based on scroll position
const handleScroll = () => {
  // Only handle scroll-based active sections on homepage
  if (route.path !== '/') return
  
  const sections = navLinks
    .filter(link => link.type === 'section' || link.type === 'both')
    .map(link => ({
      id: link.id,
      element: document.getElementById(link.id)
    }))
    .filter(section => section.element)

  // Find the current section
  const currentSection = sections.find(section => {
    const rect = section.element.getBoundingClientRect()
    return rect.top <= 100 && rect.bottom >= 100
  })

  // Update active section or clear if none found
  activeSection.value = currentSection ? currentSection.id : ''
}

// close mobile menu when clicking outside
const handleClickOutside = (event) => {
  if (isOpen.value && !event.target.closest('nav')) {
    isOpen.value = false
  }
}

// lifecycle hooks
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('scroll', handleScroll)
  handleScroll() // initial check
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

nav {
  font-family: 'Inter', sans-serif;
  position: relative;
}
</style>