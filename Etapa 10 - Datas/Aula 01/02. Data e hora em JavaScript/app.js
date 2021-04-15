const present = new Date()

console.log(present)
console.log('getFullYear:', present.getFullYear())
console.log('getMonth:', present.getMonth())
console.log('getDate:', present.getDate())
console.log('getDay:', present.getDay())
console.log('getHours:', present.getHours())
console.log('getMinutes:', present.getMinutes())
console.log('getSeconds:', present.getSeconds())

console.log('timestamp:', present.getTime())

console.log('toDateString:', present.toDateString())
console.log('toTimeString:', present.toTimeString())
console.log('toLocaleString:', present.toLocaleString())