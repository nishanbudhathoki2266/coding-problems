const reverseString = (str) => {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }

    return reversedStr;
}

// console.log(reverseString("REVERSE"));

const checkPalindrome = (str) => {
    const strArray = str.toLowerCase().split('');
    const reversedStrArray = [];

    for (i = strArray.length - 1; i >= 0; i--) {
        reversedStrArray.push(strArray[i]);
    }

    if (reversedStrArray.join('') === str.toLowerCase()) {
        return "Palindrome";
    }
    else {
        return "Non-palindrome";
    }
}


// console.log(checkPalindrome('TEST'));

const calculateVowelsAndConsonants = (str) => {
    const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    let vowels = 0;
    // let consonants = 0;

    vowelsArray.forEach(vowel => {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === vowel) {
                vowels++;
            }
        }
    })

    return `${vowels} vowels and ${str.length - vowels} consonants`
}

// console.log(calculateVowelsAndConsonants('aeiou'));

const returnDuplicateNumberCount = (arr) => {
    const repetitionCount = {};

    for (let i = 0; i < arr.length; i++) {
        repetitionCount[arr[i]] = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i === j) continue;

            if (arr[i] === arr[j]) {
                repetitionCount[arr[i]] += 1;
            }
        }
    }
    return repetitionCount;
}


// console.log(returnDuplicateNumberCount([2, 2, 3, 3, 4, 5, 6, 7, 8, 8]));

// lengthy process
const getSecondHighest = (arr) => {
    let highest = 0;
    let highestIndex = 0;
    let secHighest = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
            highestIndex = i;
        }
    }

    arr.splice(highestIndex, 1);

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > secHighest) {
            secHighest = arr[i];
        }
    }

    return secHighest;


}

// console.log(getSecondHighest([0, 2, 3, 4, 5, 6, 100, 1]));

const replaceAllOccurences = (str, alphabet) => {
    const updatedStr = str.replaceAll(alphabet, "");
    return updatedStr;
}

// console.log(replaceAllOccurences('hellofromtheothersidelol', 'l'));

const sum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// console.log(sum([1, 2, 3, 4, 5, 5, 6]));


const checkAnagrams = (str1, str2) => {
    const str1Arr = str1.split('');
    const str2Arr = str2.split('');

    if (str1Arr.sort().join('') === str2Arr.sort().join('')) {

        return true;
    }

    return false;

}

// console.log(checkAnagrams('hello', 'oelslh'));

const countVowelsConsonants = (str) => {
    let vowelCount = 0;

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i <= vowels.length - 1; i++) {
        for (let j = 0; j <= str.length - 1; j++) {
            if (str[j] === vowels[i]) {
                vowelCount++;
            }
        }
    }

    return { vowels: vowelCount, consonants: str.length - vowelCount };
}


// console.log(countVowelsConsonants('aeious'));

const matchedNums = (arr1, arr2) => {
    const matchedNumbers = [];
    for (let i = 0; i <= arr1.length - 1; i++) {
        for (let j = 0; j <= arr2.length - 1; j++) {
            if (arr1[i] === arr2[j]) {
                matchedNumbers.push(arr1[i]);
            }
        }
    }


    return new Set(matchedNumbers);
}


// console.log(matchedNums([1, 2, 3, 3, 5], [1, 3, 6]));

const getMacthingElement = (arr) => {
    const matchedElements = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j <= arr.length - 1; j++) {
            if (i === j) continue;

            if (arr[i] === arr[j]) {
                matchedElements.push(arr[i])
            }
        }
    }
    return new Set(matchedElements);
}


// console.log(getMacthingElement([4, 1, 2, 3, 3, 4, 5, 2]));

const bubbleSort = (arr) => {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j <= length; j++) {
            if (i === j) continue;

            if (arr[j] > arr[i]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;

}


// console.log(bubbleSort([2222, 0, 1, 2, 7, 6, 4, 9, 12]));

const findSecondLargest = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) continue; // Just making sure the same number of same index aren't compared

            if (arr[j] > arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr[arr.length - 2];
}

// console.log(findSecondLargest([2222, 111, 0, 1, 2, 7, 6, 4, 9, 12]));


const findSecondLargestString = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) continue; // Just making sure the same number of same index aren't compared

            if (arr[j] > arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr[arr.length - 2];
}

// console.log(findSecondLargestString(['a', 'z', 'c', 'b']));

const mergeSortedArrays = (arr1, arr2) => {
    const mergedArray = [...arr1, ...arr2];

    for (let i = 0; i < mergedArray.length; i++) {
        for (let j = 0; j < mergedArray.length; j++) {
            if (i === j) {
                continue;
            }

            if (mergedArray[j] > mergedArray[i]) {
                let temp = mergedArray[j];
                mergedArray[j] = mergedArray[i];
                mergedArray[i] = temp;
            }
        }
    }

    return mergedArray;
}


// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

const fibonacci = (num) => {
    const fib = [0, 1];

    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib.join(',');
}


// console.log(fibonacci(10));


const factorial = (num) => {
    let result = 1;


    for (let i = num; i > 0; i--) {
        result *= i;
    }

    return result;
}


// console.log(factorial(5));

const checkPrimeNumber = (num) => {
    if (num < 2) return false;

    else {
        for (i = 2; i < num; i++) {
            if (num % i === 0) {
                return false
            }
        }
    }

    return true;
}


// console.log(checkPrimeNumber(8));

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1
}


// console.log(linearSearch([-5, 2, 10, 4, 6], 666));

const checkPrime = (num) => {
    if (num < 2) {
        return false;
    }

    else {
        for (i = 2; i < num; i++) {
            if (num % i === 0) {
                return false
            }
        }
    }
    return true
}


// console.log(checkPrime(2));

const generateCount = (str) => {

    let finalStr = '';

    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;

        }
        else {

            finalStr += `${str[i]}${count}`;
            count = 1;
        }
    }

    return finalStr < str ? finalStr : str;

}


// aabcccccaaa -> a2b1c5a3
// console.log(generateCount('aabcccccaaa'));


const longestSubstring = (str) => {
    const stringCount = {}

    for (let i = 0; i < str.length; i++) {
        stringCount[str[i]] = 1;
    }

    const uniqueStrArr = [];

    for (const key of Object.keys(stringCount)) {
        uniqueStrArr.push(key);
    }

    return `${uniqueStrArr.join('')} with count ${uniqueStrArr.length}`
}


// aabbbccdd -> abcd
// console.log(longestSubstring('ABDEFGABEF'));

// console.log(new Set('STRINGS'));

// Restrict some access acc to roles 
const role = 'user'
const restrictTo = (...roles) => {
    if (!roles.includes(role)) {
        return "Permission denied!"
    }

    return "Welcome!"
}

// console.log(restrictTo('user'));


const rotateArray = (arr, k) => {
    const rotatingArr = [];

    for (let i = arr.length - k; i < arr.length; i++) {
        rotatingArr.push(arr[i]);
    }

    arr.splice(arr.length - k, k)


    return [...rotatingArr, ...arr];

}


console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 2))
