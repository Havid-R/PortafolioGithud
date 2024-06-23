const valores = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, h: 7, i: 8, j: 9, k: 0};
let memoria = 0;
let pantalla = document.getElementById("pantalla");
let resultado = ""; 
let operacionSimbolo = "";
let numeroPantalla = document.getElementById("numeroPantalla");
// operaciones
function suma(num, num2) {
  return num + num2;
}
function resta(num,num2) {
  return num - num2;
}
function multiplicacion(num,num2) {
  return num * num2;
}
function dividir(num,num2) {
  return num / num2;
}
function MC() {
  memoria = 0;
}
function MR() {
  return memoria;
}
function MS(num) {
  memoria = num;
}
function Mplus(num) {
  memoria += num;
}
function Mminus(num) {
  memoria -= num;
}
function CE() {
  pantalla.innerHTML = "";
}

function C() {
  pantalla.innerHTML = "";
  numeroPantalla.innerHTML = "";
  num1 = "";
  num2 = "";
  operacion = null;
  operacionSimbolo = "";
}

function reinvertir(num) {
  return num * -1;
}
function raiz(num) {
  return Math.sqrt(num);
}
function porcentaje(num) {
  return num / 100;
}
function agregarComa() {
  if (!pantalla.innerHTML.includes(".")) {
    pantalla.innerHTML += ".";
  }
}

function reciproco(num) {
  return 1 / num;
}

// Botón de agregar coma
document.getElementById("coma").onclick = function() { 
  agregarComa();
};


// botones de números
let botones = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k"];
botones.forEach(function(boton) {
  document.getElementById(boton).onclick = crearManejador(boton);
});

function crearManejador(boton) {
  return function() {
    pantalla.innerHTML += valores[boton];
  };
}


// botones de operaciones
let operacion = "";
let num1 = "";
let num2 = "";
document.getElementById("suma").onclick = function() {
  if (num1 && operacion) {
    num2 = pantalla.innerHTML;
    let resultado = operacion(parseFloat(num1), parseFloat(num2));
    pantalla.innerHTML = resultado;
    num1 = resultado;
    num2 = "";
  } else {
    num1 = pantalla.innerHTML;
  }
  operacion = suma;
  operacionSimbolo = " +"; 
  numeroPantalla.innerHTML = num1 + operacionSimbolo; 
  pantalla.innerHTML = ""; 
};
document.getElementById("resta").onclick = function() {
  num1 = pantalla.innerHTML;
  operacion = resta;
  operacionSimbolo = " -"; 
  numeroPantalla.innerHTML = num1 + operacionSimbolo; 
  pantalla.innerHTML = "";
};
document.getElementById("multiplicacion").onclick = function() {
  num1 = pantalla.innerHTML;
  operacion = multiplicacion;
  operacionSimbolo = " *"; 
  numeroPantalla.innerHTML = num1 + operacionSimbolo; 
  pantalla.innerHTML = "";
};
document.getElementById("division").onclick = function() {
  num1 = pantalla.innerHTML;
  operacion = dividir;
  operacionSimbolo = " /"; 
  numeroPantalla.innerHTML = num1 + operacionSimbolo; 
  pantalla.innerHTML = "";
};

document.getElementById("CE").onclick = function() {
  CE();
};

document.getElementById("C").onclick = function() {
  C();
};

document.getElementById("reinvertir").onclick = function() {
  pantalla.innerHTML = reinvertir(parseFloat(pantalla.innerHTML));
};

document.getElementById("raiz").onclick = function() {
  pantalla.innerHTML = raiz(parseFloat(pantalla.innerHTML));
};

document.getElementById("porcentaje").onclick = function() {
  pantalla.innerHTML = porcentaje(parseFloat(pantalla.innerHTML));
};


// Botón de memoria
document.getElementById("MC").onclick = function() {
  MC();
  numeroPantalla.innerHTML = "Memoria borrada"; 
};

document.getElementById("MR").onclick = function() {
  pantalla.innerHTML = MR();
};

document.getElementById("MS").onclick = function() {
  MS(parseFloat(pantalla.innerHTML));
  numeroPantalla.innerHTML = "Memoria guardada: " + memoria;
  pantalla.innerHTML = "";
};

document.getElementById("Mx").onclick = function() {
  Mplus(parseFloat(pantalla.innerHTML));
  numeroPantalla.innerHTML = "Memoria aumentada: " + memoria; 
  pantalla.innerHTML = "";
};

document.getElementById("Mn").onclick = function() {
  Mminus(parseFloat(pantalla.innerHTML));
  numeroPantalla.innerHTML = "Memoria disminuida: " + memoria;
  pantalla.innerHTML = "";
};

// botón de igual
document.getElementById("igual").onclick = function() {
  num2 = pantalla.innerHTML;
  let resultado = operacion(parseFloat(num1), parseFloat(num2));
  pantalla.innerHTML = resultado;
  numeroPantalla.innerHTML = ""; 
  num1 = resultado;
  num2 = "";
  operacion = null;
  operacionSimbolo = ""; 
};
// botón cientifica
document.getElementById("cientifica").onclick = function(){
  document.getElementById("contenedorT").style.display = "grid";
  document.getElementById("contenedorB").style.left = "63%";
}

