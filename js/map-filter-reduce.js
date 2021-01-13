const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Problem 1
//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// let threePlus = [];
// for (var i = 0; i < users.length; i ++){
//     if(users[i].languages.length >= 3){
//         threePlus.push(users[i])
//     }
// }
// console.log("Users with knowledge of more than three languages: ");
// console.log(threePlus);

let minThree = users.filter(user =>user.languages.length >= 3)
console.log("Users with knowledge of more than three languages: ");
console.log(minThree)
//Problem 2
//Use .map to create an array of strings where each element is a user's email address
// let contact = [];
// for(var i = 0; i < users.length; i++){
//      contact.push(users[i].email)
// }
// console.log("Available contact information: ");
// console.log(contact);

let userEmails = users.map(user => user.email);
console.log(`Available contact information: ${userEmails}`);

//Problem 3
//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
    //sum
const totalExperience = users.reduce((total, person) => {return total + person.yearsOfExperience;}, 0);
console.log(`The total amount of experience is ${totalExperience} years while the average is ${totalExperience / users.length}` );
    //average
// const averageExperience = users.reduce((total, person) => {return totalExperience / users.length;}, 0);
// console.log(`The average amount of experience is ${averageExperience} years` );

//Problem 4
let longestEmailUser = users.reduce((currentLongest, user) => user.email.length > currentLongest.email.length ? user : currentLongest, users[0]);
console.log(longestEmailUser.name + " has to longest email with " + longestEmailUser.email);