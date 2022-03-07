import Animator from "./utils/animator";

const banner3 = () => {
  const container = document.querySelector(".container");
  const containerAnimator = new Animator(container);
  containerAnimator.set(0);

  const stateHandler = () => {
    setTimeout(() => {
      containerAnimator.set(1);

      const interval = setInterval(() => {
        const currState = containerAnimator.stateIndex;
        if (currState < 4) {
          containerAnimator.set(currState + 1);
        } else clearInterval(interval);
      }, 5000);
    }, 3000);
  };

  stateHandler();
};

banner3();
