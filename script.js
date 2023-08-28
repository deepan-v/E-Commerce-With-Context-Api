let quote = document.querySelector('.quote')
let person = document.querySelector(".name")
let btn = document.querySelector('#button')


let quotes = [
    {quote:" \"Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.\" ",
     person:'Thomas'},

    {quote:" \"Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.\" ",
     person:'heui ketne'},

    {quote:" \"Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.\" ",
     person:'gilton'},

    {quote:" \"Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.\" ",
     person:'john'},

    {quote:" \"Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.\" ",
     person:'Hillary Clinton'},

    {quote:"If you're not stubborn, you'll give up on experiments too soon. And if you're not flexible, you'll pound your head against the wall and you won't see a different solution to a problem you're trying to solve.",
     person:'steve jobs'},

    {quote:"The best way to predict your future is to create it." ,
     person:'deepan'},

    {quote:"Identity is a prison you can never escape, but the way to redeem your past is not to run from it, but to try to understand it, and use it as a foundation to grow.",
     person:' Clinton'},

    {quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.',
     person:'Albert'},
    {quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.',
     person:'Richard'}
]

btn.addEventListener('click',function(){
    let index = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[index].quote
    person.innerText = quotes[index].person
})

