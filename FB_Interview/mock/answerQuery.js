Welcome to Facebook!

This is just a simple shared plaintext pad, with no execution capabilities.

When you know what language you would like to use during your interview,
simply choose it from the dropdown in the top bar.

Enjoy your interview!
  
const findIndex = (arr, index) => {
  for(let i = index - 1, i < arr.length; i++){
    if(arr[i]) return i + 1;
  }
  return -1;
} 
  
const answerQueries = (queries, N) => {
  let arr = [].fill(false, N)

  // time O(q)
  let response = []
  for(let query of queries){
    if(query[0] === 1){
      let index = query[1];
      arr[index] = true;
    } else {
      reponse.push(findIndex(arr, query[1]))
    }
  }
  
  return arr;
}