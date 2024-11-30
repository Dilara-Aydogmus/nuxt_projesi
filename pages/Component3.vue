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
          
          <!-- Notification buttons (Two bells) aligned horizontally -->
          <button class="notification-button">
            <img src="/zil.png" alt="Notification" class="notification-icon" />
          </button>
          <button class="notification-button">
            <img src="/bayrak.png" alt="Notification" class="notification-icon" />
          </button>
        </div>
      </div>
    </nav>
  </template>
  
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
    justify-content: space-between; /* Space between elements */
    align-items: center; /* Center items vertically */
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .navbar-logo {
    height: 53px;
  }
  
  .navbar-button {
    padding: 8px 20px;
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
    gap: 10px; /* Space between elements inside navbar-search */
  }
  
  .search-input {
    padding: 8px 12px;
    border-radius: 25px;
    border: none;
    font-size: 14px;
    width: 400px;
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
  background-color: #2703a8; /* Color for the button */
  border: none;
  border-radius: 25px; /* Slightly rounded corners instead of fully circular */
  padding: 8px 20px; /* Adjust the padding to make the button longer */
  cursor: pointer;
  position: absolute;
  right:140px; /* Align the button's right edge with the input's right edge */
  top: 50%; /* Center the button vertically */
  transform: translateY(-50%); /* Adjust vertical alignment */
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
  
  /* Media query for mobile responsiveness */
  @media (max-width: 768px) {
    .navbar-search {
      flex-wrap: wrap; /* Allow the search bar to wrap if needed */
    }
  
    .search-input {
      width: 100%; /* Ensure the search input is full-width on smaller screens */
    }
  }
  </style>
  