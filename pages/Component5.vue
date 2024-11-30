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

        <div class="alt1">Operating Systems: Windows 11</div>
        <div class="alt2">Bit Version: 64 Bit</div>
        <div class="alt3">Version: Home</div>


        <button class="wish-button">MOVE TO WISHLIST</button>
        <button class="save-button">SAVE FOR LATER</button>
        <button class="remove-button">REMOVE</button>

        <div class="alt4">Available Promo Discount</div>
        
      </div>
  



      <!-- Sağ Konteyner -->
      <div class="container-item container-item-right">
        <div class="container-title">Summary</div>
       <div class="sag1"> Item(s): </div>
       <div class="sag2">Est. Delivery: </div>
       <div class="sag3">Promo Code Discount:</div>
       <div class="sag4">Apply Promo Code</div>

       <div class="search-container">
  <input type="text" class="search-bar"  />
  <button class="apply-button">Apply</button>
</div>

<div class="sag5">Est. Total:</div>
<button class="checkout">SECURE CHECKOUT</button>
<div class="or">OR</div>
<button class="checkout2">PAYPAL ile satın alın</button>
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
  



  .wish-button {
  color: black;
  background-color: rgba(193, 189, 189, 0.648);
  font-weight: bold;
  height: 30px;
  width: 160px; /* Increase width to make the button longer */
  border: 1px solid rgba(0, 0, 0, 0.258);
  margin-right: 215px;
  position: relative;  /* Add relative positioning */
  top: -190px;  /* Adjust this to move the button upwards */
  font-size: 11px;
  padding: 5px;
  right: 5px;
  border-radius: 4px;
  text-align: center; /* Align text to the center */
  white-space: nowrap; /* Prevent text from wrapping to a new line */
}


.save-button{
    color: black;
  background-color: rgba(193, 189, 189, 0.648);
  font-weight: bold;
  height: 30px;
  width: 160px; /* Increase width to make the button longer */
  border: 1px solid rgba(0, 0, 0, 0.258);
  margin-right: 215px;
  position: relative;  /* Add relative positioning */
  top: -220px;  /* Adjust this to move the button upwards */
  font-size: 11px;
  padding: 5px;
  right: -310px;
  border-radius: 4px;
  text-align: center; /* Align text to the center */
  white-space: nowrap; /* Prevent text from wrapping to a new line */
}



