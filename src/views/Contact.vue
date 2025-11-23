<template>
  <div class="contact-page">
    <Header />
    
    <section class="page-hero">
      <div class="page-hero-background" style="background-image: url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&auto=format&fit=crop')"></div>
      <div class="page-hero-overlay"></div>
      <div class="uk-container page-hero-content">
        <div class="page-hero-text">
          <span class="page-hero-badge">
            <i class="fas fa-envelope"></i>
          </span>
          <h1>Get In Touch</h1>
          <p>Start planning your next adventure with us today</p>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="uk-container">
        <div class="contact-grid">
          <div class="contact-form-wrapper">
            <div class="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible</p>
            </div>
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-meta">
                <div class="meta-item">
                  <span class="meta-label">Average response time</span>
                  <strong>Within 12 hours</strong>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Need immediate help?</span>
                  <a href="tel:+15551234567">Call us directly</a>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Full Name *</label>
                  <input class="form-input" id="name" type="text" v-model="form.name" required placeholder="John Doe">
                </div>
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input class="form-input" id="email" type="email" v-model="form.email" required placeholder="john@example.com">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input class="form-input" id="phone" type="tel" v-model="form.phone" placeholder="+1 (555) 123-4567">
                </div>
                <div class="form-group">
                  <label for="subject">Subject *</label>
                  <input class="form-input" id="subject" type="text" v-model="form.subject" required placeholder="How can we help?">
                </div>
              </div>
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea class="form-input form-textarea" id="message" rows="6" v-model="form.message" required placeholder="Tell us about your travel plans..."></textarea>
              </div>
              <div class="form-footer">
                <p class="privacy-note">
                  By sending this form you agree to our <router-link to="/privacy">privacy policy</router-link>.
                </p>
                <button class="btn-submit" type="submit">
                  <span>Send Message</span>
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
          
          <div class="contact-info-wrapper">
            <div class="contact-info">
              <div class="info-card">
                <div class="info-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <h3>Visit Our Office</h3>
                <p>123 Travel Street<br>Suite 456<br>Your City, ST 12345<br>Country</p>
              </div>
              
              <div class="info-card">
                <div class="info-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <h3>Call Us</h3>
                <p>
                  <a href="tel:+15551234567">+1 (555) 123-4567</a><br>
                  <a href="tel:+15551234568">+1 (555) 123-4568</a>
                </p>
              </div>
              
              <div class="info-card">
                <div class="info-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <h3>Email Us</h3>
                <p>
                  <a href="mailto:info@awtravelandtours.com">info@awtravelandtours.com</a><br>
                  <a href="mailto:support@awtravelandtours.com">support@awtravelandtours.com</a>
                </p>
              </div>
              
              <div class="info-card">
                <div class="info-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <h3>Business Hours</h3>
                <p>
                  Monday - Friday: 9:00 AM - 6:00 PM<br>
                  Saturday: 10:00 AM - 4:00 PM<br>
                  Sunday: Closed
                </p>
              </div>
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

export default {
  name: 'Contact',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Form submission logic would go here
      alert('Thank you for your message! We will get back to you soon.')
      // Reset form
      this.form = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact-page {
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
  letter-spacing: 0.03em;
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

.contact-section {
  padding: 100px 0;
  background: white;
}

.contact-grid {
  display: grid;
  gap: 40px;
  align-items: flex-start;
}

@media (min-width: 960px) {
  .contact-grid {
    grid-template-columns: 3fr 2fr;
  }
}

.form-header {
  margin-bottom: 40px;
}

.form-header h2 {
  font-family: 'Raleway', sans-serif;
  font-size: 2.2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 12px;
  letter-spacing: 0.02em;
}

.form-header p {
  color: #666;
  font-size: 1.05rem;
  line-height: 1.7;
}

.contact-form {
  background: linear-gradient(135deg, #ffffff 0%, #f3f7fb 100%);
  padding: 50px;
  border-radius: 28px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
}

.form-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  margin-bottom: 30px;
  background: rgba(0, 102, 204, 0.05);
  border: 1px solid rgba(0, 102, 204, 0.1);
  border-radius: 16px;
}

.meta-item {
  flex: 1;
  min-width: 200px;
}

.meta-label {
  display: block;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #7c8ba1;
  margin-bottom: 6px;
  font-weight: 600;
}

.meta-item strong {
  font-size: 1.2rem;
  color: #1a1a1a;
}

.meta-item a {
  color: #0066cc;
  font-weight: 600;
  text-decoration: none;
}

.meta-item a:hover {
  text-decoration: underline;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 28px;
}

.form-group {
  margin-bottom: 28px;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.form-input {
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  color: #1a1a1a;
  font-family: inherit;
}

.form-input:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 4px rgba(0, 102, 204, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 150px;
  font-family: inherit;
}

.form-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 20px;
}

.privacy-note {
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0;
}

.privacy-note a {
  color: #0066cc;
  text-decoration: none;
  font-weight: 600;
}

.privacy-note a:hover {
  text-decoration: underline;
}

.btn-submit {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
  color: white;
  padding: 18px 40px;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 102, 204, 0.3);
  width: 100%;
  justify-content: center;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(0, 102, 204, 0.4);
}

.contact-info {
  margin-bottom: 40px;
}

.info-card {
  background: white;
  padding: 35px;
  border-radius: 20px;
  margin-bottom: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.info-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(0, 68, 153, 0.1) 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0066cc;
  margin-bottom: 20px;
}

.info-icon i {
  font-size: 1.5rem;
}

.page-hero-badge i {
  font-size: 0.8rem;
}

.info-card h3 {
  font-family: 'Raleway', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
  letter-spacing: 0.01em;
}

.info-card p {
  color: #666;
  line-height: 1.8;
  font-size: 1rem;
  margin: 0;
}

.info-card a {
  color: #0066cc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-card a:hover {
  color: #004499;
  text-decoration: underline;
}

@media (max-width: 960px) {
  .page-hero-text h1 {
    font-size: 2.5rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-form {
    padding: 40px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .form-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .page-hero {
    min-height: 300px;
  }
  
  .page-hero-text h1 {
    font-size: 2rem;
  }
  
  .contact-section {
    padding: 60px 0;
  }
  
  .contact-form {
    padding: 30px;
  }
  
  .form-meta {
    padding: 16px;
  }
  
  .form-header h2 {
    font-size: 1.8rem;
  }
}
</style>
