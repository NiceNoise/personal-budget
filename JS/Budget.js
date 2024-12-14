//----------------------------------------------------------------
//------------------- Begin: Budget Defined -----------------
//----------------------------------------------------------------

function Budget(initialBalances) {
    this.currencies = ['PEN', 'USD']
    this.balances = initialBalances;
    this.movements = [];
  }
  
  Budget.prototype.addTransaction= function (transaction){
  
    let index;
    switch (transaction.currency) {
      case 'PEN': index = 0;  break;
      case 'USD': index = 1;  break;
    }
  
    switch (transaction.type) {
      case 'debit':
        if (transaction.amount > this.balances[index]) {
          return 'not enough balance on currency ' + transaction.currency + '.';
        } else {
          this.balances[index] -= transaction.amount;
          this.movements.push(transaction);
          return 'sucessful movement.'
        }
        break;
  
      case 'credit':
        this.balances[index] += transaction.amount;
        this.movements.push(transaction);
        return 'sucessful movement.'
        break;
    };
  }
  
  Budget.prototype.getBalanceCurrency = function(currency){
  
    let index;
    switch (currency) {
      case 'PEN': index = 0;  break;
      case 'USD': index = 1;  break;
    }

    return this.balances[index];
   
  }