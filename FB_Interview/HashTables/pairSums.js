function numberOfWays(arr, k) {
    // Write your code here
    let pairSums = 0;
    // count ocurrences
    ocurrences = {}
    for (let num of arr) {
        ocurrences[num] = (ocurrences[num] + 1 || 1);
    }

    for (let v of arr) {

        if (v === k / 2) continue;

        if (ocurrences[k - v]) {
            pairSums += ocurrences[k - v];
        }
    }

    pairSums /= 2;

    if (ocurrences[k / 2]) {
        const w = ocurrences[k / 2];
        pairSums += w * (w - 1) / 2;
    }
    return pairSums;
}