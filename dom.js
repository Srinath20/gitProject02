var heading = document.getElementById('header-title');
console.log(heading.innerText)
heading.innerText = 'A Plain List';
heading.style.fontWeight = 'bold';
heading.style.borderBottom = '2PX solid black';
var items = document.getElementById('items');
items[1].style.fontWeight = 'bold';
items[1].style.innerText = '<p style="color:green">Item</p>'
