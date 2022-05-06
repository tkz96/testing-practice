//Task 1

function stringLength(string) {
    if (string.length >= 1 && string.length < 10) {
        return string.length;
    } else {
        throw new Error('Must be between 1 and 9');
    }
}

// Task 2

function reverseString(string) {
    return string.split('').reverse().join('');
}

// Task 4

function capitalize(string) {
    return (string.charAt(0).toUpperCase() + string.slice(1));
}

module.exports = { stringLength, reverseString, capitalize }