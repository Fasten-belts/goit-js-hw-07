import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createMarkupItems(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join("");
}

gallery.insertAdjacentHTML("beforeend", createMarkupItems(galleryItems));

gallery.addEventListener("click", onClickImage);

function onClickImage(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const modalContent = `<img src="${evt.target.dataset.source}" alt="" />`;
  const instance = basicLightbox.create(modalContent, {
    onShow: (instance) => {
      document.addEventListener("keydown", (evt) => {
        if (evt.key === "Escape") {
          instance.close();
        }
      });
    },

    onClose: (instance) => {
      document.removeEventListener("keydown", (evt) => {
        if (evt.key === "Escape") {
          instance.close();
        }
      });
    },
  });
  instance.show();
}

console.log(galleryItems);
