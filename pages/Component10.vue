<template>
    <div class="container-wrapper">
      <!-- Container 1 -->
      <div class="container" @mouseover="changeImage(1)" @mouseleave="resetImage(1)">
        <div 
          class="image-container" 
          :style="{ backgroundImage: 'url(' + currentImage1 + ')' }">
        </div>
        <a href="#" class="image-text">Click here</a>
      </div>
  
      <!-- Container 2 -->
      <div class="container" @mouseover="changeImage(2)" @mouseleave="resetImage(2)">
        <div 
          class="image-container" 
          :style="{ backgroundImage: 'url(' + currentImage2 + ')' }">
        </div>
        <a href="#" class="image-text">Click here</a>
      </div>
  
      <!-- Container 3 -->
      <div class="container" @mouseover="changeImage(3)" @mouseleave="resetImage(3)">
        <div 
          class="image-container" 
          :style="{ backgroundImage: 'url(' + currentImage3 + ')' }">
        </div>
        <a href="#" class="image-text">Click here</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Set initial and hover images
        image1: '/kapak1.jpg',
        image2: '/kapak2.jpg',
        image3: '/kapak3.jpg',
        hoverImage1: '/kapak1alt.jpg',
        hoverImage2: '/kapak2alt.jpg',
        hoverImage3: '/kapak3alt.jpg',
  
        // Current image bindings for each container
        currentImage1: '/kapak1.jpg',
        currentImage2: '/kapak2.jpg',
        currentImage3: '/kapak3.jpg',
      };
    },
    methods: {
      changeImage(containerNumber) {
        // Set the appropriate image when hovered
        if (containerNumber === 1) {
          this.currentImage1 = this.hoverImage1;
        } else if (containerNumber === 2) {
          this.currentImage2 = this.hoverImage2;
        } else if (containerNumber === 3) {
          this.currentImage3 = this.hoverImage3;
        }
      },
      resetImage(containerNumber) {
        // Reset image to the original when mouse leaves
        if (containerNumber === 1) {
          this.currentImage1 = this.image1;
        } else if (containerNumber === 2) {
          this.currentImage2 = this.image2;
        } else if (containerNumber === 3) {
          this.currentImage3 = this.image3;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container-wrapper {
    display: flex;
    gap: 1px; /* Adds a 10px gap between each container */
  }
  
  .container {
    background-color: white;
    border-radius: 10px; /* Slightly rounded corners */
    overflow: hidden;    /* Ensures images stay within the container bounds */
    width: 300px;
    height: 300px; /* Reduced height to better fit the image size */
    position: relative;
    margin: 0;
  }
  
  .image-container {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; /* Image will now take up the full height of the container */
    background-position: center;
    background-size: contain; /* Ensures the whole image is contained within the container */
    background-repeat: no-repeat; /* Avoids image repetition if it doesn't cover the area */
    transition: background-image 0.3s ease; /* Smooth transition when changing the image */
  }
  
  .image-text {
    display: block;
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
    color: #007BFF;
    text-decoration: underline;
    font-weight: bold;
    padding: 10px 0;
  }
  </style>
  