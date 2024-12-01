<template>
    <div class="container">
      <div class="box">
        <img src="/GPU.png" alt="Image 1" class="image">
        <p class="text1">Find a GPU/CPU on Newegg that You'd Like to Purchase</p>
        <p class="text2">Visit an eligible GPU/CPU product page to click and fill out the Trade-in submission form.</p>
      </div>
      <div class="box">
        <img src="/trade-in-offer.png" alt="Image 2" class="image">
        <p class="text1">Get a Trade-in Offer</p>
        <p class="text2">Confirm your GPU/CPU model & condition to see your Trade-in value instantly.</p>
      </div>
      <div class="box">
        <img src="/new-gpu.png" alt="Image 3" class="image">
        <p class="text1">Buy the new GPU/CPU</p>
        <p class="text2">You'll see the eligible Trade-in value when you add the new GPU/CPU to cart.</p>
      </div>
      <div class="box">
        <img src="/trade-in.png" alt="Image 4" class="image">
        <p class="text1">Ship the Trade-in</p>
        <p class="text2">Use the prepaid UPS shipping label sent to your inbox to ship your trade-in to us.</p>
      </div>
      <div class="box">
        <img src="/upgrade.png" alt="Image 5" class="image">
        <p class="text1">Trade-in Complete</p>
        <p class="text2">Once we receive, review, and accept your item, you will be credited for the trade-in value!</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: flex-start; /* Aligns all boxes to the left */
    flex-wrap: wrap;
  }
  
  .box {
    background-color: white;
    padding: 20px;
    text-align: center;
  
    box-sizing: border-box;
    width: 200px;
  }
  
  .image {
    max-width: 100%;
    height: auto;
  }
  
  .text1 {
    margin-top: 10px;
    font-size: 20px;
    color: #000000;
    font-weight: bold;
  }
    .text2 {
    margin-top: 10px;
    font-size: 14px;
    color: #333;
    font-weight: normal;
  }
  </style>
  