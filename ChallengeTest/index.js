const favouriteFood= ['Pizza', 'Chips', 'Burger', 'Lasagne']

//see an item in the array

console.log(favouriteFood[3])


//shows all items in the array

console.table(favouriteFood)



//adds on the end of the array

favouriteFood.push('Pasta', 'Chicken Wrap');

console.table(favouriteFood)



//dont need to specify whats being removed. pop removes last item of the array

favouriteFood.pop()

console.table(favouriteFood)



//adds to the start of the array

favouriteFood.unshift('Beans on Toast ')

console.table(favouriteFood)



//checks the length of the array

console.log(favouriteFood.length)



//splice asks for start location and how many to be removed

favouriteFood.splice(1,1)



console.table(favouriteFood)

module.exports = {
    
}