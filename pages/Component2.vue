<template>
    <UCarousel 
      v-slot="{ item }" 
      :items="items" 
      :ui="{ item: 'basis-full md:basis-1/3 lg:basis-1/4' }" 
      indicators 
      class="rounded-lg overflow-hidden flex gap-1"
    >
      <div class="relative">
        <!-- Background Image for each item -->
        <img 
          :src="item.backgroundImage" 
          class="w-full h-auto rounded-lg" 
          draggable="false"
          :style="{ width: '255px', height: '260px', marginRight: '0px' }" 
        >
        <!-- Text over the image -->
        <div class="absolute inset-0 flex flex-col justify-center pl-4 space-y-1">
          <!-- Heading -->
          <div class="font-bold text-sm text-transparent bg-clip-text" :style="{ backgroundImage: 'url(/ff.jpeg)' }">
            {{ item.heading }}
          </div>
      
          <!-- Discount text -->
          <div class="font-bold text-3xl text-transparent bg-clip-text" :style="{ backgroundImage: 'url(/ff.jpeg)' }">
            {{ item.discount }}
            <span class="text-sm font-normal font-bold">Off</span>
          </div>
      
          <!-- Description -->
          <div class="font-bold text-sm" :style="{ color: '#66ffff' }">
            {{ item.description }}
          </div>
      
          <!-- Small Image with separate size adjustment for carousel3.png and carousel4.png -->
          <div>
            <img 
              :src="item.smallImage" 
              alt="Small Image" 
              :class="[
                'custom-image',
                { 'custom-image-carousel3': item.smallImage === '/carousel3.png' },
                { 'custom-image-carousel4': item.smallImage === '/carousel4.png' }
              ]" 
            />
          </div>
        </div>
      </div>
    </UCarousel>
  </template>
  
  <script setup lang="ts">
  const items = [
    {
      backgroundImage: '/bckg.png',  // Path to the background image
      heading: 'Up to 81%',
      discount: '81%',
      description: 'PCS & Laptops',
      smallImage: '/carouselpc1.png',  // Path to the small image
    },
    {
      backgroundImage: '/bckg.png',
      heading: 'Exclusive Deals',
      discount: '70%',
      description: 'Gaming Accessories',
      smallImage: '/carousel2.png',
    },
    {
      backgroundImage: '/bckg.png',
      heading: 'Special Offer',
      discount: '50%',
      description: 'Home Office Essentials',
      smallImage: '/carousel3.png', // This image will be smaller and with specific size
    },
    {
      backgroundImage: '/bckg.png',
      heading: 'New Arrivals',
      discount: '30%',
      description: 'Smart Home Devices',
      smallImage: '/carousel4.png', // This image will have a different size
    },
    {
      backgroundImage: '/bckg.png',
      heading: 'Limited Time',
      discount: '25%',
      description: 'Kitchen Appliances',
      smallImage: '/carousel5.png',
    },
  ];
  </script>
  
  <style scoped>
  /* General styling for position */
  .relative {
    position: relative;
  }
  
  .absolute {
    position: absolute;
  }
  
  /* Flex utilities */
  .flex {
    display: flex;
  }
  
  .justify-center {
    justify-content: center;
  }
  
  .items-center {
    align-items: center;
  }
  
  .space-y-1 {
    gap: 4px;  /* Reduced spacing between text items */
  }
  
  /* Styling for the text with background clip effect */
  .bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
  }
  
  /* Custom image size for all images */
  .custom-image {
    width: 170px;
    height: auto;
    margin-top: 4px;
    margin-left: 50px;
  }
  
  /* Custom size for carousel3.png */
  .custom-image-carousel3 {
    width: 100px; /* Specific size for carousel3.png */
    height: auto;
    margin-top: 4px;
    margin-left: 50px;
  }
  
  /* Custom size for carousel4.png */
  .custom-image-carousel4 {
    width: 150px; /* Specific size for carousel4.png */
    height: auto;
    margin-top: 4px;
    margin-left: 50px;
  }
  
  /* Text styling */
  .font-bold {
    font-weight: bold;
  }
  
  .text-sm {
    font-size: 0.875rem;
  }
  
  .text-3xl {
    font-size: 3rem;
  }
  
  .text-transparent {
    color: transparent;
  }
  
  .bg-clip-text {
    background-clip: text;
  }
  </style>
  