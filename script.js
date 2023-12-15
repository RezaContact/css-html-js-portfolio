function toggleMenu() {
  // the line below targets the entire menu-links element on html
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');

  // it either toggles it open or closes the toggle class
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

function animalStartsWithA(animal) {
  return animal.toLowerCase().startsWith('a');
}

console.log(animalStartsWithA('Antelope')); // true
console.log(animalStartsWithA('Bear')); // false



const test = 1 2 3 4; 
const hello = console.log('he llo'   )

