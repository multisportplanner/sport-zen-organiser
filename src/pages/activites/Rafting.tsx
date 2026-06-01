import {
  Waves,
  Sparkles,
  Heart,
  Smile,
  Users,
  Compass,
  Cable,
  Trees,
  Leaf,
  Gamepad2,
  HandHeart,
  RefreshCcw,
  ShieldCheck,
  Droplets,
} from "lucide-react";
import ActivityPage from "@/components/activity/ActivityPage";

const Rafting = () => (
  <ActivityPage
    slug="rafting"
    seo={{
      title: "Rafting dans les Alpes-Maritimes | MultiSport Planner",
      description:
        "Découvrez le rafting près de Nice, dans les Alpes-Maritimes et le Verdon. Une activité d’eau vive ludique, collective et accessible avec MSP.",
    }}
    hero={{
      h1: "Rafting dans les Alpes-Maritimes",
      subtitle:
        "Une activité d’eau vive à partager sans t’occuper de l’organisation.",
      intro:
        "Le rafting est une activité outdoor idéale pour vivre une aventure collective, rafraîchissante et accessible. Installé dans une embarcation gonflable, tu descends une rivière en équipe, accompagné par un guide professionnel. À proximité de la Côte d’Azur, plusieurs spots permettent de découvrir les sensations de l’eau vive, notamment dans les Alpes-Maritimes, les Alpes-de-Haute-Provence et le Verdon. Avec MSP, pas besoin de chercher un groupe, comparer les prestataires ou gérer la logistique. Nous t’aidons à trouver une sortie rafting adaptée à ton niveau, tes envies et ta zone.",
    }}
    gallery={{
      images: [
        {
          src: "https://images.pexels.com/photos/26098594/pexels-photo-26098594.jpeg?auto=compress&cs=tinysrgb&w=900",
          alt: "Sortie rafting en eau vive",
          title: "Une descente ludique en eau vive",
          credit: "Photo : Наргиз Баратова / Pexels",
        },
        {
          src: "https://images.pexels.com/photos/33454990/pexels-photo-33454990.jpeg?auto=compress&cs=tinysrgb&w=900",
          alt: "Groupe en rafting sur une rivière",
          title: "L’esprit d’équipe au fil de la rivière",
          credit: "Photo : SMARTtravel Petr Smitka / Pexels",
        },
        {
          src: "https://images.pexels.com/photos/16304344/pexels-photo-16304344.jpeg?auto=compress&cs=tinysrgb&w=900",
          alt: "Activité rafting près de la Côte d’Azur",
          title: "Des rapides, des éclaboussures et du fun",
          credit: "Photo : Dewa satu / Pexels",
        },
        {
          src: "https://images.pexels.com/photos/31798407/pexels-photo-31798407.jpeg?auto=compress&cs=tinysrgb&w=900",
          alt: "Rafting dans les Alpes-Maritimes",
          title: "Une aventure outdoor à partager",
          credit: "Photo : Oye Yogi / Pexels",
        },
      ],
    }}
    whatIsIt={{
      title: "Le rafting, c’est quoi exactement ?",
      intro: [
        "Le rafting consiste à descendre une rivière dans une embarcation gonflable, en groupe, avec un guide professionnel. Chaque personne participe à la navigation en équipe avec une pagaie, pendant que le guide diplômé donne les consignes, choisit les trajectoires et accompagne la progression.",
        "Selon le parcours et les conditions, la sortie alterne rapides, passages en rivière plus calmes et moments de récupération. C’est une activité eau vive pensée pour découvrir des sensations accessibles sans chercher la performance.",
        "L’équipement de sécurité est fourni par les professionnels locaux : gilet, casque et matériel adapté à la sortie. Avant de partir, les consignes sont expliquées pour que chacun puisse profiter du rafting débutant ou d’un parcours plus dynamique en fonction du niveau du groupe.",
      ],
      items: [
        { icon: Waves, label: "Descente de rivière" },
        { icon: Users, label: "Navigation en équipe" },
        { icon: Droplets, label: "Passages en eaux vives" },
        { icon: Leaf, label: "Moments plus calmes" },
        { icon: ShieldCheck, label: "Activité encadrée" },
        { icon: Smile, label: "Sensations sans pression" },
      ],
      outro: [
        "Le rafting Alpes-Maritimes et les sorties vers le Verdon ou l’Ubaye permettent de bouger autrement, au contact de la rivière. Tu pagayes, tu écoutes les consignes, tu ris avec le groupe et tu découvres l’eau vive dans un cadre encadré.",
      ],
    }}
    whyTry={{
      title: "Pourquoi essayer le rafting ?",
      intro:
        "Le rafting attire parce qu’il mélange activité outdoor, fraîcheur, jeu et esprit collectif. On vient pour partager une aventure, prendre l’air et vivre une expérience différente sans se mettre de pression.",
      cards: [
        {
          icon: Users,
          label: "Une aventure collective",
          description:
            "Le rafting se vit en équipe. On pagaie ensemble, on rit ensemble et on partage les sensations.",
        },
        {
          icon: Droplets,
          label: "Une activité rafraîchissante",
          description:
            "Parfait au printemps et en été pour profiter de l’eau vive et sortir du quotidien.",
        },
        {
          icon: Sparkles,
          label: "Des sensations accessibles",
          description:
            "Pas besoin d’être expert. Les parcours sont choisis selon le niveau du groupe et les conditions.",
        },
        {
          icon: Heart,
          label: "Une sortie qui crée des souvenirs",
          description:
            "Entre rapides, éclaboussures et paysages naturels, le rafting marque souvent les esprits.",
        },
      ],
      outro: [
        "Le rafting n’est pas réservé aux sportifs aguerris. Une sortie encadrée permet de découvrir les sensations de l’eau vive progressivement, avec un parcours choisi selon la saison, le débit et le niveau du groupe.",
        "C’est l’esprit MSP : trouver une activité qui donne envie de bouger, sans transformer l’organisation en contrainte.",
      ],
    }}
    whyAppealing={{
      title: "Pourquoi le rafting plaît autant ?",
      intro:
        "Chez MSP, on croit au sport pour le plaisir, pas pour la performance. Le rafting correspond parfaitement à cette vision.",
      outro:
        "Le rafting ne consiste pas à être le plus fort ou le plus rapide. L’idée est de partager un moment, rire, découvrir une rivière autrement et sentir l’énergie du groupe. Ce qui plaît, c’est le mélange entre plaisir, jeu, esprit d’équipe, nature, découverte et sensations. Plaisir · Jeu · Équipe · Nature · Sensations",
      pillars: [
        { icon: Heart, label: "Plaisir" },
        { icon: Gamepad2, label: "Jeu" },
        { icon: HandHeart, label: "Équipe" },
        { icon: Leaf, label: "Nature" },
        { icon: Sparkles, label: "Sensations" },
      ],
    }}
    intermediateCta={{
      title: "Envie de tester le rafting ?",
      text: "Pas besoin de trouver un groupe ou de comparer les prestataires. MSP t’aide à trouver une sortie rafting adaptée à ton niveau, tes envies et ta zone.",
    }}
    places={{
      title: "Où faire du rafting près de la Côte d’Azur ?",
      intro:
        "Depuis Nice, Antibes, Cannes ou Sophia Antipolis, plusieurs zones permettent d’accéder à des sorties rafting selon la saison, les niveaux d’eau et les disponibilités des professionnels locaux.",
      cards: [
        {
          name: "Verdon",
          location: "Alpes-de-Haute-Provence",
          description:
            "Un secteur emblématique pour les activités d’eau vive, apprécié pour ses paysages spectaculaires et ses parcours adaptés à différents niveaux selon les conditions.",
        },
        {
          name: "Vallée de l’Ubaye",
          location: "Alpes-de-Haute-Provence",
          description:
            "Une destination réputée pour le rafting, avec des parcours plus sportifs selon la période et le niveau du groupe.",
        },
        {
          name: "Roya",
          location: "Alpes-Maritimes",
          description:
            "Un secteur de montagne proche de la Côte d’Azur, intéressant pour les activités d’eau vive selon les conditions et les prestataires disponibles.",
        },
        {
          name: "Var",
          location: "Arrière-pays niçois",
          description:
            "Une rivière accessible depuis les Alpes-Maritimes, avec des possibilités d’activités encadrées selon la saison et le débit.",
        },
      ],
    }}
    audience={{
      title: "Le rafting est fait pour toi si…",
      intro:
        "Le rafting convient particulièrement aux personnes qui veulent partager une expérience collective, découvrir l’eau vive et profiter d’un moment simple, sportif et ludique.",
      profiles: [
        {
          icon: Users,
          label: "Tu veux vivre une activité en groupe",
          description:
            "Une sortie qui repose sur l’entraide et l’énergie commune.",
        },
        {
          icon: Droplets,
          label: "Tu cherches une sortie rafraîchissante",
          description:
            "Idéal pour profiter de l’eau vive quand la saison s’y prête.",
        },
        {
          icon: Smile,
          label: "Tu veux bouger sans pression",
          description: "Le rythme et le parcours sont choisis selon le groupe.",
        },
        {
          icon: Trees,
          label: "Tu aimes les activités outdoor",
          description: "Rivière, paysages naturels et sensations en plein air.",
        },
        {
          icon: RefreshCcw,
          label: "Tu veux sortir de ta routine",
          description:
            "Une parenthèse ludique pour un week-end ou une journée.",
        },
      ],
    }}
    reassurance={{
      title: "Tu hésites à te lancer ?",
      items: [
        {
          q: "Faut-il être très sportif ?",
          a: "Non. Il faut être en bonne santé, écouter les consignes et choisir une sortie adaptée. Pour une première expérience, les professionnels orientent vers un parcours cohérent avec le niveau du groupe.",
        },
        {
          q: "Est-ce adapté aux débutants ?",
          a: "Oui, certains parcours sont pensés pour le rafting débutant. Le choix dépend toujours de la saison, du débit, des conditions et des sorties disponibles.",
        },
        {
          q: "Est-ce que ça fait peur ?",
          a: "Les rapides peuvent impressionner, mais l’activité reste encadrée. Le guide explique les consignes, accompagne le groupe et adapte la sortie au niveau prévu.",
        },
        {
          q: "Faut-il déjà avoir fait du rafting ?",
          a: "Non. Une première sortie est possible si tu es à l’aise dans l’eau, que tu respectes les consignes et que le parcours choisi correspond à ton profil.",
        },
      ],
    }}
    localSeo={{
      title: "Rafting près de Nice, Antibes et Sophia Antipolis",
      paragraphs: [
        "Le rafting près de Nice est une bonne idée pour découvrir une activité eau vive sans gérer toute la recherche. Depuis Nice, Antibes, Cannes ou Sophia Antipolis, on peut envisager différentes zones selon la saison et les sorties disponibles : Alpes-Maritimes, arrière-pays niçois, Alpes-de-Haute-Provence, Verdon ou Ubaye.",
        "Cette activité outdoor fonctionne bien pour un week-end, une demi-journée ou une journée, entre amis, en couple, en petit groupe ou en format team building lorsque le niveau, la logistique et l’encadrement sont adaptés.",
        "Pour une sortie rafting Côte d’Azur, MSP t’aide à clarifier ce qui est réaliste : point de départ, période, niveau du groupe, disponibilité des professionnels locaux et envie de sensations plus ou moins fortes.",
        "Que tu cherches du rafting Alpes-Maritimes, du rafting Verdon ou une sortie vers l’Ubaye, l’objectif reste le même : vivre une aventure collective, fraîche et encadrée, sans multiplier les recherches.",
      ],
      blocks: [
        {
          title: "Depuis Nice",
          description:
            "Depuis Nice, MSP regarde les options d’eau vive possibles selon la saison, le niveau d’eau, ton timing et les sorties encadrées disponibles.",
        },
        {
          title: "Depuis Antibes",
          description:
            "Depuis Antibes, le choix dépend du temps que tu veux consacrer à la sortie, du niveau du groupe et des prestataires locaux disponibles.",
        },
        {
          title: "Depuis Cannes",
          description:
            "Depuis Cannes, une sortie rafting peut s’envisager sur une demi-journée longue ou une journée selon la zone retenue et les conditions du moment.",
        },
        {
          title: "Depuis Sophia Antipolis",
          description:
            "Depuis Sophia Antipolis, MSP peut aider un petit groupe ou une équipe à cibler une sortie cohérente avec le planning et les envies.",
        },
        {
          title: "Vers le Verdon",
          description:
            "Le Verdon est un secteur connu pour les activités d’eau vive, à envisager selon la période, les niveaux d’eau et les sorties proposées.",
        },
        {
          title: "Vers l’Ubaye",
          description:
            "L’Ubaye est une destination réputée pour le rafting, avec des parcours à choisir en fonction de la saison et du niveau du groupe.",
        },
      ],
    }}
    howItWorks={{
      steps: [
        {
          title: "Tu nous contactes",
          desc: "Un message rapide sur WhatsApp pour nous parler de ton envie de rafting.",
        },
        {
          title: "Tu nous expliques ce que tu recherches",
          desc: "Ton point de départ, ton niveau, la période, le groupe et les sensations souhaitées.",
        },
        {
          title: "On trouve la sortie",
          desc: "On regarde les options encadrées avec des professionnels locaux selon les conditions disponibles.",
        },
        {
          title: "Tu profites",
          desc: "Tu viens pagayer, rire et découvrir l’eau vive sans gérer toute l’organisation.",
        },
      ],
    }}
    faq={{
      items: [
        {
          q: "Peut-on faire du rafting quand on débute ?",
          a: "Oui, certains parcours sont adaptés aux débutants. Le choix dépend de la saison, du débit de la rivière, du niveau du groupe et des sorties disponibles.",
        },
        {
          q: "Faut-il savoir nager ?",
          a: "Il est préférable d’être à l’aise dans l’eau. L’activité est encadrée et l’équipement de sécurité est fourni, notamment casque et gilet.",
        },
        {
          q: "Est-ce que le rafting est dangereux ?",
          a: "Comme toute activité d’eau vive, le rafting nécessite un encadrement professionnel et le respect des consignes. MSP oriente vers des sorties encadrées par des professionnels locaux.",
        },
        {
          q: "Quelle est la meilleure période pour faire du rafting ?",
          a: "La période dépend des rivières, des conditions météo et du niveau d’eau. Le printemps et l’été sont généralement les périodes les plus recherchées.",
        },
        {
          q: "Peut-on faire du rafting près de Nice ?",
          a: "Oui, plusieurs zones d’eau vive sont accessibles depuis Nice, Antibes, Cannes ou Sophia Antipolis, notamment vers l’arrière-pays, le Verdon ou l’Ubaye selon les sorties disponibles.",
        },
        {
          q: "Combien coûte une sortie rafting ?",
          a: "Le prix dépend du prestataire, de la durée, du parcours et de la saison. En général, une sortie rafting encadrée se situe souvent entre 45€ et 90€ par personne.",
        },
      ],
    }}
    related={{
      title: "Découvrir d’autres activités outdoor",
      items: [
        { icon: Waves, label: "Canyoning", href: "/activites/canyoning" },
        { icon: Compass, label: "Kayak", href: "/activites/kayak" },
        { icon: Cable, label: "Via Ferrata", href: "/activites/via-ferrata" },
        { icon: TreePine, label: "Escalade", href: "/activites/escalade" },
        { icon: Waves, label: "Paddle", href: "/activites/paddle" },
      ],
    }}
    readAlso={{
      title: "À lire aussi",
      cards: [
        {
          title: "Rafting débutant : ce qu’il faut savoir avant de se lancer",
          description:
            "Les repères simples pour comprendre le niveau, l’équipement et le déroulé d’une première sortie.",
        },
        {
          title: "Rafting ou canyoning : quelle activité choisir ?",
          description:
            "Deux expériences d’eau vive complémentaires, avec des sensations et une organisation différentes.",
        },
        {
          title: "Les meilleures activités d’eau vive près de la Côte d’Azur",
          description:
            "Rafting, canyoning, kayak et autres idées pour profiter de l’eau vive selon la saison.",
        },
        {
          title: "Que prévoir pour une sortie rafting ?",
          description:
            "Tenue, affaires utiles, aisance dans l’eau et conseils pour arriver serein le jour J.",
        },
      ],
    }}
    finalCta={{
      title: "Envie d’essayer le rafting ?",
      text: "Découvre une activité d’eau vive conviviale et rafraîchissante, sans gérer toute l’organisation.",
    }}
  />
);

export default Rafting;
