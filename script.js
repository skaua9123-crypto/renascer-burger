const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 80, 260)}ms`;
  observer.observe(item);
});

document.querySelectorAll(".tap-feedback").forEach((element) => {
  const addPress = () => element.classList.add("is-pressed");
  const removePress = () => element.classList.remove("is-pressed");

  element.addEventListener("pointerdown", addPress);
  element.addEventListener("pointerup", removePress);
  element.addEventListener("pointerleave", removePress);
  element.addEventListener("pointercancel", removePress);
});
