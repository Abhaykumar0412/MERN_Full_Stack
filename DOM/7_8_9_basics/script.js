// console.dir(document)



/*let h1tag = document.querySelector(".h1tap");
console.dir(h1tag)*/



/*let h1tag = document.querySelector(".h1tap");
h1tag.style.color = "green";*/



/*let h1tag = document.querySelector(".h1tap");
h1tag.innerHTML= "I am Changed through js"*/                  //change the text 



/*let h1tag = document.querySelector(".h1tap");
let inputBar = document.getElementById("itag");
console.dir(inputBar)*/



/*let h1tag = document.querySelector(".h1tap");
let inputBar = document.getElementById("itag");
let boxes = document.querySelectorAll(".box")
console.log(boxes)*/



// 2 Next day


/*let imatag = document.querySelector("img");
imatag.setAttribute("src", "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");*/
//set Attribute se image change kar sakte hai in JS



/*let boxes = document.querySelectorAll(".box");
console.log(boxes)

let arr = [];                      //Node list & array both are the same thing. but array have a extra things & more functions. and Node list have not extra things & not more functions.
console.log(arr)*/



/*let box = document.querySelector(".box");
console.log(box.classList)*/


/*let box = document.querySelector(".box");
box.classList.add("circle")                       //circle add karte hai
box.classList.remove("circle")*/                  //remove karte hai


/*let box = document.querySelector(".box");
box.classList.toggle("circle")*/                    //jo bhi hoga us ka oposit ho jaega



/*let h1tag = document.createElement("h1");         //create element tags
console.log(h1tag)*/


/*let h1tag = document.createElement("h1");         //create element tags
h1tag.innerHTML= "I am h1 tag";                   //add the tag items
console.log(h1tag);*/



/*let h1tag = document.createElement("h1");         //create element tags
h1tag.innerHTML= "I am h1 tag";                   //add the tag items
h1tag.classList.add("ht");                        //add the class
console.log(h1tag);*/



//java script se circle banana

/*let cont = document.querySelector(".cont");
let div = document.createElement("div");
div.classList.add("box")
div.classList.add("circle")                       //circle add karte hai
cont.appendChild(div);
console.log(h1tag)*/



//EventListener

/*let imatag = document.querySelector("img");
let flag = true;
let toggleFunction = function(){
    if (flag == true){
        imatag.src = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 "
    }else{
        imatag.src ="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
    }

    flag = !flag;
}
imatag.addEventListener("click", toggleFunction);*/



// 3 NEXT DAY


// Event Delegation bolta hai ki sab per EventListener lagane ki jagha us ke parent per EventListener laga do. or parent se child ko access karo. 

/*let cont = document.querySelector(".cont");

cont.addEventListener("click", function(event){
    // console.log(event)
    console.log(event.target)
    let clickedEle = event.target;
    console.log(clickedEle.classList[1])
})*/



// Event Bubbling me GP or parent or child me click laga hai to bo sab per click hoga

/*let body = document.querySelector("body")

let gp = document.querySelector(".gp")
let parent = document.querySelector(".parent")
let child = document.querySelector(".child")

body.addEventListener("click", function(){
    console.log("body")
})

gp.addEventListener("click", function(){
    console.log("gp")
})
parent.addEventListener("click", function(){
    console.log("parent")
})
child.addEventListener("click", function(event){
    console.log("child")
    event.stopPropagation()
})*/



// Event Capturing Bubbling ka ulta hota hai down

let body = document.querySelector("body")

let gp = document.querySelector(".gp")
let parent = document.querySelector(".parent")
let child = document.querySelector(".child")

body.addEventListener("click", function(){
    console.log("body")
}, {capture : true});

gp.addEventListener("click", function(){
    console.log("gp")
}, {capture : true});
parent.addEventListener("click", function(){
    console.log("parent")
}, {capture : true});
child.addEventListener("click", function(event){
    console.log("child")
    event.stopPropagation()
}, {capture : true});