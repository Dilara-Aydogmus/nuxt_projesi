<template>
            <!-- component3template -->

<nav class="navbar">
      <div class="navbar-container">
        <!-- PNG Image at the start of the navbar -->
        <img src="/logo.SVG" alt="Logo" class="navbar-logo" />
    
        <!-- Button with bold text, "Select Address" under it, and PNG image -->
        <button class="navbar-button">
          <img src="/konum.png" alt="Icon" class="button-image" />
          <div class="button-text">
            <span class="button-subtext">Hello</span>
            <span class="button-bold">Select Address</span>
          </div>
        </button>
    
        <div class="navbar-search">
          <input type="text" placeholder="Search..." class="search-input" />
          <button class="search-button">
            <img src="/search.png" alt="Search" class="search-icon" />
          </button>
    
          <button class="search-button2">
            ssd hard drive
          </button>
    
          <button class="notification-button">
            <img src="/zil.png" alt="Notification" class="notification-icon" />
          </button>
          <button class="notification-button">
            <img src="/bayrak.png" alt="Notification" class="notification-icon" />
          </button>
    
          <label class="switch">
            <input type="checkbox" v-model="toggleState" />
            <span class="slider"></span>
          </label>
    
          <button class="navbar-button">
            <img src="/insan.png" alt="Icon" class="button-image" />
            <div class="button-text">
              <span class="button-subtext">Welcome</span>
              <span class="button-bold">Sign in / Register</span>
            </div>
          </button>
    
          <button class="navbar-button">
            <div class="button-text">
              <span class="button-subtext">Returns</span>
              <span class="button-bold">& Orders</span>
            </div>
          </button>
    
          <button class="notification-button">
            <img src="/avm.png" alt="Notification" class="notification-icon" />
          </button>
        </div>
      </div>
  
      <!-- New row and text added below the navbar container -->
      <div class="new-row">



        <!-- Toggle menu button -->
        <button class="toggle-menu-button" @click="toggleMenu">
   <img src="/menu16.png" alt="Icon" class="button-image" />
            <div class="button-text">
              <span class="button-bold">Menu</span>
            
            </div>
            <img src="/down.png" alt="Icon" class="button-image" />
</button>

<button class="yazilar">
    <div class="button-text">
        <span class="button-bold">
            Shell Shocker Deals
        </span>
    </div>
</button>


<button class="yazilargift">
    <div class="button-text">
        <span class="button-bold">
           Holiday Gift Guide
        </span>
    </div>
</button>

<button class="yazilar2">
    <div class="button-text">
        <span class="button-bold">
           PC Builder
        </span>
    </div>
</button>

<button class="yazilarclearance">
    <div class="button-text">
        <span class="button-bold">
          Clearance
        </span>
    </div>
</button>
      

<button class="yazilarbest">
    <div class="button-text">
        <span class="button-bold">
         Best Sellers
        </span>
    </div>
</button>
      
<button class="yazilarram">
    <div class="button-text">
        <span class="button-bold">
         Free RAM
        </span>
    </div>
</button>


<button class="yazilarn">
    <div class="button-text">
        <span class="button-bold">
         NEWEGG
        </span>
    </div>
</button>

<button class="yazilarb">
    <div class="button-text">
        <span class="button-bold">
         BUSINESS
        </span>
    </div>
</button>



<button class="yazilarone">
    <img src="/chat.png" alt="icon" class="button-icon">
    <div class="button-text">
     
        <span class="button-bold">
            Feedback
        </span>
    </div>
</button>

<button class="yazilartwo">
    <img src="/support.png" alt="icon" class="button-icon">
    <div class="button-text">
      
        <span class="button-bold">
            Help Center
        </span>
    </div>
