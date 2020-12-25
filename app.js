var billAmount = document.querySelector("#bill");
var cash = document.querySelector("#cash");
var balanceAmount = document.querySelector("#balance");
var btn = document.querySelector("#btn");



function clickHandler() {

  var label = document.createElement("label");
  label.style.paddingRight = "10px";
  var node = document.createTextNode("Balance amount:");
  label.appendChild(node);
  var div = document.getElementById("balance-amount");
  div.appendChild(label);

  var output = document.createElement("output");
  var node = document.createTextNode("");
  output.appendChild(node);
  div.appendChild(output);

  output.innerText = cash.value - billAmount.value;
  var balance = output.innerText;

  //var minNotes=0;
  var current;
  var notes = {
    "1": 0,
    "5": 0,
    "10": 0,
    "20": 0,
    "100": 0,
    "500": 0,
    "2000": 0
  };

  var number;
  const denominations = [1, 5, 10, 20, 100, 500, 2000];
  var start;

  for (var i = denominations.length - 1; i >= 0; i--) {
    if (balance >= denominations[i]) {
      start = i;
      break;
    }
  }


  while (balance > 0) {
    current = balance
    balance = balance % denominations[start];
    //minNotes=minNotes+((current-balance)/denominations[start]);
    number = denominations[start];
    notes[number] = (current - balance) / number;
    start--;
  }

  var table = document.createElement('table');
  var trow = document.createElement("tr");
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var heading1 = document.createTextNode("Denomination");
  var heading2 = document.createTextNode("Quantity");
  th1.appendChild(heading1);
  th2.appendChild(heading2);
  trow.appendChild(th1);
  trow.appendChild(th2);
  table.appendChild(trow);


  for (var i = 1, j = 0; i < 8; i++, j++) {

    var tr = document.createElement('tr');

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

    var text1 = document.createTextNode(denominations[j]);
    var text2 = document.createTextNode(notes[denominations[j]]);

    td1.appendChild(text1);
    td2.appendChild(text2);
    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
  }
  document.getElementById("input").appendChild(table);

  btn.removeEventListener("click", clickHandler);

}

btn.addEventListener("click", clickHandler);