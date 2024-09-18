/* https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/ */

class ListNode{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head
    }
}

/* Putting it all together
Let's create a linked list with the class we just created. 
First, we create two list nodes, node1 and node2 and a pointer from node 1 to node 2. */

let node1 = new ListNode(5)
let node2 = new ListNode(6)
node1.next = node2 
/* let node3 = new ListNode(7)
node2.next = node3  */

/* Next, we'll create a Linked list with the node1. */

let list = new LinkedList(node1)

/* Let's try to access the nodes in the list we just created. */


console.log(list)
console.log(list.head) 
console.log(list.head.next) 

/*console.log(list.head.next.next.data) */


/* console.log(list.head.next.data) //returns 5 */

/* 1. size()
This method returns the number of nodes present in the linked list. */
/* https://dev.to/duxtech/5-maneras-de-iterar-un-objeto-en-javascript-jkn */

function size(){
    let current = list.head;
    let numberofNodes = 0;
    while(current !== null){
        console.log(current)
        current = current.next; 
        numberofNodes++
    }
  console.log(numberofNodes);
} 

size() 