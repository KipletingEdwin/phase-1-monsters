
const createMonster = {}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        
        const nameEl = document.getElementById('name').value
        const ageEl = document.getElementById('age').value
        const descEl = document.getElementById('desc').value
        const btn = document.getElementById('submit')
       
        // const imageInput = document.querySelector(".input-txt").value
  
        createMonster.name = nameEl
        createMonster.age = ageEl
        createMonster.description = descEl
        fetch("http://localhost:3000/monsters", {
            method: "POST",
            headers:{
            "content-type":"application/json",
            Accept: "applicaton/json"
            },
            body:JSON.stringify(createMonster)
        })
    })

    fetchMonsters()
    buttonNavigation()
})

function renderMonster(mnstr){
    const dataInfo = document.getElementById('monster-container')
    const toyCard = document.createElement('div')
    toyCard.innerHTML = `
    <h2>${mnstr.name}</h2>
    <p>${mnstr.age}</p>
    <p>${mnstr.description}</p>
    `
    dataInfo.appendChild(toyCard)
      
}

function fetchMonsters(){
    fetch("http://localhost:3000/monsters/?_limit=50&")
    .then(res => res.json())
    .then(monstData => monstData.forEach(monster => renderMonster(monster)))
}