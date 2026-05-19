<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="reveal">
        Featured <span class="text-gradient">Projects</span>
      </h2>
      <div class="projects-grid">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="project-card glass reveal"
          :style="{ transitionDelay: index * 100 + 'ms' }"
        >
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="tech-stack">
              <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{
                tech
              }}</span>
            </div>
            <div class="project-links">
              <template v-if="project.links">
                <a
                  v-for="link in project.links"
                  :key="link.url"
                  :href="link.url"
                  target="_blank"
                  class="github-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                  {{ link.label }}
                </a>
              </template>
              <template v-else>
                <a :href="project.github" target="_blank" class="github-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                  Source Code
                </a>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useScrollReveal();

const projects = [
  {
    title: "NestJS Stock POS",
    description:
      "Modularized, feature-driven POS API with RBAC, standardized DTOs, and path aliasing for maintainability.",
    tech: ["NestJS", "Vue 3", "TypeScript", "PostgreSQL"],
    github: "https://github.com/HengHoursan/stock-pos-api2",
  },
  {
    title: "Rental Management",
    description:
      "Comprehensive room rental management system designed to streamline booking and administration for property owners.",
    tech: ["Go", "Vue 3", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/HengHoursan/RentalRoom",
  },
  {
    title: "Movie Booking System",
    description:
      "Full-stack movie booking platform featuring a Vue.js frontend and Node.js backend. Includes real-time seat management and automated notifications.",
    tech: ["Node.js", "Vue 3", "Express", "Redis", "MongoDB", "Socket.io"],
    links: [
      {
        label: "Backend",
        url: "https://github.com/HengHoursan/Booking_System_Backend",
      },
      {
        label: "Frontend",
        url: "https://github.com/HengHoursan/Booking_System_Frontend",
      },
    ],
  },
  {
    title: "Book Management",
    description:
      "Decoupled catalog platform with a Laravel-based RESTful API and a modern React frontend for seamless handling.",
    tech: ["Laravel", "React", "Vite", "Tailwind CSS"],
    github: "https://github.com/HengHoursan/Book_Management_System",
  },
  {
    title: "Laptop MS",
    description:
      "Multi-framework inventory tracker implemented in both React and Vue 3, integrated with a Java Servlet backend.",
    tech: ["React", "Vue 3", "Java Servlet", "MySQL"],
    links: [
      {
        label: "React Version",
        url: "https://github.com/HengHoursan/LaptopMsUsingReact",
      },
      {
        label: "Vue Version",
        url: "https://github.com/HengHoursan/LaptopMsUsingVue",
      },
    ],
  },
  {
    title: "Bakong KHQR",
    description:
      "Inventory system integrated with Bakong KHQR for seamless digital payments in a MERN stack environment.",
    tech: ["MERN Stack", "Shadcn/UI", "Tailwind CSS", "API Integration"],
    github: "https://github.com/HengHoursan/Bakong_KhQr",
  },
  {
    title: "Role Management",
    description:
      "Dedicated RBAC system for managing user permissions, organizational departments, and secure authentication.",
    tech: ["Node.js", "Express", "React", "MongoDB"],
    github: "https://github.com/HengHoursan/manageRole",
  },
  {
    title: "Vue 3 Firebase CRUD",
    description:
      "A hands-on Vue 3 experiment integrating Firebase Firestore for real-time CRUD operations — built to explore reactive data binding and cloud-native database patterns.",
    tech: ["Vue 3", "Firebase", "Firestore"],
    github: "https://github.com/HengHoursan/VueCRUD",
  },
];
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.project-card {
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid var(--glass-border);
}

.project-card:hover {
  transform: translateY(-12px) scale(1.02);
  border-color: var(--primary-color);
  box-shadow: 0 20px 40px rgba(112, 0, 255, 0.2);
}

.project-content {
  padding: 2.5rem;
}

.project-card h3 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.project-card p {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 2rem;
  min-height: 3rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2rem;
}

.tech-tag {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-primary);
  background: var(--badge-bg);
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  border: 1px solid var(--glass-border);
  transition: var(--transition-smooth);
}

.project-card:hover .tech-tag {
  border-color: var(--primary-color);
  background: rgba(255, 0, 76, 0.1);
}

.project-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.github-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
  opacity: 0.8;
  transition: opacity 0.3s;
}

.github-link:hover {
  opacity: 1;
  color: var(--primary-color);
}

@media (max-width: 480px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
