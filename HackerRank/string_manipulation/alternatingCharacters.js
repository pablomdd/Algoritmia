function alternatingCharacters(s) {
    if(s.length === 1) return 0;
    // constant memory
    let counter = 0;
    // O(n)
    for(let i = 0; i < s.length - 1; i++){
        if(s.charAt(i) === s.charAt(i + 1))
            counter++;
    }

    return counter;
}