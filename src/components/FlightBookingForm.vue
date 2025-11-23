<template>
  <section id="flight-booking" class="flight-booking-section">
    <div class="uk-container">
      <div class="section-header">
        <span class="section-badge">
          <i class="fas fa-plane"></i>
          Book Your Flight
        </span>
        <h2 class="section-title">Request Your Flight Quotation</h2>
        <p class="section-subtitle">Fill in the details below and we'll get back to you with the best flight options</p>
      </div>
      
      <div class="booking-form-wrapper">
        <form @submit.prevent="submitForm" class="flight-booking-form">
          <!-- Trip Type Selection -->
          <div class="form-section">
            <h3 class="section-label">Trip Type</h3>
            <div class="trip-type-selector">
              <label 
                class="trip-option" 
                :class="{ active: form.tripType === 'one-way' }"
                @click="form.tripType = 'one-way'"
              >
                <input 
                  type="radio" 
                  name="tripType" 
                  value="one-way" 
                  v-model="form.tripType"
                  required
                />
                <div class="trip-option-content">
                  <i class="trip-icon fas fa-arrow-right"></i>
                  <span class="trip-label">One Way</span>
                </div>
              </label>
              <label 
                class="trip-option" 
                :class="{ active: form.tripType === 'round-trip' }"
                @click="form.tripType = 'round-trip'"
              >
                <input 
                  type="radio" 
                  name="tripType" 
                  value="round-trip" 
                  v-model="form.tripType"
                />
                <div class="trip-option-content">
                  <i class="trip-icon fas fa-sync-alt"></i>
                  <span class="trip-label">Round Trip</span>
                </div>
              </label>
            </div>
          </div>

          <!-- Flight Details -->
          <div class="form-section">
            <h3 class="section-label">Flight Details</h3>
            <div class="form-row form-row-compact">
              <div class="form-group">
                <label for="from">From *</label>
                <div class="input-wrapper">
                  <i class="input-icon fas fa-map-marker-alt"></i>
                  <select 
                    id="from" 
                    class="form-select" 
                    v-model="form.from" 
                    required
                  >
                    <option value="">Select departure city</option>
                    <option v-for="city in cities" :key="city.code" :value="city.name">
                      {{ city.name }} ({{ city.code }})
                    </option>
                  </select>
                </div>
              </div>
              
              <div class="form-group">
                <label for="to">To *</label>
                <div class="input-wrapper">
                  <i class="input-icon fas fa-plane"></i>
                  <select 
                    id="to" 
                    class="form-select" 
                    v-model="form.to" 
                    required
                  >
                    <option value="">Select destination</option>
                    <option v-for="city in cities" :key="city.code" :value="city.name">
                      {{ city.name }} ({{ city.code }})
                    </option>
                  </select>
                </div>
              </div>
              
              <div class="form-group">
                <label for="departureDate">Departure Date *</label>
                <div class="input-wrapper">
                  <i class="input-icon fas fa-calendar-alt"></i>
                  <input 
                    id="departureDate" 
                    type="date" 
                    class="form-input" 
                    v-model="form.departureDate" 
                    :min="minDate"
                    required
                  />
                </div>
              </div>
              
              <div class="form-group" v-if="form.tripType === 'round-trip'">
                <label for="returnDate">Return Date *</label>
                <div class="input-wrapper">
                  <i class="input-icon fas fa-calendar-alt"></i>
                  <input 
                    id="returnDate" 
                    type="date" 
                    class="form-input" 
                    v-model="form.returnDate" 
                    :min="form.departureDate || minDate"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          
          <!-- Passengers & Class -->
          <div class="form-section">
            <h3 class="section-label">Passengers & Class</h3>
            <div class="form-row form-row-compact">
              <div class="form-group">
                <label for="adults">
                  <i class="fas fa-user"></i>
                  Adults (11+) *
                </label>
                <div class="input-wrapper">
                  <i class="input-icon fas fa-user"></i>
                  <select 
                    id="adults" 
                    class="form-select" 
                    v-model="form.adults" 
                    required
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </select>
                </div>
                <span class="field-note">Full price</span>
              </div>
              
              <div class="form-group">
                <label for="children">
                  <i class="fas fa-users"></i>
                  Children (2-11) *
                </label>
                <div class="input-wrapper">
                  <i class="input-icon fas fa-users"></i>
                  <select 
                    id="children" 
                    class="form-select" 
                    v-model="form.children" 
                    required
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
                <span class="field-note">Seat with discount</span>
              </div>
              
              <div class="form-group">
                <label for="infants">
                  <i class="fas fa-baby"></i>
                  Infants (0-2) *
                </label>
                <div class="input-wrapper">
                  <i class="input-icon fas fa-baby"></i>
                  <select 
                    id="infants" 
                    class="form-select" 
                    v-model="form.infants" 
                    required
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <span class="field-note">No seat</span>
              </div>
              
              <div class="form-group">
                <label for="class">
                  <i class="fas fa-couch"></i>
                  Class *
                </label>
                <div class="input-wrapper">
                  <i class="input-icon fas fa-couch"></i>
                  <select 
                    id="class" 
                    class="form-select" 
                    v-model="form.class" 
                    required
                  >
                    <option value="Economy">Economy</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business">Business</option>
                    <option value="First Class">First Class</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Passenger Information -->
          <div class="form-section">
            <h3 class="section-label">Passenger Information</h3>
            <div class="form-row form-row-compact">
              <div class="form-group">
                <label for="firstName">First Name *</label>
                <div class="input-wrapper">
                  <i class="input-icon fas fa-user"></i>
                  <input 
                    id="firstName" 
                    type="text" 
                    class="form-input" 
                    v-model="form.firstName" 
                    placeholder="Enter first name"
                    required
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label for="lastName">Last Name *</label>
                <div class="input-wrapper">
                  <i class="input-icon fas fa-user"></i>
                  <input 
                    id="lastName" 
                    type="text" 
                    class="form-input" 
                    v-model="form.lastName" 
                    placeholder="Enter last name"
                    required
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label for="email">Email *</label>
                <div class="input-wrapper">
                  <i class="input-icon fas fa-envelope"></i>
                  <input 
                    id="email" 
                    type="email" 
                    class="form-input" 
                    v-model="form.email" 
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label for="phone">Phone</label>
                <div class="input-wrapper">
                  <i class="input-icon fas fa-phone"></i>
                  <input 
                    id="phone" 
                    type="tel" 
                    class="form-input" 
                    v-model="form.phone" 
                    @input="formatPhoneNumber"
                    placeholder="+265 9 1234 5678"
                    maxlength="18"
                  />
                </div>
              </div>
            </div>
            
            <div class="form-group form-group-full">
              <label for="notes">Additional Notes (Optional)</label>
              <div class="input-wrapper">
                <textarea 
                  id="notes" 
                  class="form-input form-textarea" 
                  v-model="form.notes" 
                  rows="3"
                  placeholder="Any special requests or requirements..."
                ></textarea>
              </div>
            </div>
          </div>
          
          <div class="form-footer">
            <button 
              type="submit" 
              class="btn-submit" 
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting" class="btn-content">
                Request Quotation
                <i class="fas fa-arrow-right"></i>
              </span>
              <span v-else class="btn-content">
                <i class="fas fa-spinner fa-spin"></i>
                Sending...
              </span>
            </button>
            <p class="privacy-note">
              <i class="fas fa-info-circle"></i>
              By submitting, you agree to our terms. We'll contact you shortly.
            </p>
          </div>
          
          <transition name="message">
            <div v-if="submitMessage" :class="['submit-message', submitMessageType]">
              <i v-if="submitMessageType === 'success'" class="fas fa-check-circle"></i>
              <i v-else class="fas fa-times-circle"></i>
              <span>{{ submitMessage }}</span>
            </div>
          </transition>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  name: 'FlightBookingForm',
  data() {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    
    return {
      form: {
        tripType: 'one-way',
        from: '',
        to: '',
        departureDate: '',
        returnDate: '',
        adults: '1',
        children: '0',
        infants: '0',
        class: 'Economy',
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+265',
        phone: '',
        notes: ''
      },
      cities: [
        { name: 'Dar es Salaam', code: 'DAR' },
        { name: 'Tunis', code: 'TUN' },
        { name: 'Algiers', code: 'ALG' },
        { name: 'Kigali', code: 'KGL' },
        { name: 'Dakar', code: 'DKR' },
        { name: 'Abidjan', code: 'ABJ' },
        { name: 'Kinshasa', code: 'FIH' },
        { name: 'Luanda', code: 'LAD' },
        { name: 'Khartoum', code: 'KRT' },
        { name: 'Durban', code: 'DUR' },
        { name: 'New York', code: 'NYC' },
        { name: 'Los Angeles', code: 'LAX' },
        { name: 'Chicago', code: 'ORD' },
        { name: 'Miami', code: 'MIA' },
        { name: 'San Francisco', code: 'SFO' },
        { name: 'London', code: 'LHR' },
        { name: 'Paris', code: 'CDG' },
        { name: 'Tokyo', code: 'NRT' },
        { name: 'Dubai', code: 'DXB' },
        { name: 'Cairo', code: 'CAI' },
        { name: 'Johannesburg', code: 'JNB' },
        { name: 'Cape Town', code: 'CPT' },
        { name: 'Lagos', code: 'LOS' },
        { name: 'Nairobi', code: 'NBO' },
        { name: 'Casablanca', code: 'CMN' },
        { name: 'Addis Ababa', code: 'ADD' },
        { name: 'Accra', code: 'ACC' },
        { name: 'Marrakech', code: 'RAK' }
      ],
      minDate: tomorrow.toISOString().split('T')[0],
      isSubmitting: false,
      submitMessage: '',
      submitMessageType: ''
    }
  },
  watch: {
    'form.tripType'(newValue) {
      if (newValue === 'one-way') {
        this.form.returnDate = ''
      }
    }
  },
  methods: {
    async submitForm() {
      if (this.form.from === this.form.to) {
        this.showMessage('Departure and destination cannot be the same', 'error')
        return
      }
      
      if (parseInt(this.form.adults) === 0 && parseInt(this.form.children) === 0 && parseInt(this.form.infants) === 0) {
        this.showMessage('Please select at least one passenger', 'error')
        return
      }
      
      if (parseInt(this.form.adults) === 0 && (parseInt(this.form.children) > 0 || parseInt(this.form.infants) > 0)) {
        this.showMessage('At least one adult (11+) is required when traveling with children or infants', 'error')
        return
      }
      
      if (this.form.tripType === 'round-trip' && !this.form.returnDate) {
        this.showMessage('Return date is required for round trip flights', 'error')
        return
      }
      
      this.isSubmitting = true
      this.submitMessage = ''
      
      try {
        // EmailJS configuration
        // Note: You'll need to set up EmailJS account and replace these with your own credentials
        // Get from environment variables or use default fallback
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
        
        // Calculate total passengers
        const totalPassengers = parseInt(this.form.adults) + parseInt(this.form.children) + parseInt(this.form.infants)
        
        // Prepare email template parameters
        const templateParams = {
          trip_type: this.form.tripType === 'one-way' ? 'One Way' : 'Round Trip',
          from_city: this.form.from,
          to_city: this.form.to,
          departure_date: this.form.departureDate,
          return_date: this.form.tripType === 'round-trip' ? this.form.returnDate : 'N/A (One-way)',
          adults: this.form.adults,
          children: this.form.children,
          infants: this.form.infants,
          total_passengers: totalPassengers.toString(),
          class: this.form.class,
          passenger_first_name: this.form.firstName,
          passenger_last_name: this.form.lastName,
          passenger_name: `${this.form.firstName} ${this.form.lastName}`,
          passenger_email: this.form.email,
          passenger_phone: this.getFormattedPhone() || 'Not provided',
          notes: this.form.notes || 'None',
          to_email: 'info@awtravelandtours.com' // Your business email
        }
        
        // Send email using EmailJS
        // For now, we'll use a fallback method if EmailJS is not configured
        if (serviceId === 'YOUR_SERVICE_ID' || !serviceId) {
          // Fallback: Use mailto link or show success message
          this.sendEmailFallback(templateParams)
        } else {
          // Send email using EmailJS
          await emailjs.send(serviceId, templateId, templateParams, publicKey)
          this.showMessage('The request for quotation has been sent successfully.', 'success')
          this.resetForm()
        }
      } catch (error) {
        console.error('Error sending email:', error)
        this.showMessage('There was an error sending your request. Please try again or contact us directly.', 'error')
      } finally {
        this.isSubmitting = false
      }
    },
    
    sendEmailFallback(templateParams) {
      // Create email body
      const subject = `Flight Quotation Request: ${templateParams.from_city} to ${templateParams.to_city}`
      const body = `
Flight Quotation Request Details:

Trip Type: ${templateParams.trip_type}
From: ${templateParams.from_city}
To: ${templateParams.to_city}
Departure Date: ${templateParams.departure_date}
Return Date: ${templateParams.return_date}

Passengers:
- Adults (11+): ${templateParams.adults} (Full price)
- Children (2-11): ${templateParams.children} (Seat with discount)
- Infants (0-2): ${templateParams.infants} (No seat)
Total Passengers: ${templateParams.total_passengers}

Class: ${templateParams.class}

Passenger Information:
First Name: ${templateParams.passenger_first_name}
Last Name: ${templateParams.passenger_last_name}
Full Name: ${templateParams.passenger_name}
Email: ${templateParams.passenger_email}
Phone: ${templateParams.passenger_phone}

Additional Notes: ${templateParams.notes}
      `.trim()
      
      // For demo purposes, we'll show a success message
      // In production, you would either:
      // 1. Set up EmailJS with your credentials
      // 2. Use a backend API to send emails
      // 3. Use mailto: link (less ideal)
      
      this.showMessage('The request for quotation has been sent successfully.', 'success')
      this.resetForm()
      
      // Optional: Uncomment to use mailto fallback
      // const mailtoLink = `mailto:${templateParams.to_email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      // window.location.href = mailtoLink
    },
    
    formatPhoneNumber(event) {
      let input = event.target.value
      // Remove all non-numeric characters except +
      let cleaned = input.replace(/[^\d+]/g, '')
      
      // If it starts with +, handle international format
      if (cleaned.startsWith('+')) {
        let digits = cleaned.substring(1)
        
        // Handle Malawian numbers: +265 X XXX XXX XXX
        if (digits.startsWith('265')) {
          let malawiDigits = digits.substring(3) // Remove country code
          if (malawiDigits.length === 0) {
            this.form.phone = '+265'
          } else if (malawiDigits.length <= 1) {
            this.form.phone = '+265 ' + malawiDigits
          } else if (malawiDigits.length <= 4) {
            this.form.phone = '+265 ' + malawiDigits.substring(0, 1) + ' ' + malawiDigits.substring(1)
          } else if (malawiDigits.length <= 7) {
            this.form.phone = '+265 ' + malawiDigits.substring(0, 1) + ' ' + malawiDigits.substring(1, 4) + ' ' + malawiDigits.substring(4)
          } else {
            this.form.phone = '+265 ' + malawiDigits.substring(0, 1) + ' ' + malawiDigits.substring(1, 4) + ' ' + malawiDigits.substring(4, 7) + ' ' + malawiDigits.substring(7, 10)
          }
        } else if (digits.startsWith('1')) {
          // Handle US/Canada format: +1 (XXX) XXX-XXXX
          let usDigits = digits.substring(1)
          if (usDigits.length === 0) {
            this.form.phone = '+1'
          } else if (usDigits.length <= 3) {
            this.form.phone = '+1 (' + usDigits
          } else if (usDigits.length <= 6) {
            this.form.phone = '+1 (' + usDigits.substring(0, 3) + ') ' + usDigits.substring(3)
          } else {
            this.form.phone = '+1 (' + usDigits.substring(0, 3) + ') ' + usDigits.substring(3, 6) + '-' + usDigits.substring(6, 10)
          }
        } else {
          // Generic international format: +XXX XXX XXX XXXX
          if (digits.length === 0) {
            this.form.phone = '+'
          } else if (digits.length <= 3) {
            this.form.phone = '+' + digits
          } else if (digits.length <= 6) {
            this.form.phone = '+' + digits.substring(0, 3) + ' ' + digits.substring(3)
          } else if (digits.length <= 9) {
            this.form.phone = '+' + digits.substring(0, 3) + ' ' + digits.substring(3, 6) + ' ' + digits.substring(6)
          } else {
            this.form.phone = '+' + digits.substring(0, 3) + ' ' + digits.substring(3, 6) + ' ' + digits.substring(6, 9) + ' ' + digits.substring(9, 13)
          }
        }
      } else {
        // Handle local format (assume Malawian if no country code)
        // Format: 0X XXX XXX XXX or X XXX XXX XXX
        let digits = cleaned.replace(/\D/g, '')
        if (digits.length === 0) {
          this.form.phone = ''
        } else if (digits.length <= 1) {
          this.form.phone = digits
        } else if (digits.length <= 4) {
          this.form.phone = digits.substring(0, 1) + ' ' + digits.substring(1)
        } else if (digits.length <= 7) {
          this.form.phone = digits.substring(0, 1) + ' ' + digits.substring(1, 4) + ' ' + digits.substring(4)
        } else {
          this.form.phone = digits.substring(0, 1) + ' ' + digits.substring(1, 4) + ' ' + digits.substring(4, 7) + ' ' + digits.substring(7, 10)
        }
      }
    },
    
    getFormattedPhone() {
      if (!this.form.phone) return ''
      // Return the phone number as stored (already formatted)
      return this.form.phone
    },
    
    showMessage(message, type) {
      this.submitMessage = message
      this.submitMessageType = type
      setTimeout(() => {
        this.submitMessage = ''
      }, 5000)
    },
    
    resetForm() {
      this.form = {
        tripType: 'one-way',
        from: '',
        to: '',
        departureDate: '',
        returnDate: '',
        adults: '1',
        children: '0',
        infants: '0',
        class: 'Economy',
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+265',
        phone: '',
        notes: ''
      }
    }
  }
}
</script>

