<template>
    <nav class="navbar">
      <div class="navbar-container">
        <!-- PNG Image at the start of the navbar -->
        <img src="/logo.SVG" alt="Logo" class="navbar-logo" />
    
        <!-- Button with bold text, "Select Address" under it, and PNG image -->
        <button class="navbar-button">
          <img src="/konum.png" alt="Icon" class="button-image" />
          <div class="button-text">
            <span class="button-subtext">Hello</span>
            <span class="button-bold">Select Address</span>
          </div>
        </button>
    
        <div class="navbar-search">
          <input type="text" placeholder="Search..." class="search-input" />
          <button class="search-button">
            <img src="/search.png" alt="Search" class="search-icon" />
          </button>
    
          <button class="search-button2">
            ssd hard drive
          </button>
    
          <button class="notification-button">
            <img src="/zil.png" alt="Notification" class="notification-icon" />
          </button>
          <button class="notification-button">
            <img src="/bayrak.png" alt="Notification" class="notification-icon" />
          </button>
    
          <label class="switch">
            <input type="checkbox" v-model="toggleState" />
            <span class="slider"></span>
          </label>
    
          <button class="navbar-button">
            <img src="/insan.png" alt="Icon" class="button-image" />
            <div class="button-text">
              <span class="button-subtext">Welcome</span>
              <span class="button-bold">Sign in / Register</span>
            </div>
          </button>
    
          <button class="navbar-button">
            <div class="button-text">
              <span class="button-subtext">Returns</span>
              <span class="button-bold">& Orders</span>
            </div>
          </button>
    
          <button class="notification-button">
            <img src="/avm.png" alt="Notification" class="notification-icon" />
          </button>
        </div>
      </div>
  
      <!-- New row and text added below the navbar container -->
      <div class="new-row">



        <!-- Toggle menu button -->
        <button class="toggle-menu-button" @click="toggleMenu">
   <img src="/menu16.png" alt="Icon" class="button-image" />
            <div class="button-text">
              <span class="button-bold">Menu</span>
            
            </div>
            <img src="/down.png" alt="Icon" class="button-image" />
</button>

<button class="yazilar">
    <div class="button-text">
        <span class="button-bold">
            Shell Shocker Deals
        </span>
    </div>
</button>


<button class="yazilargift">
    <div class="button-text">
        <span class="button-bold">
           Holiday Gift Guide
        </span>
    </div>
</button>

<button class="yazilar2">
    <div class="button-text">
        <span class="button-bold">
           PC Builder
        </span>
    </div>
</button>

<button class="yazilarclearance">
    <div class="button-text">
        <span class="button-bold">
          Clearance
        </span>
    </div>
</button>
      

<button class="yazilarbest">
    <div class="button-text">
        <span class="button-bold">
         Best Sellers
        </span>
    </div>
</button>
      
<button class="yazilarram">
    <div class="button-text">
        <span class="button-bold">
         Free RAM
        </span>
    </div>
</button>


<button class="yazilarn">
    <div class="button-text">
        <span class="button-bold">
         NEWEGG
        </span>
    </div>
</button>

<button class="yazilarb">
    <div class="button-text">
        <span class="button-bold">
         BUSINESS
        </span>
    </div>
</button>



<button class="yazilarone">
    <img src="/chat.png" alt="icon" class="button-icon">
    <div class="button-text">
     
        <span class="button-bold">
            Feedback
        </span>
    </div>
</button>

<button class="yazilartwo">
    <img src="/support.png" alt="icon" class="button-icon">
    <div class="button-text">
      
        <span class="button-bold">
            Help Center
        </span>
    </div>
