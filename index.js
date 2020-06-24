'use strict';

// YOU KNOW WHAT TO DO //

 /**
  * identity: created to simply return value that is passed through it, without changing value in any way. 
  * 
  * @param: any value
  * 
  * @return {Array}: returns unchanged value
  * 
  */
 function identity(value) {
     return value;
 }
 module.exports.identity = identity;
 
  /**
  * typeOf: Designed to take any value and return the name of its type, in string form. 
  * 
  * @param : any value
  * 
  * @return {Array}: the type of value as a string.  
  * 
  */
 function typeOf(value) {
     if (typeof value === "string") {
        return "string";
    } else if (typeof value === "undefined") {
        return "undefined";
    } else if (typeof value === "number") {
        return "number";
    } else if (typeof value === "boolean") {
        return "boolean";
    } else if (typeof value === "function") {
        return "function";
    } else if (value === null) {
        return "null";
    } else if (Array.isArray(value)) {
        return "array";
    } else {
        return "object";
    }
};
 module.exports.typeOf = typeOf;
 
  /**
  * typeOf: designed to take any value and return a string of the value's type. 
  * 
  * @param: any value
  * 
  * @return: string of value's type
  * 
  */
function typeOf (value) {
    // check if value is string
    if (typeof value === "string") {
        return "string";
     // check if value is undefined
    } else if (typeof value === "undefined") {
        return "undefined";
      // check if value is number
    } else if (typeof value === "number") {
        return "number";
      // check if value is boolean
    } else if (typeof value === "boolean") {
        return "boolean";
      // check if value is function
    } else if (typeof value === "function") {
        return "function";
      // check if value is null
    } else if (value === null) {
        return "null";
      // check if value is array
    } else if (Array.isArray(value)) {
        return "array";
    } else {
          // else, return object
        return "object";
    }
};

  /**
  * first: created to take an array and a number and return the first <number> amount of elements in array. 
  * If array is not an array or numnber is negative, returns an empty array. Otherwise, if number is not given or 
  * not a number, returns first element of array. 
  * 
  * @param {Array} collection: array to return values from
  * @param number: number of elements to return from array
  * 
  * @return array elements: returns first <number> amount of elements of array
  * 
  */
    function first (array, number) {
    // if array is not an array or number is less than 0 
    if (Array.isArray(array) === false || number < 0){
        // return an empty array
        return [];
    // else if number is undefined or type of number is not number
    } else if (number == undefined || typeof number !== 'number'){
        // return the first element of array
        return array[0];
    // else
    } else {
        // return the first <number> elements of array 
        return array.slice(0, number);
    }
}
module.exports.first = first;

 
  /**
  * last: created to take an array and a number and return the last <number> amount of elements in array. 
  * If array is not an array or numnber is negative, returns an empty array. If number is not given or 
  * not a number, returns last element of array. If number is given but is larger than array, returns the entire array.
  * 
  * @param {Array} collection: array to return values from
  * @param number: number of elements to return from array
  * 
  * @return array elements: returns last <number> amount of elements of array
  * 
  */
  function last (array, number){
    if (!Array.isArray(array) || number < 0){
        return [];
    } else if (number == undefined || typeof number !== 'number'){
        return array[array.length-1];
    } else if (number > array.length){
        return array;
    } else {
        return array.slice(array.length-number, array.length);
    }
}
module.exports.last = last;
 
  /**
  * indexOf: Designed to take an array and a value, loop through the array, find the first instance of that value, 
  * and return the value's index in the array. 
  * 
  * @param {Array}:  Array to loop through 
  * @param {Value} value: value to search for in array
  * 
  * @return {index}: index of value in array
  * 
  */
function indexOf (array, value){
    // loops through array 
    for (var i = 0; i < array.length; i++){
        // if element of array is equal to value
        if (array[i] === value){
            // return index
            return i;
        } 
        // if value is not in array, return -1
        } return -1;
}
 
 module.exports.indexOf = indexOf;
 
  /**
  * contains: Designed to take an array and a value, and return true if the array contains the value, and false otherwise. 
  * 
  * @param {Array} collection: Array to search for value in 
  * @param {value} value: value to search for in array
  * 
  * @return {boolean}: true if array contains value, false if otherwise 
  * 
  */
