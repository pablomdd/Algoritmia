class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get (index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop(){
        const temp = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return temp;
    }

    delete (index){
        const item = this.data[item];
        this.shiftIndex(index);

        return item;
    }

    shiftIndex(index) {
        for(let i = index; i < this.length; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    unshiftIndex(index) {
        for(let i = this.length; i > index ; i--){
            this.data[i] = this.data[i - 1]
        }
        this.length++;
    }

    shift(){
        const firstItem = this.data[0];
        this.shiftIndex(0);
        return firstItem;
    }
    unshift(item){
        this.unshiftIndex(0);
        this.data[0] = item;
    }
}

const miArray = new MyArray();

