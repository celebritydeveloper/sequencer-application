const partialSumSeq = function () {
    let sum = 0;
    let sumArray = [];
    for (let argumentsKey in arguments) {
        sum += arguments[argumentsKey];
        sumArray.push(sum);
    }
        return sumArray;
}

export default partialSumSeq;