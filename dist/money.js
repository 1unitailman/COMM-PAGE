const moneyPayers=document.querySelector("#payers");
const moneyTier=document.querySelector("#tier");
function renderMoney(){
  const grossValue=Math.max(0,Number(moneyPayers.value)||0)*Number(moneyTier.value);
  document.querySelector("#gross").textContent=new Intl.NumberFormat("uk-UA").format(grossValue)+" грн";
  document.querySelector("#net").textContent=new Intl.NumberFormat("uk-UA").format(Math.round(grossValue*.69))+" грн";
}
[moneyPayers,moneyTier].forEach(element=>element.addEventListener("input",renderMoney));
renderMoney();
