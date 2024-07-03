document
  .querySelector("header .navbar .toggle i")
  .addEventListener("click", (e) => {
    hideNavLink("show");
  });

document
  .querySelector("header .navbar .navLink .toggle")
  .addEventListener("click", (e) => {
    hideNavLink("hidden");
  });

const hideNavLink = (condition) => {
  const result =
    condition === "show"
      ? document.querySelector("header .navbar .navLink").classList.add("aktif")
      : document
          .querySelector("header .navbar .navLink")
          .classList.remove("aktif");
};
