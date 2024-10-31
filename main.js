const calculateBtn = document.getElementById("calculate");

let inputs = document.querySelectorAll("input")
inputs.forEach((input, index)=> {
    input.addEventListener("input", ()=> {
        if (input.dataset.max == input.value.length) {
            let nextInput = inputs[index + 1]
            if (nextInput) {
                nextInput.focus()
            }
        }
    })
})

calculateBtn.addEventListener("click", age);

function age() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    let today = new Date()

    let isValid = true;

    document.querySelectorAll(".inputs-container > div").forEach(e=> {
        e.classList.remove("error")
    })

    document.querySelectorAll(".form-alert").forEach(e=> {
        e.style.display = "none"
    })

    if (day == "") {
        document.getElementById("day-alert").style.display = "block"
        document.querySelector(".day-div").classList.add("error")
        isValid = false
    } else if (day > 31 || day < 1) {
        document.getElementById("day-invalid").style.display = "block"
        document.querySelector(".day-div").classList.add("error")
        isValid = false
    }

    if (month == "") {
        document.getElementById("month-alert").style.display = "block"
        document.querySelector(".month-div").classList.add("error")
        isValid = false
    }
    else if (month > 12 || month < 1) {
        document.getElementById("month-invalid").style.display = "block"
        document.querySelector(".month-div").classList.add("error")
        isValid = false
    }

    if (year == "") {
        document.getElementById("year-alert").style.display = "block"
        document.querySelector(".year-div").classList.add("error")
        isValid = false
    }  else if (year >  today.getFullYear()) {
        document.getElementById("year-invalid").style.display = "block"
        document.querySelector(".year-div").classList.add("error")
        isValid = false
    }

    if (isValid) {
        let d2 = today.getDate()
        let m2 = today.getMonth() + 1
        let y2 = today.getFullYear()
        let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        if (day > d2) {
            d2 = d2 + months[m2 -1]
            m2 = m2 - 1
        }
        if (month > m2) {
            m2 = m2 + 12
            y2 = y2 - 1
        }

        let d = d2 - day;
        let m = m2 - month;
        let y = y2 - year

        document.querySelector(".year-result .year").innerText = y
        document.querySelector(".month-result .month").innerText = m
        document.querySelector(".day-result .day").innerText = d
    }
}


document.addEventListener("keydown", (e)=> {
    if (e.key == "Enter") {
        age()
    }
})