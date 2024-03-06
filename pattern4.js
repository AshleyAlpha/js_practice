function displayPattern(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < cols; j++) {
            if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
                row += '1 ';
            } else {
                row += '0 ';
            }
        }
        console.log(row);
    }
}

displayPattern(5, 5);
