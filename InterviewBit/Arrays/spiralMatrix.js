function spiralOrder(A){
    let Top = 0;                    //increase
    let Right = A[0].length - 1;    //decrease
    let Bottom = A.length - 1;      //decrease
    let Left = 0;                   //increase
    
    let a = []
    let direction = "top";          //top -> right -> bottom -> left

    while(Top <= Bottom && Left <= Right){
        if(direction === "top"){
            for(let col = Left; col <= Right; col++){
                // console.log(A[Top][col]);
                a.push(A[Top][col]);
            }
            Top++;
            direction = "right";
        } else if (direction === "right"){
            for(let row = Top; row <= Bottom; row++){
                // console.log(A[row][Right]);
                a.push(A[row][Right]);
            }
            Right--;
            direction = "bottom";
        } else if (direction === "bottom"){
            for(let col = Right; col >= Left; col--){
                // console.log(A[Bottom][col]);
                a.push(A[Bottom][col]);
            }
            Bottom--;
            direction = "left";
        } else if (direction === "left"){
            for(let row = Bottom; row >= Top; row--){
                // console.log(A[row][Left]);
                a.push(A[row][Left]);
            }
            Left++;
            direction = "top";
        }
    }

    return a;
}

// const A = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
// ];

// const A = [
//     [ 1, 2, 3, 4 ],
//     [ 10, 11, 12, 5 ],
//     [ 9, 8, 7, 6 ]
// ];

// const A = [
//     [1, 2, 3],
//     [10, 11, 4],
//     [9, 12, 5],
//     [8, 7, 6]
// ];

const A = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];

console.log(spiralOrder(A));