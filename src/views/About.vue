<template>
  <div class="about-page">
    <Header />
    
    <section class="page-hero">
      <div class="page-hero-background" style="background-image: url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&auto=format&fit=crop')"></div>
      <div class="page-hero-overlay"></div>
      <div class="uk-container page-hero-content">
        <div class="page-hero-text">
          <span class="page-hero-badge">
            <i class="fas fa-info-circle"></i>
          </span>
          <h1>About AW Travel & Tours</h1>
          <p>Your trusted partner in creating unforgettable travel experiences</p>
        </div>
      </div>
    </section>

    <section class="about-intro">
      <div class="uk-container">
        <div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
          <div class="about-content">
            <span class="section-badge">Our Story</span>
            <h2>Creating Memories Since 2008</h2>
            <p class="intro-text">At AW Travel & Tours, we believe that travel is more than just visiting places—it's about creating memories that last a lifetime. With over 15 years of experience in the travel industry, we've helped thousands of travelers explore the world with confidence and joy.</p>
            <p>Our team of travel experts is dedicated to crafting personalized itineraries that match your interests, budget, and travel style. Whether you're seeking adventure, relaxation, cultural immersion, or a combination of all three, we're here to make it happen.</p>
            <div class="about-stats">
              <div class="about-stat">
                <div class="about-stat-number">15+</div>
                <div class="about-stat-label">Years Experience</div>
              </div>
              <div class="about-stat">
                <div class="about-stat-number">10K+</div>
                <div class="about-stat-label">Happy Travelers</div>
              </div>
              <div class="about-stat">
                <div class="about-stat-number">50+</div>
                <div class="about-stat-label">Destinations</div>
              </div>
            </div>
          </div>
          <div class="about-image">
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop" 
                 alt="About Us" 
                 class="uk-border-rounded">
            <div class="image-badge">
              <i class="fas fa-star"></i>
              <div>
                <strong>15+ Years</strong>
                <span>Of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="values-section">
      <div class="uk-container">
        <div class="section-header">
          <span class="section-badge">Our Values</span>
          <h2 class="section-title">What Drives Us</h2>
          <p class="section-subtitle">Core principles that guide everything we do</p>
        </div>
        <div class="uk-grid-match uk-child-width-1-4@m uk-margin-large-top uk-grid-medium" uk-grid>
          <div>
            <div class="value-card uk-margin-bottom" uk-scrollspy="cls: uk-animation-fade; delay: 100">
              <div class="value-icon">
                <i class="fas fa-star"></i>
              </div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every aspect of our service, ensuring every detail is perfect for your journey.</p>
            </div>
          </div>
          <div>
            <div class="value-card uk-margin-bottom" uk-scrollspy="cls: uk-animation-fade; delay: 200">
              <div class="value-icon">
                <i class="fas fa-users"></i>
              </div>
              <h3>Customer Focus</h3>
              <p>Your satisfaction is our top priority. We listen, understand, and deliver experiences that exceed expectations.</p>
            </div>
          </div>
          <div>
            <div class="value-card uk-margin-bottom" uk-scrollspy="cls: uk-animation-fade; delay: 300">
              <div class="value-icon">
                <i class="fas fa-lock"></i>
              </div>
              <h3>Trust</h3>
              <p>Building lasting relationships through trust, transparency, and honest communication every step of the way.</p>
            </div>
          </div>
          <div>
            <div class="value-card uk-margin-bottom" uk-scrollspy="cls: uk-animation-fade; delay: 400">
              <div class="value-icon">
                <i class="fas fa-bolt"></i>
              </div>
              <h3>Innovation</h3>
              <p>Continuously improving and adapting to your needs, leveraging the latest in travel technology and trends.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="team-section">
      <div class="uk-container">
        <div class="section-header">
          <span class="section-badge">Our Team</span>
          <h2 class="section-title">Meet the Experts</h2>
          <p class="section-subtitle">Passionate travel professionals dedicated to making your dreams come true</p>
        </div>
        <div class="uk-grid-match uk-child-width-1-3@m uk-margin-large-top uk-grid-medium" uk-grid>
          <div>
            <div class="team-card uk-margin-bottom" uk-scrollspy="cls: uk-animation-fade; delay: 100">
              <div class="team-avatar">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop" alt="Team Member">
              </div>
              <h3>John Smith</h3>
              <span class="team-role">Founder & CEO</span>
              <p>With 20 years of travel industry experience, John founded AW Travel & Tours with a vision to make extraordinary travel accessible to everyone.</p>
            </div>
          </div>
          <div>
            <div class="team-card uk-margin-bottom" uk-scrollspy="cls: uk-animation-fade; delay: 200">
              <div class="team-avatar">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop" alt="Team Member">
              </div>
              <h3>Sarah Johnson</h3>
              <span class="team-role">Travel Director</span>
              <p>Sarah specializes in luxury travel and has curated experiences for high-profile clients across 40+ countries worldwide.</p>
            </div>
          </div>
          <div>
            <div class="team-card uk-margin-bottom" uk-scrollspy="cls: uk-animation-fade; delay: 300">
              <div class="team-avatar">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop" alt="Team Member">
              </div>
              <h3>Michael Chen</h3>
              <span class="team-role">Adventure Specialist</span>
              <p>Michael is an adventure enthusiast who designs thrilling experiences for travelers seeking adrenaline-pumping activities.</p>
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
  name: 'About',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.about-page {
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

.about-intro {
  padding: 100px 0;
  background: white;
}

.about-content {
  padding-right: 40px;
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

.about-content h2 {
  font-family: 'Raleway', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 24px;
  letter-spacing: 0.02em;
}

.intro-text {
  font-size: 1.15rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
}

.about-content p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
}

.about-stats {
  display: flex;
  gap: 40px;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid #eee;
}

.about-stat {
  text-align: center;
}

.about-stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #0066cc;
  margin-bottom: 8px;
}

