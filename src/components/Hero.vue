<template>
  <section class="hero-section">
    <div class="hero-background" :style="{ backgroundImage: 'url(' + heroImage + ')' }"></div>
    <div class="hero-overlay"></div>
    <div class="uk-container uk-position-relative hero-content">
      <div class="hero-content-wrapper">
        <h2 class="hero-subheading" uk-scrollspy="cls: uk-animation-fade; delay: 100">
          Your Reliable & Trusted Travel Partner
        </h2>
        <h1 class="hero-title" uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">
          Explore Your Dream Destination
        </h1>
        <div class="hero-cta" uk-scrollspy="cls: uk-animation-slide-top-small; delay: 300">
          <router-link to="/contact" class="btn btn-primary">
            <i class="fas fa-calendar-check"></i>
            <span>Book a Free Consultation</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="hero-scroll">
      <i class="fas fa-chevron-down"></i>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      heroImage: 'image/e50aad4ee8421.jpeg'
    }
  },
  methods: {
    scrollToBooking() {
      const bookingSection = document.querySelector('#flight-booking')
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(30, 60, 114, 0.85) 0%, rgba(42, 82, 152, 0.75) 100%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  padding: 140px 0 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
}

.hero-content-wrapper {
  text-align: center;
  max-width: 900px;
  color: white;
}

.hero-subheading {
  font-family: 'Raleway', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
}

.hero-title {
  font-family: 'Raleway', sans-serif;
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 50px;
  letter-spacing: 0.02em;
  color: white;
}

.hero-cta {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 18px 40px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.btn i {
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  color: #1a1a1a;
  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.4);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(255, 215, 0, 0.5);
  color: #1a1a1a;
}

.btn-outline {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.6);
  color: white;
  transform: translateY(-3px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.7);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(255, 255, 255, 0.2);
  text-decoration: none;
}

.hero-scroll {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  z-index: 3;
  animation: bounce 2s infinite;
  opacity: 0.7;
  font-size: 1.5rem;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@media (max-width: 960px) {
  .hero-content {
    padding: 100px 0 80px;
    min-height: auto;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-cta {
    flex-direction: column;
    gap: 16px;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .hero-section {
    min-height: auto;
    overflow: visible;
  }
  
  .hero-content {
    padding: 80px 0 40px;
  }
  
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subheading {
    font-size: 1rem;
    margin-bottom: 20px;
  }
  
  .btn {
    font-size: 1rem;
    padding: 16px 32px;
  }
}
</style>
