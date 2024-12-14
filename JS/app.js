//----------------------------------------------------------------
//------------------ Begin: Global Variables ---------------------
//----------------------------------------------------------------

const eWallet= new Budget([0.00,0.00]);

//----------------------------------------------------------------
//--------------- Begin: Get Transaction from Form ---------------
//----------------------------------------------------------------

//DOM Variable
const transactionForm= document.getElementById('transactionForm');

//Event Listener
transactionForm.addEventListener('submit',submitRecordTransaction);

//function triggered by submit
function submitRecordTransaction(event){
    event.preventDefault();
    getDataEntryTransactionForm();
    updateBalanceBoard();
}

//functions called by submitRecordTransactions
function getDataEntryTransactionForm() {

    //DOM
    const selectCategory = document.getElementById('category');

    // DOM
    let type = document.querySelector('input[name="type"]:checked').value;
    let currency = document.querySelector('input[name="currency"]:checked').value;
    let amount= document.getElementById('amount').value;
    let category  = selectCategory.options[selectCategory.selectedIndex].value;
    let description= document.getElementById('description').value;

    //create a new transaction
    const trx= new Transaction(type,amount,currency,category,description);
    
    // add to eWallet
    let message = eWallet.addTransaction(trx)
    
    //alert(message);
    //console.log(trx);
    //console.log(eWallet);
    //console.log(message);
    
    // clean form
    transactionForm.reset();
}

function updateBalanceBoard(){

    const balanceBoardPEN = document.getElementById("balanceBoardPEN");
    const balanceBoardUSD = document.getElementById("balanceBoardUSD");

    balanceBoardPEN.textContent=eWallet.getBalanceCurrency("PEN").toFixed(2);
    balanceBoardUSD.textContent=eWallet.getBalanceCurrency("USD").toFixed(2);
    
    //console.log(eWallet.getBalanceCurrency("PEN"));
    //console.log(eWallet.getBalanceCurrency("USD"));
    
}

//----------------------------------------------------------------
//----------------- Begin: Get Filters from Form -----------------
//----------------------------------------------------------------

//DOM Variable
const filtersForm= document.getElementById('filtersForm');

//Event Listener
filtersForm.addEventListener('submit',submitShowTransactionsHistory);

function submitShowTransactionsHistory(event){
    event.preventDefault();
    const transactionsFiltered=getFiltersOptions();
    ShowTransactionsHistory(transactionsFiltered);
}


function getFiltersOptions (){

    //DOM
    const selectFilterType = document.getElementById("filterType");
    const selectFilterCurrency = document.getElementById("filterCurrency");
    const selectFilterCategory = document.getElementById("filterCategory");

    // get selection values
    let filterType=selectFilterType.options[selectFilterType.selectedIndex].value;
    let filterCurrency=selectFilterCurrency.options[selectFilterCurrency.selectedIndex].value;
    let filterCategory=selectFilterCategory.options[selectFilterCategory.selectedIndex].value;

    let transactionsHistory = [...eWallet.movements];

    //console.log(transactionsHistory);


    if (filterType!=="all"){
        transactionsHistory=transactionsHistory.filter(trx => trx.type === filterType);
    }

    if (filterCurrency!=="all"){
        transactionsHistory=transactionsHistory.filter(trx => trx.currency === filterCurrency);
    }

    if (filterCategory!=="all"){
        transactionsHistory=transactionsHistory.filter(trx => trx.category === filterCategory);
    }

    //console.log(transactionsHistory);

    return transactionsHistory;
}


function ShowTransactionsHistory(transactionsHistory,sumTotal){

    const listTransactionsHistory= document.getElementById("listTransactionsHistory");

    //clean before info
    listTransactionsHistory.innerHTML = '';

    // show all transactions filtered
    transactionsHistory.forEach((trx, index) => {
        const li = document.createElement('li');
        
        li.textContent = `${index + 1} | ${trx.getFormattedDate()} | ${trx.getFormattedTime()} | ${trx.type} | ${trx.category} | (${trx.currency}) ${(trx.getSignedAmount()).toFixed(2)}`;
        
        //color
        li.classList.add(trx.type === 'credit' ? 'credit' : 'debit');
        
        listTransactionsHistory.appendChild(li);
    });


    //calcule Total PEN
    const totalPEN = transactionsHistory.reduce((sum, transaction) => {
        return transaction.currency === 'PEN' 
            ? sum + transaction.getSignedAmount() 
            : sum;
    }, 0);

    //calcule Total USD
    const totalUSD = transactionsHistory.reduce((sum, transaction) => {
        return transaction.currency === 'USD' 
            ? sum + transaction.getSignedAmount() 
            : sum;
    }, 0);

    //console.log(totalPEN);
    //console.log(totalUSD);

    //to show totals
    const liTotals = document.createElement('li');
    liTotals.textContent= `Total PEN S/. ${totalPEN} | Total USD $. ${totalUSD} `;
    liTotals.classList.add('total');
    listTransactionsHistory.appendChild(liTotals);

}


