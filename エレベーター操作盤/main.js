let arrows = ["↑","↓"];
let nowFloor = 1;
let selectFloor;
let nextFloor;
let remarks = ["ドアが開きます","ドアが閉まります","お待ちください","通話中(お話ください)"];
let interID;

$(document).ready(() => {
    selectFloor = [];
    $("#display1").val("");
    $("#display2").val(nowFloor);
    $("#display3").val("");
});

let emergency = () => {
    $("#display3").val(remarks[2]);
    setTimeout(() => {
       $("#display3").val(remarks[3]);
    },5000);
};

let floorNum = (num) => {
    if(num !== nowFloor){
        if(selectFloor.includes(num) == false){
            selectFloor.push(num);
            if(selectFloor[0] > nowFloor){
                $("#display1").val(arrows[0]);
                selectFloor.sort((a,b) => (a < b ? -1 : 1));
                console.log(selectFloor);
            }
            else if(selectFloor[0] < nowFloor){
                $("#display1").val(arrows[1]);
                selectFloor.sort((a,b) => (a > b ? -1 : 1));
                console.log(selectFloor);
            }   
        }
    }
};

let doorOpen = () => {
    $("#display3").val(remarks[0]);
    setTimeout(() => {
        $("#display3").val("");
    },3000);
};

let doorClose = () => {
    $("#display3").val(remarks[1]);
    if(selectFloor.length >= 1){
        setTimeout(() => {
            let guidance = `次は${selectFloor[0]}階です`;
            $("#display3").val(guidance);
        },2000);
        move();
    }
    else{
        setTimeout(() => {
            $("#display3").val("");
        },3000);
    }
};

let move = () => {
    interID = setInterval(() => {
        if($("#display1").val(arrows[0]) && selectFloor[0] > nowFloor){
            nowFloor += 1;
        }
        else if($("#display1").val(arrows[1]) && selectFloor[0] < nowFloor){
            nowFloor -= 1;
        }
        $("#display2").val(nowFloor);
        if(selectFloor[0] === nowFloor){
            clearInterval(interID);
            interID = null;
            console.log(interID);
            selectFloor.shift();
            console.log(selectFloor);
            $("#display3").val(remarks[0]);
            setTimeout(() => {
                $("#display3").val("");
                if(selectFloor.length == 0){
                    $("#display1").val("");
                }
            },2000);
        }
    },3000);
}