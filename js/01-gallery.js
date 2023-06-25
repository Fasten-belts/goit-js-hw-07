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

  const imageLink = evt.target.closest(".gallery__link");

  if (imageLink) {
    const itemId = imageLink.href;
    const modalContent = `<img src="${itemId}" alt="" />`;
    const instance = basicLightbox.create(modalContent);
    instance.show();

    window.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        instance.close();
      }
    });
    //   const imageItem = evt.target.closest(".gallery__item");

    //   if (imageItem) {
    //     const itemId = imageItem.querySelector(".gallery__image").dataset.source;

    // const instance = basicLightbox.create(
    //   createModalImage(findImageItem(itemId))
    // );
    // instance.show();

    //     const modalContent = `<img src="${itemId}" alt=""/>`;
    //     const instance = basicLightbox.create(modalContent);
    //     instance.show();
    //   }
  }
}

// function createModalImage({ original, description } = {}) {
//   return `<li>
//     <img src="${original}" alt="${description}" width = "100%">
//   </li>`;
// }

// function findImageItem(itemId) {
//   return galleryItems.find(({ original }) => original === itemId);
// }

console.log(galleryItems);
