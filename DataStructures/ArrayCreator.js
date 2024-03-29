

export class ArrayCreator{
    constructor(){
        this.array = [];
    }
    generateArrayOrdered(size){
        this.array = [];
        for (let i = 1; i <= size; i++) {
            this.array.push(i);
        }
        return this.array;
    }
    renderArray(containerId){
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        this.array.forEach((element) => {
            const box = document.createElement('div');
            box.className = 'array-item';
            box.textContent = element;
            container.appendChild(box);
        });
    }
}