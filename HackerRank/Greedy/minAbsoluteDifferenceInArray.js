// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
    if(arr.length === 2){
        return Math.abs(arr[0] - arr[1]);
    }

    arr.sort((a,b) => (a - b));
    let minimum = Infinity;

    for(let i = 0; i < arr.length - 1; i++){
        const cur = Math.abs(arr[i] - arr[i + 1]);
        if(cur < minimum)
            minimum = cur;
    }

    return minimum;
}