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