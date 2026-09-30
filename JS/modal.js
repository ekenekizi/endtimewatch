"use strict";
const readOnlineBtn = document.querySelector(".hero__cta--outline");

const closeModalBtn = document.querySelector(".modal__close-wrapper");
const closeDownloadModal = document.querySelectorAll(".close-icon-wrapper");

const modalOverlay = document.querySelector(".modal-overlay");
const modalWindow = document.querySelector(".modal");

const downloadOverlay = document.querySelector(".download-modal-overlay");
const downloadModal = document.querySelector(".download-modal");
const downloadBtn = document.querySelectorAll(".download-cta");

// download

function downloadPDF() {
  const link = document.createElement("a");
  link.href = "./assets/The-Trumpet-book.pdf";
  link.download = "The Trumpet book by Evangelist Edwin nwachukwu.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

downloadBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    downloadPDF();
  });
});

downloadBtn.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("modal__btn--filled")) {
      // console.log(e.target);
      hideModal();
    }
    downloadModal.classList.add("is-visible");
    downloadOverlay.classList.add("is-visible");
  }),
);

function showModal() {
  modalOverlay.classList.add("is-visible");
  modalWindow.classList.add("is-visible");
}

function hideModal() {
  modalOverlay.classList.remove("is-visible");
  modalWindow.classList.remove("is-visible");
}

readOnlineBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // toggleModal(remove);
  showModal();
});

closeModalBtn.addEventListener("click", function () {
  hideModal();
  // toggleModal(add);
});

closeDownloadModal.forEach((c) =>
  c.addEventListener("click", function () {
    downloadModal.classList.remove("is-visible");
    downloadOverlay.classList.remove("is-visible");
  }),
);

modalOverlay.addEventListener("click", function () {
  // toggleModal(add);
  hideModal();
});

////////////// zoom in and zoom out
const modal = document.querySelector(".modal");

let zoom = 1;

document.getElementById("zoom-in").addEventListener("click", () => {
  zoom = Math.min(1.6, zoom + 0.1);
  modal.style.setProperty("--zoom", zoom);
});

document.getElementById("zoom-out").addEventListener("click", () => {
  zoom = Math.max(0.8, zoom - 0.1);
  modal.style.setProperty("--zoom", zoom);
});

//pop up
const shareBtn = document.getElementById("shareBtn");
const toast = document.getElementById("toast");

shareBtn.addEventListener("click", async () => {
  const url = window.location.href;

  try {
    await navigator.clipboard.writeText(url);

    // show toast
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
});

const shareIcon = document.querySelector(".share-icon");
const FooterToast = document.getElementById("footer-toast");

shareIcon.addEventListener("click", async () => {
  const url = window.location.href;

  try {
    await navigator.clipboard.writeText(url);

    // show toast
    FooterToast.classList.add("show");

    setTimeout(() => {
      FooterToast.classList.remove("show");
    }, 2000);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
});
