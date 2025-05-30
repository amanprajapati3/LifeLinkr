let menuBar = document.getElementById("menu_bar");
let menu = document.getElementById("menu");
let isMenu = false;

menuBar.addEventListener("click", () => {
  isMenu = !isMenu;

  menuBar.src = isMenu ? "public/close.png" : "public/menu.png";

  if (isMenu) {
    menu.classList.add("show");
    menu.classList.remove("hidden");
  } else {
    menu.classList.remove("show");
    setTimeout(() => menu.classList.add("hidden"), 400); // Wait for animation to end
  }
});

let faqs = document.querySelectorAll(".faqs");

faqs.forEach((faq) => {
  let isOpen = false;

  faq.addEventListener("click", () => {
    const detail = faq.querySelector(".details");
    const arrow = faq.querySelector(".down_arrow");

    isOpen = !isOpen;

    if (isOpen) {
      detail.style.display = "block";
      arrow.style.transform = "rotate(180deg)";
    } else {
      detail.style.display = "none";
      arrow.style.transform = "rotate(0deg)";
    }
  });
});

