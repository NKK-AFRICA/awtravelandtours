<template>
  <div class="service-card">
    <div class="service-image-wrapper">
      <img :src="service.image" :alt="service.title" class="service-image">
      <div class="service-badge" v-if="service.badge">
        {{ service.badge }}
      </div>
    </div>
    <div class="service-content">
      <h3 class="service-title">{{ service.title }}</h3>
      <p class="service-description">{{ service.description }}</p>
      <ul class="service-features" v-if="service.features">
        <li v-for="(feature, index) in service.features.slice(0, 3)" :key="index">
          <i class="fas fa-check"></i>
          {{ feature }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.service-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.service-image-wrapper {
  position: relative;
  overflow: hidden;
  height: 240px;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.service-card:hover .service-image {
  transform: scale(1.1);
}


.service-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  color: #1a1a1a;
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  z-index: 2;
}

.service-content {
  padding: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.service-title {
  font-family: 'Raleway', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 12px;
  line-height: 1.3;
  letter-spacing: 0.01em;
}

.service-description {
  color: #666;
  line-height: 1.7;
  margin-bottom: 20px;
  flex: 1;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #555;
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.service-features li i {
  color: #0066cc;
  flex-shrink: 0;
  font-size: 0.8rem;
}


@media (max-width: 640px) {
  .service-image-wrapper {
    height: 200px;
  }
  
  .service-content {
    padding: 24px;
  }
}
</style>