</button>
      </div>
  
      <!-- Menu that will show/hide based on the toggle state -->
      <div v-if="menuVisible" class="dropdown-menu">
        <div class="dropdown-lists">
        <!-- Left List -->
        <ul class="list-left">
          <li><a href="#">
            <img src="/hourglass.png" class="list-item-icon" />
            Today's Best Deals</a></li>
          <li><a href="#">
            <img src="/letter.png" class="list-item-icon" />
            Email Deals</a></li>
          <li><a href="#">
            <img src="/tag.png" class="list-item-icon" />
            Clearance - up to 70% off</a></li>
          <li><a href="#">
            <img src="/refreshed.png" class="list-item-icon" />
            Refreshed - Like new </a></li>
          <li><a href="#">
            <img src="/credit.png" class="list-item-icon" />
            Newegg Store Credit Card</a></li>
            <li><a href="#" style="font-weight: bold; font-style: italic;">Trending</a></li>
          <li><a href="#">Black Friday Ultimate Sale</a></li>
          <li><a href="#" style="font-weight: bold; font-style: italic;">Shopping Tools</a></li>
          <li><a href="#">Custom PC Builder</a></li>
          <li><a href="#">ASUS NUC Configurator</a></li>
          <li><a href="#">Gaming PC Finder</a></li>
          <li><a href="#">Laptop Finder</a></li>
          <li><a href="#">Server Builder</a></li>
          <li><a href="#">NAS Builder</a></li>
          <li><a href="#">Memory Finder</a></li>
        </ul>

        <!-- Right List -->
        <ul class="list-right ">
            <li><a href="#" style="font-weight: bold; font-style: italic;">All Products</a></li>
          <li><a href="#">Components & Storage

            <img src="/xyz.png" class="testing" />


          </a></li>
          <li><a href="#">Computer Systems

            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Computer Peripherals
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Server & Components
            <img src="/xyz.png" class="testing" /> </a></li>
          <li><a href="#">Appliances
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Electronics
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Gaming & VR
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Networking
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Smart Home & Security
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Office Solutions
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Software & Services
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Automotive & Tools
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Home & Outdoors
            <img src="/xyz.png" class="testing" />
          </a></li>
          <li><a href="#">Health & Sports
            <img src="/xyz.png" class="testing" />
          </a></li>
        </ul>
      </div>
      </div>
    </nav>


        <!-- component1 -->


    <div>
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






    <!-- component9 deneme-->
    <div class="container_dokuz">
      <div class="header_dokuz">
        <img src="/siteikon.png" alt="Image 1" class="image_dokuz">
        <p class="text1_dokuz">Sign in</p>
      </div>
  
      <!-- Flex container for vertical alignment -->
      <div class="search-container_dokuz">
        <input type="text" class="search-bar_dokuz" placeholder="Email Address" />
        <button class="checkout_dokuz">SIGN IN</button>
        <button class="checkout2_dokuz">GET ONE-TIME SIGN IN CODE</button>
      </div>
  
      <!-- Text container -->
      <div class="text-container_dokuz">
        <a href="#"> 
          <p class="text2_dokuz">What's The One-Time Code?</p>
        </a>
  
        <p class="text3_dokuz">New To Newegg?</p>
  
        <a href="#"> 
          <p class="text4_dokuz">Sign Up</p>
        </a>
  
        <p class="text5_dokuz">OR</p>
      </div>
    </div>

    <div class="search-container2_dokuz">
        
        <button class="alt_dokuz">
            <img src="/icon-google.png"  class="icon_dokuz" />
            SIGN IN WITH GOOGLE</button>
        <button class="alt2_dokuz">   <img src="/apple.svg" class="icon2_dokuz" />
            SIGN IN WITH APPLE</button>
      </div>
  

      <div class="text-container2_dokuz">
        <a href="#"> 
          <p class="t_dokuz">Terms & Conditions | Privacy Policy </p>
        </a>
        <a href="#"> 
        <p class="tt_dokuz">Cookie Preferences</p>
        </a>
  
        <p class="tttt_dokuz">© 2000-2024 Newegg Inc. All rights reserved.</p>
      </div>






      </div>


              <!-- component2 -->

  
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
                <div
                  class="font-bold text-sm text-transparent bg-clip-text"
                  :style="{ backgroundImage: 'url(/ff.jpeg)' }"
                >
                  {{ item.heading }}
                </div>
                <div
                  class="font-bold text-3xl text-transparent bg-clip-text"
                  :style="{ backgroundImage: 'url(/ff.jpeg)' }"
                >
                  {{ item.discount }}
                  <span class="text-sm font-bold" style="font-weight: 900;">Off</span>
                </div>
                <div
                  class="font-bold text-sm"
                  :style="{ color: '#66ffff' }"
                >
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
                <img src="/ok2.png" alt="OK Image" class="w-8 h-8" />
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
    </div>

      <!-- component4 template -->

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

                  <!-- component10 -->

    <div class="container-wrapper_on">
      <!-- Container 1 -->
      <div class="container_on">
        <div class="image-container_on"
          @mouseover="changeImage(1)"
          @mouseleave="resetImage(1)"
          :style="{ backgroundImage: 'url(' + currentImage1 + ')' }">
        </div>
        <a href="#" class="image-text_on">CCORSAIR iCUE H150i ELITE CAPELLIX XT Liquid CPU Cooler - AF120 RGB ELITE Fans - 360mm Radiator -</a>
        <a href="#" class="oylama_on">
          <img src="/oylama1.png" alt="Rating 1" />
          <span class="oylama-text_on">(601)</span>
        </a>
        <button class="test_on">
          <img src="/marka1.png" alt="Button Image" />
          <span class="button-text_on">>></span>
        </button>
        <div class="asagi-text_on">Save: 49%</div>
        <div class="fiyat-text_on">$429</div>
        <button class="cart_on">ADD TO CART</button>
      </div>
  
      <!-- Container 2 -->
      <div class="container_on">
        <div class="image-container_on"
          @mouseover="changeImage(2)"
          @mouseleave="resetImage(2)"
          :style="{ backgroundImage: 'url(' + currentImage2 + ')' }">
        </div>
        <a href="#" class="image-text_on">SAMA SM360 Black 360mm Liquid Water AIO CPU Cooler For Gaming PC Computer with</a>
        <a href="#" class="oylama2_on">
          <img src="/oylama2.png" />
          <span class="oylama-text_on">(4)</span>
        </a>
        <button class="test2_on">
          <img src="/marka2.png" alt="Button Image" />
          <span class="button-text_on">>></span>
        </button>
        <div class="asagi-text2_on">Save: 22%</div>
        <div class="fiyat-text_on">$429</div>
        <button class="cart_on">ADD TO CART</button>
      </div>
  
      <!-- Container 3 -->
      <div class="container_on">
        <div class="image-container_on"
          @mouseover="changeImage(3)"
          @mouseleave="resetImage(3)"
          :style="{ backgroundImage: 'url(' + currentImage3 + ')' }">
        </div>
        <a href="#" class="image-text_on">MSI 34" 240 Hz QD-OLED UWQHD Gaming Monitor 3440 x 1440 (2K) 97.8% Adobe RGB</a>
        <a href="#" class="oylama3_on">
          <img src="/oylama1.png" />
          <span class="oylama-text_on">(758)</span>
        </a>
        <button class="test3_on">
          <img src="/marka3.png" alt="Button Image" />
          <span class="button-text_on">>></span>
        </button>
        <div class="asagi-text3_on">Save: 24%</div>
        <div class="fiyat-text2_on">$429</div>
        <button class="cart2_on">ADD TO CART</button>
      </div>
    </div>
  
    <div class="container-wrapper_on">
      <!-- Container 4 -->
      <div class="container_on">
        <div class="image-container_on"
          @mouseover="changeImage(4)"
          @mouseleave="resetImage(4)"
          :style="{ backgroundImage: 'url(' + currentImage4 + ')' }">
        </div>
        <a href="#" class="image-text_on">CCORSAIR iCUE H150i ELITE CAPELLIX XT Liquid CPU Cooler - AF120 RGB ELITE Fans - 360mm Radiator -</a>
        <a href="#" class="oylama_on">
          <img src="/oylama1.png" alt="Rating 1" />
          <span class="oylama-text_on">(601)</span>
        </a>
        <button class="test_on">
          <img src="/marka1.png" alt="Button Image" />
          <span class="button-text_on">>></span>
        </button>
        <div class="asagi-text_on">Save: 49%</div>
        <div class="fiyat-text_on">$429</div>
        <button class="cart_on">ADD TO CART</button>
      </div>
  
      <!-- Container 5 -->
      <div class="container_on">
        <div class="image-container_on"
          @mouseover="changeImage(5)"
          @mouseleave="resetImage(5)"
          :style="{ backgroundImage: 'url(' + currentImage5 + ')' }">
        </div>
        <a href="#" class="image-text_on">SAMA SM360 Black 360mm Liquid Water AIO CPU Cooler For Gaming PC Computer with</a>
        <a href="#" class="oylama2_on">
          <img src="/oylama2.png" />
          <span class="oylama-text_on">(4)</span>
        </a>
        <button class="test2_on">
          <img src="/marka2.png" alt="Button Image" />
          <span class="button-text_on">>></span>
        </button>
        <div class="asagi-text2_on">Save: 22%</div>
        <div class="fiyat-text_on">$429</div>
        <button class="cart_on">ADD TO CART</button>
      </div>
  
      <!-- Container 6 -->
      <div class="container_on">
        <div class="image-container_on"
          @mouseover="changeImage(6)"
          @mouseleave="resetImage(6)"
          :style="{ backgroundImage: 'url(' + currentImage6 + ')' }">
        </div>
        <a href="#" class="image-text_on">MSI 34" 240 Hz QD-OLED UWQHD Gaming Monitor 3440 x 1440 (2K) 97.8% Adobe RGB</a>
        <a href="#" class="oylama3_on">
          <img src="/oylama1.png" />
          <span class="oylama-text_on">(758)</span>
        </a>
        <button class="test3_on">
          <img src="/marka3.png" alt="Button Image" />
          <span class="button-text_on">>></span>
        </button>
        <div class="asagi-text3_on">Save: 24%</div>
        <div class="fiyat-text2_on">$429</div>
        <button class="cart2_on">ADD TO CART</button>
      </div>
    </div>

<!-- component7-->


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

    <!-- component5-->
         <!-- Shopping Cart title and Move to Wishlist button -->
    <div class="shopping-cart-header_bes">
        <div class="container-title_bes">Shopping Cart ({{ cartItems.length }} items)</div>
      <div class="button-text_bes move-all_bes">❤︎  Move All To Wishlist</div>
      <div class="button-text_bes remove-all_bes">
  <img src="/trash.png" alt="Remove" class="trash-icon_bes" />
  Remove All
