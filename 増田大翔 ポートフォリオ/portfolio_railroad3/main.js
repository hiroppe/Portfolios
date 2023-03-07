let switching;
let answer1;
let answer2;
let answer3;
let answer4;

$(document).ready(()=>{
    let classes = ['one','two','three','four'];
    for(let classnames of classes){
        $(`.${classnames}`).prop("disabled", true);
    }

	const option = {responseType: "blob"};
    axios.get('data.json', option).then(res=>{
        // 通信が成功した場合
        res.data.text().then(str=>{
            let arr = JSON.parse(str);
            console.log(arr);
            
            let btn_text = 0
            let prognum = 0
            let datanum = -1
            switching = () => {
                for(let classnames of classes){
                    $(`.${classnames}`).prop("disabled", false);
                }
                $('.next').prop("disabled", true);
                $('.torf').text('');
                $('.answer_text').text('');
                $('.next').text('次の問題へ');

                prognum += 1
                $('.num').text(prognum);
                if(prognum === 4){
                    $('.next').text('終わり');
                }

                datanum += 1
                $('h2').text(arr['questionList'][datanum]['question']);
                $('img').attr('src',`images/${arr['questionList'][datanum]['src']}`)
                if(datanum >= 2){
                    $('img').css({
                        'width':'250px',
                        'height':'350px',
                        'padding-left':'380px',
                    })
                }

                for(let classnames of classes){
                    $(`.${classnames}`).text(arr['questionList'][datanum]['choice'][btn_text]);
                    btn_text += 1
                    if(btn_text === 4){
                        btn_text = 0;
                    }
                }
            }

            let score = 0;
            answer1 = () => {
                for(let classnames of classes){
                    $(`.${classnames}`).prop("disabled", true);
                }
                if($('.one').text() === arr['questionList'][datanum]['answer']){
                    $('.torf').text('正解');
                    $('.answer_text').text(arr['questionList'][datanum]['answer']);
                    score += 1;
                    $('.score').text(score);
                }
                else{
                    $('.torf').text('不正解');
                    $('.answer_text').text(arr['questionList'][datanum]['answer']);
                }
                $('.next').prop("disabled", false);
                if(prognum === 4){
                    $('.next').prop("disabled", true);
                }
            }
            answer2 = () => {
                for(let classnames of classes){
                    $(`.${classnames}`).prop("disabled", true);
                }
                if($('.two').text() === arr['questionList'][datanum]['answer']){
                    $('.torf').text('正解');
                    $('.answer_text').text(arr['questionList'][datanum]['answer']);
                    score += 1;
                    $('.score').text(score);
                }
                else{
                    $('.torf').text('不正解');
                    $('.answer_text').text(arr['questionList'][datanum]['answer']);
                }
                $('.next').prop("disabled", false);
                if(prognum === 4){
                    $('.next').prop("disabled", true);
                }
            }
            answer3 = () => {
                for(let classnames of classes){
                    $(`.${classnames}`).prop("disabled", true);
                }
                if($('.three').text() === arr['questionList'][datanum]['answer']){
                    $('.torf').text('正解');
                    $('.answer_text').text(arr['questionList'][datanum]['answer']);
                    score += 1;
                    $('.score').text(score);
                }
                else{
                    $('.torf').text('不正解');
                    $('.answer_text').text(arr['questionList'][datanum]['answer']);
                }
                $('.next').prop("disabled", false);
                if(prognum === 4){
                    $('.next').prop("disabled", true);
                }
            }
            answer4 = () => {
                for(let classnames of classes){
                    $(`.${classnames}`).prop("disabled", true);
                }
                if($('.four').text() === arr['questionList'][datanum]['answer']){
                    $('.torf').text('正解');
                    $('.answer_text').text(arr['questionList'][datanum]['answer']);
                    score += 1;
                    $('.score').text(score);
                }
                else{
                    $('.torf').text('不正解');
                    $('.answer_text').text(arr['questionList'][datanum]['answer']);
                }
                $('.next').prop("disabled", false);
                if(prognum === 4){
                    $('.next').prop("disabled", true);
                }
            }
        });
    }).catch(err=>{
        // 通信が失敗した場合
        console.log(err);

        $('.num').text('-');
        $('h2').text('表示できません。');
        for(let classnames of classes){
            $(`.${classnames}`).text('読み込み中');
        }
        $('.torf').text('開始出来ません。');
        $('.answer_text').text('ボタンを押さないでください。');
        $('.score').text('-');
        $('.next').text('準備中');
    });
});