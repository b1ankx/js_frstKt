let table = document.querySelector('#table')
let arr = [];
for (let i = 0; i < 5; i++) {
    let row = [];
    for (let j = 0; j < 6; j++) {
        row.push(Math.floor(Math.random() * 100));
    }
    arr.push(row);
}
createTable(table, arr)

function createTable(table, arr){
    for (let i = 0; i < arr.length; i++){
        let tr = document.createElement('tr');
    for(let j = 0; j < arr.length ; j++){
        let td = document.createElement('td');
        td.innerHTML = arr[i][j];
        if( arr[i][j] >= 50){
            td.style.background = "orange" 
        }
        tr.appendChild(td);  
    }
     table.appendChild(tr);   
}
}

function foo(){
    let num = document.body.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling
    let random = Math.floor(Math.random() * 1000)
    num.textContent = random
}





