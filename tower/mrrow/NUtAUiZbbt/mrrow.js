let fails = ["I don't think I need that right now.", "Mmm.. That didn't work.", "I don't know what that would do.", "Maybe we should try something else."]
let fail_index = 0
let sticks_select = false;
let string_select = false;
let crafted_ladder = false;

let notif = document.getElementById("notif");

let sink = document.getElementById("sink");
let first_click = false;
sink.addEventListener("click", (e) => {
    if (!first_click) {
        first_click = true;
    }
    if (crafted_ladder) {
        window.location.href = "https://sink.smots.horse/tower/win/win/win/";
    } else {
        notif.textContent = "I can't reach it. I need something to help me reach the sink.";
        sticks_select = false;
        string_select = false;
    }
});


let ladder = document.getElementById("ladder")
ladder.addEventListener("click", (e) => {
    notif.textContent = fails[fail_index];
    fail_index = (fail_index + 1) % fails.length;
    sticks_select = false;
    string_select = false;
});

let sticks = document.getElementById("sticks")
sticks.addEventListener("click", (e) => {
    notif.textContent = fails[fail_index];
    fail_index = (fail_index + 1) % fails.length;
    sticks_select = true;
    make_ladder();
});

let string = document.getElementById("string")
string.addEventListener("click", (e) => {
    notif.textContent = fails[fail_index];
    fail_index = (fail_index + 1) % fails.length;
    string_select = true;
    make_ladder();
});

function make_ladder() {
    if (!sticks_select || !string_select) return;
    notif.textContent = "Great idea! I can tie these sticks together to make... a ladder!";
    sticks.remove();
    string.remove();
    let new_ladder = document.createElement("img");
    new_ladder.src = "ladder.png";
    new_ladder.id = "new-ladder";
    new_ladder.classList.add("selectDisable");
    document.body.appendChild(new_ladder);
    crafted_ladder = true;
}