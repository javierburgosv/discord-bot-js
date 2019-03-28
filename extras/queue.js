class Queue {

    constructor() {
        this.queue = [];
    }

    add(element){
        this.queue.push(element)
        this.print()
    }

    getFirst(){
        var first =  this.queue[0];
        return first;
    }

    removeFirst(){
        this.queue.shift();
        this.print()
    }

    size(){
        return this.queue.length;
    }

    clear(){
        this.queue = []
    }

    empty(){
        return this.queue[0] == null
    }

    print(){
        console.log(this.queue);
    }
};

module.exports = Queue;