function contains (array, value) {
//  return true if array contains value, false otherwise
return (array.includes(value)) ? true: false;
};
 module.exports.contains = contains;
 

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
 
  /**
  * unique: Designed to 
  * 
  * @param {Array or Object} collection:  
  * @param {Function} test:  
  * 
  * @return {Array}:  
  * 
  */
function unique (array) {
// create empty array to pass values into 
let finalArr = [];
// loop through array
    for (var i = 0; i < array.length; i++) {
        // if element of array is equal to another element of array
        if (array.indexOf(array[i]) === i)
        // push element to final array
        finalArr.push(array[i]);
    }
    // return final array
    return finalArr;
};

 module.exports.unique = unique;
 
  /**
  * filter: Designed to 
  * 
  * @param {Array or Object} collection:  
  * @param {Function} test:  
  * 
  * @return {Array}:  
  * 
  */
function filter (array, func) {
// create final array to store values in 
let finalArr = [];
// loop through array
for (var i = 0; i < array.length; i++) {
    // after the element is passed through the function, if the value produced is equal to true
    if (func(array[i], i, array) === true) {
        // push value into final array 
        finalArr.push(array[i]);
    }
    // return final array
}   return finalArr;
};

 module.exports.filter = filter;
 
  /**
  * reject: created to take an array and a function, pass each element of the array through the function, 
  * and return a new array of all these elements of the array that returned values of false after being passed through function
  * 
  * @param {Array} collection: array to loop through  
  * @param {Function} test: function to be executed on each value of array
  * 
  * @return {Array}: new array of array elements that returned false after being passed through function 
  * 
  */
function reject (array, func) {
// create empty array to push final values into 
let finalArr = [];
// loop through array
for (var i = 0; i < array.length; i++) {
    // if value of element being passed through function equals false
    if (func(array[i], i, array) === false) {
        // push element to final array
        finalArr.push(array[i]);
    }
    // return final array
}   return finalArr;
};
 module.exports.reject = reject;
 
  /**
  * partition: created to take an array and a function, pass each element of the array through the function, 
  * and return a new array of all the elements of the array that returned values of true after being passed through function, 
  * and another array of all  the elements of the array that returned values of false after being passed through function
  * 
  * @param {Array} collection: array to loop through  
  * @param {Function} test: function to be executed on each value of array
  * 
  * @return {Array}: a new array of array elements that returned true after being passed through function 
  * @return {Array}: a new array of array elements that returned false after being passed through function 
  * 
  */
 function partition (array, func) {
    // return array passed through .filter, and array passed through .reject
    return [filter(array, func), reject(array, func)];
};

 module.exports.partition = partition;
 
  /**
  * map: Designed to 
  * 
  * @param {Array or Object} collection: collection to pass function through
  * @param {Function} test:  function to pass theough elements of collection
  * 
  * @return {Array}:  array of new values after function passed through collection
  * 
  */
 function map (collection, func) {
    // create final array to pass values into
    let finalArr = [];
    // if collection is an array
    if (Array.isArray(collection)) {
    // loop through array
    for (var i = 0; i < collection.length; i++) {
        // pass function through every element of array and store resulting values into final array
        finalArr.push(func(collection[i], i, collection));
    }  // else
    } else {
        // loop through object
        for (var key in collection) {
            // pass function through every element of array and store resulting values into final array
            finalArr.push(func(collection[key], key, collection));
        }
        // return final array
    }   return finalArr;
};
 
 module.exports.map = map;
 
  /**
  * pluck: Designed to take an array and a property, and return an array containing the value of <property> for every element in <array>
  * 
  * @param {Array or Object} collection:  array of elements
  * @param property : property to look for in each element of array
  * 
  * @return {Array}:  an array containing the value of <property> for every element in <array>
  * 
  */
 function pluck (array, property) {
// create final array and fill it with values of array passed through .map
let final = array.map(function(element) {
            // return property of each element
            return element[property];
    });  
    // return final array 
    return final;
};
 module.exports.pluck = pluck;
 
  /**
  * every: Designed to take a collection and a function, pass the collection through the function, and return true if every element of the function
  * returns true after being passed through function, else return false
  * 
  * @param {Array or Object} collection: array or object to pass function through
  * @param {Function} test:  function to pass array or object through
  * 
  * @return {boolean}:  true if every element of collection returns true after being passed through function, false if otherwise
  * 
  */

