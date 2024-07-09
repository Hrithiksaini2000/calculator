let btn = document.querySelectorAll(".button");

let values = document.getElementById("value");

let index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

let input = '';

let hide = true;

btn.forEach((button) => {
    button.addEventListener("click", function () {
        let value = button.getAttribute("data-value");
        if (this.id == index[this.id]) {
            if (value == ".") {
                if (hide == true) {
                    hide = false
                } else {
                    return
                }
            }
            if (value == "+" || value == "-" || value == "X" || value == "%" || value == "/") {
                hide = true
            }
            if (input == "") {
                values.innerHTML = value;
                input = value;
            } else {
                values.innerHTML += value;
                input += value;
            }
        }
    })
})

let clean = document.getElementById("all-clear");
clean.addEventListener("click", function () {
    values.innerHTML = "Type The Number";
    input = "";
})

let one_clean = document.getElementById("clear");
one_clean.addEventListener("click", function () {
    let last_element = input.substring(0, input.length - 1);
    values.innerHTML = last_element;
    input = last_element;
    if (input == "") {
        values.innerHTML = "Type The Number";
    }
})

let calculate = document.getElementById("calculate");
calculate.addEventListener("click", function () {
    // console.log("First: ",input)
    input = input.replace("X", "*")
    // console.log("Second: ",input)
    values.innerHTML = eval(input)
})