</div>
    </div>
  
    <!-- PRINT button aligned to the left -->
    <button class="print-button_bes">
        <img src="/printer.png" alt="Trash Icon" class="printer_bes" />
        PRINT</button>
  
    <div class="container_bes">
    <!-- Sol Konteyner -->
    <div
    v-for="item in cartItems"
    :key="item.id"
    class="container-item_bes container-item-left_bes"
  >
    <!-- Image, text, and dropdown side-by-side -->
    <div class="image-text-container_bes">
      <img :src="item.image" :alt="item.name" class="image-left_bes" />
      <a href="#" class="text-link_bes">{{ item.name }}</a>

      <select class="select-options_bes">
        <option disabled selected>{{ item.quantity || 1 }}</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>Delete</option>
      </select>
    </div>

    <!-- Fiyat -->
    <div class="test4_bes">${{ item.price }}</div>

    <!-- Diğer Bilgiler -->
    <div class="ikinci_bes">#1 BEST SELLER</div>
    <div class="ucuncu_bes">
      <a href="#" class="clickable-link_bes">in Operating Systems</a>
    </div>
    <div class="test_bes">
      <a href="#" class="clickable-link2_bes">Limit 5</a>
    </div>
    <div class="test2_bes">
      <a href="#" class="clickable-link3_bes">2,000+ people have this item in their cart.</a>
    </div>

    <!-- Teknik Özellikler -->
    <span class="normal-font_bes">Operating Systems:</span>
    <span class="bold-font_bes">{{ item.operatingSystem || 'Unknown' }}</span>
    <div class="alt2_bes">Bit Version: 64 Bit</div>
    <div class="alt3_bes">Version: {{ item.version || 'Standard' }}</div>

    <!-- Butonlar -->
    <button class="wish-button_bes">❤︎ MOVE TO WISH LIST</button>
    <button class="save-button_bes">
      <img src="/kitap.png" class="kitap_bes" />
      SAVE FOR LATER
    </button>
    <button
      class="remove-button_bes"
      @click="removeItemFromCart(item.id)" 
    >
      <img src="/trash.png" alt="Trash Icon" class="trash-icon2_bes" />
      REMOVE
    </button>
  </div>

  



      <!-- Sağ Konteyner -->
      <div class="container-item_bes container-item-right_bes">
        <div class="container-title_bes">Summary</div>
       <div class="sag1_bes"> Item(s): </div>
       <div class="bir_bes">$139</div> 
       <div class="sag2_bes">Est. Delivery: </div>
       <div class="iki_bes">$139</div> 
       <div class="sag3_bes">Promo Code Discount:</div>

       
       <div class="sag4_bes">Apply Promo Code</div>

       <div class="search-container_bes">
  <input type="text" class="search-bar_bes"  />
  <button class="apply-button_bes">Apply</button>
</div>

<div class="sag5_bes">Est. Total:</div>
<div class="sag5-value_bes">$139</div> 

<button class="checkout_bes">SECURE CHECKOUT</button>
<div class="or_bes">OR</div>
<button class="checkout2_bes">PAYPAL ile satın alın</button>
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

