console.log("Test");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '861c82f77fmsh570dccbb039c37fp15eaf5jsn85e33d56f0cd',
		'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
	}
};

// Async & wait
async function getInfo(word){
try{
    const foobar = await fetch( `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`, options);
    
    const infoFromServer = await foobar.json();
    console.log( infoFromServer.list[0].definition);
 
    const content = document.querySelector("#wordDef");
    content.innerHTML = 
    `<p>${infoFromServer.list[0].word}</p>
    <p>${infoFromServer.list[0].definition}</p>
    <p>${infoFromServer.list[0].definition}</p>
    `;

} catch( error ) {
    console.warn( `Nope: ${error}` );
}
}
 
getInfo('clapter');
