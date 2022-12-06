window.onload = filltable;

function filltable(){
    const tablevals = score
    const table = document.getElementById('maintable')
    for(i = 0; i < tablevals.length; i++){
        console.log(tablevals[i])
        let row = table.insertRow();
        let rank = row.insertCell();
        let ranktext = document.createTextNode(i + 1);
        rank.appendChild(ranktext);
        for(key in tablevals[i]){
            let cell = row.insertCell();
            let text = document.createTextNode(tablevals[i][key])
            cell.appendChild(text);
        }
    }
}