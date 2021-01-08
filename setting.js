// //practics.



// let arr2 = [2, 3, 5, 100, 10 ]

// function total(arr2){
//     let sum = 0;
//     for ( let i = 0; i < arr2.length; i++){
//         sum += arr2[i]   
         
//     }

//     return sum;
// }

// console.log(total(arr2));




var ownNum = 0;
var lostNum = 0;

for (var i=1; i<=5; i++) {

var guessNum= parseInt(prompt("Enter a Number Between 1 to 5 : "));

var randomNum = Math.floor(Math.random() * 5) + 1;

if (guessNum <= 0 || guessNum >5){
    console.log("Your input number was wrong");
   
    alert("Uuupppss...!!!! Your Input Number was wrong. That's why you don't continue this game at this moment. Please try again & refresh your browser" );
    break;
    
    // window.stop();
}else if(guessNum === 0){
    console.log("0 is Invlaid Number");
}
else if(guessNum === randomNum){
    alert("You have won");
    ownNum++;
}else{
    alert("You have lost. Rendom number was " + randomNum);
    lostNum++;
}


}
document.write("You have Own : " + ownNum + "times <br>");
document.write("You have Lost : " + lostNum + "times");














// var date = new Date();
// console.log(date);

// var year = date.getFullYear();
// console.log(year);

// var month = date.getMonth();
// console.log(month);

// var currentDate = date.getDate();
// console.log(currentDate);

// var day = date.getDay();
// console.log(day);

// var hour = date.getHours();
// console.log(hour);




// function getAge(value){
//     let arr1 = value.toString().split(' ');
//     let arr2 = arr1[0].split('-');
//     let age = new Date().getFullYear() - arr2[0];
//      return age;
//     } 
//     console.log(getAge(1999));


// for(x = 1; x<=100; x++){
//     if(x % 2 !==0){
//         continue;
//       }
//       document.write(" " + x);
//     }

// for(var y = 1; y <= 5; ++y){
//     var fNum = parseInt(prompt("Enter Your First Number : "));
//     var lNum = parseInt(prompt("Enter Your Last Number : "));
//     var sum = 0;
//     for(var x = fNum; x <= lNum; ++x){
//       sum = sum + x;
//     }
//     console.log(sum);
//     }

// for(var y = 1; y <= 2; ++y){
//   var sName = prompt("Enter Your Student Name : ");
//     document.write("Student Name : " + sName + "<br/><br/>");
//   var sRoll = parseInt(prompt("Student Roll : "));
//     document.write("Roll No : " + sRoll + ".<br/><br/>");
//   var mathNum = parseInt(prompt("Enter Your Math Mark : "));


//   var fullMark = 100;
//   var subMark = mathNum;
//   if(subMark >= 80 && subMark <= 100){
//     document.write("Math : A+<br/><br/>");
//   }else if(subMark >= 70 && subMark < 80){
//     document.write("Math : A<br/><br/>")
//   }else if(subMark >= 50 && subMark < 70){
//     document.write("Math : A-<br/><br/>")
//   }else if(subMark >= 40 && subMark < 50){
//     document.write("Math : B+<br/><br/>")
//   }else if(subMark >= 33 && subMark < 40){
//     document.write("Math : B-<br/><br/>")
//   }else if(subMark > 100){
//     document.write("Uff Wrong Input, Your Input Marks > 100; Your Input Marks: " + subMark + ", Its not accepted.... Please Try again..<br/><br/>")
//   }else{
//     document.write("Math : Faild: " + subMark + "<br/><br/>");
//   }



//   var banNum = parseInt(prompt("Enter Your Bangla Mark : "));


//   var fullMark = 100;
//   var subMark = banNum;
//   if(subMark >= 80 && subMark <= 100){
//     document.write("Bangla : A+<br/><br/>");
//   }else if(subMark >= 70 && subMark < 80){
//     document.write("Bangla : A<br/><br/>")
//   }else if(subMark >= 50 && subMark < 70){
//     document.write("Bangla : A-<br/><br/>")
//   }else if(subMark >= 40 && subMark < 50){
//     document.write("Bangla : B+<br/><br/>")
//   }else if(subMark >= 33 && subMark < 40){
//     document.write("Bangla : B-<br/><br/>")
//   }else if(subMark > 100){
//     document.write("Uff Wrong Input, Your Input Marks > 100; Your Input Marks: " + subMark + ", Its not accepted.... Please Try again..<br/><br/>")
//   }else{
//     document.write("Bangla : Faild: " + subMark + "<br/><br/>");
//   }
//   var engNum = parseInt(prompt("Enter Your English Mark : "));


