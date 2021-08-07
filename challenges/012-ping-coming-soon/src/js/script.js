const notify = document.getElementById("notify");
const errMob = document.getElementById("errMob");
const email = document.getElementById("email");
const errDesk = document.getElementById("errDesk");

notify.addEventListener("click", function(e){
    e.preventDefault();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        errMob.style.color = "white";
        errDesk.style.color = "white";
    }
    else {
        errMob.style.color = "red";
        errDesk.style.color = "red";
    }
})