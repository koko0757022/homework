alert("hello homework3");
console.log("hello homework3");




function stringToInt(input) {
  var input = parseInt(input);
  return input;
}





function maskNumber(input){
mask_number=input.substring(0,7)+"****";
return mask_number;
}





function getAverage(input_array){
 
  var sum = 0.0;
  for (var i = 0; i < 6; i++)
    {sum +=input_array[i];
 }; 
var agv=sum / input_array.length;
return agv;

}





function isMultipleSeven(input){


	if(input%7==0){
		return true;
	}
	else{
		return false;
	}
}






function operation(operator, a, b){

	switch(operator){

case "add":
return a+b
break;

case "substract":
return a-b;
break;

case "multiply":
return a*b;
break;

case "divide":
return (a/b);
break;


default:
return "Not Supported";
break;

	}
}





function triangleMtn(input){
   for(var i=0 ;i < input;i++){
      var a = "*"
      
      for(var j=1; j<=i ;j++){
      a = a + "*";
      
	}
         console.log(a);
         
    }

}


