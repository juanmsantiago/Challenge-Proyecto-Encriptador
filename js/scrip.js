const encriptar = (mensaje) => {
    const encriptacion = {
        e: 'enter',
        i: 'imes',
        a: 'ai',
        o: 'ober',
        u: 'ufat', 
    };
    return mensaje
    .split('')
    .map((letra) => encriptacion[letra] || letra)
    .join('');
};
  
const desencriptar = (mensaje) => {
    const desencriptacion = {
        enter: 'e',
        imes: 'i',
        ai: 'a',
        ober: 'o',
        ufat: 'u',
    };
    
    return mensaje
    .split(/(enter|imes|ai|ober|ufat)/)
    .map((palabra) => desencriptacion[palabra] || palabra)
    .join('');
};
  
const txtEscribir = document.querySelector(".txt-escribir");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const txtMensaje = document.querySelector(".txt-mensaje");
const btnCopiar = document.querySelector(".btn-copiar");
const divTexto = document.querySelector(".no-encontrado");

btnEncriptar.addEventListener('click', () => {
    const mensaje = txtEscribir.value.toLowerCase();
    const mensajeEncriptado = encriptar(mensaje);
    txtMensaje.value = mensajeEncriptado;
    txtEscribir.value = "";
    txtMensaje.style.backgroundImage = "none";
    divTexto.innerHTML = "";
});

btnDesencriptar.addEventListener('click', () => {
    const mensajeEncriptado = txtEscribir.value.toLowerCase();
    const mensajeDesencriptado = desencriptar(mensajeEncriptado);
    txtMensaje.value = mensajeDesencriptado;
    txtEscribir.value = "";
    txtMensaje.style.backgroundImage = "none";
    divTexto.innerHTML = "";
});
  
txtMensaje.addEventListener('input', () => {
    const mensajeEncriptado = txtMensaje.value.toLowerCase();
    const mensajeDesencriptado = desencriptar(mensajeEncriptado);
    txtEscribir.value = mensajeDesencriptado;
});

btnCopiar.addEventListener('click', () => {
    txtMensaje.select();
    document.execCommand('copy');
    txtMensaje.value = "";
});


