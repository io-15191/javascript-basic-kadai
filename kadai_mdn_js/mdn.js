//①まずは、今日の｢データ（値）」を箱にいれる
const date = new Date();
//ばらばらに引き出す
const [year, month, day] = [
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
]

//③引き出した｢値｣を組み立てて画面に表示さっせる
console.log(year + '年', (month + 1) + '月' + day + '日');
