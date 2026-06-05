let bgdiv = document.getElementById("bgdiv");

document.body.addEventListener("mousemove", (e) => {
    bgdiv.style.left = `${-e.pageX}px`;
    bgdiv.style.top = `${-e.pageY}px`;
});

