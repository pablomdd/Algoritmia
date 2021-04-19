/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function (N, K) {
    if (N === 1) return 0;

    const newK = Math.ceil(K / 2);
    const result = kthGrammar(N - 1, newK);

    const isKEven = K % 2 === 0;
    if (result === 0) {
        return isKEven ? 1 : 0; // 0 -> 01
    } else {
        return isKEven ? 0 : 1; // 1 -> 10
    }
};