let cards = [
  { title: "logo", url: "./assets/images/00_growdev.png", id: 0 },
  { title: "node", url: "./assets/images/01_node.png", id: 0 },
  { title: "docker", url: "./assets/images/02_docker.png", id: 0 },
  { title: "javascript", url: "./assets/images/03_javascript.png", id: 0 },
  { title: "github", url: "./assets/images/04_github.png", id: 0 },
  { title: "html5", url: "./assets/images/05_html5.png", id: 0 },
  { title: "css3", url: "./assets/images/06_css.png", id: 0 },
  { title: "bootstrap", url: "./assets/images/07_bootstrap.png", id: 0 },
  { title: "react", url: "./assets/images/08_react.png", id: 0 },
];

const divCards = document.getElementById("cards");

let idNumeros = [];
let c = [];
d = [];
let pontuacao = document.getElementById("pontuacao");
let pt = 0;
let idGeral = [];
let valida = "";

function score(a, b) {
  c.push(a);
  d.push(b);

  if (c.length == 2) {
    var t1 = c[0];
    var t2 = c[1];
    c = [];

    if (t1 == t2) {
      d = [];
      pt = pt + 10;
      pontuacao.innerHTML = `Pontuação: ${pt}`;
    } else {
      valida = "erro";
    }
  }
}

function getRandomInt() {
  var numeros = [0];
  let cont = 0;

  for (let index = 0; index < 250; index++) {
    min = Math.ceil(1);
    max = Math.floor(17);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;

    if (numeros.indexOf(aleatorio) == -1) {
      numeros.push(aleatorio);
      cont++;

      //cards[cont].id = aleatorio;
    }
    if (cont == 17) {
      break;
    }
  }
  idNumeros = numeros;
}

function clearCards() {
  divCards.innerHTML = "";
  getRandomInt();
  pontuacao.innerHTML = `Pontuação: `;
  c = [];
  d = [];
  pt = 0;
}

function showCards() {
  clearCards();
  pontuacao = document.getElementById("pontuacao");
  for (let index = 1; index < 17; index++) {
    divCards.innerHTML += `<div 
    id="${idNumeros[index]}" class="col-3">
    <img
      src="${cards[0].url}"
      class="img-fluid img-thumbnail"
      alt="..."
      onclick="viewCards(event)" data-position=""
    />
  </div>`;
  }
}

