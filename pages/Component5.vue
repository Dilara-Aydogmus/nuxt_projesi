<template>
    <div class="wrapper">
    <!-- Shopping Cart title and Move to Wishlist button -->
    <div class="shopping-cart-header_bes">
      <div class="container-title_bes">Shopping Cart (1 item)</div>
      <div class="button-text_bes move-all_bes">❤︎  Move All To Wishlist</div>
      <div class="button-text_bes remove-all_bes">
  <img src="/trash.png" alt="Remove" class="trash-icon_bes" />
  Remove All
</div>
    </div>
  
    <!-- PRINT button aligned to the left -->
    <button class="print-button_bes">
        <img src="/printer.png" alt="Trash Icon" class="printer_bes" />
        PRINT</button>
  
    <div class="container_bes">
      <!-- Sol Konteyner -->
      <div class="container-item_bes container-item-left_bes">
        <!-- Image, text, and dropdown side-by-side -->
        <div class="image-text-container_bes">
          <img src="/w11.jpg" alt="Description of Image" class="image-left_bes" />
          <a href="#" class="text-link_bes">Microsoft Windows 11 Home (USB)</a>

          <select class="select-options_bes">
            <option disabled selected>1</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>Delete</option>
          </select>

        </div>
        <div class="test4_bes">$139</div>
  
        
        <div class="ikinci_bes">#1 BEST SELLER</div>
        <div class="ucuncu_bes">
          <a href="#" class="clickable-link_bes">in Operating Systems</a>
         
        </div>
        <div class="test_bes">
            <a href="#" class="clickable-link2_bes">Limit 5</a>
        </div>
        <div class="test2_bes"> <a href="#" class="clickable-link3_bes">2,000+ people have this item in their cart.</a></div>

        <span class="normal-font_bes">Operating Systems:</span> <span class="bold-font_bes">Windows 11</span>
        
        <div class="alt2_bes">Bit Version: 64 Bit</div>
        <div class="alt3_bes">Version: Home</div>


        <button class="wish-button_bes">❤︎ MOVE TO WISH LIST</button>
        <button class="save-button_bes">
            <img src="/kitap.png"  class="kitap_bes" />
            SAVE FOR LATER</button>
        <button class="remove-button_bes">
  <img src="/trash.png" alt="Trash Icon" class="trash-icon2_bes" />
  REMOVE
</button>
        
      </div>
  



      <!-- Sağ Konteyner -->
      <div class="container-item_bes container-item-right_bes">
        <div class="container-title_bes">Summary</div>
       <div class="sag1_bes"> Item(s): </div>
       <div class="bir_bes">$139</div> 
       <div class="sag2_bes">Est. Delivery: </div>
       <div class="iki_bes">$139</div> 
       <div class="sag3_bes">Promo Code Discount:</div>

       
       <div class="sag4_bes">Apply Promo Code</div>

       <div class="search-container_bes">
  <input type="text" class="search-bar_bes"  />
  <button class="apply-button_bes">Apply</button>
</div>

<div class="sag5_bes">Est. Total:</div>
<div class="sag5-value_bes">$139</div> 

<button class="checkout_bes">SECURE CHECKOUT</button>
<div class="or_bes">OR</div>
<button class="checkout2_bes">PAYPAL ile satın alın</button>
    </div>
