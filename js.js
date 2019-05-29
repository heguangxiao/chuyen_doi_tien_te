function convert() {
    let inputAmount;
    let inputFromCurrency;
    let inputToCurrency;

    inputAmount = document.getElementById('amount').value;
    inputFromCurrency = document.getElementById('fromCurrency').value;
    inputToCurrency = document.getElementById('toCurrency').value;

    let amount = parseInt(inputAmount);
    let fromCurrency = parseInt(inputFromCurrency);
    let toCurrency = parseInt(inputToCurrency);

    let convert;

    if(fromCurrency == 1){
        if(toCurrency == 1){
            convert = amount*1;
            document.write(amount+'VND = '+convert+' VND');
        }else if(toCurrency == 2){
            convert = amount/23000;
            document.write(amount+'VND = '+convert+' USD');
        }
    }else if(fromCurrency == 2){
        if(toCurrency == 1){
            convert = amount*23000;
            document.write(amount+'USD = '+convert+' VND');
        }else if(toCurrency == 2){
            convert = amount*1;
            document.write(amount+'USD = '+convert+' USD');
        }
    }
}