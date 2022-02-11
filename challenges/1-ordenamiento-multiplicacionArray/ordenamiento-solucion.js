let array = [];
const maxItemsArray = 500;

function randomItems(size) {
  if (size >= 1 && size <= maxItemsArray) {
    return Math.round(Math.random() * size);
  } else {
    return 0;
  }
}

function createArray(size) {
  if (size > 2) {
    for (let i = 0; i < size; i++) {
      array.push(randomItems(500));
    }
  } else {
    console.log("Size is not valid");
  }
}

// * FIND MAX NUMBER
function getMaxItem() {
  let maximo = array[0];
  array.forEach((item, index) => {
    if (item >= maximo) {
      maximo = item;
    }
  });
  return maximo;
}

function getMaxItemv1() {
  return Math.max(...array);

}

// * CREATE ARRAY WITH 0
function createNewArray(size) {
  let array = []
  for (let i = 0; i < size; i++) {
    array[i] = 0;
  }
  return array;
}

function checkValueArray(temArray) {
  array.forEach((element) => {
    temArray[element]++;
  })

  return true;
}

function showOrderArray() {
  let orderArray = [];
  for (let i = 0; i < getMaxItem(); i++) {
    let times = tempArray[i];
    if (times > 0) {
      for (let post = 1; post < times; post++) {
        orderArray.push(i);
      }
    }
  }
  return orderArray;
}


createArray(100);
console.log(array);
const maxValue = getMaxItem();
// console.log(maxValue);
const tempArray = createNewArray(maxValue + 1);
checkValueArray(tempArray);
console.log(showOrderArray());

