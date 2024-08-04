const formatRegex = /^\d{3}\-\d{3}\-\d{3}\-\d{3}$/;

export function verifyInput(inputValue) {
    return formatRegex.test(inputValue);
}

export function onlyNumbers(inputValue) {
    const replaceRegex = /(\D|\-)/g;
    return inputValue.replace(replaceRegex, "");
}