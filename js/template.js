function contactTemplateShort(i,email,firstName,lastName,initials,color){
    return /*html*/`
    <div class="contactBox" id="contactBox${i}" onclick="renderContact(${i})" >
    <div class="avatar" style="background-color:${color};">${initials}</div>
    <div class="contact">
        <h4>${firstName + ' ' + lastName}</h4>
        <a href="mailto:${email}">${email}</a>
    </div>
    </div>`;
}

function contactTemplateLong(i,tel,email,firstName,lastName,initials,color){
    return /*html*/`
    <div class="contactHeadBox">
            <div class="avatarBoxFull" style="background-color: ${color};" onclick="addTask()">${initials}</div>
            <div class="contactFullHead">
                <h2>${firstName + ' ' + lastName}</h2>
                <p><img src="assets/icon/addButton.png">Add Task</p>
            </div>
        </div>
        <div class="contactInfo">
            <h3>Contact Information</h3>
            <p onclick="toggleEditContact(${i})"><img src="assets/icon/editBlue.png">Edit Contact</p>
        </div>
        <div class="infoContent">
            <h4>E-Mail</h4>
            <a href="mailto:${email}">${email}</a>
            <h4>Phone</h4>
            <span>+49 ${tel}</span>
        </div>
    `;
}

function editBoxTemplate(i,tel,firstName,lastName,email){
    return /*html*/`
    <form onsubmit="saveEdit(${i});return false;" class="addNewInputBox">
                <div class="avatarBox" id="avatarBox">
                    <img src="assets/icon/avatar.png">
                </div>
                <input id="editName" value="${firstName + ' ' + lastName}" type="text" placeholder="Name" required  style="background-image:  url(assets/icon/name.png); background-repeat: no-repeat; background-position: center right 14px;">
                <input id="editEmail" value="${email}" type="email" placeholder="E-Mail" required style="background-image:  url(assets/icon/email.png); background-repeat: no-repeat; background-position: center right 14px;">
                <input id="editTel" value="${tel}" type="tel" placeholder="Phone" required style="background-image:  url(assets/icon/phone.png); background-repeat: no-repeat; background-position: center right 14px;">
                <button class="btn">Save</button>
            </form>
    `;
}