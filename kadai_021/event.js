//HTNL要素を取得し、定数として代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

//クリックしたら処理を実行する
btn.addEventListener('click', () => {
  //2秒後に非同期処理を実行する
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});