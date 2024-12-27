<template>
    <div class="min-h-screen bg-white">
      <!-- Header Section -->
      <div class="w-full bg-black text-white py-16">
        <div class="max-w-7xl mx-auto px-6">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Code of Conduct - OSCOV</h1>
          <p class="text-gray-300 text-lg md:text-xl max-w-2xl">
            Our commitment to fostering an open and welcoming community
          </p>
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="max-w-7xl mx-auto px-20 py-12">
        <!-- Purpose Section -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">Our Purpose</h2>
          <p class="text-gray-600 mb-4">
            We are committed to providing a friendly, safe, and welcoming environment 
            for all contributors, regardless of gender, sexual orientation, disability, 
            ethnicity, religion, age, or similar personal characteristics.
          </p>
          <p class="text-gray-600">
            This code of conduct outlines our expectations for all those who participate 
            in our community, as well as the consequences for unacceptable behavior.
          </p>
        </section>
  
        <!-- Standards Section -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">Expected Standards</h2>
          <div class="grid gap-6">
            <div v-for="(standard, index) in standards" :key="index" 
                 class="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 class="font-semibold text-lg mb-3">{{ standard.title }}</h3>
              <p class="text-gray-600">{{ standard.description }}</p>
            </div>
          </div>
        </section>
  
        <!-- Enforcement Section -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-6">Enforcement</h2>
          <div class="bg-gray-50 rounded-xl border border-gray-100 p-6">
            <p class="text-gray-600 mb-4">
              Instances of abusive, harassing, or otherwise unacceptable behavior may be 
              reported by contacting the project team. All complaints will be reviewed 
              and investigated promptly and fairly.
            </p>
            <div class="flex items-center gap-3 text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:oscov@vedascollege.edu.np" class="hover:text-black transition-colors">
                oscov@vedascollege.edu.np
              </a>
            </div>
          </div>
        </section>
    
      </div>
    <!-- CTA Section -->
        <section class="mt-16 px-6 md:px-20">
          <div class="bg-black text-white rounded-2xl p-8 md:p-12">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">Join Our Community</h2>
            <p class="text-gray-300 mb-8 max-w-2xl">
              Be part of a welcoming community that values respect, inclusivity, and collaboration.
            </p>
            <a href="#join" 
               class="inline-block px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors">
              Become a Member
            </a>
          </div>
        </section>

    </div>
  </template>
  
  <script setup>
  const standards = [
    {
      title: "Inclusive Language",
      description: "Use welcoming and inclusive language, being respectful of differing viewpoints and experiences."
    },
    {
      title: "Respectful Behavior",
      description: "Show empathy towards other community members. Gracefully accept constructive criticism."
    },
    {
      title: "Professional Conduct",
      description: "Focus on what is best for the community. Demonstrate professional conduct in public spaces."
    },
    {
      title: "Open Collaboration",
      description: "Actively seek to acknowledge and learn from different perspectives and experiences within our community."
    }
  ]
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
  * {
    font-family: 'Inter', sans-serif;
  }
  </style>