/* The resulting Stack class can be used to create stack data structures in JavaScript.
A stack is a collection of elements with two main operations:
Push: Adds an element to the top of the stack.
Pop: Removes the top element from the stack. */
//LIFO


class Stack {
    // special method called when an instance of the class is created, inside the constructor ini
    // initializes a empty array called items
    constructor(){
        this.items = [];
    }
    //Add a number to the stack 
     push(element){
        this.items.push(element);

    } 
    //Take out the top element of the stack
    pop(){
        if(this.items.length === 0)
            return "Ops the stack is empty!"
        return this.items.pop();
    }
    // See what the top number is
    peek(){
        return this.items[this.items.length - 1];
    }
    // Check if the stack is empty
    isEmpty(){
        return this.items.length === 0;
    }
    // Find out how many items are in the stack
    howMany(){
        return this.items.length;
    }
}
    /* 
For example, in the case of the myStack object, declaring it as const 
ensures that you won’t accidentally reassign it to a different stack instance. However, 
you can still push or pop items from the stack using its methods. */
const myStack = new Stack();
myStack.push(15);
myStack.push(16);
myStack.push(17);
//console.log(myStack.pop());
console.log(myStack);
console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack.howMany());
myStack.pop();
console.log(myStack);