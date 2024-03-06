function displayPattern(rows, columns) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < columns; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

// Call the function with the desired number of rows and columns
displayPattern(4, 5);
