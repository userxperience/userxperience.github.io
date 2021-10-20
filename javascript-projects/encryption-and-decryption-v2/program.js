function encrypt() {
    const input = document.getElementById('input').value;
    const characterList = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", ",", ";", " ", "  ", "?", "!", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", ",", ";", " ", "  ", "?", "!",]
    let encryptedString = ""
    let encryptionKey = parseInt(document.getElementById('encryptionKey').value);
    if(document.getElementById("encryptionKey").value.length == 0 || document.getElementById("encryptionKey").value < 1){
        console.log("no user key detected, generating random key...")
    encryptionKey = (Math.floor(Math.random() * (characterList.length/2)))
    }
    if(encryptionKey > (characterList.length/2)){
        console.log("key is longer than characterList, shortening key...")
        while(encryptionKey > (characterList.length/2)){
            encryptionKey -= (characterList.length/2);
        }
        console.log("new key : " + encryptionKey)
    }
    console.log(encryptionKey)
    for (let i = 0; i < input.length; i++) {
        let indexOfCharacter = characterList.indexOf(input[i]);
        encryptedString += characterList[indexOfCharacter + encryptionKey]
    }
    console.log(encryptedString)
    document.getElementById("output").innerHTML = ("your encrypted sentence is: " + encryptedString);
    document.getElementById("GeneratedEncryptionKey").innerHTML = ("your encryptionkey is: " + encryptionKey);
}

function decrypt() {
    const input = document.getElementById('input').value;
    const characterList = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", ",", ";", " ", "  ", "?", "!", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", ",", ";", " ", "  ", "?", "!",]
    let encryptedString = ""
    
let encryptionKey = parseInt(document.getElementById('encryptionKey').value);
if(document.getElementById("encryptionKey").value.length == 0){
    encryptionKey = 0
}
    console.log(encryptionKey)
    for (let i = 0; i < input.length; i++) {
        let indexOfCharacter = characterList.indexOf(input[i]);
        encryptedString += characterList[indexOfCharacter - (encryptionKey-((characterList.length/2)))]
    }
    console.log(encryptedString)
    document.getElementById("output").innerHTML = ("your decrypted sentence is: " + encryptedString);
}