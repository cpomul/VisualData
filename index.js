/*
function linearSearch(array, num) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            return i;
        }
    }
    return -1;
}
const numbers = [2, 4, 67, 8, 44, 6, 12];
console.log(linearSearch(numbers, 6));*/
import {ArrayCreator} from "./ArrayCreator.js";

const arrayCreator = new ArrayCreator();
console.log(arrayCreator.generateArray(5));
arrayCreator.renderArray("array-container");