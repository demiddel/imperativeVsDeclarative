const btnOpenBanner = document.querySelector(".btn--action-open-dialog");
const btnCloseBanner = document.querySelector(".btn--action-close-dialog");
const dialog = document.querySelector(".dialog");

btnOpenBanner.addEventListener("click", () => {
  dialog.showModal();
});

btnCloseBanner.addEventListener("click", () => {
  dialog.close();
});
