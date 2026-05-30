//「btn」というHTML要素を取得し、定数に代入する
const Btn = document.getElementById('btn');
//「text」というHTML要素を取得し、定数へ代入する
const Text = document.getElementById('text');


//ボタンを押したときにイベント処理を実行する
Btn.addEventListener('click', () => {
  //取得したHTML要素内のテキストを変更する
  Text.textContent = 'ボタンをクリックしました';
});