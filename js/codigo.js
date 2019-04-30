function copyAnio() {
  let anio = new Date ().getFullYear(); //funcion que me devuelve el año
  document.getElementById("copyanio").innerHTML = anio;
}

/*crear un boton con el título"FECHA-HORA" que al hacer click sobre el muuestre la fecha y hora*/

function fechaHora() {
  let fecha = new Date();
  let dia, hora;
  //los indices de los elementos del array coinciden con los valores de .getDay()
  let arrSemana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sabado'];
  dia = arrSemana [fecha.getDay()];
  hora = fecha.getHours() + ':' + (fecha.getMinutes()<10?'0':'') + fecha.getMinutes();
  document.getElementById("fechahora").innerHTML = "<strong>RESULTADOS:</strong> Hoy es:" + dia + '. La hora actual es ' + hora + '.';
}



function voltear() {
  let numero = prompt("Por favor introduce un numero de más de un digito:");
  let invertido;
  if (numero != null && numero != undefinded && numero != '' && numero.length >1){
    invertido = invertir(numero);
    alert("El numero " + numero + " invertido es" + invertido + '. ');
  } else {
    alert ("Lo que ha introducido no es valido. vuelva a intentarlo.");
  }

}

function invertir () {
  let arr = parcadena.split('');
  arr.reverse();
  return arr.join('');

}