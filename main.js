/*
Usando l'endpoint https://swapi.info/people stampa in pagina delle card carine per ciascun personaggio del film restituito dall'API. 
Bonus:
stampa la lista dei film nei quali c'e' il personaggio
stampa la lista di  astronavi se presenti.
crea delle funzioni riutilizzabili
*/

const apiEndpoint = "https://swapi.info/api/people"

// chiamata ajax
fetch(apiEndpoint)
    .then((res) => res.json())
    //nella risposta mostra nomi dei personaggi + for each
    .then((people) => {
        console.log(people)
        people.forEach(people => {
            const li = document.createElement("li");
            li.textContent = people.name;
            const characterListEl = document.getElementById("characterList")
            characterListEl.appendChild(li)
            console.log(people.name)
        })
    })
    .catch((error) => console.log(error))
