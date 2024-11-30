<template>
    <!-- Shopping Cart title and Move to Wishlist button -->
    <div class="shopping-cart-header">
      <div class="container-title">Shopping Cart (1 item)</div>
      <div class="button-text move-all">Move All To Wishlist</div>
      <div class="button-text remove-all">Remove All</div>
    </div>
  
    <!-- PRINT button aligned to the left -->
    <button class="print-button">PRINT</button>
  
    <div class="container">
      <!-- Sol Konteyner -->
      <div class="container-item container-item-left">
        <!-- Image, text, and dropdown side-by-side -->
        <div class="image-text-container">
          <img src="/w11.jpg" alt="Description of Image" class="image-left" />
          <a href="#" class="text-link">Microsoft Windows 11 Home (USB)</a>

          <select class="select-options">
            <option disabled selected>1</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>Delete</option>
          </select>

        </div>
        <div class="test4">$139.99</div>
  
        
        <div class="ikinci">#1 Best Seller</div>
        <div class="ucuncu">
          <a href="#" class="clickable-link">in operating systems</a>
         
        </div>
        <div class="test">
            <a href="#" class="clickable-link2">Limit 5</a>
        </div>
        <div class="test2"> <a href="#" class="clickable-link3">2,000+ people have this item in their cart.</a></div>
      </div>
  
      <!-- Sağ Konteyner -->
      <div class="container-item container-item-right">
        <div class="container-title">Sağ Konteyner</div>
        <p>Sağ konteyner içeriği</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* General styling */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    background-color: #f0f0f0;
  }
  
  /* Shopping Cart Header */
  .shopping-cart-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
  }
  
  /* Title */
  .container-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  
  /* Button text */
  .button-text {
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    cursor: pointer;
  }
  
  /* Move All To Wishlist */
  .move-all {
    margin-left: 200px;
  }
  
  /* Remove All */
  .remove-all {
    margin-left: 20px;
  }
  
  /* Main container */
  .container {
    display: flex;
    height: 600px;
    width: 80%;
    gap: 0;
    margin-top: 20px;
  }
  
  /* Each container item styling */
  .container-item {
    padding: 20px;
   
    text-align: center;
  }
  
  /* Left container (white background) */
  .container-item-left {
    background-color: white;
    width: 900px;
  }
  
  /* Right container (light gray background) */
  .container-item-right {
    background-color: #f5f5f5;
    width:200px;
  }
  
  /* Container content text */
  p {
    color: #666;
  }
  
  /* Print button styling */
  .print-button {
    color: black;
    background-color: white;
    font-weight: bold;
    height: 30px;
    width: 90px;
    border: 1px solid rgba(0, 0, 0, 0.258);
    position: absolute;
    right: 20px;
    top: 25px;
  }
  
  /* Image, text, and dropdown container */
  .image-text-container {
    display: flex;
    align-items: center; /* Vertically align the text and dropdown with the image */
    gap: 10px; /* Add spacing between items */
  }
  
  /* Image styling */
  .image-left {
    max-width: 160px;
    height: auto;
    margin: 0;
  }
  
  /* Text link styling */
  .text-link {
    font-size: 14px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.776);
    text-decoration: none;
    cursor: pointer;
    
  }
  
  .text-link:hover {
    text-decoration: underline;
  }
  
  /* Dropdown styling */
  .select-options {
    font-size: 14px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    background-color: #ffffff;
    color: #000000;
    width: 50px;
    margin-left:90px;

  }
  
  /* Styling for the clickable "in operating systems" text */
  .ucuncu {
    color: black;
    margin-left: -200px;
    top: -105px;
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    position: relative;
    
  }

  .test{
    color: black;
    left: 65px;
    top: -129px;
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    position: relative;
     
  }
  
  
  .test2{
    color: black;
    margin-left: 590px;
    top: -155px;

    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    position: relative; 
     
  }
  
  
  .test4 {
  color: rgb(0, 0, 0);
  margin-left: 600px;
  position: relative;  /* Add relative positioning */
  top: -80px;  /* Adjust this to move the price upwards */
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
}
  /* Ensure clickable-link and clickable-link2 are positioned independently */
.clickable-link {
  font-size: 12px;
  color: #000000; /* Blue color for the link */
  text-decoration: none;
  padding: 7px;
  margin-left: 160px;  /* Independent margin */
  
}

.clickable-link2 {
  font-size: 12px;
  color: #000000; /* Blue color for the link */
  text-decoration: none;
  font-weight: normal;
  margin-left: 210px; /* Independent margin */
 
}

  .clickable-link3 {
    font-size: 12px;
    color: #00751d; /* Blue color for the link */
    text-decoration: none;
    font-weight: normal;
    padding: 20px;
    margin-left:60px;
  }

  .clickable-link:hover {
    text-decoration: underline; /* Add underline effect on hover */
  }
  
  .ikinci {
    display: flex;
    justify-content: center; /* Center-align the content horizontally */
    align-items: center; /* Center-align the content vertically */
    gap: 5px; /* Reduce spacing between items */
    color: #fff; /* White text color */
    margin-left: 170px;
    top: -80px;
    background-color: #0d50b5; /* Blue background */
    width: 85px; /* Reduce width */
    height: 25px; /* Set a fixed height for rectangle shape */
    font-weight: bold;
    font-size: 12px; /* Adjust font size */
    padding: 0; /* Remove any extra padding */
    position: relative;
    
  }
  </style>
  