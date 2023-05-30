console.clear();
let work = document.querySelector("#workOuterShell");
let items = Array.from(work.querySelectorAll(".item"));
let loadMore = document.getElementById("loadMore");
maxItems = 3;
loadItems = 3;
hiddenClass = "hiddenStyle";
hiddenItems = Array.from(document.querySelectorAll(".hiddenStyle"));

items.forEach(function (item, index) {
  if (index > maxItems - 1) {
    item.classList.add(hiddenClass);
  }
});

loadMore.addEventListener("click", function () {
  [].forEach.call(document.querySelectorAll("." + hiddenClass), function (
    item,
    index
  ) {
    if (index < loadItems) {
      item.classList.remove(hiddenClass);
    }

    if (document.querySelectorAll("." + hiddenClass).length === 0) {
      loadMore.style.display = "none";
    }
  });
});
