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
<!-- foto eklicem-->
 <div class = foto-container>
    <img src="/pages/sale.jpg" alt="Sale Image" class="foto-image" />
 </div>
    <!-- component2 buraya-->
    <div class="carousel-container relative">
      <!-- UCarousel component with items -->
      <UCarousel
        :items="items"
        :ui="{ item: 'basis-1/5 md:basis-1/3 lg:basis-1/3' }"
        arrows
        class="rounded-lg overflow-hidden flex gap-1"
      >
        <template v-slot="{ item }">
          <div class="relative">
            <!-- Background Image for each item -->
            <img 
              :src="item.backgroundImage" 
              class="w-full h-auto rounded-lg" 
              draggable="false"
              :style="{ width: '255px', height: '260px', marginRight: '0px' }" 
            />
            <!-- Text over the image -->
            <div class="absolute inset-0 flex flex-col justify-center pl-4 space-y-1">
              <div class="font-bold text-sm text-transparent bg-clip-text" :style="{ backgroundImage: 'url(/ff.jpeg)' }">
                {{ item.heading }}
              </div>
              <div class="font-bold text-3xl text-transparent bg-clip-text" :style="{ backgroundImage: 'url(/ff.jpeg)' }">
  {{ item.discount }}
  <span class="text-sm font-bold" style="font-weight: 900;">Off</span>
</div>
              <div class="font-bold text-sm" :style="{ color: '#66ffff' }">
                {{ item.description }}
              </div>
              <div>
                <img 
                  :src="item.smallImage" 
                  alt="Small Image" 
                  :class="[ 
                    'custom-image',
                    { 'custom-image-carousel3': item.smallImage === '/carousel3.png' },
                    { 'custom-image-carousel4': item.smallImage === '/carousel4.png' }
                  ]" 
                />
              </div>
            </div>
          </div>
        </template>
    
        <!-- Left Arrow Button (For Previous Slide) -->
        <template #prev="{ onClick, disabled }">
          <button :disabled="disabled" @click="onClick" class="left-button">
            <div class="font-bold text-3xl text-transparent bg-clip-text flex justify-center items-center">
              <img src="/ok2.png" alt="OK Image" class="w-8 h-8"  />
            </div>
          </button>
        </template>
    
        <!-- Right Arrow Button (For Next Slide) -->
        <template #next="{ onClick, disabled }">
          <button :disabled="disabled" @click="onClick" class="right-button">
            <div class="font-bold text-3xl text-transparent bg-clip-text flex justify-center items-center">
              <img src="/pages/ok.png" alt="OK Image" class="w-8 h-8" />
            </div>
          </button>
        </template>
      </UCarousel>
    </div>

