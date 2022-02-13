let firstName = prompt ("Adınız Nedir?")
let myName = document.querySelector("#myName")
myName.innerHTML = `${firstName}`

function tarihSaat() {
    var date = new Date().toLocaleString();
    document.getElementById("zaman").innerHTML = date;
}
setInterval(tarihSaat, 1000); 
