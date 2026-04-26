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
    slug: "faire-du-sport-quand-on-travaille",
    title: "Faire du sport quand on travaille : comment s’organiser simplement",
    metaTitle:
      "Faire du sport quand on travaille facilement | MultiSport Planner",
    metaDescription:
      "Pas le temps de faire du sport avec le travail ? Découvrez comment simplifier votre organisation pour rester régulier sans contrainte.",
    date: "2026-04-24",
    excerpt:
      "Quand on travaille, faire du sport devient vite compliqué. La clé n’est pas la motivation, mais la simplicité.",
    category: "Faire du sport simplement",
    image: sportSimplementImg,
    featuredImageAlt:
      "Personne active trouvant une solution simple pour faire du sport après le travail",
    content: [
      {
        type: "intro",
        text: "Quand on travaille, on a souvent l’impression que le sport passe automatiquement en dernier.",
      },
      {
        type: "paragraph",
        text: "Entre les journées chargées, la fatigue, les trajets et les imprévus, trouver du temps semble compliqué.",
      },
      {
        type: "paragraph",
        text: "Et pourtant, ce n’est pas forcément un problème de motivation.",
      },
      {
        type: "quickAnswer",
        question: "Comment faire du sport quand on travaille sans se compliquer la vie ?",
        answer:
          "En simplifiant au maximum l’organisation : un créneau réaliste, une activité proche, et un cadre déjà prêt. Moins il y a de friction, plus la régularité devient naturelle.",
      },
      { type: "h2", text: "Le vrai frein n’est pas le manque de volonté" },
      {
        type: "paragraph",
        text: "Beaucoup de personnes se disent : “je manque de discipline”.",
      },
      {
        type: "paragraph",
        text: "En réalité, elles essaient surtout de caser un format trop lourd dans un agenda déjà plein.",
      },
      {
        type: "paragraph",
        text: "Quand le sport demande trop de décisions et de coordination, il saute dès que la semaine se tend.",
      },
      { type: "h2", text: "Pourquoi c’est difficile après le travail" },
      {
        type: "list",
        items: [
          "Tu finis la journée avec moins d’énergie mentale.",
          "Tu dois encore gérer la logistique perso (repas, famille, tâches).",
          "Tu hésites entre te reposer et “te forcer”.",
          "Tu dois tout réorganiser à chaque séance.",
        ],
      },
      {
        type: "paragraph",
        text: "Le problème n’est donc pas “faire l’effort”. Le problème, c’est d’avoir trop d’étapes avant même de commencer.",
      },
      { type: "h2", text: "Commencer simple est plus efficace que viser parfait" },
      {
        type: "paragraph",
        text: "Après une journée de travail, tu n’as pas besoin d’un plan idéal. Tu as besoin d’un plan faisable.",
      },
      {
        type: "list",
        items: [
          "1 à 2 créneaux réalistes par semaine",
          "une activité qui te plaît vraiment",
          "un lieu facile d’accès",
          "un format que tu peux répéter",
        ],
      },
      {
        type: "paragraph",
        text: "Ce qui compte, ce n’est pas l’intensité maximale. C’est la continuité.",
      },
      { type: "h2", text: "La régularité vient quand la charge mentale baisse" },
      {
        type: "paragraph",
        text: "Si chaque séance demande de tout replanifier, ta motivation s’épuise vite.",
      },
      {
        type: "paragraph",
        text: "À l’inverse, quand c’est clair et déjà organisé, tu peux décider plus facilement, même les soirs chargés.",
      },
      {
        type: "paragraph",
        text: "Faire du sport devient alors une habitude réaliste, pas un projet compliqué.",
      },
      { type: "h2", text: "Le collectif aide quand on manque de temps" },
      {
        type: "paragraph",
        text: "Faire du sport seul après le travail demande beaucoup d’autodiscipline.",
      },
      {
        type: "paragraph",
        text: "En groupe, tout devient plus simple : tu es attendu, le cadre est posé, et tu réfléchis moins avant d’y aller.",
      },
      {
        type: "list",
        items: [
          "moins de reports",
          "moins d’annulations",
          "plus de constance dans la durée",
        ],
      },
      { type: "h2", text: "Une méthode concrète pour t’organiser simplement" },
      {
        type: "list",
        items: [
          "Choisis un créneau compatible avec ta vraie semaine (pas ta semaine idéale).",
          "Privilégie la proximité pour réduire les trajets.",
          "Fixe un objectif minimal : juste y aller régulièrement.",
          "Appuie-toi sur un cadre déjà organisé pour ne pas tout porter seul.",
        ],
      },
      {
        type: "paragraph",
        text: "En procédant comme ça, tu protèges ton énergie et tu rends la pratique durable.",
      },
      { type: "h2", text: "Ce qu’il faut retenir" },
      {
        type: "paragraph",
        text: "Quand on travaille, réussir à faire du sport ne dépend pas d’un “mental plus fort”.",
      },
      {
        type: "paragraph",
        text: "Cela dépend surtout d’une organisation plus légère.",
      },
      {
        type: "highlight",
        text: "Moins tu as à organiser, plus tu as de chances de rester régulier — même avec un agenda chargé.",
      },
    ],
    faq: [
      {
        q: "Comment faire du sport quand on n’a pas le temps avec le travail ?",
        a: "Il faut simplifier : un créneau réaliste, une activité proche, et un cadre clair. Le but est de réduire les décisions à prendre après la journée.",
      },
      {
        q: "Faut-il faire beaucoup de sport pour que ce soit utile ?",
        a: "Non. Une à deux séances régulières par semaine apportent déjà des bénéfices concrets sur l’énergie, le sommeil et le moral.",
      },
      {
        q: "Pourquoi j’arrive à tenir quelques semaines puis j’arrête ?",
        a: "Souvent parce que l’organisation demande trop d’efforts mentaux. Quand le système est trop lourd, il devient difficile à maintenir pendant les semaines chargées.",
      },
    ],
  },
  {
    slug: "faire-du-sport-sans-motivation",
    title: "Faire du sport sans motivation : est-ce vraiment possible ?",
    metaTitle:
      "Faire du sport sans motivation : est-ce possible ? | MultiSport Planner",
    metaDescription:
      "Peut-on faire du sport sans motivation ? Oui, si tout devient plus simple. Découvrez comment bouger régulièrement sans discipline extrême.",
    date: "2026-04-24",
    excerpt:
      "La motivation ne suffit pas pour faire du sport. La clé, c’est la simplicité et un système qui facilite l’action.",
    category: "Faire du sport simplement",
    image: sportSimplementImg,
    featuredImageAlt:
      "Personne faisant du sport facilement sans dépendre de la motivation",
    content: [
      {
        type: "intro",
        text: "[COLLER ICI L’ARTICLE COMPLET]",
      },
      {
        type: "highlight",
        text: "Rejoins un groupe près de chez toi",
      },
    ],
    faq: [],
  },

  {
    slug: "faire-du-sport-pres-de-chez-vous-antibes",
    title:
      "Faire du sport près de chez vous à Antibes : comment s’y remettre simplement ?",
    metaTitle: "Faire du sport à Antibes facilement | MultiSport Planner",
    metaDescription:
      "Envie de faire du sport à Antibes sans vous compliquer la vie ? Découvrez comment reprendre simplement et rester régulier près de chez vous.",
    date: "2026-04-24",
    excerpt:
      "À Antibes, faire du sport devient plus simple quand l’activité s’intègre naturellement dans votre quotidien.",
    category: "Faire du sport près de chez vous",
    image: sportPresImg,
    featuredImageAlt:
      "Personnes faisant du sport simplement près de chez elles à Antibes",
    location: "Antibes",
    content: [
      {
        type: "intro",
        text: "[COLLER ICI L’ARTICLE COMPLET]",
      },
      {
        type: "highlight",
        text: "Rejoins un groupe près de chez toi",
      },
    ],
    faq: [],
  },


  {
    slug: "faire-du-sport-pres-de-chez-vous-sophia-antipolis",
    title:
      "Faire du sport près de chez vous à Sophia Antipolis : comment rester régulier malgré le travail ?",
    metaTitle:
      "Faire du sport à Sophia Antipolis facilement | MultiSport Planner",
    metaDescription:
      "Pas le temps de faire du sport à Sophia Antipolis ? Découvrez comment rester régulier malgré le travail avec une approche simple et sans organisation.",
    date: "2026-04-24",
    excerpt:
      "À Sophia Antipolis, faire du sport devient plus simple quand il s’intègre directement dans le quotidien professionnel.",
    category: "Faire du sport près de chez vous",
    image: sportPresImg,
    featuredImageAlt:
      "Personne active faisant du sport facilement près de son travail à Sophia Antipolis",
    location: "Sophia Antipolis",
    content: [
      {
        type: "intro",
        text: "[COLLER ICI L’ARTICLE COMPLET]",
      },
      {
        type: "highlight",
        text: "Rejoins un groupe près de chez toi",
      },
    ],
    faq: [],
  },

  {
    slug: "pourquoi-je-n-arrive-pas-a-etre-regulier-dans-le-sport",
    title: "Pourquoi je n’arrive pas à être régulier dans le sport",
    metaTitle:
      "Pourquoi je n’arrive pas à être régulier dans le sport | MultiSport Planner",
    metaDescription:
      "Vous avez du mal à être régulier dans le sport ? Ce n’est pas un problème de motivation. Découvrez comment simplifier votre pratique pour tenir dans la durée.",
    date: "2026-04-24",
    excerpt:
      "Être régulier dans le sport ne dépend pas de la motivation. Quand tout devient plus simple, la régularité s’installe naturellement.",
    category: "Reprendre le sport",
    image: reprendreSportImg,
    featuredImageAlt:
      "Personne ayant du mal à être régulière dans le sport et retrouvant une pratique simple",
    content: [
      {
        type: "intro",
        text: "Tu veux faire du sport régulièrement, mais ça ne tient jamais plus de quelques semaines ?",
      },
      {
        type: "paragraph",
        text: "Tu n’es pas seul. Et surtout : ce n’est pas un défaut personnel.",
      },
      {
        type: "paragraph",
        text: "La plupart des personnes pensent manquer de motivation. En réalité, elles font surtout face à trop de friction dans leur organisation.",
      },
      {
        type: "quickAnswer",
        question: "Pourquoi je n’arrive pas à être régulier dans le sport ?",
        answer:
          "Parce que ta pratique est trop compliquée à maintenir dans une vraie semaine. La régularité vient quand l’organisation devient simple, claire et réaliste.",
      },
      { type: "h2", text: "Le vrai problème n’est pas ta motivation" },
      {
        type: "paragraph",
        text: "La motivation varie, c’est normal. Elle dépend de l’énergie, du travail, du moral, des imprévus.",
      },
      {
        type: "paragraph",
        text: "Compter uniquement sur elle pour être constant est une stratégie fragile.",
      },
      {
        type: "paragraph",
        text: "Ce qui tient dans le temps, c’est un cadre simple que tu peux suivre même pendant les semaines chargées.",
      },
      { type: "h2", text: "Ce qui casse la régularité au quotidien" },
      {
        type: "paragraph",
        text: "Souvent, on décroche avant même la séance à cause d’une accumulation de petites contraintes :",
      },
      {
        type: "list",
        items: [
          "choisir une activité différente à chaque fois",
          "chercher un créneau au dernier moment",
          "organiser seul la logistique",
          "devoir se remotiver de zéro chaque semaine",
        ],
      },
      {
        type: "paragraph",
        text: "Une seule contrainte semble supportable. Mais additionnées, elles épuisent la volonté.",
      },
      { type: "h2", text: "Pourquoi “faire plus” ne marche pas toujours" },
      {
        type: "paragraph",
        text: "Quand on culpabilise, on veut compenser avec des objectifs trop ambitieux.",
      },
      {
        type: "paragraph",
        text: "Trois ou quatre séances, très intenses, avec un planning parfait.",
      },
      {
        type: "paragraph",
        text: "Le problème : ce format tient rarement face à la vraie vie. Et quand on rate, on a l’impression d’avoir échoué.",
      },
      {
        type: "paragraph",
        text: "Mieux vaut une pratique plus modeste, mais répétable.",
      },
      { type: "h2", text: "La régularité vient de la simplicité" },
      {
        type: "paragraph",
        text: "Pour durer, la question n’est pas “comment me motiver plus ?” mais “comment rendre ma pratique plus facile à répéter ?”.",
      },
      {
        type: "list",
        items: [
          "un créneau fixe et réaliste",
          "une activité accessible à ton niveau",
          "un lieu proche de chez toi",
          "un cadre déjà organisé",
        ],
      },
      {
        type: "paragraph",
        text: "Quand c’est clair et fluide, l’effort mental diminue. Tu y vas plus souvent, sans te battre contre toi-même.",
      },
      { type: "h2", text: "L’environnement compte plus que la volonté" },
      {
        type: "paragraph",
        text: "Être régulier ne repose pas seulement sur toi. Ton environnement joue un rôle énorme.",
      },
      {
        type: "paragraph",
        text: "Si tout est loin, flou ou compliqué, tu repousses. Si c’est proche, cadré et simple, tu tiens plus facilement.",
      },
      { type: "h2", text: "Le collectif aide à rester constant" },
      {
        type: "paragraph",
        text: "Faire du sport seul demande beaucoup de discipline. En petit groupe, c’est plus naturel : tu es attendu, tu réfléchis moins, tu gardes le rythme.",
      },
      {
        type: "paragraph",
        text: "Ce n’est pas de la magie. C’est juste plus simple à maintenir.",
      },
      { type: "h2", text: "Comment retrouver une pratique durable" },
      {
        type: "paragraph",
        text: "Commence petit et enlève un maximum de friction.",
      },
      {
        type: "list",
        items: [
          "vaut mieux 1 séance régulière que 4 séances impossibles",
          "vaut mieux un format simple qu’un plan parfait",
          "vaut mieux un rythme stable qu’un départ trop intense",
        ],
      },
      {
        type: "paragraph",
        text: "En quelques semaines, cette continuité change déjà ton énergie, ton moral et ta confiance.",
      },
      { type: "h2", text: "Tu n’as pas besoin d’être parfait pour être régulier" },
      {
        type: "paragraph",
        text: "La régularité n’est pas une question de personnalité. C’est une question de système.",
      },
      {
        type: "paragraph",
        text: "Si ton système est simple, ta pratique devient naturelle.",
      },
      {
        type: "highlight",
        text: "Ce n’est pas toi qu’il faut “réparer”. C’est l’organisation qu’il faut simplifier.",
      },
    ],
    faq: [
      {
        q: "Pourquoi je manque de régularité dans le sport ?",
        a: "Le plus souvent, ce n’est pas un manque de motivation mais une organisation trop complexe à répéter chaque semaine.",
      },
      {
        q: "Comment devenir régulier sans se forcer ?",
        a: "En réduisant les frictions : créneau clair, activité accessible, lieu proche et cadre simple. Plus c’est fluide, plus tu tiens.",
      },
      {
        q: "Faut-il faire beaucoup de sport pour progresser ?",
        a: "Non. Une pratique modérée mais régulière donne de meilleurs résultats qu’un rythme intense impossible à maintenir.",
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
