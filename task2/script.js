const input = document.querySelector(".todo_input")
const add = document.querySelector(".btn1")
const list = document.querySelector("ul")
const errorMsg = document.querySelector(".span1")
const taskCountSup = document.querySelector("#task-count")
let taskCount = 0;

input.addEventListener("keyup", (event) => {
    if (event.target.value.length < 3 || event.target.value.trim() == "") {
        errorMsg.style.display = "inline";
        add.setAttribute("disabled", "")
    } else {
        errorMsg.style.display = "none"
        add.removeAttribute("disabled", "")
    }
})
add.addEventListener("click", (event) => {
    event.preventDefault();
    let list_item = document.createElement("li")
    list_item.classList.add("justify-content-between")
    list_item.classList.add("align-items-center")
    list_item.classList.add("list-group-item")
    list_item.classList.add("d-flex")
    let span = document.createElement("span")
    span.classList.add("lead")
    span.textContent = input.value

    let btn = document.createElement("button")
    btn.classList.add("btn")
    btn.classList.add("btn-danger")
    btn.classList.add("fa-solid")
    btn.classList.add("fa-trash")
    btn.classList.add("mx-1")

    let mark = document.createElement("button")
    mark.classList.add("btn")
    mark.classList.add("btn-info")
    mark.classList.add("fa-solid")
    mark.classList.add("fa-check")
    mark.classList.add("me-1")

    let edit = document.createElement("button")
    edit.classList.add("btn")
    edit.classList.add("btn-primary")
    edit.classList.add("fa-solid")
    edit.classList.add("fa-pen-to-square")

    let btn_div = document.createElement("div")
    btn_div.append(btn, mark, edit)
    list_item.append(span, btn_div)
    list.append(list_item)
    input.value = "";
    TaskCount(1);

    //delete btn
    let delete_btn = document.querySelectorAll(".fa-trash")
    delete_btn.forEach(element => {
        element.addEventListener("click", (event) => {
            event.target.parentElement.parentElement.remove();
            DTaskCount(0);
        })


        //mark btn
        let mark_btn = document.querySelectorAll(".btn-info")
        mark_btn.forEach(element => {
            element.addEventListener("click", (event) => {
                let line = event.target.parentElement.previousElementSibling;
                line.style.textDecoration = "line-through"
            })
            //edit btn
            let edit_btn = document.querySelectorAll(".btn-primary")
            edit_btn.forEach(element => {
                element.addEventListener("click", (event) => {
                    let innew = event.target.appendChild(input);

                })
            })
        })
    });



})
let clear_all = document.querySelector(".btn-dark")
clear_all.addEventListener("click", () => {
    list.innerHTML = "";
})

function TaskCount(change) {
    taskCount += change;
    taskCountSup.textContent = taskCount;
}

function DTaskCount(taskCount) {
    change -= taskCount;
    taskCountSup.textContent = change;
}


