const moonWrapper = document.querySelector(".moon-wrapper");
const sunWrapper = document.querySelector(".sun-wrapper");
const root = document.documentElement;

moonWrapper.addEventListener("click", () => {
  root.setAttribute("data-theme", "dark");
  moonWrapper.style.display = "none";
  sunWrapper.style.display = "block";
  localStorage.setItem("theme", "dark");
});

sunWrapper.addEventListener("click", () => {
  root.setAttribute("data-theme", "light");
  sunWrapper.style.display = "none";
  moonWrapper.style.display = "block";
  localStorage.setItem("theme", "light");
});

// Restore on load
const saved = localStorage.getItem("theme") ?? "light";
root.setAttribute("data-theme", saved);
if (saved === "dark") {
  moonWrapper.style.display = "none";
  sunWrapper.style.display = "block";
}
