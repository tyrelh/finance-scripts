#!/usr/bin/node

const log = (msg) => {
    console.log(msg);
}

const main = function() {
    const months = 12;
    let principle = 9000;
    let deposits = 0;
    let interest = 0;
    let deposit = 25;
    const rate = 0.02;
    const monthlyRate = rate / 12;

    for (let i = 1; i <= months; i++) {
        log(`Month ${i}`);
        principle += deposit;
        deposits += deposit;
        log(`Principle with deposit: ${principle.toFixed(2)}`);
        let interestThisMonth = principle * monthlyRate;
        log(`Interest this month: ${interestThisMonth.toFixed(2)}`);
        principle += interestThisMonth;
        interest += interestThisMonth; 
    }

    log("");
    log(`After ${months} months`);
    log(` Monthly Deposit: $${deposit}`);
    log(` Yearly Rate:     ${(rate * 100).toFixed(2)}%`);
    log(` Interest:  $${interest.toFixed(2)}`);
    log(` Deposits:  $${deposits.toFixed(2)}`);
    log(` Principle: $${principle.toFixed(2)}`);
}

if (require.main === module) {
    main();
}