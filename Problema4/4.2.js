const numbers = [1, 2, 3, 4, 5];

const reduce = (array, reducer, initialValue) => {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = reducer(accumulator, array[i]);
}
    return accumulator;
}

console.log(reduce(numbers, (accumulator, current) => accumulator + current, 0));