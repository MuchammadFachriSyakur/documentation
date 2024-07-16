const button = document.querySelector(
  "main .information .buttons button.actif"
);
const closeForm = document.querySelector(".addLicense form .head .close");
const buttonAddLicense = document.querySelector(".addLicense form button");
const divAddLicense = document.querySelector(".addLicense");

button.addEventListener("click", (e) => {
  divAddLicense.style.display = "flex";
});

buttonAddLicense.addEventListener("click", (e) => {
  const allInput = document.querySelectorAll(".addLicense form label input");

  allInput.forEach((e) => {
    const messageError = e.parentElement.querySelector("p");
    if (e.type !== "password") {
      e.value == ""
        ? (messageError.style.display = "block")
        : (messageError.style.display = "none");
    }
  });
});

closeForm.addEventListener("click", (e) => {
  divAddLicense.style.display = "none";
});