</button>
      </div>
  
      <!-- Menu that will show/hide based on the toggle state -->
      <div v-if="menuVisible" class="dropdown-menu">
        <div class="dropdown-lists">
        <!-- Left List -->
        <ul class="list-left">
          <li><a href="#">
            <img src="/hourglass.png" class="list-item-icon" />
            Today's Best Deals</a></li>
          <li><a href="#">
            <img src="/letter.png" class="list-item-icon" />
            Email Deals</a></li>
          <li><a href="#">
            <img src="/tag.png" class="list-item-icon" />
            Clearance - up to 70% off</a></li>
          <li><a href="#">
            <img src="/refreshed.png" class="list-item-icon" />
            Refreshed - Like new </a></li>
          <li><a href="#">
            <img src="/credit.png" class="list-item-icon" />
            Newegg Store Credit Card</a></li>
            <li><a href="#" style="font-weight: bold; font-style: italic;">Trending</a></li>
          <li><a href="#">Black Friday Ultimate Sale</a></li>
          <li><a href="#" style="font-weight: bold; font-style: italic;">Shopping Tools</a></li>
          <li><a href="#">Custom PC Builder</a></li>
          <li><a href="#">ASUS NUC Configurator</a></li>
          <li><a href="#">Gaming PC Finder</a></li>
          <li><a href="#">Laptop Finder</a></li>
          <li><a href="#">Server Builder</a></li>
          <li><a href="#">NAS Builder</a></li>
          <li><a href="#">Memory Finder</a></li>
        </ul>

        <!-- Right List -->
        <ul class="list-right ">
            <li><a href="#" style="font-weight: bold; font-style: italic;">All Products</a></li>
          <li><a href="#">Components & Storage

            <img src="/xyz.png" class="testing" />


          </a></li>
          <li><a href="#">Computer Systems

            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Computer Peripherals
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Server & Components
            <img src="/xyz.png" class="testing" /> </a></li>
          <li><a href="#">Appliances
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Electronics
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Gaming & VR
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Networking
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Smart Home & Security
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Office Solutions
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Software & Services
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Automotive & Tools
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Home & Outdoors
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Health & Sports
            <img src="/xyz.png" class="testing" />
          </a></li>
        </ul>
      </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        toggleState: false, // Keeps track of the toggle state (false = off, true = on)
        menuVisible: false,  // This controls the visibility of the menu
      };
    },
    methods: {
      toggleMenu() {
        this.menuVisible = !this.menuVisible; // Toggles the visibility of the menu
      },
    },
  };
  </script>
  
  <style scoped>
  /* Base styles for navbar */
  .navbar {
    background-color: white;
    padding: 10px 20px;
    border-bottom: 2px solid #ddd;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column; /* Allow navbar to grow vertically */
    align-items: center; /* Center items vertically */
  }
  
  .navbar-container {
    display: flex;
    justify-content: flex-start; /* Align items in the start */
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .navbar-logo {
    height: 53px;
    margin-right: 20px; /* Add some margin to separate logo from next item */
  }
  
  /* Button and image styles */
  .navbar-button {
    padding: 8px 16px; /* Reduced padding for a more compact look */
    font-size: 14px;
    background-color: transparent;
    color: black;
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: left;
    gap: 8px;
  }
  
  .navbar-button:hover {
    background-color: #e1dedeeb;
  }
  
  .button-image {
    width: 25px;
    height: 30;
    margin-top: 2px;
  }
  
  .button-text {
    display: flex;
    flex-direction: column;
    text-align: left;
    color:black;

  }
  
  .button-bold {
    font-weight: bold;
  }
  
  .button-subtext {
    font-size: 12px;
    margin-top: 4px;
    color: #666;
  }
  
  /* Styles for the search bar */
  .navbar-search {
    display: flex;
    align-items: center;
    gap: 10px; /* Reduced space between elements inside navbar-search */
  }
  
  .search-input {
    padding: 8px 12px;
    border-radius: 25px;
    border: none;
    font-size: 14px;
    width: 385px; /* Reduced width */
    transition: border 0.3s ease;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('purple-to-blue.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .search-input:focus {
    outline: none;
    border: 2px solid #1737d6;
  }
  
  .search-button {
    background-color: #1737d6;
    border: none;
    border-radius: 25px;
    padding: 8px 20px;
    cursor: pointer;
    position: absolute;
    right: 565px; /* Adjusted right positioning */
    top: 40px;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
    margin-right: 2px;
  }
  
  .search-button:hover {
    background-color:#1737d6;
  }
  
  .search-icon {
    width: 22px;
    height: auto;
  }
  
  .search-button2 {
    background-color: #ffffffc8;
    border: none;
    border-radius: 5px;
    padding: 1px 4px;
    cursor: pointer;
    position: absolute;
    right: 650px; /* Adjusted right positioning */
    top: 40px;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
    color: black;
    font-size: 13px;
  }
  
  /* Notification button styles */
  .notification-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }
  
  .notification-button:hover {
    background-color: #f0f0f0;
  }
  
  .notification-icon {
    width: 31px;
    height: 31px;
  }
  
  /* Custom Toggle Styles */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 50px;
    border: 1px solid rgb(0, 0, 0);
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    border-radius: 50px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
  }
  
  input:checked + .slider {
    background-color: #d66017;/* Purple when toggled */
  }
  
  input:checked + .slider:before {
    transform: translateX(26px); /* Move the slider to the right */
  }
  
  /* New row and text styles */
  .new-row {
    width: 100%;
    background-color: white; /* Set background color to white */
    padding: 10px 20px;
    display: flex;
    justify-content: flex-start; /* Align items to the left */
    align-items: center;
    margin-top: 10px;
    position: relative; /* To position the toggle menu on the left */
  }
  
  .new-text {
    font-size: 16px;
    color: #333;
    text-align: center;
    margin-left: 50px; /* Give space for the toggle menu */
  }
  
  .toggle-menu-button {
  background-color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  position: absolute;
  left: 10px; /* Position the button on the left */
  top: 50%;
  transform: translateY(-50%);
  border-radius: 25px; /* Rounded corners */
  height: 40px; /* Thinner button */
  width: 120px; /* Longer button */
  display: flex;
  align-items: center; /* Aligns text and image vertically */
  justify-content: center; /* Centers content horizontally */
  padding: 0 10px; /* Padding for left and right */
  color:black;
}
  
