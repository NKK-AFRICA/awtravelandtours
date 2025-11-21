<template>
  <header class="main-header" uk-sticky="cls-active: header-sticky; sel-target: .main-header; top: 0">
    <div class="uk-container">
      <nav class="uk-navbar" uk-navbar>
        <div class="uk-navbar-left">
          <router-link class="uk-navbar-item logo-wrapper" to="/">
            <div class="logo">
              <span class="logo-icon" uk-icon="icon: world; ratio: 1.5"></span>
              <div class="logo-text">
                <strong class="logo-name">AW Travel</strong>
                <span class="logo-tagline">& Tours</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav uk-visible@m">
            <li :class="{ 'uk-active': $route.name === 'Home' }">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li :class="{ 'uk-active': $route.name === 'About' }">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li :class="{ 'uk-active': $route.name === 'Services' }">
              <router-link to="/services" class="nav-link">Services</router-link>
            </li>
            <li :class="{ 'uk-active': $route.name === 'Contact' }">
              <router-link to="/contact" class="nav-link">
                Contact
              </router-link>
            </li>
          </ul>
          <a class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon href="#mobile-menu" uk-toggle></a>
        </div>
      </nav>
    </div>
  </header>

  <!-- Mobile Menu -->
  <div id="mobile-menu" uk-offcanvas="flip: true; overlay: true">
    <div class="uk-offcanvas-bar mobile-menu">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
      <div class="mobile-logo">
        <span uk-icon="icon: world; ratio: 2"></span>
        <strong>AW Travel & Tours</strong>
      </div>
      <ul class="uk-nav uk-nav-default uk-nav-parent-icon">
        <li :class="{ 'uk-active': $route.name === 'Home' }">
          <router-link to="/" @click="closeMenu">Home</router-link>
        </li>
        <li :class="{ 'uk-active': $route.name === 'About' }">
          <router-link to="/about" @click="closeMenu">About</router-link>
        </li>
        <li :class="{ 'uk-active': $route.name === 'Services' }">
          <router-link to="/services" @click="closeMenu">Services</router-link>
        </li>
        <li :class="{ 'uk-active': $route.name === 'Contact' }">
          <router-link to="/contact" @click="closeMenu">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    closeMenu() {
      this.$nextTick(() => {
        if (window.UIkit) {
          const offcanvas = window.UIkit.offcanvas('#mobile-menu')
          if (offcanvas && offcanvas.isActive()) {
            offcanvas.hide()
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.main-header {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  z-index: 1000;
}

.header-sticky {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.99);
}

.logo-wrapper {
  padding: 10px 0;
  text-decoration: none;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  color: #0066cc;
  display: flex;
  align-items: center;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.logo-name {
  font-family: 'Raleway', sans-serif;
  font-size: 1.4rem;
  color: #1a1a1a;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.logo-tagline {
  font-size: 0.85rem;
  color: #666;
  font-weight: 400;
  margin-top: -2px;
}

.nav-link {
  position: relative;
  color: #333 !important;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 8px 16px !important;
  transition: color 0.3s ease;
  text-transform: none !important;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #0066cc;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover,
.nav-link.uk-active {
  color: #0066cc !important;
}

.nav-link:hover::after,
.nav-link.uk-active::after {
  width: 60%;
}

.nav-link:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 4px;
  border-radius: 4px;
}

.mobile-menu {
  background: #fff;
  padding: 40px 30px;
}

.mobile-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
  color: #0066cc;
  font-size: 1.2rem;
}

.mobile-menu .uk-nav > li > a {
  padding: 12px 0;
  font-size: 1.1rem;
  color: #333;
}

.mobile-menu .uk-nav > li.uk-active > a {
  color: #0066cc;
  font-weight: 600;
}

@media (max-width: 960px) {
  .uk-navbar-right {
    margin-left: auto;
  }
}
</style>
