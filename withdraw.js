// add evend handeler
document.getElementById("Withdraw-btn").addEventListener("click", function () {
    const WithdrawFild = document.getElementById('Withdraw-fild');
    const newWithdrawString = WithdrawFild.value
    const newWithdrawAmount = parseFloat(newWithdrawString)
    WithdrawFild.value = "";
    if (isNaN(newWithdrawAmount)) {
        alert("Please provide a Number")
        return
    }

    const withdrawTotalElement = document.getElementById("withdraw-total")
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawTotalString)

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(previousBalanceTotalString);



    if (newWithdrawAmount > balanceTotal) {
        alert("Your Amount is low")
        return;
    }
    const currentWithdrawAmount = previousWithdraw + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawAmount;

    const curreBanlacneAmmount = balanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = curreBanlacneAmmount
})