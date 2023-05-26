document.addEventListener('DOMContentLoaded', function() {
  const btnEncriptar = document.getElementById('btnEncriptar');
  const btnDesencriptar = document.getElementById('btnDesencriptar');
  const textoInput = document.getElementById('texto');
  const resultadoInput = document.getElementById('resultado');

  btnEncriptar.addEventListener('click', function() {
    const texto = textoInput.value.toLowerCase();
    if (validarTexto(texto)) {
      const textoEncriptado = encriptarTexto(texto);
      resultadoInput.value = textoEncriptado;
    } else {
      alert('El texto contiene mayúsculas, acentos o caracteres especiales. Por favor, introduce solo letras minúsculas sin acentos ni caracteres especiales.');
    }
  });

  btnDesencriptar.addEventListener('click', function() {
    const textoEncriptado = textoInput.value.toLowerCase();
    if (validarTexto(textoEncriptado)) {
      const textoDesencriptado = desencriptarTexto(textoEncriptado);
      resultadoInput.value = textoDesencriptado;
    } else {
      alert('El texto contiene mayúsculas, acentos o caracteres especiales. Por favor, introduce solo letras minúsculas sin acentos ni caracteres especiales.');
    }
  });

  function validarTexto(texto) {
    const regex = /^[a-z]+$/;
    return regex.test(texto);
  }

  function encriptarTexto(texto) {
    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
      const letra = texto[i];
      switch (letra) {
        case 'e':
          textoEncriptado += 'enter';
          break;
        case 'i':
          textoEncriptado += 'imes';
          break;
        case 'a':
          textoEncriptado += 'ai';
          break;
        case 'o':
          textoEncriptado += 'ober';
          break;
        case 'u':
          textoEncriptado += 'ufat';
          break;
        default:
          textoEncriptado += letra;
          break;
      }
    }
    return textoEncriptado;
  }

  function desencriptarTexto(textoEncriptado) {
    let textoDesencriptado = '';
    let i = 0;
    while (i < textoEncriptado.length) {
      const letra = textoEncriptado.substring(i, i + 5);
      switch (letra) {
        case 'enter':
          textoDesencriptado += 'e';
          break;
        case 'imes':
          textoDesencriptado += 'i';
          break;
        case 'ai':
          textoDesencriptado += 'a';
          break;
        case 'ober':
          textoDesencriptado += 'o';
          break;
        case 'ufat':
          textoDesencriptado += 'u';
          break;
        default:
          textoDesencriptado += letra;
          break;
      }
      i += 5;
    }
    return textoDesencriptado;
  }
});

