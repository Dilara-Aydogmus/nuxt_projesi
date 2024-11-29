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
    padding: 20px;
  }
  
  .sidebar button {
    display: block;
    margin-bottom: 8px; 
    padding: 6px 12px;  
    font-size: 14px;    
    width: 100%;
    background-color: #e0e0e0; 
    border: 1px solid #ccc;   
  }
  
  .sidebar button:hover {
    background-color: #ccc; 
  }
  
  .main-content {
    flex-grow: 1;
    padding: 20px;
    background-color: #f4f4f4;
  }
  </style>
  