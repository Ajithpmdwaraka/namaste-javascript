function a() {
    var b = 10;
    c();
    function c() {
        // Here, 'c' has its own lexical environment
        // but it can also access 'b' because of scope chain
        console.log(b); // ✅ Accessible due to scope chain
    }
}

a();

console.log(b); // ❌ Error: 'b' is not defined in the global scope
