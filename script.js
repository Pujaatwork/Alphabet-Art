const container = document.querySelector(".main-container")
const crouselImg = document.querySelector(".crousel-img")
const dots = document.querySelectorAll(".dot")

// this veriable used for crousel images
let i = 0;
let crousel = [
   "images/crousel/crousel.jpg",
   "images/crousel/crousel2 (1).jpg",
   "images/crousel/crousel1.jpg"

]
autoplay = setInterval(function () {
   i++;
   let selectedDotId = "#dot" + i;
   let selectedDot = document.querySelector(selectedDotId);

   dots.forEach(dot => dot.style.backgroundColor = "white");
   selectedDot.style.backgroundColor = "black";
   if (i > 2)
      i = 0;
   crouselImg.setAttribute("src", crousel[i])
}, 1200);


// frontPattern=========================== is liye lgaye hai kyoki hame 6 ke bad fir se vahi pattern lana hai==

let frontPattern = [
   "pattern1", "pattern2", "pattern3", "pattern4", "pattern5", "pattern6"
]

// soundArray=============================== is liye bnaye hai taki usko pta chale ki use bolna kya hai

let soundArray = ["apple", "ball", "cat", "dog", "elephant", "fish", "goat", "horse", "iglu", "joker", "kite", "lion", "monkey", "nose", "octopus", "pig", "queen", "roket", "snace", "tiger", "umbrella", "ven", "watermellan", "x-ray", "yack", "zebra"]

// loop chala rhe hai i vala loop image ke liye chal rha hai j vala loop pattern ke liye chal rha hai and k vala loop sound ke liye chal rha hai
let alphabet;
for (let i = 65, j = 0, k = 0; i <= 90; i++, j++, k++) {
   if (j > 5)
      j = 0;
   alphabet = String.fromCharCode(i)
   let frontCard = document.createElement("div")
   let backDiv = document.createElement("div")
   container.appendChild(frontCard)
   container.appendChild(backDiv)

   // frontCard.setAttribute("class", "front-card");
   backDiv.setAttribute("class", "back-card")
   frontCard.classList.add("front-card")
   frontCard.classList.add(frontPattern[j])

   // text==============================

   let text = document.createElement("p")
   text.setAttribute("class", "text")
   frontCard.appendChild(text)
   text.innerHTML = alphabet;

   // backImg=======================================
   let imgArr = document.createElement("img")
   imgArr.setAttribute("src", `images/alphabet/${soundArray[k]}.jpg`)
   imgArr.setAttribute("class", "img-class")
   backDiv.appendChild(imgArr)

   // flipCard=================================

   let flipCard = document.createElement("div")
   flipCard.appendChild(frontCard)
   flipCard.appendChild(backDiv)
   container.appendChild(flipCard)
   flipCard.setAttribute("class", "flip-card")

   // this is for image icon in backcard
   let iconsDiv = document.createElement("div")
   iconsDiv.setAttribute("class", "icons-div")
   backDiv.appendChild(iconsDiv)
   // like(heart) icon 
   let likeIcon = document.createElement("i")
   likeIcon.classList.add("fa-regular", "fa-heart")
   iconsDiv.appendChild(likeIcon)
   // flip icon
   let flipIcon = document.createElement("i")
   flipIcon.classList.add("fa-solid", "fa-arrow-rotate-left")
   iconsDiv.appendChild(flipIcon)

   // 
   likeIcon.addEventListener("mouseover", (event) => {
      likeIcon.classList.add("fa-bounce");
      event.stopPropagation();
   })
   likeIcon.addEventListener("mouseleave", (event) => {
      likeIcon.classList.remove("fa-bounce");
      event.stopPropagation();
   })

// share icon
let shareIcon = document.createElement("i")
shareIcon.classList.add("fa-solid", "fa-share-from-square")
iconsDiv.appendChild(shareIcon)



likeIcon.addEventListener("click", (event) => {
   likeIcon.classList.toggle("fa-solid");
   likeIcon.style.color = "red"
   event.stopPropagation()
})
// ---------------spelling------------------
let word = document.createElement("p")
word.setAttribute("class", "words")
word.innerHTML = soundArray[k];
backDiv.appendChild(word);

flipCard.addEventListener("click", () => {
   flipCard.classList.toggle("flipped")


   // ye bhi samajhna hai
   let msg = new SpeechSynthesisUtterance();
   msg.text = soundArray[k];
   window.speechSynthesis.speak(msg);
   // console.log(msg)
})

}