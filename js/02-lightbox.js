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

let galleryImage = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  navText: ["<", ">"],
});

gallery.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  galleryImage.on("show.simplelightbox", () => {
    console.log(
      galleryImage,
      galleryImage.options.captionsData,
      galleryImage.options.captionDelay
    );
  });
});

console.log(galleryItems);
