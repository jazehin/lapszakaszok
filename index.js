//Beírom a copyright spanbe az aktuális évet amikor az oldal betöltődik
function Ev() {
    document.getElementById("copyright").innerHTML = new Date().getFullYear();
}

//A geléria vezérlése canvas használatával
let index = 0;
let kepek = [
    "blaise_pascal.jpg",
    "busocsoportok.jpg",
    "busojaras.jpg",
    "durer_szamabrazolas.jpg",
    "frezia.jpg",
    "maszkok.jpg",
    "szamitastechnika_kep.jpg"
];
let kepElemek = [];
let canvas;
let ctx;

function Balra() {
    if (index == 0) index = kepek.length - 1;
    else index = index - 1;
    KepValtas();
}

function Jobbra() {
    if (index == kepek.length - 1) index = 0;
    else index = index + 1;
    KepValtas();
}

function KepValtas() {
    ctx.clearRect(0, 0, 700, 400);
    ctx.drawImage(kepElemek[index], 350 - kepElemek[index].width/2, 200 - kepElemek[index].height/2);
    ctx.fillText(index + 1 + " / " + kepElemek.length, 5, 30);
}

function loadCanvas() {
    if(document.getElementById("kep") === null) return;

    for (let i = 0; i < kepek.length; i++) 
    {
        let t = new Image();
        t.src = "img/" + kepek[i];
        kepElemek[i] = t;
    }
    canvas = document.getElementById("kep");
    ctx = canvas.getContext("2d");
    ctx.font = "30px sans-serif";
    
    kepek[0].onload = KepValtas();
}




function load() {
    Ev();
    loadCanvas();
}

window.onload = load;