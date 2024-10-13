// index.js
fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(data => {
  console.log(data)
  data.forEach(ramen => {
    displayRamens(ramen)
    })

  })
  .catch(err => console.log(err))

// Callbacks
function handleClick(ramen) {
    let ramenDetail = document.getElementById("ramen-detail")
    ramenDetail.innerHTML = `
    <img src=${ramen.image}>
    <h2>${ramen.name}</h2>
    <h3>${ramen.restaurant}</h3>
    `
}

const addSubmitListener = () => {
  // Add code
  let plusRamen = document.getElementById("new-ramen")
  plusRamen.addEventListener("submit", (e) => {
    e.preventDefault()

    const newRamen = new FormData(e.target)
    const freshRamen = {
      name:newRamen.get("name"),
      restaurant:newRamen.get("restaurant"),
      image:newRamen.get("image"),
      rating:newRamen.get("rating"),
      comment:newRamen.get("comment")
    }
    fetch("http://localhost:3000/ramens", {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
        },
        body: JSON.stringify(freshRamen)
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => console.log(error))
  })
}

function displayRamens(ramen) {
  let theRamen = document.createElement("div")
  theRamen.innerHTML = `
  <img src=${ramen.image}>
  <p>${ramen.name}</p>
  `
  let ramenMenu = document.getElementById("ramen-menu")
  ramenMenu.appendChild(theRamen)
  let imge = theRamen.querySelector("img")
  imge.addEventListener("click", () => {
    handleClick(ramen)
  })
}


const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
