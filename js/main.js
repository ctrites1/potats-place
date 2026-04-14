const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateSparkle = () => {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    size: random(10, 20),
    style: {
      top: random(0, 100) + "%",
      left: random(0, 100) + "%",
      zIndex: 2,
    },
  };
};

function sparkleInstance(container, index) {
  const {
    size,
    style: { top, left },
    id,
  } = generateSparkle();
  const el = document.createElement("span");
  el.classList.add("sparkle");
  el.dataset.id = id;
  el.style.position = "absolute";
  el.style.top = top;
  el.style.left = left;
  el.style.width = size + "px";
  el.style.height = size + "px";
  el.style.zIndex = "2";
  el.style.pointerEvents = "none";
  el.style.setProperty("--i", index);
  el.style.animationDelay = random(0, 600) + "ms";
  container.appendChild(el);
  return el;
}

const container = document.querySelector(".sparkles-wrapper");
if (container) {
  container.style.position ||= "relative";
  for (let i = 0; i < 5; i++) sparkleInstance(container, i);
}
