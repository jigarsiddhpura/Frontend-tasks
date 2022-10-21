const sendGetRequest = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
        // console.log(response.data);
        appendlist(response.data);

    } catch (err) {
        console.log(err);
    }
};

sendGetRequest();

let albumId = localStorage.getItem("userid");
console.log(albumId);

const appendlist = async (photoList) => {
    
    var html = `<div class="container">
    <div class="row row-cols-4">`;

    for (var i = 0; i < photoList.length; i++) {
        var obj = photoList[i];
        if (obj["albumId"] == albumId) {


            var url = obj["url"];
            var title = obj["title"];

            html += `
            <div class="col">
            <div class="card m-1" style="width: 18rem;">
            <img src="${url}" class="card-img-top" alt="image1" style="display:inline;">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                </div>
                </div>
            </div>`

        }
        else {
            console.log("in else");
        }
        
    }
    html += `
        </div>
    </div>`
    document.getElementById("albums").innerHTML = html;
}