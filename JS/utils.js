// Funciones de formateo (como en el ejemplo anterior)
function formatearFecha(fecha) {
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const año = fecha.getFullYear();
    return `${dia}/${mes}/${año}`;
}

function formatearHora(fecha) {
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
}

function semaforoSoles(monto){
    console.log("Semáforo Soles");
    switch (true) {
        case (monto < 300):
          console.log("Semáforo: low");
          return 'low';
          break;
        case (monto >= 300 && monto < 1000):
          console.log("Semáforo: regular");
          return 'regular';
          break;
        case (monto >= 1000):
          console.log("Semáforo: extra");
          return 'extra';
          break;
      }
}

function semaforoDolares(monto){
    console.log("Semáforo Dolares");
    switch (true) {
        case (monto < 100):
          console.log("Semáforo: low");
          return 'low';
          break;
        case (monto >= 100 && monto < 300):
          console.log("Semáforo: regular");
          return 'regular';
          break;
        case (monto >= 300):
          console.log("Semáforo: extra");
          return 'extra';
          break;;
      }
}
