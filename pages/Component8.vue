<template>
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
</template>
  
<style scoped>
.container_sekiz {
    display: flex;
    justify-content: flex-start; /* Aligns all boxes to the left */
    flex-wrap: wrap;
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
</style>
