let nr1;
let nr2;
let liczba;
document.getElementById("Button1").onclick = function(nr1, nr2) {
    nr1 = document.getElementById("Nr1").value;
    nr2 = document.getElementById("Nr2").value;
    
    liczba = Math.floor(Math.random() * (nr2 - nr1) + nr1);

    document.getElementById("wynik").innerHTML = liczba;
}