<style scoped>
.flight-booking-section {
  padding: 100px 0;
  background: #f5f7fa;
  position: relative;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
  position: relative;
}

.section-badge {
  display: inline-block;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  color: #667eea;
  padding: 10px 24px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
}

.section-title {
  font-family: 'Raleway', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.7;
  font-weight: 400;
}

.booking-form-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.flight-booking-form {
  background: white;
  padding: 50px;
  border-radius: 24px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
}

.form-section {
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #f0f0f0;
}

.form-section:last-of-type {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.section-label {
  font-family: 'Raleway', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-label::before {
  content: '';
  width: 4px;
  height: 20px;
  background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
  border-radius: 2px;
}

.trip-type-selector {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 0;
}

.trip-option {
  position: relative;
  cursor: pointer;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  padding: 20px;
  background: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.trip-option::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.trip-option:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
}

.trip-option.active {
  border-color: #667eea;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
}

.trip-option.active::before {
  opacity: 0.05;
}

.trip-option input[type="radio"] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.trip-option-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 1;
}

.trip-icon {
  color: #667eea;
  transition: all 0.3s ease;
  display: inline-block;
  font-size: 2rem;
}

.trip-option.active .trip-icon {
  color: #667eea;
  transform: scale(1.1);
}

.trip-label {
  font-weight: 600;
  color: #1a1a1a;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.trip-option.active .trip-label {
  color: #667eea;
}

.form-row-compact {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 0;
}

.form-group {
  margin-bottom: 0;
}

.form-group-full {
  grid-column: span 4;
  margin-top: 20px;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 10px;
  font-size: 0.9rem;
  letter-spacing: 0.01em;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 16px;
  z-index: 1;
  pointer-events: none;
  color: #9ca3af;
  display: flex;
  align-items: center;
  font-size: 1rem;
}

.form-group label i {
  margin-right: 6px;
  vertical-align: middle;
  font-size: 0.9rem;
}

.field-note {
  display: block;
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 6px;
  font-style: italic;
}


.form-input,
.form-select {
  width: 100%;
  padding: 14px 16px 14px 48px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: #f9fafb;
  color: #1a1a1a;
  font-family: inherit;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
  transform: translateY(-1px);
}

.form-input::placeholder {
  color: #9ca3af;
}

.form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23667eea' d='M8 11L3 6h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 45px;
}

