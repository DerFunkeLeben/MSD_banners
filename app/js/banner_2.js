import Animator from "./utils/animator";

const banner2 = () => {
  const container = document.querySelector(".container");
  const containerAnimator = new Animator(container);
  containerAnimator.set(0);
  setTimeout(() => containerAnimator.set(1), 2500);
  setTimeout(() => containerAnimator.set(2), 5000);

  container.addEventListener("click", (e) => {
    const { state, theme } = e.target.dataset;
    state && containerAnimator.set(state);
    theme && container.classList.add(theme);
  });
};

banner2();
