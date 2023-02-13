function loadItems() {
  return fetch('data/data.json')
    .then((response) => response.json())
    .then((json) => json.items);
}

function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map((item) => createHTMLString(item));
}
// create HTML list item from the given data item
function createHTMLString(item) {
  return `
    <li class="item">
      <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
      <span class="item__description">${item.gender}, ${item.size}</span>
    </li>`;
}

function setEventListeners(items) {}

//main
loadItems()
  .then((items) => {
    console.log(items);
    displayItems(items);
    // setEventListensers(items)
  })
  .catch(console.log);
