const err=document.getElementById("err"),errMsg=document.getElementById("errMsg");function ValidateEmail(e){return e.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)?(err.style.opacity=0,errMsg.style.opacity=0,!0):(err.style.opacity=1,errMsg.style.opacity=1,!1)}
//# sourceMappingURL=script.js.map