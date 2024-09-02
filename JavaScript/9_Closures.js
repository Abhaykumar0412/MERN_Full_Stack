/*{
    let x = 8;
    function sum(a, b) {
        return a + b + x;

    }
}
console.log(sum(1, 2));*/



/*let count = 0;
function inc(){
    count++;
    console.log(count);
}

function dec(){
    count--;
    console.log(count);
}

inc()
inc()
inc()
dec()*/


//or

/*let count = 0;
function inc(){
    count++;
    console.log(count);
}

function dec(){
    count--;
    console.log(count);
}

inc()
inc()
inc()
dec()

count = 50;
inc()*/


//or

/*function counter() {
    let count = 0;
    function inc() {
        count++;
        console.log(count);
    }

    function dec() {
        count--;
        console.log(count);
    }
    let res = { increment: inc, decrement: dec };
    return res;
}
let {increment , decrement} = counter();
increment()
increment()
increment()
decrement()

count = 50;
increment()*/


//or

/*function counter() {
    let count = 0;
    function inc() {
        count++;
        console.log(count);
    }

    function dec() {
        count--;
        console.log(count);
    }
    let res = {inc, dec };
    return res;
}
let {inc , dec} = counter();
inc()
inc()
inc()
dec()

count = 50;
inc()*/


//or

/*function counter() {
    let count = 0;

    let res = {
        inc: function inc() {
            count++;
            console.log(count);
        }, 
        dec: function dec() {
            count--;
            console.log(count);
        }
    };
    return res;
}
let { inc, dec } = counter();
inc()
inc()
inc()
dec()

count = 50;
inc()*/


/* 1)= Advantage -> Data Hiding
Disadvantage -> Over Memory Use */