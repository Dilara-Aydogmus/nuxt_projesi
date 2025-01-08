<template>
    <div class="container_giris">
      <!-- Header -->
      <div class="header_giris">
        <img src="/siteikon.png" alt="Newegg Logo" class="image_giris" />
        <p class="text1_giris">Create Account</p>
      </div>
  
      <!-- Subtext for Business Account -->
      <p class="subtext_giris">
        Shopping for your business? 
        <a href="#" class="business-link_giris">Create a free business account.</a>
      </p>
  
      <!-- Input Fields -->
      <div class="search-container_giris">
        <input type="text"  class="search-bar_giris" placeholder="First and Last Name" />
      </div>
  
      <div class="search-container_giris">
        <input type="email" class="search-bar_giris" placeholder="Email Address" />
      </div>
  
      <div class="search-container_giris">
        <div class="input-group_giris">
          <input type="text" class="search-bar_giris" placeholder="Mobile Phone Number (optional)" />
          <span class="help-icon_giris">?</span>
        </div>
      </div>
  
      <div class="search-container_giris">
        <input type="password" class="search-bar_giris" placeholder="Password" />
      </div>
  
      <!-- Password Guidelines -->
      <div class="password-guidelines-giris">
        <div class="password-instructions">
          <p>Including 3 of the following:</p>
          <ul>
            <li>✓ ABC</li>
            <li>✓ abc</li>
            <li>✓ 123</li>
            <li>✓ @#$</li>
          </ul>
        </div>
        <div class="password-requirement">
          <p>Must contain:</p>
          <p>8~30 Chars</p>
        </div>
      </div>
  
      <!-- Checkbox for Subscription -->
      <div class="checkbox-container_giris">
        <input type="checkbox" id="subscribe" />
        <label for="subscribe">Subscribe for exclusive e-mail offers and discounts</label>
      </div>
  
      <!-- Agreement Notice -->
      <p class="agreement_giris">
        By creating an account, you agree to Newegg’s 
        <a href="#" class="link_giris">Privacy Notice</a> and 
        <a href="#" class="link_giris">Terms of Use</a>.
      </p>
  
      <!-- Sign Up Button -->
      <button class="checkout_giris">SIGN UP</button>
  
      <!-- Already Have Account -->
      <NuxtLink to="/component9">
      <p class="signin-text_giris">
        Have an account? <a href="#" class="signin-link_giris">Sign In</a>
      </p>
      </NuxtLink>
    </div>
  
    <!-- Footer -->
    <div class="footer_giris">
      <a href="#">Terms & Conditions | Privacy Policy</a>
      <a href="#">Cookie Preferences</a>
      <p>© 2000-2024 Newegg Inc. All rights reserved.</p>
    </div>
  </template>
  
  <style scoped>
  /* General Container */
  .container_giris {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    padding: 20px;
    margin-top: 150px;
  }
  
  .header_giris {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .image_giris {
    height: 65px;
  }
  
  .text1_giris {
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: -10px;
  }
  
  /* Subtext for Business Account */
  .subtext_giris {
    font-size: 14px;
    color: #555;
    margin: 5px 0;
    text-align: left;
    width: 275px; /* Match input box width */
  }
  
  .business-link_giris {
    color: #be380f; /* Changed to gray */
    text-decoration: underline;
  }
  
  .business-link_giris:hover {
    text-decoration: underline;
  }
  
  /* Input Fields */
  .search-container_giris {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  .search-bar_giris {
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
  
  .input-group_giris {
    position: relative;
  }
  
  .help-icon_giris {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    color: #777;
    cursor: pointer;
  }
  
  /* Password Guidelines */
  .password-guidelines-giris {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 275px;
    margin-top: 15px;
    font-size: 12px;
    color: #555;
  }
  
  .password-instructions {
    flex: 2;
  }
  
  .password-instructions ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .password-instructions li {
    display: inline-block;
  }
  
  .password-requirement {
    flex: 1;
    text-align: right;
    white-space: nowrap;
  }
  
  .checkbox-container_giris {
    font-size: 14px;
    text-align: left;
    width: 275px;
    margin-top: 15px;
  }
  
  .checkbox-container_giris label {
    margin-left: 5px;
  }
  
  /* Agreement Notice */
  .agreement_giris {
    font-size: 12px;
    color: #555;
    width: 275px;
    text-align: left;
    margin-top: 10px;
  }
  
  .link_giris {
    color: #888; /* Changed to gray */
    text-decoration: underline;
  }
  
  .link_giris:hover {
    text-decoration: underline;
  }
  
  /* Sign Up Button */
  .checkout_giris {
    width: 275px;
    height: 43px;
    background-color: orange;
    color: black;
    font-weight: bold;
    border: 1px solid rgb(255, 100, 0);
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    text-align: center;
    margin-top: 20px;
    transition: background-color 0.3s ease;
  }
  
  .checkout_giris:hover {
    background-color: darkorange;
  }
  
  /* Already Have Account */
  .signin-text_giris {
    margin-top: 20px;
    font-size: 14px;
  }
  
  .signin-link_giris {
    color: #888; /* Changed to gray */
    text-decoration: underline;
  }
  
  .signin-link_giris:hover {
    text-decoration: underline;
  }
  
  /* Footer */
  .footer_giris {
    margin-top: 30px;
    font-size: 12px;
    color: #777;
    text-align: center;
  }
  
  .footer_giris a {
    color: #888; /* Changed to gray */
    text-decoration: underline;
  }
  
  .footer_giris a:hover {
    text-decoration: underline;
  }
  </style>
  