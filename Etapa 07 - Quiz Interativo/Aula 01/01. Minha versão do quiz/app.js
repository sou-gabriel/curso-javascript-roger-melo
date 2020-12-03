const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['D', 'C', 'B', 'A']

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
      score += 20
    }

    return accumulator
  }, 0)
}

const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
  finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {  
  let counter = 0
  
  const setIntervalId = setInterval(() => {
    if (counter === score) {
      clearInterval(setIntervalId)
    }

    finalScoreContainer.querySelector('span').textContent = `${counter++}%`
  }, 10)
}

form.addEventListener('submit', event => {
  event.preventDefault()

  score = 0

  const userAnswers = getUserAnswers()

  calculateFinalScore(userAnswers)
  showFinalScore()
  animateFinalScore()
})