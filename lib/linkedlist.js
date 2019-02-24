'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = null;
  }

  append(value) { // O(n)
    let node = new Node(value);
    // what happens if our list is empty
    if(! this.head) {
      this.head = node;
      return this;
    }
    // adds stuff to the end (when we have stuff already)
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  prepend(value) { // O(2)
    let node = new Node(value);
    if(! this.head) {
      this.head = node;
      return this;      
    }
    // adds stuff to the beginning (when we have stuff already)
    node.next = this.head;
    this.head = node;
    return this;
  }

  kthFromTheEnd(k) { // O(n)
    let node = new Node(k);
    // list is empty
    if(! this.head) {
      this.head = node;
      return this;
    }
    // returns value of the list item "k" from the end (when we have stuff already)
    let center = 0;
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
      center++;
    }
    currentNode = this.head;
    for(let i = 0; i < (center-k); i++) {
      currentNode= currentNode.next;
      return currentNode.value; 
    }       
  }

  insertBefore(value, newVal) { // O(n)
    let node = new Node(newVal);
    // list is empty
    if(! this.head) {
      this.head = node;
      return this;      
    }
    // adds new value before the value in the LL
    let currentNode = this.head;
    while(currentNode.next.value != value) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  insertAfter(value, newVal) { // O(n)
    let node = new Node(newVal);
    // list is empty
    if(! this.head) {
      this.head = node;
      return this;      
    }
    // adds new value before the value in the LL
    let currentNode = this.head;
    while(currentNode.next.value != value) {
      currentNode = currentNode.next;
    }
    currentNode = currentNode.next;
    currentNode.next = node;
    return this;
  }

  mergesBothLinkedLists(value1, value2) {

    let A = new Node(value1);
    let B = new Node(value2);
    let C = value1.head;

    if(A && B) {
      C.head = A.head;
      C.next = B.head;
    }
    while(A.next || B.next) {
      if(A.next) {
        C.next = A.next;
        A.head = A.next;
      }
      if(B.next) {
        C.next = B.next;
        B.head = B.next;
      }
    }
    return C;
  }
}

module.exports = LinkedList;