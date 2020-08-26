function sockMerchant(n, ar) {
  let res = 0;
  ar.sort();
  for (let i = 0; i < n; i++) {
    if (ar[i + 1] === ar[i]) {
      i++;
      res++;
    }
  }
  return res;
}

// Test cases
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
console.log(
  sockMerchant(20, [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5])
);