.about-stat-label {
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.about-image {
  position: relative;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.image-badge {
  position: absolute;
  bottom: 30px;
  left: 30px;
  background: white;
  padding: 20px 30px;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 15px;
}

.image-badge i {
  color: #ffd700;
  font-size: 1.5rem;
}

.value-icon i {
  font-size: 2rem;
}

.page-hero-badge i {
  font-size: 0.8rem;
}

.image-badge strong {
  display: block;
  font-size: 1.2rem;
  color: #1a1a1a;
  margin-bottom: 4px;
}

.image-badge span {
  font-size: 0.9rem;
  color: #666;
}

.values-section {
  padding: 100px 0;
  background: #fafbfc;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
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

.value-card {
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

.value-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(0, 68, 153, 0.1) 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: #0066cc;
}

.value-card h3 {
  font-family: 'Raleway', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
  letter-spacing: 0.01em;
}

.value-card p {
  color: #666;
  line-height: 1.8;
  font-size: 0.95rem;
}

.team-section {
  padding: 100px 0;
  background: white;
}

.team-section [uk-grid] {
  margin-left: 0;
  margin-right: 0;
}

.team-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

.team-avatar {
  width: 180px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 24px;
  border: 4px solid #e5ecf5;
  background: #f7f9fc;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.team-card:hover .team-avatar {
  border-color: #0066cc;
  transform: translateY(-4px);
}

.team-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  aspect-ratio: 1 / 1;
}

.team-card h3 {
  font-family: 'Raleway', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
  letter-spacing: 0.01em;
}

.team-role {
  display: block;
  color: #0066cc;
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 0.95rem;
}

.team-card p {
  color: #666;
  line-height: 1.8;
  font-size: 0.95rem;
}

@media (max-width: 960px) {
  .page-hero-text h1 {
    font-size: 2.5rem;
  }
  
  .about-content {
    padding-right: 0;
    margin-bottom: 40px;
  }
  
  .about-stats {
    justify-content: space-around;
    gap: 20px;
  }
}

@media (max-width: 640px) {
  .page-hero {
    min-height: 300px;
  }
  
  .page-hero-text h1 {
    font-size: 2rem;
  }
  
  .about-intro,
  .values-section,
  .team-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .about-stats {
    flex-direction: column;
    gap: 30px;
  }
}
</style>
