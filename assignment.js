// kilometer to Meter function start

function kilometerToMeter(kilometer) {
    // per kilometer = 1000 meter

    var meter = kilometer * 1000;
    return meter;

}

var result = kilometerToMeter(5);
console.log(result);

// kilometer to Meter function end




//Budget Calcolator function start

function budgetCalculator(watch, mobile, laptop, ) {
    // per Watch fifty taka
    var watchPrice = 50 * watch;

    // per mobile one hundred taka
    var mobilePrice = 100 * mobile;

    // per laptop three hundred taka
    var laptopPrice = 300 * laptop;

    var sum = watchPrice + mobilePrice + laptopPrice;
    return sum;

}

var totalBuget = budgetCalculator(10, 5, 4);
console.log(totalBuget);

//Budget Calcolator function end


//Hotel Cost function start

function hotelCost(dayes) {
    var day = 0;

    if (dayes <= 10) {
        dayes = day * 100;
    } else if (dayes <= 20) {
        var first10Dayes = 10 * 100;
        var remainingDayes = dayes - 10;
        var second10Dayes = remainingDayes * 80;
        dayes = first10Dayes + second10Dayes;

    } else {
        var first10Dayes = 10 * 100;
        var second10Dayes = 10 * 80;
        var remainingDayes = dayes - 20;
        var anotherDayes = remainingDayes * 50;
        dayes = first10Dayes + second10Dayes + anotherDayes;
    }
    return dayes;

}
var totalDayes = hotelCost(15);
console.log(totalDayes);

//Hotel Cost function end


//Mega Friend function start

function megaFriend(friends) {
    var longChar1 = friends[0];
    for (i = 0; i < friends.length; i++) {
        if (friends[i].length > longChar1.length) {
            longChar1 = friends[i];
        }
    }
    return longChar1;
}

var result = megaFriend(["jamal", "kamal", "abul", "tabul", "roni", "fardous", "sakib"]);
console.log(result);

//Mega Friend function end