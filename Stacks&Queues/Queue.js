/* To implement a queue data structure we need the following methods:

enqueue : To add elements at the end of the queue.
dequeue: To remove an element from the front of the queue.
peek: To get the front element without removing it.
isEmpty: To check whether an element is present in the queue or not.
printQueue: To print the elements present in the queue. */
//FIFO

class myQueue{
    constructor(){
        this.items = [];
        this.front = 0;
        //this.tail = this.items.length - 1;
    }
//Add an element at the end of the queue
    enqueue(element){
        return this.items.push(element);
    }
//Remove an element from the front of the queue
    dequeue(){
        if(this.items.length === 0)
            return "Ops, the queue is empty"
       // return this.items.splice(this.front, 1);
        return this.items.shift();   
    }
    peek(){
        return this.items[this.front];
    }
    isEmpty(){
        if(this.items.length === 0)
             return "Ops, the queue is empty"
    }
    printQueue(){
        for (let i in this.items) {
            console.log(this.items[i]);
        }
       
    }
}

const queueObject = new myQueue();
queueObject.enqueue(2);
queueObject.enqueue(3);
queueObject.enqueue(4); 
queueObject.printQueue();
/* console.log(queueObject); 
console.log(queueObject.peek());
console.log(queueObject.isEmpty()); */
/*queueObject.dequeue();
queueObject.dequeue();
queueObject.dequeue(); 
console.log(queueObject);  
console.log(queueObject.peek());   */