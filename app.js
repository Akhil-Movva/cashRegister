var billAmount=document.querySelector("#bill");
var cash=document.querySelector("#cash");
var balanceAmount=document.querySelector("#balance");
var btn=document.querySelector("#btn");

var one=document.querySelector("#one");
var five=document.querySelector("#five");
var ten=document.querySelector("#ten");
var twenty=document.querySelector("twenty");
var hundred=document.querySelector("#hundred");
var fiveHundred=document.querySelector("#fiveHundred");
var twoThousand=document.querySelector("#twoThousand");

 
  function clickHandler()
 {
   
   balanceAmount.innerText=cash.value-billAmount.value;
   var balance=balanceAmount.innerText;

   //var minNotes=0;
   var current;
   var notes={
     "1":0,
     "5":0,
     "10":0,
     "20":0,
     "100":0,
     "500":0,
     "2000":0
   };

    var number;
    const denominations=[1,5,10,20,100,500,2000];
    var start;

    for(var i=denominations.length-1;i>=0;i--)
    {
      if(balance>=denominations[i])
      {
       start=i;
       break;
      }
    }

   

    while(balance>0)
   {
     current=balance
     balance=balance%denominations[start];
     //minNotes=minNotes+((current-balance)/denominations[start]);
     number=denominations[start];
     notes[number]=(current-balance)/number;
     start--;
   }
    console.log(notes);
    

}

btn.addEventListener("click",clickHandler);