
const apiUrl = 'https://api.tronalddump.io';

async function getRandomQuote() {
    const urlExt = '/random/quote';
    try {
        let fetchResult = await fetch(`${apiUrl}${urlExt}`, {
            method: 'GET',
        })
        let jsonData = await fetchResult.json();
        return jsonData;
    } catch (error) {
        console.log(error);
    }
};