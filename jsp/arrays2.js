const marvelHeroes = ["loki" , "ironman" , "thor"]
const dcHeroes = ["batman" , "superman" , "wonderwoman"]

const heroes =marvelHeroes.concat(dcHeroes)
console.log(heroes)
console.log(heroes.length)
console.log(dcHeroes.pop(0))

console.log( ...marvelHeroes , ...dcHeroes) //spread operator
console.log(heroes.includes("wounderWoman")) // it will check the value is present or not

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Array.from("dinesh")) // it will convert string to array
console.log(["dinesh", "kanna"].toString()) // it will convert array to string
