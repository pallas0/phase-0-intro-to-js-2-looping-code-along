// Code your solutions in this file

function writeCards(arrayNames, eventName) {
    const newArray = [];
    for (let i = 0; i < arrayNames.length; i++) {
        newArray[i] = `Thank you, ${arrayNames[i]}, for the wonderful ${eventName} gift!`
    }
    return newArray;
}


function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}
