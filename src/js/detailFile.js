const btnOverfiewDownload = document.querySelectorAll(
  "main .summary .detailInformation .wrap1 .buttons button"
);

btnOverfiewDownload.forEach((e) => {
  let dataValue = e.dataset.value;

  e.addEventListener("click", (e) => {
    const summarySection = document.querySelector("main .summary");

    if (dataValue == "Overview") {
        summarySection.querySelector(".detailInformation .overfiew").style.display = "flex";
        summarySection.querySelector(".detailInformation .confcreator").style.display = "none";
    } else {
        summarySection.querySelector(".detailInformation .overfiew").style.display = "none";
        summarySection.querySelector(".detailInformation .confcreator").style.display = "flex";
    }
  });
});
