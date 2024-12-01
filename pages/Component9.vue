<template>
    <div class="container">
      <div class="header">
        <img src="/siteikon.png" alt="Image 1" class="image">
        <p class="text1">Sign in</p>
      </div>
  
      <!-- Flex container for vertical alignment -->
      <div class="search-container">
        <input type="text" class="search-bar" placeholder="Email Address" />
        <button class="checkout">SIGN IN</button>
        <button class="checkout2">GET ONE-TIME SIGN IN CODE</button>
      </div>
  
      <!-- Text container -->
      <div class="text-container">
        <a href="#"> 
          <p class="text2">What's The One-Time Code?</p>
        </a>
  
        <p class="text3">New To Newegg?</p>
  
        <a href="#"> 
          <p class="text4">Sign Up</p>
        </a>
  
        <p class="text5">OR</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* Aligns everything from top */
    position: relative;
  }
  
  .header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .image {
    height: 60px;
    width: auto;
    margin-left: 25px;
  }
  
  .text1 {
    color: black;
    font-weight: bold;
    font-size: 20px;
    position: relative;
    top: 70px; /* Adjust top to your liking */
    left: -110px;
  }
  
  /* Flexbox for vertical alignment */
  .search-container {
    display: flex;
    flex-direction: column; /* Stacks items vertically */
    align-items: center;    /* Centers horizontally */
    gap: 20px;              /* Adds space between items */
    margin-top: 50px;       /* Adjust top margin as needed */
    margin-left: -50px;
  }
  
  /* Styling for the search bar */
  .search-bar {
    height: 43px;
    width: 275px;
    padding: 0 15px;
    border-radius: 3px;
    border: 1px solid #ccc;
    font-size: 16px;
    outline: none;
    background-color: white;
    color: black;
  }
  
  /* Styling for the buttons */
  .checkout,
  .checkout2 {
    width: 275px;
    height: 43px;
    padding: 0 30px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s ease;
  }
  
  /* Specific styles for each button */
  .checkout {
    background-color: orange;
    color: black;
    border: 1px solid rgb(255, 100, 0);
  }
  
  .checkout:hover {
    background-color: darkorange;
  }
  
  .checkout2 {
    background-color: rgb(253, 253, 253);
    color: rgb(0, 0, 0);
    border: 1px solid #ccc;
  }
  
  .checkout2:hover {
    border: 1px solid #1a29c5;
    color: #1a29c5;
  }
  
  /* Text container */
  .text-container {
    display: flex;
    flex-direction: column; /* Stacks text items vertically */
    align-items: center;    /* Centers text horizontally */
    gap: 15px;              /* Adds spacing between text items */
    margin-top: 30px;       /* Adjust top margin as needed */
  }
  
  /* Unique styling for each text */
  .text2 {
    color: rgb(87, 87, 87);
    font-weight: normal;
    font-size: 13px;
    text-decoration: underline; /* Underline for the link */
    margin-left: -50px;
    margin-top: -20px;
  }
  
  .text3 {
    color: rgb(18, 18, 18);
    font-weight: normal;
    font-size: 16px;
    margin-left: -105px;
    margin-top: -10px;
  }
  
  .text4 {
    color: rgb(0, 0, 0);
font-weight: bold;
    font-size: 16px;
    text-decoration: underline;
    margin-left: 90px;
    margin-top: -38px;
  }
  
  .text5 {
    color: rgb(79, 79, 79);
    font-weight: normal;
    font-size: 15px;
    text-transform: uppercase;
    margin-left: -50px;
    margin-top: -10px;
  }
  </style>
  