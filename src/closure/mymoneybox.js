function moneyBox() {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;

        console.log(`MoneyBox: $${saveCoins}`);
    }

    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);

// Personal Exercise
function bankAccount(username) {
    let money = 0;

    return {
        deposit: function (amount) {
            if (amount > 0) {
                console.log(`${username} deposited: $${amount}`);

                money = money + amount;

                return money;
            } else {
                return console.log('Invalid transaction');
            }
        },
        withdraw: function (amount) {
            if (amount > 0) {
                if (money == 0 || amount > money) {
                    console.log('Not enough money in your account ☹');
                } else {
                    console.log(`${username} withdrawed: $${amount}`);

                    money = money - amount;

                    return money;
                }
            } else {
                return console.log('Invalid transaction');
            }
        },
        accountStatus: function () {
            console.log(`${username} has a total of: $${money}`);
        },
    };
}

const myBankAccount = bankAccount('Elijah');
myBankAccount.deposit(5);
myBankAccount.deposit(15);
myBankAccount.withdraw(10);
myBankAccount.accountStatus();

const bankAccountAnna = bankAccount('Anna');
bankAccountAnna.deposit(55);
bankAccountAnna.withdraw(6);
bankAccountAnna.accountStatus();
