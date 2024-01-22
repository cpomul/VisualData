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
}
