<template>
    <div class="min-h-screen bg-white">
      <!-- Header Section -->
      <div class="w-full bg-black text-white py-16">
        <div class="max-w-7xl mx-auto px-6">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Contributing Guidelines</h1>
          <p class="text-gray-300 text-lg md:text-xl max-w-2xl">
            Join us in building open-source computer vision solutions. Every contribution matters!
          </p>
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="max-w-7xl mx-auto px-6 md:px-20 py-12">
        <!-- Quick Links -->
        <section class="mb-12">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="https://github.com/Vedas-OSCOV"
               target="_blank"
               rel="noopener noreferrer"
               class="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-black transition-colors">
              <h3 class="font-semibold text-lg mb-2 flex items-center gap-2">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                GitHub Repository
              </h3>
              <p class="text-gray-600">View our source code and open issues</p>
            </a>
            <div class="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 class="font-semibold text-lg mb-2 flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Prerequisites
              </h3>
              <p class="text-gray-600">Python 3.8+, OpenCV, NumPy</p>
            </div>
            <div class="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 class="font-semibold text-lg mb-2 flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Release Schedule
              </h3>
              <p class="text-gray-600">Monthly releases with bug fixes</p>
            </div>
          </div>
        </section>
  
        <!-- Getting Started -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">Getting Started</h2>
          <div class="prose max-w-none">
            <ol class="space-y-4">
              <li class="text-gray-600">
                <span class="font-semibold text-black">Fork the Repository:</span><br/>
                Visit the <a href="https://github.com/Vedas-OSCOV" target="_blank" rel="noopener noreferrer"
                            class="text-black underline hover:no-underline">OSCOV GitHub repository</a> and click the "Fork" button.
              </li>
              <li class="text-gray-600">
                <span class="font-semibold text-black">Clone Your Fork:</span>
                <pre class="bg-gray-50 p-4 rounded-lg mt-2 font-mono text-sm">git clone https://github.com/YOUR_USERNAME/Vedas-OSCOV.git
  cd Vedas-OSCOV</pre>
              </li>
              <li class="text-gray-600">
                <span class="font-semibold text-black">Create a Virtual Environment:</span>
                <pre class="bg-gray-50 p-4 rounded-lg mt-2 font-mono text-sm">python -m venv venv
  source venv/bin/activate  # On Windows: venv\Scripts\activate</pre>
              </li>
              <li class="text-gray-600">
                <span class="font-semibold text-black">Install Dependencies:</span>
                <pre class="bg-gray-50 p-4 rounded-lg mt-2 font-mono text-sm">pip install -r requirements.txt</pre>
              </li>
            </ol>
          </div>
        </section>
      </div>
  
      <!-- CTA Section -->
      <section class="mt-16 px-6 sm:px-12">
        <div class="bg-black text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4">Ready to Contribute?</h2>
          <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of developers working to advance open-source computer vision technology.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://github.com/Vedas-OSCOV"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Start Contributing
            </a>
            <a
              href="#join"
              class="inline-block px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-colors"
            >
              Join Community
            </a>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
  * {
    font-family: 'Inter', sans-serif;
  }
  </style>
  