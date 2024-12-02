<template>
    <div class="container-wrapper">
      <!-- Container 1 -->
      <div class="container" @mouseover="changeImage(1)" @mouseleave="resetImage(1)">
        <div 
          class="image-container" 
          :style="{ backgroundImage: 'url(' + currentImage1 + ')' }">
        </div>
        <a href="#" class="image-text">CCORSAIR iCUE H150i ELITE CAPELLIX XT Liquid CPU Cooler - AF120 RGB ELITE Fans - 360mm Radiator -</a>
        <a href="#" class="oylama">
            <img src="/oylama1.png" alt="Rating 1" />
        </a>
        <button class="test">
  <img src="/marka1.png" alt="Button Image" />
</button>


      </div>
  
      <!-- Container 2 -->
      <div class="container" @mouseover="changeImage(2)" @mouseleave="resetImage(2)">
        <div 
          class="image-container" 
          :style="{ backgroundImage: 'url(' + currentImage2 + ')' }">
        </div>
        <p>lowest price in 30 days</p>
        <a href="#" class="image-text">SAMA SM360 Black 360mm Liquid Water AIO CPU Cooler For Gaming PC Computer with</a>
        <a href="#" class="oylama2">
            <img src="/oylama2.png" />
        </a>
        <p>(601)</p>
      </div>
  
      <!-- Container 3 -->
      <div class="container" @mouseover="changeImage(3)" @mouseleave="resetImage(3)">
        <div 
          class="image-container" 
          :style="{ backgroundImage: 'url(' + currentImage3 + ')' }">
        </div>
        <a href="#" class="image-text">MSI 34" 240 Hz QD-OLED UWQHD Gaming Monitor 3440 x 1440 (2K) 97.8% Adobe RGB </a>
        <<a href="#" class="oylama3">
            <img src="/oylama1.png" alt="Rating 1" />
        </a>
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
    height: 700px; /* Reduced height to better fit the image size */
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
    margin-top: -100px;
  }
  
  .image-text {
    display: block;
    text-align: center;
    margin-top: -150px;
    font-size: 14px;
    color: #000000;
    
    font-weight: normal;
    padding: 10px 0;
  }

  .oylama {
  display: flex;
  justify-content: center; /* Centers the image horizontally */
  margin-top: -110px; /* Adjust vertical spacing */
  position: relative; /* Allows positioning within the container */
  margin-left: -200px;
}

.oylama2 {
  display: flex;
  justify-content: center; /* Centers the image horizontally */
  margin-top: -110px; /* Adjust vertical spacing */
  position: relative; /* Allows positioning within the container */
  margin-left: -200px;
}

.oylama3 {
  display: flex;
  justify-content: center; /* Centers the image horizontally */
  margin-top: -110px; /* Adjust vertical spacing */
  position: relative; /* Allows positioning within the container */
  margin-left: -200px;
}

.test {
  background-color: #111ba5;
  width: 70px; /* Set a width for the button */
  height: 30px; /* Set a height for the button */
  color: white; /* Optional: Set text color if you want text inside the button */
  display: flex;
  justify-content: center; /* Centers content horizontally */
  align-items: center; /* Centers content vertically */
  margin-top: -25px; /* Adjust vertical spacing */
  position: relative; /* Allows positioning within the container */
  margin-left: 210px; /* Adjust horizontal spacing */
  cursor: pointer; /* Makes it look clickable */
  border: none; /* Removes default border */

}
  </style>
  