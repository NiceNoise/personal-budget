//----------------------------------------------------------------
//----------- Begin: Traffic Light Analysis for Balance ----------
//----------------------------------------------------------------

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

//----------------------------------------------------------------
//------------------ Begin: Dinamic Category ---------------------
//----------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {

  //variables DOM
  const typeTransaction = document.querySelectorAll('input[name="type"]');
  const selectCategory = document.getElementById('category');

  // Categorías definidas
  const categories = {
      credit: [
          { value: 'salary', text: 'Salary' },
          { value: 'investments', text: 'Investments' },
          { value: 'freelance', text: 'Freelance' },
          { value: 'others', text: 'Others' }
      ],
      debit: [
          { value: 'feeding', text: 'Feeding' },
          { value: 'transport', text: 'Transport' },
          { value: 'services', text: 'Services' },
          { value: 'rent', text: 'Rent' },
          { value: 'outfit', text: 'Outfit' },
          { value: 'studies', text: 'Studies' },
          { value: 'entertainment', text: 'Entertainment' },
          { value: 'others', text: 'Others' }
      ]
  };

  // Función para actualizar las categorías
  function updateCategory(type) {
      // Limpiar select actual
      selectCategory.innerHTML = '';

      // Cargar categorías según el tipo de movimiento
      categories[type].forEach(category => {
          const option = document.createElement('option');
          option.value = category.value;
          option.textContent = category.text;
          selectCategory.appendChild(option);
      });
  }

  // Agregar evento a los radio buttons
  typeTransaction.forEach(radio => {
      radio.addEventListener('change', (e) => {
          if (e.target.checked) {
            updateCategory(e.target.value);
          }
      });
  });

  // Inicializar con categorías de ingreso
  const selectedRadio = document.querySelector('input[name="type"]:checked');
  if (selectedRadio) {
      updateCategory(selectedRadio.value);
  }

});

