// main.js

console.log("Hello, World!");

let myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let q1 = Number(this.q1.value);
    console.log(q1);

    let q2 = Number(this.q2.value);
    console.log(q2);

    let q3 = Number(this.q3.value);
    console.log(q3);

    let q4 = Number(this.q4.value);
    console.log(q4);

    let q5 = Number(this.q5.value);
    console.log(q5);

    let q6 = Number(this.q6.value);
    console.log(q6);

    let q7 = Number(this.q7.value);
    console.log(q7);

    let q8 = Number(this.q8.value);
    console.log(q8);

    let q9 = Number(this.q9.value);
    console.log(q9);

    let q10 = Number(this.q10.value);
    console.log(q10);

    //Add all (converted) responses
    //let answer = (q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10);

    //store in a new input and log to the console
    //this.answer.value = answer;
    //console.log(answer);


    //For odd items: subtract 1 from the user response
    q1 -= 1;
    q3 -= 1;
    q5 -= 1;
    q7 -= 1;
    q9 -= 1;

    //For even-numbered items: subtract the user responses from 5
    q2 = 5 - q2;
    q4 = 5 - q4;
    q6 = 5 - q6;
    q8 = 5 - q8;
    q10 = 5 - q10;

    //Add all (converted) responses; then multiply the total by 2.5
    let answer = (q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10) * 2.5;

    //store in a new input and log to the console
    this.answer.value = answer;
    console.log(answer);

    
});



    