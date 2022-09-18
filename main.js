//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(names, string){
    for (let i of names) {
      if (string.includes(i)){
        console.log(`Matched ${names[i]}`)
      } else {
        console.log('No matches.')
      }
    }
  }
console.log(findWords(dog_names, dog_string))


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i,0,"even index")
        }
    }
    console.log(arr)
}

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//CODEWARS

//Problem 1
//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name){
    return `Hello, ${name} how are you doing today?`
  }

//Problem 2
//Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    sum = 0
    for(let i = 0; i < numbers.length; i++){
      sum += numbers[i] ** 2
    }
    return sum
  }

//Problem 3
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
    if (l==w){
      return l * w
    } else{
      return l+l+w+w
    }
  };

//Problem4
//Complete the solution so that it reverses the string passed into it.

function solution(str){
    return str.split("").reverse().join("");  
  }