let users = [];
let tasks = [];

function stopAmimation(){
    setTimeout(animation,550);
    init();
}

function animation(){
    document.getElementById('animation').classList.add('dNone')
}

async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
    tasks = JSON.parse(backend.getItem('tasks')) || [];
    getLetters();
    renderLetters();
}

