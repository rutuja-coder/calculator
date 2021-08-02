
//input

function number(num){
  var result = document.getElementById("input");
  result.value += num;
}

//result
//eval =>calculate the values

function result(){
  var result= document.getElementById("input");
  result.value = eval(result.value)

}

//clear
function clearResult(){
  var result = document.getElementById("input");
  result.value = "";
}

function deleteChar(){
  var number = document.getElementById("input");
  var remove = number.value;
  remove = remove.slice(0,-1); //remove last character
  number.value = remove;
}