function logIn(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginPassword = document.getElementById('loginPassword').value;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if ((user['email'] == loginEmail ) && (user['password'] == loginPassword )){
            window.location.href='summary.html';
        }
    }
}