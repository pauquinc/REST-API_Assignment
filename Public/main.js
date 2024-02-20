console.log("Test");

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '861c82f77fmsh570dccbb039c37fp15eaf5jsn85e33d56f0cd',
        'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
};

// Async & wait
async function getInfo(word) {
    try {
        const foobar = await fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`, options);

        const infoFromServer = await foobar.json();
        console.log(infoFromServer.list[0].definition);

        const content = document.querySelector("#wordDef");
        content.innerHTML =
            `
    <b>Word</b>
    <p>${infoFromServer.list[0].word}</p>
    <b>Definition</b>
    <p>${infoFromServer.list[0].definition}</p>
    <b>Example</b>
    <p>${infoFromServer.list[0].example}</p>
    `;

    } catch (error) {
        console.warn(`Nope: ${error}`);
    }
}

getInfo('clapter');
