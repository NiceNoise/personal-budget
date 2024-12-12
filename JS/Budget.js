function Budget(initialBalances) {
    this.currencies = ['PEN', 'USD', 'EUR']
    this.balances = initialBalances;
    this.movements = [];
  }
  
  Budget.prototype.addMovement= function (transaction){
  
    let index;
    switch (transaction.currency) {
      case 'PEN': index = 0;
        break;
      case 'USD': index = 1;
        break;
      case 'EUR': index = 2;
        break;
    }
  
    switch (transaction.type) {
      case 'debit':
        if (transaction.amount > balances[index]) {
          return 'not enough balance on currency ' + transaction.currency + '.';
        } else {
          this.balances[index] -= transaction.amount;
          movements.push(transaction);
          return 'sucessful movement.'
        }
        break;
  
      case 'credit':
        this.balances[index] += transaction.amount;
        movements.push(transaction);
        return 'sucessful movement.'
        break;
    };
  }
  
