
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
            html += `<tr id='row${i + 1}'>`;

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

// IF I MAKE BELOW FUNCTIONS ASYNC GIVES ERROR: UNEXPECTED TOKEN ')'

function deleteTodoItem(id) {
    try {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
            // headers: {
            //     'Content-type': 'application/json'
            // }
        });
        let sr_no = (id % 20);
        console.log(sr_no);
        document.getElementById("todo_table").deleteRow(sr_no);
        // document.getElementById(`row${sr_no}`).remove();

        // UNABLE TO USE GETELEMENTSBYCLASSNAME ABOVE
        console.log(`item ${id} deleted`);

    }
    catch (errors) {
        console.log("hey jigar " + errors);
    }
}

// if( ('#flexCheckDefault').is(':checked') ) {
//     console.log("works");
// }

let checkbox = document.getElementById("flexCheckDefault");
checkbox.addEventListener( "change" , () => {
    if (checkbox.checked) {
        t = document.getElementById("todo_table").rows.length;
        console.log(t);
        for (var i = 0; i < 20; i++) {
            rnum = t.getElementsByTagName("tr")[i];
            cnum = rnum.getElementsByTagName("td")[2];
            if(cnum == false){
                console.log(i);
            }

        }

    }
    else{
        console.log("ooops");
    }
})

const edit_prompt = async () => {
    const ipAPI = '//api.ipify.org?format=json'

    const inputValue = fetch(ipAPI)
        .then(response => response.json())
        .then(data => data.ip)

    const { value: new_todo } = await Swal.fire({
        title: 'Enter your new To-do item',
        input: 'text',
        inputLabel: 'To-do item',
        inputValue: inputValue,
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to write something!'
            }
        }
    })

    if (new_todo) {
        Swal.fire(`Updated To-do : ${new_todo}`)
    }
    return new_todo;
}


function editTodoItem(id) {
    try {
        let idContainer = document.getElementById(id);
        let edit = edit_prompt();
        edit.then(
            result => {  
                fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                "title": result,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(json => {
                idContainer.innerText = `${json.title}`
            })
            }
        );


        
    }
    catch (errors) {
        console.log("hey jigar " + errors);
    }
}

