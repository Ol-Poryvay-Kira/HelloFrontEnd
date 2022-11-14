let arrayNumbers = [...Array(101).keys()];
let userNumber = prompt("Enter your number:");
let target = parseInt(userNumber);
let searchGame = function (number, target) {
  let startPoint = 0;
  let midPoint;
  let endPoint = number.length - 1;
  //Проверка чисел в диапазоне от 0 до 100
  if (target > 100 || target < 0) 
  {
    alert("Please enter a number from 0 to 100");
    userNumber = prompt("Enter your number:");
    target = parseInt(userNumber);
    searchGame(number, target);
  }
  while (startPoint <= endPoint) 
  {
    //Определям середину массива, получаем 50.
    midPoint = Math.round((endPoint - startPoint) / 2) + startPoint;
    let equals = confirm("Your number is: " + midPoint + " ?");
    //Если загаданое число равно 50, завершаем функцию.
    if (equals) 
    {
      console.log(midPoint);
      alert("Guess something more difficult ) ");
      return midPoint;
      //Если загаданое число не равно 50, число меньше 50 ?.
    } 
    else 
    {
      let lessThen50 = confirm("Your number smaller then: " + midPoint + " ?");
      //Если загаданое число меньше 50, передвигаем endPoint к 49, после чего делим этот массив на 2 и повторяем опрос
      if (lessThen50) 
      {
        endPoint = midPoint - 1;
        console.log(endPoint);
        //Если загаданое число больше 50, то передвигаем старт масива к 51, после чего делим этот массив на 2 и повторяем опрос
      } 
      else 
      {
        let biggerThen50 = confirm("Your number bigger then: " + midPoint + " ?");
        if (biggerThen50) 
        {
          startPoint = midPoint + 1;
          console.log(startPoint);
        }
      }
    }
  }
};
console.log(searchGame(arrayNumbers, target));