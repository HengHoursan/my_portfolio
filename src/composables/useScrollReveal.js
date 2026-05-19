import { onMounted } from 'vue';

export const useScrollReveal = () => {
  onMounted(() => {
    setTimeout(() => {
      const reveals = document.querySelectorAll('.reveal');
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: stop observing once revealed
            // obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      reveals.forEach(reveal => observer.observe(reveal));
    }, 100);
  });
};
