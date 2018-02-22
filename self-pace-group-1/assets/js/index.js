
  const myName = "Noi"
  const greeting = "Hello everyone! My name is " + myName + ". Nice meeting you!"

  //document.querySelector("li.normalCase").innerHTML =  ("original .... " + greeting)
  //document.querySelector("li.lowerCase").innerHTML =  ("lowercase .... " + greeting.toLowerCase())
  // document.querySelector("li.upperCase").innerHTML =  ("uppercase .... " + greeting.toUpperCase())

    console.log('Before:', greeting)
    console.log(greeting.toLowerCase())
    console.log(greeting.toUpperCase())


//Write a program that replaces {your_name} with your name,
//and {day_of_week} with the current day for the sentence below.
//Then print it to the console.
const currentDay = new Date()
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const today = days[currentDay.getDay()]

    // document.querySelector("p.replaceName").innerHTML = days[currentDay.getDay()]
    // document.querySelector("p.replaceName").innerHTML = (greeting + " And today is " + today + ".")


    console.log(greeting + " Today is " + today + ".")




// code from
//https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
  function reverseString(str) {
        // Step 1. Use the split() method to return a new array
        const splitString = str.split(""); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]

        // Step 2. Use the reverse() method to reverse the new created array
        const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]

        // Step 3. Use the join() method to join all elements of the array into a string
        const joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"

        //Step 4. Return the reversed string
        return joinArray; // "olleh"
    }

    // document.querySelector("p.reverseLetter").innerHTML = (reverseString("balance"))
    console.log (reverseString("balance"));




// Write a program that reverses a 7-letter word of your choosing

const lastWord = "This is the solution is from Stack Overflow";

      //document.querySelector("p.lastWord").innerHTML = (lastWord.split(" ").splice(-1))

      console.log(lastWord.split(" ").splice(-1));



// Write a program that converts a string to title case

      function toTitleCase(str){
        let titleCaseString = ''
        for(let i = 0; i < str.length; i++){
          //first letter
          //letter that are preceeded by a space
          if (i === 0) {
              titleCaseString += str[i].toUpperCase()
          } else if (str[i -1] === ' '){
              titleCaseString += str[i].toUpperCase()
          } else {
              titleCaseString += str[i]
          }
          //console.log(str[i])
        }
        return titleCaseString
      }

      const message = 'we are learning a for loop today!'
      console.log(toTitleCase(message))
