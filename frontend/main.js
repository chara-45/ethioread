
const sideOpen = document.querySelector('.a2')
const sideclose = document.querySelector('.close')
const side= document.querySelector('.sidenav')
sideOpen.addEventListener('click', () => {
   side.style.display = 'flex'
})
sideclose.addEventListener('click', () => {
   side.style.display = 'none'
})
 const quotes = [
  "A reader lives a thousand lives before he dies. — George R. R. Martin",
"“So many books, so little time.” — Frank Zappa",
"“A room without books is like a body without a soul.” — Marcus Tullius Cicero",
"“Reading is essential for those who seek to rise above the ordinary.” — Jim Rohn",
"“Today a reader, tomorrow a leader.” — Margaret Fuller",
"“Books are a uniquely portable magic.” — Stephen King",
"“Once you learn to read, you will be forever free.” — Frederick Douglass"
];

function showQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];
}
const bookes = ['<img src="bookimg/phy.jpg"/>','<img src="bookimg/astronomy.jpg"/>','<img src="bookimg/cheme.jpg"/>','<img src="bookimg/chem.jpg"/>']
setInterval(function() {
  const newbook = Math.floor(Math.random() * bookes.length);
  document.querySelector(".bookes").innerHTML = bookes[newbook];
},1800)
const mode = document.querySelector('.Button')
const body = document.querySelector('body')


mode.addEventListener('click', () => {
    if (mode.textContent === "Dark mode") {
        body.style.backgroundColor = "black"
        mode.textContent = "Light mode"
    } else {
        body.style.backgroundColor = "white"
        mode.textContent = "Dark mode"
    }
})
