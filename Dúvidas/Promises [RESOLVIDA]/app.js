const getTodos = () => {
  return new Promise((resolve) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        resolve(request.responseText)
      }
    })

    request.open('GET', './todos.json')
    request.send()
  })
}

console.log(1)
console.log(2)

const makeQuerablePromise  = promise => {
  if (promise.isResolved) {
    return promise
  }

  let isPending = true
  let isRejected = false
  let isFulfilled = false

  const result = promise
    .then(v => {
      isFulfilled = true
      isPending = false

      return v 
    })
    .catch(e => {
      isRejected = true
      isPending = false
      
      throw e
    })

  result.isFulfilled = function () { return isFulfilled }
  result.isPending = function () { return isPending }
  result.isRejected = function () { return isRejected }

  return result
}

const originalPromise = getTodos()
const myPromise = makeQuerablePromise(originalPromise)

console.log("fulfilled:", myPromise.isFulfilled())
console.log("rejected:", myPromise.isRejected())
console.log("pending:", myPromise.isPending())

myPromise.then(data => {
  console.log(data)
  console.log('fulfilled:', myPromise.isFulfilled())
  console.log('rejected:', myPromise.isRejected())
  console.log('pending:', myPromise.isPending())
})

console.log(3)
console.log(4)