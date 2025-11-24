<template>
  <div class="home">
    <Header />
    <Hero />
    
    <!-- Flight Booking Form -->
    <FlightBookingForm />
    
    <!-- Features Section -->
    <section class="features-section">
      <div class="uk-container">
        <div class="section-header">
          <span class="section-badge">Why Choose Us</span>
          <h2 class="section-title">Experience the Difference</h2>
          <p class="section-subtitle">We combine expertise, passion, and dedication to deliver exceptional travel experiences</p>
        </div>
        <div class="uk-grid-match uk-child-width-1-3@m uk-margin-large-top uk-grid-medium" uk-grid>
          <div>
            <div class="feature-card uk-margin-bottom" uk-scrollspy="cls: uk-animation-fade; delay: 100">
              <div class="feature-icon-wrapper">
                <i class="fas fa-heart"></i>
              </div>
              <h3>Trusted Service</h3>
              <p>Years of experience creating unforgettable travel experiences with a commitment to excellence and customer satisfaction.</p>
            </div>
          </div>
          <div>
            <div class="feature-card uk-margin-bottom" uk-scrollspy="cls: uk-animation-fade; delay: 200">
              <div class="feature-icon-wrapper">
                <i class="fas fa-globe"></i>
              </div>
              <h3>Global Destinations</h3>
              <p>Access to exclusive destinations and unique experiences around the world, from hidden gems to iconic landmarks.</p>
            </div>
          </div>
          <div>
            <div class="feature-card uk-margin-bottom" uk-scrollspy="cls: uk-animation-fade; delay: 300">
              <div class="feature-icon-wrapper">
                <i class="fas fa-credit-card"></i>
              </div>
              <h3>Best Value</h3>
              <p>Competitive pricing without compromising quality. We offer the best value for your travel investment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="services-section">
      <div class="uk-container">
        <div class="section-header">
          <span class="section-badge">Our Services</span>
          <h2 class="section-title">Discover Our Offerings</h2>
          <p class="section-subtitle">Comprehensive travel solutions tailored to your unique needs and preferences</p>
        </div>
        <div class="services-grid">
          <ServiceCard 
            v-for="(service, index) in services" 
            :key="index"
            :service="service"
          />
        </div>
        <div class="section-cta">
          <router-link to="/services" class="btn-primary-large">
            <span>Explore All Services</span>
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="stats-section">
      <div class="uk-container">
        <div class="stats-grid">
          <div class="stat-item" uk-scrollspy="cls: uk-animation-scale-up; delay: 100">
            <div class="stat-number">50+</div>
            <div class="stat-label">Destinations</div>
            <div class="stat-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
          </div>
          <div class="stat-item" uk-scrollspy="cls: uk-animation-scale-up; delay: 200">
            <div class="stat-number">10K+</div>
            <div class="stat-label">Happy Travelers</div>
            <div class="stat-icon">
              <i class="fas fa-smile"></i>
            </div>
          </div>
          <div class="stat-item" uk-scrollspy="cls: uk-animation-scale-up; delay: 300">
            <div class="stat-number">20+</div>
            <div class="stat-label">Years Experience</div>
            <div class="stat-icon">
              <i class="fas fa-calendar-alt"></i>
            </div>
          </div>
          <div class="stat-item" uk-scrollspy="cls: uk-animation-scale-up; delay: 400">
            <div class="stat-number">98%</div>
            <div class="stat-label">Satisfaction Rate</div>
            <div class="stat-icon">
              <i class="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section">
      <div class="uk-container">
        <div class="section-header">
          <span class="section-badge">Testimonials</span>
          <h2 class="section-title">What Our Clients Say</h2>
          <p class="section-subtitle">Real experiences from travelers who chose AW Travel & Tours</p>
        </div>
        <div class="testimonials-grid">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card" uk-scrollspy="cls: uk-animation-fade; delay: 100">
            <div class="testimonial-quote">
              <i class="fas fa-quote-right"></i>
            </div>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <div class="testimonial-author">
              <div class="author-avatar">
                {{ testimonial.author.charAt(0) }}
              </div>
              <div class="author-info">
                <strong>{{ testimonial.author }}</strong>
                <span>{{ testimonial.location }}</span>
              </div>
            </div>
            <div class="testimonial-rating">
              <i class="fas fa-star" v-for="n in 5" :key="n"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="uk-container">
        <div class="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Let us create the perfect travel experience tailored just for you</p>
          <div class="cta-buttons">
            <router-link to="/services" class="btn-white">
              <span>Browse Packages</span>
              <i class="fas fa-arrow-right"></i>
            </router-link>
            <router-link to="/contact" class="btn-outline-white">
              Get Free Quote
            </router-link>
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
import Hero from '../components/Hero.vue'
import ServiceCard from '../components/ServiceCard.vue'
import FlightBookingForm from '../components/FlightBookingForm.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Hero,
    ServiceCard,
    FlightBookingForm
  },
  data() {
    return {
      services: [
        {
          title: 'Custom Tour Packages',
          description: 'Tailored travel experiences designed just for you. Explore destinations at your own pace with our personalized tour packages.',
          image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop',
          icon: 'world',
          features: ['Personalized itineraries', 'Flexible scheduling', 'Expert guidance'],
          badge: 'Popular'
        },
        {
          title: 'Group Travel',
          description: 'Join exciting group tours and meet like-minded travelers. Perfect for those who enjoy sharing experiences with others.',
          image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800&auto=format&fit=crop',
          icon: 'users',
          features: ['Small group sizes', 'Shared experiences', 'Better prices']
        },
        {
          title: 'Adventure Tours',
          description: 'Thrill-seeking adventures for the adventurous soul. From mountain climbing to scuba diving, we have it all.',
          image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop',
          icon: 'bolt',
          features: ['Extreme sports', 'Unique activities', 'Safety first']
        }
      ],
      testimonials: [
        {
          text: 'Amazing experience! The team at AW Travel & Tours made our honeymoon absolutely perfect. Every detail was taken care of, and we felt so well taken care of throughout the entire trip.',
          author: 'Sarah & John',
          location: 'New York, USA'
        },
        {
          text: 'Professional service and incredible destinations. Will definitely book with them again! The attention to detail and personalized recommendations were outstanding.',
          author: 'Michael Chen',
          location: 'London, UK'
        },
        {
          text: 'They truly understand what makes a memorable trip. Highly recommend their services! From planning to execution, everything was flawless.',
          author: 'Emma Wilson',
          location: 'Sydney, Australia'
        }
      ]
    }
  }
}
</script>

