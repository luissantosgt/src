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


/* 1. size()
This method returns the number of nodes present in the linked list. */
     size(){
        let current = this.head
        let numberOfNodes = 0
        while(current){
            current = current.next
            numberOfNodes++
        }
        return numberOfNodes;
        } 

/* 2. This method empties out the list. */
clear(){
    this.head = null
}

/* 3. This method returns the last node of the linked list. */
 getLast(){
    let node = this.head
    let lastNode = 0;
    while(node){
        if(node.next === null){
            lastNode = node.data
        }
        node = node.next
     /*    if(node.next){
        console.log(node.data)
        }  */
    } 
    return lastNode
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

/* console.log(list)
console.log(list.head) 
console.log(list.head.next)  */

/*console.log(list.head.next.next.data) */


/* console.log(list.head.next.data) //returns 5 */

/* 1. size()
This method returns the number of nodes present in the linked list. */


console.log(list.size())
console.log(list)
/* console.log(list.getLast()) */
console.log(list.getLast())