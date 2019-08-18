document.getElementsByClassName('img-responsive')
document.querySelector('.img-responsive')
document.querySelector('#example-container li:first-child')
document.querySelectorAll('.img-responsive')
var container = document.getElementById('example-container');
container.querySelectorAll('.img-responsive')
var container = document.getElementById('example-container');
container.querySelectorAll('.img-responsive')
var items = document.querySelectorAll('#example-container li');
items.toString()
var items = document.querySelectorAll('#example-container li');

for (var i = 0, len = items.length; i < len; i++) {
	console.log(items[i].innerText);
}
var forEach = Array.prototype.forEach;
var items = document.querySelectorAll('#example-container li');

forEach.call(items, function(item){
console.log(item.innerText);
});
var list = document.querySelector('#example-container ul');
var items = document.getElementsByClassName('feature');

console.log(items.length);

var newItem = document.createElement('LI');
newItem.className = 'feature';
newItem.innerText = 'new live feature';
list.appendChild(newItem);

console.log(items.length);
var list = document.querySelector('#example-container ul');
var items = document.querySelectorAll('#example-container li');

console.log(items.length);

var newItem = document.createElement('LI');
newItem.className = 'feature';
newItem.innerText = 'new static feature';
list.appendChild(newItem);

console.log(items.length);
