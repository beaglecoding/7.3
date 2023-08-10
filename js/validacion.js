function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


function validacionpass(){
    let pas1= document.getElementById("password1");
    let pas2= document.getElementById("password2");
   
    console.log(pas1.value);
   
   
        var checkbox = document.getElementById('terminos');
        
        let nombrereg = document.getElementById("nombre");
        let apellidoreg = document.getElementById("apellido") 
        let emailreg = document.getElementById("email") 
   
    if ((pas1.value===pas2.value) && pas1.value.length>=6 && checkbox.checked && nombrereg.value!=""&& apellidoreg.value!=""&& emailreg.value!="") {
        showAlertSuccess();
    }
    else{
        showAlertError();
    }

    
}

let button1 = document.getElementById("regBtn")
button1.addEventListener("click", ()=>validacionpass());