const cardsContainer = document.querySelector('#cards-container');
const form = document.querySelector('form');

const baseURL = 'http://localhost:4000/cards'

const cardsCallback = ({data: cards}) => displayCards(cards)
const errCallback = err => console.log(err)

const getAllCards = () => axios.get(baseURL).then(cardsCallback).catch(errCallback)
const addCard = body => axios.post(baseURL, body).then(cardsCallback).catch(errCallback)
const deleteCard = id => axios.delete(`${baseURL}/${id}`).then(cardsCallback).catch(errCallback)
const updateCard = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(cardsCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let rating = document.querySelector('input[name="ratings"]:checked')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        name: name.value,
        rating: rating.value, 
        imageURL: imageURL.value
    }

    addCard(bodyObj)

    name.value = ''
    rating.checked = false
    imageURL.value = ''
}

function addCardsCard(card) {
    const cardsCard = document.createElement('div')
    cardsCard.classList.add('cards-card')

    cardsCard.innerHTML = `<img alt='card cover' src=${card.imageURL} class="card-cover"/>
    <p class="card-name">${card.name}</p>
    <div class="btns-container">
        <button onclick="updateCard(${card.id}, 'minus')">-</button>
        <p class="card-rating">${card.rating} stars</p>
        <button onclick="updateCard(${card.id}, 'plus')">+</button>
    </div>
    <button class="deleteCardBtn" onclick="deleteCard(${card.id})">Delete</button>
    `


    cardsContainer.appendChild(cardsCard)
}

function displayCards(arr) {
    cardsContainer.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        addCardsCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllCards()

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Time to Duel!');
}

let cards = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let quotes = [
"If you cant understand the darkness in your opponents heart, you will never understand the pain and suffering of others",
"The gift of kindness you have given and the courage I have given you will remain with us, and that will forever bind us together",
"My friends are never a waste of time", 
"It is not always about being number one. It is about dueling with bravery, honor, and respect! And most importantly, putting the needs of others ahead of your own!",
"My grandfathers deck has no pathetic cards, Kaiba. But it does contain… the unstoppable Exodia!",
"If you worship something enough, random chance suddenly becomes the will of all-powerful, supernatural forces",
"You have fought a valiant duel, my friend, and this is the hardest move I have ever had to make",
"If there is the will, then there is hope",
"It will do no good to fight with hate in your heart"
]

function newQuote() {
let randomNumber = Math.floor(Math.random() * (quotes.length))
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]
}

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const modal = document.getElementById('emial-model');
const openBtn = document.querySelector('.main-Btn')
const closeBtn = document.querySelector('.close-btn')

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
})