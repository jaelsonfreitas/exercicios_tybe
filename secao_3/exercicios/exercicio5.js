let partName = 'Bispo';
let movements = " ";

let partNameCapsLock = partName.toLowerCase();

switch (partNameCapsLock) {
    case "Peão":
        movements = "Move forward one space, but capture diagonally.";
        break;
    case "torre":
        movements = " Mova em linha reta, horizontal ou vertical."
        break;
    case "bispo":
        movements = "Move-se na diagonal.";
        break;
    case "cavalo":
        movements = "Move-se em um padrão em L.";
        break;
    case "rainha":
        movements = "Move-se em linha reta, horizontal, vertical ou diagonal.";
        break;
    case "rei":
        movements = "Move-se em qualquer direção, mas apenas uma casa por vez.";
        break;
    default:
        console.log("Error: Invalid part name");
}

console.log(movements);
