export class HashTable{
    constructor() {
        this.table = [];
    }

    hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, value){
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }

    get(key){
        const index = this.hash(key);

        if(!this.table[index]){
            return undefined;
        }
        for(const [keyPairKey, keyPairValue] of this.table[index]){
            if(keyPairKey === key){
                return keyPairValue;
            }
        }
    }
}