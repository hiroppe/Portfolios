// アニメーション設定
const elem = $('#comment');
elem.addClass("animate__animated");
elem.addClass("animate__fadeInLeft");
elem.on("animationend", ()=>{
	elem.off("animationend");
	elem.removeAttr("class");
});