//  جمع کردن عناصر آرایه 
let numbers1 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers1.length; i++) {
  sum += numbers1[i];
}

console.log("مجموع اعداد آرایه:", sum);

//    فیبوناچی
let n = 10; 
let fibonacci = [0, 1];

for (let i = 2; i < n; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("دنباله فیبوناچی:", fibonacci);

// ضرب عناصر  
let numbers2 = [2, 3, 4, 5, 6, 7, 8];
let product = 1;

for (let i = 2; i <= 5; i++) {
  product *= numbers2[i];
}

console.log("حاصل ضرب عناصر سوم تا ششم:", product);

//   حذف عنصر دوم تا چهارم و اضافه کردن عدد 6 
let numbers3 = [1, 2, 3, 4, 5, 6];
numbers3.splice(1, 3, 6);

console.log("آرایه جدید بعد از تغییر:", numbers3);
