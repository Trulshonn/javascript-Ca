const url = "https://official-joke-api.appspot.com/random_ten";

async function getRandom_ten() {
    try {
    const res = await fetch(url);
    const results = await res.json();

    displayRandom_ten(results);
    }   catch (error) {
    console.log(error);
    }
}


getRandom_ten();



function displayRandom_ten(jokes) {
    console.log(jokes);
    const jokesContainer = document.querySelector(".col-sm-6, .col-md-4, .col-lg-3");
    let html = "";

    for (let i = 5; i < jokes.length; i++) {
        console.log(jokes[i].id)

        if (!jokes[i].type) {
            continue;
        }

    

        html += `<div>
                    <h4>${jokes[i].type}</h4>
                    <div>${jokes[i].setup}</div>                    
                    <div>${jokes[i].punchline}</div>
                </div>`;
    }

       jokesContainer.innerHTML = html
}
    





    
    





















//function displayRandom_ten(joke) {
//        const container = document.querySelector(".type");     
//        let html = joke.type;       
//       container.innerHTML = html
//}