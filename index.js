
import {ArrayCreator} from "./ArrayCreator.js";
const pushUnordered = document.getElementById('pushUnordered');
const pushOrdered = document.getElementById('pushOrdered');


const arrayCreator = new ArrayCreator();

pushOrdered.addEventListener('click', () => {
    arrayCreator.generateArrayOrdered(100);
    arrayCreator.renderArray("array-container");
})
pushUnordered.addEventListener('click' , () => {
    arrayCreator.generateArrayUnordered(100);
    arrayCreator.renderArray("array-container");
})

/*
arrayCreator.renderArray("array-container");*/
