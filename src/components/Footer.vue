<template>
  <footer class="main-footer">
    <div class="footer-top">
      <div class="uk-container">
        <div class="uk-grid-match uk-child-width-1-4@m uk-child-width-1-2@s" uk-grid>
          <div class="footer-column">
            <div class="footer-logo">
              <i class="fas fa-globe"></i>
              <div class="footer-logo-text">
                <strong>AW Travel</strong>
                <span>& Tours</span>
              </div>
            </div>
            <p class="footer-description">
              Your trusted partner for unforgettable travel experiences. We specialize in creating memorable journeys tailored to your dreams and desires.
            </p>
            <div class="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div class="footer-column">
            <h4 class="footer-title">Quick Links</h4>
            <ul class="footer-links">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About Us</router-link></li>
              <li><router-link to="/services">Our Services</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
              <li><a href="/services">Travel Packages</a></li>
              <li><a href="#flight-booking" @click="scrollToBooking">Book A Flight</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h4 class="footer-title">Services</h4>
            <ul class="footer-links">
              <li><a href="/services">Custom Tours</a></li>
              <li><a href="/services">Group Travel</a></li>
              <li><a href="/services">Adventure Tours</a></li>
              <li><a href="/services">Luxury Travel</a></li>
              <li><a href="/services">Family Vacations</a></li>
              <li><a href="/services">Business Travel</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h4 class="footer-title">Contact Info</h4>
            <ul class="footer-contact">
              <li>
                <i class="fas fa-phone"></i>
                <span><a href="tel:+15551234567">+1 (555) 123-4567</a></span>
              </li>
              <li>
                <i class="fas fa-envelope"></i>
                <span><a href="mailto:info@awtravelandtours.com">info@awtravelandtours.com</a></span>
              </li>
              <li>
                <i class="fas fa-map-marker-alt"></i>
                <span>123 Travel Street<br>Suite 456, Your City<br>Country 12345</span>
              </li>
            </ul>
            <div class="footer-hours">
              <strong>Business Hours</strong>
              <p>Mon - Fri: 9:00 AM - 6:00 PM<br>Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="uk-container">
        <div class="footer-bottom-content">
          <p>&copy; {{ currentYear }} AW Travel & Tours. All rights reserved.</p>
          <div class="footer-legal">
            <router-link to="/contact">Privacy Policy</router-link>
            <span>|</span>
            <router-link to="/contact">Terms of Service</router-link>
            <span>|</span>
            <router-link to="/contact">Cookie Policy</router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  },
  methods: {
    scrollToBooking() {
      if (this.$route.path === '/') {
        const bookingSection = document.querySelector('#flight-booking')
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        this.$router.push('/').then(() => {
          this.$nextTick(() => {
            const bookingSection = document.querySelector('#flight-booking')
            if (bookingSection) {
              bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          })
        })
      }
    }
  }
}
</script>

<style scoped>
.main-footer {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: rgba(255, 255, 255, 0.8);
}

.footer-top {
  padding: 80px 0 60px;
}

.footer-column {
  margin-bottom: 40px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  color: white;
}

.footer-logo i {
  color: #0066cc;
  font-size: 2rem;
}

.footer-logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.footer-logo-text strong {
  font-size: 1.4rem;
  color: white;
  font-weight: 700;
}

.footer-logo-text span {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.footer-description {
  line-height: 1.8;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.7);
}

.footer-social {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link i {
  font-size: 1.2rem;
}

.social-link:hover {
  background: #0066cc;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
}

.social-link:active {
  transform: translateY(0);
}

.footer-title {
  font-family: 'Raleway', sans-serif;
  color: white;
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.footer-links a:hover {
  color: #0066cc;
  padding-left: 5px;
}

.footer-links a.router-link-exact-active {
  color: #0066cc;
  font-weight: 600;
}

.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
}

.footer-contact li {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  align-items: flex-start;
}

.footer-contact li i {
  color: #0066cc;
  flex-shrink: 0;
  margin-top: 4px;
  font-size: 1rem;
}

.footer-contact li > span:last-child {
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
}

.footer-contact a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-contact a:hover {
  color: #0066cc;
}

.footer-hours {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 8px;
  border-left: 3px solid #0066cc;
}

.footer-hours strong {
  color: white;
  display: block;
  margin-bottom: 8px;
}

.footer-hours p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.6;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 30px 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-bottom-content p {
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
}

.footer-legal {
  display: flex;
  gap: 12px;
  align-items: center;
}

.footer-legal a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-legal a:hover {
  color: #0066cc;
}

.footer-legal span {
  color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 960px) {
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