<!-- component4 buraya-->
<div class="container">
      <!-- First Container -->
      <div class="container-item-wrapper">
        <div class="container-title">Ultimate Gaming</div>
        <div class="container-item container-item-1">
          <div class="inner-container">
            <div class="inner-item-wrapper">
              <div class="inner-item">
                <a href="#" class="inner-image-link">
                <img src="/1_8.png" alt="Item 1" class="inner-image" />
              </a>
              </div>
              <a href="#" class="inner-link first-link normal-link">Consoles & VR</a> 
              <a href="#" class="inner-link red-link">Up to 70% Off!</a>
              <a href="#" class="inner-link ">Black Friday Deals</a>
            </div>
            <div class="inner-item-wrapper">
              <div class="inner-item">
                <a href="#" class="inner-image-link">
                <img src="/GamingFurnitures.png" alt="Item 2" class="inner-image" />
                </a>
              </div>
              <a href="#" class="inner-link first-link normal-link">Gaming Furnitures</a>
              <a href="#" class="inner-link red-link">Up to 70% Off!</a>
              <a href="#" class="inner-link">Black Friday Deals</a>
            </div>
          </div>
          <div class="inner-container">
            <div class="inner-item-wrapper">
              <div class="inner-item">
                <a href="#" class="inner-image-link">
                <img src="/GameDeals.png" alt="Item 3" class="inner-image" />
                </a>
              </div>
              <a href="#" class="inner-link  first-link normal-link">Game Deals</a>
              <a href="#" class="inner-link red-link">Up to 70% Off!</a>
              <a href="#" class="inner-link">Black Friday Deals</a>
            </div>
            <div class="inner-item-wrapper">
              <div class="inner-item">
                <a href="#" class="inner-image-link">
                <img src="/24.png" alt="Item 4" class="inner-image" />
                </a>
              </div>
              <a href="#" class="inner-link  first-link normal-link">Gaming Monitors</a>
              <a href="#" class="inner-link red-link">Up to 70% Off!</a>
              <a href="#" class="inner-link">Black Friday Deals</a>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Second Container -->
      <div class="container-item-wrapper">
        <div class="container-title">Smart Gear & Gadgets</div>
        <div class="container-item container-item-2">
          <div class="inner-container">
            <div class="inner-item-wrapper">
              <div class="inner-item">
                <a href="#" class="inner-image-link">
                <img src="/a1.png" alt="Item 5" class="inner-image" />
                </a>
              </div>
              <a href="#" class="inner-link first-link normal-link">Headphones</a> 
              <a href="#" class="inner-link red-link">Up to 50% Off!</a>
              <a href="#" class="inner-link ">Black Friday Deals</a>
            </div>
            <div class="inner-item-wrapper">
              <div class="inner-item">
                <a href="#" class="inner-image-link">
                <img src="/a2.png" alt="Item 6" class="inner-image" />
                </a>
              </div>
              <a href="#" class="inner-link first-link normal-link">Apple Renewed</a> 
              <a href="#" class="inner-link red-link">Up to 60% Off!</a>
              <a href="#" class="inner-link ">Black Friday Deals</a>
            </div>
          </div>
          <div class="inner-container">
            <div class="inner-item-wrapper">
              <div class="inner-item">
                <a href="#" class="inner-image-link">
                <img src="/a3.png" alt="Item 7" class="inner-image" />
                </a>
              </div>
              <a href="#" class="inner-link first-link normal-link">Smart Home</a> 
              <a href="#" class="inner-link red-link">Up to 70% Off!</a>
              <a href="#" class="inner-link ">Black Friday Deals</a>
            </div>
            <div class="inner-item-wrapper">
              <div class="inner-item">
                <a href="#" class="inner-image-link">
                <img src="/a4.png" alt="Item 8" class="inner-image" />
                </a>
              </div>
              <a href="#" class="inner-link first-link normal-link">Digital Cameras</a> 
              <a href="#" class="inner-link red-link">Up to 70% Off!</a>
              <a href="#" class="inner-link ">Black Friday Deals</a>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Third Container -->
      <div class="container-item-wrapper">
        <div class="container-title">Home & Outdoor</div>
        <div class="container-item container-item-3">
          <div class="inner-container">
            <div class="inner-item-wrapper">
              <div class="inner-item">
                <a href="#" class="inner-image-link">
                <img src="/b1.png" alt="Item 9" class="inner-image" />
                </a>
              </div>
              <a href="#" class="inner-link first-link normal-link">Cleaning Gadgets</a> 
              <a href="#" class="inner-link red-link">Up to 40% Off!</a>
              <a href="#" class="inner-link ">Black Friday Deals</a>
            </div>
            <div class="inner-item-wrapper">
              <div class="inner-item">
                <a href="#" class="inner-image-link">
                <img src="/b2.png" alt="Item 10" class="inner-image" />
                </a>
              </div>
              <a href="#" class="inner-link first-link normal-link">Power Generators</a> 
              <a href="#" class="inner-link red-link">Up to 70% Off!</a>
              <a href="#" class="inner-link ">Black Friday Deals</a>
            </div>
          </div>
          <div class="inner-container">
            <div class="inner-item-wrapper">
              <div class="inner-item">
                <a href="#" class="inner-image-link">
                <img src="/b3.png" alt="Item 11" class="inner-image" />
                </a>
              </div>
              <a href="#" class="inner-link first-link normal-link">Health & Wellness</a> 
              <a href="#" class="inner-link red-link">Up to 20% Off!</a>
              <a href="#" class="inner-link ">Black Friday Deals</a>
            </div>
            <div class="inner-item-wrapper">
              <div class="inner-item">
                <a href="#" class="inner-image-link">
                <img src="/b4.png" alt="Item 12" class="inner-image" />
                </a>
              </div>
              <a href="#" class="inner-link first-link normal-link">E-Bikes & Scooters</a> 
              <a href="#" class="inner-link red-link">Up to 70% Off!</a>
              <a href="#" class="inner-link ">Black Friday Deals</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- component7 buraya-->
    <div class="grid-container_yedi">
      <!-- 1st Row Container -->
      <div class="container_yedi">
        <div class="bookmark-icon_yedi">
          <span class="bookmark-text_yedi">01</span> <!-- Bookmark üzerindeki yazı -->
        </div>
        <a href="#">
        <div class="circle-with-text_yedi">
          <div class="circle-container_yedi">
            <img src="/71.png" alt="Image 1" class="circle-image_yedi" />
          </div>
          <p class="circle-text_yedi">Core Ultra 7</p>
        </div>
    </a>

    <a href="#">
        <div class="circle-with-text_yedi">
          <div class="circle-container_yedi">
            <img src="/72.png" alt="Image 2" class="circle-image_yedi" />
          </div>
          <p class="circle-text_yedi">Intel z890</p>
        </div>
