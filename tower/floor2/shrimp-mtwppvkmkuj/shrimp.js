let current_element = document.getElementById("grid");
for (let i = 0; i < 20; i++) {
    let new_el = document.createElement("nothingtoseehere");
    current_element.appendChild(new_el);
    current_element = new_el;
}
current_element.innerText = "Passsword: 63014";

let fader = document.getElementById("fader");

let img = document.getElementById("its-a-zipbomb");
let input = document.getElementById("text");
img.addEventListener("click", (e) => {
    if (input.value == "OSS{jpWHeXr}") {
        fader.style.backgroundColor = "green";
        window.location.href = "https://sink.smots.horse/tower/mrrow/NUtAUiZbbt/";
    } else {
        fader.style.backgroundColor = "red";
    }
    fader.style.opacity = "1";
    if (!fading) {
        fade();
    }
});

const fadeTime = 5;
fading = false;
async function fade() {
    fading = true;
    fader.style.opacity = `${parseFloat(fader.style.opacity) - 0.01}`;
    await new Promise((resolve) => setTimeout(resolve, fadeTime));
    if (parseFloat(fader.style.opacity) > 0) fade();
    else fading = false;
}