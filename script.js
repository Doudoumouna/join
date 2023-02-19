let users = [];
let contacts = [];
let tasks = [];

async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
    contacts = JSON.parse(backend.getItem('contacts')) || [];
    tasks = JSON.parse(backend.getItem('tasks')) || [];
}