// Funciones adicionales
function sexagesimalToDecimal(num) {
  let parts = num.split(":");
  let decimal = parseFloat(parts[0]) + parseFloat(parts[1])/60 + parseFloat(parts[2])/3600;
  return decimal;
}
function In(num) {
  return Math.log2(num);
}

function radianToDegree(num) {
  return num * (180 / Math.PI);
}

function degreeToRadian(num) {
  return num * (Math.PI / 180);
}

function inverse(num) {
  return 1 / num;
}

function square(num) {
  return num * num;
}

function cube(num) {
  return num * num * num;
}

function factorial(num) {
  if(num < 0) 
    return -1;
  else if(num == 0) 
    return 1;
  else {
    let fact = 1;
    for(let i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  }
}

function power(num, exponent) {
  return Math.pow(num, exponent);
}

function root(num, root) {
  return Math.pow(num, 1 / root);
}

function logarithm(num) {
  return Math.log(num);
}

function exponential(num) {
  return Math.exp(num);
}

function modulo(num1, num2) {
  return num1 % num2;
}
function exp(num) {
  return Math.pow(10, num);
}

function pi() {
  return Math.PI;
}

function dmsToDecimal(dms) {
  let parts = dms.split(":");
  let decimal = parseFloat(parts[0]) + parseFloat(parts[1])/60 + parseFloat(parts[2])/3600;
  return decimal;
}

function cosh(num) {
  return (Math.exp(num) + Math.exp(-num)) / 2;
}

function cos(num) {
  return Math.cos(num);
}

function sinh(num) {
  return (Math.exp(num) - Math.exp(-num)) / 2;
}

function sin(num) {
  return Math.sin(num);
}

function cubeRoot(num) {
  return Math.cbrt(num);
}


function int(num) {
  return Math.floor(num);
}

function openParenthesis() {
  return "(";
}

function closeParenthesis() {
  return ")";
}

//botones adicionales
document.getElementById("sexagesimal").onclick = function() {
  pantalla.innerHTML = sexagesimalToDecimal(parseFloat(pantalla.innerHTML));
  document.getElementById("sexagesimal").style.background = "rgba(255, 0, 0, 0.2)";
};

document.getElementById("radianesG").onclick = function() {
  pantalla.innerHTML = radianToDegree(parseFloat(pantalla.innerHTML));
};

document.getElementById("gradosR").onclick = function() {
  pantalla.innerHTML = degreeToRadian(parseFloat(pantalla.innerHTML));
};

document.getElementById("inv").onclick = function() {
  pantalla.innerHTML = inverse(parseFloat(pantalla.innerHTML));
};

document.getElementById("x2").onclick = function() {
  pantalla.innerHTML = square(parseFloat(pantalla.innerHTML));
};

document.getElementById("x3").onclick = function() {
  pantalla.innerHTML = cube(parseFloat(pantalla.innerHTML));
};

document.getElementById("factorial").onclick = function() {
  pantalla.innerHTML = factorial(parseFloat(pantalla.innerHTML));
};

document.getElementById("power").onclick = function() {
  num1 = parseFloat(pantalla.innerHTML);
  operacion = power;
  operacionSimbolo = " ^"; 
  numeroPantalla.innerHTML = num1 + operacionSimbolo; 
  pantalla.innerHTML = "";
};

document.getElementById("root").onclick = function() {
  num1 = parseFloat(pantalla.innerHTML);
  operacion = root;
  operacionSimbolo = " √"; 
  numeroPantalla.innerHTML = num1 + operacionSimbolo; 
  pantalla.innerHTML = "";
};
document.getElementById("exp10").onclick = function() {
  pantalla.innerHTML = exp(parseFloat(pantalla.innerHTML));
};

document.getElementById("pi").onclick = function() {
  pantalla.innerHTML = pi();
};

document.getElementById("dms").onclick = function() {
  pantalla.innerHTML = dmsToDecimal(pantalla.innerHTML);
};

document.getElementById("cosh").onclick = function() {
  pantalla.innerHTML = cosh(parseFloat(pantalla.innerHTML));
};

document.getElementById("cos").onclick = function() {
  pantalla.innerHTML = cos(parseFloat(pantalla.innerHTML));
};

document.getElementById("int").onclick = function() {
  pantalla.innerHTML = int(parseFloat(pantalla.innerHTML));
};

document.getElementById("sinh").onclick = function() {
  pantalla.innerHTML = sinh(parseFloat(pantalla.innerHTML));
};

document.getElementById("sin").onclick = function() {
  pantalla.innerHTML = sin(parseFloat(pantalla.innerHTML));
};

document.getElementById("cubeRoot").onclick = function() {
  pantalla.innerHTML = cubeRoot(parseFloat(pantalla.innerHTML));
};

document.getElementById("openParenthesis").onclick = function() {
  pantalla.innerHTML += openParenthesis();
};

document.getElementById("closeParenthesis").onclick = function() {
  pantalla.innerHTML += closeParenthesis();
};
document.getElementById("in").onclick = function() {
  pantalla.innerHTML = In(parseFloat(pantalla.innerHTML));
};

