<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="reveal">
        Technical <span class="text-gradient">Proficiency</span>
      </h2>
      <div class="marquee-container reveal">
        <div class="marquee-content">
          <!-- Render twice for infinite scrolling effect -->
          <div
            v-for="(skill, index) in allSkills"
            :key="'first-' + index"
            class="marquee-item"
            :title="skill.name"
          >
            <Icon :name="skill.icon" class="marquee-icon" />
          </div>
          <div
            v-for="(skill, index) in allSkills"
            :key="'second-' + index"
            class="marquee-item"
            :title="skill.name"
          >
            <Icon :name="skill.icon" class="marquee-icon" />
          </div>
        </div>
      </div>
    </div>
    
    <div class="container details-container">
      <div class="skills-rows">
        <div
          v-for="(category, index) in skillCategories"
          :key="category.title"
          class="skill-row reveal"
          :style="{ transitionDelay: index * 100 + 'ms' }"
        >
          <div class="row-header">
            <h3>{{ category.title }}</h3>
          </div>
          <div class="row-items">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="skill-badge"
            >
              <Icon :name="skill.icon" class="skill-icon" />
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
useScrollReveal();

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Vue 3", icon: "logos:vue" },
      { name: "React", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express", icon: "devicon:express" },
      { name: "NestJS", icon: "logos:nestjs" },
      { name: "Go", icon: "logos:go" },
      { name: "Laravel", icon: "logos:laravel" },
      { name: "Java", icon: "logos:java" },
      { name: "Spring Boot", icon: "logos:spring-icon" },
    ],
  },
  {
    title: "Database & Storage",
    skills: [
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "MySQL", icon: "devicon:mysql" },
      { name: "PostgreSQL", icon: "devicon:postgresql" },
      { name: "Redis", icon: "devicon:redis" },
      { name: "TypeORM", icon: "logos:typeorm" },
      { name: "Firebase", icon: "devicon:firebase" },
    ],
  },
  {
    title: "Integrations & Arch",
    skills: [
      { name: "OAuth2", icon: "logos:google-icon" },
      { name: "Telegram API", icon: "logos:telegram" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "RESTful APIs", icon: "carbon:api" },
      { name: "Socket.io", icon: "logos:socket-io" },
      { name: "JWT", icon: "logos:jwt-icon" },
      { name: "Swagger", icon: "logos:swagger" },
      { name: "Postman", icon: "logos:postman-icon" },
    ],
  },
];

const allSkills = computed(() => {
  return skillCategories.flatMap(category => category.skills);
});
</script>

<style scoped>
.marquee-container {
  overflow: hidden;
  padding: 3rem 0;
  margin-top: 3rem;
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
}

/* Gradient fade at the edges */
.marquee-container::before,
.marquee-container::after {
  content: "";
  position: absolute;
  top: 0;
  width: 150px;
  height: 100%;
  z-index: 2;
}

.marquee-container::before {
  left: 0;
  background: linear-gradient(to right, var(--bg-color) 0%, transparent 100%);
}

.marquee-container::after {
  right: 0;
  background: linear-gradient(to left, var(--bg-color) 0%, transparent 100%);
}

.marquee-content {
  display: flex;
  width: max-content;
  animation: marquee 30s linear infinite;
}

.marquee-content:hover {
  animation-play-state: paused;
}

.marquee-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  margin: 0 1.5rem;
  background: var(--card-bg);
  border-radius: 20px;
  border: 1px solid var(--glass-border);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}

.marquee-icon {
  font-size: 4rem;
  filter: grayscale(0.5);
  transition: all 0.3s ease;
}

.marquee-item:hover {
  transform: translateY(-15px) scale(1.1);
  background: var(--card-hover-bg);
  border-color: var(--primary-color);
  box-shadow: 0 15px 30px rgba(255, 0, 76, 0.2);
}

.marquee-item:hover .marquee-icon {
  filter: grayscale(0);
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.details-container {
  margin-top: 5rem;
}

.skills-rows {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skill-row {
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--glass-border);
  gap: 3rem;
}

.skill-row:last-child {
  border-bottom: none;
}

.row-header {
  min-width: 200px;
  flex-shrink: 0;
}

.row-header h3 {
  color: var(--secondary-color);
  font-size: 1.3rem;
  font-weight: 700;
}

.row-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  flex-grow: 1;
}

.skill-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--card-bg);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  border: 1px solid var(--glass-border);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.skill-icon {
  font-size: 1.2rem;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.skill-badge:hover {
  background: var(--card-hover-bg);
  border-color: var(--primary-color);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 0, 76, 0.15);
}

.skill-badge:hover .skill-icon {
  transform: scale(1.2) rotate(5deg);
}

@media (max-width: 768px) {
  .skill-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 0;
  }

  .row-header {
    min-width: auto;
  }
}
</style>
