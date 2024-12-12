//----------------------------------------------------------------
//------------------ Begin: Global Variables ---------------------
//----------------------------------------------------------------

const eWallet= new Budget([0.00,0.00]);


//----------------------------------------------------------------
//--------------- Begin: Get Transaction from Form ---------------
//----------------------------------------------------------------

//DOM Varibale
const transactionForm= document.getElementById('transactionForm');
const selectCategory = document.getElementById('category');

//Event Listener
transactionForm.addEventListener('submit',submitRecordTransaction);

//function triggered by submit
function submitRecordTransaction(event){
    event.preventDefault();
    getDataEntryTransactionForm();
    //updateBalance();
}

//functions
function getDataEntryTransactionForm() {

    // DOM
    let type = document.querySelector('input[name="type"]:checked').value;
    let currency = document.querySelector('input[name="currency"]:checked').value;
    let amount= parseFloat(document.getElementById('amount').value);
    let category  = selectCategory.options[selectCategory.selectedIndex].value;
    let description= document.getElementById('description').value;

    //create a new transaction
    const trx= new Transaction(type,amount,currency,category,description);
    

    // add to eWallet
    let message = eWallet.addTransaction(trx)
    console.log(trx);
    console.log(message);
    console.log(eWallet);
    
    // clean form
    transactionForm.reset();
    
}



//----------------------------------------------------------------
//---------------------------- Borrador --------------------------
//----------------------------------------------------------------

/*

//Definición de Variables y Constantes

let movimientos = [];  // Array para almacenar movimientos

const formularioMovimiento= document.getElementById('formularioMovimiento');
const btnHistorialxRegistro = document.getElementById('mostrarHistorialxRegistro');
const btnHistorialxMonto= document.getElementById('mostrarHistorialxMonto');
const listaHistorial = document.getElementById('listaHistorial');
const balanceSoles = document.getElementById('balanceSoles');
const balanceDolares = document.getElementById('balanceDolares');
const tipoCambioCompra =document.getElementById('tipoCambioCompra');
const tipoCambioVenta =document.getElementById('tipoCambioVenta');


//Listener de Eventos
formularioMovimiento.addEventListener('submit',submitRegistrarMovimiento);
btnHistorialxRegistro.addEventListener('click', funcionMostrarHistorialxRegistroSimple);  
btnHistorialxMonto.addEventListener('click',funcionMostrarHistorialxMontoSimple);


//funciones

function submitRegistrarMovimiento(evento){
    evento.preventDefault();
    capturarDatosFormulario();
    actualizarBalance();
}

function actualizarBalance(){

    let resultado={
        USD: 0.00,
        PEN: 0.00
      };

    resultado = movimientos.reduce((acc, { moneda, monto }) => {
        // Si la moneda ya existe en el acumulador, sumamos el monto
        if (acc[moneda]) {
          acc[moneda] += monto;
        } else {
          // Si la moneda no existe, la creamos con el monto inicial
          acc[moneda] = monto;
        }
        return acc;
      }, resultado);
      
      console.log(resultado);

    switch(semaforoSoles(resultado.PEN)){
        case ('low'):
            balanceSoles.classList.add("low-balance");
            break;
        case ('regular'):
            balanceSoles.classList.add("regular-balance");
            break;
        case ('extra'):
            balanceSoles.classList.add("extra-balance");
            break;
    }

    switch(semaforoDolares(resultado.USD)){
        case ('low'):
            balanceDolares.classList.add("low-balance");
            break;
        case ('regular'):
            balanceDolares.classList.add("regular-balance");
            break;
        case ('extra'):
            balanceDolares.classList.add("extra-balance");
            break;
    }

    balanceSoles.textContent=`PEN: S/. ${(resultado.PEN).toFixed(2)}`;
    balanceDolares.textContent=`USD: $. ${(resultado.USD).toFixed(2)}`;

}

function capturarDatosFormulario() {

    // Obtener valores del formulario
    let tipo = document.querySelector('input[name="tipoMovimiento"]:checked').value;
    let moneda = document.querySelector('input[name="moneda"]:checked').value;
    let monto= parseFloat(document.getElementById('monto').value);
    let descripcion= document.getElementById('descripcion').value;
    let fechaActual = new Date();

    //signo de importe
    monto= tipo==='ingreso' ? monto : -monto;

    // Crear objeto de movimiento
    const movimiento = {
        tipo: tipo,
        moneda: moneda,
        monto: monto,
        descripcion: descripcion,
        fecha: formatearFecha(fechaActual),
        hora: formatearHora(fechaActual)
    };

    // Agregar al array de movimientos
    movimientos.push(movimiento);

    // Limpiar formulario
    formularioMovimiento.reset();

    console.log(movimientos);
    
}

function funcionMostrarHistorialxRegistroSimple() {
    
    listaHistorial.innerHTML = ''; // Limpiar lista anterior

    // Recorrer y mostrar movimientos
    movimientos.forEach((mov, index) => {
        const li = document.createElement('li');
        let descripcionAbreviada=mov.descripcion.substring(0,20);
        
        li.textContent = `${index + 1} | ${mov.fecha} | ${mov.hora} | ${descripcionAbreviada} | (${mov.moneda}) ${(mov.monto).toFixed(2)}`;
        
        // Aplicar clase de color según tipo
        li.classList.add(mov.tipo === 'ingreso' ? 'ingreso' : 'egreso');
        
        listaHistorial.appendChild(li);
    });
}


function funcionMostrarHistorialxMontoSimple(){
    
    listaHistorial.innerHTML = ''; // Limpiar lista anterior

    //crear array ordenado, clonado de movimiento
    const ordenadoxMonto = [...movimientos].sort((a, b) => {
        // Primero por moneda
        if (a.moneda !== b.moneda) {
            return b.moneda.localeCompare(a.moneda);
        }
        // Luego por monto
        return b.monto - a.monto;
    });

    // Recorrer y mostrar movimientos
    ordenadoxMonto.forEach((mov, index) => {
        const li = document.createElement('li');
        let descripcionAbreviada=mov.descripcion.substring(0,20);
        
        li.textContent = `${index + 1} | ${mov.fecha} | ${mov.hora} | ${descripcionAbreviada} | (${mov.moneda}) ${(mov.monto).toFixed(2)}`;
        
        // Aplicar clase de color según tipo
        li.classList.add(mov.tipo === 'ingreso' ? 'ingreso' : 'egreso');
        
        listaHistorial.appendChild(li);
    });
}

*/