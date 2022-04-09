const textoDigitado = document.querySelector("input[type=tel]");
const ligar = document.querySelector("input[type=button]");

ligar.onclick = function () {
    textoDigitado.value = "";
};

const teclado = document.querySelectorAll("input[type=button]");
for (i = 0; i < teclado.length; i++) {
  const tecla = teclado[i];

  tecla.onclick = function () {
      textoDigitado.value += tecla.value;
  }
}
