<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
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