</a>


<a href="#">
        <div class="circle-with-text_yedi">
          <div class="circle-container_yedi">
            <img src="/73.png" alt="Image 3" class="circle-image_yedi" />
          </div>
          <p class="circle-text_yedi">32GB DDR5</p>
        </div>
        </a>

        <a href="#">
        <div class="circle-with-text_yedi">
          <div class="circle-container_yedi">
            <img src="/74.png" alt="Image 4" class="circle-image_yedi" />
          </div>
          <p class="circle-text_yedi">RTX 470Ti</p>
        </div>

        </a>
        <a href="#">
        <p class="additional-text1_yedi">...</p> <!-- 1. Container sonrası metin -->
        </a>
        <p class="yazilar_yedi">$2,150.89</p> 
        <!-- Button under the price -->
        <button class="white-button_yedi">VIEW DETAIL</button>
        <button class="action-button_yedi">CUSTOMIZE IT</button>
      </div>
      
  
      <!-- 2nd Row Container -->
      <div class="container_yedi">
        <div class="bookmark-icon_yedi">
          <span class="bookmark-text_yedi">02</span>
        </div>
        <a href="#">

        <div class="circle-with-text_yedi">
          <div class="circle-container_yedi">
            <img src="/x1.png" alt="Image 5" class="circle-image_yedi" />
          </div>
          <p class="circle-text_yedi">Ryzen 7</p>
        </div>
        </a>
        <a href="#">
        <div class="circle-with-text_yedi">
          <div class="circle-container_yedi">
            <img src="/x2.png" alt="Image 6" class="circle-image_yedi" />
          </div>
          <p class="circle-text_yedi">AMD X870</p>
        </div>
        </a>
        <a href="#">

        <div class="circle-with-text_yedi">
          <div class="circle-container_yedi">
            <img src="/x3.png" alt="Image 7" class="circle-image_yedi" />
          </div>
          <p class="circle-text_yedi">32 GB DDR5</p>
        </div>
        </a>
        <a href="#">

        <div class="circle-with-text_yedi">
          <div class="circle-container_yedi">
            <img src="/x4.png" alt="Image 8" class="circle-image_yedi" />
          </div>
          <p class="circle-text_yedi">RX 7900 XTX</p>
        </div>
        </a>
        <a href="#">
        <p class="additional-text1_yedi">...</p> <!-- 1. Container sonrası metin -->
        </a>
        <p class="yazilar_yedi">$2,150.89</p> 
        <!-- Button under the price -->
        <button class="white-button_yedi">VIEW DETAIL</button>
        <button class="action-button_yedi">CUSTOMIZE IT</button>
      </div>
  
      <!-- 3rd Row Container -->
      <div class="container_yedi">
        <div class="bookmark-icon_yedi">
          <span class="bookmark-text_yedi">03</span>
        </div>

        <a href="#">

        <div class="circle-with-text_yedi">
          <div class="circle-container_yedi">
            <img src="/y1.png" alt="Image 9" class="circle-image_yedi" />
          </div>
          <p class="circle-text_yedi">RYZEN 7700X</p>
        </div>

        </a>
        <a href="#">

        <div class="circle-with-text_yedi">
          <div class="circle-container_yedi">
            <img src="/y2.png" alt="Image 10" class="circle-image_yedi" />
          </div>
          <p class="circle-text_yedi">AMD B65DE</p>
        </div>
        </a>
        <a href="#">

        <div class="circle-with-text_yedi">
          <div class="circle-container_yedi">
            <img src="/y3.png" alt="Image 11" class="circle-image_yedi" />
          </div>
          <p class="circle-text_yedi">32 GB DDR5</p>
        </div>
        </a>
        <a href="#">

        <div class="circle-with-text_yedi">
          <div class="circle-container_yedi">
            <img src="/y4.png" alt="Image 12" class="circle-image_yedi" />
          </div>
          <p class="circle-text_yedi">RTX 4060 Ti</p>
        </div>
        </a>
        <a href="#">
        <p class="additional-text1_yedi">...</p> <!-- 1. Container sonrası metin -->
        </a>
        <p class="yazilar_yedi">$2,150.89</p> 
        <!-- Button under the price -->
        <button class="white-button_yedi">VIEW DETAIL</button>
        <button class="action-button_yedi">CUSTOMIZE IT</button>
      </div>
  
      <!-- 4th Row Container -->
      <div class="container_yedi">
        <div class="bookmark-icon_yedi">
          <span class="bookmark-text_yedi">04</span>
        </div>
        <div class="circle-with-text_yedi">
          <div class="circle-container_yedi">
            <img src="/o1.png" alt="Image 13" class="circle-image_yedi" />
          </div>
          <p class="circle-text_yedi">Ryzen 5 7600</p>
        </div>
        <div class="circle-with-text_yedi">
          <div class="circle-container_yedi">
            <img src="/o2.png" alt="Image 14" class="circle-image_yedi" />
          </div>
          <p class="circle-text_yedi">32 GB DDR5</p>
        </div>
        <div class="circle-with-text_yedi">
          <div class="circle-container_yedi">
            <img src="/o3.png" alt="Image 15" class="circle-image_yedi" />
          </div>
          <p class="circle-text_yedi">AMD B650</p>
        </div>
        <div class="circle-with-text_yedi">
          <div class="circle-container_yedi">
            <img src="/o4.png" alt="Image 16" class="circle-image_yedi" />
          </div>
          <p class="circle-text_yedi">RTX 4060 Ti</p>
        </div>
        <a href="#">
        <p class="additional-text1_yedi">...</p> <!-- 1. Container sonrası metin -->
        </a>
        <p class="yazilar_yedi">$2,150.89</p> 
        <!-- Button under the price -->
        <button class="white-button_yedi">VIEW DETAIL</button>
        <button class="action-button_yedi">CUSTOMIZE IT</button>
      </div>
    </div>

    <!-- component8-->
    <div class="container_sekiz">
      <div class="box_sekiz">
        <img src="/GPU.png" alt="Image 1" class="image_sekiz">
        <p class="text1_sekiz">Find a GPU/CPU on Newegg that You'd Like to Purchase</p>
        <p class="text2_sekiz">Visit an eligible GPU/CPU product page to click and fill out the Trade-in submission form.</p>
      </div>
      <div class="box_sekiz">
        <img src="/trade-in-offer.png" alt="Image 2" class="image_sekiz">
        <p class="text1_sekiz">Get a Trade-in Offer</p>
        <p class="text2_sekiz">Confirm your GPU/CPU model & condition to see your Trade-in value instantly.</p>
      </div>
      <div class="box_sekiz">
        <img src="/new-gpu.png" alt="Image 3" class="image_sekiz">
        <p class="text1_sekiz">Buy the new GPU/CPU</p>
        <p class="text2_sekiz">You'll see the eligible Trade-in value when you add the new GPU/CPU to cart.</p>
      </div>
      <div class="box_sekiz">
        <img src="/trade-in.png" alt="Image 4" class="image_sekiz">
        <p class="text1_sekiz">Ship the Trade-in</p>
        <p class="text2_sekiz">Use the prepaid UPS shipping label sent to your inbox to ship your trade-in to us.</p>
      </div>
      <div class="box_sekiz">
        <img src="/upgrade.png" alt="Image 5" class="image_sekiz">
        <p class="text1_sekiz">Trade-in Complete</p>
        <p class="text2_sekiz">Once we receive, review, and accept your item, you will be credited for the trade-in value!</p>
      </div>
    </div>

