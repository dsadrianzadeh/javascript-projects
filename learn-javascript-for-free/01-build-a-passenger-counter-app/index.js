
let countElement = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    count += 1
    countElement.innerText = count
}

function save() {
    let countString = " " + count + " -"
    saveEl.innerText += countString
    // saveEl.textContent - this too can be used.
    // Look out for the differences.
    count = 0
    countElement.textContent = count
}