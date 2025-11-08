function expGen() {
    const cache = {};
    const exp = (base, power) => {
        const key = `${base} ${power}`;
        if (key in cache) {
            console.log('found ' + key);
            return cache[key];
        } else {
            console.log('calculated' + key);
            if (power === 0) {
                cache[key] = 1;
            } else {
                cache[key] = base * exp(base, power - 1);
            }
            return cache[key];
        }
    }
    return exp;
}

const exp = expGen();
console.log(exp(2, 3));
console.log(exp(2, 4));
console.log(exp(3, 2));