<!-- component6 -->
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

  import { db } from "@/firebase";
  import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
  import { ref, onMounted } from "vue";
  
  // Tür Tanımı
  interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity?: number;
    operatingSystem?: string;
    version?: string;
  }
  
  // Reactive Data
  const cartItems = ref<CartItem[]>([
  {
    id: "1",
    name: "Microsoft Windows 11 Home (USB)",
    price: 139.99,
    image: "/w11.jpg",
    quantity: 1,
    operatingSystem: "Windows 11",
    version: "Home",
  },
]); // Örnek ürün, Firestore'dan veri gelmeden önce test için.
  
  // Verileri Firebase'den Çekme
  async function fetchCartItems() {
  try {
    const querySnapshot = await getDocs(collection(db, "shoppingCart"));
    cartItems.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as CartItem[];

    // Eğer Firebase'den gelen veri yoksa varsayılan ürün eklenir
    if (cartItems.value.length === 0) {
      cartItems.value.push({
        id: "1",
        name: "Microsoft Windows 11 Home (USB)",
        price: 139.99,
        image: "/w11.jpg",
        quantity: 1,
        operatingSystem: "Windows 11",
        version: "Home",
      });
    }
  } catch (error) {
    console.error("Error fetching cart items:", error);
  }
}
  
  // Öğeyi Firebase'den Silme
  async function removeItemFromCart(id: string) {
    try {
      await deleteDoc(doc(db, "shoppingCart", id));
      cartItems.value = cartItems.value.filter((item) => item.id !== id);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  }
  
  // İlk yüklemede verileri çek
  onMounted(() => {
    fetchCartItems();
  });
  















  
  // Links and submenu data
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
  
  // Reactive properties
  const expandedLink = ref<string | null>(null);
  const showMainMenu = ref<boolean>(true);
  
  // Toggle state for menu visibility
  const menuVisible = ref(false);  // Controls the visibility of the menu
  const toggleState = ref(false);  // Keeps track of the toggle state (false = off, true = on)
  
  // Methods
  function toggleMenu() {
    menuVisible.value = !menuVisible.value;  // Toggles the visibility of the menu
  }
  
  function toggleSubmenu(label: string) {
    expandedLink.value = expandedLink.value === label ? null : label;
    showMainMenu.value = expandedLink.value === null;
  }
  
  function backToMain() {
    expandedLink.value = null;
    showMainMenu.value = true;
  }
  
  function getSubItems(label: string | null) {
    if (label) {
      const link = links.find((link) => link.label === label);
      return link?.subItems || [];
    }
    return [];
  }
  
  function getLinkName(label: string | null) {
    return label ? label : '';
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
    return iconMap[label] || '/pages/default-icon.png';
  }
  
  // Carousel items
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


  // Set initial and hover images
const image1 = '/kapak1.jpg';
const image2 = '/kapak2.jpg';
const image3 = '/kapak3.jpg';
const image4 = '/d1.jpg';
const image5 = 'kapak5.jpg';
const image6 = 'kapak6.jpg';
const hoverImage1 = '/kapak1alt.jpg';
const hoverImage2 = '/kapak2alt.jpg';
const hoverImage3 = '/kapak3alt.jpg';
const hoverImage4 = '/d2.jpg';
const hoverImage5 = 'kapak5alt.jpg';
const hoverImage6 = 'kapak6alt.jpg';

// Current image bindings for each container
const currentImage1 = ref(image1);
const currentImage2 = ref(image2);
const currentImage3 = ref(image3);
const currentImage4 = ref(image4);
const currentImage5 = ref(image5);
const currentImage6 = ref(image6);

function changeImage(containerNumber: number) {
  if (containerNumber === 1) currentImage1.value = hoverImage1;
  else if (containerNumber === 2) currentImage2.value = hoverImage2;
  else if (containerNumber === 3) currentImage3.value = hoverImage3;
  else if (containerNumber === 4) currentImage4.value = hoverImage4;
  else if (containerNumber === 5) currentImage5.value = hoverImage5;
  else if (containerNumber === 6) currentImage6.value = hoverImage6;
}

function resetImage(containerNumber: number) {
  if (containerNumber === 1) currentImage1.value = image1;
  else if (containerNumber === 2) currentImage2.value = image2;
  else if (containerNumber === 3) currentImage3.value = image3;
  else if (containerNumber === 4) currentImage4.value = image4;
  else if (containerNumber === 5) currentImage5.value = image5;
  else if (containerNumber === 6) currentImage6.value = image6;
}




  </script>



















  <style scoped>
  /*component1 style*/
  .center-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 38%;
    margin: 100px auto 0;
    margin-left: 30px;
    padding: 16px;
    background-image: url('/bkg.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    height: 590px;
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
  .toggle-icon2 {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }
  
  .toggle-icon.expanded {
    transform: rotate(180deg);
  }
  
  .submenu {
    width: 100%;
    margin-top: 4px;
    padding-left: 0;
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
    justify-content: flex-start;
  }
  
  .submenu-item .view-all-text {
    margin-left: auto;
  }
  
  .submenu-item .submenu-toggle-icon {
    margin-left: auto;
    margin-right: 0;
  }
  
  .submenu-item:hover {
    background-image: url('/mavi.png');
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    color: white;
  }
  
  .submenu-toggle-icon {
    width: 16px;
    height: 16px;
  }
  
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
    margin-right: 8px;
  }

  /*component2 style*/
  
  .bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
  }
  
  .custom-image {
    width: 170px;
    height: auto;
    margin-top: 4px;
    margin-left: 50px;
  }
  
  .custom-image-carousel3 {
    width: 100px;
    height: auto;
    margin-top: 4px;
    margin-left: 50px;
  }
  
  .custom-image-carousel4 {
    width: 150px;
    height: auto;
    margin-top: 4px;
    margin-left: 50px;
  }
  
  .left-button {
    background-image: url('/bkg.jpg');
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
  
  .right-button {
    background-image: url('/bkg.jpg');
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
  
  .carousel-container {
    height: 500px;
    width: 800px;
    margin: 30px;
    margin-top: 70px;
    margin-left: 150px;
  }

  /* component4 style*/
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
  margin-top: -210px;
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













 /* Base styles for navbar component3 */
 .navbar {
    background-color: white;
    padding: 10px 20px;
    border-bottom: 2px solid #ddd;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column; /* Allow navbar to grow vertically */
    align-items: center; /* Center items vertically */
    z-index: 100;
  }
  
  .navbar-container {
    display: flex;
    justify-content: flex-start; /* Align items in the start */
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .navbar-logo {
    height: 53px;
    margin-right: 20px; /* Add some margin to separate logo from next item */
  }
  
  /* Button and image styles */
  .navbar-button {
    padding: 8px 16px; /* Reduced padding for a more compact look */
    font-size: 14px;
    background-color: transparent;
    color: black;
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: left;
    gap: 8px;
  }
  
  .navbar-button:hover {
    background-color: #dee0e1eb;
  }
  
  .button-image {
    width: 25px;
    height: 30;
    margin-top: 2px;
  }
  
  .button-text {
    display: flex;
    flex-direction: column;
    text-align: left;
    color:black;

  }
  
  .button-bold {
    font-weight: bold;
  }
  
  .button-subtext {
    font-size: 12px;
    margin-top: 4px;
    color: #666;
  }
  
  /* Styles for the search bar */
  .navbar-search {
    display: flex;
    align-items: center;
    gap: 10px; /* Reduced space between elements inside navbar-search */
  }
  
  .search-input {
    padding: 8px 12px;
    border-radius: 25px;
    border: none;
    font-size: 14px;
    width: 385px; /* Reduced width */
    transition: border 0.3s ease;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('purple-to-blue.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .search-input:focus {
    outline: none;
    border: 2px solid #1737d6;
  }
  
  .search-button {
    background-color: #1737d6;
    border: none;
    border-radius: 25px;
    padding: 8px 20px;
    cursor: pointer;
    position: absolute;
    right: 565px; /* Adjusted right positioning */
    top: 40px;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
    margin-right: 2px;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .search-button:hover {
    background-color:#3065d8;
    transform: translateY(-50%) scale(1.11);

  }
  
  .search-icon {
    width: 22px;
    height: auto;
  }
  
  .search-button2 {
    background-color: #ffffffc8;
    border: none;
    border-radius: 5px;
    padding: 1px 4px;
    cursor: pointer;
    position: absolute;
    right: 650px; /* Adjusted right positioning */
    top: 40px;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
    color: black;
    font-size: 13px;
  }
  
  /* Notification button styles */
  .notification-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }
  
  .notification-button:hover {
    background-color: #f0f0f0;
  }
  
  .notification-icon {
    width: 31px;
    height: 31px;
  }
  
  /* Custom Toggle Styles */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 50px;
    border: 1px solid rgb(0, 0, 0);
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    border-radius: 50px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
  }
  
  input:checked + .slider {
    background-color: #d66017;/* Purple when toggled */
  }
  
  input:checked + .slider:before {
    transform: translateX(26px); /* Move the slider to the right */
  }
  
  /* New row and text styles */
  .new-row {
    width: 100%;
    background-color: white; /* Set background color to white */
    padding: 10px 20px;
    display: flex;
    justify-content: flex-start; /* Align items to the left */
    align-items: center;
    margin-top: 10px;
    position: relative; /* To position the toggle menu on the left */
  }
  
  .new-text {
    font-size: 16px;
    color: #333;
    text-align: center;
    margin-left: 50px; /* Give space for the toggle menu */
  }
  
  .toggle-menu-button {
  background-color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  position: absolute;
  left: 10px; /* Position the button on the left */
  top: 50%;
  transform: translateY(-50%);
  border-radius: 25px; /* Rounded corners */
  height: 40px; /* Thinner button */
  width: 120px; /* Longer button */
  display: flex;
  align-items: center; /* Aligns text and image vertically */
  justify-content: center; /* Centers content horizontally */
  padding: 0 10px; /* Padding for left and right */
  color:black;
}
  
.toggle-menu-button:hover {
  background-color: #dcdcdc; /* Light gray color when hovered */
}

  .menu-icon {
    width: 35px;
    height: 40px;
  }
  
  /* Dropdown Menu */
  .dropdown-menu {
  position: absolute;
  left: 50px; /* Adjust the position based on where you want it */
  top: 120px;
  background-color: rgb(221, 229, 238);
  border: 1px solid #ddd;
  padding: 0px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: 600px; /* Set a fixed height */
  overflow-y: auto; /* Allow scrolling if items overflow */
  width: 500px;


}

.dropdown-menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.dropdown-menu li {
  margin-bottom: 8px;
}

.dropdown-menu a {
  text-decoration: none;
  color: #000000;
  font-size: 14px;
}

.dropdown-menu a:hover {
  color: #3a1f8e;
  background-color: rgba(235, 245, 253, 0.9);
  background-size: cover;
   
}

.dropdown-lists {
    
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.list-left, .list-right {
  flex: 1; /* Both lists take equal width */
  padding: 10px;

}


.list-left li
{
  margin-bottom: 8px;
  margin-top:  20px;
}



.list-right li {
  margin-bottom: -16px;
  margin-top:  0px;
}

.list-left a,
.list-right a {
  text-decoration: none;
  color: #000000;
  font-size: 14px;
  padding: 20px;

  display: block; /* Make the link a block-level element */
  position: relative; /* Required for absolute positioning of the background */
}




/* Pseudo-element for hover background */
.list-left a::after,
.list-right a::after {
  content: ''; /* Empty content for the background */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(235, 245, 253, 0.9); /* Same hover background color */
  opacity: 0; /* Initially invisible */
  transition: opacity 0.3s ease; /* Smooth transition */
  z-index: -1; /* Place the background behind the text */
}

/* Make the background appear when hovered */
.list-left a:hover::after,
.list-right a:hover::after {
  opacity: 1;
}

.list-left a:hover,
.list-right a:hover {
  color: #1e59e3;
}

.list-right {
  background-color: white; /* White background for the right list */
  border-radius: 0px;
  

}

.list-left {
  background-color: rgba(235, 245, 253, 0.9); /* White background for the right list */
  border-radius: 0px;
  

}

/* Styling for webkit-based browsers */
.dropdown-menu::-webkit-scrollbar {
  width: 8px; /* Set the width of the scrollbar */
}

.dropdown-menu::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2); /* Thumb color */
  border-radius: 10px; /* Rounded edges for the thumb */
}

.dropdown-menu::-webkit-scrollbar-track {
  background-color: transparent; /* Track color */}

  .yazilar {
  position: absolute; /* Position it absolutely within the container */
  left: 150px; /* Or use right: 300px; depending on your preference */
  /* You can adjust the left value to control the horizontal placement */
  display: flex;
  align-items: center; /* Center vertically within the container */

}

.yazilar:hover{
    text-decoration: underline;
}

.yazilar .button-text {
  display: flex;
  flex-direction: column;
  text-align: right; /* Align text to the right */

}

.yazilar .button-bold {
  font-weight: bold;
  font-size: 13px; /* Adjust font size if needed */
  color: black;
}


.yazilar2 {
  position: absolute; /* Position it absolutely within the container */
  left: 450px; /* Or use right: 300px; depending on your preference */
  /* You can adjust the left value to control the horizontal placement */
  display: flex;
  align-items: center; /* Center vertically within the container */
}
.yazilar2:hover{
    text-decoration: underline;
}
.yazilar2 .button-text {
  display: flex;
  flex-direction: column;
  text-align: right; /* Align text to the right */
}

.yazilar2 .button-bold {
  font-weight: bold;
  font-size: 13px; /* Adjust font size if needed */
  color: black;
}

.yazilargift {
  position: absolute; /* Position it absolutely within the container */
  left: 305px; /* Or use right: 300px; depending on your preference */
  /* You can adjust the left value to control the horizontal placement */
  display: flex;
  align-items: center; /* Center vertically within the container */
}
.yazilargift:hover{
    text-decoration: underline;
}

.yazilargift .button-text {
  display: flex;
  flex-direction: column;
  text-align: right; /* Align text to the right */
}

.yazilargift .button-bold {
  font-weight: bold;
  font-size: 13px; /* Adjust font size if needed */
  color: black;
}

.yazilarclearance{
  position: absolute; /* Position it absolutely within the container */
  left: 540px; /* Or use right: 300px; depending on your preference */
  /* You can adjust the left value to control the horizontal placement */
  display: flex;
  align-items: center; /* Center vertically within the container */
}
.yazilarclearance:hover{
    text-decoration: underline;
}
.yazilarclearance .button-text {
  display: flex;
  flex-direction: column;
  text-align: right; /* Align text to the right */
}

.yazilarclearance .button-bold {
  font-weight: bold;
  font-size: 13px; /* Adjust font size if needed */
  color: black;
}



.yazilarbest{
  position: absolute; /* Position it absolutely within the container */
  left: 640px; /* Or use right: 300px; depending on your preference */
  /* You can adjust the left value to control the horizontal placement */
  display: flex;
  align-items: center; /* Center vertically within the container */
}
.yazilarbest:hover{
    text-decoration: underline;
}
.yazilarbest .button-text {
  display: flex;
  flex-direction: column;
  text-align: right; /* Align text to the right */
}

.yazilarbest .button-bold {
  font-weight: bold;
  font-size: 13px; /* Adjust font size if needed */
  color: black;
}

.yazilarram{
  position: absolute; /* Position it absolutely within the container */
  left: 740px; /* Or use right: 300px; depending on your preference */
  /* You can adjust the left value to control the horizontal placement */
  display: flex;
  align-items: center; /* Center vertically within the container */
}
.yazilarram:hover{
    text-decoration: underline;
}
.yazilarram .button-text {
  display: flex;
  flex-direction: column;
  text-align: right; /* Align text to the right */
}

.yazilarram .button-bold {
  font-weight: bold;
  font-size: 13px; /* Adjust font size if needed */
  color: black;
}

.yazilarn{
  position: absolute; /* Position it absolutely within the container */
  left: 840px; /* Or use right: 300px; depending on your preference */
  /* You can adjust the left value to control the horizontal placement */
  display: flex;
  align-items: center; /* Center vertically within the container */
}

.yazilarn .button-text {
  display: flex;
  flex-direction: column;
  font-style: italic;

  text-align: right; /* Align text to the right */
}

.yazilarn .button-bold {
  font-weight: bold;
  font-size: 14px; /* Adjust font size if needed */
  color:#1737d6;
}

.yazilarb{
  position: absolute; /* Position it absolutely within the container */
  left: 902px; /* Or use right: 300px; depending on your preference */
  /* You can adjust the left value to control the horizontal placement */
  display: flex;
  align-items: center; /* Center vertically within the container */
 
}

.yazilarb .button-text {
  display: flex;
  flex-direction: column;
  text-align: right; /* Align text to the right */
  font-style: italic;
}

.yazilarb .button-bold {
  font-weight: bold;
  font-size: 14px; /* Adjust font size if needed */
  color: black;
}










.list-item-icon {
  width: 20px; /* Adjust the size of the image */
  height: auto;
  margin-right: 10px; /* Space between image and text */
  vertical-align: middle; /* Aligns the image with the text */
}

.list-left a {
  display: flex;
  align-items: center; /* Align the image and text vertically */
  padding: 1px 10px; 
}

.yazilarone {
  position: absolute; /* Position it absolutely within the container */
  left: 990px; /* Or use right: 300px; depending on your preference */
  display: flex;
  align-items: center; /* Center vertically within the container */
  background-color:#1e59e3; /* Blue background */
  padding: 10px 17px; /* Add some padding for better button appearance */
  border-radius: 15px; /* Rounded edges */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
  cursor: pointer; /* Make it look clickable */
  height: 24px;


}

.yazilarone .button-text {
  display: flex;
  flex-direction: column;
  text-align: right; /* Align text to the right */
  font-style: italic;
  color: white; /* Adjust text color to stand out against the blue background */
}

.yazilarone .button-bold {
  font-weight: bold;
  font-size: 13px; /* Adjust font size if needed */
  color: white; /* Adjust text color to stand out */
}



.yazilartwo {
  position: absolute; /* Position it absolutely within the container */
  left: 1110px; /* Or use right: 300px; depending on your preference */
  display: flex;
  align-items: center; /* Center vertically within the container */
  background-color: #1e59e3; /* Blue background */
  padding: 10px 17px; /* Add some padding for better button appearance */
  border-radius: 15px; /* Rounded edges */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
  cursor: pointer; /* Make it look clickable */
  height: 24px;
  white-space: nowrap; 
}

.yazilartwo .button-text {
 
  right: 5px; /* Align text to the right */
  margin-top: 20px; /* Center vertically */
  transform: translateY(-50%); /* Fine-tune vertical centering */
  font-size: 14px; /* Font size */
  color: white; /* Text color */
  text-align: right; /* Align text within its block */
  
}

.yazilartwo .button-bold {
  font-weight: bold;
  font-size: 13px; /* Adjust font size if needed */
  color: white; /* Adjust text color to stand out */
} 

.yazilarone .button-icon {
  width: 20px; /* Adjust the size of the icon */
  height: 20px;
  margin-left: -13px; /* Space between the image and text */
  margin-top: 5px;
  margin-right: 6px;
}

.yazilartwo .button-icon {
  width: 20px; /* Adjust the size of the icon */
  height: 20px;
  margin-left: -15px; /* Space between the image and text */
  margin-right: 6px;
} 

.yazilarone:hover {
  transform: scale(1.05); /* Increase size by 5% on hover */
  transition: transform 0.2s ease
}

.yazilartwo:hover {
  transform: scale(1.05); /* Increase size by 5% on hover */
  transition: transform 0.2s ease
}



.testing{
    width: 20px; /* Adjust the size of the image */
  height: auto;
  margin-right: 10px; /* Space between image and text */
  vertical-align: middle; /* Aligns the image with the text */
  margin-top: -20px;
  margin-bottom: -30px;

   /* Align the image to the right */
   position: absolute;
  right: 0; /* Aligns the image to the right of the container */
}


/*component10*/

.container-wrapper_on {
    display: flex;
    gap: 1px; /* Adds a 10px gap between each container */
    justify-content: flex-end; /* Align all items to the right */
    margin-right: 150px; /* Add some spacing from the right edge */
    margin-top: 50px;
  }
  
  .container_on {
    position: relative;
    background-color: white;
    border-radius: 10px; /* Slightly rounded corners */
    overflow: hidden;    /* Ensures images stay within the container bounds */
    width: 300px;
    height: 620px; /* Reduced height to better fit the image size */
    margin: 0;
  }
  
  .image-container_on {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; /* Image will now take up the full height of the container */
    background-position: center;
    background-size: contain; /* Ensures the whole image is contained within the container */
    background-repeat: no-repeat; /* Avoids image repetition if it doesn't cover the area */
    transition: background-image 0.3s ease; /* Smooth transition when changing the image */
    margin-top: -150px;
    margin-bottom: -10px;
 
  }
  
  .image-text_on {
    display: block;
    text-align: center;
    margin-top: -60px;
    font-size: 14px;
    color: #000000;
    font-weight: normal;
    padding: 10px 0;
  }
  
  .oylama_on {
    display: flex;
    justify-content: center;
    margin-top: -110px;
    position: relative;
    margin-left: -200px;
  }
  
  .oylama2_on {
    display: flex;
    justify-content: center;
    margin-top: -88px;
    position: relative;
    margin-left: -200px;
  }
  
  .oylama3_on {
    display: flex;
    justify-content: center;
    margin-top: -90px;
    position: relative;
    margin-left: -180px;
  }
  
  .test_on, .test2_on, .test3_on {
    background-color: #ffffff;
    width: 70px;
    height: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -25px;
    position: relative;
    margin-left: 210px;
    cursor: pointer;
    border: none;
  }
  
  .button-text_on {
    margin-left: 5px;
    color: #1932ae;
    font-size: 15px;
    font-weight: bold;
  }
  
  .oylama-text_on {
    margin-left: -5px;
    color: #606060;
    font-size: 12px;
    font-weight: normal;
  }
  
  .asagi-text_on, .asagi-text2_on, .asagi-text3_on {
    display: block;
    text-align: center;
    margin-top: 75px;
    font-size: 13px;
    color: #ffffff;
    background-color: red;
    font-weight: bold;
    padding: -1px 0;
    width: 80px;
    height: 20px;
    margin-left: 15px;
    margin-right: auto;
  }
  
  .fiyat-text_on, .fiyat-text2_on {
    display: block;
    font-size: 25px;
    color: #000000;
    font-weight: bold;
    width: 80px;
    height: 20px;
    margin-top: 8px;
    margin-left: 20px;
  }
  
  .cart_on, .cart2_on {
    display: block;
    width: 100px;
    height: 25px;
    background-color: white;
    color: rgb(0, 0, 0);
    font-size: 12px;
    font-weight: bold;
    border: 2px solid rgb(203, 203, 203);
    border-radius: 20px;
    text-align: center;
    margin: 10px auto;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-left: 10px;
    margin-top: 25px;
  }
  
  .cart_on:hover, .cart2_on:hover {
    color: #1a50e5;
    border: 2px solid #1a50e5;
    width: 105px;
    height: 30px;
    transition: 0.3s;
  }

  /*container 7*/
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

/*component5*/
 /* General styling */
 body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    background-color: #f0f0f0;
  }
  
  /* Shopping Cart Header */
  .shopping-cart-header_bes {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;

  }
  
  /* Title */
  .container-title_bes {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin-left:-3px;
  }
  
  /* Button text */
  .button-text_bes {
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    cursor: pointer;
  }

  .button-text_bes:hover{
    color:#007bff;
  }
  
  /* Move All To Wishlist */
  .move-all_bes {
    position: relative;
    left: 240px;
  }
  
  /* Remove All */
  .remove-all_bes {
    margin-left: 295px;
    position: relative;
    top:-10px;
  }
  
  /* Main container */
  .container_bes {
    display: flex;
    height: 290px;
    width: 80%;
    gap: 0;
    margin-top: 20px;
  }
  
  /* Each container item styling */
  .container-item_bes {
    padding: 20px;
   
    text-align: center;
  }
  
  /* Left container (white background) */
  .container-item-left_bes {
    background-color: white;
    width: 900px;
  }
  
  /* Right container (light gray background) */
  .container-item-right_bes {
    background-color: #f5f5f5;
    width:200px;
  }
  
  /* Container content text */
  p {
    color: #666;
  }
  
  /* Print button styling */
  .print-button_bes {
    color: black;
    background-color: white;
    font-weight: bold;
    height: 30px;
    width: 90px;
    border: 1px solid rgba(0, 0, 0, 0.258);

    right: 20px;
    margin-top: -50px;
    transform: translateX(1050px);   

     text-align: center; /* Align text to the center */
  white-space: nowrap; /* Prevent text from wrapping to a new line */

  display: flex; /* Flexbox layout for icon and text alignment */
  align-items: flex-start; /* Aligns text at the top */
  gap: 7px; /* Space between icon and text */

  }
  

.print-button_bes:hover{
    color:#007bff;
}

  .wish-button_bes {
  color: black;
  background-color: rgba(193, 189, 189, 0.648);
  font-weight: bold;
  height: 30px;
  width: 160px; /* Increase width to make the button longer */
  border: 1px solid rgba(0, 0, 0, 0.258);
  margin-right: 215px;
  position: relative;  /* Add relative positioning */
  top: -185px;  /* Adjust this to move the button upwards */
  font-size: 11px;
  padding: 5px;
  right: 5px;
  border-radius: 4px;
  text-align: center; /* Align text to the center */
  white-space: nowrap; /* Prevent text from wrapping to a new line */
}


.save-button_bes{
    color: black;
  background-color: rgba(193, 189, 189, 0.648);
  font-weight: bold;
  height: 30px;
  width: 140px; /* Increase width to make the button longer */
  border: 1px solid rgba(0, 0, 0, 0.258);
  margin-right: 255px;
  position: relative;  /* Add relative positioning */
  top: -215px;  /* Adjust this to move the button upwards */
  font-size: 11px;
  padding: 5px;
  right: -340px;
  border-radius: 4px;
  text-align: center; /* Align text to the center */
  white-space: nowrap; /* Prevent text from wrapping to a new line */
  display: flex; /* Flexbox layout for icon and text alignment */
  align-items: flex-start; /* Aligns text at the top */
  gap: -5px; /* Space between icon and text */
}



.remove-button_bes{
    color: black;
  background-color: rgba(193, 189, 189, 0.648);
  font-weight: bold;
  height: 30px;
  width: 80px; /* Increase width to make the button longer */
  border: 1px solid rgba(0, 0, 0, 0.258);
  margin-right: 215px;
  position: relative;  /* Add relative positioning */
  top: -247px;  /* Adjust this to move the button upwards */
  font-size: 11px;
  padding: 5px;
  right: -650px;
  border-radius: 4px;
  text-align: center; /* Align text to the center */
  white-space: nowrap; /* Prevent text from wrapping to a new line */

  display: flex; /* Flexbox layout for icon and text alignment */
  align-items: flex-start; /* Aligns text at the top */
  gap: -5px; /* Space between icon and text */
}

.wish-button_bes:hover{
    background-color: #bcbbbb;
}

.remove-button_bes:hover{
    background-color: #bcbbbb;
}
.save-button_bes:hover{
    background-color: #bcbbbb;
}

  /* Image, text, and dropdown container */
  .image-text-container_bes{
    display: flex;
    align-items: center; /* Vertically align the text and dropdown with the image */
    gap: 10px; /* Add spacing between items */
  }
  
  /* Image styling */
  .image-left_bes {
    max-width: 160px;
    height: auto;
    margin: 0;
    position: relative; /* Add this line */
  top: 50px; /* Adjust this value to move the image down */
  }
  
  /* Text link styling */
  .text-link_bes {
    font-size: 14px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.776);
    text-decoration: none;
    cursor: pointer;
    
  }
  
  .text-link_bes:hover {
    text-decoration: underline;
    color:#007bff
  }
  
  /* Dropdown styling */
  .select-options_bes {
    font-size: 14px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    background-color: #ffffff;
    color: #000000;
    width: 50px;
    margin-left:90px;

  }
  
  /* Styling for the clickable "in operating systems" text */
  .ucuncu_bes {
    color: black;
    margin-left: -200px;
    top: -105px;
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    position: relative;
    
  }

  .test_bes{
    color: black;
    left: 60px;
    top: -129px;
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    position: relative;
     
  }
  
  
  .test2_bes{
    color: black;
    margin-left: 580px;
    top: -130px;
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    position: relative; 
    white-space: normal; 
    text-align: left;

  }
  
  
  .test4_bes {
  color: rgb(0, 0, 0);
  margin-left: 660px;
  position: relative;  /* Add relative positioning */
  top: -80px;  /* Adjust this to move the price upwards */
  font-size: 25px;
  font-weight: bold;
  padding: 5px;
}




  
.alt1_bes {
  color: rgb(0, 0, 0);
  margin-right: 215px; 
  position: relative;  /* Add relative positioning */
  top: -190px;  /* Adjust this to move the price upwards */
  font-size: 11px;
  font-weight: bold;
  padding: 5px;
}

