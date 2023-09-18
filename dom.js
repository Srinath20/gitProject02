console.dir(document);
console.log(document.head);
console.log(document.body);
document.title = "Project";
console.log(document.title);
console.log(document.all);
var heading = document.getElementById('header-title');
heading.innerText="Project Title";
//heading.innerHTML="<h3>Sample Text</h3>"
var Item = document.getElementsByClassName('list-group-item');
Item[2].textContent = "Edited list item";
var edit = Item[2];
edit.style.fontWeight = 'bold';
edit.style.backgroundColor = 'green';
for(var i=0;i<Item.length;i++){
    Item[i].style.fontWeight = 'bold';
}
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[2].textContent);
for(var i =0; i <li.length;i++){
    li[i].style.backgroundColor = 'Blue';
}
var first = document.querySelector('li');
first.style.backgroundColor='White';
var second = document.querySelector('li:nth-child(2)');
second.style.backgroundColor = 'green';
var third = document.querySelector('li:nth-child(3)');
third.style.opacity= 0;

//Traversing DOM
//parentNode or parentElement
var itemList = document.querySelector('.list-group');
console.log(itemList.parentNode);
//ChildNodes
console.log(itemList.childNodes);//childNodes..considers line breaks but children doesn't
console.log(itemList.children);
//console.log(itemList.firstChild);//This also considers line breaks but firstElementChild doesn't
console.log(itemList.firstElementChild);
itemList.firstElementChild.innerText = "Sample text";
//Simlarly for lastChild and lastElementChild

//nextSibling
console.log(itemList.nextSibling);///This also considers line breaks but nextElementSibling doesn't
console.log(itemList.nextElementSibling);

//Similarly previousSibling and previousElementSibling
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

//createElement, textNode and Add textNode to div
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('titile',"HEllo"); 
var newText = document.createTextNode('HEllo');
newDiv.appendChild(newText);

//Inserting createElement
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);

//Events
var form = document.getElementsByClassName('form-inline mb-3');
console.log(form);
form.addEventListener('submit', addItem);
//addItem Function
function addItem(e){
    e.preventDefault();
    console.log(1);
}