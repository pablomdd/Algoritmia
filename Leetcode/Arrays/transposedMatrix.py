def transpose(matrix: list[list[int]]) -> list[list[int]]:
    M_ROWS = len(matrix)
    M_COLS = len(matrix[0])
    t_cols = [0] * M_ROWS
    transposed = [t_cols.copy() for i in range(M_COLS)]
    for i in range(0, M_COLS):
        for j in range(0, M_ROWS):
            transposed[i][j] = matrix[j][i]
    return transposed


# transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
transpose([[1]])