.alt2_bes {
  color: rgb(0, 0, 0);
  margin-right: 215px;
  position: relative;  /* Add relative positioning */
  top: -190px;  /* Adjust this to move the price upwards */
  font-size: 11px;
  font-weight: bold;
  padding: 5px;
  right:36px;
}

.alt3_bes {
  color: rgb(0, 0, 0);
  margin-right: 215px;
  position: relative;  /* Add relative positioning */
  top: -190px;  /* Adjust this to move the price upwards */
  font-size: 11px;
  font-weight: bold;
  padding: 5px;
  right:45px;
}


.sag1_bes {
  color: rgb(0, 0, 0);
  font-size: 14px;
 
  padding: 5px;
  position: relative;  /* Use relative positioning */
  top: 0;  /* Remove or adjust if needed */
  margin-left: 10px;  /* Adjust margin-left to keep it within the container */
  right: 30px; 
  top:20px;
  
}

.sag2_bes {
  color: rgb(0, 0, 0);
  font-size: 14px;
 
  padding: -45px;
  position: relative;  /* Use relative positioning */
  top: 5;  /* Remove or adjust if needed */
  margin-left: 10px;  /* Adjust margin-left to keep it within the container */
  right: 15px; 
  white-space: nowrap;
}

.sag3_bes {
  color: rgb(0, 0, 0);
  font-size: 14px;
 
  padding: -45px;
  position: relative;  /* Use relative positioning */
  top: 5;  /* Remove or adjust if needed */
  margin-left: 10px;  /* Adjust margin-left to keep it within the container */
  right: -15px; 
  white-space: nowrap;
}

