/* _________________________Keys___________________________
"oC"= Original Character------"eC" = Encrypted Character */

let oC1 = "a";  /* change to */ let eC1 = "ai";
let oC2 = "e";  /* change to */ let eC2 = "enter";
let oC3 = "i";  /* change to */ let eC3 = "imes";
let oC4 = "o";  /* change to */ let eC4 = "ober";
let oC5 = "u";  /* change to */ let eC5 = "ufat";

/* ________________________________________________________*/


/* Función valores de entrada */
function inputValue(){
    let inputText = document.getElementById('input-block__textarea-show').value;
    if(inputText == ""){
        showAlertInputEmpty();
        return 0;
    }
    if(!/^[a-zñ\s.,;¡!¿?]+$/.test(inputText)){
        showAlert();
        return 0;
    }    else {
        return inputText; 
    }   
}

/* Función condicionamiento de los valores de entrada */
function inputTextConditioning(value){
    if(/[A-Z]/.test(value)){
        alert('Al suave tiene mayusculas esa onda');
        return false;
    }    else {
        return true;
    }
}

/* Función alerta (muestra una alerta cuando el usuario ingresa texto no admitido)*/
function showAlert() {
    Swal.fire({
      title: 'Datos no admitidos',
      text: 'Sólo se admiten letras minúsculas sin acentos y sin caracteres especiales',
      icon: 'warning',
      confirmButtonText: 'Modificar'
     
    });
  }

/* Función alerta (muestra una alerta cuando el usuario no ha ingresado ningun valor)*/
  function showAlertInputEmpty() {
    Swal.fire({
      title: 'No se encontraron datos',
      text: 'Ingrese su texto por favor',
      icon: 'warning',
      confirmButtonText: 'Ingresar'
     
    });
  }

/* Función encriptacion del valor de entrada */
function encryptedFunction(evaluatedText){
    if(evaluatedText !=0){
     let encryptedText = "";
     for(let i = 0; i < evaluatedText.length; i++){
         switch(evaluatedText[i]){
             case oC1:
                 encryptedText += eC1
                 break;
             case oC2:
                 encryptedText += eC2
                 break;
             case oC3:
                 encryptedText += eC3
                 break;
             case oC4:
                 encryptedText += eC4
                 break;
             case oC5:
                 encryptedText += eC5
                 break;
             default:
                 encryptedText += evaluatedText[i]
                 break;
         }
     }
     showElements('encryptor-block__full-copy-button');
     hideElements(['encryptor-block__empty-img-muneco','encryptor-block__empty-texts'])
     printFuntion('encryptor-block__full-text-encrypted-decrypted',encryptedText);
     cleanInput();
 }    
 }
 
 /* Función desencriptacion del valor de entrada */
  function decryptedFunction(evaluatedText){
     if(evaluatedText !=0){
     let decryptedText = evaluatedText.replace(RegExp(eC1, 'g'), oC1);
     decryptedText = decryptedText.replace(RegExp(eC2, 'g'), oC2);
     decryptedText = decryptedText.replace(RegExp(eC3, 'g'), oC3);
     decryptedText = decryptedText.replace(RegExp(eC4, 'g'), oC4);
     decryptedText = decryptedText.replace(RegExp(eC5, 'g'), oC5);
     showElements('encryptor-block__full-copy-button');
     hideElements(['encryptor-block__empty-img-muneco','encryptor-block__empty-texts'])
     printFuntion('encryptor-block__full-text-encrypted-decrypted',decryptedText);
     cleanInput();
 } 
  }

/* Función copia de texto generado (permite copiar el texto ya encriptado o desencriptado y lo almacena en el portapapeles) */
function copyGeneratedText(copiedElement) {
    let generated = document.getElementById(copiedElement).textContent;
    navigator.clipboard.writeText(generated);
    showAlertCopy();
}

/* Función alerta (muestra una alerta cuando se ha realizado la copia del texto encriptado o desencriptado)*/
function showAlertCopy() {
    Swal.fire({
      title: 'Copia de datos',
      text: 'Se ha copiado con éxito al portapapeles',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  }

 /* Función impresión del valor. (La funcion permite imprimir el contenido deseado en cualquier elemento que lo admita) */
 function printFuntion(whereTo,thisOne){
    document.getElementById(whereTo).textContent = thisOne;
    }

/* Función limpieza de la entrada de valores */
function cleanInput(){
    let inputText = document.querySelector('#input-block__textarea-show');
    inputText.value = '';
}

/* Función mostrar elemento (permite manipular un elemento deseado y cambiar su valor a visible) */
  function showElements(elemtToShow){
    document.getElementById(elemtToShow).style.display = 'block';
  }

/* Función ocultar elemento (permite manipular un elemento deseado y cambiar su valor a no visible) */
  function hideElements(elemtToHide){
    for(let i =0; i < elemtToHide.length; i++){
    document.getElementById(elemtToHide[i]).style.display = 'none';
    }
  }
