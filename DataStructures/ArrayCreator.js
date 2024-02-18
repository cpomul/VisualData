import anime from '/node_modules/animejs/lib/anime.es.js';

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
    generateArrayUnordered(size){
        this.array = [];
        for(let i = 1; i <= size; i++){
            this.array.push(Math.floor(Math.random() * 100 ) + 1);
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
            anime({
                targets: '.array-item',
                translateY: 180,
                opacity: [0,2],
                easing: "easeOutExpo",
                delay: anime.stagger(25),
            })
        });
    }
}