const parallaxLayers = document.querySelectorAll('.parallax-layer');

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  parallaxLayers.forEach((layer, index) => {
    const speed = (5 - index)*15;
    const x = (mouseX - window.innerWidth / 2) / speed;
    const y = (mouseY - window.innerHeight / 2) / speed;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});