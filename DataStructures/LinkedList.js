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
    displayLinkedList(){
        const container = document.getElementById('list-container');
        container.innerHTML = '';

        let current = this.head;
        while(current){
            const nodeDiv = document.createElement('div');
            const nodeDivNext = document.createElement('div');
            const nodeArrow = document.createElement('span');
            nodeArrow.className ='material-symbols-outlined';
            nodeArrow.textContent = 'arrow_right_alt';
            nodeDivNext.appendChild(nodeArrow);
            nodeDivNext.className = 'nodeNext';
            nodeDiv.textContent = current.data;
            nodeDiv.className = 'listNode';
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

            current = current.next;
        }
    }
}
