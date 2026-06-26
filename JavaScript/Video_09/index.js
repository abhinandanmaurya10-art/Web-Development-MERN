let arr = [5,2,5,8,6,4,6,6,8,7]

console.log(arr)
console.log(arr.length)
console.log(arr[1])

// Arrays are mutable
console.log(arr[0]=66)

// We can change arrays to string using 
console.log(arr.toString())

// join method

console.log(arr.join(" and "))  // 66 and 2 and 5 and 8 and 6 and 4 and 6 and 6 and 8 and 7

// pop() method
console.log(arr.pop())  // last element 7 is pop out

// push() method

console.log(arr.push("Hello"))  // Return the lenght of array 
console.log(arr)  // (10) [66, 2, 5, 8, 6, 4, 6, 6, 8, 'Hello']

// shift() method

console.log(arr.shift())  // remove 66 first element

// Unsift menthod 
console.log(arr.unshift("Jack")) 
console.log(arr)   //(10) ['Jack', 2, 5, 8, 6, 4, 6, 6, 8, 'Hello']

// delete method

console.log(arr.delete(4))