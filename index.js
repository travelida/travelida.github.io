liste = ["egg og bacon", "musli", "toast","bananpannekake", "brødskive", "honni korn"]

function velgFrokost() {
    x = Math.floor(Math.random() * (5 - 0 + 1))
    alert(liste[x])
}

document.getElementById("klitten").onclick = velgFrokost

