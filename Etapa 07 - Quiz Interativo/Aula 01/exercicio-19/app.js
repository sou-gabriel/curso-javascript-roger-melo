const form = document.querySelector('form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['A', 'D', 'B', 'C']

let score = 0

const getUserAnswers = () => {
  const userAnswers = correctAnswers.map((_, index) => {
    return form[`inputQuestion${index + 1}`].value
  })
  
  return userAnswers
}

const calculateFinalScore = userAnswers => {
  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25
    }
  })
}

const showFinalScore = () => {
  if (finalScoreContainer.classList.contains('d-none')) {
    finalScoreContainer.classList.remove('d-none')
  }

  scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

const animateFinalScore = () => {
  let counter = 0

  const setIntervalId = setInterval(() => {
    if (counter === score) {
      clearInterval(setIntervalId)
    }

    finalScoreContainer.querySelector('span').textContent = `${counter++}%`
  }, 15)
}

const clearScore = () => score = 0

form.addEventListener('submit', event => {
  event.preventDefault()

  const userAnswers = getUserAnswers()

  clearScore()
  calculateFinalScore(userAnswers)
  showFinalScore()
  animateFinalScore()
})