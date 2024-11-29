<template>
    
    <div class="layout">
      <!-- Sidebar Navigation -->
      <div class="sidebar">
        <button v-for="(button, index) in buttons" 
                :key="index" 
                @click="setActiveComponent(index)">
          {{ button }}
        </button>
  
        <header>
          <nav>
            <ul>
              <li>
                <NuxtLink to="/Component1">Component1</NuxtLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
  
      <!-- Main Content Area -->
      <div class="main-content">
        <component v-for="(component, index) in components" 
                   :key="index" 
                   :is="component" 
                   v-show="activeComponent === index" />
      </div>
    </div>
    
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </template>
  
  <script>
  import Component1 from '@/pages/Component1.vue';  // Correct for components
  
  export default {
    data() {
      return {
        activeComponent: 0, // Initially, the first component is active
        buttons: Array.from({ length: 10 }, (_, i) => `Component ${i + 1}`), // 10 button names
        components: [
          'Component1',
          'Component2',
          'Component3',
          'Component4',
          'Component5',
          'Component6',
          'Component7',
          'Component8',
          'Component9',
          'Component10'
        ] // Component names
      };
    },
    methods: {
      setActiveComponent(index) {
        this.activeComponent = index; // Change active component when a button is clicked
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
    margin-bottom: 8px; /* Reduced margin */
    padding: 6px 12px;  /* Smaller padding */
    font-size: 14px;    /* Smaller font size */
    width: 100%;
    background-color: #e0e0e0; /* Optional: light background color for buttons */
    border: 1px solid #ccc;   /* Optional: add a border around buttons */
  }
  
  .sidebar button:hover {
    background-color: #ccc; /* Optional: change background on hover */
  }
  
  .main-content {
    flex-grow: 1;
    padding: 20px;
    background-color: #f4f4f4;
  }
  </style>
