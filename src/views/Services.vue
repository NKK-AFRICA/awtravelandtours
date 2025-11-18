<template>
  <div class="services-page">
    <Header />
    
    <section class="page-hero">
      <div class="page-hero-background" style="background-image: url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&auto=format&fit=crop')"></div>
      <div class="page-hero-overlay"></div>
      <div class="uk-container page-hero-content">
        <div class="page-hero-text">
          <span class="page-hero-badge" uk-icon="icon: world; ratio: 0.8"></span>
          <h1>Our Services</h1>
          <p>Comprehensive travel solutions tailored to your unique needs and preferences</p>
        </div>
      </div>
    </section>

    <section class="services-section">
      <div class="uk-container">
        <div class="section-header">
          <span class="section-badge">What We Offer</span>
          <h2 class="section-title">Travel Services</h2>
          <p class="section-subtitle">Explore our range of professional travel services designed to make your journey unforgettable</p>
        </div>
        <div class="services-grid">
          <ServiceCard 
            v-for="(service, index) in allServices" 
            :key="index"
            :service="service"
          />
        </div>
      </div>
    </section>

    <section class="features-section">
      <div class="uk-container">
        <div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
          <div class="features-content">
            <span class="section-badge">Additional Services</span>
            <h2>Complete Travel Solutions</h2>
            <p class="features-description">Beyond our core services, we offer comprehensive travel support to ensure every aspect of your journey is seamless and stress-free.</p>
            <ul class="features-list">
              <li>
                <span uk-icon="icon: check; ratio: 1.2" class="check-icon"></span>
                <div>
                  <strong>Visa Assistance</strong>
                  <p>Expert guidance and documentation support for all visa requirements</p>
                </div>
              </li>
              <li>
                <span uk-icon="icon: check; ratio: 1.2" class="check-icon"></span>
                <div>
                  <strong>Travel Insurance</strong>
                  <p>Comprehensive coverage options to protect your journey</p>
                </div>
              </li>
              <li>
                <span uk-icon="icon: check; ratio: 1.2" class="check-icon"></span>
                <div>
                  <strong>Airport Transfers</strong>
                  <p>Reliable transportation services for a smooth start to your trip</p>
                </div>
              </li>
              <li>
                <span uk-icon="icon: check; ratio: 1.2" class="check-icon"></span>
                <div>
                  <strong>Hotel Bookings</strong>
                  <p>Access to the best accommodations worldwide at competitive rates</p>
                </div>
              </li>
              <li>
                <span uk-icon="icon: check; ratio: 1.2" class="check-icon"></span>
                <div>
                  <strong>Flight Reservations</strong>
                  <p>Expert booking and management of all your air travel needs</p>
                </div>
              </li>
              <li>
                <span uk-icon="icon: check; ratio: 1.2" class="check-icon"></span>
                <div>
                  <strong>24/7 Support</strong>
                  <p>Round-the-clock assistance during your entire travel experience</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="features-card">
            <div class="features-card-content">
              <span uk-icon="icon: star; ratio: 3" class="card-icon"></span>
              <h3>Why Book With Us</h3>
              <p>Our experienced travel consultants work closely with you to understand your preferences and create the perfect itinerary. We maintain strong relationships with hotels, airlines, and local tour operators worldwide, ensuring you get the best rates and exclusive access to special experiences.</p>
              <p>From the initial planning stage to your safe return home, we're with you every step of the way. Our commitment to excellence has earned us the trust of thousands of satisfied travelers.</p>
              <div class="card-features">
                <div class="card-feature-item">
                  <span class="card-feature-number">15+</span>
                  <span class="card-feature-label">Years Experience</span>
                </div>
                <div class="card-feature-item">
                  <span class="card-feature-number">10K+</span>
                  <span class="card-feature-label">Happy Customers</span>
                </div>
                <div class="card-feature-item">
                  <span class="card-feature-number">50+</span>
                  <span class="card-feature-label">Destinations</span>
                </div>
              </div>
              <router-link to="/contact" class="btn-primary">
                Get Started Today
                <span uk-icon="icon: arrow-right; ratio: 0.9"></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ServiceCard from '../components/ServiceCard.vue'

