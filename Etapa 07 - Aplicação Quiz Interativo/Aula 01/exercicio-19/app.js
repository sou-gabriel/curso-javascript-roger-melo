const form = document.querySelector('[data-js="quiz-form"]')
const finalScoreContainer = document.querySelector('[data-js="final-score-container"]')

const correctAnswers = ['A', 'C', 'D', 'B']

let score = 0

const getUserAnswers = () => correctAnswers
  .map((_, index) => form[`inputQuestion${index + 1}`].value)

const calculateUserScore = userAnswers => {
  userAnswers.forEach((userAnswer, index) => {
    const isACorrectAnswer = userAnswer === correctAnswers[index]

    if (isACorrectAnswer) {
      score += 25
    }
  })
}

const showFinalScore = () => {
  scrollTo({ 
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
  })  
  finalScoreContainer.classList.remove('section--hide')
}

const animateFinalScore = () => {
  let counter = 0

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }

    finalScoreContainer.querySelector('span').textContent = `${counter++}%`
  }, 20)
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const userAnswers = getUserAnswers()
  
  calculateUserScore(userAnswers)
  showFinalScore()
  animateFinalScore()
})