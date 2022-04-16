const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulRef = document.querySelector("#ingredients");

const liList = ingredients.map((element) => {
  const liRef = document.createElement("li");
  liRef.classList.add("item");
  const textRef = document.createElement("p");
  textRef.textContent = element;
  liRef.append(textRef);
  return liRef;
});

ulRef.append(...liList);
