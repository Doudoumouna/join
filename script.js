let users = [];
let tasks = [];

async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
    tasks = JSON.parse(backend.getItem('tasks')) || [];
    updateContact()
}

function toggleAddContact(){
    document.getElementById('addNewContact').classList.toggle('dNone')
}

function addContact(){
    let name = document.getElementById('contactName').value;
    let email = document.getElementById('contactEmail').value;
    let tel = document.getElementById('contactTel').value;
    let firstName = name.split(' ').slice(0, -1).join(' ');
    let lastName = name.split(' ').slice(-1).join(' ');
    let initials = name.replace(/[^A-Z]/g, '');
    let user = {'firstName':firstName,'lastName':lastName,'email':email,'password':'','color':'','phone':tel,'initial':initials}
    addUser(user);
}

async function addUser(user) {
    users.push(user);
    await backend.setItem('users', JSON.stringify(users));
    updateContact()
}

function updateContact(){
    document.getElementById('contactContent').innerHTML = '';
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        let email = user['email']
        let firstName = user['firstName']
        let lastName = user['lastName']
        let initials =  user['initial']
        document.getElementById('contactContent').innerHTML += contactTemplateShort(i,email,firstName,lastName,initials) ;
    }
}

function contactTemplateShort(i,email,firstName,lastName,initials){
    return /*html*/`
    <div class="contactBox" id="contentBox${i}">
    <div class="avatar">${initials}</div>
    <div class="contact">
        <h4>${firstName + ' ' + lastName}</h4>
        <a href="mailto:${email}">${email}</a>
    </div>
    </div>`;
}