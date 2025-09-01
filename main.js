/*
Usando l'endpoint https://swapi.info/people stampa in pagina delle card carine per ciascun personaggio del film restituito dall'API. 
Bonus:
stampa la lista dei film nei quali c'e' il personaggio
stampa la lista di  astronavi se presenti.
crea delle funzioni riutilizzabili
*/

const apiEndpoint = "https://swapi.info/api/people"
const cardContainerEl = document.querySelector(".container")



// chiamata ajax
fetch(apiEndpoint)
    .then((res) => res.json())
    //nella risposta mostra array + for each
    .then((people) => {
        console.log(people)

        people.forEach(person => {
            const card = createCard(person);
            cardContainerEl.append(card);
        })

    })
    .catch((error) => console.log(error))

//funzione per creare nuova card
function createCard(person) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");

    const cardBodyEl = document.createElement("div");
    cardBodyEl.classList.add("card-body");

    const cardContainerEl = document.createElement("div");
    cardContainerEl.classList.add("cardContainerEl");

    const cardTitleEl = document.createElement("h5");
    cardTitleEl.classList.add("card-title");
    cardTitleEl.textContent = person.name;

    const cardTextEl = document.createElement("p");
    cardTextEl.classList.add("card-text");
    cardTextEl.textContent = person.film;

    cardBodyEl.appendChild(cardTitleEl);
    cardBodyEl.appendChild(cardTextEl);
    cardEl.appendChild(cardContainerEl);

}