const sendGetRequest = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        // console.log(response.data);
        appendData(response.data);

    } catch (err) {
        console.log(err);
    }
};

sendGetRequest();

import {userid} from './userdata.js';
let usid = userid;

const appendData = async (dataList) => {
    let html = ``;

    for (var i = 0; i < dataList.length; i++) {
        if(dataList["userId"] == usid){
            html += `<tr>`;
            obj = dataList[i];
    
            var id = obj["id"];
            html += `<td> ${id} </td> `;
    
            var title = obj["title"];
            html += `<td> ${title} </td> `;
    
            var username = obj["completed"];
            if (username == 'true') {
                html += `<td> Completed </td> `;
            }
            else{
                html += `<td> Pending </td> `;
            }
    
    
            html += `</tr>`;
        }

    }
    document.getElementById("tdlist").innerHTML = html;
}