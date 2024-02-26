import {LinkedList} from "./LinkedList.js";

export class Queue{
    constructor() {
        this.linkedList = new LinkedList();
    }

    isEmpty(){
        return !this.linkedList.head;
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.linkedList.head.value;
    }
    enqueue(value) {
        this.linkedList.append(value);
        console.log(this.linkedList)
    }
    dequeue() {
        const removedHead = this.linkedList.deleteHead();
        if (removedHead) {
            return removedHead.value;
        } else {
            return null;
        }
    }
    displayQueue(containerId){
        const container = document.getElementById(containerId);
        container.innerHTML = '';

        let current = this.linkedList.head;
        while(current){
            const queueElement = document.createElement('div');
            queueElement.className = 'queueElement';
            queueElement.textContent = current.data;
            container.append(queueElement);

            current = current.next;
        }
    }
}