<template>
  <section id="hero" class="hero">
    <div class="container hero-container">
      <div class="hero-content">
        <h3 class="reveal">Hello, I'm</h3>
        <h1 class="reveal">
          <span class="text-gradient">Heng Hoursan</span>
        </h1>
        <h2 class="reveal shimmer-text">
          Full-Stack Developer
        </h2>
        <p class="reveal">
          I turn complex web development challenges into scalable, high-performance digital solutions. 
          Grounded in Clean Architecture, I build modular full-stack web applications, real-time engines, 
          and secure APIs with robust access controls (RBAC).
        </p>
        <div class="hero-btns reveal">
          <NuxtLink to="#projects" class="btn btn-primary">View My Work</NuxtLink>
          <NuxtLink to="#contact" class="btn btn-outline">Let's Talk</NuxtLink>
        </div>
      </div>
      <div class="hero-visual reveal">
        <div class="blob-container">
          <div class="blob"></div>
          <div class="blob2"></div>
        </div>
        <div class="profile-frame glass">
          <img src="../assets/profile.png" alt="Heng Hoursan" class="profile-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useScrollReveal();
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 8rem;
  position: relative;
  overflow: hidden;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
}

h3 {
  color: var(--primary-color);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

h1 {
  font-size: 5.5rem;
  line-height: 1.1;
  margin-bottom: 1rem;
  letter-spacing: -2px;
}

h2 {
  font-size: 3rem;
  text-align: left;
  margin-bottom: 2rem;
  line-height: 1.2;
}

p {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 3.5rem;
  font-weight: 300;
}

.hero-btns {
  display: flex;
  gap: 1.5rem;
}

.btn-outline {
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  background: var(--card-bg);
}

.btn-outline:hover {
  background: var(--card-hover-bg);
  transform: translateY(-2px);
}

.hero-visual {
  position: relative;
}

.blob-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.blob {
  width: 500px;
  height: 500px;
  background: var(--primary-color);
  filter: blur(100px);
  border-radius: 50%;
  opacity: 0.25;
  animation: float 12s infinite alternate;
}

.blob2 {
  width: 400px;
  height: 400px;
  background: var(--secondary-color);
  filter: blur(80px);
  border-radius: 50%;
  opacity: 0.15;
  position: absolute;
  top: -50px;
  right: -50px;
  animation: float 10s infinite alternate-reverse;
}

.profile-frame {
  padding: 1rem;
  background: var(--surface-color);
  border: 1px solid var(--glass-border);
  border-radius: 2.5rem;
  max-width: 450px;
  margin: 0 auto;
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
  animation: float 6s ease-in-out infinite, pulse 4s ease-in-out infinite;
}

.profile-img {
  width: 100%;
  height: auto;
  border-radius: 2rem;
  display: block;
  transition: var(--transition-smooth);
}

.profile-frame:hover .profile-img {
  transform: scale(1.05);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
}

@keyframes float {
  from { transform: translate(0, 0) scale(1); }
  to { transform: translate(20px, 30px) scale(1.1); }
}

@media (max-width: 992px) {
  .hero {
    min-height: auto;
    padding-top: 10rem;
    padding-bottom: 5rem;
    display: flex;
    align-items: flex-start;
  }

  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  h1 { 
    font-size: 3.2rem; 
    line-height: 1.1;
    letter-spacing: -1px;
  }
  
  h2 { 
    font-size: 2rem;
    text-align: center; 
    margin-bottom: 1.5rem;
  }

  p { 
    font-size: 1.1rem;
    margin: 0 auto 2.5rem; 
  }

  .hero-btns { 
    justify-content: center; 
  }

  .hero-visual { 
    margin-top: 3rem; 
  }
}
</style>
