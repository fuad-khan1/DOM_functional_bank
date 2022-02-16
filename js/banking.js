function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  // clear input field
  inputField.value = "";
  return amountValue;
}
function updateTotalField(totalFieldId, amount) {
  // debugger;
  const totalAmount = document.getElementById(totalFieldId);
  const totalText = totalAmount.innerText;
  const previousTotal = parseFloat(totalText);
  totalAmount.innerText = amount + previousTotal;
}
function getCurrentBalance (){
  const balanceTotal = document.getElementById("balance-total");

  const balanceTotalText = balanceTotal.innerText;
  const previosBalanceTotal = parseFloat(balanceTotalText);
  return previosBalanceTotal;
}
function updateBalance(depositAmount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  /* const balanceTotalText = balanceTotal.innerText;
  const previosBalanceTotal = parseFloat(balanceTotalText); */
  const previosBalanceTotal= getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = previosBalanceTotal + depositAmount;
  } else {
    balanceTotal.innerText = previosBalanceTotal - depositAmount;
  }
}
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    /* const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */
    // get current deposit
    /*  const depositTotal = document.getElementById("deposite-total");
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = depositAmount + previousDepositTotal; */
    // update balance
    /* const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previosBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previosBalanceTotal + depositAmount; */
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
      updateTotalField("deposite-total", depositAmount);

      updateBalance(depositAmount, true);
    }
  });
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    /* const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */

    //get current withdraw
    /* const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const previosWithdarwAmont = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previosWithdarwAmont + withdrawAmount; */
    //update balance
    /* const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previosBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previosBalanceTotal - withdrawAmount; */
    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance= getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount< currentBalance) {
      updateTotalField("withdraw-total", withdrawAmount);

      updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount> currentBalance){
      console.log('You cannot withdraw more than available balance')
    }
  });
