
import {ArrayCreator} from "./DataStructures/ArrayCreator.js";
import {ArraySearch} from "./Algorithms/ArraySearch.js";

const searchFormLinear = document.getElementById('searchLinear');
const searchFormBinary = document.getElementById('searchBinary')
const targetInputBinary = document.getElementById('targetBinary');
const targetInputLinear = document.getElementById('targetLinear');

const arrayCreator = new ArrayCreator();
const arraySearch = new ArraySearch();
searchFormLinear.addEventListener('submit',  async (event) => {
    event.preventDefault();
    let targetValue = parseInt(targetInputLinear.value, 10);
    clearStyles(arrayCreator.array);
    await arraySearch.linearSearch(arrayCreator.array, targetValue);
})
searchFormBinary.addEventListener('submit', async (event) => {
    event.preventDefault();
    let targetValue = parseInt(targetInputBinary.value, 10);
    clearStyles(arrayCreator.array);
    await arraySearch.binarySearch(arrayCreator.array, targetValue);
})

let dataStructuresSelect = document.getElementById("dataStructures");

dataStructuresSelect.addEventListener("change", function() {
    let selectedValue = dataStructuresSelect.value;

    if (selectedValue === "ordered") {
        arrayCreator.generateArrayOrdered(50);
        arrayCreator.renderArray("array-container");
    } else if (selectedValue === "unordered") {
        arrayCreator.generateArrayUnordered(50);
        arrayCreator.renderArray("array-container");
    } else {
        console.log("No option selected");
    }
});

function clearStyles(array) {
    const container = document.getElementById("array-container");

    for (let i = 0; i < array.length; i++) {
        const box = container.children[i];
        box.style.color = '';
    }
}

