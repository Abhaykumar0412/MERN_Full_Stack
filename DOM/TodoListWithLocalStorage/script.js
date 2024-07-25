let inputBar = document.querySelector("input");
let addBtn = document.querySelector("button");
let cont = document.querySelector(".cont");


//1) store new task in LS
//2) delete task in LS
//3) check for the task


let taskArray = [];

let olderTasks = localStorage.getItem("Tasks");

if (olderTasks) {
    // console.log("older tasks", olderTasks)
    let parsedArray = JSON.parse(olderTasks);
    taskArray = [...parsedArray];
    ticketAddertoUI(taskArray);
}

addBtn.addEventListener("click", function () {
    let value = inputBar.value;

    inputBar.value = "";

    if (value.length == 0) return;   //not add blank add

    let taskobj = {
        id: Date.now(),
        task: value
    }

    taskArray.push(taskobj);

    ticketAddertoUI(taskArray);
    localStorage.setItem("Tasks", JSON.stringify(taskArray));
});


function ticketAddertoUI(arr) {

    cont.innerHTML = "";

    arr.forEach(function (taskobj) {
        let id = taskobj.id;

        let taskEle = document.createElement("div");
        taskEle.classList.add("task");
        taskEle.innerHTML = `<p> ${taskobj.task} </p>
            <div class="dlt">
                <svg xmlns="http://www.w3.org/2000/svg" width = "25px" viewBox="0 0 24 24" fill="currentColor"><path d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9ZM9 12V18H11V12H9ZM13 12V18H15V12H13Z"></path></svg>
            </div>`;

        let delIcon = taskEle.querySelector(".dlt");
        delIcon.addEventListener("click", function () {
            cont.removeChild(taskEle);     //UI delete

            let filteredTaskArray = taskArray.filter(function (taskobj) {
                return taskobj.id != id;
            })

            taskArray = filteredTaskArray;
            localStorage.setItem("Tasks", JSON.stringify(taskArray));
        });

        cont.appendChild(taskEle);
    });
}