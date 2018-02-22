
//Add three more fruits to myArray, and then print the array to the console.

const myArray = ['Apple', 'Banana', 'Cherry', 'Date', 'Eggfruit', 'Fig', 'Grape']

//1.Use Function to push new data to an array


  myArray.push('Pineapple', 'Mango', 'Cantalope')

document.querySelector("p.addFruit").innerHTML = myArray;
console.log(myArray);



//2.Print the third item of the array
document.querySelector("p.thirdItem").innerHTML = myArray[2];
console.log(myArray[2]);
//Print the index of the item in the array

// Ask Sarah

// const index = myArray.indexOf('Eggfruit');
// document.querySelector("p.indexOfItem").innerHTML = myArray['Eggfruit'];
// console.log(myArray['Eggfruit']);


//3.Remove the last item of the array
myArray.pop()
document.querySelector("p.removeLast").innerHTML = myArray;
console.log(myArray);

//4. Remove the first item of the array
myArray.shift()
document.querySelector("p.removeFirst").innerHTML = myArray;
console.log(myArray);

//5. Create a string variable which contains each item in the array, separated by a plus sign (+

//document.querySelector("p.removeFirst").innerHTML = myArray;
//console.log('row + ' + myArray[0,8]);




//6. Reverse the array
myArray.reverse();

document.querySelector("p.reverseArray").innerHTML = myArray;
console.log(myArray);

//7. Set the second item in the array to store the word Durian
myArray[1] = 'Durian'

document.querySelector("p.changeElement").innerHTML = myArray;
console.log(myArray);

//8. Print the length of the array
myArray.length

document.querySelector("p.arrayLength").innerHTML = myArray.length;
console.log(myArray.length);
