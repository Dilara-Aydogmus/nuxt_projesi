<template>
    <div class="center-container">
      <UVerticalNavigation :links="links">
        <template #default="{ link }">
          <span class="group-hover:text-primary relative link-label hover:bg-transparent-lightblue">
            <!-- Icon at the start of the label -->
            <img :src="getIconForLink(link.label)" alt="link icon" class="link-icon" />
            <!-- Label text, starts immediately after the icon -->
            <span class="link-text">{{ link.label }}</span>
            <!-- OK icon aligned to the far right -->
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
  
  // Function to get icon for each label dynamically
  function getIconForLink(label: string): string {
    const iconMap: { [key: string]: string } = {
      'Components & Storage': '/a.svg',
      'Computer Systems': '/computersystems.svg',
      'Computer Peripherals': '/computerperipherals.svg',
      'Server & Components': '/ServerComponents.svg',
      'Appliances': '/a.svg',
      'Electronics': '/electronics.svg',
      'Gaming & VR': '/gaming.svg',
      'Networking': '/network.svg',
      'Smart Home & Security': '/smarthome.svg',
      'Office Solutions': '/printer.svg',
      'Software & Services': '/softwareservices.svg',
      'Automotive & Tools': '/tools.svg',
      'Home & Outdoors': '/home.svg',
      'Health & Sports': '/sports.svg',
      'Toys, Drones & Maker': '/drone.svg',
    };
    console.log("Icon path:", iconMap[label]);  
    return iconMap[label] || '/pages/default-icon.png'; // Fallback to default icon
  }
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
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    margin-left: 168px;
    width: 13px;
  }
  
  .link-label:hover {
    background-image: url('/mavi.png');
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    color: white;
  }
  
  .material-symbols-outlined:hover {
    color: white;
  }
  
  .link-icon {
    width: 16px;
    height: 16px;
  }
  
  .link-text {
    color: white;
    padding-left: 8px; /* Space between icon and text */
    flex-grow: 1; /* Ensures the text takes available space */
  }
  
  .ok-icon {
    width: 16px;
    height: 16px;
    margin-left: 179px; /* Adjust position of OK icon */
  }
  
  .link-label:hover {
    background-image: url('/mavi.png');
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    color: white;
  }
  </style>
  