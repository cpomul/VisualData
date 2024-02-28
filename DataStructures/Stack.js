export class Stack{
    constructor() {
        this.stack = [];
    }
    push(item){
        this.stack.push(item);
    }

    pop(){
        this.stack.pop();
    }
    displayStack(containerId){
        const container = document.getElementById(containerId);
        container.innerHTML = '';

        this.stack.forEach((item) => {
            const box = document.createElement('div');
            box.className = 'stack-item';
            box.textContent = item;
            container.append(box);
        });
    }
}