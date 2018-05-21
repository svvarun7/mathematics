function GetSum() {
	var userInput1 = document.getElementById("txt_number1").value;
	var userInput2 = document.getElementById("txt_number2").value;
    var userInput3 = document.getElementById("txt_number3").value 
	var userInputNumber1 = parseInt(userInput1);
	var userInputNumber2 = parseInt(userInput2);
    var userInputNumber3 = parseInt(userInput3)

	var result = userInputNumber1 + userInputNumber2;
	
	var userInput3 = document.getElementById("txt_number3").value = result;

	//document.getElementById("lbl_sum_in_msg").innerText = result;

}

function Dividede(){

    var userInput4 = document.getElementById("txt_number4").value;
	var userInput5 = document.getElementById("txt_number5").value;
    var userInput6 = document.getElementById("txt_number6").value 
	var userInputNumber4 = parseInt(userInput4);
	var userInputNumber5 = parseInt(userInput5);
    var userInputNumber6 = parseInt(userInput6);

	var result = userInputNumber4 / userInputNumber5;
    
	var userInput6 = document.getElementById("txt_number6").value = result;
	//var userInput3 = document.getElementById("lbl_sum_in_msg").innerText = result
}
function Multiply(){

    var userInput7 = document.getElementById("txt_number7").value;
	var userInput8 = document.getElementById("txt_number8").value;
    var userInput9 = document.getElementById("txt_number9").value 
	var userInputNumber7 = parseInt(userInput7);
	var userInputNumber8 = parseInt(userInput8);
    var userInputNumber6 = parseInt(userInput9);

	var result = userInputNumber7 * userInputNumber8;
    
	var userInput6 = document.getElementById("txt_number9").value = result;

}
function Subtraction(){

    var userInput10 = document.getElementById("txt_number10").value;
	var userInput11 = document.getElementById("txt_number11").value;
    var userInput12 = document.getElementById("txt_number12").value 
	var userInputNumber10 = parseInt(userInput10);
	var userInputNumber11 = parseInt(userInput11);
    var userInputNumber12 = parseInt(userInput12);

	var result = userInputNumber10 - userInputNumber11;
    
	var userInput6 = document.getElementById("txt_number12").value = result;

}
   

