
import {ArrayCreator} from "./ArrayCreator.js";
import {ArraySearch} from "./algos/ArraySearch.js";

const pushUnordered = document.getElementById('pushUnordered');
const pushOrdered = document.getElementById('pushOrdered');
const searchForm = document.getElementById('searchForm');
const targetInput = document.getElementById('targetInput');

const arrayCreator = new ArrayCreator();
const arraySearch = new ArraySearch();
searchForm.addEventListener('submit',  async (event) => {
    event.preventDefault();
    let targetValue = parseInt(targetInput.value, 10);
    clearStyles(arrayCreator.array);
    await arraySearch.linearSearch(arrayCreator.array, targetValue);
    //await linearSearch(arrayCreator.array, targetValue);
})

pushOrdered.addEventListener(   'click', () => {
    arrayCreator.generateArrayOrdered(100);
    arrayCreator.renderArray("array-container");
});
pushUnordered.addEventListener('click' , () => {
    arrayCreator.generateArrayUnordered(100);
    arrayCreator.renderArray("array-container");
});
function clearStyles(array) {
    const container = document.getElementById("array-container");

    for (let i = 0; i < array.length; i++) {
        const box = container.children[i];
        box.style.color = ''; // Clear the previous color style
    }
}

