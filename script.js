// Generating random cards
const cards = ['AceSpades', 'JackClubs', 'KingHearts', 'QueenDiamonds'];
const cardFronts = document.querySelectorAll(".front");

cardFronts.forEach((card) => {
  const randomCardIndex = Math.floor(Math.random() * cards.length);

  card.style.backgroundImage = `url('./images/card-${cards[randomCardIndex]}.png')`;
  if (cards[randomCardIndex] === "AceSpades"){
    card.parentElement.parentElement.classList.add("winner");
  }

  cards.splice(randomCardIndex, 1);
})

//Flipping cards on click and checking for winner card
const msgBox = document.querySelector(".game-msg-box");
const cardContainers = document.querySelectorAll('.card-container');

cardContainers.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle("clicked");

    cardContainers.forEach((eachcard) => {
      eachcard.style.pointerEvents = "none";
    })

    if (card.classList.contains("winner")){
      msgBox.innerText = "You Win!!!";
      setTimeout(() => {
        location.reload();
      }, 2000);
    } else {
      msgBox.innerText = "Try again...";
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  });
})