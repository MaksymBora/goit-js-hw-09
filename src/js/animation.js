document.addEventListener('mousemove', e => {
  Object.assign(document.documentElement, {
    style: `
    --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
    --move-y: ${(e.clientY - window.innerWidth / 2) * -0.01}deg;
    `,
  });
});

// Sound

document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('#rain-sound');
  audio.play();
});
