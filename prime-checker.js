window.isPrimeNumber = num => {
    if (num <= 1) return `${num} is nothing`;
    if (num === 2) return `${num} is prime`;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return `${num} is not prime`;
    }
    return `${num} is prime`;
};