</div>
</div>
  </template>
  
  <style scoped>
  .wrapper {
  margin-top: 50px; /* İçeriği 50px aşağı taşır */
  padding-top: 20px; /* Eğer içerik arasında boşluk isterseniz padding kullanabilirsiniz */
}
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
  .shopping-cart-header_bes {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
  }
  
  /* Title */
  .container-title_bes {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin-left:-3px;
  }
  
  /* Button text */
  .button-text_bes {
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    cursor: pointer;
  }

  .button-text_bes:hover{
    color:#007bff;
  }
  
  /* Move All To Wishlist */
  .move-all_bes {
    position: relative;
    left: 240px;
  }
  
  /* Remove All */
  .remove-all_bes {
    margin-left: 295px;
    position: relative;
    top:-10px;
  }
  
  /* Main container */
  .container_bes {
    display: flex;
    height: 290px;
    width: 80%;
    gap: 0;
    margin-top: 20px;

    
  }
  
  /* Each container item styling */
  .container-item_bes {
    padding: 20px;
   
    text-align: center;
  }
  
  /* Left container (white background) */
  .container-item-left_bes {
    background-color: white;
    width: 900px;
  }
  
  /* Right container (light gray background) */
  .container-item-right_bes {
    background-color: #f5f5f5;
    width:200px;
  }
  
  /* Container content text */
  p {
    color: #666;
  }
  
  /* Print button styling */
  .print-button_bes {
    color: black;
    background-color: white;
    font-weight: bold;
    height: 30px;
    width: 90px;
    border: 1px solid rgba(0, 0, 0, 0.258);
    position: absolute;
    right: 20px;
    top: 25px;

    text-align: center; /* Align text to the center */
  white-space: nowrap; /* Prevent text from wrapping to a new line */

  display: flex; /* Flexbox layout for icon and text alignment */
  align-items: flex-start; /* Aligns text at the top */
  gap: 7px; /* Space between icon and text */
  }
  

.print-button_bes:hover{
    color:#007bff;
}

  .wish-button_bes {
  color: black;
  background-color: rgba(193, 189, 189, 0.648);
  font-weight: bold;
  height: 30px;
  width: 160px; /* Increase width to make the button longer */
  border: 1px solid rgba(0, 0, 0, 0.258);
  margin-right: 215px;
  position: relative;  /* Add relative positioning */
  top: -185px;  /* Adjust this to move the button upwards */
  font-size: 11px;
  padding: 5px;
  right: 5px;
  border-radius: 4px;
  text-align: center; /* Align text to the center */
  white-space: nowrap; /* Prevent text from wrapping to a new line */
}


.save-button_bes{
    color: black;
  background-color: rgba(193, 189, 189, 0.648);
  font-weight: bold;
  height: 30px;
  width: 140px; /* Increase width to make the button longer */
  border: 1px solid rgba(0, 0, 0, 0.258);
  margin-right: 255px;
  position: relative;  /* Add relative positioning */
  top: -215px;  /* Adjust this to move the button upwards */
  font-size: 11px;
  padding: 5px;
  right: -340px;
  border-radius: 4px;
  text-align: center; /* Align text to the center */
  white-space: nowrap; /* Prevent text from wrapping to a new line */
  display: flex; /* Flexbox layout for icon and text alignment */
  align-items: flex-start; /* Aligns text at the top */
  gap: -5px; /* Space between icon and text */
}



.remove-button_bes{
    color: black;
  background-color: rgba(193, 189, 189, 0.648);
  font-weight: bold;
  height: 30px;
  width: 80px; /* Increase width to make the button longer */
  border: 1px solid rgba(0, 0, 0, 0.258);
  margin-right: 215px;
  position: relative;  /* Add relative positioning */
  top: -247px;  /* Adjust this to move the button upwards */
  font-size: 11px;
  padding: 5px;
  right: -650px;
  border-radius: 4px;
  text-align: center; /* Align text to the center */
  white-space: nowrap; /* Prevent text from wrapping to a new line */

  display: flex; /* Flexbox layout for icon and text alignment */
  align-items: flex-start; /* Aligns text at the top */
  gap: -5px; /* Space between icon and text */
}

.wish-button_bes:hover{
    background-color: #bcbbbb;
}

