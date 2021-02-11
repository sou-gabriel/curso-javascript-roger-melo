const form = document.querySelector('.quiz-form')

const correctAnswers = ['B', 'B', 'B', 'B']

form.addEventListener('submit', event => {
  event.preventDefault()

  let score = 0
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]

  userAnswers.forEach((userAnswer, index) => {
    if (userAnsweform.inputQuestion1.value,r === correctAnswers[index]) {
      score += 25
    }
  })

  console.log(score)
})