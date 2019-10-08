#!/usr/bin/node

const log = (msg) => {
    console.log(msg);
}

const main = function(initialBalance = 0, rate = 0.02, monthlyDeposit = 0) {
    const months = 12;
    let principle = 9000;
    let interest = 0;
    const monthlyRate = rate / 12;

    for (let i = 1; i <= months; i++) {
        log(`Month ${i}`);
        principle += monthlyDeposit;
        initialBalance += monthlyDeposit;
        log(`Principle with deposit: ${principle.toFixed(2)}`);
        let interestThisMonth = principle * monthlyRate;
        log(`Interest this month: ${interestThisMonth.toFixed(2)}`);
        principle += interestThisMonth;
        interest += interestThisMonth; 
    }

    log("");
    log(`After ${months} months`);
    log(` Monthly Deposit: $${monthlyDeposit}`);
    log(` Yearly Rate:     ${(rate * 100).toFixed(2)}%`);
    log(` Interest:  $${interest.toFixed(2)}`);
    log(` Deposits:  $${initialBalance.toFixed(2)}`);
    log(` Principle: $${principle.toFixed(2)}`);
}

const getArgs = function() {
    let args = [];
    if (process.argv.length >= 3) {
        args.push(parseInt(process.argv[2]));
    } else { args.push(null); }
    if (process.argv.length >= 4) {
        args.push(parseInt(process.argv[3]));
    } else { args.push(null); }
    if (process.argv.length >= 5) {
        args.push(parseInt(process.argv[4]));
    } else { args.push(null); }
    return args;
}

const usage = function() {
    if (process.argv.length <= 2) {
        console.log("Usage: <initialBalance> <rate> <monthlyDeposit>");
        return true;
    }
    return false
}

if (require.main === module) {
    if (!usage()) {
        const args = getArgs();
        main(args[0], args[1], args[2]);
    } 
   
}