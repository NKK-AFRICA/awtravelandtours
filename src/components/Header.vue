<template>
  <header class="main-header" uk-sticky="cls-active: header-sticky; sel-target: .main-header; top: 0">
    <div class="nav-container">
      <nav class="navbar">
        <router-link to="/" class="logo-wrapper">
          <img src="/logo.png" alt="AW Travel & Tours" class="logo-image" />
        </router-link>
        
        <ul class="nav-menu" :class="{ 'nav-menu-active': mobileMenuOpen }">
          <li>
            <router-link 
              to="/" 
              class="nav-link"
              :class="{ 'active': $route.name === 'Home' }"
              @click="closeMobileMenu"
            >
              <span>Home</span>
            </router-link>
          </li>
          <li>
            <router-link 
              to="/about" 
              class="nav-link"
              :class="{ 'active': $route.name === 'About' }"
              @click="closeMobileMenu"
            >
              <span>About</span>
            </router-link>
          </li>
          <li>
            <router-link 
              to="/services" 
              class="nav-link"
              :class="{ 'active': $route.name === 'Services' }"
              @click="closeMobileMenu"
            >
              <span>Services</span>
            </router-link>
          </li>
          <li>
            <router-link 
              to="/contact" 
              class="nav-link"
              :class="{ 'active': $route.name === 'Contact' }"
              @click="closeMobileMenu"
            >
              <span>Contact</span>
            </router-link>
          </li>
        </ul>

        <div class="nav-actions">
          <a href="#flight-booking" class="btn-book" @click.prevent="scrollToBooking">
            <i class="fas fa-plane"></i>
            <span class="btn-text">Book Flight</span>
          </a>
          <button 
            class="mobile-toggle" 
            @click="toggleMobileMenu"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle menu"
          >
            <span class="hamburger" :class="{ 'hamburger-active': mobileMenuOpen }">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    },
    scrollToBooking() {
      this.closeMobileMenu()
      
      // If we're on the home page, just scroll to the section
      if (this.$route.name === 'Home') {
        setTimeout(() => {
          const bookingSection = document.querySelector('#flight-booking')
          if (bookingSection) {
            const headerHeight = 80
            const elementPosition = bookingSection.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - headerHeight
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
      } else {
        // If we're on another page, navigate to home first, then scroll
        this.$router.push('/').then(() => {
          // Wait for the route to fully load and component to mount
          setTimeout(() => {
            const bookingSection = document.querySelector('#flight-booking')
            if (bookingSection) {
              const headerHeight = 80
              const elementPosition = bookingSection.getBoundingClientRect().top + window.pageYOffset
              const offsetPosition = elementPosition - headerHeight
              
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              })
            }
          }, 500)
        })
      }
    }
  },
  watch: {
    $route() {
      this.closeMobileMenu()
    }
  }
}
</script>

<style scoped>
.main-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  position: relative;
}

.header-sticky {
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.98);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  gap: 40px;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.logo-wrapper:hover {
  transform: translateY(-2px);
}

.logo-image {
  height: 48px;
  width: auto;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 4px 15px rgba(0, 102, 204, 0.25));
}

.logo-wrapper:hover .logo-image {
  transform: scale(1.05);
  filter: drop-shadow(0 6px 20px rgba(0, 102, 204, 0.35));
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
}

.nav-link {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: #4a5568;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.08) 0%, rgba(0, 68, 153, 0.08) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 10px;
}

.nav-link span {
  position: relative;
  z-index: 1;
}

.nav-link:hover {
  color: #0066cc;
  transform: translateY(-2px);
}

.nav-link:hover::before {
  opacity: 1;
}

.nav-link.active {
  color: #0066cc;
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(0, 68, 153, 0.1) 100%);
}

.nav-link.active::before {
  opacity: 1;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.btn-book {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
  color: white;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
  white-space: nowrap;
}

.btn-book:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(0, 102, 204, 0.4);
  color: white;
}

.btn-book i {
  font-size: 0.9rem;
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 24px;
  height: 18px;
  position: relative;
}

.hamburger span {
  display: block;
  height: 2.5px;
  width: 100%;
  background: #1a1a1a;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.hamburger-active span:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.hamburger-active span:nth-child(2) {
  opacity: 0;
  transform: translateX(-10px);
}

.hamburger-active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

@media (max-width: 960px) {
  .nav-container {
    padding: 0 20px;
  }

  .navbar {
    height: 70px;
  }

  .logo-image {
    height: 42px;
  }

  .mobile-toggle {
    display: block;
  }

  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    align-items: stretch;
    padding: 20px;
    gap: 8px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    max-height: calc(100vh - 70px);
    overflow-y: auto;
  }

  .nav-menu-active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    padding: 16px 20px;
    border-radius: 12px;
    justify-content: flex-start;
    width: 100%;
  }

  .btn-book {
    display: none;
  }

  .btn-text {
    display: none;
  }
}

@media (max-width: 640px) {
  .nav-container {
    padding: 0 16px;
  }

  .navbar {
    height: 65px;
  }

  .logo {
    gap: 10px;
  }

  .logo-image {
    height: 38px;
  }

  .nav-menu {
    top: 65px;
    max-height: calc(100vh - 65px);
  }
}

@media (max-width: 480px) {
  .btn-book .btn-text {
    display: none;
  }

  .btn-book {
    padding: 12px;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    justify-content: center;
  }
}
</style>
