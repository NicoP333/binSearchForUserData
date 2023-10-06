function binarySearch(arr, target) {
let left = 0;
let right = arr.length - 1;

while (left <= right) {
const mid = Math.floor((left + right) / 2);

if (arr[mid].id === target) {
return arr[mid];
}

if (arr[mid].id < target) {
left = mid + 1;
} else {
right = mid - 1;
}
}

return null;
}

// Пример данных с двойной вложенностью
const data = [
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 3, name: 'Item 3' },
{
id: 4,
name: 'Item 4',
subitems: [
{ id: 11, name: 'Subitem 1' },
{ id: 12, name: 'Subitem 2' },
{ id: 13, name: 'Subitem 3' },
],
},
{
id: 5,
name: 'Item 5',
subitems: [
{ id: 21, name: 'Subitem 1' },
{ id: 22, name: 'Subitem 2' },
],
},
];

// Использование функции для поиска элементов по id
const target1 = 3;
const result1 = binarySearch(data, target1);
console.log(result1); // { id: 3, name: 'Item 3' }

const target2 = 13;
const result2 = binarySearch(data[3].subitems, target2);
console.log(result2); // { id: 13, name: 'Subitem 3' }