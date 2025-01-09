<template>
    <div class="container">
      <!-- Left Sidebar (Orders Section) -->
      <div class="left-sidebar">
        <div class="account-header">
          <h1>HI, {{ user.nameSurname }}</h1>
          <p>Thanks for being a Newegg customer for 2 months</p>
        </div>
        <h3>Orders</h3>
        <ul>
          <li><a href="#">Order History</a></li>
          <li><a href="#">Digital Orders</a></li>
          <li><a href="#">Subscription Orders</a></li>
          <li><a href="#">Return Status / History</a></li>
          <li><a href="#">Marketplace Claim History</a></li>
          <li><a href="#">Trade-in Orders</a></li>
          <li><a href="#">Offers</a></li>
        </ul>
  
        <!-- Additional sections for testing -->
        <h3>Manage Account</h3>
        <ul>
            <li><a href="#" class="italic">Account Settings</a></li>
            <li><a href="#">Security Settings</a></li>
          <li><a href="#">Notification Preferences</a></li>
          <li><a href="#">Payment Methods</a></li>
          <li><a href="#">Subscription Plan</a></li>
        </ul>
      </div>
  
      <!-- Right Settings Section (Account Settings) -->
      <div class="right-settings">
        <div class="header">
          <p class="text italic">Account Settings</p>
          <p class="subtitle">Control, protect, and secure your account.</p>
        </div>
  
        <div class="account-info">
          <h3>Account Information</h3>
          <div class="info-row">
            <p><strong>Name:</strong> {{ user.nameSurname }}</p>
            <button class="edit-button" @click="toggleEdit('name')">Edit</button>
          </div>
          <div class="info-row">
            <p><strong>Email:</strong> {{ user.email }}</p>
            <button class="edit-button" @click="toggleEdit('email')">Edit</button>
          </div>
          <div class="info-row">
            <p><strong>Phone Number:</strong> {{ user.phoneNumber || 'Not provided' }}</p>
            <button class="edit-button" @click="toggleEdit('phone')">Edit</button>
          </div>
        </div>
  
        <div v-if="isEditing" class="edit-form">
          <div v-if="editField === 'name'">
            <label>Name:</label>
            <input v-model="editName" type="text" placeholder="Enter your name">
          </div>
          <div v-if="editField === 'email'">
            <label>Email:</label>
            <input v-model="editEmail" type="email" placeholder="Enter your email">
          </div>
          <div v-if="editField === 'phone'">
            <label>Phone Number:</label>
            <input v-model="editPhoneNumber" type="text" placeholder="Enter your phone number">
          </div>
  
          <button @click="saveChanges">Save Changes</button>
          <button @click="cancelEdit">Cancel</button>
        </div>
      </div>
    </div>
</template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useUserStore } from '~/stores/userStore';  // Importing user store
  import { useRouter } from 'vue-router';  // For redirection after update
  import { getUser, updateUser } from '~/firebase';  // Firebase methods to get and update user data
  
  const router = useRouter();
  const userStore = useUserStore();
  
  // State variables for user data and edit mode
  const user = ref({
    nameSurname: '',
    email: '',
    phoneNumber: ''
  });
  const isEditing = ref(false);
  const editField = ref('');
  const editName = ref('');
  const editEmail = ref('');
  const editPhoneNumber = ref('');
  
  // Fetch user data when component is mounted
  onMounted(async () => {
    const userData = await getUser(userStore.userId);  // Fetch data from Firestore
    if (userData) {
      user.value = userData;
    }
    editName.value = user.value.nameSurname;
    editEmail.value = user.value.email;
    editPhoneNumber.value = user.value.phoneNumber;
  });
  
  // Toggle edit mode for specific field
  const toggleEdit = (field) => {
    editField.value = field;
    isEditing.value = !isEditing.value;
  };
  
  // Cancel editing and reset the fields
  const cancelEdit = () => {
    isEditing.value = false;
    editName.value = user.value.nameSurname;
    editEmail.value = user.value.email;
    editPhoneNumber.value = user.value.phoneNumber;
  };
  
  // Save changes and update user data in Firestore
  const saveChanges = async () => {
    try {
      if (editField.value === 'name') {
        await updateUser(userStore.userId, editName.value, user.value.email, user.value.phoneNumber);
        user.value.nameSurname = editName.value;
      } else if (editField.value === 'email') {
        await updateUser(userStore.userId, user.value.nameSurname, editEmail.value, user.value.phoneNumber);
        user.value.email = editEmail.value;
      } else if (editField.value === 'phone') {
        await updateUser(userStore.userId, user.value.nameSurname, user.value.email, editPhoneNumber.value);
        user.value.phoneNumber = editPhoneNumber.value;
      }
      isEditing.value = false;
      console.log("User data updated successfully");
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    gap: 50px;
    padding: 20px;
    margin-top: 110px;
  }
  
  .left-sidebar {
    width: 250px;
    font-size: 16px;
  }
  
  .account-header {
    margin-bottom: 30px;
    margin-top: 20px;
  }
  
  .account-header h1 {
    font-size: 24px;
    font-weight: bold;
  }
  
  .account-header p {
    font-size: 16px;
    color: #666;
  }
  
  .left-sidebar h3 {
  margin-bottom: 15px;
  font-weight: bold;  /* Added this line to make it bold */
}
  .left-sidebar ul {
    list-style-type: none;
    padding: 0;
  }
  
  .left-sidebar ul li {
    margin: 10px 0;
  }
  
  .left-sidebar ul li a {
    text-decoration: none;
    color: black;
  }
  
  .left-sidebar ul li a:hover {
    color: blue;
  }
  
  .right-settings {
    width: 100%;
    max-width: 600px;
  }
  
  .header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .text {
    font-weight: bold;
    font-size: 24px;
  }
  
  .subtitle {
    font-size: 16px;
    color: #666;
    margin-top:50px;
    margin-left : -200px;
  }
  
  .account-info {
  width: 100%;
  margin-bottom: 30px;
  white-space: nowrap;  /* Prevent text from wrapping */
}
  .account-info h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .account-info p {
  font-size: 16px;
  margin-bottom: 10px;
  white-space: nowrap;  /* Prevent text from wrapping */
}
  
.info-row {
  margin-bottom: 10px;
  white-space: nowrap;  /* Prevent text from wrapping */
}

button {
  padding: 8px 15px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

button:hover {
  background-color: #e0e0e0;
  border-color: #999;
}
  .edit-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
  }
  
  .edit-form input {
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  .footer {
    margin-top: 30px;
    text-align: center;
  }
  
  .footer p {
    font-size: 13px;
    color: #888;
  }
  .italic {
  font-style: italic;
}

/* Add a specific class for the edit button */
.edit-button {
  padding: 8px 15px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  margin-left: 800px;  /* This will push the button to the right */
  display: block;     /* Ensures the button occupies a full line */
  margin-top: -25px;
}

.edit-button:hover {
  background-color: #e0e0e0;
  border-color: #999;
}
/* Adjusting the Save and Cancel buttons specifically */
.edit-form button {
  padding: 6px 12px;  /* Adjust padding to make the buttons shorter */
  font-size: 14px;     /* Optionally adjust the font size */
width: 150px;
margin-left: 110px;

}

  </style>
  