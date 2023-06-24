console.log("main.js!!");

$(document).ready(() => {
    const option = {responseType: "blob"};
    axios.get("./data.json", option).then(res=>{
	    res.data.text().then(str=>{
			let arr = JSON.parse(str);

            // ・1924年〜1974年のデータを取得
            arr.dataList1.forEach((obj) => {
                let element = '<tr>';
                element += `<th scope="row">` + obj.ad + `</th>`;
                if(Array.isArray(obj.jc)){
                    element += `<td>`;
                    element += `<p>` + obj.jc[0] + `</p>`;
                    element += `<p>` + obj.jc[1] + `</p>`;
                    element += `</td>`;
                }
                else{
                    element += `<td>` + obj.jc + `</td>`;
                }
                element += `<td>` + obj.age + "歳" + `</td>`;
                element += `<td>` + obj.zoidac + `</td>`;
                element += `</tr>`;
                $('#one').append(element);
            });

            // ・1975年〜2023年のデータを取得
            arr.dataList2.forEach((obj) => {
                let element = '<tr>';
                element += `<th scope="row">` + obj.ad + `</th>`;
                if(Array.isArray(obj.jc)){
                    element += `<td>`;
                    element += `<p>` + obj.jc[0] + `</p>`;
                    element += `<p>` + obj.jc[1] + `</p>`;
                    element += `</td>`;
                }
                else{
                    element += `<td>` + obj.jc + `</td>`;
                }
                element += `<td>` + obj.age + "歳" + `</td>`;
                element += `<td>` + obj.zoidac + `</td>`;
                element += `</tr>`;
                $('#two').append(element);
            });
        });
    }).catch(err=>{
	    console.log("表示できません。");
    });
})