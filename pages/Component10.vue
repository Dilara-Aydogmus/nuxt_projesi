<template>
    <div class="container-wrapper">
      <!-- Container 1 -->
      <div class="container">
        <div class="image-container"
          @mouseover="changeImage(1)"
          @mouseleave="resetImage(1)"
          :style="{ backgroundImage: 'url(' + currentImage1 + ')' }">
        </div>
        <a href="#" class="image-text">CCORSAIR iCUE H150i ELITE CAPELLIX XT Liquid CPU Cooler - AF120 RGB ELITE Fans - 360mm Radiator -</a>
        <a href="#" class="oylama">
          <img src="/oylama1.png" alt="Rating 1" />
          <span class="oylama-text">(601)</span>
        </a>
        <button class="test">
          <img src="/marka1.png" alt="Button Image" />
          <span class="button-text">>></span>
        </button>
        <div class="asagi-text">Save: 49%</div>
        <div class="fiyat-text">$429</div>
        <button
  class="cart"
  @click="addToCart({
    id: 1,
    name: 'CCORSAIR iCUE H150i ELITE CAPELLIX XT Liquid CPU Cooler',
    price: 429,
    image: currentImage1
  })"
>
  ADD TO CART
</button>     </div>
  
      <!-- Container 2 -->
      <div class="container">
        <div class="image-container"
          @mouseover="changeImage(2)"
          @mouseleave="resetImage(2)"
          :style="{ backgroundImage: 'url(' + currentImage2 + ')' }">
        </div>
        <a href="#" class="image-text">SAMA SM360 Black 360mm Liquid Water AIO CPU Cooler For Gaming PC Computer with</a>
        <a href="#" class="oylama2">
          <img src="/oylama2.png" />
          <span class="oylama-text">(4)</span>
        </a>
        <button class="test2">
          <img src="/marka2.png" alt="Button Image" />
          <span class="button-text">>></span>
        </button>
        <div class="asagi-text2">Save: 22%</div>
        <div class="fiyat-text">$429</div>
        <button
        class="cart"
        @click="addToCart({
          id: 2,
          name: 'SAMA SM360 Black 360mm Liquid Water AIO CPU Cooler',
          price: 299,
          image: currentImage2
        })"
      >
        ADD TO CART
      </button>
      </div>
  
      <!-- Container 3 -->
      <div class="container">
        <div class="image-container"
          @mouseover="changeImage(3)"
          @mouseleave="resetImage(3)"
          :style="{ backgroundImage: 'url(' + currentImage3 + ')' }">
        </div>
        <a href="#" class="image-text">MSI 34" 240 Hz QD-OLED UWQHD Gaming Monitor 3440 x 1440 (2K) 97.8% Adobe RGB</a>
        <a href="#" class="oylama3">
          <img src="/oylama1.png" />
          <span class="oylama-text">(758)</span>
        </a>
        <button class="test3">
          <img src="/marka3.png" alt="Button Image" />
          <span class="button-text">>></span>
        </button>
        <div class="asagi-text3">Save: 24%</div>
        <div class="fiyat-text2">$429</div>
        <button
  class="cart"
  @click="addToCart({
    id: 3,
    name: 'CCORSAIR iCUE H150i ELITE CAPELLIX XT Liquid CPU Cooler',
    price: 429,
    image: currentImage3
  })"
>
  ADD TO CART
