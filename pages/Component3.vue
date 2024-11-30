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
   <img src="/cizgiler.png" alt="Icon" class="button-image" />
            <div class="button-text">
              <span class="button-bold">Menu</span>
            </div>
</button>

<button class="yazilar">
    <div class="button-text">
        <span class="button-bold">
            Shell Shocker Deals
        </span>
    </div>
</button>

<button class="yazilar2">
    <div class="button-text">
        <span class="button-bold">
           Pc Builder
        </span>
    </div>
</button>
      
      </div>
  
      <!-- Menu that will show/hide based on the toggle state -->
      <div v-if="menuVisible" class="dropdown-menu">
        <div class="dropdown-lists">
        <!-- Left List -->
        <ul class="list-left">
          <li><a href="#">Today's Best Deals</a></li>
          <li><a href="#">Email Deals</a></li>
          <li><a href="#">Clearance - up to 70% off</a></li>
          <li><a href="#">Refreshed - Like new </a></li>
          <li><a href="#">Newegg Store Credit Card</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Black Friday Ultimate Sale</a></li>
          <li><a href="#">Shopping Tools</a></li>
          <li><a href="#">Shopping Tools</a></li>
          <li><a href="#">Shopping Tools</a></li>
          <li><a href="#">Shopping Tools</a></li>
          <li><a href="#">Shopping Tools</a></li>
          <li><a href="#">Shopping Tools</a></li>
          <li><a href="#">Shopping Tools</a></li>
          <li><a href="#">Shopping Tools</a></li>
        </ul>

        <!-- Right List -->
        <ul class="list-right ">
          <li><a href="#">Custom PC Builder</a></li>
          <li><a href="#">ASUS NUC Configurator</a></li>
          <li><a href="#">Menu Item 11</a></li>
          <li><a href="#">Menu Item 12</a></li>
          <li><a href="#">Menu Item 13</a></li>
          <li><a href="#">Menu Item 14</a></li>
          <li><a href="#">Menu Item 14</a></li>
          <li><a href="#">Menu Item 14</a></li>
          <li><a href="#">Menu Item 14</a></li>
          <li><a href="#">Menu Item 14</a></li>
          <li><a href="#">Menu Item 14</a></li>
          <li><a href="#">Menu Item 14</a></li>
          <li><a href="#">Menu Item 14</a></li>
          <li><a href="#">Menu Item 14</a></li>
          <li><a href="#">Menu Item 14</a></li>
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
    width: 30px;
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
    width: 380px; /* Reduced width */
    transition: border 0.3s ease;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('purple-to-blue.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .search-input:focus {
    outline: none;
    border: 2px solid #2703a8;
  }
  
  .search-button {
    background-color: #2703a8;
    border: none;
    border-radius: 25px;
    padding: 8px 20px;
    cursor: pointer;
    position: absolute;
    right: 570px; /* Adjusted right positioning */
    top: 40px;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
  }
  
  .search-button:hover {
    background-color: #3a1f8e;
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
    right: 700px; /* Adjusted right positioning */
    top: 40px;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
    color: black;
  }
  
  /* Notification button styles */
  .notification-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }
  
  .notification-button:hover {
    background-color: #f0f0f0;
  }
  
  .notification-icon {
    width: 24px;
    height: 24px;
  }
  
  /* Custom Toggle Styles */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
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
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    border-radius: 50px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }
  
  input:checked + .slider {
    background-color: #2703a8; /* Purple when toggled */
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
  font-size: 14px; /* Adjust font size if needed */
  color: black;
}


.yazilar2 {
  position: absolute; /* Position it absolutely within the container */
  left: 300px; /* Or use right: 300px; depending on your preference */
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
  font-size: 14px; /* Adjust font size if needed */
  color: black;
}
  </style>
  