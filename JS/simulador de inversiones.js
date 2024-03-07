// Varibles Globales
let costo, litros, kilometros, dias, resultado;

function consumo() {
    costo = document.getElementById("costo").value;
    litros = document.getElementById("litros").value;
    dias = document.getElementById("dias").value;
    km = document.getElementById('km').value; 
    return ((costo/litros)*km)*dias;
};

let input = document.getElementsByTagName("INPUT")

for (i=0; i<input.length; i++) {
    input[i].addEventListener("change",  function(){
    resultado = consumo();
    resultado = resultado.toFixed(2);
    resultado = resultado.toString();
    resultado = resultado.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
     console.log(resultado);
    });
   };
  

function mostrar() {
    document.getElementById('resultado').innerHTML = resultado;
};

