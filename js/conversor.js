/* Desde acá */

function encederApagar() {
  if (on) {
    resultado = 0.0;
    document.getElementById("valor-actual").innerHTML = "";
    limpiarOpacidad();
    binario = false;
    octal = false;
    hexadecimal = false;
    on = false;
  } else {
    document.getElementById("valor-actual").innerHTML = resultado;
    on = true;
  }
}

function calcularBinarioOctal(num, base) {
  var parteDecimal = num % 1;
  var parteEntera = num - parteDecimal;
  parteEntera = parseInt(parteEntera);

  let cadena = "";

  var exp = 0;
  var numeroEntero = 0;
  var digito = 0;
  while (parteEntera != 0) {
    digito = parteEntera % base;
    numeroEntero += digito * Math.pow(10, exp);
    parteEntera = Math.floor(parteEntera / base);
    exp++;
  }

  cadena = numeroEntero.toString() + ",";

  exp = -1;
  while (exp > -4) {
    digito = parteDecimal * base;
    parteDecimal = digito % 1;
    parteEntera = digito - parteDecimal;
    cadena += parteEntera.toString();
    exp--;
  }

  return cadena;
}

function obtenerDigitoEnHexadecimal(digito) {
  if (digito === 10) {
    digito = "A";
  } else if (digito === 11) {
    digito = "B";
  } else if (digito === 12) {
    digito = "C";
  } else if (digito === 13) {
    digito = "D";
  } else if (digito === 14) {
    digito = "E";
  } else if (digito === 15) {
    digito = "F";
  } else {
    digito = digito.toString();
  }
  return digito;
}

function calcularHexadecimal(num) {
  var parteDecimal = num % 1;
  var parteEntera = num - parteDecimal;
  parteEntera = parseInt(parteEntera);

  let cadenaHexadecimal = "";

  var exp = 0;
  var digito = 0;
  while (parteEntera != 0) {
    digito = parteEntera % 16;
    cadenaHexadecimal = obtenerDigitoEnHexadecimal(digito) + cadenaHexadecimal;
    parteEntera = Math.floor(parteEntera / 16);
    exp++;
  }

  cadenaHexadecimal += ",";

  exp = -1;
  while (exp > -4) {
    digito = parteDecimal * 16;
    parteDecimal = digito % 1;
    parteEntera = digito - parteDecimal;
    cadenaHexadecimal =
      cadenaHexadecimal + obtenerDigitoEnHexadecimal(parteEntera);
    exp--;
  }

  return cadenaHexadecimal;
}

function calcularBase(value) {
  if (binario) {
    return calcularBinarioOctal(value, 2);
  } else if (octal) {
    return calcularBinarioOctal(value, 8);
  } else if (hexadecimal) {
    return calcularHexadecimal(value);
  } else {
    return value;
  }
}

function calcular() {
  if (on) {
    var getValue = document.getElementById("valor-actual").innerHTML;
    document.getElementById("valor-actual").innerHTML = calcularBase(getValue);
  } else {
    alert("La calculadora está apagada...");
  }
}

function modificarResultado(valor) {
  if (on) {
    resultado = valor;
    valorAnterior = valor;
    document.getElementById("valor-actual").innerHTML = resultado;
  } else {
    alert("La calculadora está apagada...");
  }
}

function limpiarOpacidad() {
  document.getElementById("binario").style.opacity = "0.6";
  document.getElementById("octal").style.opacity = "0.6";
  document.getElementById("hexadecimal").style.opacity = "0.6";
}

function modificarBases(bin, oct, hex) {
  if (on) {
    document.getElementById("valor-actual").innerHTML = valorAnterior;
    binario = bin;
    octal = oct;
    hexadecimal = hex;
    limpiarOpacidad();
    if (binario) {
      document.getElementById("binario").style.opacity = "1";
    }
    if (octal) {
      document.getElementById("octal").style.opacity = "1";
    }
    if (hexadecimal) {
      document.getElementById("hexadecimal").style.opacity = "1";
    }
  } else {
    alert("La calculadora está apagada...");
  }
}

const PI = 3.14;
const ACELERACION_DE_LA_GRAVEDAD = 9.8;
const NUMERO_PRIMO_100 = 541;
const TERMINO_28_FIBONACCI = 317811;
const NUMERO_PERFECTO_3_DIGITOS = 496;

let on = false;

let resultado = 0.0;
let valorAnterior = 0.0;

let binario = false;
let octal = false;
let hexadecimal = false;

var onoff = document.getElementById("onoff");
onoff.onclick = encederApagar;

var enter = document.getElementById("enter");
enter.onclick = calcular;
