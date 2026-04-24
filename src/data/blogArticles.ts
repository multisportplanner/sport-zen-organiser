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
  metaTitle: string;
  metaDescription: string;
  category: BlogCategory;
  date: string;
  excerpt: string;
  image: string;
  featuredImageAlt: string;
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

export const blogArticles: BlogArticle[] = [
  {
    slug: "reprendre-le-sport-facilement",
    title: "Comment reprendre le sport facilement",
    metaTitle:
      "Comment reprendre le sport facilement et durablement | MultiSport Planner",
    metaDescription:
      "Conseils simples pour reprendre le sport facilement, retrouver une routine et bouger près de chez vous sans toute la charge d’organisation.",
    date: "2026-04-23",
    excerpt:
      "Reprendre le sport n’est pas une question de motivation. Quand tout devient plus simple, bouger redevient naturel.",
    category: "Reprendre le sport",
    image: reprendreSportImg,
    featuredImageAlt: "Personnes reprenant le sport simplement en petit groupe",
    content: [
      {
        type: "intro",
        text: "Reprendre le sport fait partie de ces envies qu’on remet souvent à plus tard.",
      },
      {
        type: "paragraph",
        text: "On se dit qu’on va s’y remettre lundi. Puis le lundi passe. On pense au mois prochain. Puis aux vacances. Puis à la rentrée.",
      },
      {
        type: "paragraph",
        text: "Et plus le temps passe, plus cela semble compliqué.",
      },
      {
        type: "paragraph",
        text: "Pourtant, reprendre le sport ne devrait pas être une montagne.",
      },
      {
        type: "paragraph",
        text: "Ce n’est pas forcément une question de volonté. Ce n’est pas non plus une question de performance.",
      },
      {
        type: "paragraph",
        text: "Très souvent, le vrai sujet, c’est de trouver une façon simple, réaliste et agréable de recommencer.",
      },
      { type: "h2", text: "Reprendre le sport, ce n’est pas repartir de zéro" },
      {
        type: "paragraph",
        text: "Quand on n’a pas fait de sport depuis un moment, on peut avoir l’impression qu’il faut “redevenir sportif” avant même de commencer.",
      },
      {
        type: "paragraph",
        text: "C’est souvent là que ça bloque.",
      },
      {
        type: "list",
        items: [
          "des séances trop intenses",
          "un rythme impossible à tenir",
          "des douleurs",
          "un niveau qu’on n’a plus",
        ],
      },
      {
        type: "paragraph",
        text: "Résultat : on reporte.",
      },
      {
        type: "paragraph",
        text: "Mais reprendre le sport, c’est juste recommencer à bouger, à son rythme.",
      },
      { type: "h2", text: "Le plus difficile, c’est souvent de s’y remettre seul" },
      {
        type: "paragraph",
        text: "Le problème n’est pas seulement de choisir une activité.",
      },
      {
        type: "paragraph",
        text: "Il faut aussi :",
      },
      {
        type: "list",
        items: [
          "trouver un créneau",
          "choisir un endroit",
          "s’organiser",
          "réussir à tenir dans la durée",
        ],
      },
      {
        type: "paragraph",
        text: "Et c’est souvent là que tout s’arrête.",
      },
      { type: "h2", text: "Pour reprendre facilement, il faut commencer petit" },
      {
        type: "paragraph",
        text: "Pas besoin de viser trop haut dès le début.",
      },
      {
        type: "paragraph",
        text: "Ce qui compte :",
      },
      {
        type: "list",
        items: [
          "retrouver une régularité",
          "reprendre confiance",
          "ressentir du plaisir",
        ],
      },
      {
        type: "paragraph",
        text: "Une seule séance bien placée peut suffire à relancer la dynamique.",
      },
      { type: "h2", text: "La régularité compte plus que la performance" },
      {
        type: "paragraph",
        text: "Ce qui change vraiment les choses, ce n’est pas l’intensité.",
      },
      {
        type: "paragraph",
        text: "C’est la continuité.",
      },
      {
        type: "paragraph",
        text: "Faire un peu, mais régulièrement, permet de créer une habitude.",
      },
      {
        type: "paragraph",
        text: "Et c’est cette habitude qui fait toute la différence.",
      },
      { type: "h2", text: "Le collectif aide énormément" },
      {
        type: "paragraph",
        text: "Reprendre seul est difficile.",
      },
      {
        type: "paragraph",
        text: "À plusieurs, c’est plus simple :",
      },
      {
        type: "list",
        items: ["plus engageant", "plus motivant", "plus naturel"],
      },
      {
        type: "paragraph",
        text: "On hésite moins à y aller.",
      },
      { type: "h2", text: "Simplifier l’organisation change tout" },
      {
        type: "paragraph",
        text: "Le vrai levier, ce n’est pas la discipline.",
      },
      {
        type: "paragraph",
        text: "C’est la simplicité.",
      },
      {
        type: "paragraph",
        text: "Quand tout est plus fluide :",
      },
      {
        type: "list",
        items: ["on y va plus facilement", "on annule moins", "on continue"],
      },
      { type: "h2", text: "Reprendre le sport près de chez soi" },
      {
        type: "paragraph",
        text: "Plus c’est proche, plus c’est facile.",
      },
      {
        type: "paragraph",
        text: "Moins de logistique = plus de régularité.",
      },
      { type: "h2", text: "Retrouver du plaisir" },
      {
        type: "paragraph",
        text: "Reprendre le sport, ce n’est pas se forcer.",
      },
      {
        type: "paragraph",
        text: "C’est retrouver une sensation simple : bouger, respirer, se sentir bien.",
      },
      { type: "h2", text: "Une autre façon de reprendre" },
      {
        type: "paragraph",
        text: "C’est l’idée de MSP.",
      },
      {
        type: "paragraph",
        text: "Tu indiques :",
      },
      {
        type: "list",
        items: ["ce que tu veux faire", "quand tu es disponible"],
      },
      {
        type: "paragraph",
        text: "Et on s’occupe du reste.",
      },
      { type: "h2", text: "Reprendre le sport facilement, c’est possible" },
      {
        type: "paragraph",
        text: "Pas besoin d’être parfait.",
      },
      {
        type: "paragraph",
        text: "Juste commencer.",
      },
      {
        type: "paragraph",
        text: "Et recommencer.",
      },
      {
        type: "highlight",
        text: "Rejoins un groupe près de chez toi et reprends le sport facilement, sans avoir à tout organiser.",
      },
    ],
    faq: [
      {
        q: "Comment reprendre le sport facilement ?",
        a: "En commençant petit, à ton rythme, et en simplifiant l’organisation. La régularité vient plus facilement quand c’est fluide.",
      },
      {
        q: "Pourquoi est-ce si difficile de reprendre seul ?",
        a: "Parce qu’il faut tout gérer : le créneau, le lieu, la motivation et la régularité. À plusieurs, c’est souvent plus engageant et plus simple.",
      },
      {
        q: "Faut-il être motivé pour reprendre le sport ?",
        a: "Pas forcément. Ce qui compte le plus, c’est d’avoir une organisation simple et réaliste pour recommencer sans pression.",
      },
    ],
  },
  {
    slug: "faire-du-sport-simplement",
    title: "Faire du sport simplement : la fin du sport compliqué",
    metaTitle:
      "Faire du sport simplement : la fin du sport compliqué | MultiSport Planner",
    metaDescription:
      "Pas besoin de salle, d'abonnement ni de programme. Découvrez comment bouger simplement sans se prendre la tête.",
    date: "2026-04-23",
    excerpt:
      "Pas besoin de salle, d'abonnement ni de programme. Voici comment bouger sans se prendre la tête.",
    category: "Faire du sport simplement",
    image: sportSimplementImg,
    featuredImageAlt: "Groupe faisant du sport en extérieur de manière simple",
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
    title: "Faire du sport près de chez vous à Nice : par où commencer ?",
    metaTitle:
      "Faire du sport près de chez vous à Nice : par où commencer ? | MultiSport Planner",
    metaDescription:
      "Envie de faire du sport près de chez vous à Nice sans tout organiser ? Découvrez comment reprendre simplement, trouver une activité adaptée et bouger plus régulièrement.",
    date: "2026-04-24",
    excerpt:
      "À Nice, reprendre le sport peut être plus simple quand l’activité est proche, adaptée à votre rythme et organisée pour vous.",
    category: "Faire du sport près de chez vous",
    image: sportPresImg,
    featuredImageAlt: "Personnes faisant du sport simplement près de chez elles à Nice",
    location: "Nice",
    content: [
      {
        type: "intro",
        text: "Faire du sport près de chez soi paraît simple.",
      },
      {
        type: "paragraph",
        text: "À Nice, les possibilités ne manquent pas : mer, collines, parcs, salles, clubs, terrains, cours collectifs, activités en extérieur.",
      },
      {
        type: "paragraph",
        text: "Et pourtant, malgré toutes ces options, ce n’est pas toujours évident de s’y mettre.",
      },
      {
        type: "paragraph",
        text: "Parce que le vrai problème n’est pas seulement de trouver une activité.",
      },
      {
        type: "paragraph",
        text: "Le vrai problème, c’est souvent de trouver une activité qui correspond à son rythme, à son niveau, à ses envies, et surtout qui ne demande pas trop d’organisation.",
      },
      { type: "h2", text: "Pourquoi faire du sport près de chez soi change tout" },
      {
        type: "paragraph",
        text: "Quand une activité est proche de chez soi, on a beaucoup plus de chances d’y aller.",
      },
      {
        type: "list",
        items: ["Moins de trajet.", "Moins de logistique.", "Moins d’excuses.", "Moins de charge mentale."],
      },
      {
        type: "paragraph",
        text: "À l’inverse, si une séance demande trop d’anticipation, trop de transport ou trop de coordination, elle devient vite une contrainte.",
      },
      {
        type: "paragraph",
        text: "Et quand le sport devient une contrainte, on finit souvent par repousser.",
      },
      {
        type: "paragraph",
        text: "Faire du sport près de chez soi, ce n’est donc pas seulement une question de confort. C’est un vrai levier de régularité.",
      },
      { type: "h2", text: "À Nice, il y a beaucoup d’options, mais trop de choix peut bloquer" },
      { type: "paragraph", text: "Nice est une ville idéale pour bouger." },
      {
        type: "paragraph",
        text: "On peut faire du sport :",
      },
      {
        type: "list",
        items: [
          "en bord de mer",
          "dans les parcs",
          "en salle",
          "en petit groupe",
          "avec un coach",
          "en club",
          "en extérieur",
          "sur les collines ou dans l’arrière-pays",
        ],
      },
      {
        type: "paragraph",
        text: "Mais parfois, trop de choix rend les choses plus compliquées.",
      },
      {
        type: "list",
        items: [
          "Quel sport choisir ?",
          "Où aller ?",
          "Avec qui ?",
          "À quel moment ?",
          "Est-ce adapté à mon niveau ?",
          "Est-ce que je vais tenir dans la durée ?",
        ],
      },
      {
        type: "paragraph",
        text: "À force de se poser toutes ces questions, on peut finir par ne rien faire.",
      },
      { type: "h2", text: "Le plus important : commencer simplement" },
      {
        type: "paragraph",
        text: "Pour reprendre ou pratiquer plus régulièrement, il n’est pas nécessaire de chercher l’activité parfaite.",
      },
      { type: "paragraph", text: "Le plus important est de commencer par une activité :" },
      {
        type: "list",
        items: [
          "accessible",
          "proche de chez soi",
          "compatible avec son agenda",
          "adaptée à son niveau",
          "agréable à refaire",
        ],
      },
      { type: "paragraph", text: "La simplicité est souvent plus efficace que la motivation." },
      { type: "paragraph", text: "Car la motivation varie." },
      { type: "paragraph", text: "La simplicité, elle, aide à continuer." },
      { type: "h2", text: "Quels sports pratiquer facilement près de Nice ?" },
      {
        type: "paragraph",
        text: "Selon vos envies, plusieurs types d’activités peuvent être adaptés.",
      },
      { type: "paragraph", text: "Pour reprendre en douceur :" },
      {
        type: "list",
        items: [
          "marche active",
          "stretching",
          "mobilité",
          "renforcement doux",
          "yoga",
          "pilates",
        ],
      },
      { type: "paragraph", text: "Pour retrouver de l’énergie :" },
      {
        type: "list",
        items: [
          "cardio léger",
          "circuit training",
          "cross-training adapté",
          "course à pied en petit groupe",
        ],
      },
      { type: "paragraph", text: "Pour profiter du cadre niçois :" },
      {
        type: "list",
        items: [
          "randonnée",
          "marche en bord de mer",
          "activités nautiques",
          "vélo",
          "sorties encadrées dans l’arrière-pays",
        ],
      },
      {
        type: "paragraph",
        text: "L’objectif n’est pas de choisir le sport le plus impressionnant.",
      },
      {
        type: "paragraph",
        text: "L’objectif est de choisir celui que vous aurez réellement envie de refaire.",
      },
      { type: "h2", text: "Le collectif aide à être plus régulier" },
      { type: "paragraph", text: "Faire du sport seul peut être difficile." },
      {
        type: "list",
        items: ["On repousse plus facilement.", "On annule plus facilement.", "On hésite plus facilement."],
      },
      { type: "paragraph", text: "À plusieurs, c’est différent." },
      { type: "paragraph", text: "Le collectif apporte :" },
      {
        type: "list",
        items: [
          "un cadre",
          "une motivation naturelle",
          "un rendez-vous concret",
          "une ambiance plus agréable",
          "moins de pression",
        ],
      },
      {
        type: "paragraph",
        text: "On n’a pas besoin d’être ultra motivé.",
      },
      {
        type: "paragraph",
        text: "On sait juste qu’une séance est prévue, et on y va.",
      },
      {
        type: "paragraph",
        text: "C’est souvent ce qui permet de transformer une envie en habitude.",
      },
      { type: "h2", text: "Le vrai frein : l’organisation" },
      {
        type: "paragraph",
        text: "Même quand on a envie de faire du sport, il reste souvent toute l’organisation.",
      },
      { type: "paragraph", text: "Il faut :" },
      {
        type: "list",
        items: [
          "trouver une activité",
          "identifier un lieu",
          "vérifier les horaires",
          "trouver d’autres personnes",
          "coordonner les disponibilités",
          "réserver si besoin",
        ],
      },
      {
        type: "paragraph",
        text: "Et quand on a déjà une semaine chargée, cela devient vite trop lourd.",
      },
      {
        type: "paragraph",
        text: "C’est précisément cette charge d’organisation qui empêche beaucoup de personnes de pratiquer régulièrement.",
      },
      { type: "h2", text: "Et si on retirait cette charge ?" },
      {
        type: "paragraph",
        text: "Imaginez une façon plus simple de faire du sport à Nice.",
      },
      { type: "paragraph", text: "Vous indiquez :" },
      {
        type: "list",
        items: [
          "les activités qui vous intéressent",
          "vos disponibilités",
          "votre zone",
        ],
      },
      { type: "paragraph", text: "Et vous recevez une proposition adaptée." },
      {
        type: "list",
        items: [
          "Pas besoin de chercher pendant des heures.",
          "Pas besoin de coordonner tout le monde.",
          "Pas besoin de tout organiser.",
        ],
      },
      {
        type: "paragraph",
        text: "Vous n’avez plus qu’à confirmer et profiter de la séance.",
      },
      { type: "paragraph", text: "C’est l’idée de MultiSport Planner." },
      { type: "h2", text: "Faire du sport à Nice sans tout organiser" },
      {
        type: "paragraph",
        text: "MultiSport Planner aide à rendre la pratique sportive plus simple.",
      },
      {
        type: "paragraph",
        text: "L’objectif n’est pas de vous ajouter une contrainte.",
      },
      {
        type: "paragraph",
        text: "L’objectif est de vous aider à bouger plus facilement, près de chez vous, dans un cadre simple, humain et adapté à votre rythme.",
      },
      {
        type: "paragraph",
        text: "Que vous soyez à Nice, autour de Sophia Antipolis, Antibes, Cannes ou plus largement sur la Côte d’Azur, l’idée reste la même :",
      },
      {
        type: "paragraph",
        text: "vous permettre de faire du sport sans porter toute l’organisation.",
      },
      { type: "h2", text: "Par où commencer ?" },
      {
        type: "paragraph",
        text: "Le plus simple est de ne pas chercher à tout planifier.",
      },
      { type: "paragraph", text: "Commencez par répondre à trois questions :" },
      {
        type: "list",
        items: [
          "quel type d’activité vous donne envie ?",
          "quand êtes-vous disponible ?",
          "dans quelle zone voulez-vous bouger ?",
        ],
      },
      {
        type: "paragraph",
        text: "À partir de là, il devient beaucoup plus facile de vous proposer une activité adaptée.",
      },
      {
        type: "list",
        items: [
          "Pas besoin de vous engager dans un programme compliqué.",
          "Pas besoin d’être déjà sportif.",
          "Pas besoin d’avoir un objectif parfait.",
        ],
      },
      { type: "paragraph", text: "Il suffit de commencer." },
      { type: "h2", text: "Faire du sport près de chez soi, c’est aussi retrouver du plaisir" },
      { type: "paragraph", text: "Le sport ne devrait pas être une charge de plus." },
      { type: "paragraph", text: "Il peut redevenir :" },
      {
        type: "list",
        items: [
          "un moment pour soi",
          "une parenthèse dans la semaine",
          "une occasion de rencontrer d’autres personnes",
          "une façon simple de bouger",
          "un plaisir plutôt qu’une contrainte",
        ],
      },
      {
        type: "paragraph",
        text: "Et souvent, quand l’organisation devient plus simple, le plaisir revient plus facilement.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "paragraph",
        text: "À Nice, les possibilités pour faire du sport sont nombreuses.",
      },
      {
        type: "paragraph",
        text: "Mais ce qui fait vraiment la différence, ce n’est pas seulement le nombre d’activités disponibles.",
      },
      {
        type: "paragraph",
        text: "C’est la facilité à passer à l’action.",
      },
      {
        type: "paragraph",
        text: "Quand l’activité est proche, adaptée, organisée et simple à rejoindre, il devient beaucoup plus facile de pratiquer régulièrement.",
      },
      {
        type: "highlight",
        text: "Et c’est exactement ce que MultiSport Planner veut rendre possible.",
      },
    ],
    faq: [
      {
        q: "Comment faire du sport près de chez soi à Nice sans tout organiser ?",
        a: "Le plus simple est de choisir une activité proche, adaptée à votre niveau et à votre agenda, puis de rejoindre un cadre déjà organisé pour limiter la charge mentale.",
      },
      {
        q: "Quelle activité sportive choisir pour reprendre en douceur sur la Côte d’Azur ?",
        a: "La marche active, le yoga, le pilates, la mobilité et le renforcement doux sont de bonnes options pour reprendre progressivement et rester régulier.",
      },
      {
        q: "Pourquoi le collectif aide à faire du sport plus régulièrement ?",
        a: "Parce qu’un rendez-vous concret, une ambiance agréable et un cadre clair réduisent les hésitations et rendent la pratique plus naturelle dans la durée.",
      },
    ],
  },
];

export const getArticleBySlug = (slug: string): BlogArticle | undefined =>
  blogArticles.find((a) => a.slug === slug);

export const blogCategories: BlogCategory[] = Array.from(
  new Set(blogArticles.map((article) => article.category)),
);

// Backward-compatible aliases for existing imports
export const ARTICLES = blogArticles;
export const BLOG_CATEGORIES = blogCategories;
