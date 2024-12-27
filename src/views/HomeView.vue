<template>
  <main class="min-h-screen">
    <!-- Hero Section -->
     <HeroSection id="home"/>

    <!-- About Us Section -->
    <section id="about" class="py-20 px-10 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">About Us</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-2xl shadow-sm">
            <div class="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Our Mission</h3>
            <p class="text-gray-600">Empowering student developers to create amazing projects and grow together as a community.</p>
          </div>
          
          <div class="bg-white p-8 rounded-2xl shadow-sm">
            <div class="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Community</h3>
            <p class="text-gray-600">Connect with like-minded developers, share knowledge, and collaborate on projects, workshops and bootcamps</p>
          </div>
          
          <div class="bg-white p-8 rounded-2xl shadow-sm">
            <div class="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Innovation</h3>
            <p class="text-gray-600">Stay ahead with cutting-edge technologies and continuous learning opportunities curated by OSCOV team.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Events Section -->
    <section id="events" class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="text-xl font-semibold mb-2">Monthly Virtual Meet</h3>
                <p class="text-gray-600">Join us for networking and tech talks</p>
              </div>
              <span class="px-4 py-1.5 bg-black text-white text-sm rounded-full">Open</span>
            </div>
            <p class="text-gray-500 mb-4">Dec 30, 2024 • 6:00 PM</p>
            <button class="text-sm font-medium text-black hover:underline">Learn More →</button>
          </div>

          <div class="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="text-xl font-semibold mb-2">Code Workshop</h3>
                <p class="text-gray-600">Hands-on Vue.js and Tailwind CSS</p>
              </div>
              <span class="px-4 py-1.5 bg-black text-white text-sm rounded-full">Community Members Only</span>
            </div>
            <p class="text-gray-500 mb-4">Jan 15, 2025 • 2:00 PM</p>
            <button class="text-sm font-medium text-black hover:underline">Learn More →</button>
          </div>
        </div>
      </div>
    </section>

  </main>
  <NewsLetter/>
</template>

<script setup>
import NewsLetter from '@/components/NewsLetter.vue';
import HeroSection from '@/components/HeroSection.vue';

</script>