<template>
    <div class="wishlist-container">
      <div class="wishlist-header">
        <h2>Wish List</h2>
        <div class="tabs">
          <span :class="{ active: currentTab === 'My Lists' }" @click="setTab('My Lists')">My Lists</span>
          <span :class="{ active: currentTab === 'Followed Lists' }" @click="setTab('Followed Lists')">Followed Lists</span>
          <span :class="{ active: currentTab === 'Public Lists' }" @click="setTab('Public Lists')">Public Lists</span>
        </div>
      </div>
  
      <div class="wishlist-actions">
        <button class="btn" @click="createList">Create a List</button>
        <button class="btn" @click="manageLists">Manage Lists</button>
      </div>
  
      <div v-if="lists.length" class="wishlist-content">
        <div v-for="list in lists" :key="list.id" class="list-card">
          <h3>{{ list.name }}</h3>
          <div class="list-item">
            <img :src="list.image" alt="Product Image" class="item-image" />
            <div class="item-details">
              <p>{{ list.productName }}</p>
              <p>{{ list.price }}</p>
              <p>{{ list.quantity }} Item</p>
            </div>
          </div>
          <div class="list-actions">
            <button @click="viewDetail(list.id)">View Detail</button>
            <span @click="deleteList(list.id)" class="action">Delete</span> |
            <span @click="duplicateList(list)" class="action">Duplicate</span> |
            <span class="action">Settings</span>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No lists available. Create a new list!</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, onMounted } from "vue";
  import { db } from "@/firebase";
  import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  
  // Reactive list of wish lists
  const lists = ref([]);
  const currentTab = ref("My Lists");
  
  // Fetch wish lists from Firebase
  const fetchLists = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "wishlists"));
      lists.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched lists:", lists.value);
    } catch (error) {
      console.error("Error fetching wish lists:", error);
    }
  };
  
  // Add a new list
  const createList = async () => {
    try {
      const newList = {
        name: "New Wish List",
        productName: "Example Product",
        price: "$179.99",
        quantity: 1,
        image: "/example-product.jpg",
      };
      await addDoc(collection(db, "wishlists"), newList);
      alert("List created successfully!");
      fetchLists();
    } catch (error) {
      console.error("Error creating list:", error);
    }
  };
  
  // Delete a list
  const deleteList = async (id) => {
    try {
      await deleteDoc(doc(db, "wishlists", id));
      alert("List deleted successfully!");
      fetchLists();
    } catch (error) {
      console.error("Error deleting list:", error);
    }
  };
  
  // Duplicate a list
  const duplicateList = async (list) => {
    try {
      const duplicate = { ...list, name: `${list.name} (Copy)` };
      delete duplicate.id; // Remove ID before duplicating
      await addDoc(collection(db, "wishlists"), duplicate);
      alert("List duplicated successfully!");
      fetchLists();
    } catch (error) {
      console.error("Error duplicating list:", error);
    }
  };
  
  // View detail (placeholder function)
  const viewDetail = (id) => {
    alert(`View details of list with ID: ${id}`);
  };
  
  // Tab switching
  const setTab = (tab) => {
    currentTab.value = tab;
  };
  
  // Fetch lists on component mount
  onMounted(fetchLists);
  </script>
  
  <style scoped>
  .wishlist-container {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  .wishlist-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .tabs span {
    margin: 0 10px;
    cursor: pointer;
  }
  .tabs .active {
    font-weight: bold;
    border-bottom: 2px solid #000;
  }
  .wishlist-actions {
    margin-bottom: 20px;
  }
  .btn {
    background-color: #0073e6;
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
  }
  .wishlist-content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .list-card {
    border: 1px solid #ccc;
    padding: 15px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .item-image {
    width: 100px;
    height: auto;
    margin-bottom: 10px;
  }
  .list-actions .action {
    cursor: pointer;
    color: #0073e6;
  }
  .list-actions .action:hover {
    text-decoration: underline;
  }
  </style>
  