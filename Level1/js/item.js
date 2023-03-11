const itemToBuild = [
  {
    name: "new hot tub",
    price: 24000,
  },
  {
    name: "new hot tub",
    price: 24000,
  },
  {
    name: "new hot tub",
    price: 24000,
  },
  {
    name: "new hot tub",
    price: 24000,
  },
];

// function itemRender() {
//   const purchaseDiv = document.getElementsByClassName("purchase").item(0)
//   for (const item of itemToBuild) {
//     const div = document.createElement("div");
//     const name = document.createElement("p");
//     name.innerText = `Name ${item.name}`;
//     const price = document.createElement("p");
//     price.innerText = `Price: $${item.price}`;
//     div.appendChild(name);
//     div.appendChild(price);
//     purchaseDiv.appendChild(div);
//   }
// }
// itemRender()

let totalDebt = 0

function renderDebt() {
  const item = document.getElementsByClassName('status').item(0)
  const div = document.createElement('div')
  const text = document.createElement('h3')
  text.innerText = `$${totalDebt}`
  div.appendChild(text)
  item.appendChild(div)
}
renderDebt()