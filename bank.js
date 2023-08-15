// Add event listener to the deposit button

document.getElementById("Deposit-btn").addEventListener('click', function(){
    // setp-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('Deposit-field')
    const newDepositAmountString = depositField.value
    const newDepositAmount = parseFloat(newDepositAmountString)
    // console.log(typeof newDepositAmount);
    // step-3 : get The current deposit total
    const depositTotalElement = document.getElementById("deposit-total");
    const PreviousDepositTotalString = depositTotalElement.innerText
    const previousBalance = parseFloat(PreviousDepositTotalString)
    // step-4: add previous value and current value
    const currentDepositeTotal = previousBalance + newDepositAmount;
    depositTotalElement.innerText = currentDepositeTotal

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount
    balanceTotalElement.innerText = currentBalanceTotal


    // step-6: 
    depositField.value ="";
})


























// document.getElementById('Deposit-btn').addEventListener("click", function () {
//     const depositFild = document.getElementById('Deposit-field')
//     const newDepositeAmmountString = depositFild.value
//     const newDepositeAmount = parseFloat(newDepositeAmmountString)

//     const depositTotalElement = document.getElementById('deposit-total')
//     const previousDepositTotalString = depositTotalElement.innerText
//     const previousDepositTotal = parseFloat(previousDepositTotalString)
//     const currentDepositeTotal = previousDepositTotal + newDepositeAmount
//     depositTotalElement.innerText = currentDepositeTotal

//     const balanceTotalElement = document.getElementById('balance-total')
//     const previousBalanceString = balanceTotalElement.innerText;
//     const previousBalance = parseFloat(previousBalanceString)
//     const currentBalance = previousBalance + newDepositeAmount
//     // const number = parseInt(currentBalance)
//     balanceTotalElement.innerText = currentBalance;


//     // const previousBalanceTotalElementString = balanceTotalElement.innerText
//     // const previousBanlanceTotal = parseFloat(previousBalanceTotalElementString)
//     // const currentBalanceTotals = previousBanlanceTotal + newDepositeAmount
//     // balanceTotalElement.innerText = currentBalanceTotals




//     depositFild.value = "";
// })