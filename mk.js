const players = [
  {
    name: `Jade`,
    next: `Shoa Khan`,
    prev: ``,
    picture: `<img src="./jade-gif.webp" alt="" class="jade" />`,
    health: `Health: 100%`,
    strenght: `Strenght: 90%`,
    attack: `Strenght: 95%`,
    speed: `Strenght: 99%`,
  },
  {
    name: `Shoa Khan`,
    next: `Sub Zero`,
    prev: `Jade`,
    picture: `<img src="./khan-gif.webp" alt="" class="jade" />`,
    health: `Health: 100%`,
    strenght: `Strenght: 100%`,
    attack: `Strenght: 100%`,
    speed: `Strenght: 79%`,
  },
  {
    name: `Sub Zero`,
    next: `Jax`,
    prev: `Shoa Khan`,
    picture: `<img src="./sub-zero-gif.webp" alt="" class="jade" />`,
    health: `Health: 100%`,
    strenght: `Strenght: 97%`,
    attack: `Strenght: 96%`,
    speed: `Strenght: 95%`,
  },
  {
    name: `Jax`,
    next: `Scorpion`,
    prev: `Sub Zero`,
    picture: `<img src="./jax-gif.webp" alt="" class="jade" />`,
    health: `Health: 100%`,
    strenght: `Strenght: 100%`,
    attack: `Strenght: 93%`,
    speed: `Strenght: 80%`,
  },
  {
    name: `Scorpion`,
    next: `Cassie Cage`,
    prev: `Jax`,
    picture: `<img src="./scorpion-gif.webp" alt="" class="jade" />`,
    health: `Health: 100%`,
    strenght: `Strenght: 94%`,
    attack: `Strenght: 96%`,
    speed: `Strenght: 98%`,
  },
  {
    name: `Cassie Cage`,
    next: ``,
    prev: `Scorpion`,
    picture: `<img src="./cassie-gif.webp" alt="" class="jade" />`,
    health: `Health: 100%`,
    strenght: `Strenght: 85%`,
    attack: `Strenght: 92%`,
    speed: `Strenght: 99%`,
  },
];

const image = document.querySelector(`.image`);
const playerName = document.querySelector(`.stats h1`);
const paraGraph = document.querySelector(`.stats p`);

let currentPlayer = 9;
function showCharacter() {
  const player = players[currentPlayer];
  picture.innerHTML = player.picture;
  characterName.innerHTML = player.name;
  health.textContent = player.health;
  speed.textContent = player.speed;
  attack.textContent = player.attack;
  strenght.textContent = player.strenght;
  prev.textContent = player.prev;
  next.textContent = player.next;
}

// CHARACTERS
const jade = document.querySelector(`.jade`);
const khan = document.querySelector(`.khan`);
const subZero = document.querySelector(`.sub-zero`);
const jax = document.querySelector(`.jax`);
const scorpion = document.querySelector(`.scorpion`);
const cassie = document.querySelector(`.cassie`);
// PICTURE
const picture = document.querySelector(`.picture`);
// PERKS
const strenght = document.querySelector(`.strenght h2`);
const attack = document.querySelector(`.attack h2`);
const speed = document.querySelector(`.speed h2`);
const health = document.querySelector(`.health h2`);
// TEXT CONTENT
const characterName = document.querySelector(`.active`);
const prev = characterName.previousElementSibling;
const next = characterName.nextElementSibling;
console.log(next);

// CLICK EVENT LISTENERS
jade.addEventListener(`click`, function () {
  currentPlayer = 0;
  showCharacter(currentPlayer);
  characterName.classList.add(`active-yes`);
  setTimeout(changeImage, 2000);
  function changeImage() {
    const player = players[currentPlayer];
    picture.innerHTML = `<img src="./revenant-jade.png" alt="" class="jade" />`;
  }
});

khan.addEventListener(`click`, function () {
  currentPlayer = 1;
  showCharacter(currentPlayer);
  characterName.classList.add(`active-yes`);
  setTimeout(changeImage, 2000);
  function changeImage() {
    const player = players[currentPlayer];
    picture.innerHTML = `<img src="./khan.png" alt="" class="jade" />`;
  }
});

subZero.addEventListener(`click`, function () {
  currentPlayer = 2;
  showCharacter(currentPlayer);
  characterName.classList.add(`active-yes`);
  setTimeout(changeImage, 1800);
  function changeImage() {
    const player = players[currentPlayer];
    picture.innerHTML = `<img src="./sub-zero.png" alt="" class="jade" />`;
  }
});

jax.addEventListener(`click`, function () {
  currentPlayer = 3;
  showCharacter(currentPlayer);
  characterName.classList.add(`active-yes`);
  setTimeout(changeImage, 4000);
  function changeImage() {
    const player = players[currentPlayer];
    picture.innerHTML = `<img src="./jax.png" alt="" class="jade" />`;
  }
});

scorpion.addEventListener(`click`, function () {
  currentPlayer = 4;
  showCharacter(currentPlayer);
  characterName.classList.add(`active-yes`);
  setTimeout(changeImage, 3100);
  function changeImage() {
    const player = players[currentPlayer];
    picture.innerHTML = `<img src="./scorpion.png" alt="" class="jade" />`;
  }
});

cassie.addEventListener(`click`, function () {
  currentPlayer = 5;
  showCharacter(currentPlayer);
  characterName.classList.add(`active-yes`);
  setTimeout(changeImage, 4000);
  function changeImage() {
    const player = players[currentPlayer];
    picture.innerHTML = `<img src="./cassie.png" alt="" class="jade" />`;
  }
});
