// Llave encriptadora
const cryptoKey = { 
    e: "enter", 
    i: "imes", 
    a: "ai", 
    o: "ober", 
    u: "ufat" 
};

const encrypt = (text) => {
    let encryptedText = "";        
    for (let char of text) {
        encryptedText += cryptoKey[char] !== undefined
        ? cryptoKey[char] // Agrega la letra cifrada si existe en cryptoKey
        : char;           // Agrega el carácter original si no existe en cryptoKey
    }
    return encryptedText;
};

const btnEncrypt = document.getElementById("btn-encrypt");

btnEncrypt.addEventListener("click", () => {
    const textArea= document.getElementById("text-area");
    const encryptedText= encrypt(textArea.value);
    alert(encryptedText);
});


const decrypt = (text) => {
    let decryptedText = text.split(" ");
        let result = decryptedText.map(word => {
        return Object.keys(cryptoKey)
        .reduce((acc, key) => acc
        .split(cryptoKey[key])
        .join(key), word);
    }).join(" ");
    return result 
};


