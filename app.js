const Node = (data = null, next=null) =>{
    return {
        value: data ,
        nextNode: next
    }
}

const LinkedList = () => {
    let head = null
    let count = 0
    //Method to add a Node(value) to the end of the list and update the previous node's nextNode property
    const append = (value) => {
        let newNode = Node(value)
        //if no head exists yet, set the new node as the head
        if(head === null){
            return head = newNode;
        } else {
            let tmp = head;
            while (tmp.nextNode !== null){
                tmp = tmp.nextNode;
            }
            tmp.nextNode = newNode
        }
        //increment count to keep track of how many in the list
        count++
    }
    //update the head to be the newNode by adding to the beginning of the list with nextNode set to the previous head
    const prepend = (value)=> {
        let newNode = Node(value, head)
        head = newNode
        count++
    }

    const size = () => {
        return count
    }

    const findHead = () => {
        return head
    }
    //start from the head node and traverse to the last node with a null set for it's nextNode property
    const tail = () => {
        if(!head) return null;
        let tmp = head;
            while (tmp.nextNode !== null){
                tmp = tmp.nextNode;
            }
            return tmp;
    }
    //adds all nodes in the list to an array up to the index and returns the node at that last index
    const at = (index) => {
        let tmp = head
        let listArray= []
        for(let i = 0; i <= index; i++){
            if(tmp){
                listArray[i]=tmp
                tmp = tmp.nextNode 
            } else {
                return console.error(`Index out of range. Max index is ${count}`)
            }
        }
        return listArray[index];
    }
    //
    const pop = () => {
        if(!head) return null;
        if(head.nextNode === null){
            head = null
        }
        if(size()>0){
            at(size()-1).nextNode = null
        }
        else {
            head = null
        }
        count--;

    }
    //traverse the whole list and print out each node value as a string
    const toString = () => {
        if(!head) return null;
        let str = '';
        let tmp = head;
        while(tmp){
            if(!tmp.nextNode){
                str += `( ${tmp.value} ) -> null`
            } else {
                str += `( ${tmp.value} ) -> `
            }
            tmp = tmp.nextNode;
        }
        return str
    }
    return {
        append,
        prepend,
        size,
        findHead,
        tail,
        at,
        pop,
        //contains,
        //find,
        toString

    }
}

//instances
let node = Node()
let list = LinkedList()
list.append("second")
//console.log(list)
list.prepend("not first")
list.append("last")
list.prepend("actual first")
console.log('size:'+list.size())
console.log('head:')
console.log(list.findHead())
console.log(' ')
console.log('list before pop:')
console.log(list.toString())
//console.log(list)
/* console.log(`node @ index 1: `)
console.log(list.at(4)) */
console.log('head:')
console.log(list.findHead())
list.pop()
console.log('list after pop:')
console.log(list.toString())
list.pop()
console.log('list after 2nd pop:')
console.log(list.toString())
list.pop()
console.log('list after 3rd pop:')
console.log(list.toString())
list.pop()
console.log('another pop should have no list:')
console.log(list.toString())

