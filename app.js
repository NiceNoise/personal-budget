// Array para almacenar movimientos
let movimientos = [];

// Obtener referencias a elementos del DOM
const formularioMovimiento = document.getElementById('formularioMovimiento');
const btnHistorial = document.getElementById('mostrarHistorial');
const listaHistorial = document.getElementById('listaHistorial');

// Evento para registrar movimiento
formularioMovimiento.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Obtener valores del formulario
    const tipoMovimiento = document.querySelector('input[name="tipoMovimiento"]:checked').value;
    const montoFinal= parseFloat(document.getElementById('monto').value);

    // Crear objeto de movimiento
    const movimiento = {
        tipo: tipoMovimiento,
        monto: montoFinal
    };

    // Agregar al array de movimientos
    movimientos.push(movimiento);

    //ordenar
    const ordenado = movimientos.sort((a, b) => {
        // Primero compara por tipo
        if (a.tipo !== b.tipo) {
            return b.tipo.localeCompare(a.tipo);
        }
        
        // Si los tipos son iguales, compara por monto
        return b.monto - a.monto;
    });

    // Limpiar formulario
    formularioMovimiento.reset();

    console.log(movimientos);
    console.log(ordenado);
    
});

// Evento para mostrar historial
btnHistorial.addEventListener('click', function() {
    // Limpiar lista anterior
    listaHistorial.innerHTML = '';

    /* Recorrer y mostrar movimientos
    movimientos.forEach((mov, index) => {
        const li = document.createElement('li');
        li.textContent = `Movimiento ${index + 1}: ${mov.tipo.toUpperCase()} - S/ ${Math.abs(mov.monto).toFixed(2)}`;
        
        // Aplicar clase de color según tipo
        li.classList.add(mov.tipo === 'ingreso' ? 'ingreso' : 'egreso');
        
        listaHistorial.appendChild(li);
    });
    */

    /* Recorre y mostrar movimientos
    let i=0;
    for(mov of movimientos){
        i++;

        const li=document.createElement('li');
        //li.textContent='Movimento ('+ i +') ('+mov.tipo+') '+mov.monto;
        li.textContent='('+mov.tipo+') S/. '+Math.abs(mov.monto).toFixed(2)

        if(mov.tipo==='ingreso'){
            li.classList.add('ingreso');
        }else{
            li.classList.add('egreso');
        }

        listaHistorial.appendChild(li);
    };
    */

    // Recorre y mostrar movimientos
    let i=0;
    for(mov of movimientos){
        i++;

        const li=document.createElement('li');

        const pTipo=document.createElement('p');
        const pMonto=document.createElement('p');

        pTipo.textContent=mov.tipo;
        pMonto.textContent='S/. '+Math.abs(mov.monto).toFixed(2);

        pTipo.style.margin=0;
        pTipo.style.padding=0;
        pMonto.style.margin=0;
        pMonto.style.padding=0;
        
        if(mov.tipo==='ingreso'){
            pTipo.classList.add('ingreso');
            pMonto.classList.add('ingreso');
        }else{
            pTipo.classList.add('egreso');
            pMonto.classList.add('egreso');
        }


        li.appendChild(pTipo);
        li.appendChild(pMonto);
        listaHistorial.appendChild(li);
    }


});