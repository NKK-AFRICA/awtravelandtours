<template>
  <div class="preloader-overlay">
    <div class="preloader-content">
      <div class="preloader-logo">
        <div class="plane-container">
          <i class="fas fa-plane plane-icon"></i>
        </div>
        <h2 class="brand-text">AW Travel & Tours</h2>
      </div>
      <div class="loading-animation">
        <div class="loading-bar">
          <div class="loading-progress"></div>
        </div>
        <p class="loading-text">Preparing your journey...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preloader'
}
</script>

<style scoped>
.preloader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.5s ease-in-out;
}

.preloader-content {
  text-align: center;
  color: white;
}

.preloader-logo {
  margin-bottom: 2rem;
}

.plane-container {
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
}

.plane-icon {
  font-size: 4rem;
  animation: flyAndRotate 2s ease-in-out infinite;
  color: #ffffff;
}

.brand-text {
  font-family: 'Raleway', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.02em;
  color: #ffffff;
}

.loading-animation {
  max-width: 300px;
}

.loading-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.loading-progress {
  height: 100%;
  background: #ffffff;
  border-radius: 2px;
  animation: loadingProgress 2s ease-in-out infinite;
}

.loading-text {
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  opacity: 0.9;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes flyAndRotate {
  0% {
    transform: translateX(-50px) rotate(0deg);
    opacity: 0.7;
  }
  25% {
    transform: translateX(0px) rotate(5deg);
    opacity: 1;
  }
  50% {
    transform: translateX(50px) rotate(0deg);
    opacity: 0.9;
  }
  75% {
    transform: translateX(0px) rotate(-5deg);
    opacity: 1;
  }
  100% {
    transform: translateX(-50px) rotate(0deg);
    opacity: 0.7;
  }
}

@keyframes loadingProgress {
  0% {
    width: 0%;
    transform: translateX(-100%);
  }
  50% {
    width: 100%;
    transform: translateX(0%);
  }
  100% {
    width: 0%;
    transform: translateX(100%);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .plane-icon {
    font-size: 3rem;
  }

  .brand-text {
    font-size: 1.5rem;
  }

  .loading-text {
    font-size: 0.9rem;
  }
}
</style>
