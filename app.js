let getData = (url) =>

new Promise((resolve, reject) =>
fetch(url)
.then(response => response.json())
.then(json => resolve(json))
.catch(error => reject(error))
)

getData('https://fakestoreapi.com/products')
.then(data =>{
    for(let key in data){
        let value = data[key];
        let card = `
        <div class="col-lg-3">
        <div class="card mb-5">
 <img src="${value.image}" class="card-img-top" alt="...">
 <div class="card-body">
   <h5 class="card-title">${value.title}</h5>
   <p class="card-text">${value.price} </p>
   <p class="card-text">${value.description}</p>
   <a href="#" data-id="${value.id}" class="btn btn-secondary">View Information</a>
 </div>
</div>
</div>`
document.querySelector('#myCard').innerHTML += card



let pressedButton = document.querySelectorAll('[data-id]')
for(let button of pressedButton){
    button.addEventListener('click', function(){
    let id = this.getAttribute('data-id');
    localStorage.setItem('id', id);
    window.location.href  = 'details.html'
    })
}
    }
})