import Node from "./Node.js";

function LinkedList() {
    let headNode = Node();
    let tailNode = headNode;
    let sz = 0;

    function append(value) {
        if (sz === 0) {
            headNode.value = value;
        } else {
            let newNode = Node();
            newNode.value = value;

            tailNode.nextNode = newNode;
            tailNode = newNode;
        }

        sz++;
    }

    function prepend(value) {
        if (sz === 0) {
            headNode.value = value;
        } else {
            let newNode = Node();
            newNode.value = value;

            newNode.nextNode = headNode;
            headNode = newNode;
        }

        sz++;
    }

    function size() {
        return sz;
    }

    function head() {
        return headNode;
    }

    function tail() {
        return tailNode;
    }

    function at(index) {
        let idx = 0;
        let travNode = headNode;

        while (travNode) {
            if (idx === index) {
                return travNode;
            }

            idx++;
            travNode = travNode.nextNode;
        }

        return new Error("Index out of bounds!");
    }

    function pop() {
        if (sz === 1) {
            headNode.value = headNode.nextNode = null;
            tailNode = headNode;
        } else {
            let secondLastNode = headNode;

            while (secondLastNode.nextNode !== tailNode) {
                secondLastNode = secondLastNode.nextNode;
            }

            secondLastNode.nextNode = null;
            tailNode = secondLastNode;
        }

        sz--;
    }

    function contains(value) {
        let travNode = headNode;

        while (travNode) {
            if (travNode.value === value) {
                return true;
            }

            travNode = travNode.nextNode;
        }

        return false;
    }

    function find(value) {
        let idx = 0;
        let travNode = headNode;

        while (travNode) {
            if (travNode.value === value) {
                return idx;
            }

            idx++;
            travNode = travNode.nextNode;
        }

        return null;
    }

    function toString() {
        let travNode = headNode;

        while (travNode) {

            // console.log prints new line every time!!

            process.stdout.write(`( ${travNode.value} ) -> `);
            travNode = travNode.nextNode;
        }

        console.log(" null ");
    }

    function insertAt(value, index) {
        if (index < 0 || index >= sz) {
            return new Error("Index out of bounds!");
        }

        let newNode = Node();
        newNode.value = value;

        let idx = 0;
        let travNode = headNode;
        let prvNode = null;

        while (travNode) {
            if (idx === index) {
                // when you try to insert at index 0

                if (prvNode) {
                    prvNode.nextNode = newNode;
                }

                newNode.nextNode = travNode;
                break;
            }

            idx++;
            prvNode = travNode;
            travNode = travNode.nextNode;
        }

        if (index === 0) {
            headNode = newNode;
        }

        sz++;
    }

    function removeAt(index) {
        if (index < 0 || index >= sz) {
            return new Error("Index out of bounds!");
        }

        if (index === 0) {
            let secondNode = headNode.nextNode;
            headNode.nextNode = null;
            headNode = secondNode;
        } else if (index === sz - 1) {
            let secondLastNode = headNode;

            while (secondLastNode.nextNode != tailNode) {
                secondLastNode = secondLastNode.nextNode;
            }

            secondLastNode.nextNode = null;
            tailNode = secondLastNode;
        } else {
            let idx = 0;
            let travNode = headNode;
            let prvNode = null;

            while (travNode) {
                if (idx === index) {
                    prvNode.nextNode = travNode.nextNode;
                }

                idx++;
                prvNode = travNode;
                travNode = travNode.nextNode;
            }

            if (index === 0) {
                headNode = newNode;
            }
        }

        sz--;
    }

    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        toString,
        insertAt,
        removeAt,
    };
}

export default LinkedList;