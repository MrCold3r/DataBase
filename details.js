let myId = localStorage.getItem('id')

function getUrl(){
let myData =  fetch('https://fakestoreapi.com/products/' + myId);

return myData;
}

let cardDetails = async () => {
getUrl()
.then(response => response.json())
.then(post =>{
    $('#prCard').append('<img src="'+ post.image + '"class="card-img-top" style="height:600px; width:400px"></img>' );
    $('#prCard').append('<h5 class="card-title">'+ post.title +'</h5>' );
    $('#prCard').append('<p class="card-text">'+ post.description+'</p>' );
    $('#prCard').append('<p class="card-text">'+ post.price+'</p>' );
    
})
};
cardDetails();