<!-- component6-->
<div class="container-wrapper_alti">
      <!-- Left container -->
      <div class="container-left_alti">
        <img src="/footerark.png" alt="Decorative Image" class="container-image_alti" />
        <div class="sol_alti">DEALS JUST FOR YOU</div>
        <div class="sol2_alti">Sign up to receive exclusive offers in your inbox.</div>
  
        <div class="search-container_alti">
          <input type="text" class="search-bar_alti" placeholder="Enter your email address" />
          <button class="apply-button_alti">Sign Up</button>
        </div>
        
        <!-- Clickable text wrapped in <a> tag -->
        <div class="sol3_alti">
          <a href="your-link-here" class="email-deals-link_alti">View latest email deals</a>
        </div>
      </div>
  
      <!-- Right container -->
      <div class="container-right_alti">
        <div class="sag_alti">Download Our APP</div>
        <div class="sag2_alti">Enter your phone number and we'll send you a download link.</div>
        
        <div class="search-container2_alti">
          <input type="text" class="search-bar2_alti" placeholder="Enter your phone number" />
          <button class="apply-button2_alti">Send Link</button>
        </div>
        <div class="sag3_alti">OR</div>
        
        <!-- QR Image -->
        <img src="/qr.png" alt="QR Code" class="qr-image_alti" />

        <div class="qr-sag_alti">Scan the QR code to download App</div>
        <div class="qr-sag2_alti">Scan this code with your phone's camera.</div>

        <img src="/bg_our_app.png" alt="QR Code" class="qr-image2_alti" />
      </div>
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



  //component 2 nin script
  // Items for carousel
  const items = [
    {
      backgroundImage: '/bckg.png',
      heading: 'Up to',
      discount: '81%',
      description: 'PCS & Laptops',
      smallImage: '/carouselpc1.png',
    },
    {
      backgroundImage: '/bckg.png',
      heading: 'Exclusive Deals',
      discount: '70%',
      description: 'Gaming Accessories',
      smallImage: '/carousel2.png',
    },
    {
      backgroundImage: '/bckg.png',
      heading: 'Special Offer',
      discount: '50%',
      description: 'Home Office Essentials',
      smallImage: '/carousel3.png',
    },
    {
      backgroundImage: '/bckg.png',
      heading: 'New Arrivals',
      discount: '30%',
      description: 'Smart Home Devices',
      smallImage: '/carousel4.png',
    },
    {
      backgroundImage: '/bckg.png',
      heading: 'Limited Time',
      discount: '25%',
      description: 'Kitchen Appliances',
      smallImage: '/kitchen.png',
    },
  ];

  //component4 için script
 // export default {
   // name: 'ThreeContainers',
  //}


  //component7 script: 

  </script>
  
  <style scoped>
