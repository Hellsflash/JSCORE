class SortedList {
    constructor() {
        this.collection = [];
        this.size = 0;
    }

    add(element) {
        this.collection.push(element);
        this.sort();
        this.size++;
    }

    remove(index) {
        if (index >= 0 && this.collection.length > index) {
            this.collection.splice(index, 1);
            this.sort();
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && this.collection.length > index) {
            return this.collection[index];
        }
    }

    sort() {
        this.collection = this.collection.sort((a, b) => a - b);
    }
}


let sl = new SortedList();
let sl2 = new SortedList();
let sl3 = new SortedList();
sl.add(sl2);
sl.add(sl3);
sl.remove(0);
console.log(sl.get(0));;
console.log(sl.size);