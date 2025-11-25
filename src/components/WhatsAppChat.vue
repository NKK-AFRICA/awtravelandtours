<template>
  <a
    class="whatsapp-chat"
    :href="chatUrl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with AW Travel & Tours on WhatsApp"
  >
    <span class="icon-wrapper" aria-hidden="true">
      <i class="fab fa-whatsapp"></i>
    </span>
  </a>
</template>

<script>
export default {
  name: 'WhatsAppChat',
  props: {
    phoneNumber: {
      type: String,
      default: '+265887136122'
    },
    prefilledMessage: {
      type: String,
      default: 'Hi AW Travel & Tours, I would like to plan a trip!'
    }
  },
  computed: {
    chatUrl() {
      const sanitized = this.phoneNumber.replace(/[^\d]/g, '')
      const encodedMessage = encodeURIComponent(this.prefilledMessage.trim())
      return `https://wa.me/${sanitized}?text=${encodedMessage}`
    }
  }
}
</script>

<style scoped>
.whatsapp-chat {
  position: fixed;
  bottom: 32px;
  right: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  color: white;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  box-shadow: 0 12px 30px rgba(18, 140, 126, 0.35);
  z-index: 1000;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
}

.whatsapp-chat:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 35px rgba(18, 140, 126, 0.45);
  text-decoration: none;
}

.whatsapp-chat:focus-visible {
  outline: 4px solid rgba(37, 211, 102, 0.4);
  outline-offset: 4px;
}

.icon-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
}

@media (max-width: 640px) {
  .whatsapp-chat {
    right: 20px;
    bottom: 20px;
  }
}
</style>

