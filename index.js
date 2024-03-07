
import {ArrayCreator} from "./DataStructures/ArrayCreator.js";
import {ArraySearch} from "./Algorithms/ArraySearch.js";
import {LinkedList} from "./DataStructures/LinkedList.js";
import {FormGenerator} from "./DOMRenderer.js";
import {Queue} from "./DataStructures/Queue.js"
import {Stack} from "./DataStructures/Stack.js";
import {HashTable} from "./DataStructures/HashTable.js";

const hashtable = new HashTable();
hashtable.set("age", 20);
console.log(hashtable.get("age"));



const orderedArray = document.getElementById("orderedArray");
const linkedListSelector = document.getElementById("linkedList");
const queueSelector = document.getElementById("queue");
const stackSelector = document.getElementById('stack');

const listContainer = document.getElementById('list-container');
const arrayContainer = document.getElementById("array-container");
const navContainer = document.getElementById("navContainer");

const arrayCreator = new ArrayCreator();
const arraySearch = new ArraySearch();
const linkedList = new LinkedList();
const queue = new Queue();
const stack = new Stack();

const dequeueButton = document.createElement('Button');
dequeueButton.className = 'dequeueButton';
dequeueButton.textContent= "Dequeue";
const searchLinearForm = new FormGenerator('searchLinear', 'Target', 'targetLinear', 'searchButtonLinear', 'SearchLinear');
const searchLinearFormElement = searchLinearForm.createFormSingleInput();
const searchBinaryForm = new FormGenerator('searchBinary', 'Target', 'targetBinary', 'searchButtonBinary', 'SearchBinary');
const searchBinaryFormElement = searchBinaryForm.createFormSingleInput();
const appendNodeValueForm = new FormGenerator('appendNodeValue', 'Append Node', 'targetNodeValue', 'appendValueButton', 'Add');
const appendNodeValueFormElement = appendNodeValueForm.createFormSingleInput();

const moveNodeValueForm = new FormGenerator(
    'movePositionForm',
    'Node Value',
    'nodeValueInput',
    'movePositionButton',
    'Move position',
    'Specify position',
    'targetPositionInputId'
);
const moveNodeValueFormElement = moveNodeValueForm.createFormDoubleInput();

const enqueueValueForm = new FormGenerator('enqueueValueForm', 'Enqueue Value', 'enqueueValueInput', 'enqueueButton', 'Enqueue');
const enqueueValueFormElement = enqueueValueForm.createFormSingleInput();

const pushValueForm = new FormGenerator('pushValueForm', 'Push Value', 'pushValueInput', 'pushValueButton', 'Add');
const pushValueFormElement = pushValueForm.createFormSingleInput();
const popStackButton = document.createElement('button');
popStackButton.className = 'popStackButton';
popStackButton.textContent = 'Pop';

orderedArray.addEventListener('click', (event) => {
    navContainer.innerHTML = '';
    listContainer.innerHTML = '';
    arrayCreator.generateArrayOrdered(50);
    arrayCreator.renderArray("array-container");
    navContainer.append(searchLinearFormElement, searchBinaryFormElement);
});
linkedListSelector.addEventListener('click', (event) =>{
    navContainer.innerHTML = '';
    arrayContainer.innerHTML = '';
    linkedList.displayLinkedList('list-container');
    navContainer.append(appendNodeValueFormElement, moveNodeValueFormElement);
});
queueSelector.addEventListener('click', (event) => {
    navContainer.innerHTML = '';
    listContainer.innerHTML = '';
    navContainer.append(enqueueValueFormElement, dequeueButton);
});
stackSelector.addEventListener('click', (event) => {
    navContainer.innerHTML = '';
    listContainer.innerHTML = '';
    navContainer.append(pushValueFormElement, popStackButton);
})

////////////////////////////////////////////////////////
searchLinearFormElement.addEventListener('submit',  async (event) => {
    event.preventDefault();
    const targetInputLinear = document.getElementById('targetLinear');
    let targetValue = parseInt(targetInputLinear.value, 10);
    //clearStyles(arrayCreator.array);
    await arraySearch.linearSearch(arrayCreator.array, targetValue);
    searchLinearFormElement.reset();
})
searchBinaryFormElement.addEventListener('submit', async (event) => {
    event.preventDefault();
    const targetInputBinary = document.getElementById('targetBinary');
    let targetValue = parseInt(targetInputBinary.value, 10);
    //clearStyles(arrayCreator.array);
    await arraySearch.binarySearch(arrayCreator.array, targetValue);
    searchLinearFormElement.reset();
})
appendNodeValueFormElement.addEventListener( 'submit', (event) => {
    event.preventDefault();
    const targetNodeValue = document.getElementById('targetNodeValue')
    let targetValue = parseInt(targetNodeValue.value, 10);
    linkedList.append(targetValue);
    linkedList.displayLinkedList('list-container');
    appendNodeValueFormElement.reset();
})
moveNodeValueFormElement.addEventListener('submit',(event) => {
    event.preventDefault();

    const nodeValueInput = document.getElementById('nodeValueInput');
    const targetPositionInput = document.getElementById('targetPositionInputId');
    const nodeValue = parseInt(nodeValueInput.value, 10);
    const targetPosition = parseInt(targetPositionInput.value, 10);

    linkedList.moveNode(nodeValue, targetPosition);
    linkedList.displayLinkedList('list-container');
    moveNodeValueFormElement.reset();
});

enqueueValueFormElement.addEventListener('submit', (event) =>{
    event.preventDefault();

    const enqueueValueInput = document.getElementById('enqueueValueInput');
    const enqueueValue = parseInt(enqueueValueInput.value, 10);

    queue.enqueue(enqueueValue);
    queue.displayQueue("queue-container");
    enqueueValueFormElement.reset();
});

dequeueButton.addEventListener('click', () =>{
    queue.dequeue();
    queue.displayQueue('queue-container');
})

pushValueFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const pushValueInput = document.getElementById('pushValueInput');
    const pushValue = parseInt(pushValueInput.value, 10);

    stack.push(pushValue);
    stack.displayStack('stack-container');
    pushValueFormElement.reset();
});
popStackButton.addEventListener('click', () => {
    stack.pop();
    stack.displayStack('stack-container');
});


