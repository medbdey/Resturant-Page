function home(){
let parant = document.getElementById('content')
parant.textContent = '';
let home = document.createElement('div');
home.classList.add('home');
let head = document.createElement('div');
const logos = document.createElement('h1');
let info = document.createElement('div');
let hours = document.createElement('div');
let location = document.createElement('div');

let text1 = document.createElement('h3');
let text2 = document.createElement('h3');
let text3 = document.createElement('h3');

let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');

head.appendChild(logos);
home.appendChild(head);
info.appendChild(text1);
info.appendChild(p1);
hours.appendChild(text2)
hours.appendChild(p2);
location.appendChild(text3)
location.appendChild(p3);
home.appendChild(info);
home.appendChild(hours);
home.appendChild(location);


head.classList.add('head');
info.classList.add('info');
hours.classList.add('hours');
location.classList.add('location')

logos.textContent = 'Shadow Garden';
text1.textContent = 'information';
p1.textContent = "Hello And Welcome To Shadow Garden Here You Will Get The Best Food That You'll Every Eat Hope You Enjoy!";
text2.textContent = 'Hours';
p2.textContent = `
    Sunday : 8am - 12am
    Monday : 8am - 12am  
    Tuesday : 8am - 12am  
    Wendsday : 8am - 12am  
    Thursday : 8am - 12am  
    Friday : Closed   
    Saturday : 6pm - 4:30am    
`;
text3.textContent = 'Location';
p3.textContent = '123 runrunland';
parant.textContent = '';
parant.appendChild(home);
};

export default home;