function every (collection, func) {
// create final variable to return if true or false; 
var final = true;
// if function is not undefined
if (func !== undefined) {
    // pass collection through .each function, passing arguments of element, index, and collection
    each(collection, function(element, index, collection) {
        // after passing through function, if the return value is false
        if(func(element, index, collection) === false) {
            // set final = false
            final = false;
}
});
} 
// else if function is not undefined 
else {
    // pass collection through .each function, 
    each(collection, function(element) {
        // if return value is false 
        if(element === false) {
            // final = false 
            final = false;  
} 
});
// return false
} return final;
};
 module.exports.every = every;
 
 /**
  * some: Designed to take a collection and a function, pass the collection through the function, and return true if even one element of the function
  * returns true after being passed through function, else return false
  * 
  * @param {Array or Object} collection: array or object to pass function through
  * @param {Function} test:  function to pass array or object through
  * 
  * @return {boolean}:  true if at least one element of collection returns true after being passed through function, false if otherwise
  * 
  */
function some (collection, func) {
// set final to false
var final = false;
// if function is not defined
if (func !== undefined) { 
    // use each to pass function through rach element of collection 
    each(collection, function(element, index, collection) {
        // if the value returns true
        if(func(element, index, collection) === true) {
            // set final to true
            final = true;
        }   
    }); 
// else
} else {
    // look through each element of collection 
    each(collection, function(element) {
        // if value returns true
        if(element === true) {
            // set final to true
            final = true;
        }
    });
    // return final
}   return final;
};

 module.exports.some = some;
 
  /**
  * reduce: Designed to take an array, a function, and a seed. If seed is given, function is passed through seed, and then function is passed through 
  * that previous result of seed passing through function.If no seed is given, function is passed through first element of collection initially, and then 
  * through the result of the first element. This repeats until the last iteration, and then the final value is returned. 
  * 
  * @param {Array or Object} collection:  array or object to pass function through
  * @param {Function} test:  function to pass through each element of function 
  * 
  * @return {value}:  value of final pass through function
  * 
  */
  
  
function reduce (arr, func, seed) {
// if seed is undefined
 if (seed === undefined){
     // return first element of array
     var total = arr[0];
     // loop through array
     for (var i = 1; i < arr.length; i++){
         // set total to value of function being passed through element of collection
         total = func(total, arr[i], i);
     }
 // else if seed is given
 } else {
     // set total to seed
     total = seed;
// loop through array
 for (var i = 0; i < arr.length; i++){
     // set total to value of function being passed through element of collection
     total = func(total, arr[i], i);
 } // return total
} return total;
}
 module.exports.reduce = reduce;
 

 /**
  * extend: Designed to take an unlimeted amount of objects, but at least two. The properties of <object 2> are copied to <object 1>.
  * If more objects are passed in,  their properties are copied to <object 1> as well, in the order they are passed in. The final <object 1>
  * is then returned. 
  * 
  * @param {Object} collection: object1 to to recieve the copied properties of object 1
  * @param {Object} collection: object2 to copy properties into object1
  * @param {Object} collection: optional objectN(s) to copy properties into object1
  * 
  * 
  * @return {object}:  final object1 of copied properties of object2 and optional objectN(s). 
  * 
  */
  function extend (obj1, obj2, objN) {
    // loop through object
    for (var key in obj2) {
        // set key of obj 1 equal to key of obj 2
        obj1[key] = obj2[key];
    } // loop through objN
    for (var key in objN) {
        // // set key of obj 1 equal to key of obj 2
        obj1[key] = objN[key];
    } // return obj1
    return obj1;
};
 module.exports.extend = extend;