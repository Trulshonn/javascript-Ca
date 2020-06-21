const url = "https://official-joke-api.appspot.com/random_joke";

async function getRandom_joke() {
    try {
    const res = await fetch(url);
    const results = await res.json();

    displayRandom_joke(results);
    }catch (error) {
        console.log(error);
    }
}

getRandom_joke();

function displayRandom_joke(joke) {
{
    const container = document.querySelector("h2");
    
    let html = joke.type +" Joke";
    
    container.innerHTML = html
}
{
    const setup = document.querySelector(".joke-setup");
    
    let html = joke.setup;
    
    setup.innerHTML = html
}
{
    const punchline = document.querySelector(".joke-punchline");
    
    let html = joke.punchline;
    
    punchline.innerHTML = html
}
{
    const title = document.querySelector("title");
    
    let html = joke.setup;
    
    title.innerHTML = html
}
}