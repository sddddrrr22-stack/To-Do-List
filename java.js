let input1 = document.getElementById("oper");
let button1 = document.getElementById("pero");
let paragraph = document.getElementById("para");
let spanner = document.getElementById("span");

button1.addEventListener("click", () => {
    spanner.textContent = input1.value;
});

let DeleteBtn = document.createElement("button");
DeleteBtn.textContent = "Remove Task";

DeleteBtn.addEventListener("click", () => {
    spanner.textContent = "";
});
paragraph.appendChild(DeleteBtn);

//JavaScript Tests

let numbers = [1,2,3,4,5];

let double = numbers.map(function(num){
    return num - 1;
});
console.log(double);

let rum = [1,2,3,4,5];

let nur = rum.filter(num => num % 2 == 0);
console.log(nur);