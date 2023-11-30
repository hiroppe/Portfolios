let num1 = "";
let num2 = "";

$(document).ready(() => {
    
});

let add = (numStr) => {
    // 結果が表示されている場合は何もしない
    if ($("#result").val() !== '') {
        return;
    }

    // formulaが未入力の場合は小数点の入力を無効にする
    if ($("#formula").val() === '' && numStr === '.') {
        return;
    }

    // formulaが未入力の場合
    if ($("#formula").val() === '') {
        // 入力が0の場合、1回まで受け付ける
        if (numStr === '0' && num1 !== '0') {
            num1 += numStr;
            $("#formula").val(num1);
        } else if (numStr === '00') {
            // 00の場合は無効
            return;
        } else {
            num1 += numStr;
            $("#formula").val(num1);
        }
    } else if (num1 === '0' && numStr.match(/[1-9]/)) {
        // formulaが0で始まっており、かつ次に入力されるのが1〜9の場合は無効
        return;
    } else {
        // formulaの最後の文字が演算子で、かつnumStrも演算子の場合はnum1を更新
        let lastChar = $("#formula").val().slice(-1);
        if (['+', '-', '✖️', '➗'].includes(lastChar) && ['+', '-', '✖️', '➗'].includes(numStr)) {
            num1 = num1.slice(0, -1) + numStr;
            $("#formula").val(num1);
        } else if (['+', '-', '✖️', '➗'].includes(lastChar) && (numStr === '00' || numStr === '.')) {
            // 演算子の後に00や小数点の場合は無効
            return;
        } else {
            // formulaの最後の文字が演算子で、かつnumStrが小数点の場合は何もしない
            if (['+', '-', '✖️', '➗'].includes(lastChar) && numStr === '.') {
                return;
            }

            // formulaにすでに小数点が含まれている場合は無効
            if (numStr === '.' && num1.includes('.')) {
                return;
            }

            num1 += numStr;
            $("#formula").val(num1);
        }
    }
}

let del = (delStr) => {
    if(delStr == "AC"){
        num1 = "";
        num2 = "";
        $("#formula").val(num1);
        $("#result").val(num1);
    }
    else if(delStr == "C"){
        num1 = "";
        $("#formula").val(num1);
    }
    else if(delStr == "←"){
        num1 = num1.slice(0, -1);
        $("#formula").val(num1);
    }
};

let result = () => {
    // formulaの値が文字型の場合は数値型に変換
    let formulaValue = $("#formula").val();
    let operand1 = parseFloat(num1);

    // formulaの値が文字型の演算子をJavaScriptの演算子に変換
    formulaValue = formulaValue.replace('✖️', '*').replace('÷', '/');

    // 演算処理
    let calculatedResult;

    // formulaの値が文字型の場合は計算処理を行う
    if (!isNaN(operand1)) {
        try {
            // 許可された演算子のみをサポート
            calculatedResult = new Function('return (' + formulaValue + ')')();
            num1 = calculatedResult; // 結果をnum1に格納
            num2 = calculatedResult; // 結果をnum2に格納
        } catch (error) {
            $("#result").val("Error");
            return;
        }
    } 
    else {
        // formulaの値が数値型の場合はそのまま表示
        $("#result").val(operand1);
        return;
    }

    // 結果をresultテキストボックスに表示
    $("#result").val(calculatedResult);
};
