const inputSearch = document.querySelector(
  "main .summary .searchs form input[type='search']"
);

inputSearch.addEventListener("focus", (e) => {
  e.target.parentElement.classList.add("active");
});
inputSearch.addEventListener("blur", (e) => {
  e.target.parentElement.classList.remove("active");
});
