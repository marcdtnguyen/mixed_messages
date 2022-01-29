function mixedMessages(){
    const messages = {
        way: ['path', 'road', 'trail', 'way'],
        description: ['bright', 'murky', 'dark'],
        proceeding: ['gusto', 'caution', 'care']
    }
    const way = messages.way[getRandom(messages.way.length)]
    const description = messages.description[getRandom(messages.description.length)]
    const proceeding = messages.proceeding[getRandom(messages.proceeding.length)]
    return `The ${way} is ${description} ahead. Proceed with ${proceeding}!`

}



function getRandom(length){
    return Math.floor(Math.random()*length);
}

console.log(mixedMessages());