/**
 Do not return anything, modify A in-place instead.
 */
function merge(A: number[], m: number, B: number[], n: number): void {
    let A_index = m - 1, B_index = n - 1, i = m + n - 1;
    for (; A_index >= 0 && B_index >= 0;) {
        A[i--] = A[A_index] >= B[B_index] ?
            A[A_index--] : B[B_index--];
    }
    while (A_index >= 0) A[i--] = A[A_index--];
    while (B_index >= 0) A[i--] = B[B_index--];
};