let btn = document.querySelector("#new-quote");
let person = document.querySelector(".person");
let quote = document.querySelector(".quote");

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    person: "Albert Einstein",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    person: "Confucius",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    person: "Winston Churchill",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    person: "Wayne Gretzky",
  },
  {
    quote: "Whether you think you can or you think you can't, you're right.",
    person: "Henry Ford",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    person: "Thomas Edison",
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    person: "Tony Robbins",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    person: "Robert Frost",
  },
  {
    quote:
      "Ask not what your country can do for you — ask what you can do for your country.",
    person: "John F. Kennedy",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    person: "Albert Einstein",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    person: "Oscar Wilde",
  },
  {
    quote: "The unexamined life is not worth living.",
    person: "Socrates",
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    person: "Mother Teresa",
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    person: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Always remember that you are absolutely unique. Just like everyone else.",
    person: "Margaret Mead",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    person: "Ralph Waldo Emerson",
  },
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    person: "Maya Angelou",
  },
];

btn.addEventListener("click", function () {
  let idx = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[idx].quote;
  person.innerText = quotes[idx].person;
});
