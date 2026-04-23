import reprendreSportImg from "@/assets/blog/reprendre-sport.jpg";
import sportSimplementImg from "@/assets/blog/sport-simplement.jpg";
import sportPresImg from "@/assets/blog/sport-pres-de-chez-vous.jpg";

export type BlogCategory =
  | "Reprendre le sport"
  | "Faire du sport simplement"
  | "Faire du sport près de chez vous";

export interface FAQItem {
  q: string;
  a: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  image: string;
  location?: string;
  /** Full content rendered on the article page. */
  content: ArticleSection[];
  faq: FAQItem[];
}

export type ArticleSection =
  | { type: "intro"; text: string }
  | { type: "quickAnswer"; question: string; answer: string }
  | { type: "h2"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "highlight"; text: string };

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Reprendre le sport",
  "Faire du sport simplement",
  "Faire du sport près de chez vous",
];

export const ARTICLES: BlogArticle[] = [
  {
    slug: "reprendre-le-sport-facilement",
    title: "Comment reprendre le sport facilement (sans motivation et sans s'organiser)",
    description: "Le vrai blocage n'est pas la motivation, c'est l'organisation. Voici comment s'y remettre simplement.",
    category: "Reprendre le sport",
    image: reprendreSportImg,
    content: [
      {
        type: "intro",
        text: "Tu veux reprendre le sport… mais entre le travail, les enfants et la fatigue, ça ne tient jamais dans la durée.",
      },
      {
        type: "quickAnswer",
        question: "Comment reprendre le sport facilement ?",
        answer:
          "En simplifiant l'organisation, en réduisant le choix et en pratiquant en groupe près de chez soi.",
      },
      { type: "h2", text: "Le vrai problème" },
      {
        type: "paragraph",
        text: "Quand on essaie de se remettre au sport, on bute presque toujours sur trois obstacles bien connus :",
      },
      {
        type: "list",
        items: [
          "Le manque de temps : la semaine passe trop vite, on remet à plus tard.",
          "L'organisation : trouver le bon créneau, le bon lieu, la bonne activité, ça décourage.",
          "La solitude : pratiquer seul rend l'effort moins agréable et moins régulier.",
        ],
      },
      { type: "h2", text: "Le déclic" },
      {
        type: "highlight",
        text: "Le problème, ce n'est pas ta motivation. C'est l'organisation.",
      },
      {
        type: "paragraph",
        text: "Tant que reprendre le sport demande de planifier, choisir, comparer, s'inscrire, l'effort mental est plus grand que l'effort physique. Forcément, on lâche.",
      },
      { type: "h2", text: "Solutions simples" },
      {
        type: "list",
        items: [
          "Arrêter de chercher le bon sport : commence par bouger, le reste viendra.",
          "Bloquer un créneau fixe dans la semaine, comme un rendez-vous avec toi-même.",
          "Pratiquer en groupe pour profiter de l'énergie collective.",
          "Réduire la friction : moins tu as à organiser, plus tu y vas.",
          "Rester proche : choisis une activité à moins de 15 minutes de chez toi.",
        ],
      },
      { type: "h2", text: "Et MSP dans tout ça ?" },
      {
        type: "paragraph",
        text: "C'est exactement pour ça que MultiSport Planner existe. On te propose chaque semaine une séance en petit groupe près de chez toi, sans choix à faire, sans organisation. Tu viens, tu profites.",
      },
    ],
    faq: [
      {
        q: "Comment reprendre le sport facilement ?",
        a: "Commence petit, bloque un créneau fixe, pratique en groupe et choisis une activité proche de chez toi. La régularité vient quand l'organisation disparaît.",
      },
      {
        q: "Comment être régulier dans le sport ?",
        a: "Le secret : un créneau fixe, un groupe qui t'attend et zéro décision à prendre le jour J. Plus c'est simple, plus c'est régulier.",
      },
      {
        q: "Quel sport choisir ?",
        a: "Le meilleur sport est celui que tu vas réellement pratiquer. Préfère une activité accessible, proche de chez toi et qui te plaît, plutôt que la plus efficace en théorie.",
      },
    ],
  },
  {
    slug: "faire-du-sport-simplement",
    title: "Faire du sport simplement : la fin du sport compliqué",
    description: "Pas besoin de salle, d'abonnement ni de programme. Voici comment bouger sans se prendre la tête.",
    category: "Faire du sport simplement",
    image: sportSimplementImg,
    content: [
      {
        type: "intro",
        text: "Faire du sport devrait être simple. Pourtant, pour beaucoup, ça finit par devenir une charge mentale de plus dans la semaine.",
      },
      {
        type: "paragraph",
        text: "Ce n'est pas le manque d'envie qui bloque. C'est tout ce qu'il faut gérer avant même de commencer : trouver le bon moment, choisir une activité, se motiver, vérifier la logistique, recommencer la semaine suivante.",
      },
      { type: "h2", text: "Le vrai frein, c'est la complexité" },
      {
        type: "paragraph",
        text: "On se répète souvent \"il faut juste que je me motive\". Mais la motivation est instable, et c'est normal. Elle monte, elle descend, elle dépend de la fatigue, du travail, du quotidien.",
      },
      {
        type: "paragraph",
        text: "Ce qui fait la différence, ce n'est pas d'être motivé tous les jours. C'est de rendre la pratique tellement simple qu'on y va même quand la journée a été longue.",
      },
      {
        type: "highlight",
        text: "Quand c'est fluide, tu y vas. Quand c'est compliqué, tu repousses.",
      },
      { type: "h2", text: "Pourquoi on décroche si facilement" },
      {
        type: "paragraph",
        text: "Ce n'est pas une question de volonté. C'est une accumulation de petites frictions qui finissent par tout bloquer :",
      },
      {
        type: "list",
        items: [
          "Trop de décisions : quel sport, quel lieu, quel niveau, quel horaire ?",
          "Trop de coordination : seul, à deux, en groupe, avec qui exactement ?",
          "Trop de relance mentale : il faut tout replanifier à chaque fois.",
          "Trop d'incertitude : on ne sait pas toujours comment commencer simplement.",
        ],
      },
      {
        type: "paragraph",
        text: "Résultat : on repousse d'une semaine, puis de deux, puis on se dit qu'on reprendra \"quand ce sera plus calme\".",
      },
      { type: "h2", text: "Faire simple change tout" },
      {
        type: "paragraph",
        text: "Le sport devient durable quand il prend moins de place mentale. Plus tu réduis ce que tu dois organiser, plus tu as de chances de rester régulier.",
      },
      {
        type: "list",
        items: [
          "Un créneau clair dans la semaine.",
          "Une activité accessible, pas parfaite mais faisable.",
          "Un cadre simple : tu sais où aller et à quelle heure.",
        ],
      },
      { type: "h2", text: "La régularité avant l'intensité" },
      {
        type: "paragraph",
        text: "Tu n'as pas besoin de faire des séances extrêmes pour ressentir des effets. Ce qui compte, c'est de revenir chaque semaine, même sur des formats simples.",
      },
      {
        type: "paragraph",
        text: "Une pratique régulière améliore l'énergie, le sommeil, le moral et la confiance. C'est progressif, mais concret. Et surtout, c'est tenable dans le temps.",
      },
      { type: "h2", text: "Le collectif aide à tenir dans le temps" },
      {
        type: "paragraph",
        text: "Faire du sport seul demande plus de discipline. À plusieurs, c'est souvent plus simple : tu es attendu, l'ambiance est meilleure, et tu t'accroches plus facilement.",
      },
      {
        type: "list",
        items: [
          "Tu te poses moins de questions avant d'y aller.",
          "Tu gardes plus facilement ton engagement.",
          "Tu prends davantage de plaisir pendant la séance.",
        ],
      },
      { type: "h2", text: "Pas besoin d'être \"sportif\" pour commencer" },
      {
        type: "paragraph",
        text: "Tu n'as pas besoin d'avoir un niveau particulier. Tu n'as pas besoin d'un équipement complexe. Tu n'as pas besoin d'un plan parfait.",
      },
      {
        type: "paragraph",
        text: "Commencer petit est souvent la meilleure stratégie : une séance, puis une autre. Le but n'est pas de tout changer en une semaine. Le but, c'est de reprendre un rythme réaliste.",
      },
      { type: "h2", text: "Ce qui fatigue, c'est d'organiser" },
      {
        type: "paragraph",
        text: "Souvent, on abandonne avant même l'effort physique. Pourquoi ? Parce que toute l'organisation repose sur toi : trouver une activité, contacter des gens, aligner les agendas, réserver un lieu.",
      },
      {
        type: "list",
        items: [
          "Chercher quoi faire.",
          "Trouver avec qui.",
          "Valider un créneau commun.",
          "Relancer quand ça annule.",
        ],
      },
      { type: "h2", text: "L'idée MSP : enlever la charge mentale" },
      {
        type: "paragraph",
        text: "MSP a été pensé pour ça : te permettre de faire du sport sans devoir gérer toute la mécanique autour.",
      },
      {
        type: "list",
        items: [
          "Tu indiques les sports qui t'intéressent.",
          "Tu partages tes disponibilités.",
          "Tu reçois une proposition claire.",
          "Tu viens, sans t'occuper du reste.",
        ],
      },
      { type: "h2", text: "Une approche pensée pour la vraie vie" },
      {
        type: "paragraph",
        text: "Travail, famille, imprévus : ton agenda bouge. L'objectif n'est pas de te rajouter une contrainte. L'objectif, c'est de garder une pratique possible, même dans une semaine chargée.",
      },
      { type: "h2", text: "Ce n'est pas toi le problème" },
      {
        type: "paragraph",
        text: "Si tu n'arrives pas à être régulier aujourd'hui, ce n'est probablement pas un manque de volonté. C'est surtout que le système est trop compliqué. Et la bonne nouvelle, c'est que ça se simplifie.",
      },
      { type: "h2", text: "Changer d'approche peut suffire" },
      {
        type: "paragraph",
        text: "Tu peux continuer à tout porter seul, ou tester une version plus simple : moins de décisions, moins de friction, plus de constance. C'est souvent là que tout commence.",
      },
      {
        type: "highlight",
        text: "Faire du sport simplement, ce n'est pas faire moins. C'est enlever ce qui te bloque pour enfin avancer.",
      },
    ],
    faq: [
      {
        q: "Faut-il un programme pour faire du sport ?",
        a: "Non. La régularité prime sur la complexité. Mieux vaut une séance simple chaque semaine qu'un programme parfait jamais commencé.",
      },
      {
        q: "Combien de fois par semaine ?",
        a: "Une à deux séances suffisent pour ressentir des effets clairs sur l'énergie et le sommeil.",
      },
    ],
  },
  {
    slug: "faire-du-sport-pres-de-chez-vous-nice",
    title: "Faire du sport près de chez vous à Nice : par où commencer",
    description: "Les meilleurs endroits pour bouger sur la Côte d'Azur, sans abonnement et en petit groupe.",
    category: "Faire du sport près de chez vous",
    image: sportPresImg,
    location: "Nice",
    content: [
      {
        type: "intro",
        text: "Nice est l'un des terrains de jeu les plus accessibles de France pour faire du sport. Encore faut-il savoir par où commencer.",
      },
      { type: "h2", text: "Les meilleurs spots" },
      {
        type: "list",
        items: [
          "La Promenade des Anglais pour la course et le vélo.",
          "Le Parc de la Colline du Château pour le renforcement en plein air.",
          "Les collines de l'arrière-pays pour la randonnée.",
        ],
      },
      { type: "h2", text: "Comment s'y mettre simplement" },
      {
        type: "paragraph",
        text: "Le plus dur, c'est de commencer seul. Rejoindre un petit groupe rend la première séance beaucoup plus facile.",
      },
    ],
    faq: [
      {
        q: "Où faire du sport à Nice sans abonnement ?",
        a: "La Promenade, les parcs et les collines offrent de nombreuses options gratuites. Avec MSP, tu peux aussi rejoindre des séances en petit groupe sans engagement.",
      },
    ],
  },
];

export const getArticleBySlug = (slug: string): BlogArticle | undefined =>
  ARTICLES.find((a) => a.slug === slug);
