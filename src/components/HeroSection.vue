<template>
    <!-- Hero Section -->
    <section id="home" class="min-h-screen py-20 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1.5\'/%3E%3C/g%3E%3C/svg%3E'); background-repeat: repeat;"></div>
      </div>
  
      <!-- Main Content -->
      <div class="max-w-7xl mx-auto relative">
        <div class="text-center space-y-8">
          <!-- OSCOV Logo/Text -->
          <h1 class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-7xl md:text-8xl font-extrabold mb-4 animate-gradient">
            OSCOV
          </h1>
          
          <!-- Tagline -->
          <div class="space-y-4">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800">
              Open Source Community of Vedas
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Bridging ancient wisdom with modern technology through open collaboration and innovation.
            </p>
          </div>
  
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="#join"
              class="inline-flex items-center px-8 py-3 rounded-full bg-black text-white text-lg font-medium hover:bg-gray-800 transition-colors group"
              @click.prevent="$emit('scrollTo', 'join')"
            >
              Join the Community
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="https://github.com/Vedas-OSCOV"
              target="_blank"
              class="inline-flex items-center px-8 py-3 rounded-full border-2 border-black text-lg font-medium hover:bg-black hover:text-white transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </div>
  
          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div class="text-center">
              <div class="text-4xl font-bold text-gray-800 mb-2">50+</div>
              <div class="text-gray-600">Community Members</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-gray-800 mb-2">10+</div>
              <div class="text-gray-600">Open Projects</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-gray-800 mb-2">200+</div>
              <div class="text-gray-600">Contributions</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-gray-800 mb-2">12+</div>
              <div class="text-gray-600">Active Events</div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Decorative Elements -->
      <div class="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  </template>
  
  <style scoped>
  .animate-gradient {
    background-size: 300%;
    animation: gradient 8s ease infinite;
  }
  
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  </style>