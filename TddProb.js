function Add(number) {
    if (number === "") return 0;
    if (number.includes("\n,") === true || number.includes(",\n") === true) {
        return "This input is not Good!!";
    }
    number = number.replace("\n", ",");


    sum = 0;
    for (var i of number) {
        if (i >= '0' && i <= '9') {
            sum += (i - '0');
        }
        if (i === "-") {
            return "Negative Numbers are not allowed";
        }
    }
    return sum;
}

console.log(Add("1,2"));
console.log(Add("1\n,2"));
console.log(Add("1,\n"));
console.log(Add("-12222"));
console.log(Add("1,"));