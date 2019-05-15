// alert('Hello World');
// let demo = "Hello World!"
// alert(demo);
// let admin = "Jhon"
// let name = "admin"
// alert(admin);
// alert(name);
// const BIRTHDAY = '18.04.1982'; // make uppercase?
// alert(BIRTHDAY);
// alert( `the result is ${25 * 5}` );
// alert( `Hello, ${BIRTHDAY}!` );
// let name = "Ilya";

// alert( `hello ${1}` ); // ?

// alert( `hello ${"name"}` ); // ?

// alert( `hello ${name}` ); // ?

// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (error reading a number at "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0
// let age = prompt('How old are you?', 100);
// alert(`You are ${age} years old!`);

// let year = prompt('In which year was ECMAScript-2015 specification published?', '');

// if (year == 2015) { alert( 'You are right!' );
// }else { alert('your wrong'); }

// let i = 0;
// while (i < 5) { // shows 0, then 1, then 2
//   alert( i );
//   i++;
// }
// function showMessage() {
//     alert( 'Hello everyone!' );
//   }
// showMessage();
// showMessage();

// function showMessage(from, text) {
//     if (text === undefined) {
//       text = 'no text given';
//     }
  
//     alert( from + ": " + text );
//   }
//   showMessage("Hello");

//   function showMessage(from, text) {
//     // if text is falsy then text gets the "default" value
//     text = text || 'no text given';
//     alert( from + ": " + text );
//   }
// showMessage("Hello Again")

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

// let age = prompt("what is your age?", 18);

// let welcome = (age < 18) ?
// function() { alert("Hello!");} :
// function() { alert("Greetings!");} ;

// welcome();

// let sum = function(a, b) {
//   let result = a + b;

//   return result;
// }
// alert(result);
// function hello(name) {
//   let phrase = `Hello, ${name}!`;

//   debugger;  // <-- the debugger stops here

//   say(phrase);
// }
// for (let i = 0; i < 5; i++) {
//   console.log("value", i);
// }
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 0) {
  alert(`Power ${n} is not supported,
    please enter an integer number greater than zero`);
} else {
  alert( pow(x, n) );
}