.toggle-menu-button:hover {
  background-color: #dcdcdc; /* Light gray color when hovered */
}

  .menu-icon {
    width: 35px;
    height: 40px;
  }
  
  /* Dropdown Menu */
  .dropdown-menu {
  position: absolute;
  left: 50px; /* Adjust the position based on where you want it */
  top: 120px;
  background-color: rgb(221, 229, 238);
  border: 1px solid #ddd;
  padding: 0px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: 600px; /* Set a fixed height */
  overflow-y: auto; /* Allow scrolling if items overflow */
  width: 500px;


}

.dropdown-menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.dropdown-menu li {
  margin-bottom: 8px;
}

.dropdown-menu a {
  text-decoration: none;
  color: #000000;
  font-size: 14px;
}

.dropdown-menu a:hover {
  color: #3a1f8e;
}

.dropdown-lists {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.list-left, .list-right {
  flex: 1; /* Both lists take equal width */
  padding: 10px;

}


.list-left li,
.list-right li {
  margin-bottom: 8px;
  margin-top:  20px;
}

.list-left a,
.list-right a {
  text-decoration: none;
  color: #000000;
  font-size: 14px;
  padding: 20px;
}

.list-left a:hover,
.list-right a:hover {
  color: #3a1f8e;
}

.list-right {
  background-color: white; /* White background for the right list */
  border-radius: 0px;
 
 
}

.list-left {
  background-color: rgba(235, 245, 253, 0.9); /* White background for the right list */
  border-radius: 0px;

}

/* Styling for webkit-based browsers */
.dropdown-menu::-webkit-scrollbar {
  width: 8px; /* Set the width of the scrollbar */
}

.dropdown-menu::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2); /* Thumb color */
  border-radius: 10px; /* Rounded edges for the thumb */
}

.dropdown-menu::-webkit-scrollbar-track {
  background-color: transparent; /* Track color */}

  .yazilar {
  position: absolute; /* Position it absolutely within the container */
  left: 150px; /* Or use right: 300px; depending on your preference */
  /* You can adjust the left value to control the horizontal placement */
  display: flex;
  align-items: center; /* Center vertically within the container */

}

.yazilar .button-text {
  display: flex;
  flex-direction: column;
  text-align: right; /* Align text to the right */

}

.yazilar .button-bold {
  font-weight: bold;
  font-size: 13px; /* Adjust font size if needed */
  color: black;
}


.yazilar2 {
  position: absolute; /* Position it absolutely within the container */
  left: 450px; /* Or use right: 300px; depending on your preference */
  /* You can adjust the left value to control the horizontal placement */
  display: flex;
  align-items: center; /* Center vertically within the container */
}

.yazilar2 .button-text {
  display: flex;
  flex-direction: column;
  text-align: right; /* Align text to the right */
}

.yazilar2 .button-bold {
  font-weight: bold;
  font-size: 13px; /* Adjust font size if needed */
  color: black;
}

.yazilargift {
  position: absolute; /* Position it absolutely within the container */
  left: 305px; /* Or use right: 300px; depending on your preference */
  /* You can adjust the left value to control the horizontal placement */
  display: flex;
  align-items: center; /* Center vertically within the container */
}

.yazilargift .button-text {
  display: flex;
  flex-direction: column;
  text-align: right; /* Align text to the right */
}

.yazilargift .button-bold {
  font-weight: bold;
  font-size: 13px; /* Adjust font size if needed */
  color: black;
}

.yazilarclearance{
  position: absolute; /* Position it absolutely within the container */
  left: 540px; /* Or use right: 300px; depending on your preference */
  /* You can adjust the left value to control the horizontal placement */
  display: flex;
  align-items: center; /* Center vertically within the container */
}

.yazilarclearance .button-text {
  display: flex;
  flex-direction: column;
  text-align: right; /* Align text to the right */
}

.yazilarclearance .button-bold {
  font-weight: bold;
  font-size: 13px; /* Adjust font size if needed */
  color: black;
}



.yazilarbest{
  position: absolute; /* Position it absolutely within the container */
  left: 640px; /* Or use right: 300px; depending on your preference */
  /* You can adjust the left value to control the horizontal placement */
  display: flex;
  align-items: center; /* Center vertically within the container */
}

.yazilarbest .button-text {
  display: flex;
  flex-direction: column;
  text-align: right; /* Align text to the right */
}

.yazilarbest .button-bold {
  font-weight: bold;
  font-size: 13px; /* Adjust font size if needed */
  color: black;
}

