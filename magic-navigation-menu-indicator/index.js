const list = document.querySelectorAll(".list");

/**
 * @this {HTMLElement}
 * @param {Event} ev
 */
function activeLink(ev) {
  list.forEach((item) => {
    item.classList.remove("active");
  });
  ev.currentTarget.classList.add("active");
}
list.forEach((item) => {
  item.addEventListener("click", activeLink);
});
