
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");
const calculateBtn = document.getElementById("calculate");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", function () {

    const bill = parseFloat(billInput.value);
    const tip = parseFloat(tipInput.value);
    const people = Number(peopleInput.value);

    if (
        billInput.value.trim() === "" ||
        !Number.isFinite(bill) ||
        bill <= 0 ||
        peopleInput.value.trim() === "" ||
        !Number.isInteger(people) ||
        people < 1
    ) {
        result.className = "error";
        result.innerHTML = "Please enter a valid bill and number of people.";
        return;
    }

    const tipAmount = bill * tip / 100;
    const totalBill = bill + tipAmount;
    const perPerson = totalBill / people;

    result.className = "success";

    result.innerHTML = `
        Tip amount: <b>Rs. ${tipAmount.toFixed(2)}</b><br>
        Total bill: <b>Rs. ${totalBill.toFixed(2)}</b><br>
        Each person pays: <b>Rs. ${perPerson.toFixed(2)}</b>
    `;

});

