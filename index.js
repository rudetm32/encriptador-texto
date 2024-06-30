const cryptoKey = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" };

const encrypt = (text) => {
    let encryptedText = "";        
    for (let char of text) {
        encryptedText += cryptoKey[char] !== undefined
        ? cryptoKey[char] // Agrega la letra cifrada si existe en cryptoKey
        : char;           // Agrega el carácter original si no existe en cryptoKey
    }
    return encryptedText;
};

const decrypt = (text) => {
    let decryptedText = text;
    for (let key in cryptoKey) {
        const regex = new RegExp(cryptoKey[key], "g");
        decryptedText = decryptedText.replace(regex, key);
    }
    return decryptedText;
};

const btnEncrypt = document.getElementById("btn-encrypt");
const btnDecrypt = document.getElementById("btn-decrypted");
const textArea = document.getElementById("text-area");
const messageState = document.getElementById("message-state");
const resultText = document.getElementById("result-text");
const copyBtn = document.getElementById("copy-btn");
const areaDraw = document.querySelector(".area-draw");
const areaDrawText = areaDraw.querySelectorAll("p");

const hidePreviousText = () => {
    areaDrawText.forEach(p => p.style.display = 'none');
};

btnEncrypt.addEventListener("click", () => {
    const encryptedText = encrypt(textArea.value);
    hidePreviousText();
    messageState.textContent = "Mensaje encriptado:";
    resultText.value = encryptedText;
});

btnDecrypt.addEventListener("click", () => {
    const decryptedText = decrypt(textArea.value);
    hidePreviousText();
    messageState.textContent = "Mensaje desencriptado:";
    resultText.value = decryptedText;
});

copyBtn.addEventListener("click", () => {
    resultText.select();
    document.execCommand("copy");
});

