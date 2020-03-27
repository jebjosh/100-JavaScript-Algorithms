function addNumbers(...numbers) { //Using the Rest Operator

    total = 0;
    numbers.forEach(i => {
        total += i;
    });

    return total;
}


console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(addNumbers(12, 3, 45, 6, 78, 910));