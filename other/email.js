
function generateValid(allEmails, black) {
    for (let indexAll in allEmails) {
        if (!black.includes(allEmails[indexAll])) {
            validAll.push(allEmails[indexAll]);
        }
    }
    return validAll;
}

const allEmails = ['valid@email.com', 'valid1@email.com', 'valid2@email.com',  'invalidvalid@email.com', 'invalidvalid1@email.com', 'invalidvalid2@email.com', 'invalidvalid3@email.com', 'invalidvalid4@email.com', 'valid3@email.com', 'valid4@email.com'];
const blackList = ['invalidvalid@email.com', 'invalidvalid1@email.com', 'invalidvalid2@email.com', 'invalidvalid3@email.com', 'invalidvalid4@email.com'];
let validAll = [];


let validEmails = generateValid(allEmails, blackList);
console.log(validEmails);