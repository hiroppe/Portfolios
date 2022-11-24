console.log("main.js!!");

// 130000.json <-東京地方
// 210000.json <-岐阜県
const URL = "https://www.jma.go.jp/bosai/forecast/data/forecast/210000.json";

$(document).ready(()=>{
	console.log("Ready!!");

	// Axios
	const option = {responseType: "blob"};
	axios.get(URL,option).then(res=>{
		res.data.text().then(str1=>{
			let arr1 = JSON.parse(str1);
			//console.log(arr1);
			// 地名・気温表示(美濃地方)
			$('#mino').text(arr1[0]['timeSeries'][0]['areas'][0]['area']['name']);
			$('#high_1').text(arr1[0]['timeSeries'][2]['areas'][0]['temps'][1]);
			// 地名・気温表示(飛騨地方)
			$('#hida').text(arr1[0]['timeSeries'][0]['areas'][1]['area']['name']);
			$('#high_2').text(arr1[0]['timeSeries'][2]['areas'][1]['temps'][1]);
			axios.get('./data.json', option).then(res=>{
				res.data.text().then(str2=>{
					let arr2 = JSON.parse(str2);
					//console.log(arr2);
					// 天気マーク表示(美濃地方)
					$('#weather_mark_1').append(`<img src="images_mark/`+ arr2[arr1[0]['timeSeries'][0]['areas'][0]['weatherCodes'][0]][0]+ `">`)
					// 天気マーク表示(飛騨地方)
					$('#weather_mark_2').append(`<img src="images_mark/`+ arr2[arr1[0]['timeSeries'][0]['areas'][1]['weatherCodes'][0]][0]+ `">`)
				});
			}).catch(err=>{
				// 天気マーク表示(美濃地方)
				$('#weather_mark_1').append('<p>読み込み中</p>')
				// 天気マーク表示(飛騨地方)
				$('#weather_mark_2').append('<p>読み込み中</p>')
			});
		})
	}).catch(err=>{
		// 地名・気温表示(美濃地方)
		$('#mino').text('読み込み中');
		$('#high_1').text('--');
		// 地名・気温表示(飛騨地方)
		$('#hida').text('読み込み中');
		$('#high_2').text('--');
	})
});