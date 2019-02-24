'use strict';

let LL = require('../lib/linkedlist.js');

describe('Linked List', () => {
  it('constructor()', ()=> {
    let linkedList = new LL();
    expect(linkedList.head).toBeNull();
  });
  
  it('append()', ()=> {
    let linkedList = new LL();
    let startValue = 'First Value';
    linkedList.append(startValue);
    expect(linkedList.head.value).toEqual(startValue);
    let secondValue = 'Second Value';
    linkedList.append(secondValue);
    expect(linkedList.head.value).toEqual(startValue);
    let thirdValue = 'Third Value';
    linkedList.append(thirdValue);
    expect(linkedList.head.value).toEqual(startValue);
    console.log(linkedList);
  });

  it('prepend()', () => {
    let list = new LL();
    let initialValue = 'First Phrase';
    list.prepend(initialValue);
    expect(list.head.value).toEqual(initialValue);
    let newValue = 'Second Saying';
    list.prepend(newValue);
    expect(list.head.value).toEqual(newValue);
    let anotherOne = 'Third Thought';
    list.prepend(anotherOne);
    expect(list.head.value).toEqual(anotherOne);
    console.log(list);
  });
});