.sag4_bes {
  color: rgb(0, 0, 0);
  font-size: 17px;
 font-weight: bold;
  padding: 5px;
  position: relative;  /* Use relative positioning */
  top: 5;  /* Remove or adjust if needed */
  margin-left: 10px;  /* Adjust margin-left to keep it within the container */
  right: -15px; 
  white-space: nowrap;
  margin-top: 20px;
}



.sag5_bes {
  color: rgb(0, 0, 0);
  font-size: 20px;
 font-weight:normal;
  padding: 5px;
  margin-top: 25px;  /* Remove or adjust if needed */
  margin-left: 10px;  /* Adjust margin-left to keep it within the container */
  right: 15px; 
  white-space: nowrap;
  position: relative; /* Ensure it has relative positioning */
  top: 15px; /* Adjust this value as needed to move the text down */
}



  /* Ensure clickable-link and clickable-link2 are positioned independently */
.clickable-link_bes {
  font-size: 12px;
  color: #242424; /* Blue color for the link */
  text-decoration: none;
  padding: 7px;
  margin-left: 120px;  /* Independent margin */
  text-decoration: underline;
  
}

.clickable-link2_bes {
  font-size: 12px;
  color: #000000; /* Blue color for the link */
  text-decoration: none;
  font-weight: normal;
  margin-left: 210px; /* Independent margin */
 
}

  .clickable-link3_bes {
    font-size: 12px;
    color: #00751d; /* Blue color for the link */
    text-decoration: none;
    font-weight: normal;
    padding: 20px;
    margin-left:60px;
  }

  .clickable-link_bes:hover {
    text-decoration: underline; /* Add underline effect on hover */
    color:#007bff
  }
  
  .ikinci_bes {
    display: flex;
    justify-content: center; /* Center-align the content horizontally */
    align-items: center; /* Center-align the content vertically */
    gap: 5px; /* Reduce spacing between items */
    color: #fff; /* White text color */
    margin-left: 170px;
    top: -80px;
    background-color: #0d50b5; /* Blue background */
    width: 90px; /* Reduce width */
    height: 20px; /* Set a fixed height for rectangle shape */
    font-weight: bold;
    font-size: 11px; /* Adjust font size */
    padding: 0px; /* Remove any extra padding */
    position: relative;
    white-space: nowrap;
  }



  .search-container_bes {
  display: flex;
  align-items: center;  /* Vertically align the items */
  gap: 10px;  /* Add space between the search bar and button */
  margin-left: 27px;  /* Move the entire search bar and button to the right */
  margin-top: 20px;
}

