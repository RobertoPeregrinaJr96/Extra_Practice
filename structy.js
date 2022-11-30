/*
Prompt -- 003 max-value
    - has a linear run time
    - is O(n)
    - constant space complexity
*/
const maxValue = (nums) => {
    let maximum = -Infinity;
    // our for loop is our runtime
    for (let num of nums) {
        // our iteration is constant in time
        if (num > maximum) maximum = num;
    }

    return maximum;
};

/*
Prompt -- 004 is prime
    - has linear run time
    -is 0(n)
    - constant space complexity
*/

const isPrime = (n) => {
    // our conditional is constant
    if (n < 2) return false;
    // our for loop is our runtime
    for (let i = 2; i <= Math.sqrt(n); i += 1) {
        // our conditional is constant
        if (n % i === 0) return false;
    }

    return true;
};

/*
Prompt -- 006 uncompress
*/
const uncompressed = (s) => {
    const number = '123456789'
    const result = []
    let i = 0;
    let j = 0;
    while (j < s.length) {
        if (number.includes(s[j])) {
            j += 1
        } else {
            const num = Number(s.slice(i, j))
            for (let count = 0; count < num; count += 1) {
                result.push(s[j])
            }
            j += 1
            i = j
        }
    }
    return result.join('')
}

console.log(uncompressed("2c13a1t"));
