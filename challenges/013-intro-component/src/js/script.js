const field = document.getElementsByClassName("field");

const btn = document.getElementById("btn");

var i;
var chiddu;

btn.addEventListener("click", function (e) {
    e.preventDefault();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    for (i = 0; i < field.length; i++) {
        chiddu = field[i].children;
        if (chiddu.item(0).value === "") {
            chiddu.item(1).style.opacity = "1";
            chiddu.item(0).style.borderColor = "hsl(0, 100%, 74%)";
        }

        chiddu = field[0].children;
        if (chiddu.item(0).value == "") {
            chiddu.item(2).innerHTML = "First Name cannot be empty";
        } else {
            chiddu.item(0).style.borderColor = "hsl(246, 25%, 77%)";
            chiddu.item(1).style.opacity = "0";
            chiddu.item(2).innerHTML = null;
        }
        chiddu = field[1].children;
        if (chiddu.item(0).value === "") {
            chiddu.item(2).innerHTML = "Last Name cannot be empty";
        } else {
            chiddu.item(0).style.borderColor = "hsl(246, 25%, 77%)";
            chiddu.item(1).style.opacity = "0";
            chiddu.item(2).innerHTML = null;
        }
        chiddu = field[2].children;
        if (chiddu.item(0).value.match(mailformat)) {
            chiddu.item(2).innerHTML = null;
        }
        else {
            chiddu.item(2).innerHTML = "Looks like this is not an email";
        }
        if (chiddu.item(0).value === "") {
            chiddu.item(2).innerHTML = "Email Address cannot be empty";
        } else {
            chiddu.item(0).style.borderColor = "hsl(246, 25%, 77%)";
            chiddu.item(1).style.opacity = "0";
            chiddu.item(2).innerHTML = null;
        }
        chiddu = field[3].children;
        if (chiddu.item(0).value === "") {
            chiddu.item(2).innerHTML = "Password cannot be empty";
        } else {
            chiddu.item(0).style.borderColor = "hsl(246, 25%, 77%)";
            chiddu.item(1).style.opacity = "0";
            chiddu.item(2).innerHTML = null;
        }
    }
})