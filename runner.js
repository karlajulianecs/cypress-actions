const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ0MTc1Yzk2LTg1NDItNDM0OC04Y2JhLWMxYjhlYTJjYWI1YS0xNzA3ODAyOTgxNDUyIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNzY5MjkyMzEtYzhhZC00MjQxLWI1NTktZmU0NDA4ZThiZmM3IiwidHlwZSI6InQifQ.QT8dvd3LWwd6bOvNkcwD278bZpv1c6bhliakdKAFX9s'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: 'TOKEN',
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
