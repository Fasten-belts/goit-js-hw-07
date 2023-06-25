import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createMarkupItems(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join("");
}
gallery.insertAdjacentHTML("beforeend", createMarkupItems(galleryItems));

const galleryImage = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  navText: ["<", ">"],
});

console.log(galleryItems);
