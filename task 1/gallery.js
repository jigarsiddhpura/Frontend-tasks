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
// console.log(albumId);

const appendlist = async (photoList) => {
    let html = ``;

    // for (var i = 0; i < 50; i++) {
        var obj = photoList[0];
        // if(photoList["userId"] == albumId){

            var url = obj["url"];
            // html += `<img src=${url} class="img-thumbnail" alt="image">`;
            // var album = document.getElementsByClassName('albums');
            // var img = document.createElement('img');
            // img.src = url;
            // document.getElementById('body').appendChild(img);



            var title = obj["title"]; 
            html += `${title} `;
    
        // }
        // else{
        //     i--;
        // }

    // }
    document.getElementsByClassName("albums").innerHTML = html;
}