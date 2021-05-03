'use strict';
//thクリック動作でid取得

// $('th').on('click', function () {
//    let id = $('this').attr('id');
//   console.log(String(id));
//   // thのクリック動作 
//   if (this.id === "three") {
//     alert('Hello three!');
//   }
//   if (this.id === "six") {
//     alert('hello six');
//   }
// });
{
  // チップ画像の箱 後で実装
  // const img1 = "img/チップ.png";
  // const chipImg = [img1];

  // 選んだ数字のデータ
  let selectNum = [];
  let optionNum1 = [];

  // 過去のデータ
  let pastDate = [];
  let deleteDate = 0;

  // お金のデータ
  let handmoney = 10000;
  $('#chash').text(handmoney);

  // チップ金額
  let chip00 = [];

  // 選んだチップ
  let cselectedChip;

  // ランダムな数字を選ぶ動作
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // chipsのクリックアクション
  $('[id^=chips]').click(function () {
    cselectedChip = this.value;

    // $('#select_chip_img').append($("<img src='chipImg[0]'>"));
    $('[id^=chips]').removeClass("smoke");
    $(this).addClass('smoke');
    $('#play_table').removeClass("smoke");
  });
  ///////////////////////////////
  // thのクリック動作 
  $('[id^=tableNum_]').on('click', function () {
    // ゲームオーバー通知
    deleteDate = 0;
    if (handmoney < 0) {
      alert('Game Over');
    }

    if (cselectedChip == 100) {
      selectNum.push(parseInt(this.value));
      // alert(selectNum);
      console.log(selectNum);
      // お金の処理
      chip00.push(100);
      console.log(chip00);
    }
    if (cselectedChip == 200) {
      selectNum.push(parseInt(this.value));
      // alert(selectNum);
      console.log(selectNum);
      // お金の処理
      chip00.push(200);
      console.log(chip00);
    }

    $(this).addClass('red');
    // お金の計算
    handmoney -= cselectedChip
    console.log(handmoney);
    $('#chash').text(String(handmoney));
    $('#start').removeClass("smoke");
  });
  ///////////////////////////////
  // potionline1のクリック動作
  $('[id=optionline1]').on('click', function () {
    if (cselectedChip == 100) {
      optionNum1.push(3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36);

      // alert(optionNum1);
      console.log(optionNum1);
      // お金の処理
      // chip00.push(100);
      // console.log(chip00);
    }
    if (cselectedChip == 200) {
      optionNum1.push(parseInt(this.value));
      // alert(optionNum1);
      console.log(optionNum1);
      // お金の処理
      // chip00.push(200);
      // console.log(chip00);
    }

    $(this).addClass('red');
    // お金の計算
    handmoney -= cselectedChip;
    console.log(handmoney);
    $('#chash').text(String(handmoney));

  });
  ///////////////////////////////


  $('#start').on('click', function () {
    const randomNum = getRandomInt(0, 36);
    $('#randomNum').text(randomNum);
    // 過去データ処理
    pastDate.splice(0, 1, randomNum);
    console.log(pastDate);

    console.log(selectNum);
    // console.log(randomNum);
    // 選んだデータが一致しているか
    if (selectNum.includes(randomNum)) {
      console.log(randomNum);
      alert('collect!!!');
      console.log(Object.keys(selectNum));
      console.log(Object.keys(chip00));

      ///////////////////////////////
      // 配列の特定のobjのキーを取得
      const result1 = Object.keys(selectNum).reduce((r, key) => {
        return selectNum[key] === randomNum ? key : r
      }, null);
      console.log(result1);

      //数字　当選　計算処理
      console.log(chip00[result1] * 36);
      handmoney += chip00[result1] * 36;
      $('#chash').text(handmoney);
      ////////////////////////////////
    } else {
      alert('you lose!!');
    }

    // 右オプション　当選　計算処理
    if (optionNum1.includes(randomNum)) {
      handmoney += 100 * 3;
      alert('option collect!');
      console.log(handmoney);
      $('#chash').text(handmoney);

    }
    optionNum1 = [];
    selectNum = [];
    chip00 = [];
    $('[id^=tableNum_]').removeClass('red');
    $('[id^=optionline]').removeClass('red');

    // 過去データの表示
    const ul = document.getElementById('pastDate')
    const li = document.createElement('li');
    li.textContent = pastDate;
    ul.appendChild(li);
    deleteDate += 1;
    console.log(deleteDate);
    // 過去データの削除
    if (deleteDate == 35) {
      while (ul.lastChild) {
        ul.removeChild(ul.lastChild);
      }

    }
  });


}