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

// CAN USE FETCH INSTEAD OF GET
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

		html += `<td class='todo'> <a href="to-dolist.html" onClick="goto_todo(${i})"> To-Do List </a>  </td> `;
		// NOTE : above in onClick , C is capital for js 

		html += `<td class='album'> <a href="#" onClick="#"> Album </a>  </td> `;

		html += `</tr>`;
	}
	document.getElementById("data").innerHTML = html;
}

// onClick={() => goto_do(id)} , goto_todo(${i})
function goto_todo(id){
	alert("error");
	// usid = i + 1;
	// export { userid };	
	// export default userid;
	localStorage.setItem("userid", id);
	// location.replace('/to-dolist.html')
}

