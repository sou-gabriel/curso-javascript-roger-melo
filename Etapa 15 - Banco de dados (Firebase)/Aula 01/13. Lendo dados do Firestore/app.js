const gamesList = document.querySelector('[data-js="games-list"]')

const db = firebase.firestore()

db.collection('games').get()
  .then(snapshot => {
    const gamesLis = snapshot.docs.reduce((acc, doc) => {
      const { title, developedBy, createdAt } = doc.data()

      acc += `<li class="my-4">
        <h5>${title}</h5>
        
        <ul>
          <li>Desenvolvido por ${developedBy}</li>
          <li>Adicionado no banco em ${createdAt.toDate()}</li>
        </ul>
      </li>`

      return acc
    }, '')

    gamesList.innerHTML = gamesLis
  })
  .catch(err => {
    console.log(err.message)
  })