import othello from '../assets/othello.jpg';
import yummyCook from '../assets/yummycook.jpg';
import botDiscord from '../assets/botDiscord.jpg';
import foodFlex from '../assets/foodFlex.png';

const ProjetsData = [
  {
    id: 1,
    name: 'Yummy Cook :',
    image: `${yummyCook}`,
    description: [
      {
        description: 'Partage de recettes entre cuisiniers amateurs',
      },
      {
        description: 'Création de menu personalisé (A venir)',
      },
      {
        title: 'Techno : ( FullStack ) ',
        description:
          'Javascript ,TypeScript, Angular, NestJs, Docker, Nx Monorepo',
      },
    ],
    box_title: 'Yummy Cook',
    box_description: [
      'Partage de recettes entre cuisiniers amateurs',
      'Création de menu personalisé (A venir)',
    ],
    link_box: 'https://github.com/JonathanFlamme/CookBook',
    button: true,
    button_title: 'Lien du site',
    button_link: 'https://yummy-cook-dev.netlify.app',
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
    link_box: 'https://github.com/JonathanFlamme/Joflamme-othello.github.io',
    button: true,
    button_title: 'Cliquer pour jouer',
    button_link: 'https://JonathanFlamme.github.io/Joflamme-othello.github.io/',
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
    link_box: 'https://github.com/JonathanFlamme/Jobot_EditionLimit',
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
    link_box: 'https://github.com/JonathanFlamme/projet-foodflex-front',
    button: true,
    button_title: 'Lien du site',
    button_link: 'https://foodflex.me/',
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
  //   link_box: 'https://github.com/JonathanFlamme/projet-foodflex-back',
  //   button: false,
  // },
];

export default ProjetsData;
