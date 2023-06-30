const list = document.querySelector('#categories');
console.log(`Number of categories: ${list.children.length}`);
[...list.children].forEach(item => {
console.log(`Category: ${item.firstElementChild.outerText}`);
console.log(`Elements: ${item.lastElementChild.childElementCount}`);})