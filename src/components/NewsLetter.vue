<template>
    <div class="w-full max-w-4xl mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <div class="text-center space-y-4">
          <!-- Header -->
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
            Join The OSCOV Newsletter
          </h2>
          
          <!-- Description -->
          <p class="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest open-source projects and community activities!.
          </p>
  
          <!-- Form -->
          <form @submit.prevent="handleSubmit" class="mt-8 space-y-4">
            <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
              <button
                type="submit"
                class="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
  
          <!-- Coming Soon Text -->
          <p class="text-sm text-gray-500 mt-4">
            Stay Tuned for more updates! *Coming Soon*
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  
  const handleSubmit = () => {
    // Handle form submission here
    console.log('Submitted email:', email.value)
    // Reset form
    email.value = ''
  }
  </script>