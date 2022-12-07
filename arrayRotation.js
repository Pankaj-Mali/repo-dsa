/*
Q.2 You are given an array of length N (1 < N <= 100) and a number K. Print the array after K rotations in clockwise direction.
E.g. 
N = 10, K = 3
Arr = [1,2,3,4,5,6,7,8,9,10]
after K rotations
Arr = [4,5,6,7,8,9,10,1,2,3]

Please mention use of any in-built javascript function is not allowed like shift, unshift, substr etc.

*/


let n = 2, k = 4

function rotate(n, k) {

    k=k%n
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1
    }

    let res = new Array(n)
    let m = k
    for (let i = 0; i < n - k; i++) {
        res[i] = m + 1;
        m = m + 1
    }
    let b = 1

    for (let i = n-k; i < n; i++) {

        res[i] = b;
        b++
    }
    console.log(res)
}

rotate(n, k);