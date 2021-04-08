function getRow(rowIndex: number): number[] {
    interface pascalTriag {
        [key: number]: {
            [key: number]: number
        }
    };
    let map: pascalTriag = {};
    // let  map: Record<string, any> = {};
    const getValue = (row: number, col: number): number => {
        if (map[row] && map[row][col]) {
            return map[row][col];
        } else {
            // base case
            if (col == 0 || row == col) return 1;
            if (col < 0 || col > row) return 0;

            const val = getValue(row - 1, col - 1) + getValue(row - 1, col);

            if (!map[row]) {
                map[row] = { 0: 1 }
            }
            map[row][col] = val;

            return map[row][col];
        }
    }

    const triagRow: number[] = [];
    for (let i = 0; i <= rowIndex; i++) {
        triagRow.push(getValue(rowIndex, i));
    }

    return triagRow;
};