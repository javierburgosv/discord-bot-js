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
        this.queue.shift();
        return first;
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