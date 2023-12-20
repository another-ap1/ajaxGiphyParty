console.log("Let's get this party started!");
/*
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
*/
//////////////////WRITTEN WITH JQUERY/////////////////////////////////////////////////////////

const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"

const $input = $('#userInput');

const $searchBtn = $('#searchBtn')
const $rmvBtn = $('#rmvBtn');

const $memeArea = $('#memeContainer');
const $images = $('#memeContainer img');

async function getMeme(input) {
    const res = await axios ({
        baseURL : "http://api.giphy.com/",
        url : "v1/gifs/search",
        Method : "GET",
        params : {
            q : input,
            api_key : API_KEY,
        }
    })
    
    let img = res.data.data[Math.floor(Math.random() * 50)].images.original.url;
    const $randomMeme = $(`<img src="${img}">`);
    $memeArea.append($randomMeme);

}

$searchBtn.click(function(e){
    e.preventDefault()
    getMeme($input.val());
    $input.val("");
})

$rmvBtn.click(function(e){
    location.reload();
})