// Task B
// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
//
function countDigits(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") { 
      count++;
    }
  }
  return count;
}


console.log(countDigits("sdfha123bsdfaf324523467ew3wfsdf4u4nfnj434jf")); 



// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", // 0 - 20
//   "to'g'ri bohsliq tanlang va koproq xato qiling", // 20 - 30
//   "ozingizga ishlashni boshlang", // 30 - 40
//   "siz kuchli bolgan narsalarni qiling", // 40 - 50
//   "yoshlarga investitsiya qiling", // 50 - 60
//   "dam oling, foydasi yoq endi", //60
// ];
// // CALLBACK FUNCTION
// function maslahatBering(a, callback) {
//   if (typeof a !== 'number') callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function ()
//     { callback(null, list[5]);},5000)
//   }
//     else {
//     setInterval(function ()
//     { callback(null, list[5]);},1000)
//   }
// }

// console.log("passed here 0");
// maslahatBering(63, (err, data) => {
//   if (err) console.log("ERROR", err);
//   else {
//     console.log("Javob", data);
//   }
// });
// console.log("passed here 1");


// // // ASYNC FUNCTION
// // async function maslahatBering(a, callback) {
// //   if (typeof a !== 'number') throw new Error("insert a number");
// //   else if (a <= 20) return list[0];
// //   else if (a > 20 && a <= 30) return list[1];
// //   else if (a > 30 && a <= 40) return list[2];
// //   else if (a > 40 && a <= 50) return list[3];
// //   else if (a > 50 && a <= 60) return list[4];
//   // else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {  //setInterval Promise functionida ishlamaydi!!!
//           resolve(list[5])
//          }, 5000);
//      });
//     }
// }

// console.log("passed here 0");
// maslahatBering(63, (err, data) => {
//   if (err) console.log("ERROR", err);
//   else {
//     console.log("Javob", data);
//   }
// });
// console.log("passed here 1");



async function maslahatBering(a, callback) {
  if (typeof a !== 'number') throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    //   setTimeout(function ()
    //   { return list[5] },5000)
    // }
  }
}
// CALL VIA then() && catch() callbacks
//   console.log("passed here 0");
//   maslahatBering(25).then(data => {
//     console.log('javob', data);

//   }).catch(err => {
//     console.log('ERROR', err); // //Sync function lar ishga tushib bolgandan keyingina Async functionlari ishga tushadi.

//   })

//  console.log("passed here 0");
// // async/await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(110);
//   console.log(javob);
//   javob = await SweetmaslahatBering(33);
//   console.log(javob);
// }

// run();

// console.log("passed here 1");

// Async single thread ni band qilmaydigan function hisoblanadi.


// A-TASK: 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashgan sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// masalani yechimi:

 


// function countLetter(letter, word) {
//   let counter = 0;

//   for(i = 0; i < word.length; i++) {
//     if(word[i] === letter) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(countLetter("a", "australia"));
