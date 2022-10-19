const sendGetRequest = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        // console.log(response.data);
        appendlist(response.data);

    } catch (err) {
        console.log(err);
    }
};

sendGetRequest();

// import {userid} from './userdata.js';

let usid = localStorage.getItem("userId");
// usid = parseInt(usid);

const appendlist = async (dataList) => {
    let html = ``;

    for (var i = 0; i < dataList.length; i++) {
        var obj = dataList[i];
        if(dataList["userId"] == usid){
            html += `<tr>`;

            var id = obj["id"];
            html += `<td> ${id} </td> `;
    
            var title = obj["title"];
            html += `<td> ${title} </td> `;
    
            var status = obj["completed"];
            if (status == true) {
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