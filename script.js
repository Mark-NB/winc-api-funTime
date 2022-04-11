const siteQuote = document.querySelector('.main__quote');
const siteDate = document.querySelector('.main__date');
const siteAuthor = document.querySelector('.main__author');
const siteBtn = document.querySelector('.main__btn');

const addToDom = (wisdom, date, wiseGuy) => {

    if (wisdom.includes('https')) {
        let wisdomArray = wisdom.split('https');
        siteQuote.innerHTML = `${wisdomArray[0]}<a target="_blank" href="https${wisdomArray[1]}">${wisdomArray[1]}</a>`;
    } else {
        siteQuote.innerHTML = wisdom;
    };

    let newDate = new Date(date);
    let dateConverted = newDate.toDateString();
    siteDate.innerHTML = dateConverted;

    siteAuthor.innerHTML = wiseGuy;
    siteBtn.innerHTML = 'I need more wisdom!';
};

const acquireWisdom = async () => {
    let wisdomObject = await getRandomQuote();
    addToDom(wisdomObject.value, wisdomObject.appeared_at, wisdomObject._embedded.author[0].name);
};


siteBtn.addEventListener('click', function (e) {
    acquireWisdom();
});


