const invokeCallback = (callback) => {
  callback();
};

invokeCallback(() => {
  console.log('Hola que tal');
});

const perTwo = [1, 2, 3].map((num) => {
  return num * 2;
});

console.log(perTwo)