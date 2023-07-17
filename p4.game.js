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
// 使用 this 完成效果
function changeMarker(){
    if (this.textContent === ''){
        this.textContent = "O";
    }else if (this.textContent === "O"){
        this.textContent = "X";
    }else{
        this.textContent = "";
    }
}

// 以First row & First column 練習效果
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
