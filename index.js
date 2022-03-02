console.log("Hello world");

const themeSwitch = document.querySelector("input");

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme");
});
