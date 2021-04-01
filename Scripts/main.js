// form variables
var manufInput = document.getElementById("manuf");
var prodInput = document.getElementById("buyprod");
var quanInput = document.getElementById("quan");
var sizeInput = document.getElementById("size");
var packInput = document.getElementById("extra1");
var cardInput = document.getElementById("extra2");
var decoInput = document.getElementById("extra3");

//current table row
var currOrderCells = document.querySelectorAll("#orderRow th");
// console.log(currOrderCells);

//attaching event listeners
manufInput.addEventListener("change",function(event){
  currOrderCells[0].innerText = event.target.value;
});
prodInput.addEventListener("change",function(event){
  currOrderCells[1].innerText = event.target.value;
});
quanInput.addEventListener("change",function(event){
  currOrderCells[2].innerText = event.target.value;
});
sizeInput.addEventListener("change",function(event){
  currOrderCells[3].innerText = event.target.value;
});
packInput.addEventListener("change",function(event){
  currOrderCells[4].innerText = event.target.value;
});
cardInput.addEventListener("change",function(event){
  currOrderCells[5].innerText = event.target.value;
});
decoInput.addEventListener("change",function(event){
  currOrderCells[6].innerText = event.target.value;
});

//insert to table
function addorder() {
    var table1 = document.getElementById("tableoverall");
    var row = table1.insertRow(1);
    var cell1 = row.insertCell(0);//change to manuf
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerText = currOrderCells[0].innerText;
    cell2.innerText = currOrderCells[1].innerText;
    cell3.innerText = currOrderCells[2].innerText;
    cell4.innerText = currOrderCells[3].innerText;
    cell5.innerText = currOrderCells[4].innerText;
    cell6.innerText = currOrderCells[5].innerText;
    cell7.innerText = currOrderCells[6].innerText;
}

//add to favourites 
function addfavor(){
  var manuFav = document.getElementById("manuf").value;
  var prodFav = document.getElementById("buyprod").value;
  var quanFav = document.getElementById("quan").value;
  var sizeFav = document.getElementById("size").value;
  var packFav = document.getElementById("extra1").value;
  var cardFav = document.getElementById("extra2").value;
  var decoFav = document.getElementById("extra3").value;
  
  localStorage.setItem("manuf", manuFav);
  localStorage.setItem("buyprod", prodFav);
  localStorage.setItem("quan", quanFav);
  localStorage.setItem("size", sizeFav);
  localStorage.setItem("extra1", packFav);
  localStorage.setItem("extra2", cardFav);
  localStorage.setItem("extra3", decoFav);

}

//retrieve from favourites
function ordFav(){
  var manuFav = document.getElementById("manuf").value;
  var prodFav = document.getElementById("buyprod").value;
  var quanFav = document.getElementById("quan").value;
  var sizeFav = document.getElementById("size").value;
  var packFav = document.getElementById("extra1").value;
  var cardFav = document.getElementById("extra2").value;
  var decoFav = document.getElementById("extra3").value;
  var table1 = document.getElementById("tableoverall");
  var row = table1.insertRow(1);
  var cell1 = row.insertCell(0);//change to manuf
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  cell1.innerText = localStorage.getItem("manuf");
  cell2.innerText = currOrderCells[1].innerText;
  cell3.innerText = currOrderCells[2].innerText;
  cell4.innerText = currOrderCells[3].innerText;
  cell5.innerText = currOrderCells[4].innerText;
  cell6.innerText = currOrderCells[5].innerText;
  cell7.innerText = currOrderCells[6].innerText;
}

//placing order message
function placeord(){
  var manufOrd = document.getElementById("manuf").value;
  alert("Thank you for ordering from "+manuf.value+"!");
}

//loyalty message
function loyalty(){
  var tableoverall = document.getElementById("tableoverall");
  let orders = (tableoverall.rows.length-1);
  let loyPoints = 0;
  if(orders>3){
    loyPoints = (orders*20);
    var lyl = "You have earned "+loyPoints+" loyalty points!";
    alert(lyl);
  }
  else{
    alert("At least 4 orders must be placed to earn loyalty points")
  }
  localStorage.setItem("loyalty", loyPoints);
  var loyal = localStorage.getItem("loyal");
  
}

// //storing and retrieving localstorage
// localStorage.setItem("colour", "green");
// var colour = localStorage.getItem("colour");
// console.log(colour);
// cell1.innerText = localStorage.getItem("colour");

