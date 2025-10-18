    const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      document.querySelector('.nav-menu').classList.toggle('active');
      console.log(`[${new Date().toISOString()}] Hamburger menu toggled`);
    });
  }