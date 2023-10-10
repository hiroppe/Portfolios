// 計算処理
let calc = () => {
    let petrolPrice = $('#petrol').val();
    let mile = $('#mileage').val();
    let fuelConsumption = $('#fuel').val();
    if((petrolPrice < 1 && $('#petrol').val("")) || (mile < 1 && $('#mileage').val("")) || (fuelConsumption < 1 && $('#fuel').val(""))){
        $('input').prop('disabled',true);
        $('button').prop('disabled',true);
        let elem = '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
        elem += '<p>正しい数値を入力してください。</p>';
        elem += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close" onclick="lift()"></button>';
        elem += '</div>';
        $("#header").append(elem);
    };
    let result = Math.floor(petrolPrice * mile / fuelConsumption);
    $("#fee").text(result);
};

// 削除処理
let del = () => {
    $('#petrol').val("");
    $('#mileage').val("");
    $('#fuel').val("");
    $("#fee").text("");
};

//アラートを削除したときの処理
let lift = () => {
    $('input').prop('disabled',false);
    $('button').prop('disabled',false);
    del();
};