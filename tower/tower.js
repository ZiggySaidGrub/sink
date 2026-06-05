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
        img.height = "64"
        img.classList.add("flex-item");
        squarediv.appendChild(img);
    }
}