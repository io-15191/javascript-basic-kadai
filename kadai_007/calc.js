//変数に１５以下のランダムな数を代入
let num = Math.floor(Math.random() * 15) + 1;

//3の倍数もしくは5の倍数の判定
if (num % 3 == 0 && num % 5 == 0) {
  console.log('3と5の倍数です');
}

else if (num % 3 == 0) {
  console.log('3の倍数です');
}

else if (num % 5 == 0) {
  console.log('5の倍数です');
}

else {
  console.log(num);
}
