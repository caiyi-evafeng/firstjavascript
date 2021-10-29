// var string1 = "great day today!"
// var string2 = "the weather is nice!"
//
// if(string1==string2){
//   alert("Yes! Today is a great day!")
// }else{
//   alert("We have different definition for a great day :(")
// }
//
//
//
// var num1 = 9
// var guess = 8
//
// if(num1==guess){
//   alert("You got it!")
// }else if (num1 > guess){
//   alert("Try bigger number!")
// }else{
//   alert("Try smaller number!")
// }
//
// function combine(){
//   console.log(string1+ " " +string2);
// }
// combine()

var num3 = Math.floor(Math.random()*32).toFixed(2);
console.log(num3)
var num = (num3/100+10).toFixed(2);
console.log(num);
function date(num){
  if (num==10.27){
    return "There's four days more until Hallowen!"
  }else if(num==10.28){
    return "There's three days more until Hallowen!"
  }else if (num==10.29){
    return "There's two days more until Hallowen!"
  }else if (num==10.30){
    return "Hallowen is tomorrow!"
  }else if(num==10.31){
    return "Hallowen is TODAY! YAY!"
  }else{
    return "There's gonna be a wait..."
  }
}
console.log(date(num))


// var array = ["hahaha", "lol", "wtf","omw","tgif","tltr","YAS"]
// console.log(array[Math.floor(Math.random()*7)]+" " +array[Math.floor(Math.random()*7)])









// // console.log("BOO!");
// // //alert("Le Boo.");
// // var firstName = "Lil";
// // var lastName = "Pumpkin";
// // var space = " ";
// //
// // console.log(firstName + " :) " + space + lastName);
// // console.log(firstName, lastName, lastName);
// //
// // var num1 = 5;
// // var num2 = 5.4;
// // var num3 = 4;
//
// // console.log("Output: "+(num1+num2+num3));
// // var firstArray = ["Lil","Big", "DJ", "Dr."];
// var secondArray = ["cats", "Parmesan","Zoom Party", "Yoga", "Candy", "Treats", "Brie"];
//
// var randomIndex = Math.floor(Math.random()*secondArray.length);
// //console.log(randomIndex);
// console.log(secondArray[randomIndex]);
//
// function sayHello(){
//   console.log('helloooo!');
//   console.log('sup.');
// }
//
// sayHello();
//
// function addNumber (numberOne, numberTwo){
//   var result = numberOne * numberTwo;
//   console.log("Result: "+result);
// }
//
// addNumber (40,60);
//
// function addNumberAndReture(numberOne, numberTwo){
//   return numberOne+numberTwo;
// }
//
// console.log("Here's the value: "+addNumberAndReture(400,200));
//
// function door(num){
//   if (num==1){
//     return "Haunted Bathroom";
//   }
//   else if(num==2){
//     return "Spooky Bedroom";
//   }
//   else if(num==3){
//     return"Creepy Kitchen";
//   }else {
//     return "There are only three doors!";
//   }
// }
//
// console.log(door(Math.floor(Math.random()*4)));
// // console.log(firstArray);
// // console.log(secondArray[0]);
// //
// //
// // num=10;
// //
// // if(num == 15){
// //   console.log("you have the correct number!");
// // } else if(num>15){
// //   console.log("your number is too big")
// // }else {
// //   console.log("please choose another number")
// // }
// //
// // console.log(Math.random()*50);
