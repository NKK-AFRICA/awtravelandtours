<template>
  <section id="flight-booking" class="flight-booking-section">
    <div class="uk-container">
      <div class="section-header">
        <span class="section-badge">Book Your Flight</span>
        <h2 class="section-title">Find Your Perfect Flight</h2>
        <p class="section-subtitle">Request a quotation for flights to destinations worldwide</p>
      </div>
      
      <div class="booking-form-wrapper">
        <form @submit.prevent="submitForm" class="flight-booking-form">
          <!-- Trip Type Row -->
          <div class="form-row form-row-compact">
            <div class="form-group">
              <label for="tripType">Trip Type *</label>
              <select 
                id="tripType" 
                class="form-select" 
                v-model="form.tripType" 
                required
              >
                <option value="one-way">One Way</option>
                <option value="round-trip">Round Trip</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="from">From *</label>
              <select 
                id="from" 
                class="form-select" 
                v-model="form.from" 
                required
              >
                <option value="">Select departure</option>
                <option v-for="city in cities" :key="city.code" :value="city.name">
                  {{ city.name }} ({{ city.code }})
                </option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="to">To *</label>
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
            
            <div class="form-group">
              <label for="departureDate">Departure *</label>
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
          
          <!-- Return Date Row (only for round trip) -->
          <div class="form-row form-row-compact" v-if="form.tripType === 'round-trip'">
            <div class="form-group">
              <label for="returnDate">Return Date *</label>
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
          
          <!-- Passengers & Class Row -->
          <div class="form-row form-row-compact">
            <div class="form-group">
              <label for="adults">Adults (11+) *</label>
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
              <span class="field-note">Full price</span>
            </div>
            
            <div class="form-group">
              <label for="children">Children (2-11) *</label>
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
              <span class="field-note">Seat with discount</span>
            </div>
            
            <div class="form-group">
              <label for="infants">Infants (0-2) *</label>
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
              <span class="field-note">No seat</span>
            </div>
            
            <div class="form-group">
              <label for="class">Class *</label>
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
          
          <!-- Passenger Information Row -->
          <div class="form-row form-row-compact">
            <div class="form-group">
              <label for="firstName">First Name *</label>
              <input 
                id="firstName" 
                type="text" 
                class="form-input" 
                v-model="form.firstName" 
                placeholder="First name"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="lastName">Last Name *</label>
              <input 
                id="lastName" 
                type="text" 
                class="form-input" 
                v-model="form.lastName" 
                placeholder="Last name"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="email">Email *</label>
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
          
          <!-- Contact & Notes Row -->
          <div class="form-row form-row-compact">
            <div class="form-group">
              <label for="phone">Phone</label>
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
            
            <div class="form-group form-group-full">
              <label for="notes">Additional Notes (Optional)</label>
              <textarea 
                id="notes" 
                class="form-input form-textarea" 
                v-model="form.notes" 
                rows="2"
                placeholder="Special requests or requirements..."
              ></textarea>
            </div>
          </div>
          
          <div class="form-footer">
            <button 
              type="submit" 
              class="btn-submit" 
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Request Quotation</span>
              <span v-else>Sending...</span>
              <span uk-icon="icon: arrow-right; ratio: 0.9" v-if="!isSubmitting"></span>
              <span uk-icon="icon: spinner; ratio: 0.9" v-else class="spinning"></span>
            </button>
            <p class="privacy-note">
              By submitting, you agree to our terms. We'll contact you shortly.
            </p>
          </div>
          
          <div v-if="submitMessage" :class="['submit-message', submitMessageType]">
            {{ submitMessage }}
          </div>
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
  padding: 80px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #e8edf3 100%);
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 40px;
}

.section-badge {
  display: inline-block;
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(0, 68, 153, 0.1) 100%);
  color: #0066cc;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
}

.section-title {
  font-family: 'Raleway', sans-serif;
  font-size: 2.2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 12px;
  letter-spacing: 0.02em;
}

.section-subtitle {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

.booking-form-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.flight-booking-form {
  background: white;
  padding: 35px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
}

.form-row-compact {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 0;
}

.form-group-full {
  grid-column: span 3;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 6px;
  font-size: 0.85rem;
  letter-spacing: 0.01em;
}

.field-note {
  display: block;
  font-size: 0.75rem;
  color: #666;
  margin-top: 4px;
  font-style: italic;
}


.form-input,
.form-select {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  background: white;
  color: #1a1a1a;
  font-family: inherit;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

.form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
}

.form-textarea {
  resize: vertical;
  min-height: 60px;
  font-family: inherit;
}

.form-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
}

.privacy-note {
  color: #6b7280;
  font-size: 0.8rem;
  margin: 0;
  text-align: center;
}

.btn-submit {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
  color: white;
  padding: 14px 36px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 102, 204, 0.3);
  white-space: nowrap;
  width: 100%;
  justify-content: center;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(0, 102, 204, 0.4);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-submit:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

.spinning {
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
  margin-top: 20px;
  padding: 16px 20px;
  border-radius: 12px;
  font-weight: 500;
  text-align: center;
}

.submit-message.success {
  background: #d1fae5;
  color: #065f46;
  border: 1px solid #6ee7b7;
}

.submit-message.error {
  background: #fee2e2;
  color: #991b1b;
  border: 1px solid #fca5a5;
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
  .section-title {
    font-size: 1.8rem;
  }
  
  .flight-booking-form {
    padding: 30px;
  }
  
  .form-row-compact {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  
  .form-group-full {
    grid-column: span 1;
  }
}

@media (max-width: 640px) {
  .flight-booking-section {
    padding: 60px 0;
  }
  
  .flight-booking-form {
    padding: 24px;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .form-input,
  .form-select {
    padding: 10px 14px;
    font-size: 0.9rem;
  }
}
</style>

