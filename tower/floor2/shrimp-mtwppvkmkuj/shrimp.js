let current_element = document.getElementById("grid");
for (let i = 0; i < 20; i++) {
    let new_el = document.createElement("nothingtoseehere");
    current_element.appendChild(new_el);
    current_element = new_el;
}
current_element.innerText = "Passsword: 63014"