const sentence = "What is the most common character in this sentence";

const charObj = (array) => {
    let result = {}
    let arr = array.filter(char => char !== ' ')
    for (let element of arr) {
        if (result[element] === undefined) result[element] = 1
        else { result[element]++ }
    }
    return result
}

const maxChar = (obj) => {
    let maximum = -Infinity
    let result = ''
    let values = Object.values(obj)
    let keys = Object.keys(obj)
    for (let i = 0; i < values.length; i++) {

        let value = values[i]
        let key = keys[i]

        if (value > maximum) {
            maximum = value
            result = key
        }

    }
    return result
}

const leastChar = obj => {

    let least = Infinity
    let result = ''
    let values = Object.values(obj)
    let keys = Object.keys(obj)
    for (let i = 0; i < values.length; i++) {

        let value = values[i]
        let key = keys[i]

        if (value < least) {
            least = value
            result = key
        }
    }
    return result
}

const mostCommonChar = sentence => {
    // Write your solution here.
    let arr = sentence.split('')
    let obj = charObj(arr)
    let most = maxChar(obj)
    return most
}

const leastCommonChar = sentence => {
    let arr = sentence.split('')
    let obj = charObj(arr)
    let least = leastChar(obj)
    return least
}

console.log(mostCommonChar(sentence));           //  "t"
console.log(leastCommonChar(sentence))
