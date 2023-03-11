const events = [
  {
    event: "It's that time of year! Time to pay your boats annual insurance premium. ",
    action: 'Pay Insurance - $12,000',
    price: 12000,
  },
  {
    event: "Fire?  I thought this was an ocean activity? A fire breaks out when your marina-neighbour decides to bake-and-grill, and falls asleep. Your boat sustains $100,000 in damages not covered by insurance. You do not go boating.",
    action: 'Pay $100,000 for repairs',
    price: 100000,
  },
  {
    event: "Oh! Barnacles! Your boat needs cleaning, and the drydock is unavailable. You spend $6,000 on Scuba Equipment and Training, and do a sub-par job of scraping everything clean while underwater.",
    action: 'Pay $15,000 to get a professional to do the job properly.',
    price: 15000,
  },
  {
    event: "You've finally found a free weekend! The weathers pretty awful, but that's not going to stop you. It was pretty miserable, but hey, you finally went boating.",
    action: 'Pay $2,500 to refuel',
    price: 2500,
  },
  {
    event: "You manage to get out on the water, but your engine dies while out on the water. You require the Coastguard to tow you back, but you forgot to renew your membership.",
    action: 'Pay $700 in Coastguard fees and $5,000 in engine repair expenses.',
    price: 5700,
  },
  {
    event: "There's water in your fuel.  Manually empty your fuel tanks, pay for disposal, and re-fill with fuel. ",
    action: 'Pay $7,000 for fuel tank cleaning and repairs.',
    price: 7000,
  },
  {
    event: "Why does it smell like gas in here?   You forgot to turn off the LPG for the cooking range, and a crack had formed in the gas line.  ",
    action: 'Replace the cylinder, and re-fit the range into the galley for $12,000.',
    price: 12000,
  },
  {
    event: "Your have an awesome day out on the water with the sun shining and wind in your hair. Roll a die and move forward that many places. After a plesant lunch on an island only accessible by boat, a stray rope gets caught in your propeller.",
    action: 'Spend the rest of the afternoon and $1000 detangling and repairing the propeller.',
    price: 12000,
  },
];
function audioPotato() {
var audio = new Audio('kaching.mp3');
const newAudio = audio.cloneNode()
newAudio.play()
}


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
let eventIndex = Math.floor(Math.random() * events.length);

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
  totalDebt -= events[eventIndex].price;
  renderDebt()
  audioPotato();
  eventIndex = Math.floor(Math.random() * events.length);
  renderEvent()
});

function renderEvent() {
  const event = document.getElementById('event')
  event.innerText = events[eventIndex].event
  const will2 = document.getElementById('will1')
  will2.innerText = events[eventIndex].action
}
renderEvent()

giveUpBtn.addEventListener("click", () => {
  window.alert('Hah fuck off, pay up you rich c*nt')
});
