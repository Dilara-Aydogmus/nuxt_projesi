<template>
    <div class="center-container">
      <button class="center-button">Click Me</button>
      
    </div>
    
  </template>




  
  <script>
  export default {
    name: 'CenteredButton',
  };
  </script>
  
  <style scoped>
  .center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
    margin: 0;
  }
  
  .center-button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  