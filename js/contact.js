let letters = [];

function toggleAddContact(){
    document.getElementById('addNewContact').classList.toggle('dNone')
}

function getLetters(){
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        let letter = user['lastName'].charAt(0);
        if (!letters.includes(letter)) {
            letters.push(letter);
        }
    }
    letters.sort();
    renderLetters();
}

function addContact(){
    let name = document.getElementById('contactName').value;
    let email = document.getElementById('contactEmail').value;
    let tel = document.getElementById('contactTel').value;
    let firstName = name.split(' ').slice(0, -1).join(' ');
    let lastName = name.split(' ').slice(-1).join(' ');
    let initials = name.replace(/[^A-Z]/g, '');
    let color = '#'+(Math.floor(Math.random()*16777215).toString(16));
    let user = {'firstName':firstName,'lastName':lastName,'email':email,'password':'','color':color,'phone':tel,'initial':initials}
    addUser(user);
    wipeInput();
    toggleAddContact();
    getLetters()
}

function wipeInput(){
    document.getElementById('contactName').value='';
    document.getElementById('contactEmail').value='';
    document.getElementById('contactTel').value='';
}

async function addUser(user) {
    users.push(user);
    await backend.setItem('users', JSON.stringify(users));
    renderLetters();
}

function renderLetters() {
    let letterbox = document.getElementById('contactContent');
    letterbox.innerHTML = '';

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        letterbox.innerHTML += `
        <div class="indexBox" id="indexBox-${letter}">
            <div class="letterBox">
                <h3>${letter}</h3>
            </div>
        </div>`;
    }
    updateContact();
}

function updateContact(){
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        let email = user['email'];
        let firstName = user['firstName'];
        let lastName = user['lastName'];
        let initials =  user['initial'];
        let color = user['color'];
        let letter = user['lastName'].charAt(0);
        document.getElementById(`indexBox-${letter}`).innerHTML += contactTemplateShort(i,email,firstName,lastName,initials,color) ;
    }
}

function contactTemplateShort(i,email,firstName,lastName,initials,color){
    return /*html*/`
    <div class="contactBox" id="contentBox${i}">
    <div class="avatar" style="background-color:${color};">${initials}</div>
    <div class="contact">
        <h4>${firstName + ' ' + lastName}</h4>
        <a href="mailto:${email}">${email}</a>
    </div>
    </div>`;
}