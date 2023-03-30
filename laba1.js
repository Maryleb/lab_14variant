let a = prompt("Print number:");
let count = 0;
let max = a;

if (isNaN(parseFloat(a)) || !isFinite(a)) {
     document.write("No numbers");
} else {
    while (!isNaN(parseFloat(a)) || isFinite(a)) {
        a = Number(a);
        if (a == max) {
            count++;
        }
        if (a > max) {
            max = a;
            count = 1;
        }
        a = prompt("Print number:");
    }
    document.write("Maximum: "+max);
    document.write("Amount: "+count);
}