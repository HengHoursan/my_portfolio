<template>
  <nav :class="{ 'scrolled': isScrolled }">
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>
    <div class="container nav-container">
      <NuxtLink to="#hero" class="logo">Heng<span>Hoursan</span></NuxtLink>
      
      <!-- Desktop Navigation Links -->
      <ul class="nav-links">
        <li><NuxtLink to="#hero" :class="{ 'active': activeSection === 'hero' }">Home</NuxtLink></li>
        <li><NuxtLink to="#skills" :class="{ 'active': activeSection === 'skills' }">Skills</NuxtLink></li>
        <li><NuxtLink to="#projects" :class="{ 'active': activeSection === 'projects' }">Projects</NuxtLink></li>
        <li><NuxtLink to="#contact" :class="{ 'active': activeSection === 'contact' }">Hire Me</NuxtLink></li>
      </ul>

      <!-- Theme Toggler & Mobile Hamburger Menu -->
      <div class="nav-actions">
        <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle Theme">
          <Icon :name="isLightMode ? 'lucide:moon' : 'lucide:sun'" class="theme-icon" />
        </button>

        <button 
          class="hamburger" 
          :class="{ 'is-active': isMobileMenuOpen }" 
          @click="toggleMobileMenu"
          aria-label="Toggle Menu"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div class="mobile-menu" :class="{ 'is-open': isMobileMenuOpen }">
      <ul class="mobile-nav-links">
        <li><NuxtLink to="#hero" :class="{ 'active': activeSection === 'hero' }" @click="closeMobileMenu">Home</NuxtLink></li>
        <li><NuxtLink to="#skills" :class="{ 'active': activeSection === 'skills' }" @click="closeMobileMenu">Skills</NuxtLink></li>
        <li><NuxtLink to="#projects" :class="{ 'active': activeSection === 'projects' }" @click="closeMobileMenu">Projects</NuxtLink></li>
        <li><NuxtLink to="#contact" :class="{ 'active': activeSection === 'contact' }" @click="closeMobileMenu">Hire Me</NuxtLink></li>
        <li class="mobile-theme-item">
          <button class="mobile-theme-toggle" @click="toggleTheme" aria-label="Toggle Theme">
            <Icon :name="isLightMode ? 'lucide:moon' : 'lucide:sun'" class="mobile-theme-icon" />
            <span>{{ isLightMode ? 'Dark Mode' : 'Light Mode' }}</span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const scrollProgress = ref(0);
const isMobileMenuOpen = ref(false);
const activeSection = ref('hero');
const isLightMode = ref(false);

const toggleTheme = () => {
  isLightMode.value = !isLightMode.value;
  if (isLightMode.value) {
    document.documentElement.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark');
  }
};

let sectionObserver;

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  
  const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = (window.scrollY / totalScroll) * 100;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  
  // Initialize theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    isLightMode.value = true;
    document.documentElement.classList.add('light-mode');
  } else if (savedTheme === 'dark') {
    isLightMode.value = false;
    document.documentElement.classList.remove('light-mode');
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    isLightMode.value = !prefersDark;
    if (!prefersDark) {
      document.documentElement.classList.add('light-mode');
    }
  }
  
  // High-performance scroll tracking for active link styling
  const sections = document.querySelectorAll('section');
  sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, { 
    rootMargin: '-30% 0px -60% 0px' // Fires when the section occupies a good chunk of the viewport
  });
  
  sections.forEach(section => sectionObserver.observe(section));
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (sectionObserver) {
    sectionObserver.disconnect();
  }
});
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: var(--transition-smooth);
  padding: 2rem 0; /* Increased padding */
}

nav.scrolled {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  padding: 1.2rem 0; /* Slightly larger scrolled state */
  border-bottom: 1px solid var(--glass-border);
}

.scroll-progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  transition: width 0.1s ease;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px; /* Increased max-width for breathability */
  margin: 0 auto;
  padding: 0 2rem;
}

.logo {
  font-size: 2.2rem; /* Increased font size */
  font-weight: 800;
  text-decoration: none;
  color: var(--text-primary);
  letter-spacing: -1.5px;
}

.logo span {
  color: var(--primary-color);
}

.nav-links {
  display: flex;
  gap: 3.5rem; /* Increased gap */
  list-style: none;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 600; /* Bolder weight */
  font-size: 1.1rem; /* Increased font size */
  transition: var(--transition-smooth);
  padding: 0.5rem 0;
  position: relative;
  outline: none;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-radius: 2px;
}

.nav-links a:hover {
  color: var(--text-primary);
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

.nav-links a.active {
  color: var(--text-primary);
}

.nav-links a:focus,
.nav-links a:focus-visible {
  outline: none;
  box-shadow: none;
}

/* Hamburger Button styles */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1100;
  padding: 0;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.theme-toggle {
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 1.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  transform: scale(1.1) rotate(15deg);
  color: var(--primary-color);
  background: var(--surface-color);
}

.hamburger .bar {
  width: 100%;
  height: 3px;
  background-color: var(--text-primary);
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.hamburger.is-active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.is-active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active .bar:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* Mobile Menu styles */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background: var(--bg-color);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
  z-index: 1050;
  opacity: 0;
  visibility: hidden;
}

.mobile-menu.is-open {
  right: 0;
  opacity: 1;
  visibility: visible;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  list-style: none;
}

.mobile-nav-links a {
  text-decoration: none;
  color: var(--text-primary);
  font-size: 1.8rem;
  font-weight: 700;
  font-family: 'Outfit', sans-serif;
  transition: var(--transition-smooth);
}

.mobile-nav-links a:hover,
.mobile-nav-links a:not(.nav-btn).active {
  color: var(--primary-color);
}

.mobile-theme-item {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.mobile-theme-toggle {
  background: var(--surface-color);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  padding: 0.8rem 2.2rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-smooth);
}

.mobile-theme-toggle:hover {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
  box-shadow: 0 10px 20px rgba(255, 0, 76, 0.25);
}

.mobile-theme-icon {
  font-size: 1.4rem;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .theme-toggle {
    display: none;
  }
}
</style>
