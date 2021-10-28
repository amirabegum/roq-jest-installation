const index = require('./index')

//creating a variable called amira in this file based from another 
let amira = index.amira 

test('that amira is called amira', () => {
    expect(amira.name).toBe('amira')
})

