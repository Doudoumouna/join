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

function contactTemplateLong(tel,email,firstName,lastName,initials,color){
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
            <p><img src="assets/icon/editBlue.png" onclick="editContact()">Edit Contact</p>
        </div>
        <div class="infoContent">
            <h4>E-Mail</h4>
            <a href="mailto:${email}">${email}</a>
            <h4>Phone</h4>
            <span>+49 ${tel}</span>
        </div>
    `;
}