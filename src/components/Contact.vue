<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="reveal">Get In <span class="text-gradient">Touch</span></h2>
      <div class="contact-wrapper glass reveal">
        <div class="contact-info">
          <h3>Let's collaborate!</h3>
          <p>
            I'm currently open for new opportunities and collaborations. Feel
            free to reach out!
          </p>
          <div class="info-items">
            <div class="info-item">
              <Icon name="lucide:map-pin" class="contact-icon" />
              <span>Battambang, Cambodia</span>
            </div>
            <div class="info-item">
              <Icon name="lucide:mail" class="contact-icon" />
              <a href="mailto:henghoursan030604@gmail.com" class="email-link">henghoursan030604@gmail.com</a>
            </div>
            <div class="info-item">
              <Icon name="lucide:phone" class="contact-icon" />
              <a href="tel:010773123" class="phone-link">010 773 123</a>
            </div>
          </div>
          <div class="social-links">
            <a
              href="https://github.com/HengHoursan"
              target="_blank"
              class="social-icon"
              title="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                ></path>
              </svg>
            </a>
            <a
              href="https://t.me/Hoursan030604"
              target="_blank"
              class="social-icon"
              title="Telegram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/heng-hoursan-96598a3b2"
              target="_blank"
              class="social-icon"
              title="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        <form class="contact-form" @submit.prevent>
          <div class="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div class="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div class="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
useScrollReveal();
</script>

<style scoped>
.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  padding: 4rem;
  margin-top: 4rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contact-info h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.contact-info p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
}

.contact-icon {
  font-size: 1.4rem;
  color: var(--primary-color);
}

.email-link,
.phone-link {
  color: inherit;
  text-decoration: none;
  transition: var(--transition-smooth);
}

.email-link:hover,
.phone-link:hover {
  color: var(--primary-color);
  text-shadow: 0 0 10px rgba(255, 0, 76, 0.3);
}

.social-links {
  display: flex;
  gap: 1.5rem;
  margin-top: auto; /* Push social links to bottom if space permits */
}

.social-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--surface-color);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-smooth);
  color: var(--text-primary);
}

.social-icon:hover {
  background: var(--primary-color);
  border-color: var(--primary-color);
  transform: translateY(-5px);
  color: white;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

input,
textarea {
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  color: white;
  font-family: inherit;
  transition: var(--transition-smooth);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  background: rgba(255, 0, 76, 0.05);
}

textarea {
  height: 150px;
  resize: none;
}

.submit-btn {
  width: 100%;
  justify-content: center;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 2rem;
  }

  .social-links {
    margin-top: 2rem;
  }
}
</style>
