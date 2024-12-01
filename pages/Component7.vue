<template>
    <div class="grid-container">
      <!-- 1st Row -->
      <div class="container">
        <div class="bookmark-icon">
          <span class="bookmark-text">01</span> <!-- Bookmark üzerindeki yazı -->
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/71.png" alt="Image 1" class="circle-image" />
          </div>
          <p class="circle-text">Core Ultra 7</p> <!-- Altındaki metin -->
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/72.png" alt="Image 2" class="circle-image" />
          </div>
          <p class="circle-text">Intel z890</p>
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/73.png" alt="Image 3" class="circle-image" />
          </div>
          <p class="circle-text">32GB DDR5</p>
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/74.png" alt="Image 4" class="circle-image" />
       
          </div>

          <p class="circle-text">RTX 470Ti</p>
        </div>
      </div>
  
      <!-- 2nd Row -->
      <div class="container">
        <div class="bookmark-icon">
          <span class="bookmark-text">02</span>
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/a.svg" alt="Image 5" class="circle-image" />
          </div>
          <p class="circle-text">Image 5</p>
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/a.svg" alt="Image 6" class="circle-image" />
          </div>
          <p class="circle-text">Image 6</p>
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/a.svg" alt="Image 7" class="circle-image" />
          </div>
          <p class="circle-text">Image 7</p>
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/a.svg" alt="Image 8" class="circle-image" />
          </div>
          <p class="circle-text">Image 8</p>
        </div>
      </div>
  
      <!-- 3rd Row -->
      <div class="container">
        <div class="bookmark-icon">
          <span class="bookmark-text">03</span>
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/a.svg" alt="Image 9" class="circle-image" />
          </div>
          <p class="circle-text">Image 9</p>
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/a.svg" alt="Image 10" class="circle-image" />
          </div>
          <p class="circle-text">Image 10</p>
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/a.svg" alt="Image 11" class="circle-image" />
          </div>
          <p class="circle-text">Image 11</p>
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/a.svg" alt="Image 12" class="circle-image" />
          </div>
          <p class="circle-text">Image 12</p>
        </div>
      </div>
  
      <!-- 4th Row -->
      <div class="container">
        <div class="bookmark-icon">
          <span class="bookmark-text">04</span>
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/a.svg" alt="Image 13" class="circle-image" />
          </div>
          <p class="circle-text">Image 13</p>
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/a.svg" alt="Image 14" class="circle-image" />
          </div>
          <p class="circle-text">Image 14</p>
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/a.svg" alt="Image 15" class="circle-image" />
          </div>
          <p class="circle-text">Image 15</p>
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/a.svg" alt="Image 16" class="circle-image" />
          </div>
          <p class="circle-text">Image 16</p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Grid container with 2x2 layout */
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
    grid-gap: 20px; /* Space between containers */
    padding: 20px;
  }
  
  /* Styling for each rectangular container */
  .container {
    background-color: #f8e2bb;
    border-radius: 10px; /* Slight rounded corners */
    padding: 20px;
    display: flex;
    flex-wrap: wrap; /* Allow wrapping for circle-with-text elements */
    justify-content: start; /* Align items to the start */
    gap: 10px; /* Space between circle containers */
    align-items: center;
    position: relative; /* Required for positioning the bookmark */
  }
  
  /* Bookmark icon with text inside */
  .bookmark-icon {
    position: absolute;
    top: -4px; /* Distance from the top edge */
    left: -6px; /* Distance from the left edge */
    width: 40px; /* Icon width */
    height: 40px; /* Icon height */
    background-image: url('/bookmark.png'); /* Background image */
    background-size: cover; /* Cover the entire bookmark area */
    display: flex;
    justify-content: center; /* Center the text horizontally */
    align-items: center; /* Center the text vertically */
    border-radius: 50%; /* Optional: round the bookmark */
  }
  
  .bookmark-text {
    font-size: 14px; /* Adjust font size */
    font-weight: bold; /* Bold text for better visibility */
    color: white; /* Text color (adjust based on bookmark color) */
    text-align: center;
  }
  
  .circle-with-text {
    display: flex;
    flex-direction: column; /* Stack circle and text vertically */
    align-items: center; /* Center align items */
  }
  
  .circle-container {
    width: 80px; /* Circle size */
    height: 80px;
    background-color: white;
    border-radius: 50%; /* Make it a circle */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible; /* Allow image to overflow outside the circle */
  }
  
  /* Image inside the circle */
  .circle-image {
    width: auto;
    height: 60px; /* Adjust size */
    object-fit: cover;
  }
  
  /* Text below the circle */
  .circle-text {
    margin-top: 5px; /* Space between circle and text */
    font-size: 12px; /* Adjust font size */
    text-align: center;
    color: #333; /* Text color */
    font-weight: bold;
  }
  </style>
  