.foto-container{
    position: relative;
  top: -590px; /* Sayfanın üstünden mesafe */
  left: 400px; /* Sayfanın ortasına hizalama */
  width: 900px;
  height: 100px;
}
.foto-image {
  width:790px; /* Fotoğraf genişliği */
  height: 300px; /* Fotoğrafın oranını korur */
  border-radius: 10px; /* Köşeleri yuvarlar */
}

 .center-container {
  display: flex;
  justify-content: flex-start; /* Align items to the left */
  align-items: flex-start; /* Align items to the top */
  flex-direction: column;
  width: 30%;
  margin: auto;
  padding: 16px;
  background-image: url('/bkg.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  height: 590px;
  margin-top: 120px;
  margin-left: 5px;
  
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





/*  component2 buraya */
/* Styling for the text with background clip effect */
.bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
  }
  
  /* Custom image size for all images */
  .custom-image {
    width: 170px;
    height: auto;
    margin-top: 4px;
    margin-left: 50px;
  }
  
  /* Custom size for carousel3.png */
  .custom-image-carousel3 {
    width: 100px; /* Specific size for carousel3.png */
    height: auto;
    margin-top: 4px;
    margin-left: 50px;
  }
  
  /* Custom size for carousel4.png */
  .custom-image-carousel4 {
    width: 150px; /* Specific size for carousel4.png */
    height: auto;
    margin-top: 4px;
    margin-left: 50px;
  }
  
  /* Left Arrow Button Styling */
  .left-button {
    background-image: url('/bkg.jpg'); /* Add your desired background image */
    background-size: cover;
    background-position: center;
    width: 50px;
    height: 50px;
    opacity: 0.7;
    border: 2px solid #e60073;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    border-radius: 50%;
  }
  
  .left-button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  /* Right Arrow Button Styling */
  .right-button {
    background-image: url('/bkg.jpg'); /* Add your desired background image */
    background-size: cover;
    background-position: center;
    width: 50px;
    height: 50px;
    opacity: 0.7;
    border: 2px solid #e60073;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    border-radius: 50%;
  }
  
  .right-button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  button:hover:not(:disabled) {
    opacity: 1;
  }
  
  /* Set the height of the carousel to make it shorter */
  .carousel-container {
  height: 500px; /* Adjust the height as needed */
  width: 800px; /* Take up the full width of the parent */
  /* Optional: Set a max-width to control the carousel's overall width */
  margin: auto; /* Center the carousel */
  margin-left: 400px;
  margin-top: -360px;
  position: relative; /* Fotoğrafın etkisini engellemek için gerekli */
}




/*component4 style*/

/* General body styling */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0; /* Light gray background for contrast */
 
  }
  
  .container {
  display: flex;
  gap: 30px;
  justify-content: center;
  width: 90%;
  margin-top: -150px;
  margin-left: 30px;
}

