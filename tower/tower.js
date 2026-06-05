let bgdiv = document.getElementById("bgdiv");

document.body.addEventListener("mousemove", (e) => {
    bgdiv.style.left = `${-e.pageX}px`;
    bgdiv.style.top = `${-e.pageY}px`;
});

let squarediv = document.getElementById("squarediv");

for (let i = 0; i < squarediv.clientHeight; i += 64) {
    for (let j = 0; j < squarediv.clientWidth; j += 64) {
        let img = document.createElement("img");
        img.src = `square${Math.floor(Math.random() * 3)}.png`;
        img.width = "64";
        img.height = "64";
        img.classList.add("flex-item");
        squarediv.appendChild(img);
    }
}

const dirs = ["up", "right", "down", "left"];
const solution = [2, 3, 0, 1, 3, 0, 2, 3, 0, 1];
let guess = [];

let can_move = false;
let won = false;

dirs.forEach((dir, idx) => {
    let el = document.getElementById(dir);
    el.addEventListener("click", (e) => {
        if (!can_move) return;

        guess.push(idx);
        for (let i = 0; i < guess.length; i++) {
            if (i >= solution.length) break;
            if (guess[i] != solution[i]) {
                guess = [];
                break;
            }

            if (i == solution.length - 1) {
                won = true;
            }
        }
        can_move = false;
        fadeIn();
    });
});

can_move = true;

let fader = document.getElementById("fader");
fader.style.opacity = "0";

const fadeTime = 4;

async function fadeIn() {
    fader.style.opacity = `${parseFloat(fader.style.opacity) + 0.01}`;
    await new Promise((resolve) => setTimeout(resolve, fadeTime));
    if (parseFloat(fader.style.opacity) < 1) fadeIn();
    else if (won) {
        window.location.href = "https://github.com/ZiggySaidGrub/sink";
    } else fadeOut();
}

async function fadeOut() {
    fader.style.opacity = `${parseFloat(fader.style.opacity) - 0.01}`;
    await new Promise((resolve) => setTimeout(resolve, fadeTime));
    if (parseFloat(fader.style.opacity) > 0) fadeOut();
    else can_move = true;
}