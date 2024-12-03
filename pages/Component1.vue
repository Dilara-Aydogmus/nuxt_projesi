<template>
    <div class="center-container">
      <!-- Main Menu -->
      <ul class="navigation-list" v-if="showMainMenu">
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
        </li>
      </ul>
  
      <!-- Submenu -->
      <ul v-if="expandedLink !== null" class="submenu">
        <li class="submenu-item">
            <img src="/pages/ok2.png" alt="ok icon" class="toggle-icon2" />

          <button @click="backToMain" class="back-to-main-btn">Back to Main</button>
        </li>
        <li class="submenu-item">
            <img :src="getIconForLink(expandedLink)" alt="submenu icon" class="submenu-icon" />

          <span class="main-menu-name">{{ getLinkName(expandedLink) }}</span>
          <span class="view-all-text">View All</span>
        </li>
        <li v-for="(subItem, index) in getSubItems(expandedLink)" :key="index" class="submenu-item">
          <span>{{ subItem }}</span>
          <img
            src="/pages/ok.png"
            alt="submenu toggle icon"
            class="submenu-toggle-icon"
          />
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
  const showMainMenu = ref<boolean>(true);
  
  // Toggle Submenu visibility
  function toggleSubmenu(label: string) {
    expandedLink.value = expandedLink.value === label ? null : label;
    showMainMenu.value = expandedLink.value === null; // Hide main menu when submenu is open
  }
  
  // Go back to main menu
  function backToMain() {
    expandedLink.value = null;
    showMainMenu.value = true; // Show main menu when back to main is clicked
  }
  
  // Get subitems for a given link
  function getSubItems(label: string | null) {
    if (label) {
      const link = links.find((link) => link.label === label);
      return link?.subItems || [];
    }
    return [];
  }
  
  // Get link name based on expandedLink
  function getLinkName(label: string | null) {
    return label ? label : '';
  }
  
  // Get icon for each link
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
  justify-content: flex-start; /* Align items to the left */
  align-items: flex-start; /* Align items to the top */
  flex-direction: column;
  width: 38%;
  margin: auto;
  padding: 16px;
  background-image: url('/bkg.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  height: 590px;
}

/* Main menu styles */
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
.toggle-icon2 {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;

}


.toggle-icon.expanded {
  transform: rotate(180deg);
}

/* Submenu styling - Align to the left, full width of container */
.submenu {
  width: 100%; /* Full width of container */
  margin-top: 4px;
  padding-left: 0; /* Remove padding from left side */
  list-style: none;
  padding: 0;
}

.submenu-item {
  display: flex;
  align-items: center;
 
  padding: 3px 12px;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  margin-bottom: 4px;
  transition: background-color 0.3s ease;

  

 
  justify-content: flex-start;  /* Aligns both items to the left */
 
}
.submenu-item .view-all-text {
  margin-left: auto; /* Push "View All" to the right */
}

.submenu-item .submenu-toggle-icon {
  margin-left: auto; /* Push the icon to the right */
  margin-right: 0; /* Remove any unnecessary right margin */
}
.submenu-item:hover {
  background-image: url('/mavi.png');  /* Similar hover effect as main menu */
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  color: white;
}

.submenu-toggle-icon {
  width: 16px;
  height: 16px;

}

/* New styling for "Back to Main" and "View All" */
.back-to-main-btn {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  padding: 8px;
}

.main-menu-name {
  font-weight: bold;
  color: white;
  font-style: italic;

}

.view-all-text {
  color: #ffffff;
  font-size: 14px;
  margin-left: 8px;
  cursor: pointer;
  font-weight: bold;
}

.submenu-item .submenu-icon {
  margin-right: 8px; /* Add space between the icon and the text */
}


  </style>
  