export default {
  name: 'Services',
  components: {
    Header,
    Footer,
    ServiceCard
  },
  data() {
    return {
      allServices: [
        {
          title: 'Custom Tour Packages',
          description: 'Tailored travel experiences designed just for you. Explore destinations at your own pace with our personalized tour packages that match your interests and budget.',
          image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop',
          icon: 'world',
          features: ['Personalized itineraries', 'Flexible scheduling', 'Expert guidance'],
          badge: 'Popular'
        },
        {
          title: 'Group Travel',
          description: 'Join exciting group tours and meet like-minded travelers. Perfect for those who enjoy sharing experiences with others while exploring new destinations.',
          image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800&auto=format&fit=crop',
          icon: 'users',
          features: ['Small group sizes', 'Shared experiences', 'Better prices']
        },
        {
          title: 'Adventure Tours',
          description: 'Thrill-seeking adventures for the adventurous soul. From mountain climbing to scuba diving, we organize adrenaline-pumping experiences.',
          image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop',
          icon: 'bolt',
          features: ['Extreme sports', 'Unique activities', 'Safety first']
        },
        {
          title: 'Luxury Travel',
          description: 'Indulge in the finest accommodations, exclusive experiences, and personalized service with our luxury travel packages.',
          image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop',
          icon: 'star',
          features: ['5-star accommodations', 'VIP services', 'Exclusive access']
        },
        {
          title: 'Family Vacations',
          description: 'Family-friendly destinations and activities designed to create lasting memories for every member of your family.',
          image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop',
          icon: 'heart',
          features: ['Kid-friendly activities', 'Safe environments', 'Fun for all ages']
        },
        {
          title: 'Business Travel',
          description: 'Efficient and professional travel arrangements for your business needs. From corporate retreats to conference travel.',
          image: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=800&auto=format&fit=crop',
          icon: 'briefcase',
          features: ['Efficient planning', 'Professional service', 'Flexible options']
        }
      ]
    }
  }
}
</script>

<style scoped>
.services-page {
  background: #fafbfc;
}

.page-hero {
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
}

.page-hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.page-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(30, 60, 114, 0.85) 0%, rgba(42, 82, 152, 0.75) 100%);
  z-index: 2;
}

.page-hero-content {
  position: relative;
  z-index: 3;
  padding: 120px 0 80px;
  text-align: center;
}

.page-hero-text h1 {
  font-family: 'Raleway', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin: 20px 0;
  letter-spacing: -1px;
}

.page-hero-text p {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

.page-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 10px 20px;
  border-radius: 50px;
  color: white;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.services-section {
  padding: 100px 0;
  background: white;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
}

.section-badge {
  display: inline-block;
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(0, 68, 153, 0.1) 100%);
  color: #0066cc;
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
}

.section-title {
  font-family: 'Raleway', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 16px;
  letter-spacing: 0.02em;
}

.section-subtitle {
  font-size: 1.15rem;
  color: #666;
  line-height: 1.7;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-top: 60px;
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (min-width: 960px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}

.features-section {
  padding: 100px 0;
  background: #fafbfc;
}

.features-content {
  padding-right: 40px;
}

.features-content h2 {
  font-family: 'Raleway', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 20px 0 24px;
  letter-spacing: 0.02em;
}

.features-description {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 40px;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  align-items: flex-start;
}

.check-icon {
  color: #0066cc;
  flex-shrink: 0;
  margin-top: 4px;
}

.features-list li strong {
  display: block;
  font-size: 1.1rem;
  color: #1a1a1a;
  margin-bottom: 6px;
  font-weight: 700;
}

.features-list li p {
  color: #666;
  line-height: 1.7;
  margin: 0;
  font-size: 0.95rem;
}

.features-card {
  position: sticky;
  top: 100px;
}

.features-card-content {
  background: white;
  padding: 50px;
  border-radius: 24px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 100%;
}

.card-icon {
  color: #0066cc;
  opacity: 0.2;
  margin-bottom: 30px;
  display: block;
}

.features-card-content h3 {
  font-family: 'Raleway', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 24px;
  letter-spacing: 0.01em;
}

.features-card-content p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 1rem;
}

.card-features {
  display: flex;
  gap: 20px;
  margin: 40px 0;
  padding: 30px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.card-feature-item {
  text-align: center;
  flex: 1;
}

.card-feature-number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: #0066cc;
  margin-bottom: 8px;
}

.card-feature-label {
  display: block;
  font-size: 0.85rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
  color: white;
  padding: 16px 32px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 102, 204, 0.3);
  width: 100%;
  justify-content: center;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(0, 102, 204, 0.4);
  color: white;
}

@media (max-width: 960px) {
  .page-hero-text h1 {
    font-size: 2.5rem;
  }
  
  .features-content {
    padding-right: 0;
    margin-bottom: 40px;
  }
  
  .features-card {
    position: static;
  }
  
  .features-card-content {
    padding: 40px;
  }
}

@media (max-width: 640px) {
  .page-hero {
    min-height: 300px;
  }
  
  .page-hero-text h1 {
    font-size: 2rem;
  }
  
  .services-section,
  .features-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>
