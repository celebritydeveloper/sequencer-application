const primeSeq = function ()
{
    let primes = [];
    for (let limit = 1; limit <= 20; limit++) {
        let a = false;
        for (let i = 2; i <= limit; i++) {
            if (limit % i === 0 && i !== limit) {
                a = true;
            }
        }
        if (a === false) {
            primes.push(limit);
        }
    }

    return primes;
}

export default primeSeq;