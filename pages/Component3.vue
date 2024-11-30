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
        <!-- Button inside the search bar, replaced magnifying icon with custom image or icon -->
        <button class="search-button">
          <img src="/search.png" alt="Search" class="search-icon" />
        </button>
      </div>

      <ul class="navbar-links">
        <li v-for="link in links" :key="link.label" class="navbar-item">
          <a :href="link.to" class="navbar-link">
            <span class="navbar-icon" :class="link.icon"></span>
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/* Base styles for navbar */
.navbar {
  background-color: white;
  padding: 10px 20px;
  border-bottom: 2px solid #ddd;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar-logo {
  height: 53px;
  margin-left: -20px;
}

.navbar-button {
  padding: 8px 20px;
  font-size: 14px;
  background-color: transparent;
  color: black;
  border-radius: 30px;
  cursor: pointer;
  margin-left: -36px; /* Increase this value to move the button further to the right */
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  text-align: left;
  gap: 8px;
}
.navbar-button:hover {
  background-color: #e1dedeeb;
  color: black;
}

.button-image {
  width: 30px;
  height: auto;
}

.button-text {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.button-bold {
  font-weight: bold;
}

.button-subtext {
  font-size: 12px;
  margin-top: 4px;
  color: #666;
}

.navbar-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-item {
  margin: 0 15px;
}

.navbar-link {
  color: black;
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.navbar-link:hover {
  background-color: #f0f0f0;
  color: #ff6347;
}

.navbar-icon {
  font-size: 18px;
}

/* Styles for the search bar */
.navbar-search {
  display: flex;
  align-items: center;
  position: relative;
  left: -20px;
}

.search-input {
  padding: 8px 12px;
  border-radius: 25px;
  border: none; /* Remove border by default */
  font-size: 14px;
  width: 400px;
  transition: border 0.3s ease;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('purple-to-blue.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}

/* When the input is focused, add a border */
.search-input:focus {
  outline: none; /* Remove the default outline that browsers apply */
  border: 2px solid #2703a8; /* Add a custom border color */
}
/* Style for the button inside the search bar */
.search-button {
  background-color: #2703a8; /* Color for the button */
  border: none;
  border-radius: 25px; /* Slightly rounded corners instead of fully circular */
  padding: 8px 20px; /* Adjust the padding to make the button longer */
  cursor: pointer;
  position: absolute;
  right: 0; /* Align the button's right edge with the input's right edge */
  top: 50%; /* Center the button vertically */
  transform: translateY(-50%); /* Adjust vertical alignment */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #3a1f8e; /* Darker shade when hovered */
}

.search-icon {
  width: 22px; /* Adjust icon size */
  height: auto; /* Maintain aspect ratio of the image */
}

/* Optional: Adjust for dark mode or responsive design */
@media (max-width: 768px) {
  .navbar-links {
    flex-direction: column;
    align-items: center;
  }

  .navbar-item {
    margin: 10px 0;
  }

  .navbar-search {
    margin-top: 10px;
  }

  .search-input {
    width: 100%;
  }
}
</style>
