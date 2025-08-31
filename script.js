const skills = document.querySelectorAll('.skill');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  skills.forEach((skill, i) => {
    const boxTop = skill.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      setTimeout(() => skill.classList.add('show'), i * 150); // staggered animation
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
