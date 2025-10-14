
function attachEventListner() {
    let count = 0;
    document.getElementById("button")
        .addEventListener("click", function () {
            console.log("Button is clicked", ++count);
        });
}

attachEventListner();
