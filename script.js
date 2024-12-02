document.addEventListener('DOMContentLoaded', function () {
  // Image loading optimization
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  const gridItems = document.querySelectorAll('.grid__item');

  // Create intersection observer for lazy loading
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.src; // Trigger load
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach(img => img.src = img.src);
  }

  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';

  // Add animation on scroll for grid items
  const fadeInOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  // Apply initial styles and observe grid items
  gridItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    fadeInOnScroll.observe(item);
  });

  // Section 1 image effects (existing code)
  const images = document.querySelectorAll('.image-gallery__image');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  images.forEach(image => {
    image.style.opacity = '0';
    image.style.transform = 'translateY(20px)';
    image.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(image);
  });
}); 