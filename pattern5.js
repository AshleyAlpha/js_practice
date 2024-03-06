function displayPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < rows; j++) {
            if (j === rows - i - 1) {
                row += '1 ';
            } else {
                row += '  ';
            }
        }
        console.log(row);
    }
}

// Call the function with the desired number of rows
displayPattern(4);
