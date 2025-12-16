<template>
  <div id="app">
    <Preloader v-if="isLoading" />
    <div v-else>
      <router-view />
      <WhatsAppChat />
    </div>
  </div>
</template>

<script>
import WhatsAppChat from './components/WhatsAppChat.vue'
import Preloader from './components/Preloader.vue'

export default {
  name: 'App',
  components: {
    WhatsAppChat,
    Preloader
  },
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    // Simulate loading time for a better user experience
    // In a real app, you might wait for data fetching, assets loading, etc.
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  line-height: 1.7;
  background: #ffffff;
  font-weight: 400;
  letter-spacing: 0.01em;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
  transition: all 0.3s ease;
}

a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
  border-radius: 4px;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.02em;
}

h1 {
  font-weight: 800;
  letter-spacing: 0.03em;
}

h2 {
  font-weight: 700;
  letter-spacing: 0.02em;
}

h3, h4, h5, h6 {
  font-weight: 600;
  letter-spacing: 0.01em;
}

p {
  margin: 0 0 1em;
}

button {
  font-family: inherit;
}

input,
textarea,
select {
  font-family: inherit;
}

/* Smooth scroll animation */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #0066cc;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #004499;
}
</style>
