import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const FILMS = [{
  id: 0,
  title: 'Fantastic Beasts: The Crimes of Grindelwald',
  src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  url: 'film-page.html',
},
{
  id: 1,
  title: 'Bohemian Rhapsody',
  src: 'img/bohemian-rhapsody.jpg',
  url: 'film-page.html',
},
{
  id: 2,
  title: 'Macbeth',
  src: 'img/macbeth.jpg',
  url: 'film-page.html',
},
{
  id: 3,
  title: 'Aviator',
  src: 'img/aviator.jpg',
  url: 'film-page.html',
},
{
  id: 4,
  title: 'We need to talk about Kevin',
  src: 'img/we-need-to-talk-about-kevin.jpg',
  url: 'film-page.html',
},
{
  id: 5,
  title: 'What We Do in the Shadows',
  src: 'img/what-we-do-in-the-shadows.jpg',
  url: 'film-page.html',
},
{
  id: 6,
  title: 'Revenant',
  src: 'img/revenant.jpg',
  url: 'film-page.html',
},
{
  id: 7,
  title: 'Johnny English',
  src: 'img/johnny-english.jpg',
  url: 'film-page.html',
},
{
  id: 8,
  title: 'Shutter Island',
  src: 'img/shutter-island.jpg',
  url: 'film-page.html',
},
{
  id: 9,
  title: 'Pulp Fiction',
  src: 'img/pulp-fiction.jpg',
  url: 'film-page.html',
},
{
  id: 10,
  title: 'No Country for Old Men',
  src: 'img/no-country-for-old-men.jpg',
  url: 'film-page.html',
},
{
  id: 11,
  title: 'Snatch',
  src: 'img/snatch.jpg',
  url: 'film-page.html',
},
{
  id: 12,
  title: 'Moonrise Kingdom',
  src: 'img/moonrise-kingdom.jpg',
  url: 'film-page.html',
},
{
  id: 13,
  title: 'Seven Years in Tibet',
  src: 'img/seven-years-in-tibet.jpg',
  url: 'film-page.html',
},
{
  id: 14,
  title: 'Midnight Special',
  src: 'img/midnight-special.jpg',
  url: 'film-page.html',
},
{
  id: 15,
  title: 'War of the Worlds',
  src: 'img/war-of-the-worlds.jpg',
  url: 'film-page.html',
},
{
  id: 16,
  title: 'Dardjeeling Limited',
  src: 'img/dardjeeling-limited.jpg',
  url: 'film-page.html',
},
{
  id: 17,
  title: 'Orlando',
  src: 'img/orlando.jpg',
  url: 'film-page.html',
},
{
  id: 18,
  title: 'Mindhunter',
  src: 'img/mindhunter.jpg',
  url: 'film-page.html',
},
{
  id: 19,
  title: 'Midnight Special',
  src: 'img/midnight-special.jpg',
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

