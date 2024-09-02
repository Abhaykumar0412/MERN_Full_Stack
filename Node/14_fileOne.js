// import { sub , sum } from "../14_Mathe.js";

// console.log(sum(12, 3))

// or

// import { sub , sum } from "../14_Mathe.js";
// let a = 12;
// let b = 5;
// console.log(sum(a, b))

// or

// import { sub , sum } from "../14_Mathe.js";
// let a = 12;
// let b = 5;
// console.log(sub(a, b))



// import { sub } from "../14_Mathe.js";
// let a = 12;
// let b = 5;
// console.log(sub(a, b))

//or

// import product from "../14_Mathe.js";
// let a = 12;
// let b = 5;
// console.log(product(a, b))



// import figlet from "figlet";

// figlet("Hello Abhay ! !", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });




import TextToSpeech from 'text-to-speech-converter'

async function testSpeechGeneration() {
    try {
        const outputFilePath = 'output';
        const text = 'Hello Abhay, what can i do for you';
        const result = await TextToSpeech(text, outputFilePath);
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}
testSpeechGeneration();