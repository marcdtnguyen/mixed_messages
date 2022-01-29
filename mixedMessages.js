function mixedMessages(){
    const messages = ['The road seems bright ahead. Proceed with gusto!', 'The road is murky. Proceed with caution.', 'The road is dark ahead. It\'s best to turn back.']
    const randomNumber = getRandom(messages.length);
    return messages[randomNumber];
}

function getRandom(length){
    return Math.floor(Math.random()*length);
}

console.log(mixedMessages());