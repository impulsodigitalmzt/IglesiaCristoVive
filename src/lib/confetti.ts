import confetti from "canvas-confetti";

const brandColors = ["#ea4b21", "#d4af37", "#ffffff", "#22c55e", "#f5efe6"];

function fireDonationConfetti() {
  const duration = 2800;
  const end = Date.now() + duration;

  confetti({
    particleCount: 90,
    spread: 80,
    startVelocity: 42,
    origin: { y: 0.58 },
    colors: brandColors,
    disableForReducedMotion: true,
  });

  const frame = () => {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 58,
      origin: { x: 0, y: 0.55 },
      colors: brandColors,
      disableForReducedMotion: true,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 58,
      origin: { x: 1, y: 0.55 },
      colors: brandColors,
      disableForReducedMotion: true,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  frame();
}

export { fireDonationConfetti };
