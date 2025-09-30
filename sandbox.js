const numbers = [1, 2, 3, 4, 5];

console.log(numbers);

//////////////////////////////////////////////////////
//Costom iterator

const myIterator = {
  data: [1, 2, 3, 4, 5],
  currentIndex: 0,
  next() {
    if (this.currentIndex < this.data.length) {
      return {
        value: this.data(this.currentIndex++),
        done: false,
      };
    } else {
      return {
        value: undefined,
        done: true,
      };
    }
  },
};
