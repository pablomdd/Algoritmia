function binarySearch(arr, x){
    let start = 0, end = arr.length - 1;
    // Iterate up to start !== end
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === x ) 
            return arr[mid]; //return f element 
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return false;
}

export default binarySearch;