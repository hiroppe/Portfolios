// 計算処理
let calc = () => {
    let excluded_num = $('#number').val();
    if(excluded_num < 1 && $('#number').val("")){
        $('input').prop('disabled',true);
        $('button').prop('disabled',true);
        let elem = '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
        elem += '<p>正しい数値を入力してください。</p>';
        elem += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close" onclick="lift()"></button>';
        elem += '</div>';
        $("#header").append(elem);
    }
    let included_num;
    if($('input:radio[name="select"]:checked').val() === "８％"){
        included_num = Math.floor(excluded_num * 1.08);
    }
    else if($('input:radio[name="select"]:checked').val() === "１０％"){
        included_num = Math.floor(excluded_num * 1.1);
    }
    let consumption_num = included_num - excluded_num;
    $("#excluded").text(excluded_num);
    $("#consumption").text(consumption_num);
    $('#included').text(included_num);
};

// 削除処理
let del = () => {
    $('#number').val("");
    $("#excluded").text("");
    $("#consumption").text("");
    $('#included').text("");
};

//アラートを削除したときの処理
let lift = () => {
    $('input').prop('disabled',false);
    $('button').prop('disabled',false);
    del();
};