/* Styling for the search bar */
.search-bar_bes {
  height: 35px;
  width: 250px;
  padding: 0 15px;
  border-radius: 5px;  /* Rounded edges */
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;  /* Remove default focus outline */
  background-color: white;
  color: black;  /* Set text color to black */
}

/* Focus style for the search bar */
.search-bar_bes:focus {
  border-color: #007bff;  /* Change border color when focused */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);  /* Add subtle shadow */
}

/* Styling for the Apply button */
.apply-button_bes {
  height: 35px;
  padding: 0 20px;
  border-radius: 5px;  /* Rounded edges */
  border: 1px solid #ccc;
  background-color: #ffffff;  /* Initial button background color */
  color: rgb(0, 0, 0);
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
}

.apply-button_bes:hover{
    color:#007bff;
}

.checkout_bes {
  margin-left: 27px;
  width: 300px;
  height: 30px; /* Increased height for better visual appearance */
  padding: 0 30px;
  background-color: orange;  /* Orange background */
  color: rgb(0, 0, 0);  /* Black text color */
  border: 1px solid rgb(255, 100, 0);  /* Border with a specified width */
  border-radius: 4px;  /* Rounded corners */
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;  /* Smooth transition for background color change */
  text-align: center;
}

/* Hover effect to change background color */
.checkout_bes:hover {
  background-color: darkorange;

}


.or_bes{
    color:#333;
    padding: 10px;
    margin-left: 150px;
}



.checkout2_bes {
  margin-left: 55px;
  width: 250px;
  height: 30px; /* Increased height for better visual appearance */
  padding: 0 30px;
  background-color: rgb(23, 87, 198);  /* Orange background */
  color: rgb(255, 255, 255);  /* Black text color */
    /* Border with a specified width */
  border-radius: 4px;  /* Rounded corners */
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;  /* Smooth transition for background color change */
  text-align: center;
}

/* Hover effect to change background color */
.checkout2_bes:hover {
  background-color: rgb(21, 80, 182);

}

.trash-icon_bes{
  width: 20px; /* Adjust size of the icon */
  height: 20px;
  right:20px; /* Space between icon and text */
  vertical-align: middle; /* Align icon with text */

  position: relative;
  top:23px;
  
}

.trash-icon2_bes {
  width: 20px; /* Adjust size of the icon */
  height: 20px;
  right:5px; /* Space between icon and text */
  vertical-align: middle; /* Align icon with text */

  position: relative;
  top:0px;
  
}

.printer_bes {
  width: 20px; /* Adjust size of the icon */
  height: 20px;
  right:-5px; /* Space between icon and text */
  vertical-align: middle; /* Align icon with text */
    
  position: relative;
  top:5px;
  
}

