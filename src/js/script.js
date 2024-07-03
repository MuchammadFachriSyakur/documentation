const btnOverfiewDownload = document.querySelectorAll(
  "main .summary .overfiewDownload"
);

btnOverfiewDownload.forEach((e) => {
  e.addEventListener("click", (e) => {
    const summarySection = document.querySelector("main .summary");
    summarySection.querySelector(".overfiew").style.display =
      e.target.getAttribute("data-value") === "Overfiew" ? "flex" : "none";
    summarySection.querySelector(".download").style.display =
      e.target.getAttribute("data-value") === "Overfiew" ? "none" : "flex";
  });
});
