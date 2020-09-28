// FIFO data structure
// Methods:
//  enqueue()
//  dequeue()
//  peek()
//  isEmpty()
//  get length()

export default class Queue {
  constructor() {
    this.queue = [];
  }

  get length() {
    return this.queue.length;
  }

  // Add item at the end of the queue
  enqueue(item) {
    this.queue.push(item);
  }

  //   Delete item at the front of the queue
  dequeue() {
    return this.queue.shift();
  }

  //   Item at the front
  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.length === 0;
  }
}
