async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export class ArraySearch {
    async linearSearch(array, target) {
        const container = document.getElementById("array-container");
        for (let i = 0; i < array.length; i++) {
            await sleep(100);
            const currentElement = array[i];
            const box = container.children[i];
            box.style.color = 'red';
            if (currentElement === target) {
                box.style.color = 'green';
                console.log(target + " found at index " + i);
                break;
            }
        }
        console.log(target + " not found");
    }

    async binarySearch(array, target) {
        const container = document.getElementById("array-container");
        let start = 0;
        let end = array.length - 1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            const box = container.children[mid];
            box.style.backgroundColor = 'blue';
            await sleep(1000);
            if (array[mid] === target) {
                box.style.backgroundColor = 'green';
                console.log(target + " found at index " + mid);
                return mid;
            } else if (target > array[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        console.log(target + " not found");
        return -1;
    }

}
