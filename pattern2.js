function displayPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < rows - i; j++) {
            row += '1 ';
        }
        console.log(row);
    }
}

displayPattern(4);
