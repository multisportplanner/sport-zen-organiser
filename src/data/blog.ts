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
        text: "Sur le papier, faire du sport, c'est simple : on choisit une activité, on bloque un créneau, on y va. En réalité, c'est souvent tout l'inverse.",
      },
      {
        type: "paragraph",
        text: "Avant même de bouger, il faut trouver un moment, voir avec qui pratiquer, choisir l'activité, réserver un lieu et s'organiser. Et souvent, rien que ça suffit à abandonner.",
      },
      { type: "h2", text: "Le vrai problème, ce n'est pas la motivation" },
      {
        type: "paragraph",
        text: "On pense souvent qu'on ne fait pas assez de sport par manque de motivation. Mais la motivation fluctue : certains jours elle est là, d'autres non. Ce qui change vraiment la donne, c'est la simplicité.",
      },
      {
        type: "highlight",
        text: "Quand quelque chose est simple, on le fait. Quand c'est compliqué, on repousse, même avec de la motivation.",
      },
      { type: "h2", text: "Pourquoi le sport devient compliqué" },
      {
        type: "paragraph",
        text: "Aujourd'hui, faire du sport demande souvent trop d'efforts avant même de commencer.",
      },
      {
        type: "list",
        items: [
          "Trop de décisions à prendre : quel sport, quel niveau, quel lieu, avec qui ?",
          "Une organisation lourde : coordonner les agendas, trouver un créneau commun, réserver.",
          "Un manque de régularité : refaire toute l'organisation chaque semaine devient une charge mentale.",
        ],
      },
      {
        type: "paragraph",
        text: "Résultat : on décroche, non pas parce qu'on ne veut pas, mais parce que tout paraît trop compliqué.",
      },
      { type: "h2", text: "Et si on simplifiait tout ?" },
      {
        type: "paragraph",
        text: "Imagine une autre façon de faire : tu ne t'occupes pas de l'organisation, tu n'as pas à coordonner, tu n'as pas à chercher.",
      },
      {
        type: "list",
        items: [
          "Tu dis ce que tu veux faire.",
          "Tu indiques quand tu es disponible.",
          "Le reste est géré pour toi.",
        ],
      },
      { type: "h2", text: "Faire du sport devient naturel" },
      {
        type: "paragraph",
        text: "Quand tout est simplifié, quelque chose change : tu n'as plus besoin de te motiver pendant des heures, tu y vas sans réfléchir.",
      },
      {
        type: "list",
        items: [
          "Le créneau est déjà fixé.",
          "L'activité est déjà choisie.",
          "Le lieu est déjà réservé.",
        ],
      },
      { type: "h2", text: "La clé, ce n'est pas l'intensité, c'est la régularité" },
      {
        type: "paragraph",
        text: "On pense souvent qu'il faut faire du sport intensément pour que ce soit efficace. En pratique, ce qui transforme vraiment le quotidien, c'est la régularité.",
      },
      {
        type: "paragraph",
        text: "Et la régularité ne vient pas de la motivation. Elle vient de la simplicité. Quand c'est simple, tu continues, tu t'installes dans une routine et ça devient une habitude.",
      },
      { type: "h2", text: "Le rôle du collectif" },
      {
        type: "paragraph",
        text: "Faire du sport seul demande souvent plus d'énergie mentale. À plusieurs, c'est plus engageant, plus motivant et surtout plus agréable.",
      },
      {
        type: "list",
        items: [
          "Tu te sens attendu.",
          "Tu gardes plus facilement ton engagement.",
          "Tu prends plus de plaisir à chaque séance.",
        ],
      },
      { type: "h2", text: "Faire du sport sans l'organiser" },
      {
        type: "paragraph",
        text: "C'est exactement l'idée derrière MSP : te permettre de faire du sport sans gérer toute la partie organisation.",
      },
      {
        type: "list",
        items: [
          "Tu n'as plus à chercher une activité.",
          "Tu n'as plus à trouver des partenaires.",
          "Tu n'as plus à coordonner les agendas.",
          "Tu n'as plus à réserver un lieu.",
        ],
      },
      { type: "h2", text: "Concrètement, comment ça se passe ?" },
      {
        type: "list",
        items: [
          "Tu indiques les sports qui t'intéressent.",
          "Tu précises tes disponibilités.",
          "Tu reçois une proposition de séance.",
          "Tu n'as plus qu'à y aller.",
        ],
      },
      { type: "h2", text: "Et même en déplacement" },
      {
        type: "paragraph",
        text: "Que tu sois chez toi ou ailleurs, le principe reste le même : continuer à faire du sport facilement, sans tout recommencer à chaque fois.",
      },
      { type: "h2", text: "Reprendre le sport sans pression" },
      {
        type: "paragraph",
        text: "Faire du sport simplement, c'est aussi enlever la pression : pas besoin d'être performant, pas besoin d'être régulier dès le début. L'objectif, c'est de bouger et de retrouver du plaisir.",
      },
      { type: "h2", text: "Finalement, ce qui bloque, ce n'est pas toi" },
      {
        type: "paragraph",
        text: "Si tu as du mal à faire du sport régulièrement, ce n'est probablement pas un manque de volonté. C'est surtout que c'est trop compliqué aujourd'hui. Et ça peut changer.",
      },
      { type: "h2", text: "Et si tu essayais autrement ?" },
      {
        type: "paragraph",
        text: "Tu peux continuer à essayer de tout organiser seul, ou tester une autre manière de faire : plus simple, plus fluide, plus naturelle.",
      },
      {
        type: "highlight",
        text: "Rejoins un groupe près de chez toi et découvre ce que ça fait de faire du sport sans avoir à l'organiser.",
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
