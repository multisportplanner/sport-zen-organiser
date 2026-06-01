import {
  Waves,
  Sparkles,
  Heart,
  Smile,
  Users,
  Compass,
  TreePine,
  Cable,
  Trees,
  Leaf,
  ShieldCheck,
  Sailboat,
  Sun,
  Wind,
} from "lucide-react";
import ActivityPage from "@/components/activity/ActivityPage";

const Paddle = () => (
  <ActivityPage
    slug="paddle"
    seo={{
      title: "Paddle sur la Côte d’Azur | MultiSport Planner",
      description:
        "Découvrez le paddle près de Nice, Antibes et Cannes. Une activité nautique accessible pour profiter de la mer autrement, sans gérer l’organisation.",
    }}
    hero={{
      h1: "Paddle sur la Côte d’Azur",
      subtitle:
        "Une activité nautique accessible à vivre sans t’occuper de l’organisation.",
      intro:
        "Le paddle est une activité simple, ludique et accessible qui permet de profiter de la mer tout en bougeant à son rythme. Debout sur une planche, tu explores le littoral, profites du paysage et partages un moment convivial, seul, à deux ou en groupe. Près de Nice, Antibes, Cannes ou Sophia Antipolis, de nombreux secteurs permettent de découvrir le stand up paddle dans un cadre exceptionnel. Avec MSP, pas besoin de chercher un loueur, un groupe ou un créneau. Nous t’aidons à trouver une sortie adaptée à ton niveau et à tes envies.",
    }}
    gallery={{
      images: [
    {
          src: "/activites/paddle-littoral.webp",
          alt: "Balade en paddle sur le littoral",
          title: "Découvrir le littoral autrement",
        },
        
        {
          src: "/activites/paddle-groupe.webp",
          alt: "Sortie paddle en groupe",
          title: "Partager un moment convivial sur l'eau",
        },
        
        {
          src: "/activites/paddle-eau-turquoise.webp",
          alt: "Paddle sur une eau turquoise",
          title: "Profiter des plus beaux spots de la Côte d'Azur",
        },
        
        {
          src: "/activites/paddle-coucher-soleil.webp",
          alt: "Paddle au coucher du soleil",
          title: "Une expérience unique en fin de journée",
    },
      ],
    }}
    whatIsIt={{
      title: "Le paddle, c’est quoi exactement ?",
      intro: [
        "Le stand up paddle est une activité nautique qui consiste à avancer debout sur une planche à l’aide d’une pagaie. On peut aussi commencer à genoux le temps de prendre ses repères, puis se lever progressivement quand l’équilibre devient plus naturel.",
        "Sur la Côte d’Azur, le paddle permet de vivre une balade au ras de l’eau, de découvrir le littoral et d’observer les caps, les criques et les baies depuis la mer. Selon la météo, les conditions de mer et le parcours choisi, la sortie peut être très calme ou un peu plus sportive.",
        "C’est une activité accessible, souvent appréciée par les débutants, parce qu’elle ne demande pas de technique complexe pour une première découverte. L’essentiel est de choisir un secteur adapté, une durée cohérente et une sortie compatible avec ton niveau et tes envies.",
      ],
      items: [
        { icon: Waves, label: "Balade sur l’eau" },
        { icon: ShieldCheck, label: "Activité accessible" },
        { icon: Compass, label: "Découverte du littoral" },
        { icon: Users, label: "Sortie seul ou en groupe" },
        { icon: Wind, label: "Activité calme ou sportive" },
        { icon: Smile, label: "Adaptée aux débutants" },
      ],
      outro: [
        "Le paddle Côte d’Azur est donc une belle porte d’entrée vers les activités nautiques. Tu profites de la mer, tu bouges sans pression et tu découvres le stand up paddle Alpes-Maritimes dans un cadre qui donne envie de prendre le temps.",
      ],
    }}
    whyTry={{
      title: "Pourquoi essayer le paddle ?",
      cards: [
        {
          icon: Smile,
          label: "Une activité facile à découvrir",
          description:
            "Le paddle débutant se pratique progressivement, avec une prise en main simple et une sortie choisie selon le niveau du groupe.",
        },
        {
          icon: Leaf,
          label: "Un moment de déconnexion",
          description:
            "Sur l’eau, le rythme ralentit. Tu respires, tu observes le paysage et tu profites d’une parenthèse loin du quotidien.",
        },
        {
          icon: Sailboat,
          label: "Une autre façon de profiter de la mer",
          description:
            "Debout sur la planche, la Côte d’Azur se découvre sous un angle différent, entre criques, caps et horizon marin.",
        },
        {
          icon: Users,
          label: "Une sortie conviviale",
          description:
            "Seul, à deux, entre amis ou en petit groupe, le paddle crée un moment simple, ludique et facile à partager.",
        },
      ],
    }}
    whyAppealing={{
      title: "Pourquoi le paddle plaît autant ?",
      intro:
        "Le paddle plaît parce qu’il mélange liberté, détente, nature, plaisir et évasion. Il ne s’agit pas de performer, mais de profiter de la mer, de trouver son équilibre et d’avancer à son rythme dans un décor méditerranéen.",
      outro: "Plaisir · Liberté · Nature · Détente · Évasion",
      pillars: [
        { icon: Heart, label: "Plaisir" },
        { icon: Compass, label: "Liberté" },
        { icon: Trees, label: "Nature" },
        { icon: Leaf, label: "Détente" },
        { icon: Sparkles, label: "Évasion" },
      ],
    }}
    intermediateCta={{
      title: "Envie de tester le paddle ?",
      text: "Pas besoin de trouver un loueur, un créneau ou un groupe. MSP t’aide à trouver une sortie paddle adaptée à ton niveau, tes envies et ta zone.",
    }}
    places={{
      title: "Où faire du paddle sur la Côte d’Azur ?",
      intro:
        "De Nice à Cannes, plusieurs secteurs peuvent se prêter au paddle selon la météo, selon les conditions de mer, selon les sorties disponibles et avec des partenaires locaux.",
      cards: [
        {
          name: "Cap d’Antibes",
          location: "Antibes",
          description:
            "Un secteur emblématique pour une sortie paddle Antibes, à envisager selon la météo, l’état de la mer et les sorties disponibles avec des partenaires locaux.",
        },
        {
          name: "Îles de Lérins",
          location: "Cannes",
          description:
            "Un cadre très apprécié pour profiter de la mer côté Cannes, uniquement lorsque les conditions de mer, la saison et l’organisation locale le permettent.",
        },
        {
          name: "Baie de Villefranche-sur-Mer",
          location: "Villefranche-sur-Mer",
          description:
            "Une baie réputée pour son décor méditerranéen, intéressante pour une balade paddle près de Nice selon les conditions et les prestataires disponibles.",
        },
        {
          name: "Cap Ferrat",
          location: "Saint-Jean-Cap-Ferrat",
          description:
            "Un secteur côtier agréable pour découvrir le littoral depuis l’eau, avec un parcours à adapter à la météo, au vent et au niveau du groupe.",
        },
        {
          name: "Estérel",
          location: "Théoule-sur-Mer / Saint-Raphaël",
          description:
            "Un décor spectaculaire entre roches rouges et mer bleue, à envisager selon les conditions de mer et les sorties disponibles avec des partenaires locaux.",
        },
      ],
    }}
    audience={{
      title: "Le paddle est fait pour toi si…",
      intro:
        "Le paddle convient particulièrement aux personnes qui veulent profiter de la mer autrement, bouger sans pression et vivre une activité nautique Côte d’Azur simple et dépaysante.",
      profiles: [
        { icon: Compass, label: "Tu veux découvrir la mer autrement" },
        { icon: Leaf, label: "Tu cherches une activité relaxante" },
        { icon: Smile, label: "Tu veux bouger sans pression" },
        { icon: Trees, label: "Tu aimes les activités nature" },
        { icon: Sun, label: "Tu veux profiter du soleil et du littoral" },
      ],
    }}
    reassurance={{
      title: "Tu hésites à te lancer ?",
      items: [
        {
          q: "Est-ce difficile ?",
          a: "Une sortie paddle adaptée reste progressive. On peut commencer calmement, prendre le temps de trouver son équilibre et choisir un secteur protégé si les conditions le permettent.",
        },
        {
          q: "Faut-il être sportif ?",
          a: "Non, pas forcément. Le paddle peut être doux et accessible lorsque la durée, la météo, la mer et le parcours sont adaptés au niveau du groupe.",
        },
        {
          q: "Peut-on tomber ?",
          a: "Oui, cela peut arriver, surtout au début ou si la mer bouge. Cela fait partie de l’activité, d’où l’importance d’être à l’aise dans l’eau et de suivre les consignes du prestataire.",
        },
        {
          q: "Est-ce adapté aux débutants ?",
          a: "Oui, le stand up paddle peut très bien convenir aux débutants, à condition de viser une sortie simple, une zone cohérente et des conditions favorables.",
        },
      ],
    }}
    localSeo={{
      title: "Paddle près de Nice, Antibes et Sophia Antipolis",
      paragraphs: [
        "Le paddle Nice, le paddle Antibes et le paddle Cannes sont de bonnes idées pour profiter de la Côte d’Azur depuis la mer. Dans les Alpes-Maritimes, plusieurs secteurs comme le Cap d’Antibes, les Îles de Lérins, Villefranche-sur-Mer ou Cap Ferrat peuvent se prêter à une sortie selon la météo, les conditions de mer et les professionnels locaux disponibles.",
        "Depuis Sophia Antipolis, MSP peut aider à cibler une activité nautique Côte d’Azur réaliste entre Antibes, Cannes, Nice ou les environs, selon ton timing, ton niveau, ton envie de balade tranquille ou plus sportive, et les sorties disponibles.",
        "Que tu cherches du stand up paddle Alpes-Maritimes, une première sortie paddle débutant, une balade au coucher du soleil ou un moment convivial en groupe, l’objectif reste le même : profiter du littoral sans gérer toute l’organisation.",
      ],
      blocksTitle: "Où organiser une sortie paddle autour de la Côte d’Azur ?",
      blocks: [
        {
          title: "Depuis Nice",
          description:
            "Depuis Nice, une sortie paddle peut s’envisager vers Villefranche-sur-Mer ou Cap Ferrat selon la météo, la mer et les prestataires locaux disponibles.",
        },
        {
          title: "Depuis Antibes",
          description:
            "Depuis Antibes, le Cap d’Antibes fait partie des secteurs intéressants pour découvrir le littoral en paddle lorsque les conditions sont favorables.",
        },
        {
          title: "Depuis Cannes",
          description:
            "Depuis Cannes, les Îles de Lérins peuvent offrir un cadre remarquable pour le paddle, à confirmer selon les conditions de mer et les sorties disponibles.",
        },
        {
          title: "Depuis Sophia Antipolis",
          description:
            "Depuis Sophia Antipolis, MSP t’aide à choisir une zone cohérente entre Nice, Antibes et Cannes en fonction de ton niveau, de ton groupe et du créneau souhaité.",
        },
      ],
    }}
    howItWorks={{
      steps: [
        {
          title: "Tu nous contactes",
          desc: "Un message rapide sur WhatsApp pour nous parler de ton envie de paddle.",
        },
        {
          title: "Tu nous expliques ce que tu recherches",
          desc: "Ton point de départ, ton niveau, la période, le groupe et le type de sortie souhaité.",
        },
        {
          title: "On trouve la sortie",
          desc: "On regarde les options paddle avec des professionnels locaux selon la météo et les conditions de mer.",
        },
        {
          title: "Tu profites",
          desc: "Tu viens pagayer, respirer et profiter de la Côte d’Azur sans gérer toute l’organisation.",
        },
      ],
    }}
    faq={{
      items: [
        {
          q: "Peut-on faire du paddle quand on débute ?",
          a: "Oui, certaines sorties paddle sont accessibles aux débutants, selon la météo, les conditions de mer, la zone choisie et la durée de la balade. MSP t’aide à trouver une option adaptée à ton niveau.",
        },
        {
          q: "Faut-il savoir nager ?",
          a: "Oui, il est important de savoir nager et d’être à l’aise dans l’eau. Selon les sorties, un gilet de flottabilité peut être fourni par le prestataire.",
        },
        {
          q: "Est-ce difficile de tenir debout ?",
          a: "Au début, l’équilibre peut demander quelques minutes d’adaptation. Beaucoup de personnes commencent à genoux, puis se lèvent progressivement lorsque la planche est stable et que les conditions sont calmes.",
        },
        {
          q: "Quelle est la meilleure période ?",
          a: "Le printemps, l’été et le début de l’automne sont souvent agréables pour le paddle sur la Côte d’Azur. Le choix dépend toujours de la météo, du vent et de l’état de la mer.",
        },
        {
          q: "Où faire du paddle près d’Antibes ?",
          a: "Le Cap d’Antibes est l’un des secteurs intéressants pour une sortie paddle près d’Antibes, selon les conditions de mer, la saison et les prestataires disponibles.",
        },
        {
          q: "Combien coûte une sortie paddle ?",
          a: "Le prix dépend du prestataire, de la durée, du matériel, de l’encadrement, de la saison et du format choisi. MSP t’aide à clarifier les options disponibles avant de réserver.",
        },
      ],
    }}
    related={{
      title: "Découvrir d’autres activités outdoor",
      items: [
        { icon: Waves, label: "Canyoning", href: "/activites/canyoning" },
        { icon: Waves, label: "Rafting", href: "/activites/rafting" },
        { icon: Sailboat, label: "Kayak", href: "/activites/kayak" },
        { icon: TreePine, label: "Escalade", href: "/activites/escalade" },
        { icon: Cable, label: "Via Ferrata", href: "/activites/via-ferrata" },
      ],
    }}
    readAlso={{
      title: "À lire aussi",
      cards: [
        {
          title: "Paddle débutant : tout ce qu’il faut savoir",
          description:
            "Les repères simples pour comprendre l’équilibre, la pagaie, l’équipement et le déroulé d’une première sortie.",
        },
        {
          title: "Paddle ou kayak : quelle activité choisir ?",
          description:
            "Deux manières de profiter de la mer, avec des sensations, des positions et des formats différents selon tes envies.",
        },
        {
          title: "Les plus beaux spots paddle de la Côte d’Azur",
          description:
            "Des idées de secteurs à explorer selon la météo, la saison, les conditions de mer et les professionnels disponibles.",
        },
        {
          title: "Que prévoir pour une sortie paddle ?",
          description:
            "Tenue, eau, protection solaire, aisance dans l’eau et conseils utiles pour arriver serein le jour J.",
        },
      ],
    }}
    finalCta={{
      title: "Envie d’essayer le paddle ?",
      text: "Profite de la mer autrement avec une sortie paddle adaptée, sans gérer toute l’organisation.",
    }}
  />
);

export default Paddle;
