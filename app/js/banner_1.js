import Animator from "./utils/animator";

const container = document.querySelector(".container");
const containerAnimator = new Animator(container);

class Timer {
  constructor() {
    this.timeDOM = document.querySelector(".st_1__time");
    this.ticking = null;
    this.seconds = 10;
  }

  set() {
    this.ticking = setInterval(() => {
      this.timeDOM.innerHTML = --this.seconds;
    }, 1000);

    setTimeout(this.stop, 10000);
  }

  stop() {
    clearInterval(this.ticking);
    setTimeout(() => containerAnimator.set(3), 1000);
  }
}

const banner1 = () => {
  const timer = new Timer();
  let viruses = document.querySelectorAll(".virus").length;

  containerAnimator.set(0);

  container.addEventListener("click", (e) => {
    const currState = containerAnimator.stateIndex;
    const { state, virus } = e.target.dataset;

    if (currState === "1") {
      containerAnimator.set(2);
      timer.set();
    }

    state && containerAnimator.set(state);
    if (virus && currState) {
      e.target.classList.add("killed");
      --viruses === 0 && timer.stop();
    }
  });
};

banner1();