.kitap_bes {
  width: 20px; /* Adjust size of the icon */
  height: 20px;
  right:5px; /* Space between icon and text */
  vertical-align: middle; /* Align icon with text */

  position: relative;
  top:0px;
  
}

.sag5-value_bes {
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-weight: bold;
  text-align: right; /* Align the value to the right */
  position: relative;
  top:-15px;
  left: 150px;
}

.bir_bes {
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-weight: bold;
  text-align: right; /* Align the value to the right */
  position: relative;
  top:-10px;
  left: 150px;
}

.iki_bes {
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-weight: bold;
  text-align: right; /* Align the value to the right */
  position: relative;
  top:-25px;
  left: 150px;
}

.normal-font_bes {
  font-weight: normal; /* Normal font */
  position: relative; /* Set position to relative */
  top: -190px; /* Adjust this value to move the text up */
  left: -104px; /* Adjust this value to move the text to the left */
  font-size: 12px;
}

.bold-font_bes {
  font-weight: bold; /* Bold font */
  position: relative; /* Set position to relative */
  top: -190px; /* Adjust this value to move the text up */
  left: -104px; /* Adjust this value to move the text to the left */
  font-size: 12px;
}

/* component9*/
.container_dokuz {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* Aligns everything from top */
    position: relative;
   

    position: absolute; /* Pozisyonu sabit bir şekilde ayarlamak için */
    top: 120px; /* Navbar'ın altına yerleştir */
    right: 220px; /* Sağdan mesafe bırak */
}
  
.header_dokuz {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}
  
.image_dokuz {
    height: 60px;
    width: auto;
    margin-left: 25px;
}
  
.text1_dokuz {
    color: black;
    font-weight: bold;
    font-size: 20px;
    position: relative;
    top: 60px; /* Adjust top to your liking */
    left: -110px;
}
  
/* Flexbox for vertical alignment */
.search-container_dokuz {
    display: flex;
    flex-direction: column; /* Stacks items vertically */
    align-items: center;    /* Centers horizontally */
    gap: 20px;              /* Adds space between items */
    top: 120px; /* Navbar'ın altına yerleştir */
    right: 10px; /* Sağdan mesafe bırak */
position: absolute;
   

}
  
/* Styling for the search bar */
.search-bar_dokuz {
    height: 43px;
    width: 275px;
    padding: 0 15px;
    border-radius: 3px;
    border: 1px solid #ccc;
    font-size: 16px;
    outline: none;
    background-color: white;
    color: black;
}
  
/* Styling for the buttons */
.checkout_dokuz,
.checkout2_dokuz {
    width: 275px;
    height: 43px;
    padding: 0 30px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s ease;
    
}
  
/* Specific styles for each button */
.checkout_dokuz {
    background-color: orange;
    color: black;
    border: 1px solid rgb(255, 100, 0);
}
  
.checkout_dokuz:hover {
    background-color: darkorange;
}
  
.checkout2_dokuz {
    background-color: rgb(253, 253, 253);
    color: rgb(0, 0, 0);
    border: 1px solid #ccc;
}
  
.checkout2_dokuz:hover {
    border: 1px solid #1a29c5;
    color: #1a29c5;
}
  
/* Text container */
.text-container_dokuz {
    display: flex;
    flex-direction: column; /* Stacks text items vertically */
    align-items: center;    /* Centers text horizontally */
    gap: 15px;              /* Adds spacing between text items */
    margin-top: 240px;    
    margin-left: -15px;   /* Adjust top margin as needed */
}
  
/* Unique styling for each text */
.text2_dokuz {
    color: rgb(87, 87, 87);
    font-weight: normal;
    font-size: 13px;
    text-decoration: underline; /* Underline for the link */
    margin-left: -50px;
    margin-top: -20px;
}
  
.text3_dokuz {
    color: rgb(18, 18, 18);
    font-weight: normal;
    font-size: 16px;
    margin-left: -105px;
    margin-top: -10px;
    
}
  
.text4_dokuz {
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 16px;
    text-decoration: underline;
    margin-left: 90px;
    margin-top: -38px;
}
  
.text5_dokuz {
    color: rgb(79, 79, 79);
    font-weight: normal;
    font-size: 15px;
    text-transform: uppercase;
    margin-left: -50px;
    margin-top: -10px;
}

.search-container2_dokuz {
    display: flex;
    flex-direction: column; /* Stacks items vertically */
    align-items: center;    /* Centers horizontally */
    gap: 20px;              /* Adds space between items */

    position: absolute; /* Pozisyonu sabit bir şekilde ayarlamak için */
    top: 534px; /* Navbar'ın altına yerleştir */
    right: 230px; /* Sağdan mesafe bırak */
}

.alt_dokuz,
.alt2_dokuz {
    width: 275px;
    height: 43px;
    padding: 0 30px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s ease;

    display: flex;               /* Make the button a flex container */
    justify-content: center;     /* Horizontally center the text */
    align-items: center;         /* Vertically center the text */
    position: relative;    
}
  
/* Specific styles for each button */
.alt_dokuz {
    background-color: rgb(253, 253, 253);
    color: rgb(0, 0, 0);
    border: 1px solid #ccc;
}
  
.alt_dokuz:hover {
    border: 1px solid #1a29c5;
    color: #1a29c5;
}
  
.alt2_dokuz {
    background-color: rgb(253, 253, 253);
    color: rgb(0, 0, 0);
    border: 1px solid #ccc;
}
  
.alt2_dokuz:hover {
    border: 1px solid #1a29c5;
    color: #1a29c5;
}

.text-container2_dokuz {
    display: flex;
    flex-direction: column; /* Stacks text items vertically */
    align-items: center;    /* Centers text horizontally */
    gap: 15px;              /* Adds spacing between text items */
    margin-top: 5px;       /* Adjust top margin as needed */
    margin-left: 750px;
    white-space: nowrap; 
    position: absolute; /* Pozisyonu sabit bir şekilde ayarlamak için */
    top: 700px; /* Navbar'ın altına yerleştir */
    right: 230px; /* Sağdan mesafe bırak */

}
.t_dokuz {
    color: rgb(87, 87, 87);
    font-weight: normal;
    font-size: 13px;
    text-decoration: underline; /* Underline for the link */
    margin-left: -50px;
    margin-top: -20px;
}
  
.tt_dokuz {
    color: rgb(87, 87, 87);
    font-weight: normal;
    font-size: 13px;
    text-decoration: underline; /* Underline for the link */
    margin-left: -55px;
    margin-top: -10px;
}
  
.ttt_dokuz {
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 16px;
    text-decoration: underline;
    margin-left: 150px;
    margin-top: -38px;
}
  
.tttt_dokuz {
    color: rgb(87, 87, 87);
    font-weight: normal;
    font-size: 13px;
    margin-left: -50px;
    margin-top: -10px;
}

.text2_dokuz:hover, 
.text4_dokuz:hover, 
.t_dokuz:hover, 
.tt_dokuz:hover {
    color: blue;
}

.icon_dokuz, .icon2_dokuz {
    position: absolute;
    left: 10px;                  /* Adjust to position the icon from the left */
    top: 50%;                    /* Vertically centers the icon */
    transform: translateY(-50%); /* Adjusts vertical alignment */
    width: 20px;                 /* Control the size of the icon */
    height: 20px;
}

/*component8*/
.container_sekiz {
    display: flex;
    justify-content: flex-start; /* Aligns all boxes to the left */
    flex-wrap: wrap;
    margin-top:    250px;
    margin-left:    100px;
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
/*component6*/
/* Wrapper to align containers next to each other */
.container-wrapper_alti {
    display: flex;
    justify-content: flex-start; /* Align items to the start without large gaps */
    gap: 20px; /* Small gap between containers */
    padding: 20px; /* Optional padding for the wrapper */
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
  