


function removeDuplicates(array) {
  return Array.from(new Set(array));
}


const items = [
  'Apple', 'Grape', 'Banana', 'Watermelon', 'Pineapple', 'Orange', 'Mango', 'Apple', 'Cherry', 'Grape', 'Watermelon', 'Pineapple'
];

const newItems = removeDuplicates(items);
console.log(newItems);
