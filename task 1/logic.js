// import 'regenerator-runtime/runtime';
// import axios from 'axios';
// const axios = import('axios').default;

// const sendGetRequest = async () => {
// 	try {
// 		const response = await axios.get('https://jsonplaceholder.typicode.com/users')
// 		console.log(response);
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

// sendGetRequest();

const sendGetRequest = async () => {
	try {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(dataList => appendData(dataList))
	} catch (err) {
		console.log(err);
	}
};
sendGetRequest();


async function appendData(dataList) {
	let html = ``;

	for (var i = 0; i < dataList.length; i++) {
		html += `<tr>`;
		obj = dataList[i];

		var id = obj["id"];
		html += `<td> ${id} </td> `;

		var name = obj["name"];
		html += `<td> ${name} </td> `;

		var username = obj["username"];
		html += `<td> ${username} </td> `;

		var email = obj["email"];
		html += `<td> ${email} </td> `;

		var street = obj["address"]["street"];
		var suite = obj["address"]["suite"];
		var city = obj["address"]["city"];
		var zipcode = obj["address"]["zipcode"];
		var lat = obj["address"]["geo"]["lat"];
		var lng = obj["address"]["geo"]["lng"];
		html += `<td> ${street},${suite},${city},${zipcode}, Lat: ${lat},Lng: ${lng},  </td> `;

		var phone = obj["phone"];
		html += `<td> ${phone} </td> `;

		var website = obj["website"];
		html += `<td> ${website} </td> `;

		var name = obj["company"]["name"];
		var catchPhrase = obj["company"]["catchPhrase"];
		var bs = obj["company"]["bs"];
		html += `<td> ${name},${catchPhrase},${bs},  </td> `;


		html += `</tr>`;

	}
	document.getElementById("data").innerHTML = html;
}
// appendData(Object);
