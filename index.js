const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pswBtn = document.getElementById("psw-btn")
let randomPsw1 = document.getElementById("random-psw1")
let randomPsw2 = document.getElementById("random-psw2")
let passwordLenght = 11

// per creare un elemento sinsolo random dall'arrey
function characterRandom(){
    let charRandom = Math.floor(Math.random() * characters.length)
    return characters[charRandom]
}
// set la lunghezza della password (con una var), usando for loop per ripetere la funzione tot volte
function randomPassword(){
    let randomPass = ""
    for(let i = 0; i < passwordLenght; i++){
        randomPass += characterRandom()
    }
    return randomPass
}
// addeventlistener per collegare il button e generare le password sullo schermo
pswBtn.addEventListener("click", function(){
    randomPsw1.textContent = randomPassword()
    randomPsw2.textContent = randomPassword()
})
