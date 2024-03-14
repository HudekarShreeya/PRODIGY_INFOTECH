def print_grid(grid):
    for row in grid:
        print(" ".join(str(num) if num != 0 else "." for num in row))

def is_valid_move(grid, row, col, num):
    # Check row
    if num in grid[row]:
        return False

    # Check column
    for i in range(9):
        if grid[i][col] == num:
            return False

    # Check subgrid
    start_row, start_col = 3 * (row // 3), 3 * (col // 3)
    for i in range(3):
        for j in range(3):
            if grid[i + start_row][j + start_col] == num:
                return False

    return True

def find_empty_location(grid):
    for row in range(9):
        for col in range(9):
            if grid[row][col] == 0:
                return row, col
    return None

def solve_sudoku(grid):
    empty_location = find_empty_location(grid)
    if not empty_location:
        return True

    row, col = empty_location

    for num in range(1, 10):
        if is_valid_move(grid, row, col, num):
            grid[row][col] = num

            if solve_sudoku(grid):
                return True

            grid[row][col] = 0

    return False

def main():
    print("Enter the unsolved Sudoku puzzle:")
    grid = []
    for i in range(9):
        row = input().split()
        if len(row) != 9:
            print("Invalid input. Each row should contain 9 numbers.")
            return
        grid.append([int(num) for num in row])

    print("\nSudoku puzzle:")
    print_grid(grid)

    if solve_sudoku(grid):
        print("\nSudoku solved:")
        print_grid(grid)
    else:
        print("\nNo solution exists.")

if __name__ == "__main__":
    main()
