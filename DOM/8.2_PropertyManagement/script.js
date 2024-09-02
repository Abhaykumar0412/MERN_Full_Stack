let inputBar1 = document.getElementById("owner")
let inputBar2 = document.getElementById("city")
let inputBar3 = document.getElementById("size")
let addBtn = document.getElementById("addbtn")
let cont = document.querySelector(".cont")
let deleteBtn = document.querySelector(".delete")


let taskArray = [];
let activeDelete = false;

deleteBtn.addEventListener("click", function () {
    activeDelete = !activeDelete;
    deleteBtn.classList.toggle("red");

})

addBtn.addEventListener("click", function () {
    let a = inputBar1.value;
    let b = inputBar2.value;
    let c = inputBar3.value;

    // console.log(a, b, c)

    let taskobj = {
        id : Date.now(),
        task : value
    }

    taskArray.push(taskobj);

    let ticketcont = document.createElement("div")
    ticketcont.classList.add("ticket");
    ticketcont.innerHTML = ` ${a} ${b} ${c} `
    // console.log(ticketcont)

        //delete functionality

        ticket.addEventListener("dblclick", function () {
            if (activeDelete == true) {

                //1) remove from UI 2) remove from taskArray
                cont.removeChild(ticket);

                let filtertedArray = taskArray.filter(function (taskObj) {
                    return taskObj.id  != id;
                })
                taskArray = [...filtertedArray];
                console.log(taskArray)
            }
        })



    cont.appendChild(ticketcont)
})