//   var fullMark = 100;
//   var subMark = engNum;
//   if(subMark >= 80 && subMark <= 100){
//     document.write("English : A+<br/><br/>");
//   }else if(subMark >= 70 && subMark < 80){
//     document.write("English : A<br/><br/>")
//   }else if(subMark >= 50 && subMark < 70){
//     document.write("English : A-<br/><br/>")
//   }else if(subMark >= 40 && subMark < 50){
//     document.write("English : B+<br/><br/>")
//   }else if(subMark >= 33 && subMark < 40){
//     document.write("English : B-<br/><br/>")
//   }else if(subMark > 100){
//     document.write("Uff Wrong Input, Your Input Marks > 100; Your Input Marks: " + subMark + ", Its not accepted.... Please Try again..<br/><br/>")
//   }else{
//     document.write("English : Faild: " + subMark + "<br/><br/>");
//   }
//   var ictNum = parseInt(prompt("Enter Your ICT Mark : "));


//   var fullMark = 100;
//   var subMark = ictNum;
//   if(subMark >= 80 && subMark <= 100){
//     document.write("ICT : A+<br/><br/>");
//   }else if(subMark >= 70 && subMark < 80){
//     document.write("ICT : A<br/><br/>")
//   }else if(subMark >= 50 && subMark < 70){
//     document.write("ICT : A-<br/><br/>")
//   }else if(subMark >= 40 && subMark < 50){
//     document.write("ICT : B+<br/><br/>")
//   }else if(subMark >= 33 && subMark < 40){
//     document.write("ICT : B-<br/><br/>")
//   }else if(subMark > 100){
//     document.write("Uff Wrong Input, Your Input Marks > 100; Your Input Marks: " + subMark + ", Its not accepted.... Please Try again..<br/><br/>")
//   }else{
//     document.write("ICT : Faild: " + subMark + "<br/><br/>");
//   }
// }

//   var engNum = parseInt(prompt("Enter Your English Mark : "));
  
//   var fullMark = 100;
//   var subMark = engNum;
//   if(subMark >= 80 && subMark <= 100){
//     document.write("A+");
//   }else if(subMark >= 70 && subMark < 80){
//     document.write("A")
//   }else if(subMark >= 50 && subMark < 70){
//     document.write("A-")
//   }else if(subMark >= 40 && subMark < 50){
//     document.write("B+")
//   }else if(subMark >= 33 && subMark < 40){
//     document.write("B-")
//   }else if(subMark > 100){
//     document.write("Uff Wrong Input, Your Input Marks > 100; Your Input Marks: " + subMark + ", Its not accepted.... Please Try again..")
//   }else{
//     document.write("Faild: " + subMark);
//   }
  
  
//   var sosialNum = parseInt(prompt("Enter Your Social Mark : "));
  
//     var fullMark = 100;
//     var subMark = sosialNum;
//     if(subMark >= 80 && subMark <= 100){
//       document.write("A+");
//     }else if(subMark >= 70 && subMark < 80){
//       document.write("A")
//     }else if(subMark >= 50 && subMark < 70){
//       document.write("A-")
//     }else if(subMark >= 40 && subMark < 50){
//       document.write("B+")
//     }else if(subMark >= 33 && subMark < 40){
//       document.write("B-")
//     }else if(subMark > 100){
//       document.write("Uff Wrong Input, Your Input Marks > 100; Your Input Marks: " + subMark + ", Its not accepted.... Please Try again..")
//     }else{
//       document.write("Faild: " + subMark);
//     }
  
//   var scienceNum = parseInt(prompt("Enter Your Science Mark : "));
  
