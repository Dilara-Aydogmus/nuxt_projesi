<template>
    <div class="container_dokuz">
      <div class="header_dokuz">
        <img src="/siteikon.png" alt="Image 1" class="image_dokuz" />
        <p class="text1_dokuz">Sign in</p>
      </div>
  
      <!-- Flex container for vertical alignment -->
      <div class="search-container_dokuz">
        <input type="text" class="search-bar_dokuz" v-model="email" placeholder="Email Address" />
        <button class="checkout_dokuz" @click="signIn">SIGN IN</button>
        <button class="checkout2_dokuz" @click="sendSignInCode">GET ONE-TIME SIGN IN CODE</button>
      </div>
  
      <!-- Text container -->
      <div class="text-container_dokuz">
        <a href="#">
          <p class="text2_dokuz">What's The One-Time Code?</p>
        </a>
  
        <p class="text3_dokuz">New To Newegg?</p>
        <NuxtLink to="/giris">
          <a href="#">
            <p class="text4_dokuz">Sign Up</p>
          </a>
        </NuxtLink>
        <p class="text5_dokuz">OR</p>
      </div>
  
      <div class="search-container2_dokuz">
        <button class="alt_dokuz" @click="signInWithGoogle">
          <img src="/icon-google.png" class="icon_dokuz" />
          SIGN IN WITH GOOGLE
        </button>
        <button class="alt2_dokuz" @click="signInWithApple">
          <img src="/apple.svg" class="icon2_dokuz" />
          SIGN IN WITH APPLE
        </button>
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
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useUserStore } from '~/stores/userStore'; // Make sure this is the correct path
  
  const userStore = useUserStore();
  const email = ref('');
  const password = ref(''); // for future use if password is needed
  
  // Function to handle sign-in action
  const signIn = async () => {
    try {
      // Add logic for email and password-based sign-in (or one-time code logic)
      if (email.value) {
        console.log(`Signing in with email: ${email.value}`);
        // You can replace this with actual sign-in logic (firebase, etc.)
        // This example assumes you will use email for logging in
  
        // Example: Simulating a successful sign-in
        userStore.nameSurname = 'John Doe'; // Set the user's name from database
        userStore.email = email.value;
        userStore.phoneNumber = '1234567890'; // Example phone number
        console.log('User signed in successfully');
      } else {
        console.error('Email is required');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };
  
  // Function to simulate sending a one-time sign-in code
  const sendSignInCode = () => {
    console.log('Sending one-time sign-in code to:', email.value);
    // Add logic to send one-time code (e.g., via email or SMS)
  };
  
  // Simulate sign-in with Google
  const signInWithGoogle = () => {
    console.log('Signing in with Google...');
    // Integrate with Google SignIn SDK here
  };
  
  // Simulate sign-in with Apple
  const signInWithApple = () => {
    console.log('Signing in with Apple...');
    // Integrate with Apple SignIn SDK here
  };
  </script>
  
  <style scoped>
  .container_dokuz {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    margin-top: 150px; /* Adjusted to move the entire component down */
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
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 70px; /* Increased to provide additional spacing */
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
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 30px;
  }
  
  /* Unique styling for each text */
  .text2_dokuz {
    color: rgb(87, 87, 87);
    font-weight: normal;
    font-size: 13px;
    text-decoration: underline;
  }
  
  .text3_dokuz {
    color: rgb(18, 18, 18);
    font-weight: normal;
    font-size: 16px;
  }
  
  .text4_dokuz {
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 16px;
    text-decoration: underline;
  }
  
  .text5_dokuz {
    color: rgb(79, 79, 79);
    font-weight: normal;
    font-size: 15px;
    text-transform: uppercase;
  }
  
  .search-container2_dokuz {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
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
  
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
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
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 80px;
  }
  
  .t_dokuz {
    color: rgb(87, 87, 87);
    font-weight: normal;
    font-size: 13px;
    text-decoration: underline;
  }
  
  .tt_dokuz {
    color: rgb(87, 87, 87);
    font-weight: normal;
    font-size: 13px;
    text-decoration: underline;
  }
  
  .tttt_dokuz {
    color: rgb(87, 87, 87);
    font-weight: normal;
    font-size: 13px;
  }
  
  .text2_dokuz:hover,
  .text4_dokuz:hover,
  .t_dokuz:hover,
  .tt_dokuz:hover {
    color: blue;
  }
  
  .icon_dokuz,
  .icon2_dokuz {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
  }
  </style>
  