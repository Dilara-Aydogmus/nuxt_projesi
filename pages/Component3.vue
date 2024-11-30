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
          <!-- Button inside the search bar -->
          <button class="search-button">
            <img src="/search.png" alt="Search" class="search-icon" />
          </button>

          <button class="search-button2">
           ssd hard drive
          </button>
          
  
          <!-- Notification buttons (Two bells) aligned horizontally -->
          <button class="notification-button">
            <img src="/zil.png" alt="Notification" class="notification-icon" />
          </button>
          <button class="notification-button">
            <img src="/bayrak.png" alt="Notification" class="notification-icon" />
          </button>
  
          <!-- Custom Toggle -->
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
            <span class="button-bold">&Orders</span>
          </div>
        </button>

        <button class="notification-button">
            <img src="/avm.png" alt="Notification" class="notification-icon" />
          </button>
        
        </div>
     
      </div>
     
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        toggleState: false, // Keeps track of the toggle state (false = off, true = on)
      };
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
    justify-content: flex-start; /* Align items closer together */
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
    top: 50%;
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
  .search-button2 {
    background-color: #ffffffc8;
    border: none;
    border-radius: 5px;
    padding: 1px 4px;
    cursor: pointer;
    position: absolute;
    right: 700px; /* Adjusted right positioning */
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
    color:black;
  }
  </style>
  