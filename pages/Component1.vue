<template>
    <div class="center-container">
      <ul class="navigation-list">
        <li v-for="link in links" :key="link.label" class="navigation-item">
          <div class="link-label" @click="toggleSubmenu(link.label)">
            <img :src="getIconForLink(link.label)" alt="link icon" class="link-icon" />
            <span class="link-text">{{ link.label }}</span>
            <img
              src="/pages/ok.png"
              alt="toggle icon"
              class="toggle-icon"
              :class="{ expanded: expandedLink === link.label }"
            />
          </div>
          <!-- Submenu that appears when the link is expanded -->
          <ul v-if="expandedLink === link.label" class="submenu">
            <li v-for="(subItem, index) in link.subItems" :key="index" class="submenu-item">
              <span>{{ subItem }}</span>
              <img
                src="/pages/ok.png"
                alt="submenu toggle icon"
                class="submenu-toggle-icon"
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const links = [
    { label: 'Components & Storage', subItems: ['Core Component', 'Storage Device', 'Deals by Categories'] },
    { label: 'Computer Systems', subItems: ['Desktops', 'Laptops', 'Gaming Laptop'] },
    { label: 'Computer Peripherals', subItems: ['Keyboards', 'Mice', 'Monitors'] },
    { label: 'Server & Components', subItems: ['Servers', 'Processors', 'Memory'] },
    { label: 'Appliances', subItems: ['Kitchen Appliances', 'Home Appliances', 'Small Gadgets'] },
    { label: 'Electronics', subItems: ['Smartphones', 'Tablets', 'Wearables'] },
    { label: 'Gaming & VR', subItems: ['Consoles', 'Accessories', 'VR Headsets'] },
    { label: 'Networking', subItems: ['Routers', 'Switches', 'Cables'] },
    { label: 'Smart Home & Security', subItems: ['Cameras', 'Sensors', 'Automation Devices'] },
    { label: 'Office Solutions', subItems: ['Printers', 'Scanners', 'Office Chairs'] },
    { label: 'Software & Services', subItems: ['Operating Systems', 'Productivity Tools', 'Subscriptions'] },
    { label: 'Automotive & Tools', subItems: ['Car Accessories', 'Power Tools', 'Hand Tools'] },
    { label: 'Home & Outdoors', subItems: ['Furniture', 'Gardening Tools', 'Camping Gear'] },
    { label: 'Health & Sports', subItems: ['Fitness Equipment', 'Sports Gear', 'Wellness Devices'] },
    { label: 'Toys, Drones & Maker', subItems: ['Drones', 'Robotics', 'DIY Kits'] },
  ];
  
  const expandedLink = ref<string | null>(null);
  
  function toggleSubmenu(label: string) {
    expandedLink.value = expandedLink.value === label ? null : label;
  }
  
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
    return iconMap[label] || '/pages/default-icon.png'; // Fallback to default icon
  }
  </script>
  
  <style scoped>
  .center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30%;
    margin: auto;
    padding: 16px;
    background-image: url('/bkg.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 8px;
  }
  
  .navigation-list {
    width: 100%;
    list-style: none;
    padding: 0;
  }
  
  .navigation-item {
    margin-bottom: 8px;
    width: 100%;
  }
  
  .link-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    transition: background-color 0.3s ease;
  }
  
  .link-label:hover {
    background-image: url('/mavi.png');
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    color: white;
  }
  
  .link-icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  
  .link-text {
    flex-grow: 1;
    padding-left: 8px;
    color: white;
  }
  
  .toggle-icon {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }
  
  .toggle-icon.expanded {
    transform: rotate(180deg);
  }
  
  /* Removed background color for the submenu */
  .submenu {
    margin-top: 4px;
    padding-left: 16px;
    list-style: none;
    padding: 0;
    
  }
  
  .submenu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border-radius: 4px;
    color: white;
    margin-bottom: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submenu-item:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .submenu-toggle-icon {
    width: 16px;
    height: 16px;
  }
  </style>
  