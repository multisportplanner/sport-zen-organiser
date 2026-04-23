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
        text: "Le sport est devenu une affaire de programmes, d'applis, d'objectifs. Et si on revenait à l'essentiel : bouger, ensemble, sans pression ?",
      },
      { type: "h2", text: "Pourquoi le sport est devenu compliqué" },
      {
        type: "paragraph",
        text: "Plus le choix est large, plus la décision est difficile. C'est le paradoxe du choix appliqué au sport.",
      },
      { type: "h2", text: "La règle des 3 critères" },
      {
        type: "list",
        items: [
          "Proche : moins de 15 minutes de trajet.",
          "Régulier : un créneau fixe par semaine.",
          "Convivial : en petit groupe, jamais seul.",
        ],
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
