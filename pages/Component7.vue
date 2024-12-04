<template>
    <div class="grid-container">
      <!-- 1st Row Container -->
      <div class="container">
        <div class="bookmark-icon">
          <span class="bookmark-text">01</span> <!-- Bookmark üzerindeki yazı -->
        </div>
        <a href="#">
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/71.png" alt="Image 1" class="circle-image" />
          </div>
          <p class="circle-text">Core Ultra 7</p>
        </div>
    </a>

    <a href="#">
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/72.png" alt="Image 2" class="circle-image" />
          </div>
          <p class="circle-text">Intel z890</p>
        </div>
</a>


<a href="#">
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/73.png" alt="Image 3" class="circle-image" />
          </div>
          <p class="circle-text">32GB DDR5</p>
        </div>
        </a>

        <a href="#">
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/74.png" alt="Image 4" class="circle-image" />
          </div>
          <p class="circle-text">RTX 470Ti</p>
        </div>

        </a>
        <a href="#">
        <p class="additional-text1">...</p> <!-- 1. Container sonrası metin -->
        </a>
        <p class="yazilar">$2,150.89</p> 
        <!-- Button under the price -->
        <button class="white-button">VIEW DETAIL</button>
        <button class="action-button">CUSTOMIZE IT</button>
      </div>
      
  
      <!-- 2nd Row Container -->
      <div class="container">
        <div class="bookmark-icon">
          <span class="bookmark-text">02</span>
        </div>
        <a href="#">

        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/x1.png" alt="Image 5" class="circle-image" />
          </div>
          <p class="circle-text">Ryzen 7</p>
        </div>
        </a>
        <a href="#">
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/x2.png" alt="Image 6" class="circle-image" />
          </div>
          <p class="circle-text">AMD X870</p>
        </div>
        </a>
        <a href="#">

        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/x3.png" alt="Image 7" class="circle-image" />
          </div>
          <p class="circle-text">32 GB DDR5</p>
        </div>
        </a>
        <a href="#">

        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/x4.png" alt="Image 8" class="circle-image" />
          </div>
          <p class="circle-text">RX 7900 XTX</p>
        </div>
        </a>
        <a href="#">
        <p class="additional-text1">...</p> <!-- 1. Container sonrası metin -->
        </a>
        <p class="yazilar">$2,150.89</p> 
        <!-- Button under the price -->
        <button class="white-button">VIEW DETAIL</button>
        <button class="action-button">CUSTOMIZE IT</button>
      </div>
  
      <!-- 3rd Row Container -->
      <div class="container">
        <div class="bookmark-icon">
          <span class="bookmark-text">03</span>
        </div>

        <a href="#">

        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/y1.png" alt="Image 9" class="circle-image" />
          </div>
          <p class="circle-text">RYZEN 7700X</p>
        </div>

        </a>
        <a href="#">

        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/y2.png" alt="Image 10" class="circle-image" />
          </div>
          <p class="circle-text">AMD B65DE</p>
        </div>
        </a>
        <a href="#">

        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/y3.png" alt="Image 11" class="circle-image" />
          </div>
          <p class="circle-text">32 GB DDR5</p>
        </div>
        </a>
        <a href="#">

        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/y4.png" alt="Image 12" class="circle-image" />
          </div>
          <p class="circle-text">RTX 4060 Ti</p>
        </div>
        </a>
        <a href="#">
        <p class="additional-text1">...</p> <!-- 1. Container sonrası metin -->
        </a>
        <p class="yazilar">$2,150.89</p> 
        <!-- Button under the price -->
        <button class="white-button">VIEW DETAIL</button>
        <button class="action-button">CUSTOMIZE IT</button>
      </div>
  
      <!-- 4th Row Container -->
      <div class="container">
        <div class="bookmark-icon">
          <span class="bookmark-text">04</span>
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/o1.png" alt="Image 13" class="circle-image" />
          </div>
          <p class="circle-text">Ryzen 5 7600</p>
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/o2.png" alt="Image 14" class="circle-image" />
          </div>
          <p class="circle-text">32 GB DDR5</p>
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/o3.png" alt="Image 15" class="circle-image" />
          </div>
          <p class="circle-text">AMD B650</p>
        </div>
        <div class="circle-with-text">
          <div class="circle-container">
            <img src="/o4.png" alt="Image 16" class="circle-image" />
          </div>
          <p class="circle-text">RTX 4060 Ti</p>
        </div>
        <a href="#">
        <p class="additional-text1">...</p> <!-- 1. Container sonrası metin -->
        </a>
        <p class="yazilar">$2,150.89</p> 
        <!-- Button under the price -->
        <button class="white-button">VIEW DETAIL</button>
        <button class="action-button">CUSTOMIZE IT</button>
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
  
  .container {
  background-color: #f8e2bb;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 10px;
  align-items: center;
  position: relative;
  height: 145px; /* Make container height flexible */
  
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
  
  /* Metinler için stil */
  .additional-text1 {
    font-weight: bold;
    text-align: center;
    font-size: 40px;
    font-weight: normal;
    color: #555;
    top: -115px; /* Space between the circle containers and the text */
    position: relative;
    margin-left: 356px;
  }

  .yazilar {
    font-weight: bold;
    text-align: center;
    font-size: 16px;
    
    color: #000000;
    top: -190px; /* Space between the circle containers and the text */
    position: relative;
    margin-left: 450px;
  }
/* Button styling */
.action-button {
    white-space:nowrap;
    margin-left: 420px;
  background-color: #ff9500; /* Orange color */
  color: rgb(0, 0, 0); /* Text color */
  border: 1px solid rgb(243, 94, 40); /* Remove border */
  padding: 5px 10px; /* Padding for the button */
  font-size: 12px; /* Font size */
  font-weight: bold; /* Bold text */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  margin-top: -290px; /* Space above the button */
  display: block; /* Make it a block element to take full width */
  width: 100px; /* Button takes full width of its container */
  height: 27px;
  text-align: center; /* Center text */
  transition: background-color 0.3s ease; /* Smooth transition */
}

/* Button hover effect */
.action-button:hover {
  background-color: #ff6600; /* Darker orange on hover */
}

.white-button {
    white-space:nowrap;
    margin-left: 420px;
  background-color: #ffffff; /* Orange color */
  color: rgb(0, 0, 0); /* Text color */
  border: 1px solid rgb(169, 169, 169); /* Remove border */
  padding: 5px 10px; /* Padding for the button */
  font-size: 12px; /* Font size */
  font-weight: bold; /* Bold text */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  margin-top: -350px; /* Space above the button */
  display: block; /* Make it a block element to take full width */
  width: 100px; /* Button takes full width of its container */
  height: 27px;
  text-align: center; /* Center text */
  transition: background-color 0.3s ease; /* Smooth transition */
}

/* Button hover effect */
.white-button:hover {
  color:rgb(46, 32, 239) ; /* Darker orange on hover */
}


  </style>
  