<template>
    <div class="container-wrapper">
      <!-- Left container -->
      <div class="container-left">
        <img src="/footerark.png" alt="Decorative Image" class="container-image" />
        <div class="sol">DEALS JUST FOR YOU</div>
        <div class="sol2">Sign up to receive exclusive offers in your inbox.</div>
  
        <div class="search-container">
          <input type="text" class="search-bar" placeholder="Enter your email address" />
          <button class="apply-button">Sign Up</button>
        </div>
        
        <!-- Clickable text wrapped in <a> tag -->
        <div class="sol3">
          <a href="your-link-here" class="email-deals-link">View latest email deals</a>
        </div>
      </div>
  
      <!-- Right container -->
      <div class="container-right">
        <div class="sag">Download Our APP</div>
        <div class="sag2">Enter your phone number and we'll send you a download link.</div>
        
        <div class="search-container2">
          <input type="text" class="search-bar2" placeholder="Enter your phone number" />
          <button class="apply-button2">Send Link</button>
        </div>
        <div class="sag3">OR</div>
        
        <!-- QR Image -->
        <img src="/qr.png" alt="QR Code" class="qr-image" />

        <div class="qr-sag">Scan the QR code to download App</div>
        <div class="qr-sag2">Scan this code with your phone's camera.</div>

        <img src="/bg_our_app.png" alt="QR Code" class="qr-image2" />

      </div>
    </div>
  </template>
  
  <style scoped>
  /* Wrapper to align containers next to each other */
  .container-wrapper {
    display: flex;
    justify-content: flex-start; /* Align items to the start without large gaps */
    gap: 20px; /* Small gap between containers */
    padding: 20px; /* Optional padding for the wrapper */
  }
  
  /* General container styles */
  .container-left,
  .container-right {
    border-radius: 10px; /* Rounded edges */
    padding: 20px; /* Internal padding */
    font-size: 16px; /* Adjustable font size */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for visual appeal */
  }
  
  /* Adjustable styles for the left container */
  .container-left {
    background-color: #dbe0f4; /* Light gray background */
    width: 720px; /* Adjustable width */
    height: 280px; /* Adjustable height */
    position: relative; /* For positioning the image and text */
    overflow: hidden; /* To ensure no overflow of content */
  }
  
  /* Adjustable styles for the right container */
  .container-right {
    background-color: #dbe0f4; /* Light blue background */
    width: 400px; /* Adjustable width */
    height: 280px; /* Adjustable height */
  }
  
  /* Image inside the left container */
  .container-image {
    position: absolute;
    top: 20px; /* Adjust vertical positioning */
    right: -20px; /* Adjust horizontal positioning */
    width: 350px; /* Adjust image width */
    height: auto; /* Maintain aspect ratio */
    z-index: 1; /* Place image behind the text */
  }
  
  /* Heading in the left container */
  .sol {
    position: relative;
    color: black;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    z-index: 2; /* Ensure text appears above the image */
  }
  
  /* Subtitle in the left container */
  .sol2 {
    position: relative;
    color: black;
    font-size: 16px;
    font-weight: bold;
    z-index: 2; /* Ensure text appears above the image */
    top: 10px;
  }
  
  .sol3 {
    position: relative;
    color: rgb(40, 27, 183);
    font-size: 16px;
    font-weight: bold;
    z-index: 2; /* Ensure text appears above the image */
    top: 20px;
    margin-left: 4px;
  }
  
  /* Styling for the clickable "View latest email deals" link */
  .email-deals-link {
    color: rgb(40, 27, 183); /* Link color */
    font-size: 16px;
    font-weight: bold;
    text-decoration: none; /* Remove underline */
  }
  
  .email-deals-link:hover {
    text-decoration: underline; /* Add underline on hover */
    cursor: pointer; /* Change the cursor to pointer */
  }
  
  /* Search container alignment */
  .search-container {
    display: flex;
    align-items: center; /* Vertically align the items */
    margin-left: 27px; /* Move the entire search bar and button to the right */
    position: relative; /* For proper layering */
    z-index: 3; /* Ensure it appears above the image */
    margin-top: 26px;
  }
  
  /* Styling for the Apply button */
  .apply-button {
    height: 35px;
    padding: 0 20px;
    border-radius: 5px; /* Rounded edges */
    background-color: #2431bc; /* Updated background color */
    color: rgb(255, 255, 255); /* White text color */
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: bold;
  }
  
  /* Styling for the search bar */
  .search-bar {
    height: 35px;
    width: 340px;
    padding: 0 15px;
    border-radius: 5px; /* Rounded edges */
    border: 1px solid #ccc;
    font-size: 16px;
    outline: none; /* Remove default focus outline */
    background-color: white;
    color: black; /* Set text color to black */
    margin-left: -26px; 
  }
  
  /* Focus style for the search bar */
  .search-bar:focus {
    border-color: #007bff; /* Change border color when focused */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add subtle shadow */
  }
  
  /* Styling for the right container text */
  .sag {
    position: relative;
    color: black;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    z-index: 2; /* Ensure text appears above the image */
    text-align: left; /* Center the text */
    padding-top: -4px; /* Add some top padding to position the text */
  }
  
  .sag2 {
    position: relative;
    color: black;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    z-index: 2; /* Ensure text appears above the image */
    text-align: left; /* Center the text */
    padding-top: -4px; /* Add some top padding to position the text */
  }
  
  .sag3 {
    color: #333;
    padding: 18px;
    margin-left: 150px;
   margin-top: -6px;
   font-size: 13px;
  }
  
  /* QR Image styling */
  .qr-image {
    margin-top: -20px; /* Adds space below the OR text */
    width: 80px; /* You can adjust the width */
    height: auto; /* Keep the aspect ratio */
    display: block;
    margin-left: 0; /* Align it to the left */
  }

  .qr-image2 {
  margin-top: -118px;
  width: 120px;
  height: auto;
  display: block;
  position: relative; /* Ensure positioning */
  right: -260px; /* Move the image from the right */
}
  
  .search-container2 {
    display: flex;
    align-items: center; /* Vertically align the items */
    margin-left: 27px; /* Move the entire search bar and button to the right */
    position: relative; /* For proper layering */
    z-index: 3; /* Ensure it appears above the image */
    margin-top: 10px;
  }
  
  /* Styling for the Apply button */
  .apply-button2 {
    height: 30px;
    padding: 0 20px;
    border-radius: 8px; /* Rounded edges */
    background-color: #a5bcfa; /* Updated background color */
    color: rgb(0, 0, 0); /* White text color */
    font-size: 13px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: bold;
    margin-left: -6px;
  }
  
  /* Styling for the search bar */
  .search-bar2 {
    height: 30px;
    width: 250px;
    padding: 0 15px;
    border-radius: 8px; /* Rounded edges */
    border: 1px solid #ccc;
    font-size: 16px;
    outline: none; /* Remove default focus outline */
    background-color: white;
    color: black; /* Set text color to black */
    margin-left: -26px; 
  }
  
  /* Focus style for the search bar */
  .search-bar2:focus {
    border-color: #007bff; /* Change border color when focused */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add subtle shadow */
  }

  .qr-sag {
  font-weight: bold;
  color: black;
  margin-top: -75px;
  white-space: normal; /* Allow the text to wrap normally */
  word-wrap: break-word; /* Ensure long words break if necessary */
  max-width: 200px; /* Limit the width of the text container to make it wrap */
  margin-left: 85px;
  font-size: 15px;
}

.qr-sag2 {
  font-weight: normal;
  color: black;
  margin-top: -2px;
  white-space: normal; /* Allow the text to wrap normally */
  word-wrap: break-word; /* Ensure long words break if necessary */
  max-width: 200px; /* Limit the width of the text container to make it wrap */
  margin-left: 85px;
  font-size: 15px;
}

  </style>
  