// 表の列の設定
let newElement1 = document.createElement('table');
let newElement2 = document.createElement('thead');
newElement1.appendChild(newElement2);
let newElement3 = document.createElement('tr');
newElement2.appendChild(newElement3);
let kinds = ['停車駅','のぞみ','ひかり','こだま','みずほ','さくら','つばめ'];
for (let name of kinds) {
    let newElement4 = document.createElement('th');
    newElement4.innerText = name;
    newElement3.appendChild(newElement4);
}
document.body.appendChild(newElement1);

// 表の行の設定
let newElement5 = document.createElement('tbody')
newElement1.appendChild(newElement5);
let data = (station,judgement) => {
    let newElement6 = document.createElement('tr');
    newElement5.appendChild(newElement6);
    let newElement7 = document.createElement('th');
    newElement7.innerText = station;
    newElement6.appendChild(newElement7);
    for (let mark of judgement) {
        let newElememt8 = document.createElement('td');
        newElememt8.innerText = mark;
        newElement6.appendChild(newElememt8);
    }   
}
data('☆東京',['●','●','●','✖️','✖️','✖️']);
data('☆品川',['●','●','●','✖️','✖️','✖️']);
data('☆新横浜',['●','●','●','✖️','✖️','✖️']);
data('小田原',['↓','▲','●','✖️','✖️','✖️']);
data('熱海',['↓','▲','●','✖️','✖️','✖️']);
data('三島',['↓','▲','●','✖️','✖️','✖️']);
data('新富士',['↓','↓','●','✖️','✖️','✖️']);
data('静岡',['↓','▲','●','✖️','✖️','✖️']);
data('掛川',['↓','↓','●','✖️','✖️','✖️']);
data('浜松',['↓','▲','●','✖️','✖️','✖️']);
data('豊橋',['↓','▲','●','✖️','✖️','✖️']);
data('三河安城',['↓','↓','●','✖️','✖️','✖️']);
data('☆名古屋',['●','●','●','✖️','✖️','✖️']);
data('岐阜羽島',['↓','▲','●','✖️','✖️','✖️']);
data('米原',['↓','▲','●','✖️','✖️','✖️']);
data('☆京都',['●','●','●','✖️','✖️','✖️']);
data('☆新大阪',['●','●','●','●','●','✖️']);
data('☆新神戸',['●','●','●','●','●','✖️']);
data('西明石',['▲','▲','●','↓','↓','✖️']);
data('姫路',['▲','●','●','▲','▲','✖️']);
data('相生',['↓','▲','●','↓','↓','✖️']);
data('☆岡山',['●','●','●','●','●','✖️']);
data('新倉敷',['↓','▲','●','↓','↓','✖️']);
data('福山',['▲','●','●','▲','▲','✖️']);
data('新尾道',['↓','▲','●','↓','↓','✖️']);
data('三原',['↓','▲','●','↓','↓','✖️']);
data('東広島',['↓','▲','●','↓','↓','✖️']);
data('☆広島',['●','●','●','●','●','✖️']);
data('新岩国',['↓','▲','●','↓','↓','✖️']);
data('徳山',['▲','▲','●','↓','▲','✖️']);
data('新山口',['▲','▲','●','▲','▲','✖️']);
data('厚狭',['↓','↓','●','↓','↓','✖️']);
data('新下関',['↓','▲','●','↓','▲','✖️']);
data('☆小倉',['●','●','●','●','●','●']);
data('☆博多',['●','●','●','●','●','●']);
data('新鳥栖',['✖️','✖️','✖️','↓','●','●']);
data('久留米',['✖️','✖️','✖️','▲','●','●']);
data('筑後船小屋',['✖️','✖️','✖️','↓','▲','●']);
data('新大牟田',['✖️','✖️','✖️','↓','▲','●']);
data('新玉名',['✖️','✖️','✖️','↓','▲','●']);
data('☆熊本',['✖️','✖️','✖️','●','●','●']);
data('新八代',['✖️','✖️','✖️','↓','▲','●']);
data('新水俣',['✖️','✖️','✖️','↓','▲','●']);
data('出水',['✖️','✖️','✖️','↓','▲','●']);
data('川内',['✖️','✖️','✖️','▲','●','●']);
data('☆鹿児島中央',['✖️','✖️','✖️','●','●','●']);