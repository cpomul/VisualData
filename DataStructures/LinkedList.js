

export class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export class LinkedList{
    constructor(head = null) {
        this.head = head;
    }
    append(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
    deleteHead() {
        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
        }

        return deletedHead;
    }
    displayLinkedList(containerId){
        const container = document.getElementById(containerId);
        container.innerHTML = '';

        let current = this.head;
        let count = 0;
        while(current){
            const nodeDiv = document.createElement('div');
            const nodeDivNext = document.createElement('div');
            const nodeArrow = document.createElement('span');
            const nodeCount = document.createElement('p');
            nodeArrow.className ='material-symbols-outlined';
            nodeArrow.textContent = 'arrow_right_alt';
            nodeDivNext.appendChild(nodeArrow);
            nodeDivNext.className = 'nodeNext';
            nodeDiv.textContent = current.data;
            nodeDiv.className = 'listNode';

            nodeCount.className = 'nodeCount';
            nodeCount.textContent = `pos${count}`
            nodeDiv.appendChild(nodeCount);
            count++;

            if(current === this.head){
                const headPara = document.createElement('p');
                headPara.className ='head-paragraph';
                headPara.textContent = 'head';
                nodeDiv.appendChild(headPara);
            }
            if (!current.next) {
                const nullPara = document.createElement('p');
                nullPara.className ='null-paragraph';
                nullPara.textContent = 'null';
                nodeArrow.appendChild(nullPara);
            }
            container.append(nodeDiv, nodeDivNext);

            anime({
                targets: '#list-container',
                opacity: [0,2],
                easing: "easeOutExpo",
            })
            current = current.next;
        }
    }
    moveNode(nodeValue, desiredLocation) {
        let current = this.head;
        let previous = null;

        // find the node to move
        while (current && current.data !== nodeValue) {
            previous = current;
            current = current.next;
        }

        if (!current) {
            return; // not found
        }

        const targetNode = current;

        if (desiredLocation === 0) {
            if (previous) {
                previous.next = targetNode.next;
            } else {
                this.head = targetNode.next;
            }
            targetNode.next = this.head;
            this.head = targetNode;
        }
        else {
            if (previous) {
                previous.next = targetNode.next;
            } else {
                this.head = targetNode.next;
            }

            let count = 1;
            current = this.head;
            while (current && count < desiredLocation) {
                previous = current;
                current = current.next;
                count++;
            }

            if (current) {
                const temp = current.next;
                current.next = targetNode;
                targetNode.next = temp;
            } else {
                targetNode.next = null;
                this.append(targetNode.data);
            }
        }

        this.displayLinkedList('list-container');
    }
}
