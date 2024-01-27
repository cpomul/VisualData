
import {ArrayCreator} from "./ArrayCreator.js";
import {ArraySearch} from "./algos/ArraySearch.js";

const dataStructures = document.getElementById('dataStructures');
const pushUnordered = document.getElementById('unordered');
const pushOrdered = document.getElementById('ordered');
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

/*pushOrdered.addEventListener(   'click', () => {
    arrayCreator.generateArrayOrdered(32);
    arrayCreator.renderArray("array-container");

});
pushUnordered.addEventListener('click' , () => {
    arrayCreator.generateArrayUnordered(32);
    arrayCreator.renderArray("array-container");
});*/
let dataStructuresSelect = document.getElementById("dataStructures");

dataStructuresSelect.addEventListener("change", function() {
    let selectedValue = dataStructuresSelect.value;

    if (selectedValue === "ordered") {
        arrayCreator.generateArrayOrdered(32);
        arrayCreator.renderArray("array-container");
    } else if (selectedValue === "unordered") {
        arrayCreator.generateArrayUnordered(32);
        arrayCreator.renderArray("array-container");
    } else {
        // Handle the case where no option is selected
        console.log("No option selected");
    }
});

function clearStyles(array) {
    const container = document.getElementById("array-container");

    for (let i = 0; i < array.length; i++) {
        const box = container.children[i];
        box.style.color = '';
        //box.style.backgroundColor = 'cornflowerblue';
    }
}