</button> 
      </div>
    </div>
  
    <div class="container-wrapper">
      <!-- Container 4 -->
      <div class="container">
        <div class="image-container"
          @mouseover="changeImage(4)"
          @mouseleave="resetImage(4)"
          :style="{ backgroundImage: 'url(' + currentImage4 + ')' }">
        </div>
        <a href="#" class="image-text">CCORSAIR iCUE H150i ELITE CAPELLIX XT Liquid CPU Cooler - AF120 RGB ELITE Fans - 360mm Radiator -</a>
        <a href="#" class="oylama">
          <img src="/oylama1.png" alt="Rating 1" />
          <span class="oylama-text">(601)</span>
        </a>
        <button class="test">
          <img src="/marka1.png" alt="Button Image" />
          <span class="button-text">>></span>
        </button>
        <div class="asagi-text">Save: 49%</div>
        <div class="fiyat-text">$429</div>
        <button
        class="cart"
        @click="addToCart({
          id: 4,
          name: '3SAMA SM360 Black 360mm Liquid Water AIO CPU Cooler',
          price: 399,
          image: currentImage4
        })"
      >
        ADD TO CART
      </button>
      </div>
  
      <!-- Container 5 -->
      <div class="container">
        <div class="image-container"
          @mouseover="changeImage(5)"
          @mouseleave="resetImage(5)"
          :style="{ backgroundImage: 'url(' + currentImage5 + ')' }">
        </div>
        <a href="#" class="image-text">SAMA SM360 Black 360mm Liquid Water AIO CPU Cooler For Gaming PC Computer with</a>
        <a href="#" class="oylama2">
          <img src="/oylama2.png" />
          <span class="oylama-text">(4)</span>
        </a>
        <button class="test2">
          <img src="/marka2.png" alt="Button Image" />
          <span class="button-text">>></span>
        </button>
        <div class="asagi-text2">Save: 22%</div>
        <div class="fiyat-text">$429</div>
        <button
        class="cart"
        @click="addToCart({
          id: 5,
          name: '4SAMA SM360 Black 360mm Liquid Water AIO CPU Cooler',
          price: 499,
          image: currentImage5
        })"
      >
        ADD TO CART
      </button>
      </div>
  
      <!-- Container 6 -->
      <div class="container">
        <div class="image-container"
          @mouseover="changeImage(6)"
          @mouseleave="resetImage(6)"
          :style="{ backgroundImage: 'url(' + currentImage6 + ')' }">
        </div>
        <a href="#" class="image-text">MSI 34" 240 Hz QD-OLED UWQHD Gaming Monitor 3440 x 1440 (2K) 97.8% Adobe RGB</a>
        <a href="#" class="oylama3">
          <img src="/oylama1.png" />
          <span class="oylama-text">(758)</span>
        </a>
        <button class="test3">
          <img src="/marka3.png" alt="Button Image" />
          <span class="button-text">>></span>
        </button>
        <div class="asagi-text3">Save: 24%</div>
        <div class="fiyat-text2">$429</div>
        <button
        class="cart"
        @click="addToCart({
          id: 6,
          name: '5SAMA SM360 Black 360mm Liquid Water AIO CPU Cooler',
          price: 599,
          image: currentImage6
        })"
      >
        ADD TO CART
      </button>
      </div>
    </div>
  </template>
  
  <script>
  import { useCartStore } from "~/stores/cart";
