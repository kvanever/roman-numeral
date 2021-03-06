// /*This file is for your custom js.  All yours*/
// var romanNumeral = function(integer) {
//   if (integer >= 4000 || integer <= 0) {
//     return false;
//   }
//
//   var string = integer.toString();
//   var array = string.split("");
//   var reverseArray = array.reverse();
//
//   if (reverseArray[0] === "0") {
//     reverseArray[0] = "";
//   } else if (reverseArray[0] === "1") {
//     reverseArray[0] = "I";
//   } else if (reverseArray[0] === "2") {
//     reverseArray[0] = "II";
//   } else if (reverseArray[0] === "3") {
//     reverseArray[0] = "III";
//   } else if (reverseArray[0] === "4") {
//     reverseArray[0] = "IV";
//   } else if (reverseArray[0] === "5") {
//     reverseArray[0] = "V";
//   } else if (reverseArray[0] === "6") {
//     reverseArray[0] = "VI";
//   } else if (reverseArray[0] === "7") {
//     reverseArray[0] = "VII";
//   } else if (reverseArray[0] === "8") {
//     reverseArray[0] = "VIII";
//   } else if (reverseArray[0] === "9") {
//     reverseArray[0] = "IX";
//   }
//
//   if (reverseArray[1] === "0") {
//     reverseArray[1] = "";
//   } else if (reverseArray[1] === "1") {
//     reverseArray[1] = "X";
//   } else if (reverseArray[1] === "2") {
//     reverseArray[1] = "XX";
//   } else if (reverseArray[1] === "3") {
//     reverseArray[1] = "XXX";
//   } else if (reverseArray[1] === "4") {
//     reverseArray[1] = "XL";
//   } else if (reverseArray[1] === "5") {
//     reverseArray[1] = "L";
//   } else if (reverseArray[1] === "6") {
//     reverseArray[1] = "LX";
//   } else if (reverseArray[1] === "7") {
//     reverseArray[1] = "LXX";
//   } else if (reverseArray[1] === "8") {
//     reverseArray[1] = "LXXX";
//   } else if (reverseArray[1] === "9") {
//     reverseArray[1] = "XC";
//   }
//
//   if (reverseArray[2] === "0") {
//     reverseArray[2] = "";
//   } else if (reverseArray[2] === "1") {
//     reverseArray[2] = "C";
//   } else if (reverseArray[2] === "2") {
//     reverseArray[2] = "CC";
//   } else if (reverseArray[2] === "3") {
//     reverseArray[2] = "CCC";
//   } else if (reverseArray[2] === "4") {
//     reverseArray[2] = "CD";
//   } else if (reverseArray[2] === "5") {
//     reverseArray[2] = "D";
//   } else if (reverseArray[2] === "6") {
//     reverseArray[2] = "DC";
//   } else if (reverseArray[2] === "7") {
//     reverseArray[2] = "DCC";
//   } else if (reverseArray[2] === "8") {
//     reverseArray[2] = "DCCC";
//   } else if (reverseArray[2] === "9") {
//     reverseArray[2] = "CM";
//   }
//
//   if (reverseArray[3] === "0") {
//     reverseArray[3] = "";
//   } else if (reverseArray[3] === "1") {
//     reverseArray[3] = "M";
//   } else if (reverseArray[3] === "2") {
//     reverseArray[3] = "MM";
//   } else if (reverseArray[3] === "3") {
//     reverseArray[3] = "MMM";
//   }
//
//   var output = reverseArray.reverse().join("");
//   return output;
//
// }

function toRoman(n) {
  debugger;
    var r = '',
        decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < decimals.length; i++) {
        while (n >= decimals[i]) {
            r += roman[i];
            n -= decimals[i];
        }
    }
    return r;
}

$(document).ready(function(){

  $("#user-number").submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($("#arabic-numeral").val());

    var output = toRoman(userNumber);
    if (output) {
      $('#output').text(output);
    } else {
      alert("Please enter a positive integer between 1 and 3,999")
      $(".form-group").addClass("has-error");
    }

  });
});
