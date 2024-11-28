<template>
    <div class="layout">
      <!-- Sidebar Navigation -->
      <div class="sidebar">
        <button v-for="(button, index) in buttons" 
                :key="index" 
                @click="setActiveComponent(index)">
                
          {{ button }}
          <template>
        <header>
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/Component1">Component1</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
    </template>
        </button>
      
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
  
    <NuxtPage/>
   </NuxtLayout>
  </template>
  
  <script>


import Component1 from '@/pages/Component1.vue';  // Correct for components




  export default {
    data() {
      return {
        activeComponent: 0, // İlk başta ilk komponent aktif
        buttons: Array.from({ length: 10 }, (_, i) => `Component ${i + 1}`), // 10 buton ismi
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
        ] // Komponentlerin isimleri
      };
    },
    methods: {
      setActiveComponent(index) {
        this.activeComponent = index; // Butona tıklanınca aktif komponenti değiştir
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
    padding: 20px;
  }
  
  .sidebar button {
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
  }
  
  .main-content {
    flex-grow: 1;
    padding: 20px;
  }
  </style>
  