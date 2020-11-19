//make buttons 1-9
//checkvar calcScreen = [];


$( document ).ready(function() {










$('#reset').on('click', function(){
 $('#output').val("");
  $('#answer').html('');
});


 $('#button1').on('click', function(){
 
  var ans = $("#output");
    ans.val(ans.val() + "1");
 
  console.log(input);
});

$('#button2').on('click', function(){
  
  var ans = $("#output");
    ans.val(ans.val() + "2");
});
$('#button3').on('click', function(){
 
  var ans = $("#output");
    ans.val(ans.val() + "3");
});
$('#button4').on('click', function(){
 
  var ans = $("#output");
    ans.val(ans.val() + "4");
  
});
$('#button5').on('click', function(){
  
  var ans = $("#output");
    ans.val(ans.val() + "5");
  
});
$('#button6').on('click', function(){
  
  var ans = $("#output");
    ans.val(ans.val() + "6");
  
});
$('#button7').on('click', function(){
  
  var ans = $("#output");
    ans.val(ans.val() + "7");
  
});
$('#button8').on('click', function(){
  
  var ans = $("#output");
    ans.val(ans.val() + "8");
  
});
$('#button9').on('click', function(){
  
  var ans = $("#output");
    ans.val(ans.val() + "9");
  
});
$('#button0').on('click', function(){
 
  var ans = $("#output");
    ans.val(ans.val() + "0");
  
});

$('#buttonplus').on('click', function(){
  
  var ans = $("#output");
    ans.val(ans.val() + "+");
  
});

$('#buttonminus').on('click', function(){
  
  var ans = $("#output");
    ans.val(ans.val() + "-");
  
});

$('#buttonmultiply').on('click', function(){
  
   
  var ans = $("#output");
    ans.val(ans.val() + "*");
  
});

$('#buttondivide').on('click', function(){
  
    
  var ans = $("#output");
    ans.val(ans.val() + "/");
  
});

$('#buttondecimal').on('click', function(){
  
    
  var ans = $("#output");
    ans.val(ans.val() + ".");
  
});


$('#submit').click(function(){
 
  var input;
  input = $("#output").val();
  
  
 
  var number = /\d+(\.\d+)?/g;
  
  var number2 = /[\+-\/\*]\s*\d+(\.\d+)/;
  
  var plus = /\+/;
  var multiply = /\*/;
  var divide = /\//;
  var minus = /-/;
  
  var operations = /[\+-\/\*]/g;
  
  var operationsArray = input.match(operations);
  
  for(i=0; i<operationsArray.length; i++){
    if(operationsArray[i] == "."){
      operationsArray.splice(i,1);
    }
  }
  
  console.log(operationsArray);
  
  var numberArray = input.match(number);
  
  var editedNumberArray = [];
  
  for(j=0; j< numberArray.length; j++){
    editedNumberArray.push(parseFloat(numberArray[j]));
  }
  
  var output;
  
  var firstNumber = editedNumberArray[0];
  
  var total;
  
  
    
      if(operationsArray[0] == "+"){
        total = addOperations(firstNumber, editedNumberArray[1]);
        
      }
      else if(operationsArray[0] == "-"){
        total = subtractOperations(firstNumber, editedNumberArray[1]);
        
      }
      else if(operationsArray[0] == "*"){
        total = multiplyOperations(firstNumber, editedNumberArray[1]);
      }
      else if(operationsArray[0] == "/"){
        total = divideOperations(firstNumber, editedNumberArray[1]);
      }
  
  if(operationsArray.length > 1){
    
    for(i=1; i<operationsArray.length; i++){
     if(operationsArray[i] == "+"){
        total = addOperations(total, editedNumberArray[i+1]);
        
      }
      else if(operationsArray[i] == "-"){
        total = subtractOperations(total, editedNumberArray[i+1]);
        
      }
      else if(operationsArray[i] == "*"){
        total = multiplyOperations(total, editedNumberArray[i+1]);
      }
      else if(operationsArray[i] == "/"){
        total = divideOperations(total, editedNumberArray[i+1]);
      }
    
  }
    
  }
  function addOperations(input1, input2){
  return input1 + input2;
}
  
  function subtractOperations(input1, input2){
  return input1 - input2;
}

function multiplyOperations(input1, input2){
  return input1 * input2;
}
function divideOperations(input1, input2){
  return input1 / input2;
}
  
  
  console.log(total);
  
  $("#output").val(total);
  
  
  console.log(editedNumberArray);
  

  
return false;
  
  
});

});
