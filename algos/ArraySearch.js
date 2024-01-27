import anime from "../anime/anime.es.js";

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export class ArraySearch {
    async linearSearch(array, target) {
        const container = document.getElementById("array-container");
        if (!array || array.length === 0) {
            alert("No data structure provided");
            console.log("No data structure selected");
            return;
        }
        for (let i = 0; i < array.length; i++) {
            await sleep(200);
            const currentElement = array[i];
            const box = container.children[i];
            box.style.backgroundColor = 'red';
            if (currentElement === target) {
                box.style.backgroundColor = 'green';
                break;
            }
        }
    }

    async binarySearch(array, target) {
        const container = document.getElementById("array-container");
        let start = 0;
        let end = array.length - 1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            const box = container.children[mid];
            //box.style.backgroundColor = 'red';
            await sleep(500);
            if (array[mid] === target) {
                box.style.backgroundColor = 'green';
                anime({
                    targets: box,
                    translateY: 134,
                    easing: 'easeInOutExpo'
                });
                return mid;
            } else if (target > array[mid]) {
                box.style.backgroundColor = 'red';
                start = mid + 1;
            } else {
                box.style.backgroundColor = 'red';
                end = mid - 1;
            }
        }
        alert("No data structure provided");
        console.log(target + " not found");
        return -1;
    }

}
