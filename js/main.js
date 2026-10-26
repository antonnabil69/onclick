// intro to java scrip

// case sensitive

// compiler xxx
// interpretter

// camel case
//  اول كلمه small حرف صغير وفيما بعد كله كابيتال



// ==================================================

// to show code

// 1- console.log(z);
// 2- alert(z);
// 3- document.write(z);
// 4- document.getElementById('demo').innerHTML = z;

// var x = 5;
// var y = 10;
// var z = x + y;

// ==================================================

// variable ==>>> متغير اقدر اخزن فيه قيمه او مجموعه م القيم واقدر استخدمها اكتر من مره



// variable declaration

// 1- type ==>> var // let // const

// 2- name ==> 1- not start with num
//  ==> 2- not contain any spicail char ===> $ _
//  ==> 3- not contain any reserved word
//  ==> 4- unqiue value

// 3- value ===>> data type

// ==============================================

// Data type

// 1- var x = 5; // integer // number

// 2- var y = 5.5; // float , double // number

// 3- var z = "Hello, World!"; // string
// 4- var a = "3"; // string
// اي حاجه مابين دابيل كووت فاهي استرينج

// 5- var t = true; // boolean
// 6- var f = false; // boolean

// 7- var n = null; // null

// console.log(typeof x);
// هنا عشان اعرف واشوف انواعهم من الكونسول

// =================================

// array ==>>> متغير اقدر اخزن فيه اكتر من قيمه في نفس الوقت

// بتشيل varity of data type

// var names = ["ahmed", "ali", "mohamed", "sara", "mona, 4,5,6,true];
// مخزن او متغير شايل اكتر من قيمه واسمه array

// console.log(typeof names); // array of object ده نوعها

// console.log(names); // هنا هايطبعهم كلهم

// لو بقي عاوز اسم معين
// console.log(names[2]); // = > هنا هايطبع اسم معين من ال array mohamed


// console.log(names[10]); // = > هنا هايطبع undefined عشان مفيش اسم في ال array في المكان ده

// console.log(hii); // = > هنا هايطبع error notdefined عشان مفيش متغير اسمه ده

// undefined مش بيحجز مكان ف الميموري حاجه متعرفه ومش معلومه

// notdefined هنا مش متعرف و هايقوف الاسكريبت


// var x = null;
// console.log(typeof x); // = > object ده نوعها

// null بيحجز مكان ف الميموري بس متعرفه ومش معلومه



// ========================================================
// ========================================================

// object ====> متغير اقدر اخزن فيه اكتر من قيمه في نفس الوقت بس كل قيمه تحمل وصفها

// var person = {
// firstName: "John",
// lastName: "Doe",
// color: "blue",
// salary: 5000,
// isAdmin: true,
// age: 30};

// console.log(person["firstName"]); bracket notation
// console.log(person.firstName); dot notation


// ========================================================
// ========================================================
// ========================================================

// if condition


// var x = prompt("what is the price?");
// if (x > 20) {
// alert("expensive")
// }
// else if (x == 20) {
// alert("cool")
// }
// else if (x < 20) {
// alert("cheap")
// }
// else {
// alert("not a num")
// }

// ========================================================
// ========================================================
// ========================================================

// function
//  ===> مجموعه من الاوامر اقدر استخدمها اكتر من مره
//          ===> block of statments and reuse

// function getData(fname = "gamal", color = "green") //prameter
// {


// console.log("hello world");
// console.log("123");
// console.log("456");
// console.log("my name is " + fname + " and my color is " + color);
// }

// getData("Alice", "red"); // call function with arguments
// getData("tony", "blue"); // call function with diffrint arguments
// getData(); // هنا هايبعت عندي  undefined عشان مفيش قيمه متعرفه للبراميترز
// وهايبعت هناالقيمه اليدفولت

// {/* <button onclick="getData('tony', 'blue')">turn on</button> */}
// ده هنا بخليها تشتغل ف الزرار

// getData(); // call function



// ===============================================================
// ===============================================================
// ===============================================================

// string methods


// var y = x.length; هنا هايطبع 12 عشان طول ال string
// var y = x.indexOf("1",4); هنا هايطبع 4 عشان اول مكان فيه 1 بعد ال index 4
// var y = x.lastIndexOf("1",5); هنا هايطبع 4 عشان اخر مكان فيه 1 قبل ال index 5
// var y = x.includes("world"); هنا هايطبع true عشان فيه world
// var y = x.search("@"); هنا هايطبع -1 عشان مفيش @
// var y = x.slice(6, 11); // هنا هايطبع world + -
// var x =substring(6, 11); // هنا هايطبع world + -
// var y = x.replace("world", "ahmed"); // هنا هايطبع hello ahmed Dear
// var y = x.replace(/world/i, "ahmed"); // هنا هايطبع hello ahmed Dear
// var y = x.replace(/world/ig, "ahmed"); هذا هنا هايطبع hello ahmed ahmed Dear
// var x = "hello world world Dear";
// var y = x.toUpperCase(); // هنا هايطبع HELLO WORLD
// var y = x.toLowerCase(); // هنا هايطبع hello world
// var y = x.trim(); // هنا هايطبع hello world  بدون مسافات من اليمين والشمال


// var x = "hello world ";

// var y = x.charAt(6); // هنا هايطبع w

