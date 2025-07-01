let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};

window.onscroll = () => {
  menu.classList.remove("move");
  navbar.classList.remove("open-menu");
};
window.onload = () => {
  let today = new Date().toISOString.split("T")[0];
  document.getElementById("start-date").value = today;
  document.getElementById("return-date").value = new Date(
    Date.now() + 7 * 86400000
  ).toISOString.split("T")[0];
};

// scroll reveal animation
const animation = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: "400",
});

animation.reveal(".nav, .heading");
animation.reveal(".home-img img", { origin: "right", distance: "270px" });
animation.reveal(".input-form", { origin: "bottom" });
animation.reveal(".trend-box, .rental-box, .team-box, .t-box, .newsletter", {
  interval: 100,
});
