// Знайти елемент ul#categories
const categoriesList = document.querySelector('#categories');

// Отримати всі елементи li.item
const categories = categoriesList.querySelectorAll('li.item');

// Порахувати кількість категорій
console.log('Number of categories:', categories.length);

// Для кожної категорії вивести назву та кількість елементів
categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItems = category.querySelector('ul').children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems}`);
});
