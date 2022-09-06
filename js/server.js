// const express = require("exppress");

// const app = express();

// app.get("/", (req, res) => {
//     return res.json({message})    
// })


// app.listen("8080")

// `https://pokeapi.co/api/v2/pokemon/${pokemon}`

async function getContent(){

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        const data = await response.json()

        
    }catch (error){
        console.log(error)
    }
}

getContent()

function show(pokemon) {
    let output = "";
} 
