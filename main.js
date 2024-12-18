document.querySelector('.btn').onclick = () => {
    const nums = [1, 2, 3, 4, 5, 29, 500, 7500, -5, 0];
    for (const num of nums) {
        alert(isPrimeNumber(num));
    }
};