/* Container item wrapper */
.container-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

/* Container title */
.container-title {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 10px;
}

/* Main container item styling */
.container-item {
  background-color: white;
  border-radius: 8px;
  padding: 20px; /* Reduced padding */
 width: 100%;
  max-width: 500px;
  height: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0; /* Set margin to 0 to bring the item closer to the edges */
  position: relative;
}

/* Inner container that holds the items */
.inner-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex: 1;
  justify-content: space-between;
  margin-bottom: 10px; /* Add bottom margin to lower the bottom 2 items */
 

}

/* Inner item wrapper for each item */
.inner-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(50% - 10px); /* Ensure 2 items fit per row */
}

/* Styling for inner items */
.inner-item {
  border-radius: 8px;
  padding: 6px;
  text-align: center; /* Centers the content inside */
  color: #666;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width:110px; /* Make items occupy the full width of their wrapper */
  height: 90px;
}

/* Image styling inside each inner item */
.inner-image {
  width: 80px; /* Reduced width for smaller images */
  height: 80px; /* Reduced height for smaller images */
  object-fit: contain; /* Keeps aspect ratio */
  margin-bottom: 10px;
  display: block; /* Makes the image a block element to center it */
  margin-left: auto; /* Centers the image horizontally */
  margin-right: auto; /* Centers the image horizontally */
}
/* Link styling inside inner items */
.inner-link {
  color: #5416c0;
  font-size: 13px;
  margin-top: 5px;
  font-weight: bold;
}

/* Hover effect for links */
.inner-link:hover {
  text-decoration: underline;
}

/* First link styles */
.first-link {
  color: #000; /* Set color to black */
}

.red-link {
  color: #ffffff; /* Set color to black */
  background-color: rgb(221, 12, 12);
}

/* Different background colors for each container */
.container-item-1 .inner-item {
  background-color: #d7f0f8;
}

.container-item-2 .inner-item {
  background-color: #d1ecf1;
}

.container-item-3 .inner-item {
  background-color: #d4edda;
}



.normal-link {
    font-weight: normal;
}

/*component7 style*/
  /* Grid container with 2x2 layout */
  .grid-container_yedi{
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
    grid-gap: 20px; /* Space between containers */
    padding: 20px;
  }
  
  .container_yedi {
  background-color: #f8e2bb;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 10px;
  align-items: center;
  position: relative;
  height: 145px; /* Make container height flexible */
  
}
  
  /* Bookmark icon with text inside */
  .bookmark-icon_yedi {
    position: absolute;
    top: -4px; /* Distance from the top edge */
    left: -6px; /* Distance from the left edge */
    width: 40px; /* Icon width */
    height: 40px; /* Icon height */
    background-image: url('/bookmark.png'); /* Background image */
    background-size: cover; /* Cover the entire bookmark area */
    display: flex;
    justify-content: center; /* Center the text horizontally */
    align-items: center; /* Center the text vertically */
    border-radius: 50%; /* Optional: round the bookmark */
  }
  
  .bookmark-text_yedi {
    font-size: 14px; /* Adjust font size */
    font-weight: bold; /* Bold text for better visibility */
    color: white; /* Text color (adjust based on bookmark color) */
    text-align: center;
  }
  
  .circle-with-text_yedi {
    display: flex;
    flex-direction: column; /* Stack circle and text vertically */
    align-items: center; /* Center align items */
  }
  
  .circle-container_yedi {
    width: 80px; /* Circle size */
    height: 80px;
    background-color: white;
    border-radius: 50%; /* Make it a circle */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible; /* Allow image to overflow outside the circle */
  }
  
  /* Image inside the circle */
  .circle-image_yedi {
    width: auto;
    height: 60px; /* Adjust size */
    object-fit: cover;
  }
  
  /* Text below the circle */
  .circle-text_yedi {
    margin-top: 5px; /* Space between circle and text */
    font-size: 12px; /* Adjust font size */
    text-align: center;
    color: #333; /* Text color */
    font-weight: bold;
  }
  
  /* Metinler için stil */
  .additional-text1_yedi {
    font-weight: bold;
    text-align: center;
    font-size: 40px;
    font-weight: normal;
    color: #555;
    top: -115px; /* Space between the circle containers and the text */
    position: relative;
    margin-left: 356px;
  }

  .yazilar_yedi {
    font-weight: bold;
    text-align: center;
    font-size: 16px;
    
    color: #000000;
    top: -190px; /* Space between the circle containers and the text */
    position: relative;
    margin-left: 450px;
  }