.remove-button{
    color: black;
  background-color: rgba(193, 189, 189, 0.648);
  font-weight: bold;
  height: 30px;
  width: 80px; /* Increase width to make the button longer */
  border: 1px solid rgba(0, 0, 0, 0.258);
  margin-right: 215px;
  position: relative;  /* Add relative positioning */
  top: -220px;  /* Adjust this to move the button upwards */
  font-size: 11px;
  padding: 5px;
  right: -240px;
  border-radius: 4px;
  text-align: center; /* Align text to the center */
  white-space: nowrap; /* Prevent text from wrapping to a new line */
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




  
.alt1 {
  color: rgb(0, 0, 0);
  margin-right: 215px;
  position: relative;  /* Add relative positioning */
  top: -190px;  /* Adjust this to move the price upwards */
  font-size: 11px;
  font-weight: bold;
  padding: 5px;
}

.alt2 {
  color: rgb(0, 0, 0);
  margin-right: 215px;
  position: relative;  /* Add relative positioning */
  top: -190px;  /* Adjust this to move the price upwards */
  font-size: 11px;
  font-weight: bold;
  padding: 5px;
  right:36px;
}

.alt3 {
  color: rgb(0, 0, 0);
  margin-right: 215px;
  position: relative;  /* Add relative positioning */
  top: -190px;  /* Adjust this to move the price upwards */
  font-size: 11px;
  font-weight: bold;
  padding: 5px;
  right:45px;
}



.alt4 {
  color: rgb(0, 0, 0);
  margin-right: 215px;
  position: relative;  /* Add relative positioning */
  top: -190px;  /* Adjust this to move the price upwards */
  font-size: 14px;
  font-weight: bold;
  padding: 5px;
  right:6px;
}


.sag1 {
  color: rgb(0, 0, 0);
  font-size: 14px;
 
  padding: 5px;
  position: relative;  /* Use relative positioning */
  top: 0;  /* Remove or adjust if needed */
  margin-left: 10px;  /* Adjust margin-left to keep it within the container */
  right: 30px; 
}

.sag2 {
  color: rgb(0, 0, 0);
  font-size: 14px;
 
  padding: 5px;
  position: relative;  /* Use relative positioning */
  top: 5;  /* Remove or adjust if needed */
  margin-left: 10px;  /* Adjust margin-left to keep it within the container */
  right: 15px; 
  white-space: nowrap;
}

.sag3 {
  color: rgb(0, 0, 0);
  font-size: 14px;
 
  padding: 5px;
  position: relative;  /* Use relative positioning */
  top: 5;  /* Remove or adjust if needed */
  margin-left: 10px;  /* Adjust margin-left to keep it within the container */
  right: -15px; 
  white-space: nowrap;
}

.sag4 {
  color: rgb(0, 0, 0);
  font-size: 17px;
 font-weight: bold;
  padding: 5px;
  position: relative;  /* Use relative positioning */
  top: 5;  /* Remove or adjust if needed */
  margin-left: 10px;  /* Adjust margin-left to keep it within the container */
  right: -15px; 
  white-space: nowrap;
}



.sag5 {
  color: rgb(0, 0, 0);
  font-size: 20px;
 font-weight:normal;
  padding: 5px;
  position: relative;  /* Use relative positioning */
  top: 5;  /* Remove or adjust if needed */
  margin-left: 10px;  /* Adjust margin-left to keep it within the container */
  right: 15px; 
  white-space: nowrap;
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



  .search-container {
  display: flex;
  align-items: center;  /* Vertically align the items */
  gap: 10px;  /* Add space between the search bar and button */
  margin-left: 27px;  /* Move the entire search bar and button to the right */
}

/* Styling for the search bar */
.search-bar {
  height: 35px;
  width: 250px;
  padding: 0 15px;
  border-radius: 5px;  /* Rounded edges */
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;  /* Remove default focus outline */
  background-color: white;
  color: black;  /* Set text color to black */
}

/* Focus style for the search bar */
.search-bar:focus {
  border-color: #007bff;  /* Change border color when focused */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);  /* Add subtle shadow */
}

/* Styling for the Apply button */
.apply-button {
  height: 35px;
  padding: 0 20px;
  border-radius: 5px;  /* Rounded edges */
  border: 1px solid #ccc;
  background-color: #ffffff;  /* Initial button background color */
  color: rgb(0, 0, 0);
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
}



.checkout {
  margin-left: 27px;
  width: 300px;
  height: 30px; /* Increased height for better visual appearance */
  padding: 0 30px;
  background-color: orange;  /* Orange background */
  color: rgb(0, 0, 0);  /* Black text color */
  border: 1px solid rgb(255, 100, 0);  /* Border with a specified width */
  border-radius: 4px;  /* Rounded corners */
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;  /* Smooth transition for background color change */
  text-align: center;
}

/* Hover effect to change background color */
.checkout:hover {
  background-color: darkorange;

}


.or{
    color:#333;
    padding: 10px;
    margin-left: 150px;
}



.checkout2 {
  margin-left: 55px;
  width: 250px;
  height: 30px; /* Increased height for better visual appearance */
  padding: 0 30px;
  background-color: rgb(23, 87, 198);  /* Orange background */
  color: rgb(255, 255, 255);  /* Black text color */
    /* Border with a specified width */
  border-radius: 4px;  /* Rounded corners */
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;  /* Smooth transition for background color change */
  text-align: center;
}

/* Hover effect to change background color */
.checkout2:hover {
  background-color: rgb(21, 80, 182);

}



  </style>
  