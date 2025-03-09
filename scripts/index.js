const cardTemplate = document.querySelector("#card-template").content;
const cardsList = document.querySelector(".places__list");

function createCard(cardName, cardImg, imgDescription, removeItem) {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

    cardElement.querySelector(".card__title").textContent = cardName;
    cardElement.querySelector(".card__image").src = cardImg;
    cardElement.querySelector(".card__image").alt = imgDescription;

    const deleteButton = cardElement.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", removeItem);

    return cardElement;
}

function deleteCard(event) {
    const deletedItem = event.target.closest('.card');
    deletedItem.remove();
}

initialCards.forEach(function(card){
    const createdCard = createCard(card.name, card.link, card.alt, deleteCard);
    cardsList.append(createdCard);
});
