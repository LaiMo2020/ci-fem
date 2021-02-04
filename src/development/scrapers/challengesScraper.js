/*
============================================
    requires
============================================
*/

const requestPromise = require('request-promise');
const $ = require('cheerio');
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '../json');

/*
============================================
    variables
============================================
*/

let cards;
const challenges = [];

/*
============================================
    scrape page
============================================
*/

requestPromise('https://www.frontendmentor.io/challenges')
    .then(html => {
        cards = $('.PreviewItem__StyledItem-wu6lmx-0', html);
        parseCards(cards);
        writeToJSON();
    })
    .catch(error => console.log(error));

/*
============================================
    parse cards into individual challenges
============================================
*/

const parseCards = cards => {
    for (let i = 0; i < cards.length; i++) {

        const challenge = {
            url: 'https://www.frontendmentor.io' + $('.CTA__StyledLink-sc-8of133-0', cards[i]).attr('href'),
            image: `challenge-${i}-main.jpeg`,
            freemium: $('.info  .header span.label', cards[i]).text(),
            title: $('.Headings__StyledH3-sc-1gmdub7-2 > a', cards[i]).text(),
            description: $('.info p', cards[i]).text(),
            difficulty: $('.Level__StyledWrapper-sgfbbj-0 span ', cards[i]).text(),
            languages: [],
            images: [],
        };

        challenge.languages = ['HTML', 'CSS', 'JS', 'API'].filter(lang => {
            const languagesString = $('.Languages__StyledList-sc-6jskgo-0 li', cards[i]).text();
            return languagesString.includes(lang);
        });

        challenges.push(challenge);
    }
};

/*
============================================
    write file to json
============================================
*/

const writeToJSON = () => {
    try {
        fs.writeFileSync(`${dir}/challenges.json`, JSON.stringify(challenges));
    } 
    catch (error) {
        console.log(error);
    }
}
