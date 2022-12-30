const balance=document.getElementsByTagName('h1');
const form=document.getElementsByClassName('form');
const money_plus=document.getElementById('money-plus')
const money_minus=document.getElementById('money-minus')
const list=document.getElementById('list')
const text=document.getElementById('text')
const amount=document.getElementById('amount')
const ttype=document.getElementById('ttype')

let list1=[];
let amount1=0;
function addTransaction(e){
    e.preventDefault();
    
    if (text.value =="" || amount.value =="" ){
        alert("Please add amount and text ")
    }
    
    else{
        if(ttype.value=="debit"){
            console.log(money_plus.value , money_minus.value, amount.value)
            if(money_plus.value-money_minus.value-amount.value<0){
                alert("No balance")
            }
            else{
            console.log(amount.value)
            var transaction={
                transactionid:Math.random()*100000,
                text:text.value,
                amount:amount.value,
                ttype:ttype.value
            }
            amount1=amount1-parseFloat(amount.value)
        }
        }
        else{
            var transaction={
                transactionid:Math.random()*100000,
                text:text.value,
                amount:amount.value,
                ttype:ttype.value
            }
            amount1=amount1+parseFloat(amount.value)
        }
        list1.push(transaction);
        text.value="";
        amount.value="";

        console.log(list1)
    }
  init();
}

function init(){
    list.innerHTML="";
    let income=0;
    let expense=0;


    for(i=0;i<list1.length;i++){
        const item=document.createElement('li');
        item.classList.add(list1[i].ttype=="debit"? 'minus':'plus')

        item.innerHTML=`${list1[i].text}<span>${list1[i].amount}</span><button class="delete-btn" onclick="removeTransaction(${
            list1[i].transactionid
          })">x</button> `

          list.appendChild(item);


          if(list1[i].ttype=="debit"){
              expense+=parseFloat(list1[i].amount)
          }
          else{
            income+=parseFloat(list1[i].amount)
          }
          console.log(expense,income)
          
    }
    money_minus.innerText=`${expense}`
    money_plus.innerText=`${income}`
    balance[0].innerHTML=`${income-expense}`
}

function removeTransaction(id){
    list1=list1.filter(e=>e.transactionid!==id);

    init();
}



form[0].addEventListener("submit",addTransaction)