.remove-button_bes:hover{
    background-color: #bcbbbb;
}
.save-button_bes:hover{
    background-color: #bcbbbb;
}

  /* Image, text, and dropdown container */
  .image-text-container_bes{
    display: flex;
    align-items: center; /* Vertically align the text and dropdown with the image */
    gap: 10px; /* Add spacing between items */
  }
  
  /* Image styling */
  .image-left_bes {
    max-width: 160px;
    height: auto;
    margin: 0;
    position: relative; /* Add this line */
  top: 50px; /* Adjust this value to move the image down */
  }
  
  /* Text link styling */
  .text-link_bes {
    font-size: 14px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.776);
    text-decoration: none;
    cursor: pointer;
    
  }
  
  .text-link_bes:hover {
    text-decoration: underline;
    color:#007bff
  }
  
  /* Dropdown styling */
  .select-options_bes {
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
  .ucuncu_bes {
    color: black;
    margin-left: -200px;
    top: -105px;
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    position: relative;
    
  }

  .test_bes{
    color: black;
    left: 60px;
    top: -129px;
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    position: relative;
     
  }
  
  
  .test2_bes{
    color: black;
    margin-left: 580px;
    top: -130px;
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    position: relative; 
    white-space: normal; 
    text-align: left;

  }
  
  
  .test4_bes {
  color: rgb(0, 0, 0);
  margin-left: 660px;
  position: relative;  /* Add relative positioning */
  top: -80px;  /* Adjust this to move the price upwards */
  font-size: 25px;
  font-weight: bold;
  padding: 5px;
}




  
.alt1_bes {
  color: rgb(0, 0, 0);
  margin-right: 215px; 
  position: relative;  /* Add relative positioning */
  top: -190px;  /* Adjust this to move the price upwards */
  font-size: 11px;
  font-weight: bold;
  padding: 5px;
}

.alt2_bes {
  color: rgb(0, 0, 0);
  margin-right: 215px;
  position: relative;  /* Add relative positioning */
  top: -190px;  /* Adjust this to move the price upwards */
  font-size: 11px;
  font-weight: bold;
  padding: 5px;
  right:36px;
}

.alt3_bes {
  color: rgb(0, 0, 0);
  margin-right: 215px;
  position: relative;  /* Add relative positioning */
  top: -190px;  /* Adjust this to move the price upwards */
  font-size: 11px;
  font-weight: bold;
  padding: 5px;
  right:45px;
}


.sag1_bes {
  color: rgb(0, 0, 0);
  font-size: 14px;
 
  padding: 5px;
  position: relative;  /* Use relative positioning */
  top: 0;  /* Remove or adjust if needed */
  margin-left: 10px;  /* Adjust margin-left to keep it within the container */
  right: 30px; 
  top:20px;
  
}

.sag2_bes {
  color: rgb(0, 0, 0);
  font-size: 14px;
 
  padding: -45px;
  position: relative;  /* Use relative positioning */
  top: 5;  /* Remove or adjust if needed */
  margin-left: 10px;  /* Adjust margin-left to keep it within the container */
  right: 15px; 
  white-space: nowrap;
}

.sag3_bes {
  color: rgb(0, 0, 0);
  font-size: 14px;
 
  padding: -45px;
  position: relative;  /* Use relative positioning */
  top: 5;  /* Remove or adjust if needed */
  margin-left: 10px;  /* Adjust margin-left to keep it within the container */
  right: -15px; 
  white-space: nowrap;
}

.sag4_bes {
  color: rgb(0, 0, 0);
  font-size: 17px;
 font-weight: bold;
  padding: 5px;
  position: relative;  /* Use relative positioning */
  top: 5;  /* Remove or adjust if needed */
  margin-left: 10px;  /* Adjust margin-left to keep it within the container */
  right: -15px; 
  white-space: nowrap;
  margin-top: 20px;
}



.sag5_bes {
  color: rgb(0, 0, 0);
  font-size: 20px;
 font-weight:normal;
  padding: 5px;
  margin-top: 25px;  /* Remove or adjust if needed */
  margin-left: 10px;  /* Adjust margin-left to keep it within the container */
  right: 15px; 
  white-space: nowrap;
  position: relative; /* Ensure it has relative positioning */
  top: 15px; /* Adjust this value as needed to move the text down */
}



  /* Ensure clickable-link and clickable-link2 are positioned independently */
.clickable-link_bes {
  font-size: 12px;
  color: #242424; /* Blue color for the link */
  text-decoration: none;
  padding: 7px;
  margin-left: 120px;  /* Independent margin */
  text-decoration: underline;
  
}

.clickable-link2_bes {
  font-size: 12px;
  color: #000000; /* Blue color for the link */
  text-decoration: none;
  font-weight: normal;
  margin-left: 210px; /* Independent margin */
 
}

  .clickable-link3_bes {
    font-size: 12px;
    color: #00751d; /* Blue color for the link */
    text-decoration: none;
    font-weight: normal;
    padding: 20px;
    margin-left:60px;
  }

  .clickable-link_bes:hover {
    text-decoration: underline; /* Add underline effect on hover */
    color:#007bff
  }
  
  .ikinci_bes {
    display: flex;
    justify-content: center; /* Center-align the content horizontally */
    align-items: center; /* Center-align the content vertically */
    gap: 5px; /* Reduce spacing between items */
    color: #fff; /* White text color */
    margin-left: 170px;
    top: -80px;
    background-color: #0d50b5; /* Blue background */
    width: 90px; /* Reduce width */
    height: 20px; /* Set a fixed height for rectangle shape */
    font-weight: bold;
    font-size: 11px; /* Adjust font size */
    padding: 0px; /* Remove any extra padding */
    position: relative;
    white-space: nowrap;
  }



  .search-container_bes {
  display: flex;
  align-items: center;  /* Vertically align the items */
  gap: 10px;  /* Add space between the search bar and button */
  margin-left: 27px;  /* Move the entire search bar and button to the right */
  margin-top: 20px;
}

/* Styling for the search bar */
.search-bar_bes {
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
.search-bar_bes:focus {
  border-color: #007bff;  /* Change border color when focused */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);  /* Add subtle shadow */
}

/* Styling for the Apply button */
.apply-button_bes {
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

.apply-button_bes:hover{
    color:#007bff;
}

.checkout_bes {
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
.checkout_bes:hover {
  background-color: darkorange;

}


.or_bes{
    color:#333;
    padding: 10px;
    margin-left: 150px;
}



.checkout2_bes {
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
.checkout2_bes:hover {
  background-color: rgb(21, 80, 182);

}

.trash-icon_bes{
  width: 20px; /* Adjust size of the icon */
  height: 20px;
  right:20px; /* Space between icon and text */
  vertical-align: middle; /* Align icon with text */

  position: relative;
  top:23px;
  
}

.trash-icon2_bes {
  width: 20px; /* Adjust size of the icon */
  height: 20px;
  right:5px; /* Space between icon and text */
  vertical-align: middle; /* Align icon with text */

  position: relative;
  top:0px;
  
}

.printer_bes {
  width: 20px; /* Adjust size of the icon */
  height: 20px;
  right:-5px; /* Space between icon and text */
  vertical-align: middle; /* Align icon with text */

  position: relative;
  top:5px;
  
}

.kitap_bes {
  width: 20px; /* Adjust size of the icon */
  height: 20px;
  right:5px; /* Space between icon and text */
  vertical-align: middle; /* Align icon with text */

  position: relative;
  top:0px;
  
}

.sag5-value_bes {
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-weight: bold;
  text-align: right; /* Align the value to the right */
  position: relative;
  top:-15px;
  left: 150px;
}

.bir_bes {
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-weight: bold;
  text-align: right; /* Align the value to the right */
  position: relative;
  top:-10px;
  left: 150px;
}

.iki_bes {
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-weight: bold;
  text-align: right; /* Align the value to the right */
  position: relative;
  top:-25px;
  left: 150px;
}

.normal-font_bes {
  font-weight: normal; /* Normal font */
  position: relative; /* Set position to relative */
  top: -190px; /* Adjust this value to move the text up */
  left: -104px; /* Adjust this value to move the text to the left */
  font-size: 12px;
}

.bold-font_bes {
  font-weight: bold; /* Bold font */
  position: relative; /* Set position to relative */
  top: -190px; /* Adjust this value to move the text up */
  left: -104px; /* Adjust this value to move the text to the left */
  font-size: 12px;
}
  </style>
  