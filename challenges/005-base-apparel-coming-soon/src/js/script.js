const err = document.getElementById("err");
const errMsg = document.getElementById("errMsg");

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        // alert("Valid email address!");
        // document.form1.email.focus();
        err.style.opacity = 0;
        errMsg.style.opacity = 0;
        return true;
    }
    else {
        // alert("You have entered an invalid email address!");
        // document.form1.email.focus();
        err.style.opacity = 1;
        errMsg.style.opacity = 1;
        return false;
    }
}