/* Button styling */
.action-button_yedi {
    white-space:nowrap;
    margin-left: 420px;
  background-color: #ff9500; /* Orange color */
  color: rgb(0, 0, 0); /* Text color */
  border: 1px solid rgb(243, 94, 40); /* Remove border */
  padding: 5px 10px; /* Padding for the button */
  font-size: 12px; /* Font size */
  font-weight: bold; /* Bold text */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  margin-top: -290px; /* Space above the button */
  display: block; /* Make it a block element to take full width */
  width: 100px; /* Button takes full width of its container */
  height: 27px;
  text-align: center; /* Center text */
  transition: background-color 0.3s ease; /* Smooth transition */
}

/* Button hover effect */
.action-button_yedi:hover {
  background-color: #ff6600; /* Darker orange on hover */
}

.white-button_yedi {
    white-space:nowrap;
    margin-left: 420px;
  background-color: #ffffff; /* Orange color */
  color: rgb(0, 0, 0); /* Text color */
  border: 1px solid rgb(169, 169, 169); /* Remove border */
  padding: 5px 10px; /* Padding for the button */
  font-size: 12px; /* Font size */
  font-weight: bold; /* Bold text */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  margin-top: -350px; /* Space above the button */
  display: block; /* Make it a block element to take full width */
  width: 100px; /* Button takes full width of its container */
  height: 27px;
  text-align: center; /* Center text */
  transition: background-color 0.3s ease; /* Smooth transition */
}

/* Button hover effect */
.white-button_yedi:hover {
  color:rgb(46, 32, 239) ; /* Darker orange on hover */
}

/*component8 style*/
.container_sekiz {
    display: flex;
    justify-content: flex-start; /* Aligns all boxes to the left */
    flex-wrap: wrap;
    margin-left: 110px;
}
  
.box_sekiz {
    background-color: white;
    padding: 20px;
    text-align: center;
  
    box-sizing: border-box;
    width: 200px;
}
  
.image_sekiz {
    max-width: 100%;
    height: auto;
}
  
.text1_sekiz {
    margin-top: 10px;
    font-size: 20px;
    color: #000000;
    font-weight: bold;
}
  
.text2_sekiz {
    margin-top: 10px;
    font-size: 14px;
    color: #333;
    font-weight: normal;
}
/* component6 style*/
/* Wrapper to align containers next to each other */
.container-wrapper_alti {
    display: flex;
    justify-content: flex-start; /* Align items to the start without large gaps */
    gap: 20px; /* Small gap between containers */
    padding: 20px; /* Optional padding for the wrapper */
    margin-left: 50px;
}
  
/* General container styles */
.container-left_alti,
.container-right_alti {
    border-radius: 10px; /* Rounded edges */
    padding: 20px; /* Internal padding */
    font-size: 16px; /* Adjustable font size */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for visual appeal */
}
  
/* Adjustable styles for the left container */
.container-left_alti {
    background-color: #dbe0f4; /* Light gray background */
    width: 720px; /* Adjustable width */
    height: 280px; /* Adjustable height */
    position: relative; /* For positioning the image and text */
    overflow: hidden; /* To ensure no overflow of content */
}
  
/* Adjustable styles for the right container */
.container-right_alti {
    background-color: #dbe0f4; /* Light blue background */
    width: 400px; /* Adjustable width */
    height: 280px; /* Adjustable height */
}
  
/* Image inside the left container */
.container-image_alti {
    position: absolute;
    top: 20px; /* Adjust vertical positioning */
    right: -20px; /* Adjust horizontal positioning */
    width: 350px; /* Adjust image width */
    height: auto; /* Maintain aspect ratio */
    z-index: 1; /* Place image behind the text */
}
  
/* Heading in the left container */
.sol_alti {
    position: relative;
    color: black;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    z-index: 2; /* Ensure text appears above the image */
}
  
/* Subtitle in the left container */
.sol2_alti {
    position: relative;
    color: black;
    font-size: 16px;
    font-weight: bold;
    z-index: 2; /* Ensure text appears above the image */
    top: 10px;
}
  
.sol3_alti {
    position: relative;
    color: rgb(40, 27, 183);
    font-size: 16px;
    font-weight: bold;
    z-index: 2; /* Ensure text appears above the image */
    top: 20px;
    margin-left: 4px;
}
  
