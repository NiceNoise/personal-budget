function Transaction(type, amount, currency, category) {
    this.id = Date.now();
    this.type = type;
    this.amount = parseFloat(amount).toFixed(2);   // actual currency have 2 decimals
    this.currency = currency;
    this.category = category;
    this.date = new Date();
  }
  
  Transaction.prototype.getFormattedDate = function () {
    const day = this.date.getDate().toString().padStart(2, '0');
    const month = (this.date.getMonth() + 1).toString().padStart(2, '0');
    const year = this.date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  
  Transaction.prototype.getFormattedTime = function () {
    const hour = this.date.getHours().toString().padStart(2, '0');
    const minutes = this.date.getMinutes().toString().padStart(2, '0');
    const seconds = this.date.getSeconds().toString().padStart(2, '0');
    return `${hour}:${minutes}:${seconds}`;
  }
  
  Transaction.prototype.getSignedAmount = function () {
    return this.type === 'credit' ? this.amount : -this.amount;
  }
  
