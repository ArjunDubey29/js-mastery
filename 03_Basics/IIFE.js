// Immediately Invoked Function Expression (IIFE)
// Why used? (Global Scope ke polution se bachne ke liye)
(function chai(){
    console.log(`DB Connected`);
})();
(() => {
    console.log(`Connected to DB`);
})();

((value) => {
    console.log(`Connected to DB ${value}`);
})(500)
