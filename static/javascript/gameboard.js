// Create seen 2D array. 0=unseen, 1=seen, 3=bomb
var location_map = build_seen_board(9, 9);
var flag_map = build_seen_board(9, 9);

// One flag per bomb allowed
var flag_count = 0;
const flag_max = 10;

// Game ending status conditions
var game_over = false;
var winner = false

// Store bomb locations
var bomb_locations = random_bomb();

// Build a 9 by 9 gameboard and the function we want to run when the cell is clicked
var gameboard = build_gameboard(9, 9, bomb_locations, function(element, row, col, i) {
    // Do nothing if game over 
    if (game_over){
        return false;
    }

    // Check if the current row col is a bomb location
    if (location_map[row][col] == 3){
        element.innerHTML = "B";
        alert("KABLAM!!!!");
        game_over = true;

        // console.log(second); // use this a score <--
        return false;
    }

    // Check if clicking on flag, if so reset to "unseen" for expand function below
    if (flag_map[row][col] == 1){
        element.innerHTML = "";
        flag_map[row][col] = 0;
        flag_count--;
    }

    // Expand around non numbered cell 
    expand(row, col, bomb_locations);

    // Check if player wins!
    var status = check_winner();
    if (status){
        // Log the users results
        console.log("WINNER");
        // console.log(second); // <-- use this as score
        alert("WINNER!");
        get_winner_name();
        winner = true;
        game_over = true;
    }
});

//prompt for user to enter their name on the score list
function get_winner_name(){
    time = document.getElementById("seconds").innerHTML
    let name = prompt("Enter name to add to leaderboard", "");
    if (name == null || name == "") {
      console.log("Score not saved");
    } else {
        if(name.legnth > 20){
            name = name.substring(0,20);
        }
        console.log("Score saved as " + name + " Time: " + time)
        //send name back to flask app
        time = document.getElementById("seconds").innerHTML
        var scores = {
            'name': name,
            'time': time
        }
        //get url to change to url with post function
        var URL = window.location.href
        URL = URL.substring(0,-4)
        URL = URL + "get_score"     
        const xml = new XMLHttpRequest();
        sender = JSON.stringify(scores)
        xml.open('POST',URL);
        xml.send(sender)
    }
}


function check_winner(){
    // Loop through location map and see if no 0s are left
    for(let i=0; i<location_map.length; i++){
        for(let j=0; j<location_map[i].length; j++){
            // If we find a 0 then that means a cell is unseen or unflagged
            if (location_map[i][j] == 0){
                return false;
            }
        }
    }
    return true;
}


