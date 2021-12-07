const billAmt = document.querySelector("#bill-amt");
const cashAmt = document.querySelector("#cash-amt");
const btnChk = document.querySelector("#btn-check");
const messageVal = document.querySelector("#msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

btnChk.addEventListener("click", function()
{
   if (billAmt.value < 0){
    messageVal.innerText = "Invalid Bill Amount";
  }
  else 
  {
    messageVal.innerText = "";
  }
 
  if (Number(cashAmt.value) < Number(billAmt.value))
  {
    messageVal.innerText = "Cash given should atleast be equal to Bill Amount";
  }
  else 
    {
    const amtToBeReturned = Number(cashAmt.value) - Number(billAmt.value);
    
    calculateChange(amtToBeReturned);
    
  }
});

function calculateChange(amtToBeReturned)

 {
   
   
 for (let i=0; i<availableNotes.length; i++)
 {
 const totalNotes = Math.trunc(amtToBeReturned / availableNotes[i]);
 
 
 amtToBeReturned %= availableNotes[i];
 
 
 noOfNotes[i].innerText = totalNotes;
 }
 
 }