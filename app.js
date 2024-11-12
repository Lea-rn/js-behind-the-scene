"use strict";

// const me = "jonas"  ///// global scope ..
// const job = "teacher"
// let year = 2000

// console.log(me ,job  , year)

// function calcAge (bearthYear){
//  const age = 2024 - bearthYear

//    function printAge (){
//     const output = `${me} you are ${age} born in ${year}`
//     console.log(output)
//    }
//    printAge()
// }

// // console.log("age:" ,age)

// console.log(calcAge(year))

// let year = 2000

//    function printAge (year){
//     if (1){
//         let millenial = true
//         var food = "avocado toast"
//         console.log(food)
//        }
// }

// printAge(2002)

// console.log(this)

// const calcAge = function (year){
//  console.log(this)
// }

// calcAge(2000)

// const ali = {
//     bearthYear : 1990 ,
//     calcAge : function (year){
//     const age = 2024 - year
//     console.log(age)
//     }
// }

// console.log(ali.calcAge(2000))

// const ali = {
//   bearthYear: 2000,
//   calcAge: function () {
//     const age = 2024 - this.bearthYear;
//     console.log(age);
//   },
// };

// const sami = {
//   bearthYear: 1995,
// };

// console.log("before:", sami);

// sami.calcAgeeeee = ali.calcAge;

// console.log("after:", sami);
// console.log(sami.calcAgeeeee);
// console.log(sami.calcAgeeeee());

// console.log(ali.calcAge());


// let age = 30 ; 
// let oldAge = age ; ////// age = 30 = oldAge
// age = 31 


// console.log(age)
// console.log(oldAge)


// const me = {
//     name: "Ali",
//     age : 30 
// }

// const freind = me

// freind.age = 27 ;

// console.log("me : " , me)
// console.log("freind : " , freind)


//// reference data types exemple :: 

//// pb :: 

//   const jessica = {
//     firstName : "jessica" , 
//     lastName : "willimas" , 
//     age : 27
//   }

//   const marriedJessica = jessica

// marriedJessica.lastName = "davis"

// console.log("before-marriage : " , jessica)
// console.log("after-marriage:" , marriedJessica)

//// solution ::: 
 
//  const student = {
//     name : "ali" ,
//     age : 30 ,
//  }

//  const info = {
//     country : "tunisia" , 
//     city : "ben arous"
//  }
//  console.log("before:" , student)
//  const result = Object.assign(student,info) /// mnin bech tjib esource eli bech tbadel bih etraget (el hadaf)


//  console.log("after:" , student)
//  console.log(student)


// const jessica = {
//     firstName : "jessica" , 
//     lastName : "willimas" , 
//     age : 27 , 
//     family : ["jessica" , "peter"]    ///// object nesting  array data type object
//   }



//   const marriedJessica = Object.assign({},jessica)
//   marriedJessica.lastName = "davis"

//  marriedJessica.family.push("Marry")
//  marriedJessica.family.push("jhon")


// console.log("before-marriage : " , jessica)
// console.log("after-marriage:" , marriedJessica)