// var y = x.charCodeAt(6); // هنا هايطبع 119

// alert(y);



// ===============================================================
// ===============================================================
// ===============================================================

// Loops

// while loop
/*
console.log("Loop");
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
*/
// لو متعرفش عدد مرات التكرار استخدم ال while

// do while loop
/*
console.log("Loop");
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
*/

//for loop
/*
console.log("Loop");
for (var i=0; i<5; i++) {
    console.log(i);
}
*/
// لو تعرف عدد مرات التكرار قبل ما تعمل اللوب استخدم الفور لوب

// loop on array

/*
var names = ["anton","dodo","mark","nabil","mama","baba",];

var basket = "";

for(var i=0; i< names.length; i++){

 // console.log(names[i]);

 basket = basket + names[i] +"<br>";

}
document.getElementById("demo").innerHTML = basket;

*/



// for in loop

// console.log("Loop");
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     isAdmin:"true",
//     color:"red",
//     age: 30
// };

// for (var key in person) {
//     console.log(key + ": " + person[key]);
// }

// ===============================================================
// ===============================================================
// ===============================================================



// Array method

// في الاخر
// pop // بتمسح
// var x = names.pop("too");

// push // بضيف
// var x = names.push("tony");
// if(x>6){
// names.pop();}

// في الاول
// shift // بتمسح
// var x = names.shift("moo");

// unshift // بتضيف
// var x = names.shift("moo");
// console.log(x);

// delete names[0]; هنا ب

// names.splice(2,0,"dina","kareem");

// names.sort();

// js math ديه عشان

// var names = ["ahmed", "ali", "mohamed", "sara", "mona", "omar"];
// console.log(names);

// ==========================================



// globel scope

// var x = 5; //globel

// function getData() {
//     var x = x + 15; // redclare
//     x = x + 15; // reassign
// local scope
//     //  لو في ديه هنا فقط فنا بعدل في الفنكيشن وبره لكن لو في ريدكلير في الفلينكيشن ف انا كده بعدل في الفينكيشن بس
//     console.log(x); //35
// }

// getData();

// console.log(x);




// switch

// var x = prompt("who is winner of the worled cup");

// switch (x) {
//     case "england": {

//         alert("not engalnd");
//         break;
//     }

//     case "barazil": {

//         alert("not barazil");
//         break;

//     }

//     case "egypt": {

//         alert("not egypt");
//         break;

//     }

//     default: {
//         alert("spin is the winner");

//     }

// }



// =================================================
// =================================================
// =================================================

// DOM ===> Document object model

// document 

// console.log(document.body);
// document.body.innerHTML = "";
// document.body.style.background = "red";
// document.body.style.append();

// console.log(document.head);
// document.head.append();

// document.title ="depi";

// var x = document.all;
// x[7].style.color = "red";


// console.log(document.links);





// =================================================
// =================================================
// =================================================


// var x = document.getElementsByClassName هنا ب


// for (var i=0; i<x.length; i++){
//     x[i].style.color ="yellow";
// }
// console.log(x);




// =================================================
// =================================================

// QuerySelector
// QuerySelectorAll

// var x =document.querySelector(".dome:nth-of-type(2)");
// var x =document.querySelector("#demo").children;
// x[0].style.background ="yellow";
// x[1].style.background ="yellow";


// x.style.color ="yellow";
// console.log(x);


// var x =document.querySelectorAll(".dome or nav a");
// console.log(x);


// ==================================================
// ==================================================
// ==================================================


// getAttribute
// setAttribute 

// var x = document.querySelector("#user").getAttribute("placeholder");

// document.querySelector("#email").setAttribute("placeholder",x);



// ========================================================

// event


// document.querySelector("#demo").onclick = function (){


//     console.log(123);
//     console.log(567);
// }


// document.querySelector("#demo").onclick = getData

// function getData() {
//     console.log(123);
//     console.log(567);
// }

// getData();


// ==================================================
// ==================================================
// ==================================================

// addEventListener

// document.querySelector("#demo").addEventListener("click", function () {
//     console.log(123);
//     console.log(456);
// })

// document.querySelector("#demo").addEventListener("click", getData)
// function getData() {
//     console.log(123);
//     console.log(456);

// }


// document.querySelector("#demo").addEventListener("click", getData)
// function getData(e) {
//     console.log(123);
//     e.preventDefult();
//     return false;
// }


// ==================================================
// ==================================================
// ==================================================

// 

//  <h4 id'ali' class'ahmed'>heloo world</h4>

// var newElement = document.createElement(h4);
// newElement.id = "ali";
// newElement.className = "ahmed";
// newElement.innerHTML = "heloo world";

// var x =document.querySelector()


// ===========================================================================================


// document.querySelector("#red").onclick = function () {
//     document.querySelector("#demo").style.color = "red ";
// }
// document.querySelector("#blue").onclick = function () {
//     document.querySelector("#demo").style.color = "blue ";
// }
// document.querySelector("#yellow").onclick = function () {
//     document.querySelector("#demo").style.color = "yellow ";
// }


document.querySelectorAll("button").forEach(function (item) {

    item.onclick = function () {
        document.querySelector("#demo").style.color = item.dataset.coloor;
        document.querySelector("#demo").style.textAlign = item.dataset.location;
        // document.querySelector("#demo").style.color = "red";

    }
})