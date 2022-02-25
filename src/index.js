// --------------------------------------------------------------------------------------
// -- VARIABLE ENNVIRONNEMENT -- //
const app = document.getElementById("app");
const bite = document.createElement("p");
const container = document.createElement("div");
const titleListPipou = document.createElement("h2");
titleListPipou.setAttribute("class", "title-list-pipou");

const makePipouType = (name, size) => ({ name, size });

const PIPOU_TYPES = {
  "Gros pipou": makePipouType("Gros pipou", 900),
  "Petit pipou": makePipouType("Petit pipou", 400),
  "Pipou medium": makePipouType("Pipou medium", 500),
  "Pipou gargantuesque": makePipouType("Pipou gargantuesque", 1000),
  "Clitoris master": makePipouType("Clitoris master", -1)
};

// Form
const $form = document.createElement("form");
const $select = document.createElement("select");

container.appendChild($form);

const buildPipouSelect = () => {
  for (const pipouType of PIPOU_TYPES) {
    const $option = document.createElement("option");

    $option.innerHTML = pipouType.name;
    $option.setAttribute("value", pipouType.name);

    $select.appendChild($option);
  }

  $form.appendChild($select);
};

// buildPipouSelect();

const pipouNamesBySize = Object.values(PIPOU_TYPES)
  .sort((a, b) => b.size - a.size)
  .map((pipou) => pipou.name);

// -- TABLEAUX -- //
const needGrosPipou = [
  { name: "Charly", pipou: PIPOU_TYPES["Pipou gargantuesque"] },
  { name: "Dawg", pipou: PIPOU_TYPES["Pipou medium"] },
  { name: "Raoul", pipou: PIPOU_TYPES["Petit pipou"] },
  { name: "Nicole", pipou: PIPOU_TYPES["Clitoris master"] },
  { name: "Balti", pipou: PIPOU_TYPES["Gros pipou"] },
  { name: "Jordan", pipou: PIPOU_TYPES["Pipou medium"] },
  { name: "Marmoulde", pipou: PIPOU_TYPES["Clitoris master"] },
  { name: "Angie", pipou: PIPOU_TYPES["Clitoris master"] },
  { name: "Rochdur", pipou: PIPOU_TYPES["Gros pipou"] },
  { name: "Fuss", pipou: PIPOU_TYPES["Pipou medium"] },
  { name: "Tommy", pipou: PIPOU_TYPES["Gros pipou"] },
  { name: "Samir", pipou: PIPOU_TYPES["Gros pipou"] }
];

// --------------------------------------------------------------------------------------

const getPersonsWithPipouNamed = (pipouName) =>
  needGrosPipou.filter((person) => person.pipou.name === pipouName);

function printPersonsWithPipouNamed(pipouName) {
  container.setAttribute("class", "container-list-pipou-people");
  container.innerHTML = "";
  titleListPipou.innerHTML = `Liste des ${pipouName}`;
  container.appendChild(titleListPipou);

  const persons = getPersonsWithPipouNamed(pipouName);

  persons.forEach((person) => {
    let paragraphPipouPeople = document.createElement("p");
    paragraphPipouPeople.setAttribute("class", "card-pipou-people");
    paragraphPipouPeople.innerHTML += person.name;
    container.appendChild(paragraphPipouPeople);
  });
}

// --------------------------------------------------------------------------------------

function setPipouButtons() {
  for (let typePipou of pipouNamesBySize) {
    const buttonPipou = document.createElement("button");
    buttonPipou.innerHTML = typePipou;
    buttonPipou.setAttribute("class", "btn-pipou");
    app.appendChild(buttonPipou);
    app.appendChild(bite);
    buttonPipou.addEventListener("click", () => {
      printPersonsWithPipouNamed(typePipou);
    });
  }
}

setPipouButtons();

app.appendChild(container);
