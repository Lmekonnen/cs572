angular.module("myApp").filter("order", orderFilter);
function orderFilter() {
    return function (number) {
        //number is 28 depends on least significant digit
        if (!NaN(number)&&(number==parseInt(number))) {
            const digit = number % 10
            let postfix = "th"
            switch (digit) {
                case 1:
                    postfix = "st"
                    break;
                case 2:
                    postfix = "nd"
                    break;
                case 3:
                    postfix = "rd"
                    break;
            };
            return number + postfix;
        } else {
            return number;
        }
    }
}