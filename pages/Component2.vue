<template>
    <div class="carousel-container relative">
      <!-- UCarousel component with items -->
      <UCarousel
        :items="items"
        :ui="{ item: 'basis-1/5 md:basis-1/3 lg:basis-1/3' }"
        arrows
        class="rounded-lg overflow-hidden flex gap-1"
      >
        <template v-slot="{ item }">
          <div class="relative">
            <!-- Background Image for each item -->
            <img 
              :src="item.backgroundImage" 
              class="w-full h-auto rounded-lg" 
              draggable="false"
              :style="{ width: '255px', height: '260px', marginRight: '0px' }" 
            />
            <!-- Text over the image -->
            <div class="absolute inset-0 flex flex-col justify-center pl-4 space-y-1">
              <div class="font-bold text-sm text-transparent bg-clip-text" :style="{ backgroundImage: 'url(/ff.jpeg)' }">
                {{ item.heading }}
              </div>
              <div class="font-bold text-3xl text-transparent bg-clip-text" :style="{ backgroundImage: 'url(/ff.jpeg)' }">
  {{ item.discount }}
  <span class="text-sm font-bold" style="font-weight: 900;">Off</span>
</div>
              <div class="font-bold text-sm" :style="{ color: '#66ffff' }">
                {{ item.description }}
              </div>
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
        </template>
    
        <!-- Left Arrow Button (For Previous Slide) -->
        <template #prev="{ onClick, disabled }">
          <button :disabled="disabled" @click="onClick" class="left-button">
            <div class="font-bold text-3xl text-transparent bg-clip-text flex justify-center items-center">
              <img src="/ok2.png" alt="OK Image" class="w-8 h-8"  />
            </div>
          </button>
        </template>
    
        <!-- Right Arrow Button (For Next Slide) -->
        <template #next="{ onClick, disabled }">
          <button :disabled="disabled" @click="onClick" class="right-button">
            <div class="font-bold text-3xl text-transparent bg-clip-text flex justify-center items-center">
              <img src="/pages/ok.png" alt="OK Image" class="w-8 h-8" />
            </div>
          </button>
        </template>
      </UCarousel>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Items for carousel
  const items = [
    {
      backgroundImage: '/bckg.png',
      heading: 'Up to',
      discount: '81%',
      description: 'PCS & Laptops',
      smallImage: '/carouselpc1.png',
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
      smallImage: '/carousel3.png',
    },
    {
      backgroundImage: '/bckg.png',
      heading: 'New Arrivals',
      discount: '30%',
      description: 'Smart Home Devices',
      smallImage: '/carousel4.png',
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
  
  /* Left Arrow Button Styling */
  .left-button {
    background-image: url('/bkg.jpg'); /* Add your desired background image */
    background-size: cover;
    background-position: center;
    width: 50px;
    height: 50px;
    opacity: 0.7;
    border: 2px solid #e60073;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    border-radius: 50%;
  }
  
  .left-button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  /* Right Arrow Button Styling */
  .right-button {
    background-image: url('/bkg.jpg'); /* Add your desired background image */
    background-size: cover;
    background-position: center;
    width: 50px;
    height: 50px;
    opacity: 0.7;
    border: 2px solid #e60073;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    border-radius: 50%;
  }
  
  .right-button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  button:hover:not(:disabled) {
    opacity: 1;
  }
  
  /* Set the height of the carousel to make it shorter */
  .carousel-container {
  height: 500px; /* Adjust the height as needed */
  width: 800px; /* Take up the full width of the parent */
  /* Optional: Set a max-width to control the carousel's overall width */
  margin: auto; /* Center the carousel */
}


  </style>
  