function viewCards(event) {
  let idCard = event.path[1].id;
  let localizaId = document.getElementById(idCard);

  if (valida == "erro") {
    document.getElementById(d[0]).innerHTML = `<img
    id="${d[0]}"
    src="${cards[0].url}"
    class="img-fluid img-thumbnail"
    alt="..."
    onclick="viewCards(event)"data-position="${cards[0].title}"
  />`;
    document.getElementById(d[1]).innerHTML = `<img
  id="${d[1]}"
  src="${cards[0].url}"
  class="img-fluid img-thumbnail"
  alt="..."
  onclick="viewCards(event)"data-position="${cards[0].title}"
/>`;
    d = [];
    valida = "";
  }

  switch (idCard) {
    case "1":
      idGeral = idCard;
      localizaId.innerHTML = `<img
        id="${idCard}"
        src="${cards[1].url}"
        class="img-fluid img-thumbnail"
        alt="..."
        onclick="viewCards(event)"data-position="${cards[1].title}"
      />`;

      score(cards[1].title, idGeral);
      break;

    case "2":
      idGeral = idCard;
      localizaId.innerHTML = `<img
        id="${idCard}"
        src="${cards[2].url}"
        class="img-fluid img-thumbnail"
        alt="..."
        onclick="viewCards(event)"data-position="${cards[2].title}"
      />`;
      score(cards[2].title, idGeral);
      break;

    case "3":
      idGeral = idCard;
      localizaId.innerHTML = `<img
        id="${idCard}"
        src="${cards[3].url}"
        class="img-fluid img-thumbnail"
        alt="..."
        onclick="viewCards(event)"data-position="${cards[3].title}"
      />`;
      score(cards[3].title, idGeral);
      break;

    case "4":
      idGeral = idCard;
      localizaId.innerHTML = `<img
        id="${idCard}"
        src="${cards[4].url}"
        class="img-fluid img-thumbnail"
        alt="..."
        onclick="viewCards(event)"data-position="${cards[4].title}"
      />`;
      score(cards[4].title, idGeral);
      break;

    case "5":
      idGeral = idCard;
      localizaId.innerHTML = `<img
        id="${idCard}"
        src="${cards[5].url}"
        class="img-fluid img-thumbnail"
        alt="..."
        onclick="viewCards(event)"data-position="${cards[5].title}"
      />`;
      score(cards[5].title, idGeral);
      break;

    case "6":
      idGeral = idCard;
      localizaId.innerHTML = `<img
        id="${idCard}"
        src="${cards[6].url}"
        class="img-fluid img-thumbnail"
        alt="..."
        onclick="viewCards(event)"data-position="${cards[6].title}"
      />`;
      score(cards[6].title, idGeral);
      break;

    case "7":
      idGeral = idCard;
      localizaId.innerHTML = `<img
        id="${idCard}"
        src="${cards[7].url}"
        class="img-fluid img-thumbnail"
        alt="..."
        onclick="viewCards(event)"data-position="${cards[7].title}"
      />`;
      score(cards[7].title, idGeral);
      break;

    case "8":
      idGeral = idCard;
      localizaId.innerHTML = `<img
        id="${idCard}"
        src="${cards[8].url}"
        class="img-fluid img-thumbnail"
        alt="..."
        onclick="viewCards(event)"data-position="${cards[8].title}"
      />`;
      score(cards[8].title, idGeral);
      break;

    case "9":
      idGeral = idCard;
      localizaId.innerHTML = `<img
        id="${idCard}"
        src="${cards[1].url}"
        class="img-fluid img-thumbnail"
        alt="..."
        onclick="viewCards(event)"data-position="${cards[1].title}"
      />`;
      score(cards[1].title, idGeral);
      break;

    case "10":
      idGeral = idCard;
      localizaId.innerHTML = `<img
        id="${idCard}"
        src="${cards[2].url}"
        class="img-fluid img-thumbnail"
        alt="..."
        onclick="viewCards(event)"data-position="${cards[2].title}"
      />`;
      score(cards[2].title, idGeral);
      break;

    case "11":
      idGeral = idCard;
      localizaId.innerHTML = `<img
        id="${idCard}"
        src="${cards[3].url}"
        class="img-fluid img-thumbnail"
        alt="..."
        onclick="viewCards(event)"data-position="${cards[3].title}"
      />`;
      score(cards[3].title, idGeral);
      break;

    case "12":
      idGeral = idCard;
      localizaId.innerHTML = `<img
        id="${idCard}"
        src="${cards[4].url}"
        class="img-fluid img-thumbnail"
        alt="..."
        onclick="viewCards(event)"data-position="${cards[4].title}"
      />`;
      score(cards[4].title, idGeral);
      break;

    case "13":
      idGeral = idCard;
      localizaId.innerHTML = `<img
        id="${idCard}"
        src="${cards[5].url}"
        class="img-fluid img-thumbnail"
        alt="..."
        onclick="viewCards(event)"data-position="${cards[5].title}"
      />`;
      score(cards[5].title, idGeral);
      break;

    case "14":
      idGeral = idCard;
      localizaId.innerHTML = `<img
        id="${idCard}"
        src="${cards[6].url}"
        class="img-fluid img-thumbnail"
        alt="..."
        onclick="viewCards(event)"data-position="${cards[6].title}"
      />`;
      score(cards[6].title, idGeral);
      break;

    case "15":
      idGeral = idCard;
      localizaId.innerHTML = `<img
        id="${idCard}"
        src="${cards[7].url}"
        class="img-fluid img-thumbnail"
        alt="..."
        onclick="viewCards(event)"data-position="${cards[7].title}"
      />`;
      score(cards[7].title, idGeral);
      break;

    case "16":
      idGeral = idCard;
      localizaId.innerHTML = `<img
        id="${idCard}"
        src="${cards[8].url}"
        class="img-fluid img-thumbnail"
        alt="..."
        onclick="viewCards(event)"data-position="${cards[8].title}"
      />`;
      score(cards[8].title, idGeral);
      break;

    default:
      break;
  }
}

showCards();
