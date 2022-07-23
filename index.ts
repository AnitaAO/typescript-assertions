// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <h1>TypeScript Assertions</h1>
  <h3>Type Assertions are done in two ways:</h3>
  <p><strong>NOTE</strong>: These two methods are used when working with objects </p>
  <p style="margin-top: -10px">This is because concatenation especially with (functions and methods gotten from intelliscence) is done with strings</p>
  <ul>
    <li>"(<>object)."</>
    <li>"message as string."</>
  </ul>
`
//WORKING WITH ASSERTIONS
let message; //note thate this message is the type "any" since it is not assigned
message = "abc" // now it's assigned a string "abc" now an object/variable "message"
let endWithB = message.endsWith('b') //intelliscence won't give you an option because "message" 
                                    //here is not a string, line 18
let endsWithC = (<string>message).endsWith('c') //endsWith can be a function/method. => assertion 1
let endsWithD = (message as string).endsWith('d') //  => Assertion type 2