/* Styling for the clickable "View latest email deals" link */
.email-deals-link_alti {
    color: rgb(40, 27, 183); /* Link color */
    font-size: 16px;
    font-weight: bold;
    text-decoration: none; /* Remove underline */
}
  
.email-deals-link_alti:hover {
    text-decoration: underline; /* Add underline on hover */
    cursor: pointer; /* Change the cursor to pointer */
}
  
/* Search container alignment */
.search-container_alti {
    display: flex;
    align-items: center; /* Vertically align the items */
    margin-left: 27px; /* Move the entire search bar and button to the right */
    position: relative; /* For proper layering */
    z-index: 3; /* Ensure it appears above the image */
    margin-top: 26px;
}
  
/* Styling for the Apply button */
.apply-button_alti {
    height: 35px;
    padding: 0 20px;
    border-radius: 5px; /* Rounded edges */
    background-color: #2431bc; /* Updated background color */
    color: rgb(255, 255, 255); /* White text color */
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: bold;
}
  
/* Styling for the search bar */
.search-bar_alti {
    height: 35px;
    width: 340px;
    padding: 0 15px;
    border-radius: 5px; /* Rounded edges */
    border: 1px solid #ccc;
    font-size: 16px;
    outline: none; /* Remove default focus outline */
    background-color: white;
    color: black; /* Set text color to black */
    margin-left: -26px; 
}
  
/* Focus style for the search bar */
.search-bar_alti:focus {
    border-color: #007bff; /* Change border color when focused */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add subtle shadow */
}
  
/* Styling for the right container text */
.sag_alti {
    position: relative;
    color: black;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    z-index: 2; /* Ensure text appears above the image */
    text-align: left; /* Center the text */
    padding-top: -4px; /* Add some top padding to position the text */
}
  
.sag2_alti {
    position: relative;
    color: black;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    z-index: 2; /* Ensure text appears above the image */
    text-align: left; /* Center the text */
    padding-top: -4px; /* Add some top padding to position the text */
}
  
.sag3_alti {
    color: #333;
    padding: 18px;
    margin-left: 150px;
   margin-top: -6px;
   font-size: 13px;
}
  
/* QR Image styling */
.qr-image_alti {
    margin-top: -20px; /* Adds space below the OR text */
    width: 80px; /* You can adjust the width */
    height: auto; /* Keep the aspect ratio */
    display: block;
    margin-left: 0; /* Align it to the left */
}

.qr-image2_alti {
  margin-top: -118px;
  width: 120px;
  height: auto;
  display: block;
  position: relative; /* Ensure positioning */
  right: -260px; /* Move the image from the right */
}
  
.search-container2_alti {
    display: flex;
    align-items: center; /* Vertically align the items */
    margin-left: 27px; /* Move the entire search bar and button to the right */
    position: relative; /* For proper layering */
    z-index: 3; /* Ensure it appears above the image */
    margin-top: 10px;
}
  
/* Styling for the Apply button */
.apply-button2_alti {
    height: 30px;
    padding: 0 20px;
    border-radius: 8px; /* Rounded edges */
    background-color: #a5bcfa; /* Updated background color */
    color: rgb(0, 0, 0); /* White text color */
    font-size: 13px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: bold;
    margin-left: -6px;
}
  
/* Styling for the search bar */
.search-bar2_alti {
    height: 30px;
    width: 250px;
    padding: 0 15px;
    border-radius: 8px; /* Rounded edges */
    border: 1px solid #ccc;
    font-size: 16px;
    outline: none; /* Remove default focus outline */
    background-color: white;
    color: black; /* Set text color to black */
    margin-left: -26px; 
}
  
/* Focus style for the search bar */
.search-bar2_alti:focus {
    border-color: #007bff; /* Change border color when focused */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add subtle shadow */
}

.qr-sag_alti {
  font-weight: bold;
  color: black;
  margin-top: -75px;
  white-space: normal; /* Allow the text to wrap normally */
  word-wrap: break-word; /* Ensure long words break if necessary */
  max-width: 200px; /* Limit the width of the text container to make it wrap */
  margin-left: 85px;
  font-size: 15px;
}

.qr-sag2_alti {
  font-weight: normal;
  color: black;
  margin-top: -2px;
  white-space: normal; /* Allow the text to wrap normally */
  word-wrap: break-word; /* Ensure long words break if necessary */
  max-width: 200px; /* Limit the width of the text container to make it wrap */
  margin-left: 85px;
  font-size: 15px;
}
  </style>
  