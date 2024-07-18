function convertLetrre(text){
    return text.toLowerCase();
    
}
function encryptXOR(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        char = char ^ key.charCodeAt(i % key.length);
        result += String.fromCharCode(char);
    }
    // Codificar el resultado en Base64
    return btoa(result);
}

function decryptXOR(text, key) {
    // Decodificar el texto de Base64
    text = atob(text);
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        char = char ^ key.charCodeAt(i % key.length);
        result += String.fromCharCode(char);
    }
    return result;
} 

let a = encryptXOR('Fernands dss   ', '-');
a =
a

let b = decryptXOR(a, '-');

b

a=convertLetrre('Lo malo es que no Funciona BIen');a



s = ``
m = s.replace('\n', ' ')
m

let char = s.charCodeAt(0);
char
