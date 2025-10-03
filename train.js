//  E-TASK: 

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

function getReverse(word) {
  return word.split('').reverse().join('');
} 
console.log(getReverse("done reverse"))

// TASK D : 

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin

// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// function checkContent(word, word_2) {

  
//   if (word.length !== word_2.length) {
//     return false;
//     }
//     word = word.toLowerCase();
//     word_2 = word_2.toLowerCase();
//     let h = word.split("").sort().join("");
//     let b = word_2.split("").sort().join("");

//   if( h === b) {
//     return true;
//   }
// }
// console.log(checkContent('Marcus', "sucraM"));

// MITASK-C 

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// class Shop {
//   constructor(non, kabob, osh) {
//     this.non = non;
//     this.kabob = kabob
//     this.osh = osh;
//   }

// getTime() {
//   const now = new Date();
//   const h = String(now.getHours()).padStart(2, "0");
//   const m = String(now.getMinutes()).padStart(2, "0");
//   return `${h}:${m}`;
// }

//   qoldiq() {
//     const time = this.getTime();
//     console.log(`Hozir ${time} da ${this.non} ta non, ${this.kabob} ta kabob va ${this.osh} ta tovoq osh bor.`);
//   }

//   sotish(ite, coun) {
//     const time = this.getTime();
//     if (this[ite] >= coun) {
//       this[ite] -= coun;
//       console.log(`Hozir ${time} da ${coun} ta ${ite} sotildi!`);
//     } else {
//       console.log(`Hozir ${time} da ${ite} yetarli emas!`);
//     }
//   }
  

//     qabul(item, count) {
//     const time = this.getTime();
//     this[item] += count;
//     console.log(`Hozir ${time} da ${count} ta ${item} qabul qilindi!`);
//   }
// }


// const shop = new Shop(3, 5, 10 );
// shop.qoldiq();

// shop.sotish("osh", 2);          
// shop.qabul("osh", 1);          

// shop.qoldiq();  


// Task B
// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
//
// function countDigits(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i]) && str[i] !== " ") { 
//       count++;
//     }
//   }
//   return count;
// }


// console.log(countDigits("sdfha123bsdfaf324523467ew3wfsdf4u4nfnj434jf")); 



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



// async function maslahatBering(a, callback) {
//   if (typeof a !== 'number') throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     //   setTimeout(function ()
//     //   { return list[5] },5000)
//     // }
//   }
// }
// // CALL VIA then() && catch() callbacks
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
