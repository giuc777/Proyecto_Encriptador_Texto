//LighTeme = LightTeme
function LightMode(){
    console.log("Light mode");
    const lightModeElements = document.querySelectorAll('.DarkTheme');
        
        lightModeElements.forEach(element => {
            element.classList.remove('DarkTheme');
            element.classList.add('LightTheme');
        });
    
}

function DarkMode(){
    console.log("Dark mode");
    const lightModeElements = document.querySelectorAll('.LightTheme');
        
        lightModeElements.forEach(element => {
            element.classList.remove('LightTheme');
            element.classList.add('DarkTheme');
        });
    

}

//Las constantes que son los botones y las secciones a modificar según la necesidad
const userText= document.getElementById("textUser");
const textDanger = document.getElementById("textDanger")
const result = document.getElementById("TextDesencriptado")
const butonCesar = document.getElementById("MetodCesar")
const butonVigerene = document.getElementById("MetodVigerene")
const butonXOR = document.getElementById("MetodXOR");
const butonOne = document.getElementById("MetodOne");
const EncriptDanger = document.getElementById("EncriptDanger");

let textEnriptedUser;
let metodUse = 4;

//Funciones

//Funcion para verificar que la cadena de texto es valida

function validarTexto(texto) {
    const regex = /^[a-z0-9 .,]*$/;
    return regex.test(texto);
}


function aurtoencriptado(texto, option) {
    let elementHTML = '<span  id="textDanger" class="danger"> No hay texto </span>'; 
    texto== '' ? EncriptDanger.innerHTML = elementHTML
    : option == 1 ? encriptarText(texto, 1) 
    : encriptarText(texto, 2)
}

//Funcion generar de encriptar
function encriptar(option){
    ;
    if(metodUse != 4){
        aurtoencriptado(userText.value, option);
        
    }else{
        let elementHTML = `<span  id="textDanger" class="danger_Caracters">
        <p>no se permiten caracteres </br> especiales ni mayusculas</span>`
        validarTexto(userText.value) ? aurtoencriptado(userText.value, option) 
        : EncriptDanger.innerHTML = elementHTML;
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    const textarea = document.querySelector('#textUser');

    function checkTextarea() {
        if (textarea.value.trim() === '') {
            elementHTML =` <svg  version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    	 viewBox="0 0 512 512"  xml:space="preserve">
                    <style type="text/css">
                    	.st0{fill:white;}
                    </style>
                    <g>
                    	<path class="st0 color-change" d="M329.364,237.908l42.558-39.905c25.236-23.661,39.552-56.701,39.552-91.292V49.156
                    		c0.009-13.514-5.53-25.918-14.402-34.754C388.235,5.529,375.833-0.009,362.318,0H149.681c-13.514-0.009-25.926,5.529-34.763,14.401
                    		c-8.871,8.837-14.41,21.24-14.392,34.754v57.554c0,34.591,14.315,67.632,39.552,91.292l42.55,39.888
                    		c2.342,2.205,3.678,5.271,3.678,8.492v19.234c0,3.221-1.336,6.279-3.669,8.476l-42.558,39.905
                    		c-25.237,23.652-39.552,56.701-39.552,91.292v57.554c-0.018,13.515,5.522,25.918,14.392,34.755
                    		c8.838,8.871,21.249,14.41,34.763,14.401h212.636c13.515,0.009,25.918-5.53,34.755-14.401c8.871-8.838,14.41-21.24,14.402-34.755
                    		V405.29c0-34.591-14.316-67.64-39.552-91.292l-42.55-39.897c-2.352-2.205-3.678-5.263-3.678-8.484v-19.234
                    		C325.694,243.162,327.021,240.096,329.364,237.908z M373.946,462.844c-0.009,3.273-1.274,6.056-3.411,8.218
                    		c-2.162,2.136-4.944,3.402-8.218,3.41H149.681c-3.273-0.009-6.064-1.274-8.226-3.41c-2.136-2.162-3.393-4.945-3.402-8.218V405.29
                    		c0-24.212,10.026-47.356,27.691-63.91l42.55-39.906c9.914-9.285,15.539-22.273,15.539-35.857v-19.234
                    		c0-13.592-5.625-26.58-15.547-35.866l-42.542-39.896c-17.666-16.554-27.691-39.69-27.691-63.91V49.156
                    		c0.009-3.273,1.266-6.055,3.402-8.226c2.162-2.127,4.953-3.394,8.226-3.402h212.636c3.273,0.008,6.056,1.274,8.218,3.402
                    		c2.136,2.171,3.402,4.952,3.411,8.226v57.554c0,24.22-10.026,47.356-27.692,63.91l-42.55,39.896
                    		c-9.914,9.286-15.538,22.274-15.538,35.866v19.234c0,13.584,5.625,26.572,15.547,35.874l42.541,39.88
                    		c17.666,16.563,27.692,39.707,27.692,63.919V462.844z"/>
                    	<path class="st0" d="M237.261,378.95l-77.33,77.33h192.128l-77.33-77.33C264.385,368.614,247.615,368.614,237.261,378.95z"/>
                    </g>
                    </svg>
                    <span class="textWait">Esperando Texto...</span>`

                    result.innerHTML = elementHTML;
        } 
    }

    textarea.addEventListener('input', checkTextarea);

    checkTextarea();

});

