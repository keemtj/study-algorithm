class ArrayList {
  constructor(capacity) {
    this.capacity = capacity;
    this.array = new Int32Array(capacity);
    this.length = 0;
  }

  isEmpty() {
    if (this.array.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  prepend(value) {}

  append(value) {}

  setHead(index) {}

  access(index) {}

  insert(index, value) {}

  remove(index) {}

  print() {}
}

const arraylist = new ArrayList();
console.log(arraylist);
console.log(arraylist.isEmpty());
console.log(arraylist.prepend(10));