//     var fullMark = 100;
//     var subMark = scienceNum;
//     if(subMark >= 80 && subMark <= 100){
//      document.write("A+");
//     }else if(subMark >= 70 && subMark < 80){
//       document.write("A")
//     }else if(subMark >= 50 && subMark < 70){
//       document.write("A-")
//     }else if(subMark >= 40 && subMark < 50){
//       document.write("B+")
//     }else if(subMark >= 33 && subMark < 40){
//       document.write("B-")
//     }else if(subMark > 100){
//       document.write("Uff Wrong Input, Your Input Marks > 100; Your Input Marks: " + subMark + ", Its not accepted.... Please Try again..")
//     }else{
//       document.write("Faild: " + subMark);
//     }
//   var physicsNum = parseInt(prompt("Enter Your Physics Mark : "));
  
//     var fullMark = 100;
//     var subMark = physicsNum;
//     if(subMark >= 80 && subMark <= 100){
//      document.write("A+");
//     }else if(subMark >= 70 && subMark < 80){
//       document.write("A")
//     }else if(subMark >= 50 && subMark < 70){
//       document.write("A-")
//     }else if(subMark >= 40 && subMark < 50){
//       document.write("B+")
//     }else if(subMark >= 33 && subMark < 40){
//       document.write("B-")
//     }else if(subMark > 100){
//       document.write("Uff Wrong Input, Your Input Marks > 100; Your Input Marks: " + subMark + ", Its not accepted.... Please Try again..")
//     }else{
//       document.write("Faild: " + subMark);
//     }
//   var practicalNum = parseInt(prompt("Enter Your Practical Mark : "));
  
//     var fullMark = 100;
//     var subMark = practicalNum;
//     if(subMark >= 80 && subMark <= 100){
//       document.write("A+");
//     }else if(subMark >= 70 && subMark < 80){
//       document.write("A")
//     }else if(subMark >= 50 && subMark < 70){
//       document.write("A-")
//     }else if(subMark >= 40 && subMark < 50){
//       document.write("B+")
//     }else if(subMark >= 33 && subMark < 40){
//      document.write("B-")
//     }else if(subMark > 100){
//       console.log("Uff Wrong Input, Your Input Marks > 100; Your Input Marks: " + subMark + ", Its not accepted.... Please Try again..")
//     }else{
//       document.write("Faild: " + subMark);
//     }
  
// var fNum = prompt("Enter your starting Number :");
// var lNum = prompt("enter your last number : ");
//   var sum = 0;
//   for(var x = fNum; x <= lNum; ++x){
//     sum = sum + x;
//   }
//   console.log(sum);












// var num1 = parseFloat(prompt("Enter Your top leanth : "));
// var num2 = parseFloat(prompt("Enter Your Base Lenth: "));
// var num3 = parseFloat(prompt("Enter Your Height: "));
// var num1 = parseInt(num1, 10);
// var num2 = parseInt(num2, 10);
// var num3 = parseInt(num3, 10);
// var result = ((num1 + num2) * num3) / 2;
// document.write("Your Area : " + result);


// var num1 = prompt("Enter your First Number");
// var num2 = prompt("Enter Your Secound Number : ");
// var num1 = parseInt(num1, 10);
// var num2 = parseInt(num2, 10);
// var sub, sup, gun, vhag, shotkora;
// sum = num1 + num2;
// sup = num1 - num2;
// gun = num1 * num2;
// vhag = num1 / num2;
// shotkora = num1 % num2;
// document.write(num1 + " + " + num2 + " = " + sum + "," + "<br/>");
// document.write(num1 + " - " + num2 + " = " + sup + "," + "<br/>");
// document.write(num1 + " * " + num2 + " = " + gun + "," + "<br/>");
// document.write(num1 + " / " + num2 + " = " + vhag + "," + "<br/>");
// document.write(num1 + " % " + num2 + " = " + shotkora + ",");


// Assignment Operators. +=, *=, %=, /=, %=, **=,,,,
// var x = 5;
// x *= 3;//x = x * 3//
// console.log(x);
// Assignment Operators. +=, *=, %=, /=, %=, **=,,,,

// slice.no-07
// var country="Bangladesh";
// slice = country.slice(2, 4);
// console.log(slice);

// var country2 = "bangladesh";
// country2 = country2.toUpperCase(country2);
// console.log(country2);

// var country3 = "Bangladesh"
//    document.write(country3.charAt(2));
// //concat.
// var text1 = "My name is: ";
// var text2 = "Siam";
// var name = text1.concat(text2);
// console.log(name);