//Funcion para Cambiar el metodo de encriptacion
function metodEncriptar(option){

    const regex = /^[a-zA-Z0-9 .,]*$/;

    
        butonCesar.classList.remove('isSelected', 'notSelected');
        butonVigerene.classList.remove('isSelected', 'notSelected');
        butonXOR.classList.remove('isSelected', 'notSelected');
        butonOne.classList.remove('isSelected', 'notSelected');

        switch (option) {
            case 1:
                butonCesar.classList.add('isSelected') ;
                butonVigerene.classList.add('notSelected'); 
                butonXOR.classList.add('notSelected'); 
                butonOne.classList.add('notSelected');
                metodUse = 1;
                break;
            case 2:
                butonVigerene.classList.add('isSelected') ;
                butonCesar.classList.add('notSelected'); 
                butonXOR.classList.add('notSelected'); 
                butonOne.classList.add('notSelected');  
                metodUse = 2;
                break;
            case 3:
                butonXOR.classList.add('isSelected');
                butonCesar.classList.add('notSelected'); 
                butonVigerene.classList.add('notSelected'); 
                butonOne.classList.add('notSelected');
                metodUse = 3;
                break;
            case 4:
                butonOne.classList.add('isSelected');
                butonCesar.classList.add('notSelected'); 
                butonVigerene.classList.add('notSelected'); 
                butonXOR.classList.add('notSelected');
                metodUse = 4;
                break;
            default:
                break;
        }
    
}

//Funcion para copiar en el portapapeles
function copy(text) {

    if (!navigator.clipboard) {
        console.log("Clipboard API not available");
        return;
    }

    

    navigator.clipboard.writeText(text)
        .then(() => {
            console.log("Copied");
        })
        .catch((err) => {
            console.log("ErrorCopying: ", err);
        });
}



