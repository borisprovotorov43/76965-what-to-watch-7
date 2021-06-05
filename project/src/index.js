import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const FILMS = [{
  id: 0,
  title: 'Fantastic Beasts: The Crimes of Grindelwald',
  image: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  url: 'film-page.html',
},
{
  id: 1,
  title: 'Bohemian Rhapsody',
  image: 'img/bohemian-rhapsody.jpg',
  url: 'film-page.html',
},
{
  id: 2,
  title: 'Macbeth',
  image: 'img/macbeth.jpg',
  url: 'film-page.html',
},
{
  id: 3,
  title: 'Aviator',
  image: 'img/aviator.jpg',
  url: 'film-page.html',
},
{
  id: 4,
  title: 'We need to talk about Kevin',
  image: 'img/we-need-to-talk-about-kevin.jpg',
  url: 'film-page.html',
},
{
  id: 5,
  title: 'What We Do in the Shadows',
  image: 'img/what-we-do-in-the-shadows.jpg',
  url: 'film-page.html',
},
{
  id: 6,
  title: 'Revenant',
  image: 'img/revenant.jpg',
  url: 'film-page.html',
},
{
  id: 7,
  title: 'Johnny English',
  image: 'img/johnny-english.jpg',
  url: 'film-page.html',
},
{
  id: 8,
  title: 'Shutter Island',
  image: 'img/shutter-island.jpg',
  url: 'film-page.html',
},
{
  id: 9,
  title: 'Pulp Fiction',
  image: 'img/pulp-fiction.jpg',
  url: 'film-page.html',
},
{
  id: 10,
  title: 'No Country for Old Men',
  image: 'img/no-country-for-old-men.jpg',
  url: 'film-page.html',
},
{
  id: 11,
  title: 'Snatch',
  image: 'img/snatch.jpg',
  url: 'film-page.html',
},
{
  id: 12,
  title: 'Moonrise Kingdom',
  image: 'img/moonrise-kingdom.jpg',
  url: 'film-page.html',
},
{
  id: 13,
  title: 'Seven Years in Tibet',
  image: 'img/seven-years-in-tibet.jpg',
  url: 'film-page.html',
},
{
  id: 14,
  title: 'Midnight Special',
  image: 'img/midnight-special.jpg',
  url: 'film-page.html',
},
{
  id: 15,
  title: 'War of the Worlds',
  image: 'img/war-of-the-worlds.jpg',
  url: 'film-page.html',
},
{
  id: 16,
  title: 'Dardjeeling Limited',
  image: 'img/dardjeeling-limited.jpg',
  url: 'film-page.html',
},
{
  id: 17,
  title: 'Orlando',
  image: 'img/orlando.jpg',
  url: 'film-page.html',
},
{
  id: 18,
  title: 'Mindhunter',
  image: 'img/mindhunter.jpg',
  url: 'film-page.html',
},
{
  id: 19,
  title: 'Midnight Special',
  image: 'img/midnight-special.jpg',
  url: 'film-page.html',
}];


const PROMO = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: '2014',
};

ReactDOM.render(
  <React.StrictMode>
    <App films={FILMS} promo={PROMO} />
  </React.StrictMode>,
  document.getElementById('root'),
);

