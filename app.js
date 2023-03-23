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
            count = 0
        } else if(size()>0){
            at(size()-1).nextNode = null
            count--
        }
    }
    //search list for a node containing a value, if its there return true, else return false
    const contains = (val) =>{
        let current = head
        let exists = false  
        while(current.nextNode){
            if(current.value == val){
                return exists = true
            }
            current = current.nextNode
        }
        return exists
    }
    //
    const find = (val) => {
        let tmp = head;
        let valArray = [];
        while (tmp){
            valArray.push(tmp.value)
            tmp = tmp.nextNode
        }
        if(valArray.indexOf(val) < 0){
            return 'not found'
        } else return valArray.indexOf(val)
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

    const insertAt = (val,index) =>{
        let current = head
        let prev = null
        for(let i=0; i < index; i++){
            prev = current
            current = current.nextNode
        }
        if (!prev) head = Node(val,current)
        else prev.nextNode = Node(val,current)
        count++
    }
    const removeAt = (index) =>{
        let current = head
        let prev = null
        for(let i=0; i < index; i++){
            prev = current
            current = current.nextNode
        }
        if (!prev){
            head = head.nextNode
        }else{
            prev.nextNode = current.nextNode
        }
        count--
    }
    return {
        append,
        prepend,
        size,
        findHead,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
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
/* list.pop()
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
console.log(list.toString()) */
list.prepend("new actual first")
console.log('size:'+list.size())
console.log('head:')
console.log(list.findHead())
console.log(' ')

//console.log(list.toString())
console.log('count:' + list.size())
console.log(list.size())
console.log(list.toString())
/* console.log(list.contains("second"))
console.log(list.find('new actual first'))
 */
console.log('inserting new node: "hi" at index 0')
list.insertAt('hi', 0)
console.log('count:' + list.size())
console.log(list.size())
console.log(list.toString())
/* list.removeAt(0)
console.log('count:' + list.size())
console.log(list.size())
console.log(list.toString()) */
