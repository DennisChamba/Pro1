
function formatoTiempo(valor) {
  return valor.toString().padStart(2, "0");
}

function pomodoro() {
  clearInterval(pomodoro);

  // Crea dos objetos Date
  var fecha1 = new Date("2023-05-12");
  var fecha2 = new Date();

  // Calcula la diferencia entre las fechas en milisegundos
  var diferencia = Math.abs(fecha1.getTime() - fecha2.getTime());

  // Convierte la diferencia en días, horas, minutos y segundos
  var segundos = Math.floor(diferencia / 1000);
  var minutos = Math.floor(segundos / 60);
  var horas = Math.floor(minutos / 60);
  var dias = Math.floor(horas / 24);

  horas = horas % 24;
  minutos = minutos % 60;
  segundos = segundos % 60;

  let pomodoros = setInterval(() => {
    if (segundos == 1 && minutos == 0 && horas == 0) {
      clearInterval(pomodoro);
    }
    if (segundos == 0 && (minutos > 0 || horas > 0)) {
      segundos = 59;
      minutos = minutos - 1;
    } else {
      segundos = segundos - 1;
    }
    if (minutos == 0 && horas > 0) {
      minutos = 59;
      horas = horas - 1;
    }
    if (horas == 0 && dias > 0) {
      horas = 23;
      dias = dias - 1;
    }
    
    document.getElementById("hora").innerHTML = `${formatoTiempo(dias)}:${formatoTiempo(horas)}:${formatoTiempo(minutos)}:${formatoTiempo(segundos)}`;
  }, 1000);
}
