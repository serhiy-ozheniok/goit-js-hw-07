const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);
items.forEach(item => {
  const title = item.querySelector('h2');
  const titleText = title.textContent;
  console.log(`Category: ${titleText}`);

  const elements = item.querySelectorAll('li');
  console.log(`Elements: ${elements.length}`);
});
