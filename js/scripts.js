/*This file is for your custom js.  All yours*/
var romanNumeral = function(integer){
  if (integer >= 4000) {
    return false;
  }

  var string = integer.toString();
  var array = string.split("");
  var reverseArray = array.reverse();
  debugger;
  if (reverseArray[0] === "0") {
    reverseArray[0] = "";
  } else if (reverseArray[0] === "1") {
    reverseArray[0] = "I";
  } else if (reverseArray[0] === "2") {
    reverseArray[0] = "II";
  } else if (reverseArray[0] === "3") {
    reverseArray[0] = "III";
  } else if (reverseArray[0] === "4") {
    reverseArray[0] = "IV";
  } else if (reverseArray[0] === "5") {
    reverseArray[0] = "V";
  } else if (reverseArray[0] === "6") {
    reverseArray[0] = "VI";
  } else if (reverseArray[0] === "7") {
    reverseArray[0] = "VII";
  } else if (reverseArray[0] === "8") {
    reverseArray[0] = "VIII";
  } else if (reverseArray[0] === "9") {
    reverseArray[0] = "IX";
  }

  if (reverseArray[1] === "0") {
    reverseArray[1] = "";
  } else if (reverseArray[1] === "1") {
    reverseArray[1] = "X";
  } else if (reverseArray[1] === "2") {
    reverseArray[1] = "XX";
  } else if (reverseArray[1] === "3") {
    reverseArray[1] = "XXX";
  } else if (reverseArray[1] === "4") {
    reverseArray[1] = "XL";
  } else if (reverseArray[1] === "5") {
    reverseArray[1] = "L";
  } else if (reverseArray[1] === "6") {
    reverseArray[1] = "LX";
  } else if (reverseArray[1] === "7") {
    reverseArray[1] = "LXX";
  } else if (reverseArray[1] === "8") {
    reverseArray[1] = "LXXX";
  } else if (reverseArray[1] === "9") {
    reverseArray[1] = "XC";
  }

  var output = reverseArray.reverse().join("");
  return output;
}

$(document).ready(function(){

  $("#user-number").submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($("#arabic-numeral").val());

    var output = romanNumeral(userNumber);

    $('#output').text(output);
  });
});
