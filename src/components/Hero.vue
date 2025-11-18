<template>
  <section class="hero-section">
    <div class="hero-background" :style="{ backgroundImage: 'url(' + heroImage + ')' }"></div>
    <div class="hero-overlay"></div>
    <div class="uk-container uk-position-relative hero-content">
      <div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
        <div class="hero-text">
          <div class="hero-badge" uk-scrollspy="cls: uk-animation-fade; delay: 100">
            <span uk-icon="icon: star; ratio: 0.8"></span>
            <span>Trusted by 10,000+ Travelers</span>
          </div>
          <h1 class="hero-title" uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">
            Discover Your Next
            <span class="highlight">Adventure</span>
          </h1>
          <p class="hero-subtitle" uk-scrollspy="cls: uk-animation-slide-top-small; delay: 300">
            Experience the world's most stunning destinations with expertly crafted tours. 
            From exotic beaches to mountain peaks, we make your travel dreams a reality.
          </p>
          <div class="hero-cta" uk-scrollspy="cls: uk-animation-slide-top-small; delay: 400">
            <router-link to="/services" class="btn btn-primary">
              <span>Explore Destinations</span>
              <span uk-icon="icon: arrow-right; ratio: 0.9"></span>
            </router-link>
            <router-link to="/contact" class="btn btn-outline">
              <span>Plan Your Trip</span>
            </router-link>
          </div>
          <div class="hero-features" uk-scrollspy="cls: uk-animation-fade; delay: 500">
            <div class="feature-item">
              <span uk-icon="icon: check; ratio: 1" class="feature-icon"></span>
              <span>Best Price Guarantee</span>
            </div>
            <div class="feature-item">
              <span uk-icon="icon: check; ratio: 1" class="feature-icon"></span>
              <span>24/7 Support</span>
            </div>
            <div class="feature-item">
              <span uk-icon="icon: check; ratio: 1" class="feature-icon"></span>
              <span>Flexible Booking</span>
            </div>
          </div>
        </div>
        <div class="hero-stats" uk-scrollspy="cls: uk-animation-fade; delay: 600">
          <div class="stat-card">
            <div class="stat-number">50+</div>
            <div class="stat-label">Destinations</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">10K+</div>
            <div class="stat-label">Happy Travelers</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">15+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">98%</div>
            <div class="stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-scroll">
      <span uk-icon="icon: chevron-down; ratio: 1.5"></span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      heroImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&auto=format&fit=crop'
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
  padding: 120px 0 80px;
}

.hero-text {
  color: white;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-bottom: 30px;
  font-weight: 500;
}

.hero-title {
  font-family: 'Raleway', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
  letter-spacing: 0.03em;
}

.hero-title .highlight {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.8;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 540px;
}

.hero-cta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 50px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.btn-primary {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  color: #1a1a1a;
  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(255, 215, 0, 0.5);
  color: #1a1a1a;
}

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  color: white;
}

.hero-features {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
}

.feature-icon {
  color: #ffd700;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 1px;
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
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 40px;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .hero-cta {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .hero-section {
    min-height: 80vh;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-stats {
    grid-template-columns: 1fr;
  }
}
</style>
