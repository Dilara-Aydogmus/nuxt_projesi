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

    <div class="search-container2">
        
        <button class="alt">
            <img src="/icon-google.png"  class="icon" />
            SIGN IN WITH GOOGLE</button>
        <button class="alt2">   <img src="/apple.svg" class="icon2" />
            SIGN IN WITH APPLE</button>
      </div>
  

      <div class="text-container2">
        <a href="#"> 
          <p class="t">Terms & Conditions | Privacy Policy </p>
        </a>
        <a href="#"> 
        <p class="tt">Cookie Preferences</p>
        </a>
  
        <p class="tttt">© 2000-2024 Newegg Inc. All rights reserved.</p>
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

  .search-container2 {
    display: flex;
    flex-direction: column; /* Stacks items vertically */
    align-items: center;    /* Centers horizontally */
    gap: 20px;              /* Adds space between items */
    margin-top: 20px;       /* Adjust top margin as needed */
    margin-left: -50px;
  }

  .alt,
  .alt2 {
    width: 275px;
    height: 43px;
    padding: 0 30px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s ease;

    display: flex;               /* Make the button a flex container */
  justify-content: center;     /* Horizontally center the text */
  align-items: center;         /* Vertically center the text */
  position: relative;    
  }
  
  /* Specific styles for each button */
  .alt {
    background-color: rgb(253, 253, 253);
    color: rgb(0, 0, 0);
    border: 1px solid #ccc;
  }
  
  .alt:hover {
    border: 1px solid #1a29c5;
    color: #1a29c5;
  }
  
  .alt2 {
    background-color: rgb(253, 253, 253);
    color: rgb(0, 0, 0);
    border: 1px solid #ccc;
  }
  
  .alt2:hover {
    border: 1px solid #1a29c5;
    color: #1a29c5;
  }

  .text-container2  {
    display: flex;
    flex-direction: column; /* Stacks text items vertically */
    align-items: center;    /* Centers text horizontally */
    gap: 15px;              /* Adds spacing between text items */
    margin-top: 80px;       /* Adjust top margin as needed */
  }
  .t {
    color: rgb(87, 87, 87);
    font-weight: normal;
    font-size: 13px;
    text-decoration: underline; /* Underline for the link */
    margin-left: -50px;
    margin-top: -20px;
  }
  
  .tt {
    color: rgb(87, 87, 87);
    font-weight: normal;
    font-size: 13px;
    text-decoration: underline; /* Underline for the link */
    margin-left: -55px;
    margin-top: -10px;
  }
  
  .ttt {
    color: rgb(0, 0, 0);
font-weight: bold;
    font-size: 16px;
    text-decoration: underline;
    margin-left: 150px;
    margin-top: -38px;
  }
  
  .tttt {
    color: rgb(87, 87, 87);
    font-weight: normal;
    font-size: 13px;
    margin-left: -50px;
    margin-top: -10px;
  }

  .text2:hover, 
.text4:hover, 
.t:hover, 
.tt:hover {
  color: blue;
}

.icon, .icon2 {
  position: absolute;
  left: 10px;                  /* Adjust to position the icon from the left */
  top: 50%;                    /* Vertically centers the icon */
  transform: translateY(-50%); /* Adjusts vertical alignment */
  width: 20px;                 /* Control the size of the icon */
  height: 20px;
}
  </style>
  