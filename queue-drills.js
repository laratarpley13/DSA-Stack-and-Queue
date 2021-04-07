class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = {
            value: data,
            next: null
        }

        if(this.first === null) {
            this.first = node;
        }
        if(this.last) {
            this.last.next = node;
        }

        this.last = node;
    }

    dequeue() {
        if(this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        if(node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}

const queueList = new Queue();

queueList.enqueue(1);
console.log(queueList.first);
queueList.enqueue(2);
console.log(queueList.first);
queueList.enqueue(3);
console.log(queueList.first);
queueList.dequeue();
console.log(queueList.first);