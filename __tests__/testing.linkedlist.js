'use strict';

let LL = require('../lib/linkedlist.js');

describe('Linked List', () => {

  it('constructor()', ()=> {
    let list = new LL();
    expect(list.head).toBeNull();
  });

  it('append()', ()=> {
    let list = new LL();
    let initialValue = 'First Phrase';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'Second Saying';
    list.append(newValue);
    expect(list.head.value).toEqual(initialValue);

    let anotherOne = 'Third Thought';
    list.append(anotherOne);
    expect(list.head.value).toEqual(initialValue);

    console.log(list);
    
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