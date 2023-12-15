console.log("Let's get this party started!");

//button and area selectors
const input = document.querySelector('#userInput');

const searchBtn = document.querySelector('#searchBtn');
const rmvBtn = document.querySelector('#rmvBtn');

const memeArea = document.querySelector('#memeContainer');
const images = document.querySelector('#memeContainer img');

//REQUEST FUNCTIONS
async function getMeme(input){
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    const img = document.createElement('IMG');
    img.src = (res.data.data[Math.floor(Math.random() * 50)].images.original.url);
    memeArea.appendChild(img);
}

//EVENT LISTNERS
searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    getMeme(input.value);
    input.value = "";
})
rmvBtn.addEventListener('click', function(e){
    e.preventDefault();
    location.reload()
})