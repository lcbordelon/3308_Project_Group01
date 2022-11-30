const selected = [];

var bomb_locations = random_bomb();

// Build a 9 by 9 gameboard and the function we want to run when the cell is clicked
var gameboard = build_gameboard(9, 9, bomb_locations, function(element, row, col, i) {
    // Display what we are clicking on to help debug
    console.log("Clicked on element:", element);
    console.log("Clicked on row:", row);
    console.log("Clicked on col:", col);

    // Append to our selected list and log for debugging
    console.log("Array clicked is: ", selected);

    // Check if the current row col is a bomb location
    for (var b = 0; b < bomb_locations.length; b++) { 
        if (bomb_locations[b][0] == row && bomb_locations[b][1] == col){
            console.log("KABLAM!"); 
            element.innerHTML = "B";
            return false;
        }
    }

    // Expand around 
    expand(row, col, bomb_locations);
});


function expand(row, col, bomb_locations){
    var table = document.getElementsByClassName("gameboard")[0];
    var length = table.childElementCount;

    // Check if we are out of bounds
    if (row < 0 || col < 0 || row >= length || col >= length){
        return false;
    }

    // Check if the current row is a bomb location 
    for (var b = 0; b < bomb_locations.length; b++) { 
        if (bomb_locations[b][0] == row && bomb_locations[b][1] == col){
            console.log("BOMB at ", row, col, ".. leaving blank"); 
            return false;
        }
    }

    // Stop if we have already revelead this tile
    if (table.rows[row].cells[col].innerHTML){
        return false;
    }

    // Set count of cell and recurse into next
    var count_around = check_surrounding(row, col, bomb_locations)
    table.rows[row].cells[col].innerHTML = count_around

    // Change depending on count
    if (count_around == 1){
        table.rows[row].cells[col].className = 'clicked';
    }
    else if (count_around == 2){
        table.rows[row].cells[col].className = 'clicked_2';
    }
    else if (count_around == 3){
        table.rows[row].cells[col].className = 'clicked_3';
    }

    // Break if this is a cell with a digit (Minesweeper rules)
    if (count_around > 0){
        return false;
    }

    // Keep searching for further expanding blocks
    for (let i=-1; i<2; i++){
        for (let j=-1; j<2; j++){
            expand(row+i, col+j, bomb_locations);
        }
    }

}


function check_surrounding(row, col, bomb_locations){
    var count = 0;
    // Loop all around the x, y location
    for (let i=-1; i<2; i++){
        for (let j=-1; j<2; j++){
            // Check if this i,j location is in the bomb_locations
            for (var b = 0; b < bomb_locations.length; b++) { 
                if (bomb_locations[b][0] == row + i && bomb_locations[b][1] == col + j){
                    count++;
                }
            }
        }
    }
    return count;
}


function random_bomb(number_of_bombs = 9){
    // IN PROGRESS
    
    // Randomize 9 bombs
    const bomb_location = []
    let i=0;
    while (i<number_of_bombs){
        var one = Math.floor(Math.random() * 9);
        var two = Math.floor(Math.random() * 9);
        let already_placed = false;
        if (bomb_location.length === 0) {
            bomb_location.push([one, two])
            continue;
        }
        for (let j = 0; j < bomb_location.length; j++) {
            if (bomb_location[0] === one && bomb_location[1] === two) {
                already_placed = true;
                break;
            }
        }
        if (already_placed === false) {
            bomb_location.push([one, two])
            i++;
        }
    }
    for (let i = 0; i < bomb_location.length; i++) {
        
        console.log(bomb_location[i])
    }   
    
    return bomb_location;
}

function fixed_bomb_locations(){
    var bombs = [[1,2], [2,3], [3,4], [4,4], [5,5], [6,6], [7,7]]
    return bombs
}

// Add the new grid to our page
document.body.appendChild(gameboard);
    
// Build gameboard loop functionality 
function build_gameboard(rows, cols, bomb_locations, cell_function){
    // Set our grid index to 0
    var i=0;

    // Build html table and set to classname 
    var gameboard = document.createElement('table');
    gameboard.className = 'gameboard';

    // Loop through specefied number of rows
    for (var r=0; r<rows; r++){
        // Build and loop through row
        var tr = gameboard.appendChild(document.createElement('tr'));
        for (var c=0; c<cols; c++){
            // Create new cell
            var cell = tr.appendChild(document.createElement('td'));

            // Add clicking event to specific cell 
            cell.addEventListener('click',(function(element,r,c,i){
                return function(){
                    cell_function(element,r,c,i);
                }
            })(cell,r,c,i),false);

            // Increment i
            i += 1;
        }
    }
    return gameboard;
}