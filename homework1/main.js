console.log("main.js!!");

let test;
let geolocation;

$(document).ready(()=>{
	console.log("Ready!!");
	test = () => {
		navigator.geolocation.getCurrentPosition(geolocation)
	}

	geolocation = (position) => {
		if(navigator.geolocation){
			let geo_text = "緯度:" + position.coords.latitude + "\n";
			geo_text += "経度:" + position.coords.longitude + "\n";
			geo_text += "高度:" + position.coords.altitude + "\n";
			geo_text += "位置精度:" + position.coords.accuracy + "\n";
			geo_text += "高度精度:" + position.coords.altitudeAccuracy  + "\n";
			geo_text += "移動方向:" + position.coords.heading + "\n";
			geo_text += "速度:" + position.coords.speed + "\n";
			alert(geo_text);
		}
		else{
			alert('取得出来ませんでした。')
		}
	}
});