.yazilarram{
  position: absolute; /* Position it absolutely within the container */
  left: 740px; /* Or use right: 300px; depending on your preference */
  /* You can adjust the left value to control the horizontal placement */
  display: flex;
  align-items: center; /* Center vertically within the container */
}

.yazilarram .button-text {
  display: flex;
  flex-direction: column;
  text-align: right; /* Align text to the right */
}

.yazilarram .button-bold {
  font-weight: bold;
  font-size: 13px; /* Adjust font size if needed */
  color: black;
}

.yazilarn{
  position: absolute; /* Position it absolutely within the container */
  left: 840px; /* Or use right: 300px; depending on your preference */
  /* You can adjust the left value to control the horizontal placement */
  display: flex;
  align-items: center; /* Center vertically within the container */
}

.yazilarn .button-text {
  display: flex;
  flex-direction: column;
  font-style: italic;

  text-align: right; /* Align text to the right */
}

.yazilarn .button-bold {
  font-weight: bold;
  font-size: 14px; /* Adjust font size if needed */
  color:#1737d6;
}

.yazilarb{
  position: absolute; /* Position it absolutely within the container */
  left: 902px; /* Or use right: 300px; depending on your preference */
  /* You can adjust the left value to control the horizontal placement */
  display: flex;
  align-items: center; /* Center vertically within the container */
 
}

.yazilarb .button-text {
  display: flex;
  flex-direction: column;
  text-align: right; /* Align text to the right */
  font-style: italic;
}

.yazilarb .button-bold {
  font-weight: bold;
  font-size: 14px; /* Adjust font size if needed */
  color: black;
}










.list-item-icon {
  width: 20px; /* Adjust the size of the image */
  height: auto;
  margin-right: 10px; /* Space between image and text */
  vertical-align: middle; /* Aligns the image with the text */
}

.list-left a {
  display: flex;
  align-items: center; /* Align the image and text vertically */
  padding: 1px 10px; 
}

.yazilarone {
  position: absolute; /* Position it absolutely within the container */
  left: 990px; /* Or use right: 300px; depending on your preference */
  display: flex;
  align-items: center; /* Center vertically within the container */
  background-color:#1e59e3; /* Blue background */
  padding: 10px 17px; /* Add some padding for better button appearance */
  border-radius: 15px; /* Rounded edges */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
  cursor: pointer; /* Make it look clickable */
  height: 24px;


}

.yazilarone .button-text {
  display: flex;
  flex-direction: column;
  text-align: right; /* Align text to the right */
  font-style: italic;
  color: white; /* Adjust text color to stand out against the blue background */
}

.yazilarone .button-bold {
  font-weight: bold;
  font-size: 13px; /* Adjust font size if needed */
  color: white; /* Adjust text color to stand out */
}



.yazilartwo {
  position: absolute; /* Position it absolutely within the container */
  left: 1110px; /* Or use right: 300px; depending on your preference */
  display: flex;
  align-items: center; /* Center vertically within the container */
  background-color: #1e59e3; /* Blue background */
  padding: 10px 17px; /* Add some padding for better button appearance */
  border-radius: 15px; /* Rounded edges */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
  cursor: pointer; /* Make it look clickable */
  height: 24px;
}

.yazilartwo .button-text {
 
  right: 5px; /* Align text to the right */
  margin-top: 20px; /* Center vertically */
  transform: translateY(-50%); /* Fine-tune vertical centering */
  font-size: 14px; /* Font size */
  color: white; /* Text color */
  text-align: right; /* Align text within its block */
  
}

.yazilartwo .button-bold {
  font-weight: bold;
  font-size: 13px; /* Adjust font size if needed */
  color: white; /* Adjust text color to stand out */
} 

.yazilarone .button-icon {
  width: 20px; /* Adjust the size of the icon */
  height: 20px;
  margin-left: -13px; /* Space between the image and text */
  margin-top: 5px;
  margin-right: 6px;
}

.yazilartwo .button-icon {
  width: 20px; /* Adjust the size of the icon */
  height: 20px;
  margin-left: -15px; /* Space between the image and text */
  margin-right: 6px;
} 

.yazilarone:hover {
  transform: scale(1.05); /* Increase size by 5% on hover */
  transition: transform 0.2s ease
}

.yazilartwo:hover {
  transform: scale(1.05); /* Increase size by 5% on hover */
  transition: transform 0.2s ease
}



.testing{
    width: 20px; /* Adjust the size of the image */
  height: auto;
  margin-right: 10px; /* Space between image and text */
  vertical-align: middle; /* Aligns the image with the text */
  margin-top: -20px;
  margin-bottom: -30px;

   /* Align the image to the right */
   position: absolute;
  right: 0; /* Aligns the image to the right of the container */
}
  </style>
  