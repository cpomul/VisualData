
import {ArrayCreator} from "./ArrayCreator.js";
import {ArraySearch} from "./algos/ArraySearch.js";
import anime from "./anime/anime.es.js";

const pushUnordered = document.getElementById('pushUnordered');
const pushOrdered = document.getElementById('pushOrdered');
const searchFormLinear = document.getElementById('searchFormLinear');
const searchFormBinary = document.getElementById('searchFormBinary')
const targetInput = document.getElementById('targetInput');

const arrayCreator = new ArrayCreator();
const arraySearch = new ArraySearch();
searchFormLinear.addEventListener('submit',  async (event) => {
    event.preventDefault();
    let targetValue = parseInt(targetInput.value, 10);
    clearStyles(arrayCreator.array);
    await arraySearch.linearSearch(arrayCreator.array, targetValue);
})
searchFormBinary.addEventListener('submit', (event) => {
    event.preventDefault();
    let targetValue = parseInt(targetInput.value, 10);
    clearStyles(arrayCreator.array);
    arraySearch.binarySearch(arrayCreator.array, targetValue);
})

pushOrdered.addEventListener(   'click', () => {
    arrayCreator.generateArrayOrdered(50);
    arrayCreator.renderArray("array-container");

});
pushUnordered.addEventListener('click' , () => {
    arrayCreator.generateArrayUnordered(50);
    arrayCreator.renderArray("array-container");
});

function clearStyles(array) {
    const container = document.getElementById("array-container");

    for (let i = 0; i < array.length; i++) {
        const box = container.children[i];
        box.style.color = '';
    }
}

