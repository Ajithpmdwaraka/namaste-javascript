function x() {
    var i = 20;
    setTimeout(function () {
        console.log(i)
    }, 3000);
    console.log("Namaste JavaScript");
}

x();

function a() {
    for (let j = 1; j <= 5; j++) {
        setTimeout(function () {
            console.log(j)
        }, j * 1000);
    }
}

a();