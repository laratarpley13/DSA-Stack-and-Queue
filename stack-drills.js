class Stack {
    constructor() {
        this.top = null
    }

    push(data) {
        if(this.top === null) {
            this.top = {
                value: data,
                next: null
            }
            return this.top;
        }
        else {
            const node = {
                value: data,
                next: this.top
            }
            this.top = node;
        }
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

const stackList = new Stack();

stackList.push(1);
console.log(stackList.top);
stackList.push(2);
console.log(stackList.top);
stackList.push(3);
console.log(stackList.top);
stackList.pop();
console.log(stackList.top);