//Funcion que encripta según la necesidad
function encriptarText(text, option) {
    const  advertencia = document.querySelector('#textDanger')
    if(advertencia != null){
        advertencia.style.display = 'none';
    }


    let textEncrypt;

    

    if(metodUse == 1){
        textEncrypt = option == 1 ? encryptCaesar(text, 5): decryptCaesar(text, 5);
    }else if(metodUse ==2){
        textEncrypt = option == 1? encryptVigenere(text, 'as'): decryptVigenere(text, 'as');
    }else if (metodUse ==3){
        textEncrypt = option == 1? encryptXOR(text, '-'): decryptXOR(text, '-'); 
    }else if (metodUse ==4){
        textEncrypt = option == 1? OneEncript(text): OneDesencript(text);  // Este es un ejemplo, debe ser cambiado por el texto que deseas encriptar/desencriptar
    }

    textEncrypt = textEncrypt.replace(/\n/g, ' ');

    let elementHTML 
    if(metodUse == 3 && option ==1){
        elementHTML = `<span class="TextResult">Texto Encriptado, copialo!!</span>
    <img src="img/copy-icon.png" alt="copy" class="img-Copy" onclick="copy(' ${textEncrypt}')" />`;
        
    }else{
        elementHTML = `<span class="TextResult">${textEncrypt}</span>
    <img src="img/copy-icon.png" alt="copy" class="img-Copy" onclick="copy(' ${textEncrypt}')" />`;
    }


    
    
    console.log(textEncrypt);

    result.innerHTML = elementHTML;
}
//Funcion de encriptado de ONE
function OneEncript(text){
    let t
    t = text.split("");
    for(let i=0; i< t.length; i++){
      if(t[i] === 'a'){
          t[i] = 'ai';
      }
      if(t[i] === 'e'){
          t[i] = 'enter';
      }
      if(t[i] === 'i'){
          t[i] = 'imes';
      }
      if(t[i] === 'o'){
          t[i] = 'ober';
      }
      if(t[i] === 'u'){
          t[i] = 'ufat';
      }
    }
    return t.join("");
  }
  
  
  function OneDesencript(text) {
      let palabra = '';
      for (let i = 0; i < text.length; i++) {
          if (text.substr(i, 2) === 'ai') {
              palabra += 'a';
              i += 1;
          } else if (text.substr(i, 5) === 'enter') {
              palabra += 'e';
              i += 4;
          } else if (text.substr(i, 4) === 'imes') {
              palabra += 'i';
              i += 3;
          } else if (text.substr(i, 4) === 'ober') {
              palabra += 'o';
              i += 3;
          } else if (text.substr(i, 4) === 'ufat') {
              palabra += 'u';
              i += 3;
          } else {
              palabra += text[i];
          }
      }
      return palabra;
  }

//Funciones del encriptado de cesar
function encryptCaesar(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        if (char >= 65 && char <= 90) {
            result += String.fromCharCode((char - 65 + shift) % 26 + 65);
        } else if (char >= 97 && char <= 122) {
            result += String.fromCharCode((char - 97 + shift) % 26 + 97);
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}

function decryptCaesar(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);

        if (char >= 65 && char <= 90) { // Para letras mayúsculas
            result += String.fromCharCode((char - 65 - shift + 26) % 26 + 65);
        } else if (char >= 97 && char <= 122) { // Para letras minúsculas
            result += String.fromCharCode((char - 97 - shift + 26) % 26 + 97);
        } else { // Para otros caracteres
            result += text.charAt(i);
        }
    }
    return result;
}


// Encriptado Vigenèrefunction convertLetrre(text){
function convertLetrre(text){
    return text.toLowerCase();
    
}



function encryptVigenere(text, keyword) {
    let result = '';
    text=convertLetrre(text);
    
    for (let i = 0, j = 0; i < text.length; i++) {
        let char = text.charCodeAt(i); // Obtiene el código ASCII del carácter en la posición i del texto.
        if (char >= 65 && char <= 90) { // Si el carácter es una letra mayúscula.
            result += String.fromCharCode((char - 65 + keyword.charCodeAt(j % keyword.length) - 65) % 26 + 65);
            j++; // Incrementa j solo si el carácter es una letra.
        } else if (char >= 97 && char <= 122) { // Si el carácter es una letra minúscula.
            result += String.fromCharCode((char - 97 + keyword.charCodeAt(j % keyword.length) - 97) % 26 + 97);
            j++; // Incrementa j solo si el carácter es una letra.
        } else { // Si el carácter no es una letra (por ejemplo, un espacio, un número, un símbolo).
            result += text.charAt(i); // Agrega el carácter tal cual al resultado.
        }
    }
    return result;
}

// Desencriptado Vigenère
function decryptVigenere(text, keyword) {
    let result = '';
    for (let i = 0, j = 0; i < text.length; i++) {
        let char = text.charCodeAt(i); 
        if (char >= 65 && char <= 90) {
            result += String.fromCharCode((char - 65 - (keyword.charCodeAt(j % keyword.length) - 65) + 26) % 26 + 65);
            j++; // Incrementa j solo si el carácter es una letra.
        } else if (char >= 97 && char <= 122) {
            result += String.fromCharCode((char - 97 - (keyword.charCodeAt(j % keyword.length) - 97) + 26) % 26 + 97);
            j++; // Incrementa j solo si el carácter es una letra.
        } else {
            result += text.charAt(i); // Agrega el carácter tal cual al resultado.
        }
    }
    return result;
}

// Encriptado XOR
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