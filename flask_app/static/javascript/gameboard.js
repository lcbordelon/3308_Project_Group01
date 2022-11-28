const selected = [];

// Build a 9 by 9 gameboard and the function we want to run when the cell is clicked
var gameboard = build_gameboard(9, 9, function(element, row, col, i) {
    // Display what we are clicking on to help debug
    console.log("Clicked on element:", element);
    console.log("Clicked on row:", row);
    console.log("Clicked on col:", col);

    // Set the cell element to clicked
    element.className='clicked';

    // Append to our selected list and log for debugging
    selected.push([row, col]);
    console.log("Array clicked is: ", selected);

    // Show the number underneath (this is where we can change the under image)
    element.innerHTML = i;
});

// Add the new grid to our page
document.body.appendChild(gameboard);
    
// Build gameboard loop functionality 
function build_gameboard(rows, cols, cell_function){
    // Set our grid index to 0
    var i=0;

    // Build html table and set to classname 
    var gameboard = document.createElement('table');
    gameboard.className = 'gameboard';

    // Loop through specefied number of rows
    for (var r=0; r<rows; ++r){
        // Build and loop through row
        var tr = gameboard.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            // Create new cell
            var cell = tr.appendChild(document.createElement('td'));

            // Set cell index to view for debugging (WE CAN TURN THIS OFF FOR REAL GAME)
            // cell.innerHTML = i;

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