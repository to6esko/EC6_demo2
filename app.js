//Funcktion

//ES5
function makeRequest1(url, timeout, callback) {
    timeout = timeout || 2000;
    callback = callback || function () { };
}

function makeRequest1(url, timeout, callback) {
    timeout = (typeof timeout !== 'undefined') ? timeout : 2000;
    callback = (typeof callback !== 'undefined') ? callback : function () { };
}

//ES6
function makeRequest2(url, timeout = 2000, callback = function(){}){
};

//nonstict mode
function mixArgs(first, second) {
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = 'c';
    second = 'd';
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
}
mixArgs('a', 'b');

console.log('*'.repeat(20));

//stict mode
function mixArgs1(first, second) {
    'use strict'
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = 'c';
    second = 'd';
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    }
mixArgs1('a', 'b');

console.log('*'.repeat(20));

//ES6
function mixArgs2(first, second='b'){
    //nonstrict mode
    console.log(arguments.length);
    console.log(first===arguments[0]);
    console.log(second===arguments[1]);
    first='c';
    second='d';
    console.log(first===arguments[0]);
    console.log(second===arguments[1]);
}
    mixArgs2('a');




function getValue(){
        return 5;
     }

function add (first, second=getValue()){
        return first + second;
    }
        console.log(add(1,1));    //2
        console.log(add(1));      //6

console.log('*'.repeat(20));

 function getValue2(value){
            return value + 5;
        }

 function add(first, second=getValue(first)){
            return first + second;
        }
            console.log(add(1,1));    //2
            console.log(add(1));     //7



 //Inspect arguments
function pick(object) {
    let result = Object.create(null);
    // започва от втория
    for (let i = 1, len = arguments.length; i < len; i++) {
        result[arguments[i]] = object[arguments[i]];
    }
    return result;
}
let book = {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    year: 2015
};
let bookData = pick(book, "author", "year");
console.log(bookData.author);   // "Nicholas C. Zakas"
console.log(bookData.year);     // 2015 


  //EC6 inspect arguments
function pick(object, ...keys) {
    let result = Object.create(null);
    for (let i = 0, len = keys.length; i < len; i++) {
        return[keys[i]] = object[keys[i]];
    }
    return result;
}


function checkArgs(...args) {
    console.log(args.length);
    console.log(arguments.length);
    console.log(args[0], arguments[0]);
    console.log(args[1], arguments[1]);
}
checkArgs("a", "b");    
            
 //*********************************

var add = new Function("first", "second", "return first + second");
console.log(add(1, 1));     // 2

 var add = new Function("first", "second = first",
        "return first + second");
console.log(add(1, 1));     // 2
console.log(add(1));        // 2

var pickFirst = new Function("...args", "return args[0]");
console.log(pickFirst(1, 2));   // 1


            //Spread
//EC 5
 let value1=25,
     value2=50;
 console.log(Math.max(value1,value2));  //50

 let value = [25,50,75,100];
 console.log(Math.max.apply(Math,value));  //100

 //EC 6
 let values = [25,50,75,100];
 console.log(Math.max(...values));       //100

 let values2 = [-25,-50,-75,-100];
 console.log(Math.max(...values2,0));   //0



            //EC 5
 function Person(name){
     if(this instanceof Person){
         this.name=name;
     }else{
         throw new Error('You must use with Person.');
     }
 }
 var person = new Person('Todor');
 var notAPerson = Person('Todor');   //Error



 function Person(name){
     if(this instanceof Person){
         this.name=name;
     }else{
         throw new Error('You must use with Person.');
     }
 }
 var person = new Person('Todor');
 var notAPerson = Person.call(person,'Todor'); //work

            //ES 6
 function Person(name){
     if(typeof new.target !== 'undefined'){
         this.name=name;
     }else{
         throw new Error('You must use with Person.');
     }
 }
 var person = new Person('Todor');
 var notAPerson = Person.call(person,'Todor'); //Error

 function Person(name){
     if(typeof new.target === Person){
         this.name=name;
     }else{
         throw new Error('You must use with Person.');
     }
 }
 function AnotherPerson(name){
     Person.call(this,name);
 }
 var person=new Person('Todor');
 var anotherPerson=new AnotherPerson('Todor');  //Error



            //Arrow function

            //EC 5
 var doNothing = function(){};
            //EC 6
 var doNothing= () => {};

//*********************************
            //EC 5
 var getName = function (){
     return "Todor";
 }
            //EC 6
 var getName= () => "Todor";

//********************************

            //EC 5
 var reflect = function (value) {
     return value;
 }
            //EC 6
 var reflect = value => value;

 //*******************************

            //EC 5
 var sum = function(num1,num2){
     return num1 + num2;
 }
 //EC 6
 var sum = (num1,num2) => num1 + num2;

 //********************************

            //EC 5
 var sum = function(num1, num2){
     return num1 + num2;
 }
            //EC6
 var sum=(num1,num2) => {
     return num1 + num2;
 }

//*******************************
            //EC 5
 var getTempItem=function(id){
     return {
         id: id,
         name:'Temp'
     };
 };
            //EC 6
 var getTempItem = id => ({id: id, name: 'Temp'});



            //Funcion Expressions
            //EC 5
 var person = function(name){
     return {
         getName:function(){
             return name;      //private
         }
     };
 }('Todor');
 console.log(person.getName());    //Todor

            //EC 6
 let person1 = ((name) => {
     return {
         getName:function(){
             return name;      //private
         }
     };
 })('Todor');
 console.log(person.getName());    //Todor





            //No this
            //EC 5
var PageHandler = {
    id: "123456",
    init: function() {
        document.addEventListener("click", function(event) {
            this.doSomething(event.type);     // error
        }, false);
    },
    doSomething: function(type) {
        console.log("Handling " + type  + " for " + this.id);
    }
};

var PageHandler1 = {
    id: "123456",
    init: function() {
        document.addEventListener("click", (function(event) {
            this.doSomething(event.type);     // no error
        }).bind(this), false);
    },
    doSomething: function(type) {
        console.log("Handling " + type  + " for " + this.id);
    }
};  

            //EC 6
var PageHandler2 = {
    id: "123456",
    init: function() {
        document.addEventListener("click",
                event => this.doSomething(event.type), false);
    },
    doSomething: function(type) {
        console.log("Handling " + type  + " for " + this.id);
    }
};      
    


 var MyType = () => {}.
 object = new MyType();    //error func arrow + new


            //Arrow funciton and Array
            //EC 5
 var result = values.sort(function(a,b){
     return a-b;
 });

            //EC 6
 var result=values.sort((a,b) => a - b); //sort(),map(),reduce()


            //Tail call optimized
 'use strict';
 function doSomething(){     //optimized
     return doSomethingElse();
 }

 'use strict';
 function doSomething(){     // no optimized
     doSomethingElse();
 }

 'use strict';
 function doSomething(){     // no optimized
     return 1 + doSomethingElse();
 }

 'use strict';
 function doSomething(){ 
     var result = doSomethingElse();   //no optimized
     return result;
 }

 'use strict';
 function doSomething(){ 
     var num = 1,
        func = () => num;   //no optimized
     return func();
 }




 function factorial(n){
     if(n <= 1){
         return 1;             //no optimized
     }else {
         return n * factorial (n - 1);
     }
 }

 function factorial(n, p = 1){
     if(n <= 1){
         return 1 * p;             //optimized
     }else {
         let result = n * p;
         return factorial (n - 1, result);
     }
 }

