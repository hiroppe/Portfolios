// 計算処理
let calc = () => {
    let height_num = $("#height").val() / 100;
    let weight_num = $("#weight").val();
    if((height_num < 1 && $('#height').val("")) || (weight_num < 1 && $('#weight').val(""))){
        $('input').prop('disabled',true);
        $('button').prop('disabled',true);
        let elem = '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
        elem += '<p>正しい数値を入力してください。</p>';
        elem += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close" onclick="lift()"></button>';
        elem += '</div>';
        $("#header").append(elem);
    }
    let bmi_num = Math.round(weight_num / (height_num ** 2) * 10) / 10;
    $('#bmi').text(bmi_num);
    if(bmi_num < 18.5){
        $('#judgement').text('痩せ');
    }
    else if(bmi_num < 25){
        $('#judgement').text('普通');
    }
    else if(bmi_num < 30){
        $('#judgement').text('肥満１度');
    }
    else if(bmi_num < 35){
        $('#judgement').text('肥満２度');
    }
    else if(bmi_num < 40){
        $('#judgement').text('肥満３度');
    }
    else if(bmi_num >= 40){
        $('#judgement').text('肥満４度');
    }
    else{
        $('#judgement').text('判定できません');
    }
};

// 削除処理
let del = () => {
    $('#height').val("");
    $('#weight').val("");
    $('#bmi').text("");
    $('#judgement').text('');
};

//アラートを削除したときの処理
let lift = () => {
    $('input').prop('disabled',false);
    $('button').prop('disabled',false);
    del();
};