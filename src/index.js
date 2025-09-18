
import './style.css';
import image from './menu.jpg'
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
let parant = document.getElementById('content')
let navBar = document.getElementById('navBar');
let homeButton = document.getElementById('home');
let menuBtn = document.getElementById('menu');
let contactBtn = document.getElementById('contact');
let logo = document.createElement('h2');
logo.textContent = 'Shadow Garden';
navBar.appendChild(logo);

menuBtn.addEventListener('click', loadMenu);
homeButton.addEventListener('click', loadHome);
contactBtn.addEventListener('click', loadContact);


loadHome();

