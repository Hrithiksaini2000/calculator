let values = document.getElementById("value");

let btn = document.querySelectorAll(".button")

let all_clear = document.getElementById("all-clear")

let clear = document.getElementById("clear")

let calculate = document.getElementById("calculate")

let index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

let input = ""

let hide = true

btn.forEach((button) => {
    button.addEventListener("click", function () {
        if (this.id == index[this.id]) {
            let value = button.getAttribute("data-value")
            if (value == ".") {
                if (hide == true) {
                    hide = false
                } else {
                    return
                }
            }
            if (value == "+" || value == "-" || value == "/" || value == "*" || value == "%") {
                hide = true
            }
            if (input == "") {
                values.innerHTML = value
                input = value
            } else {
                values.innerHTML += value
                input += value
            }
        }
    })
})

all_clear.addEventListener("click", function () {
    values.innerHTML = "Type The Number"
    input = ""
})

clear.addEventListener("click", function () {
    let last_element = input.substring(0, input.length - 1)
    values.innerHTML = last_element
    input = last_element
    if (input == "") {
        values.innerHTML = "Type The Number"
    }
})

calculate.addEventListener("click", function () {
    input = input.replace("X", "*")
    values.innerHTML = eval(input)
})
