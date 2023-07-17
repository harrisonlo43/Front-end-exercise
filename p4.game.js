// Restart Game Button
var restart = document.querySelector("#b")

// Grab all squares
var squares = document.querySelectorAll("td")
// Clear all the squares
function clearBorad(){
    for (var i = 0 ;i < squares.length; i++){
        squares[i].textContent = "";
    }
}

restart.addEventListener("click", clearBorad)

// Check the square marker
function changeMarker(){
    if (this.textContent === ''){
        this.textContent = "O";
    }else if (this.textContent === "O"){
        this.textContent = "X";
    }else{
        this.textContent = "";
    }
}


// var cellone = document.querySelector("#one")
// cellone.addEventListener("click", function(){
//     if (cellone.textContent === ''){
//         cellone.textContent = "X";
//     }else if (cellone.textContent === "X"){
//         cellone.textContent = "O";
//     }else{
//         cellone.textContent = "";
//     }
// })


// For loop to add event listen

for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", changeMarker);
}