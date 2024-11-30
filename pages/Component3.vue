<script setup lang="ts">
const links = [
  {
    label: 'Home',
    to: '#',
    icon: 'i-heroicons-home',
  },
  {
    label: 'About',
    to: '#',
    icon: 'i-heroicons-information-circle',
  },
  {
    label: 'Services',
    to: '#',
    icon: 'i-heroicons-briefcase',
  },
  {
    label: 'Contact',
    to: '#',
    icon: 'i-heroicons-phone',
  }
];
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- PNG Image at the start of the navbar -->
      <img src="/logo.SVG" alt="Logo" class="navbar-logo" />

      <ul class="navbar-links">
        <li v-for="link in links" :key="link.label" class="navbar-item">
          <a :href="link.to" class="navbar-link">
            <span class="navbar-icon" :class="link.icon"></span>
            {{ link.label }}
          </a>
        </li>
      </ul>
      
      <!-- Search Bar -->
      <div class="navbar-search">
        <input type="text" placeholder="Search..." class="search-input" />
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Base styles for navbar */
.navbar {
  background-color: white; /* White background for the navbar */
  padding: 10px 20px; /* Add padding for space */
  border-bottom: 2px solid #ddd; /* Optional: add a subtle bottom border */
  width: 100%; /* Ensure the navbar stretches across the full width */
  position: fixed; /* Optional: If you want the navbar fixed at the top */
  top: 0;
  left: 0;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Ensure the container stretches across the full width */
  max-width: 1200px; /* Optional: Limit the maximum width for large screens */
  margin: 0 auto; /* Center the container if max-width is set */
}

.navbar-logo {
  height: 53px; /* Set a specific height for the logo */
  margin-left: -20px; /* Space between the logo and navbar links */
}

.navbar-links {
  list-style: none; /* Remove default list styling */
  display: flex; /* Align items horizontally */
  margin: 0;
  padding: 0;
}

.navbar-item {
  margin: 0 15px; /* Space between navbar items */
}

.navbar-link {
  color: black; /* Text color black */
  text-decoration: none; /* Remove underline */
  font-size: 16px;
  display: flex;
  align-items: center; /* Align icon and text */
  gap: 8px; /* Space between icon and text */
  padding: 8px 12px; /* Padding for the links */
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition for hover effects */
}

.navbar-link:hover {
  background-color: #f0f0f0; /* Light gray background on hover */
  color: #ff6347; /* Change text color on hover */
}

.navbar-icon {
  font-size: 18px; /* Icon size */
}

/* Styles for the search bar */
.navbar-search {
  display: flex;
  align-items: center;
}

.search-input {
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 14px;
  width: 250px; /* Wider search bar */
  transition: border 0.3s ease;
}

.search-input:focus {
  border-color: #ff6347; /* Border color changes to tomato red when focused */
  outline: none; /* Remove the default focus outline */
}

/* Optional: Adjust for dark mode or responsive design */
@media (max-width: 768px) {
  .navbar-links {
    flex-direction: column; /* Stack links vertically on small screens */
    align-items: center;
  }

  .navbar-item {
    margin: 10px 0; /* Increase vertical spacing between items */
  }

  .navbar-search {
    margin-top: 10px; /* Add space between search bar and nav items on small screens */
  }

  .search-input {
    width: 100%; /* Full width search bar on mobile */
  }
}
</style>
