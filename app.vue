<template>
    <div class="layout">
      <div class="sidebar">
        <header>
          <nav>
            <ul>
              <li v-for="(button, index) in buttons" :key="index">
                <NuxtLink :to="`/Component${index + 1}`">Component {{ index + 1 }}</NuxtLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
  
      <div class="main-content">
        <NuxtPage />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        buttons: Array.from({ length: 10 }, (_, i) => `Component ${i + 1}`),
      };
    },
    methods: {
      setActiveComponent(index) {
        
      }
    }
  };
  </script>
  
  <style scoped>
  .layout {
    display: flex;
  }
  
  .sidebar {
    width: 200px;
    background-color: #f4f4f4;
    color: black;
    padding: 25px;
  }
  
  .sidebar header {
    padding-top: 20px; /* Adds some top padding to the header if needed */
  }
  
  .sidebar ul {
    padding-left: 0; /* Ensure no extra padding on the left */
    margin-top: 40px; /* Push the list down by 5 lines (adjust as needed) */
  }
  
  .sidebar li {
    list-style-type: none;
  }
  
  .sidebar li a {
    display: block;
    padding: 6px 12px;
    font-size: 14px;
    background-color: transparent; /* No background color for the text */
    color: black; /* Make sure text is black */
    text-decoration: none;
    margin-bottom: 8px;
  }
  
  .sidebar li a:hover {
    background-color: #ccc; /* Optional hover effect */
  }
  
  .main-content {
    flex-grow: 1;
    padding: 20px;
    background-color: #f4f4f4;
  }
  </style>
  