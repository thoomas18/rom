function addReason() {
    const input = document.getElementById("reasonInput");
    const list = document.getElementById("reasonList");
    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);

    saveReason(input.value);
    input.value = "";
}

function saveReason(reason) {
    let reasons = JSON.parse(localStorage.getItem("reasons")) || [];
    reasons.push(reason);
    localStorage.setItem("reasons", JSON.stringify(reasons));
}

function loadReasons() {
    let reasons = JSON.parse(localStorage.getItem("reasons")) || [];
    const list = document.getElementById("reasonList");
    reasons.forEach(r => {
        const li = document.createElement("li");
        li.textContent = r;
        list.appendChild(li);
    });
}

window.onload = function() {
    if (document.getElementById("reasonList")) {
        loadReasons();
    }
};
