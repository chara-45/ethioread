  let cardsData = JSON.parse(localStorage.getItem("cards")) || [];
  let currentIndex = null;

  function saveToStorage() {
    localStorage.setItem("cards", JSON.stringify(cardsData));
  }

  function showForm() {
    document.getElementById("form").style.display = "block";
    document.getElementById("btnI").style.display = "none";
    
  }
function cancelcard(){
     document.getElementById("form").style.display = "none";
       document.getElementById("btnI").style.display = "block";
}
  function saveCard() {
    let name = document.getElementById("name").value;
    let topic = document.getElementById("topic").value;

    if (!name || !topic) return;

    cardsData.push({ name, topic, note: "" });
    saveToStorage();
    renderCards();

    document.getElementById("name").value = "";
    document.getElementById("topic").value = "";
    document.getElementById("form").style.display = "none";
       document.getElementById("btnI").style.display = "block";
  }

  function renderCards() {
    let container = document.getElementById("cards");
    container.innerHTML = "";

    cardsData.forEach((cardData, index) => {
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<b>${cardData.name}</b><br>${cardData.topic}`;

      card.onclick = function() {
        currentIndex = index;

        document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
        card.classList.add("active");

        document.getElementById("noteArea").style.display = "block";
        document.getElementById("noteTitle").innerText =
          cardData.name + " - " + cardData.topic;

        document.getElementById("noteText").value = cardData.note;
            document.getElementById("form").style.display = 'none'
   document.getElementById("main").style.display = 'none'
      };

      container.appendChild(card);
    });
  }

  function saveNote() {
    if (currentIndex === null) return;

    cardsData[currentIndex].note =
      document.getElementById("noteText").value;

    saveToStorage();
    alert("Saved ✅");
         document.getElementById("noteArea").style.display = "none";
            document.getElementById("btnI").style.display = "block";
            renderCards()
             document.getElementById("main").style.display = 'block'
  }
function deleteCard() {
  if (currentIndex === null) return;

  // remove 1 item from array
  cardsData.splice(currentIndex, 1);

  saveToStorage();   // save changes
  renderCards();     // refresh UI

  // reset UI
  document.getElementById("noteArea").style.display = "none";
  currentIndex = null;
     document.getElementById("btnI").style.display = "block";
     renderCards()
     document.getElementById("main").style.display = 'block'
}
  // load cards when page opens
  renderCards();