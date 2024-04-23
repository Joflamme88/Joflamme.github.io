import othello from '../assets/othello.jpg';
import yummyCook from '../assets/yummycook.jpg';
import botDiscord from '../assets/botDiscord.jpg';
import foodFlex from '../assets/foodFlex.png';
import agsLogo from '../assets/ags_logo.jpg';
import editionLimitee from '../assets/editionlimitee.png';

const ProjetsData = [
  {
    id: 6,
    name: 'Yummy Cook :',
    image: `${yummyCook}`,
    description: [
      {
        description: 'Plateforme de partage de recettes de cuisines',
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
    button_title2: 'Code source',
    button_link2: 'https://github.com/JonathanFlamme/CookBook',
  },
  {
    id: 5,
    name: 'Edition Limitée :',
    image: `${editionLimitee}`,
    description: [
      {
        description:
          "Création d'un site web présentant la guilde d'un jeux vidéo",
      },
      {
        description: "Ajout d'un formulaire de recrutement",
      },
      {
        title: 'Techno :  ',
        description: 'Javascript , React, NextJs',
      },
    ],
    box_title: 'Edition Limitée',
    box_description: [
      "Création d'un site web présentant la guilde d'un jeux vidéo",
      "Ajout d'un formulaire de recrutement",
    ],
    link_box: '',
    button: true,
    button_title: 'Lien du site',
    button_link: 'https://www.editionlimitee-elune.fr/',
  },
  {
    id: 4,
    name: 'Assistance à la gestion des secours :',
    image: `${agsLogo}`,
    description: [
      {
        description: 'Gestion du planning des RH,',
      },
      {
        description: 'Validation des compétences métier des RH par le manager,',
      },
      {
        description:
          'Création de vacations durant un événement par le manager,',
      },
      {
        description: 'Notification par mails/SMS,',
      },
      {
        description: 'Inscription des membres sur les vacations,',
      },
      {
        description: 'Suivi des inscriptions des membres,',
      },
      {
        title: 'Techno : ( FullStack ) ',
        description:
          'Javascript ,TypeScript, Angular, NestJs, Docker, Nx Monorepo',
      },
    ],
    box_title: 'Assistance à la gestion des secours',
    box_description: [
      'Validation des compétences métier des RH par le manager',
      'Gestion du planning du personnel de secours',
    ],
    link_box: '',
    button: false,
  },
  {
    id: 3,
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
    id: 2,
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
    id: 1,
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