function expand(row, col, bomb_locations){
    var table = document.getElementsByClassName("gameboard")[0];
    var length = table.childElementCount;

    // Check if we are out of bounds
    if (row < 0 || col < 0 || row >= length || col >= length){
        return false;
    }

    // Check if the current recurse cell is a bomb location 
    if (location_map[row][col] == 3){
        return false;
    }

    // Stop if we have already revelead this tile or flagged it
    if (location_map[row][col] == 1 || flag_map[row][col] == 1){
        return false;
    }

    // Set this cell to seen
    location_map[row][col] = 1;

    // Set count of cell and recurse into next
    var count_around = check_surrounding(row, col, bomb_locations)
    if (count_around > 0){
        table.rows[row].cells[col].innerHTML = count_around
    }
    if (count_around == 0){
        table.rows[row].cells[col].className = 'clicked';
    }
    // Change depending on count
    if (count_around == 1){
        table.rows[row].cells[col].className = 'clicked_1';
    }
    else if (count_around == 2){
        table.rows[row].cells[col].className = 'clicked_2';
    }
    else if (count_around == 3){
        table.rows[row].cells[col].className = 'clicked_3';
    }
    else if (count_around >= 4){
        table.rows[row].cells[col].className = 'clicked_4';
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


function build_seen_board(row, col){
    var location_map = []

    for (let i=0; i<row; i++){
        var temp_row = []
        for (let j=0; j<col; j++){
            temp_row.push(0);
        }
        location_map.push(temp_row);
    }
    return location_map;
}


function random_bomb(number_of_bombs = 9){
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
            if (bomb_location[j][0] === one && bomb_location[j][1] === two) {
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
        // Fill location array with bombs
        location_map[bomb_location[i][0]][bomb_location[i][1]] = 3;
    }   
    
    return bomb_location;
}
    
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

            // Add right click flag functionality 
            cell.addEventListener('contextmenu', (function(element, r,c,i){
                return function(){
                    // Do nothing if game is over 
                    if (game_over){
                        return false;
                    }

                    var table = document.getElementsByClassName("gameboard")[0];

                    // Check if unflagging 
                    if (flag_map[r][c] == 1){
                        table.rows[r].cells[c].innerHTML = "";
                        flag_map[r][c] = 0;
                        flag_count--;
                    }

                    // Set Flag in cell if unseen
                    else if (location_map[r][c] == 0 || location_map[r][c] == 3){
                        // Check if we haven't flagged this location 
                        if (flag_map[r][c] == 0){
                            // Check if remaing flag 
                            if (flag_count < 10){
                                table.rows[r].cells[c].innerHTML = "F"
                                flag_map[r][c] = 1;
                                flag_count++;
                            }
                        }
                    }
                }
            })(cell,r,c,i),false);
            
            // Block right click menu
            window.oncontextmenu = (e) => {
                e.preventDefault()
            }

            // Increment i
            i += 1;
        }
    }
    return gameboard;
}

// Run timer every second, check if count is greater than 9 and change to review 0 or number
var second = 0;
function upTimer ( count ) { return count; }
    setInterval( function(){
        document.getElementById("seconds").innerHTML = upTimer(++second);
    }, 1000);


// Add the gameboard to our page
document.body.appendChild(gameboard);

/* Unit Testing - Set to true to run tests */
unit_test = false;
if (unit_test == true){
    check_number_of_bombs(10);
    check_flag_count(10);
    check_winning_condition();
}


function check_number_of_bombs(amount){
    /*Count the bombs on the map and make sure they are correct number. */
    var bomb_count = 0;
    for (let i=0; i<location_map.length; i++){
        for (let j=0; j<location_map[i].length; j++){
            if (location_map[i][j] == 3){
                bomb_count++;
            }
        }
    }

    if (bomb_count != amount){
        console.log("FAIL Bomb Count");
        return false;
    }
    console.log("PASS Bomb Count");
}

function check_flag_count(amount){
    /* Set Flag count to limit and make sure we can't add more.*/
    flag_count = amount;

    // Simulare "Right CLick" on a cell
    var table = document.getElementsByClassName("gameboard")[0];
    var element = table.rows[0].cells[0];
    if (window.CustomEvent) {
        element.dispatchEvent(new CustomEvent('contextmenu'));
    } else if (document.createEvent) {
        var ev = document.createEvent('HTMLEvents');
        element.dispatchEvent(ev);
    } else { // Internet Explorer
        element.fireEvent('oncontextmenu');
    }

    // Check if the flag was placed
    if (element.innerHTML != "" || flag_count > 10){
        console.log("FAIL Flag Check");
    }
    else{
        console.log("PASS Flag Check")
    }
}

function check_winning_condition(){
    /*We win if we flag all the bomb locations*/
    // Get table element
    var table = document.getElementsByClassName("gameboard")[0];
    var element;

    for (let i=0; i<location_map.length; i++){
        for (let j=0; j<location_map[i].length; j++){
            
            if (location_map[i][j] != 3){
                element = table.rows[i].cells[j];
                element.click();
            }
        }
    }

    if (winner == false){
        console.log("FAIL Win Condition");
        return false
    }
    console.log("PASS Win Condition");
    return true;

}