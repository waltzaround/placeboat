const events = [
  {
    event: "fill me in Walter",
    price: 12000,
  },
  {
    event: "fill me in WILLLIE one eye",
    price: 1200,
  },
  {
    event: "Crew member stuck in the toilet",
    price: 120,
  },
];
var audio = new Audio('kaching.mp3');



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

let totalDebt = 0;

function renderDebt() {
  const item = document.getElementsByClassName('status').item(0)
  const div = document.createElement('div')
  const text = document.createElement('h3')
  text.innerText = `Total Debt: $${totalDebt}`
  div.innerHTML = text.innerHTML
  item.innerHTML = div.innerHTML
}
renderDebt();

const payBtn = document.getElementById("will1");
const giveUpBtn = document.getElementById("will2");
payBtn.addEventListener("click", () => {
  totalDebt -= events[0].price;
  renderDebt()
});

giveUpBtn.addEventListener("click", () => {});
