<template>
    <UCarousel 
      v-slot="{ item }" 
      :items="items" 
      :ui="{ item: 'basis-full md:basis-1/3 lg:basis-1/4' }" 
      indicators 
      class="rounded-lg overflow-hidden flex gap-1"
    >
      <div class="relative">
        <img 
          :src="item" 
          class="w-full h-auto rounded-lg" 
          draggable="false"
          :style="{ width: '255px', height: '260px', marginRight: '0px' }" 
        >
        <!-- Text on top of the image, spaced evenly -->
        <div class="absolute inset-0 flex flex-col justify-center pl-4 space-y-1"> <!-- Reduced spacing -->
          <!-- Text with image background for 'Up to' -->
          <div class="font-bold text-sm text-transparent bg-clip-text" :style="{ backgroundImage: 'url(/ff.jpeg)' }">
            Up to
          </div>
      
          <!-- Text with image background for '81%' -->
          <div class="font-bold text-3xl text-transparent bg-clip-text" :style="{ backgroundImage: 'url(/ff.jpeg)' }">
            81% 
            <span class="text-sm font-normal font-bold">Off</span>
          </div>
      
          <div class="font-bold text-sm" :style="{ color: '#66ffff' }">
            PCS & Laptops
          </div>
    
          <!-- Adjusted image size -->
          <div>
            <img src="/carouselpc1.png" alt="Image description" class="custom-image">
          </div>
        </div>
      </div>
    </UCarousel>
  </template>
  
  <script setup lang="ts">
  const items = [
    '/bckg.png',  // Path to your image in the static folder
    '/bckg.png',
    '/bckg.png',
    '/bckg.png',
    '/bckg.png'
  ]
  </script>
  
  <style scoped>
  /* Additional styling for positioning the text */
  .relative {
    position: relative;
  }
  
  .absolute {
    position: absolute;
  }
  
  .text-white {
    color: white;
  }
  
  .font-bold {
    font-weight: bold;
  }
  
  .text-xl {
    font-size: 1.25rem;
  }
  
  .text-sm {
    font-size: 0.875rem;
  }
  
  .text-3xl {
    font-size: 3rem; /* Adjust to a larger size */
  }
  
  .text-sm {
    font-size: 0.875rem;  /* Smaller font for 'Off' */
  }
  
  .font-normal {
    font-weight: bold;  /* Normal weight for 'Off' */
  }
  
  .flex {
    display: flex;
  }
  
  .justify-center {
    justify-content: center;
  }
  
  .items-center {
    align-items: center;
  }
  
  /* Reduced spacing between text elements */
  .space-y-1 {
    gap: 4px; /* Smaller gap between text items */
  }
  
  /* Styling for the text with image background */
  .bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
  }
  
  /* Custom image class for sizing */
  .custom-image {
    width: 170px; /* Adjust the width */
    height: auto; /* Maintain aspect ratio */
    margin-top: 4px; /* Add some spacing if needed */
    margin-left: 50px;
  }
  </style>
  