import { saveCartToFirebase } from  "~/firebase";

  export default {
    data() {
      return {
        // Set initial and hover images
        image1: '/kapak1.jpg',
        image2: '/kapak2.jpg',
        image3: '/kapak3.jpg',
        image4: '/d1.jpg',
        image5: 'kapak5.jpg',
        image6: 'kapak6.jpg',
        hoverImage1: '/kapak1alt.jpg',
        hoverImage2: '/kapak2alt.jpg',
        hoverImage3: '/kapak3alt.jpg',
        hoverImage4: '/d2.jpg',
        hoverImage5: 'kapak5alt.jpg',
        hoverImage6: 'kapak6alt.jpg',
  
        // Current image bindings for each container
        currentImage1: '/kapak1.jpg',
        currentImage2: '/kapak2.jpg',
        currentImage3: '/kapak3.jpg',
        currentImage4: '/d1.jpg',
        currentImage5: 'kapak5.jpg',
        currentImage6: 'kapak6.jpg',
      };
    },
    methods: {
      changeImage(containerNumber) {
        // Set the appropriate image when hovered
        if (containerNumber === 1) {
          this.currentImage1 = this.hoverImage1;
        } else if (containerNumber === 2) {
          this.currentImage2 = this.hoverImage2;
        } else if (containerNumber === 3) {
          this.currentImage3 = this.hoverImage3;
        } else if (containerNumber === 4) {
          this.currentImage4 = this.hoverImage4;
        } else if (containerNumber === 5) {
          this.currentImage5 = this.hoverImage5;
        } else if (containerNumber === 6) {
          this.currentImage6 = this.hoverImage6;
        }
      },
      resetImage(containerNumber) {
        // Reset image to the original when mouse leaves
        if (containerNumber === 1) {
          this.currentImage1 = this.image1;
        } else if (containerNumber === 2) {
          this.currentImage2 = this.image2;
        } else if (containerNumber === 3) {
          this.currentImage3 = this.image3;
        } else if (containerNumber === 4) {
          this.currentImage4 = this.image4;
        } else if (containerNumber === 5) {
          this.currentImage5 = this.image5;
        } else if (containerNumber === 6) {
          this.currentImage6 = this.image6;
        }
      },
      
      async addToCart(product) {
  try {
    const cartStore = useCartStore();
    cartStore.addToCart(product); // Add the product to the cart store
    await saveCartToFirebase(cartStore.items); // Update Firebase with the updated cart
    console.log(`Product ${product.name} added to the cart successfully!`);
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
}
  },
  };
  </script>
  
  <style scoped>
  .container-wrapper {
    display: flex;
    gap: 1px; /* Adds a 10px gap between each container */
  }
  
  .container {
    background-color: white;
    border-radius: 10px; /* Slightly rounded corners */
    overflow: hidden;    /* Ensures images stay within the container bounds */
    width: 300px;
    height: 620px; /* Reduced height to better fit the image size */
    position: relative;
    margin: 0;
    margin-top: 80px;
    margin-left: 80px;
  }
  
  .image-container {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; /* Image will now take up the full height of the container */
    background-position: center;
    background-size: contain; /* Ensures the whole image is contained within the container */
    background-repeat: no-repeat; /* Avoids image repetition if it doesn't cover the area */
    transition: background-image 0.3s ease; /* Smooth transition when changing the image */
    margin-top: -160px;
    margin-bottom: -10px;
  }
  
  .image-text {
    display: block;
    text-align: center;
    margin-top: -60px;
    font-size: 14px;
    color: #000000;
    font-weight: normal;
    padding: 10px 0;
  }
  
  .oylama {
    display: flex;
    justify-content: center;
    margin-top: -110px;
    position: relative;
    margin-left: -200px;
  }
  
  .oylama2 {
    display: flex;
    justify-content: center;
    margin-top: -88px;
    position: relative;
    margin-left: -200px;
  }
  
  .oylama3 {
    display: flex;
    justify-content: center;
    margin-top: -90px;
    position: relative;
    margin-left: -180px;
  }
  
  .test, .test2, .test3 {
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
  
  .button-text {
    margin-left: 5px;
    color: #1932ae;
    font-size: 15px;
    font-weight: bold;
  }
  
  .oylama-text {
    margin-left: -5px;
    color: #606060;
    font-size: 12px;
    font-weight: normal;
  }
  
  .asagi-text, .asagi-text2, .asagi-text3 {
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
  
  .fiyat-text, .fiyat-text2 {
    display: block;
    font-size: 25px;
    color: #000000;
    font-weight: bold;
    width: 80px;
    height: 20px;
    margin-top: 8px;
    margin-left: 5px;
  }
  
  .cart, .cart2 {
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
  }
  
  .cart:hover, .cart2:hover {
    color: #1a50e5;
    border: 2px solid #1a50e5;
    width: 105px;
    height: 30px;
    transition: 0.3s;
  }

  </style>
  