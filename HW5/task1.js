var letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
var deskDiv = document.createElement("div");
deskDiv.className = "desk";
deskDiv.style.display = "flex";
deskDiv.style.flexDirection = "column";
deskDiv.style.padding = "50px";


for (let i = 0; i != 9; i++) {
    var deskLine = document.createElement("div");
    deskLine.className = "desk_line";
    deskLine.style.display = "inline-flex";

    for (let j = 0; j != 9; j++) {
        var squareDiv = document.createElement("div");
        if (i == 0 || j == 0) {
            if (i == 0 && j > 0) {
                squareDiv.innerHTML = letters[j - 1];
            } else if (i > 0 && j == 0) {
                squareDiv.innerHTML = 9 - i;
            };
            squareDiv.className = "square inx";
            squareDiv.style.display = "flex";
            squareDiv.style.flexDirection = "column";
            squareDiv.style.textAlign = "center";
            squareDiv.style.justifyContent = "center";
            squareDiv.style.backgroundColor = "white";
        } else {
            if ((i + j) % 2 != 0) {
                squareDiv.style.backgroundColor = "black";
            };
            
            squareDiv.className = "square";
        };
        squareDiv.style.height = "50px";
        squareDiv.style.minWidth = "50px";
        squareDiv.style.borderWidth = "1px";
        squareDiv.style.borderStyle = "solid";
        deskLine.appendChild(squareDiv);

    };
    deskDiv.appendChild(deskLine);
};

document.body.appendChild(deskDiv);

