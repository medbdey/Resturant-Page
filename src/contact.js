function contact(){
    let parant = document.getElementById('content');
    parant.textContent = '';
    let contact = document.createElement('div');
    let contactInfo = document.createElement('p');
    contactInfo.textContent = 'call us (+1) 123 456 678';
    contact.appendChild(contactInfo);
    parant.appendChild(contact);
    contact.classList.add('contact')
}
export default contact;