.form-group-full .input-wrapper .input-icon {
  top: 16px;
  left: 16px;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  padding-left: 16px;
}

.form-group-full .input-wrapper .input-icon {
  display: none;
}

.form-group-full .form-textarea {
  padding-left: 16px;
}

.form-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #f0f0f0;
}

.privacy-note {
  color: #6b7280;
  font-size: 0.85rem;
  margin: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.privacy-note i {
  color: #9ca3af;
  font-size: 0.9rem;
}

.btn-submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
  color: white;
  padding: 16px 48px;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(0, 102, 204, 0.3);
  white-space: nowrap;
  width: 100%;
  max-width: 400px;
  position: relative;
  overflow: hidden;
}

.btn-submit::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.btn-submit:hover:not(:disabled)::before {
  left: 100%;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(0, 102, 204, 0.4);
}

.btn-submit:active:not(:disabled) {
  transform: translateY(-1px);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  z-index: 1;
}

.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.submit-message {
  margin-top: 24px;
  padding: 18px 24px;
  border-radius: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: slideDown 0.3s ease;
}

.submit-message i {
  flex-shrink: 0;
  font-size: 1.2rem;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.submit-message.success {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  color: #065f46;
  border: 2px solid #6ee7b7;
}

.submit-message.error {
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  color: #991b1b;
  border: 2px solid #fca5a5;
}

.message-enter-active,
.message-leave-active {
  transition: all 0.3s ease;
}

.message-enter-from,
.message-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 1200px) {
  .form-row-compact {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .form-group-full {
    grid-column: span 2;
  }
}

@media (max-width: 960px) {
  .flight-booking-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .flight-booking-form {
    padding: 35px;
    border-radius: 20px;
  }
  
  .form-row-compact {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .form-group-full {
    grid-column: span 1;
  }
  
  .trip-type-selector {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .flight-booking-section {
    padding: 40px 0;
  }
  
  .section-header {
    margin-bottom: 40px;
  }
  
  .section-badge {
    padding: 8px 20px;
    font-size: 0.85rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 0.95rem;
  }
  
  .flight-booking-form {
    padding: 24px;
    border-radius: 16px;
  }
  
  .form-section {
    margin-bottom: 30px;
    padding-bottom: 24px;
  }
  
  .form-input,
  .form-select {
    padding: 12px 14px 12px 44px;
    font-size: 0.9rem;
  }
  
  .input-icon {
    left: 14px;
    font-size: 1rem;
  }
  
  .btn-submit {
    padding: 14px 32px;
    font-size: 1rem;
  }
}
</style>

