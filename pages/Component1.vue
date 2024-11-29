<template>
    <div class="center-container">
      <UVerticalNavigation :links="links">
        <template #default="{ link }">
          <span class="group-hover:text-primary relative link-label hover:bg-transparent-lightblue">
            {{ link.label }}
            <span class="material-symbols-outlined">
                  <img src="/pages/ok.png" alt="arrow icon" class="link-icon" />
                </span> 
          </span>
        </template>
      </UVerticalNavigation>
    </div>
  </template>
  
  <script setup lang="ts">
  const links = [
    { label: 'Components & Storage', to: '/components/vertical-navigation' },
    { label: 'Computer Systems', to: '/components/command-palette' },
    { label: 'Computer Peripherals', to: '/components/table' },
    { label: 'Server & Components', to: '/components/form' },
    { label: 'Appliances', to: '/components/card' },
    { label: 'Electronics', to: '/components/dropdown' },
    { label: 'Gaming & VR', to: '/components/modal' },
    { label: 'Networking', to: '/components/pagination' },
    { label: 'Smart Home & Security', to: '/components/tooltip' },
    { label: 'Office Solutions', to: '/components/avatar' },
    { label: 'Software & Services', to: '/components/breadcrumb' },
    { label: 'Automotive & Tools', to: '/components/tabs' },
    { label: 'Home & Outdoors', to: '/components/alert' },
    { label: 'Health & Sports', to: '/components/badge' },
    { label: 'Toys, Drones & Maker', to: '/components/timeline' },
  ];
  </script>
  
  <style scoped>
  .center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%; 
    height: 50%; 
    background-color: white; 
    color: black;
    margin: auto; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    border-radius: 8px; 
  
    background-image: url('/bkg.jpg'); 
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
  }
  
  .link-label {
    color: white;
    padding: 3px; 
    display: flex;
    align-items: center;
    justify-content: space-between; 
    transition: background-color 0.3s ease; 
    width: 100%; 
  }
  
  .material-symbols-outlined {
    font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24;
    margin-left: 168px; 
    width: 13px;
  }
  
  .link-label:hover {
    background-image: url('/mavi.png'); 
    background-size: cover; 
    background-position: center; 
    border-radius: 4px;
    color:white;
  }

  .material-symbols-outlined:hover {
  color: white;
}

  </style>
  