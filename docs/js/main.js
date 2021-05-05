'use strict';

//thクリック動作でid取得
// $('th').on('click', function () {
//    let id = $('this').attr('id');
//   console.log(String(id));
{

  $('#gameStart').on('click', function () {
    $('#info').addClass('displaynone');
    $('#mask').addClass('displaynone');
    $(this).addClass('displaynone');
    countUp();

  });

  // 選んだ数字のデータ
  let selectNum = [];
// to1オプ
  let optionNum1 = [];
  let optionNum2 = [];
  let optionNum3 = [];
// ST12オプ
  let optionST12_left = [];
  let optionST12_center = [];
  let optionST12_right = [];
//hulfNUmオプ
  let optionHalfNum_left = [];
  let optionHalfNum_right = [];
//even or odd
  let option1or2_even = [];
  let option1or2_odd = [];
// red or blacl
  let color_red = [];
  let color_black = [];

  // 過去のデータ
  let pastDate = [];
  let deleteDate = 0;

  // お金のデータ
  let handmoney = 10000;
  $('#chash').text(handmoney);

  // 借金ボタン
  let lone = 0;
  const lonetext = document.getElementById('lonetext');
  lonetext.textContent = lone;
  const danger = document.getElementById('danger');
  danger.addEventListener('click', () => {
    lone -= 10000;
  lonetext.textContent = lone;
  handmoney += 10000;
  $('#chash').text(String(handmoney));
  });

  // 借金返済ボタン
  const peyoff = document.getElementById('pey_off');
  peyoff.addEventListener('click', () => {
    handmoney += lone;
    lone = 0;
  $('#chash').text(String(handmoney));
  lonetext.textContent = lone;
  });

  // １ゲームの記録データ
  let memory = 0;
  let memory2 = 0;
  memory += handmoney;

//チップ金額
  let chip00 = [];
  let chip33;
//to1オプ
  let new_arr_left = [];
  let new_arr_middle = [];
  let new_arr_right = [];
//ST12オプ
  let new_arr_up;
  let new_arr_center;
  let new_arr_bottom;
//hulfNUmオプ
  let new_hulf_left;
  let new_hulf_right;
//even or odd
  let new_even;
  let new_odd;
// red or blacl
  let new_black;
  let new_red;

  // 選んだチップ
  let cselectedChip;

  // ランダムな数字を選ぶ動作
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // sleep機能
  function sleep(waitMsec) {
    var startMsec = new Date();
    // 指定ミリ秒間だけループさせる
    while (new Date() - startMsec < waitMsec);
  }

function colorSwitch() {
  switch (chip33) {
    case "100":
    $(this).addClass('white');
    break;
    case "500":
    $(this).addClass('purple');
    break;
    case "1000":
    $(this).addClass('skyblue');
    break;
    case "2500":
    $(this).addClass('green');
    break;
    case "5000":
    $(this).addClass('redpurple');
    break;
  }
}
// あたり通知
function queue(op) {
  $(document).ready(function() {
    //queue()で処理を溜めてdequeue()で実行。3秒経ったらfadeOut()
   $("#colect").fadeIn(1000).queue(function() {
    $('#colecttext').text(op);
       setTimeout(function(){$("#colect").dequeue();
       $('#colecttext').text("");
       }, 2000);
   });
   $("#colect").fadeOut();
});
}

  /////////////////////
  // タイマー
  const timer = document.getElementById('timer');
  let startTime;
  let timeoutId; 

  function countUp() {
    const d = new Date(Date.now() - startTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    timer.textContent = `${m}:${s}`;
    timeoutId = setTimeout(() => {
      countUp();
    }, 1000);
  }
    startTime = Date.now();
  
  // chipsのクリックアクション
  $('#start').removeClass("smoke");

  $('[id^=chips]').click(function () {
    cselectedChip = this.value;
    chip33 = this.value;
    console.log(cselectedChip);

    // $('#select_chip_img').append($("<img src='chipImg[0]'>"));
    $('[id^=chips]').removeClass("smoke");
    $(this).addClass('smoke');

    // チップ画像を表示
    if (this.value == 100) {
    $('#img_place').attr('src',"./img/チップ.png");
    }
    if (this.value == 500) {
    $('#img_place').attr('src',"./img/チップ5.png");
    }
    if (this.value == 1000) {
    $('#img_place').attr('src',"./img/チップ10.png");
    }
    if (this.value == 2500) {
    $('#img_place').attr('src',"./img/チップ25.png");
    }
    if (this.value == 5000) {
    $('#img_place').attr('src',"./img/チップ50.png");
    }
    $('#play_table').removeClass("smoke");
  });
  ///////////////////////////////
  // thのクリック動作 
  $('[id^=tableNum_]').on('click', function () {
    $('#spin_img').addClass('spin');
    $('#randomNum').removeClass('pnum');
     deleteDate = 0;

    if (cselectedChip == 100) {
      selectNum.push(parseInt(this.value));
      // お金の処理
      chip00.push(100);
      // $(this).addClass('white');
    }
    if (cselectedChip == 500) {
      selectNum.push(parseInt(this.value));
      // お金の処理
      chip00.push(500);
      // $(this).addClass('purple');
    }
    if (cselectedChip == 1000) {
      selectNum.push(parseInt(this.value));
      // お金の処理
      chip00.push(1000);
      // $(this).addClass('skyblue');
    }
    if (cselectedChip == 2500) {
      selectNum.push(parseInt(this.value));
      console.log(selectNum);
      // お金の処理
      chip00.push(25000);
      // $(this).addClass('green');
    }
    if (cselectedChip == 5000) {
      selectNum.push(parseInt(this.value));
      // お金の処理
      chip00.push(5000);
      // $(this).addClass('redpurple');
    }
    switch (chip33) {
      case "100":
      $(this).addClass('white');
      break;
      case "500":
      $(this).addClass('purple');
      break;
      case "1000":
      $(this).addClass('skyblue');
      break;
      case "2500":
      $(this).addClass('green');
      break;
      case "5000":
      $(this).addClass('redpurple');
      break;
    }

    // 常時お金の計算
    handmoney -= cselectedChip
    $('#chash').text(String(handmoney));
  });
  ///////////////////////////////
  // potionline1のクリック動作
  $('[id^=optionline]').on('click', function () {
    $('#spin_img').addClass('spin');
    $('#randomNum').removeClass('pnum');


    if (this.value == "up") {
      optionNum1.push(3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36);
      new_arr_up = [].concat(chip33);
      console.log(optionNum1);

    } else if (this.value == "center") {
      optionNum2.push(2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35);
      new_arr_center = [].concat(chip33);
      console.log(optionNum2);

    } else {
      optionNum3.push(1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34);
      new_arr_bottom = [].concat(chip33);
      console.log(optionNum3);
    }

    switch (chip33) {
      case "100":
      $(this).addClass('white');
      break;
      case "500":
      $(this).addClass('purple');
      break;
      case "1000":
      $(this).addClass('skyblue');
      break;
      case "2500":
      $(this).addClass('green');
      break;
      case "5000":
      $(this).addClass('redpurple');
      break;
    }
    // $(this).addClass('red');
    // お金の計算
    handmoney -= cselectedChip;
    $('#chash').text(String(handmoney));
  });
  ///////////////////////////////
  $('[id^=optionST12_]').on('click', function () {
    $('#spin_img').addClass('spin');

    $('#randomNum').removeClass('pnum');

    if (this.value == "1st12") {
      optionST12_left.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
      new_arr_left = [].concat(chip33);
      console.log(optionST12_left);
    } else if (this.value == "2st12") {
      optionST12_center.push(13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24);
      new_arr_middle = [].concat(chip33);
      console.log(optionST12_center);
    } else {
      optionST12_right.push(25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36);
      new_arr_right = [].concat(chip33);
      console.log(optionST12_right);
    }

    switch (chip33) {
      case "100":
      $(this).addClass('white');
      break;
      case "500":
      $(this).addClass('purple');
      break;
      case "1000":
      $(this).addClass('skyblue');
      break;
      case "2500":
      $(this).addClass('green');
      break;
      case "5000":
      $(this).addClass('redpurple');
      break;
    }
   
    // $(this).addClass('red');
    handmoney -= cselectedChip;
    $('#chash').text(String(handmoney));

  });
  // 1~18 19~36
  $('[id^=optionHalfNum_').on('click', function() {
    $('#randomNum').removeClass('pnum');
    $('#spin_img').addClass('spin');

    if (this.value == "left") {
      optionHalfNum_left.push(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18);
      new_hulf_left = [].concat(chip33);
      console.log(optionHalfNum_left);
    } else {
      optionHalfNum_right.push(19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36);
      new_hulf_right = [].concat(chip33);
      console.log(optionHalfNum_right);
    }
    switch (chip33) {
      case "100":
      $(this).addClass('white');
      break;
      case "500":
      $(this).addClass('purple');
      break;
      case "1000":
      $(this).addClass('skyblue');
      break;
      case "2500":
      $(this).addClass('green');
      break;
      case "5000":
      $(this).addClass('redpurple');
      break;
    }
    // $(this).addClass('red');
    handmoney -= cselectedChip;
    $('#chash').text(String(handmoney));
  });
  /////////////
  // 偶数と奇数
  $('[id^=option1or2_').on('click', function() {
    $('#randomNum').removeClass('pnum');
    $('#spin_img').addClass('spin');

    if (this.value == "EVEN") {
      option1or2_even = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36];
      new_even = [].concat(chip33);
      console.log(option1or2_even);
    } else {
      option1or2_odd = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35];
      new_odd = [].concat(chip33);
      console.log(option1or2_odd);
    }
    switch (chip33) {
      case "100":
      $(this).addClass('white');
      break;
      case "500":
      $(this).addClass('purple');
      break;
      case "1000":
      $(this).addClass('skyblue');
      break;
      case "2500":
      $(this).addClass('green');
      break;
      case "5000":
      $(this).addClass('redpurple');
      break;
    }

    // $(this).addClass('red');
    handmoney -= cselectedChip;
    $('#chash').text(String(handmoney));
  });
  ///red or black
  $('[id^=optionColor_').on('click', function() {
    $('#randomNum').removeClass('pnum');

    $('#spin_img').addClass('spin');

    if (this.value == "RED") {
      color_red = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
      new_red = [].concat(chip33);
      console.log(color_red);
    } else {
      color_black = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
      new_black = [].concat(chip33);
      console.log(color_black);
    }
    switch (chip33) {
      case "100":
      $(this).addClass('white');
      break;
      case "500":
      $(this).addClass('purple');
      break;
      case "1000":
      $(this).addClass('skyblue');
      break;
      case "2500":
      $(this).addClass('green');
      break;
      case "5000":
      $(this).addClass('redpurple');
      break;
    }

    // $(this).addClass('red');
    handmoney -= cselectedChip;
    $('#chash').text(String(handmoney));
  });
  ///////////////////////////////

  $('#start').on('click', function () {

    $('#spin_img').removeClass('spin');
    $('#randomNum').addClass('pnum');
    const randomNum = getRandomInt(0, 36);
    $('#randomNum').text(randomNum);
    // 過去データ処理
    pastDate.splice(0, 1, randomNum);
    // 選んだデータが一致しているか
    if (selectNum.includes(randomNum)) {
      queue("あたり⇨ストレート");
      ///////////////////////////////
      // 配列の特定のobjのキーを取得
      const result1 = Object.keys(selectNum).reduce((r, key) => {
        return selectNum[key] === randomNum ? key : r
      }, null);
      //数字　当選　計算処理
      handmoney += chip00[result1] * 36;
      $('#chash').text(handmoney);
      ////////////////////////////////
    }

    // 右オプション　当選　計算処理
    if (optionNum1.includes(randomNum)) {
      handmoney += new_arr_up * 3;
      queue("あたり「2TO1」");
      $('#chash').text(handmoney);
    }
    if (optionNum2.includes(randomNum)) {
      handmoney += new_arr_center * 3;
      queue("あたり「2TO1」");
      $('#chash').text(handmoney);
    }
    if (optionNum3.includes(randomNum)) {
      handmoney += new_arr_bottom * 3;
      queue("あたり「2TO1」");
      $('#chash').text(handmoney);
    }
    if (optionST12_left.includes(randomNum)) {
      handmoney += new_arr_left * 3;
      queue("あたり「1ST12」");
      $('#chash').text(handmoney);
    }
    if (optionST12_center.includes(randomNum)) {
      handmoney += new_arr_middle * 3;
      queue("あたり「2ND12」");
      $('#chash').text(handmoney);
    }
    if (optionST12_right.includes(randomNum)) {
      handmoney += new_arr_right * 3;
      queue("あたり「3RD12」");
      $('#chash').text(handmoney);
    }

    if (optionHalfNum_left.includes(randomNum)) {
      handmoney += new_hulf_left * 2;
      queue("あたり「1~18」");
      $('#chash').text(handmoney);
    }
    if (optionHalfNum_right.includes(randomNum)) {
      handmoney += new_hulf_right * 2;
      queue("あたり「19~36」");
      $('#chash').text(handmoney);
    }
  // 偶数と奇数
    if (option1or2_even.includes(randomNum)) {
      handmoney += new_even * 2;
      queue("あたり「EVEN」");
      $('#chash').text(handmoney);
    }
    if (option1or2_odd.includes(randomNum)) {
      handmoney += new_odd * 2;
      queue("あたり「ODD」");
      $('#chash').text(handmoney);
      ///red or black
    }
    if (color_red.includes(randomNum)) {
      handmoney += new_red * 2;
      queue("あたり「RED」");
      $('#chash').text(handmoney);
    }
    if (color_black.includes(randomNum)) {
      handmoney += new_black * 2;
      queue("あたり「BLACK」");
      $('#chash').text(handmoney);
    }
    color_red = [];
    color_black = [];
    
    option1or2_even = [];
    option1or2_odd = [];

    optionHalfNum_left = [];
    optionHalfNum_right = [];

    optionST12_left = [];
    optionST12_center = [];
    optionST12_right = [];

    optionNum1 = [];
    optionNum2 = [];
    optionNum3 = [];
    selectNum = [];
    chip00 = [];

    $('[id^=tableNum_]').removeClass('white purple skyblue green redpurple');
    $('[id^=optionline]').removeClass('white purple skyblue green redpurple');
    $('[id^=optionST12_]').removeClass('white purple skyblue green redpurple');
    $('[id^=optionHalfNum_').removeClass('white purple skyblue green redpurple');
    $('[id^=option1or2_').removeClass('white purple skyblue green redpurple');
    $('[id^=optionColor_').removeClass('white purple skyblue green redpurple');

    // 過去データの表示
    const ul = document.getElementById('pastDate')
    const li = document.createElement('li');
    li.textContent = pastDate;
    ul.appendChild(li);
    deleteDate += 1;
    // 過去データの削除
    if (deleteDate == 35) {
      while (ul.lastChild) {
        ul.removeChild(ul.lastChild);
      }
    }
    memory2 = handmoney - memory;
    console.log(memory2);
    const win = document.getElementById('win');
    win.textContent = memory2;
    memory = 0;
    memory += handmoney;
    // ゲームオーバー通知
    if (handmoney < 0) {
      // alert('Game Over');
      $('#mask').removeClass('displaynone');
      $('#gameOver').removeClass('displaynone');
      clearTimeout(timeoutId);   ////stoptimer
      }
  });
}