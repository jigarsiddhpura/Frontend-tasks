// import 'regenerator-runtime/runtime';
// import axios from 'axios';
// const axios = import('axios').default;

const sendGetRequest = async () => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users')
		// console.log(response.data);
		appendData(response.data);

	} catch (err) {
		console.log(err);
	}
};

sendGetRequest();

// CAN USE BELOW FETCH CODE INSTEAD OF AXIOS GET

// const sendGetRequest = async () => {
// 	try {
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 			.then(response => response.json())
// 			.then(dataList => appendData(dataList))
// 	} catch (err) {
// 		console.log(err);
// 	}
// };
// sendGetRequest();


const appendData = async (dataList) => {
	let html = ``;

	for (var i = 0; i < dataList.length; i++) {
		html += `<tr>`;
		var obj = dataList[i];

		var id = obj["id"];
		html += `<td class='userid'> ${id} </td> `;

		var name = obj["name"];
		html += `<td> ${name} </td> `;

		var username = obj["username"];
		html += `<td> ${username} </td> `;

		html += `<td class='todo'> <a href="to-dolist.html" onclick="goto_todo(${i+1})"> To-Do List </a>  </td> `;

		html += `<td class='album'> <a href="gallery.html" onclick="goto_albums(${i+1})"> Album </a>  </td> `;

		html += `</tr>`;
	}
	document.getElementById("data").innerHTML = html;
}

// onClick={() => goto_do(id)}
function goto_todo(id){
	localStorage.setItem("userid", id);
	// ANY OTHER PLACES IN THIS PROG WHERE I CAN USE LOCAL STORAGE

	// location.replace('/to-dolist.html')
}
function goto_albums(id){
	localStorage.setItem("userid", id);
}


