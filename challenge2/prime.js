function findPrimeNumber(arr) {
    function isPrime(num) {
      for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    }
  
    return arr.filter((num) => isPrime(num));
  }
  
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumber = findPrimeNumber(nums);
  console.log(primeNumber);
  