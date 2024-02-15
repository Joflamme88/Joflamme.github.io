import othello from '../assets/othello.jpg';
import cookBook from '../assets/cookBook.jpg';
import botDiscord from '../assets/botDiscord.jpg';
import foodFlex from '../assets/foodFlex.png';

const ProjetsData = [
  {
    id: 1,
    name: 'Cookbook :',
    image: `${cookBook}`,
    description: [
      {
        description: 'Gestion de ses propres recettes de cuisine',
      },
      {
        description: 'Création de menu personalisé (A venir)',
      },
      {
        title: 'Techno : ',
        description: 'TypeScript, Angular, NestJs, Docker, Nx Monorepo',
      },
    ],
    box_title: 'CookBook',
    box_description: [
      'Gestion de ses propres recettes de cuisine',
      'Création de menu personalisé (A venir)',
    ],
    link_box: 'https://github.com/Joflamme88/CookBook',
    button: false,
  },
  {
    id: 2,
    name: 'Othello :',
    image: `${othello}`,
    description: [
      {
        description: 'Développement du jeu de plateau Othello',
      },
      {
        title: 'Techno : ',
        description: 'Javascript Vanilla',
      },
    ],
    box_title: 'Othello : jeu de société',
    box_description: [
      'Différent mode',
      'Joueur contre joueur',
      'Joueur contre ordinateur',
      'Mode facile',
    ],
    link_box: 'https://github.com/Joflamme88/Joflamme-othello.github.io',
    button: true,
    button_title: 'Cliquer pour jouer',
    button_link: 'https://joflamme88.github.io/Joflamme-othello.github.io/',
  },
  {
    id: 3,
    name: 'Bots Discord :',
    image: `${botDiscord}`,
    description: [
      {
        description: 'TypeScript',
      },
    ],
    box_title: 'Bots Discords',
    box_description: [],
    link_box: 'https://github.com/Joflamme88/BotDiscord_EditionLimit',
    button: false,
  },
  {
    id: 4,
    name: 'FoodFlex :',
    image: `${foodFlex}`,
    description: [
      {
        description:
          'Gestion de recettes de cuisine sur un planning à la semaine',
      },
      {
        title: 'Techno : ',
        description: 'TypeScript - React - Tailwind - Express - Sequelize',
      },
    ],
    box_title: 'Foodflex',
    box_description: [
      'Gestion de recettes de cuisine sur un planning à la semaine',
      'Gestion de recettes favories',
    ],
    link_box: 'https://github.com/Joflamme88/projet-foodflex-front',
    button: false,
    // button_title: 'Lien du site',
    // button_link: 'https://foodflex.me/',
  },
  // {
  //   id: 5,
  //   name: 'FoodFlex - Back :',
  //   image: `${foodFlex}`,
  //   description: [
  //     {
  //       description: 'NodeJs - Espress - Sequelize',
  //     },
  //   ],
  //   box_title: 'Foodflex - Back',
  //   box_description: [
  //     'Gestion de recette de cuisine sur un planning à la semaine',
  //   ],
  //   link_box: 'https://github.com/Joflamme88/projet-foodflex-back',
  //   button: false,
  // },
];

export default ProjetsData;
