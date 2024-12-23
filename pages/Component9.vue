<template>
    <div class="container_dokuz">
      <div class="header_dokuz">
        <img src="/siteikon.png" alt="Image 1" class="image_dokuz">
        <p class="text1_dokuz">Sign in</p>
      </div>
  
      <!-- Flex container for vertical alignment -->
      <div class="search-container_dokuz">
        <input type="text" class="search-bar_dokuz" placeholder="Email Address" />
        <button class="checkout_dokuz">SIGN IN</button>
        <button class="checkout2_dokuz">GET ONE-TIME SIGN IN CODE</button>
      </div>
  
      <!-- Text container -->
      <div class="text-container_dokuz">
        <a href="#"> 
          <p class="text2_dokuz">What's The One-Time Code?</p>
        </a>
  
        <p class="text3_dokuz">New To Newegg?</p>
  
        <a href="#"> 
          <p class="text4_dokuz">Sign Up</p>
        </a>
  
        <p class="text5_dokuz">OR</p>
      </div>
    </div>

    <div class="search-container2_dokuz">
        
        <button class="alt_dokuz">
            <img src="/icon-google.png"  class="icon_dokuz" />
            SIGN IN WITH GOOGLE</button>
        <button class="alt2_dokuz">   <img src="/apple.svg" class="icon2_dokuz" />
            SIGN IN WITH APPLE</button>
      </div>
  

      <div class="text-container2_dokuz">
        <a href="#"> 
          <p class="t_dokuz">Terms & Conditions | Privacy Policy </p>
        </a>
        <a href="#"> 
        <p class="tt_dokuz">Cookie Preferences</p>
        </a>
  
        <p class="tttt_dokuz">© 2000-2024 Newegg Inc. All rights reserved.</p>
      </div>
</template>
  
<style scoped>
.container_dokuz {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* Aligns everything from top */
    position: relative;
}
  
.header_dokuz {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}
  
.image_dokuz {
    height: 60px;
    width: auto;
    margin-left: 25px;
}
  
.text1_dokuz {
    color: black;
    font-weight: bold;
    font-size: 20px;
    position: relative;
    top: 70px; /* Adjust top to your liking */
    left: -110px;
}
  
/* Flexbox for vertical alignment */
.search-container_dokuz {
    display: flex;
    flex-direction: column; /* Stacks items vertically */
    align-items: center;    /* Centers horizontally */
    gap: 20px;              /* Adds space between items */
    margin-top: 50px;       /* Adjust top margin as needed */
    margin-left: -50px;
}
  
/* Styling for the search bar */
.search-bar_dokuz {
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
.checkout_dokuz,
.checkout2_dokuz {
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
.checkout_dokuz {
    background-color: orange;
    color: black;
    border: 1px solid rgb(255, 100, 0);
}
  
.checkout_dokuz:hover {
    background-color: darkorange;
}
  
.checkout2_dokuz {
    background-color: rgb(253, 253, 253);
    color: rgb(0, 0, 0);
    border: 1px solid #ccc;
}
  
.checkout2_dokuz:hover {
    border: 1px solid #1a29c5;
    color: #1a29c5;
}
  
/* Text container */
.text-container_dokuz {
    display: flex;
    flex-direction: column; /* Stacks text items vertically */
    align-items: center;    /* Centers text horizontally */
    gap: 15px;              /* Adds spacing between text items */
    margin-top: 30px;       /* Adjust top margin as needed */
}
  
/* Unique styling for each text */
.text2_dokuz {
    color: rgb(87, 87, 87);
    font-weight: normal;
    font-size: 13px;
    text-decoration: underline; /* Underline for the link */
    margin-left: -50px;
    margin-top: -20px;
}
  
.text3_dokuz {
    color: rgb(18, 18, 18);
    font-weight: normal;
    font-size: 16px;
    margin-left: -105px;
    margin-top: -10px;
}
  
.text4_dokuz {
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 16px;
    text-decoration: underline;
    margin-left: 90px;
    margin-top: -38px;
}
  
.text5_dokuz {
    color: rgb(79, 79, 79);
    font-weight: normal;
    font-size: 15px;
    text-transform: uppercase;
    margin-left: -50px;
    margin-top: -10px;
}

.search-container2_dokuz {
    display: flex;
    flex-direction: column; /* Stacks items vertically */
    align-items: center;    /* Centers horizontally */
    gap: 20px;              /* Adds space between items */
    margin-top: 20px;       /* Adjust top margin as needed */
    margin-left: -50px;
}

.alt_dokuz,
.alt2_dokuz {
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
.alt_dokuz {
    background-color: rgb(253, 253, 253);
    color: rgb(0, 0, 0);
    border: 1px solid #ccc;
}
  
.alt_dokuz:hover {
    border: 1px solid #1a29c5;
    color: #1a29c5;
}
  
.alt2_dokuz {
    background-color: rgb(253, 253, 253);
    color: rgb(0, 0, 0);
    border: 1px solid #ccc;
}
  
.alt2_dokuz:hover {
    border: 1px solid #1a29c5;
    color: #1a29c5;
}

.text-container2_dokuz {
    display: flex;
    flex-direction: column; /* Stacks text items vertically */
    align-items: center;    /* Centers text horizontally */
    gap: 15px;              /* Adds spacing between text items */
    margin-top: 80px;       /* Adjust top margin as needed */
}
.t_dokuz {
    color: rgb(87, 87, 87);
    font-weight: normal;
    font-size: 13px;
    text-decoration: underline; /* Underline for the link */
    margin-left: -50px;
    margin-top: -20px;
}
  
.tt_dokuz {
    color: rgb(87, 87, 87);
    font-weight: normal;
    font-size: 13px;
    text-decoration: underline; /* Underline for the link */
    margin-left: -55px;
    margin-top: -10px;
}
  
.ttt_dokuz {
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 16px;
    text-decoration: underline;
    margin-left: 150px;
    margin-top: -38px;
}
  
.tttt_dokuz {
    color: rgb(87, 87, 87);
    font-weight: normal;
    font-size: 13px;
    margin-left: -50px;
    margin-top: -10px;
}

.text2_dokuz:hover, 
.text4_dokuz:hover, 
.t_dokuz:hover, 
.tt_dokuz:hover {
    color: blue;
}

.icon_dokuz, .icon2_dokuz {
    position: absolute;
    left: 10px;                  /* Adjust to position the icon from the left */
    top: 50%;                    /* Vertically centers the icon */
    transform: translateY(-50%); /* Adjusts vertical alignment */
    width: 20px;                 /* Control the size of the icon */
    height: 20px;
}
</style>
