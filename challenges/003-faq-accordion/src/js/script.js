// const acc = document.getElementsByClassName("summary");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         this.classlist.toggle("active");
//         var summary = this.nextElementSibling;
//         if (summary.style.maxHeight) {
//             summary.style.maxHeight = null;
//         } else {
//             summary.style.maxHeight = summary.scrollHeight + "px";
//         }
//     });
// }

var acc = document.getElementsByClassName("summary");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}