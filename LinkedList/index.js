// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  insertFirst_sol_1(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    let size = 0;
    let curr = this.head;
    while (curr) {
      size++;
      curr = curr.next;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let curr = this.head;
    while (curr && curr.next) {
      curr = curr.next;
    }
    return curr;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    // if there are no nodes in the linked list
    if (!this.head) return;
    // handles case if there is just one node in the linked list
    if (!this.head.next) {
      this.head = null;
      return;
    }
    // handles if there are two or more nodes in the linked list
    let prev = this.head;
    let curr = this.head.next;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    let newNode = new Node(data);
    // if the head is null
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  insertLast_using_getLast(data) {
    let newNode = new Node(data);
    let lastNode = this.getLast();
    if (!lastNode) {
      this.head = newNode;
      return;
    } else {
      lastNode.next = newNode;
    }
  }

  getAt_using_size(index) {
    let size = this.size();
    if (index < 0 || !this.head || index > size) return null;
    let curr = this.head;
    while (index > 0) {
      curr = curr.next;
      index--;
    }
    return curr;
  }

  getAt(index) {
    let counter = 0;
    let curr = this.head;
    while (curr) {
      if (counter === index) {
        return curr;
      } else {
        curr = curr.next;
        counter++;
      }
    }
    // this is reached when the index is out of range
    return null;
  }

  removeAt(index) {
    3;
    // a-->b-->c-->d-->null
    if (!this.head) return null;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let counter = 0;
    let curr = this.head;
    let prev = this.head;
    while (curr) {
      if (counter === index) {
        prev.next = curr.next;
        return;
      } else {
        prev = curr;
        curr = curr.next;
        counter++;
      }
    }
  }
}

let ll = new LinkedList();
ll.insertFirst('a');
ll.removeAt(1);
module.exports = { Node, LinkedList };
