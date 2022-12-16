console.log("main.js!!");

let zikou1;// 計算処理用変数
let zikou2;// リセット処理用変数
let zikou3;// 合計金額リセット処理用変数
let zikou4;// 人数リセット処理用変数

let btn_reset;// リセットボタンの表示設定用変数
let btn_reset_goukei;// 合計金額リセットボタンの表示設定用変数
let btn_reset_ninzuu;// 人数リセットボタンの表示設定用変数

$(document).ready(()=>{
	console.log("Ready!!");

	//●リセットボタンの表示処理
	let kirikae_reset;
	btn_reset = () => {
		if(kirikae_reset === 0){
			$(".reset").prop("disabled", true);
		}
		else if(kirikae_reset === 1){
			$(".reset").prop("disabled", false);
		}
	}
	let kirikae_reset_goukei;
	btn_reset_goukei = () => {
		if(kirikae_reset_goukei === 2){
			$(".reset_goukei").prop("disabled", true);
		}
		else if(kirikae_reset_goukei === 3){
			$(".reset_goukei").prop("disabled", false);
		}
	}
	let kirikae_reset_ninzuu;
	btn_reset_ninzuu = () => {
		if(kirikae_reset_ninzuu === 4){
			$(".reset_ninzuu").prop("disabled", true);
		}
		else if(kirikae_reset_ninzuu === 5){
			$(".reset_ninzuu").prop("disabled", false);
		}
	}

	//●ロードしたときの処理
	btn_reset(kirikae_reset = 0);
	btn_reset_goukei(kirikae_reset_goukei = 2)
	btn_reset_ninzuu(kirikae_reset_ninzuu = 4)

	//●計算処理

	//計算するボタン処理
	zikou1 = () => {
		btn_reset(kirikae_reset = 1);
		btn_reset_goukei(kirikae_reset_goukei = 3)
		btn_reset_ninzuu(kirikae_reset_ninzuu = 5)
		let total_num = $('.total').val()
		//console.log(total_num);
		let ninzuu_num = $('.ninzuu').val()
		//console.log(ninzuu_num);
		let kekka = Math.floor(total_num / ninzuu_num)
		$('.perperson').text(kekka);
		$('span').text(kekka);
	}

	//●リセット処理

	//リセットボタン処理
	zikou2 = ()=> {
		btn_reset(kirikae_reset = 0);
		btn_reset_goukei(kirikae_reset_goukei = 2)
		btn_reset_ninzuu(kirikae_reset_ninzuu = 4)
		$('.total').val('');
		$('.ninzuu').val('')
		$('.perperson').text('');
		$('span').text('');
	}
	//合計金額リセットボタン処理
	zikou3 = () => {
		$('.total').val('');
		btn_reset_goukei(kirikae_reset_goukei = 2)
	}
	//人数リセットボタン処理
	zikou4 = () => {
		$('.ninzuu').val('');
		btn_reset_ninzuu(kirikae_reset_ninzuu = 4)
	}
});