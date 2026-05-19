<template>
  <div class="app-wrapper">
    <div class="bg-glow"></div>
    <Navbar />
    <main>
      <slot />
    </main>
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} Heng Hoursan. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
.app-wrapper {
  position: relative;
  min-height: 100vh;
}

.bg-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% -20%, rgba(255, 0, 76, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255, 128, 0, 0.15) 0%, transparent 40%),
              radial-gradient(circle at 10% 40%, rgba(255, 0, 76, 0.1) 0%, transparent 30%);
  pointer-events: none;
  z-index: -1;
}

.footer {
  padding: 3rem 0;
  text-align: center;
  border-top: 1px solid var(--glass-border);
  color: var(--text-secondary);
  font-size: 0.9rem;
}

main {
  scroll-behavior: smooth;
}
</style>
