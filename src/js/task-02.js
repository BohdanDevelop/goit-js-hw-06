const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulRef = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const liRef = document.createElement("li");
  liRef.classList.add("item");

  const textRef = document.createElement("p");
  textRef.textContent = ingredient;
  liRef.append(textRef);
  console.log(liRef);
  ulRef.append(liRef);
}
