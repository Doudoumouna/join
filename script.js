let users = [];
let tasks = [];

async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
    tasks = JSON.parse(backend.getItem('tasks')) || [];
}
