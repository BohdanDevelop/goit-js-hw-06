const ulRef = document.querySelector("#categories");
const ulCategories = ulRef.children;
const ulCategoriesNumber = ulRef.children.length;
console.log(`Number of categories: ${ulCategoriesNumber}`);

for (const category of ulCategories) {
  const headerName = category.firstElementChild.textContent;
  const elementsNumber = category.lastElementChild.children.length;
  console.log(`Category: ${headerName}\nElement: ${elementsNumber}`);
}
