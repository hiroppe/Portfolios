$(document).ready(()=>{
    let snd = new Howl({
        src: ['./sounds/jihou-sine-3f.mp3'],
        loop: false,
        volume: 1.0
    })
    setInterval(()=>{
        let now = new Date();
        // 日付部分
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let date = now.getDate();
        let day = now.getDay();
        let weekdays = ['日','月','火','水','木','金','土'];
        let weekday = weekdays[day];
        $('#days').text(`${year}年${month}月${date}日${weekday}曜日`);
        // 時計部分
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        if(minutes < 10){
            minutes = '0'+ minutes;
        }
        $('#times').text(`${hours}:${minutes}`);
        // 時報部分
        if(minutes === 59 && seconds === 56){
            snd.play();
        }
        //確認コンソール
        //console.log(seconds);// 秒
    },1000);
    console.log(snd);
});