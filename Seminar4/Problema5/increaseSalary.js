function increaseSalary(salaries, percent) {
    if(!Array.isArray(salaries)) throw new Error('First parameter must be an array');
    if(typeof percent !== 'number') throw new Error('Second parameter must be a number');

    return salaries.map(salary => salary + salary * (percent/100));
}

try {
    console.log(increaseSalary([1000,2000,3000],10))
} catch (error) {
    console.log(error);
}

try {
    increaseSalary([1000,2000],'10')
} catch (error) {
    console.log(error);
}