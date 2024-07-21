const greetings = [
    "Good morning.",
    "Good afternoon.",
    "Good evening.",
    "I hope you're doing well",
    "I hope you're having a great week",
    "Greetings!",
    "I hope you're having a wonderful day",
    "I hope this email finds you well",
    "I hope this message finds you well",
    "Thanks for the update!",
    "I appreciate your quick response.",
    "Thanks for getting back to me.",
    "Thanks for getting in touch!",
    "Thank you for your help.",
    "Thanks for the fast response.",
    "It's great to hear from you."
];

const greetStartsWith = ["Hi,", "Hello,"];

const randGreetStartsWith = () => {
    return Math.floor(Math.random() * 2);
};

const randGreet = () => {
    return Math.floor(Math.random() * (greetings.length - 1));
};

console.log(greetStartsWith[randGreetStartsWith()]);
console.log(greetings[randGreet()]);