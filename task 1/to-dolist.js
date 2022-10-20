
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


let userid = localStorage.getItem('userid');

const appendlist = async (dataList) => {
    let html = ``;

    for (var i = 0; i < dataList.length; i++) {
        var obj = dataList[i];
        if (obj["userId"] == userid) {
            html += `<tr id='row${i+1}'>`;

            var id = obj["id"];
            html += `<td> ${id} </td> `;

            var title = obj["title"];
            html += `<td id='${id}'> ${title} </td> `;

            var status = obj["completed"];
            if (status == true) {
                html += `<td> Completed </td> `;
            }
            else {
                html += `<td> Pending </td> `;
            }

            html += `<td>  <button type="button" class="btn btn-danger" onclick=deleteTodoItem(${id})>Delete</button></td>   `
            html += `<td>  <button type="button" class="btn btn-light" onclick=editTodoItem(${id})>Edit</button> </td> `


            html += `</tr>`;
        }

    }
    document.getElementById("tdlist").innerHTML = html;
}

// const deleteTodoItem = async (id) => {
//     try{
//         const base_url = 'https://jsonplaceholder.typicode.com'
//         const response = await axios.delete(`${base_url}/todos/${id-1}`);
//         console.log(`Deleted ToDo ID: `, id);
//         return response.data;
//     }
//     catch(errors){
//         console.log(errors);
//     }
// }

// IF I MAKE BELOW FUNCTIONS ASYNC GIVES ERROR: UNEXPECTED TOKEN ')'

function deleteTodoItem(id) {
    try {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
            // headers: {
            //     'Content-type': 'application/json'
            // }
        });
        let sr_no = (id%20);
        console.log(sr_no);
        // document.getElementById("todo_table").deleteRow(sr_no);
        document.getElementById(`row${sr_no}`).remove();
        console.log(`item ${id} deleted`);

    }
    catch (errors) {
        console.log("hey jigar" + errors);
    }
}

function editTodoItem(id) {
    try {
        let idContainer = document.getElementById(id);
        let edit = prompt("Enter the update ", "Edit here");

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                "title": edit,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            // .then((json) => console.log(json));
            .then(json => {
                idContainer.innerText = `${json.title}`
            })
    }
    catch (errors) {
        console.log("hey jigar " + errors);
    }
}

