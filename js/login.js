function logIn(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginPassword = document.getElementById('loginPassword').value;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if ((user['email'] == loginEmail ) && (user['password'] == loginPassword )){
            
            if((document.getElementById('rememberMe').checked) == true){
                localStorage.setItem('user',loginEmail);
                localStorage.setItem('PW',loginPassword);
                localStorage.setItem('remember',true);
            }
            else{
                localStorage.setItem('user','');
                localStorage.setItem('PW','');
                localStorage.setItem('remember',false);
            }
            window.location.href='summary.html';
        }
    }
}

function remember(){
    if(localStorage.getItem('remember')){
        document.getElementById('loginEmail').value = localStorage.getItem('user');
        document.getElementById('loginPassword').value = localStorage.getItem('PW');
        
    }else{
        document.getElementById('rememberMe').checked = false;
    }
}