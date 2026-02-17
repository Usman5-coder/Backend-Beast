import express from 'express'

const app = express()

app

const jokes = [
    {
        id: 1,
        setup: "Why don't scientists trust atoms?",
        punchline: "Because they make up everything!"
    },
    {
        id: 2,
        setup: "Why did the scarecrow win an award?",
        punchline: "He was outstanding in his field!"
    },
    {
        id: 3,
        setup: "What do you call a fake noodle?",
        punchline: "An impasta!"
    },
    {
        id: 4,
        setup: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired!"
    },
    {
        id: 5,
        setup: "What do you call a dog that does magic tricks?",
        punchline: "A Labracadabrador!"
    }
];

const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send("<h1> Server is Listening </h1>")
})

app.get('/api/jokes', (req,res) => {
   
   res.send(jokes)
})

app.listen(port, () => {
    console.log(`the server is listeling on http://localhost:${port}`)
})