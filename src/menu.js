import image from './menu.jpg'
function menu(){
let parant = document.getElementById('content')
parant.textContent = '';
let menu = document.createElement('div');
menu.classList.add('menu');
let menuContent = document.createElement('img');
menuContent.src = image;
menu.appendChild(menuContent);
parant.appendChild(menu);
}

export default menu;