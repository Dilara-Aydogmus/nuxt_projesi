<template>
    <div class="center-container">
      <UVerticalNavigation :links="links">
        <template #default="{ link }">
          <span class="group-hover:text-primary relative link-label hover:bg-transparent-lightblue">
            {{ link.label }}
            <span class="material-symbols-outlined">arrow_forward</span> 
          </span>
        </template>
      </UVerticalNavigation>
    </div>
  </template>
  
  <script setup lang="ts">
  const links = [
    { label: 'Vertical Navigation', to: '/components/vertical-navigation' },
    { label: 'Command Palette', to: '/components/command-palette' },
    { label: 'Table', to: '/components/table' },
    { label: 'Form', to: '/components/form' },
    { label: 'Card', to: '/components/card' },
    { label: 'Dropdown', to: '/components/dropdown' },
    { label: 'Modal', to: '/components/modal' },
    { label: 'Pagination', to: '/components/pagination' },
    { label: 'Tooltip', to: '/components/tooltip' },
    { label: 'Avatar', to: '/components/avatar' },
    { label: 'Breadcrumb', to: '/components/breadcrumb' },
    { label: 'Tabs', to: '/components/tabs' },
    { label: 'Alert', to: '/components/alert' },
    { label: 'Badge', to: '/components/badge' },
    { label: 'Timeline', to: '/components/timeline' },
  ];
  </script>
  
  <style scoped>
  .center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%; 
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
    margin-left: 8px; 
  }
  
  .link-label:hover {
    background-image: url('/mavi.png'); 
    background-size: cover; 
    background-position: center; 
    border-radius: 4px;
  }
  </style>
  