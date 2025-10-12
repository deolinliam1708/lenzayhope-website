    // Function to create particles
  function createParticles() {
        const numParticles = 100; /* Number of particles*/
        const particleContainer = document.getElementById('particles-container');
    
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Set random size and position for each particle
           const size = Math.random() * 5 + 2;
           const positionX = Math.random() * window.innerWidth;
           const positionY = window.innerHeight + Math.random() *100; // Random Y position within entire page
           const duration = Math.random() * 10 + 5;
           const delay = Math.random() * 5;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${positionX}px`;
            particle.style.animationDuration = `${duration}s`; // Randomize animation duration
            particle.style.top = `${positionY}px`;
            particle.style.animationDelay = `${delay}s`;
            particleContainer.appendChild(particle);
        }
    }
    
    // Initialize particles when the page loads
    window.onload = function() {
        createParticles();
    }

    