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
/////////////////////////////////////////////////////////////////////////
//Функції генератори

function* myGenerator() {
  console.log("String1");
  yield "Проміжний результат 1";
  console.log("String2");
  yield "Проміжний результат 2";
  console.log("String3");
  yield "Проміжний результат 3";
}

const gen = myGenerator();
////////////////////////////////////////////////////////////////////////////////

function* numberGenerator(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const iterator = numberGenerator(0, 100);

const it = numberGenerator(0, 100);
for (let i = 0; i <= 100; i++) {
  console.log(it.next());
}

const it1 = numberGenerator(0, 100);
let sum = 0;
for (let i = 0; i <= 100; i++) {
  const { value } = it1.next();
  sum += value;
}

console.log(sum);