<style scoped>
.features-section {
  padding: 100px 0;
  background: #fafbfc;
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

.feature-card {
  background: white;
  padding: 50px 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

.feature-icon-wrapper {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(0, 68, 153, 0.1) 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  color: #0066cc;
}

.feature-card h3 {
  font-family: 'Raleway', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
  letter-spacing: 0.01em;
}

.feature-card p {
  color: #666;
  line-height: 1.8;
  font-size: 1rem;
}

.services-section {
  padding: 100px 0;
  background: white;
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

.section-cta {
  text-align: center;
  margin-top: 60px;
}

.btn-primary-large {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
  color: white;
  padding: 18px 40px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 102, 204, 0.3);
}

.btn-primary-large:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(0, 102, 204, 0.4);
  color: white;
}

.stats-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.stat-item {
  text-align: center;
  position: relative;
  padding: 40px 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.stat-icon {
  position: absolute;
  top: 15px;
  right: 15px;
  opacity: 0.2;
}

.testimonials-section {
  padding: 100px 0;
  background: #fafbfc;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-top: 60px;
}

@media (min-width: 768px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (min-width: 960px) {
  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}

.testimonial-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.04);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

.testimonial-quote {
  color: #0066cc;
  opacity: 0.2;
  margin-bottom: 20px;
}

.testimonial-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 30px;
  flex: 1;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.author-avatar {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-info strong {
  color: #1a1a1a;
  font-size: 1rem;
  margin-bottom: 4px;
}

.author-info span {
  color: #666;
  font-size: 0.9rem;
}

.testimonial-rating {
  display: flex;
  gap: 4px;
  color: #ffd700;
}

.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-family: 'Raleway', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: white;
  letter-spacing: 0.02em;
}

.cta-content p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-white {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: white;
  color: #0066cc;
  padding: 18px 40px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.btn-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.3);
  color: #0066cc;
}

.btn-outline-white {
  display: inline-flex;
  align-items: center;
  background: transparent;
  color: white;
  padding: 18px 40px;
  border: 2px solid white;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-outline-white:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

@media (max-width: 960px) {
  .section-title {
    font-size: 2rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .feature-card,
  .testimonial-card {
    padding: 30px;
  }
}

@media (max-width: 640px) {
  .features-section,
  .services-section,
  .testimonials-section,
  .cta-section {
    padding: 60px 0;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-white,
  .btn-outline-white {
    width: 100%;
    justify-content: center;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
}
</style>
