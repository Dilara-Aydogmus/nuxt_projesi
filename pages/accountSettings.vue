<template>
    <div class="container">
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
        </ul>
      </div>
  
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
            <label>Old Name:</label>
            <input v-model="editOldName" type="text" placeholder="Enter your old name" />
            <label>New Name:</label>
            <input v-model="editNewName" type="text" placeholder="Enter your new name" />
          </div>
          <div v-if="editField === 'email'">
            <label>Old Email:</label>
            <input v-model="editOldEmail" type="email" placeholder="Enter your old email" />
            <label>New Email:</label>
            <input v-model="editNewEmail" type="email" placeholder="Enter your new email" />
          </div>
          <div v-if="editField === 'phone'">
            <label>Old Phone:</label>
            <input v-model="editOldPhoneNumber" type="text" placeholder="Enter your old phone" />
            <label>New Phone:</label>
            <input v-model="editNewPhoneNumber" type="text" placeholder="Enter your new phone" />
          </div>
  
          <div class="button-container">
            <button @click="saveChanges" class="save-button">Save Changes</button>
            <button @click="cancelEdit" class="cancel-button">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useUserStore } from '~/stores/userStore';
  import { getUser, updateUser } from '~/firebase';
  
  const userStore = useUserStore(); // Access the store
  
// Logs to ensure userId is correctly set in the store
console.log("User ID in Pinia store:", userStore.userId);
  const user = ref({ nameSurname: '', email: '', phoneNumber: '' });
  const isEditing = ref(false);
  const editField = ref('');
  const editOldName = ref('');
  const editNewName = ref('');
  const editOldEmail = ref('');
  const editNewEmail = ref('');
  const editOldPhoneNumber = ref('');
  const editNewPhoneNumber = ref('');
  
  onMounted(async () => {
  console.log("Before fetching user: userId =", userStore.userId);

  userStore.initializeUser();

// Check if userId is available in the store
if (userStore.userId) {
  console.log("Restored userId from localStorage:", userStore.userId);
  await userStore.fetchUser(userStore.userId); // Fetch the user data

  // Update local user state
  user.value.nameSurname = userStore.nameSurname;
  user.value.email = userStore.email;
  user.value.phoneNumber = userStore.phoneNumber;
}
});
  const toggleEdit = (field) => {
    editField.value = field;
    isEditing.value = !isEditing.value;
  };
  
  const cancelEdit = () => {
    isEditing.value = false;
    editOldName.value = user.value.nameSurname;
    editNewName.value = user.value.nameSurname;
    editOldEmail.value = user.value.email;
    editNewEmail.value = user.value.email;
    editOldPhoneNumber.value = user.value.phoneNumber;
    editNewPhoneNumber.value = user.value.phoneNumber;
  };
  
  const saveChanges = async () => {
  try {
    // Get userId from Pinia store
    const userId = userStore.userId; 
    console.log("User ID:", userId); // Add this log for debugging

    // Check if userId is available
    if (!userId) {
      console.error("User ID is missing"); // Debug log
      throw new Error("User ID is required.");
    }

    console.log("Current user data", { editOldName, editNewName, editOldEmail, editNewEmail });

    // Check if the name is being updated and ensure the old and new names are different
    if (editField.value === 'name' && editOldName.value !== editNewName.value) {
      console.log("Updating user name:", editNewName.value);
      await updateUser(userId, editNewName.value, '', ''); // Only update name
    }

    // Check if the email is being updated and ensure the old and new emails are different
    if (editField.value === 'email' && editOldEmail.value !== editNewEmail.value) {
      console.log("Updating user email:", editNewEmail.value);
      await updateUser(userId, '', editNewEmail.value, ''); // Update email
    }

    // Check if the phone number is being updated and ensure the old and new phone numbers are different
    if (editField.value === 'phone' && editOldPhoneNumber.value !== editNewPhoneNumber.value) {
      console.log("Updating user phone number:", editNewPhoneNumber.value);
      await updateUser(userId, '', '', editNewPhoneNumber.value); // Update phone number
    }

    // Update local state after successful update
    user.value.nameSurname = editNewName.value;
    user.value.email = editNewEmail.value;
    user.value.phoneNumber = editNewPhoneNumber.value;

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
    font-weight: bold;
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
    margin-top: 50px;
    margin-left: -200px;
  }
  
  .account-info {
    width: 100%;
    margin-bottom: 30px;
    white-space: nowrap;
  }
  
  .account-info h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .account-info p {
    font-size: 16px;
    margin-bottom: 10px;
    white-space: nowrap;
  }
  
  .info-row {
    margin-bottom: 10px;
    white-space: nowrap;
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
    margin-left: 800px;
    display: block;
    margin-top: -25px;
  }
  
  .edit-button:hover {
    background-color: #e0e0e0;
    border-color: #999;
  }
  
  .edit-form button {
    padding: 6px 12px;
    font-size: 14px;
    width: 150px;
    margin-left: 110px;
  }
  
  .button-container {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
  }
  </style>
  