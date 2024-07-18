function convertLetrre(text){
    return text.toLowerCase();
    
}

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
function other(t){

    let p =t.replace("a", 'ai')
    p=p.replace("e", 'enter')
    p=p.replace("i", 'imes')
    p=p.replace("o", 'ober')
    p=p.replace("u", 'ufat')
    return p
}
let a = OneEncript("unir uvas");
a

let r = OneDesencript("ufatnimesr ufatvais");
r