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

const Kayak = () => (
  <ActivityPage
    slug="kayak"
    seo={{
      title: "Kayak sur la Côte d’Azur | MultiSport Planner",
      description:
        "Découvrez le kayak près de Nice, Antibes et Cannes. Une activité nautique accessible pour explorer la Côte d’Azur autrement, sans gérer l’organisation.",
    }}
    hero={{
      h1: "Kayak sur la Côte d’Azur",
      subtitle:
        "Une activité nautique à vivre sans t’occuper de l’organisation.",
      intro:
        "Le kayak est une activité idéale pour découvrir la Côte d’Azur autrement. En mer, sur une baie calme ou le long d’un cap, il permet d’explorer des paysages magnifiques tout en bougeant à son rythme. Près de Nice, Antibes, Cannes ou Sophia Antipolis, plusieurs spots permettent de pratiquer le kayak de mer, que ce soit pour une sortie découverte, une balade en groupe ou une activité plus sportive. Avec MSP, pas besoin de chercher un loueur, comparer les prestataires ou trouver un groupe. Nous t’aidons à organiser une sortie kayak adaptée à ton niveau, tes envies et ta zone.",
    }}
    gallery={{
      images: [
        {
          src: "https://images.pexels.com/photos/5531583/pexels-photo-5531583.jpeg?auto=compress&cs=tinysrgb&w=900",
          alt: "Sortie kayak sur la Côte d’Azur",
          title: "Une balade nautique au rythme de l’eau",
          credit: "Photo : Rachel Claire / Pexels",
        },
        {
          src: "https://images.pexels.com/photos/7276646/pexels-photo-7276646.jpeg?auto=compress&cs=tinysrgb&w=900",
          alt: "Kayak de mer près d’Antibes",
          title: "Explorer le littoral depuis la mer",
          credit: "Photo : Rachel Claire / Pexels",
        },
        {
          src: "/activites/kayak-riviere-groupe.webp",
          alt: "Kayak en groupe sur une rivière",
          title: "Une sortie conviviale en kayak",
          credit: "Photo MSP",
        },
        {
          src: "/activites/kayak-riviere-nature.webp",
          alt: "Kayak en rivière au cœur de la nature",
          title: "Explorer les rivières et espaces naturels",
          credit: "Photo MSP",
        },
      ],
    }}
    whatIsIt={{
      title: "Le kayak, c’est quoi exactement ?",
      intro: [
        "Le kayak consiste à avancer sur l’eau avec une pagaie, généralement seul ou à deux selon le type d’embarcation. En fonction du lieu, il peut se pratiquer en mer, sur un lac ou sur une rivière calme, avec un rythme accessible et une progression adaptée au groupe.",
        "Sur la Côte d’Azur, le kayak de mer permet de vivre une balade nautique au plus près du littoral. On pagaie, on observe, on prend le temps de découvrir les caps, les baies, les criques et les reliefs depuis un point de vue différent.",
        "La sortie peut se vivre en solo, en duo ou en groupe. Selon les conditions, le parcours et les envies, un encadrement professionnel peut aider à choisir la zone, expliquer les consignes et rendre l’expérience plus sereine, notamment pour une sortie kayak débutant.",
      ],
      items: [
        { icon: Waves, label: "Balade sur l’eau" },
        { icon: Sailboat, label: "Kayak simple ou biplace" },
        { icon: Compass, label: "Exploration du littoral" },
        { icon: Wind, label: "Activité calme ou sportive" },
        { icon: ShieldCheck, label: "Sortie encadrée possible" },
        { icon: Smile, label: "Accessible aux débutants selon les conditions" },
      ],
      outro: [
        "Le kayak Côte d’Azur n’est pas une course. C’est une façon simple de bouger, de respirer et de profiter de la mer tout en découvrant des paysages que l’on ne voit pas de la même manière depuis la route ou la plage.",
      ],
    }}
    whyTry={{
      title: "Pourquoi essayer le kayak ?",
      cards: [
        {
          icon: Compass,
          label: "Découvrir la Côte d’Azur autrement",
          description:
            "Depuis l’eau, les paysages changent complètement. Le kayak permet d’explorer criques, baies et caps sous un nouvel angle.",
        },
        {
          icon: Smile,
          label: "Une activité accessible",
          description:
            "Selon le parcours et les conditions, le kayak peut être pratiqué par des débutants, à son rythme et sans pression.",
        },
        {
          icon: Leaf,
          label: "Un moment de déconnexion",
          description:
            "Pagayer sur l’eau permet de ralentir, respirer et sortir du quotidien.",
        },
        {
          icon: Users,
          label: "Une sortie à partager",
          description:
            "En couple, entre amis ou en petit groupe, le kayak crée un moment simple, naturel et convivial.",
        },
      ],
    }}
    whyAppealing={{
      title: "Pourquoi le kayak plaît autant ?",
      intro:
        "Chez MSP, on croit au sport par le plaisir, pas par la performance. Le kayak ne consiste pas à aller vite ou à prouver quelque chose : il permet d’explorer, de profiter de la mer, de bouger doucement et de découvrir des lieux qui semblent différents depuis l’eau.",
      outro:
        "Plaisir · Liberté · Exploration · Nature · Évasion",
      pillars: [
        { icon: Heart, label: "Plaisir" },
        { icon: Sparkles, label: "Liberté" },
        { icon: Compass, label: "Exploration" },
        { icon: Trees, label: "Nature" },
        { icon: Sun, label: "Évasion" },
      ],
    }}
    intermediateCta={{
      title: "Envie de tester le kayak ?",
      text: "Pas besoin de chercher un loueur, de comparer les prestataires ou de trouver un groupe. MSP t’aide à organiser une sortie kayak adaptée à ton niveau, tes envies et ta zone.",
    }}
    places={{
      title: "Où faire du kayak sur la Côte d’Azur ?",
      intro:
        "Depuis Nice, Antibes, Cannes ou Sophia Antipolis, plusieurs sites permettent de pratiquer le kayak de mer selon la météo, la saison, les conditions de mer et les sorties disponibles.",
      cards: [
        {
          name: "Cap d’Antibes",
          location: "Antibes",
          description:
            "Un secteur idéal pour découvrir le littoral depuis l’eau, avec des paysages entre criques, rochers et vues sur la Méditerranée.",
        },
        {
          name: "Îles de Lérins",
          location: "Cannes",
          description:
            "Une destination emblématique pour une sortie kayak autour des îles, selon les conditions météo et les prestataires disponibles.",
        },
        {
          name: "Baie de Villefranche-sur-Mer",
          location: "Près de Nice",
          description:
            "Un site apprécié pour ses eaux souvent plus abritées et son cadre spectaculaire entre mer et reliefs.",
        },
        {
          name: "Cap Ferrat",
          location: "Saint-Jean-Cap-Ferrat",
          description:
            "Un secteur très agréable pour explorer la côte, les petites anses et les paysages méditerranéens depuis l’eau.",
        },
        {
          name: "Estérel",
          location: "Théoule-sur-Mer / Saint-Raphaël",
          description:
            "Un décor spectaculaire entre roches rouges et mer turquoise, adapté à des sorties kayak selon la météo et les conditions.",
        },
      ],
    }}
    audience={{
      title: "Le kayak est fait pour toi si…",
      intro:
        "Le kayak convient particulièrement aux personnes qui veulent bouger sans pression, profiter de la mer et vivre une activité simple, accessible et dépaysante.",
      profiles: [
        { icon: Compass, label: "Tu veux découvrir la Côte d’Azur autrement" },
        { icon: Trees, label: "Tu aimes les activités nature" },
        { icon: Wind, label: "Tu cherches une sortie calme ou sportive" },
        { icon: Users, label: "Tu veux partager un moment à deux ou entre amis" },
        { icon: Leaf, label: "Tu as envie de déconnecter" },
      ],
    }}
    reassurance={{
      title: "Tu hésites à te lancer ?",
      items: [
        {
          q: "Faut-il être sportif ?",
          a: "Non, pas forcément. Une sortie kayak peut être tranquille si le parcours, la météo et les conditions de mer sont adaptés. L’objectif est de pagayer à ton rythme, sans pression.",
        },
        {
          q: "Est-ce adapté aux débutants ?",
          a: "Oui, certaines sorties sont pensées pour les débutants. MSP t’aide à viser une option cohérente avec ton niveau, la saison, la zone et les sorties disponibles.",
        },
        {
          q: "Peut-on faire du kayak quand on n’en a jamais fait ?",
          a: "Oui, c’est possible selon les conditions et le parcours choisi. Un prestataire local peut expliquer les bases, les consignes de sécurité et le bon usage de la pagaie.",
        },
        {
          q: "Est-ce que c’est difficile de pagayer ?",
          a: "Sur une balade adaptée, pagayer reste simple et progressif. Le vent, la distance et l’état de la mer peuvent changer l’effort, d’où l’importance de choisir une sortie adaptée au groupe.",
        },
      ],
    }}
    localSeo={{
      title: "Kayak près de Nice, Antibes et Sophia Antipolis",
      paragraphs: [
        "Le kayak près de Nice, le kayak Antibes ou le kayak Cannes sont de bonnes idées pour découvrir la Côte d’Azur depuis l’eau. Dans les Alpes-Maritimes, plusieurs secteurs comme le Cap d’Antibes, les Îles de Lérins, Villefranche-sur-Mer, Cap Ferrat ou l’Estérel peuvent se prêter à une sortie selon la météo, les conditions de mer et les professionnels locaux disponibles.",
        "Cette activité nautique Côte d’Azur fonctionne bien pour un week-end, une demi-journée, une sortie au coucher du soleil, un moment entre amis, en couple, en petit groupe ou en format team building lorsque l’encadrement, le niveau du groupe et la logistique sont adaptés.",
        "Si tu cherches du kayak de mer Alpes-Maritimes ou du kayak près de Sophia Antipolis, MSP t’aide à clarifier les options réalistes : zone de départ, envie de balade calme ou plus sportive, saison, niveau du groupe et sorties disponibles.",
      ],
      blocksTitle: "Où faire du kayak autour de la Côte d’Azur ?",
      blocks: [
        {
          title: "Depuis Nice",
          description:
            "Depuis Nice, une sortie kayak peut s’envisager vers des secteurs côtiers comme Villefranche-sur-Mer ou Cap Ferrat, selon la météo, la mer et les prestataires disponibles.",
        },
        {
          title: "Depuis Antibes",
          description:
            "Depuis Antibes, le Cap d’Antibes fait partie des zones intéressantes pour découvrir le littoral en kayak, avec un parcours à adapter aux conditions du moment.",
        },
        {
          title: "Depuis Cannes",
          description:
            "Depuis Cannes, les Îles de Lérins peuvent être une piste pour une sortie kayak, uniquement si la météo, la mer et l’organisation locale le permettent.",
        },
        {
          title: "Depuis Sophia Antipolis",
          description:
            "Depuis Sophia Antipolis, MSP peut aider à cibler une zone cohérente entre Antibes, Cannes ou les environs, en fonction du timing et du niveau du groupe.",
        },
        {
          title: "Autour du Cap d’Antibes",
          description:
            "Le Cap d’Antibes permet d’imaginer une découverte du littoral, des criques et des vues sur la Méditerranée avec des professionnels locaux lorsque les conditions sont favorables.",
        },
        {
          title: "Vers les Îles de Lérins",
          description:
            "Les Îles de Lérins offrent un cadre emblématique côté Cannes, à envisager selon les sorties disponibles, la saison et l’état de la mer.",
        },
      ],
    }}
    howItWorks={{
      steps: [
        {
          title: "Tu nous contactes",
          desc: "Un message rapide sur WhatsApp pour nous parler de ton envie de kayak.",
        },
        {
          title: "Tu nous expliques ce que tu recherches",
          desc: "Ton point de départ, ton niveau, la période, le groupe et le type de sortie souhaité.",
        },
        {
          title: "On trouve la sortie",
          desc: "On regarde les options kayak avec des professionnels locaux selon la météo et les conditions de mer.",
        },
        {
          title: "Tu profites",
          desc: "Tu viens pagayer, respirer et découvrir la Côte d’Azur sans gérer toute l’organisation.",
        },
      ],
    }}
    faq={{
      items: [
        {
          q: "Peut-on faire du kayak quand on débute ?",
          a: "Oui, certaines sorties kayak sont accessibles aux débutants, selon la météo, les conditions de mer et le parcours choisi. MSP t’aide à trouver une sortie adaptée à ton niveau.",
        },
        {
          q: "Faut-il savoir nager ?",
          a: "Il est préférable d’être à l’aise dans l’eau. Selon les sorties, un gilet de flottabilité est généralement fourni par le prestataire.",
        },
        {
          q: "Faut-il être sportif pour faire du kayak ?",
          a: "Non, pas forcément. Certaines balades sont tranquilles et accessibles, tandis que d’autres peuvent être plus sportives selon la distance, le vent et les conditions.",
        },
        {
          q: "Quelle est la meilleure période pour faire du kayak ?",
          a: "Le printemps, l’été et le début de l’automne sont souvent les périodes les plus agréables, mais cela dépend toujours de la météo et de l’état de la mer.",
        },
        {
          q: "Peut-on faire du kayak près d’Antibes ?",
          a: "Oui, le Cap d’Antibes est l’un des secteurs intéressants pour une sortie kayak sur la Côte d’Azur, selon les conditions et les prestataires disponibles.",
        },
        {
          q: "Combien coûte une sortie kayak ?",
          a: "Le prix dépend du prestataire, de la durée, du matériel, de l’encadrement et de la saison. Une sortie kayak peut généralement aller d’une location courte à une sortie encadrée plus complète.",
        },
      ],
    }}
    related={{
      title: "Découvrir d’autres activités outdoor",
      items: [
        { icon: Waves, label: "Canyoning", href: "/activites/canyoning" },
        { icon: Waves, label: "Rafting", href: "/activites/rafting" },
        { icon: Cable, label: "Via Ferrata", href: "/activites/via-ferrata" },
        { icon: TreePine, label: "Escalade", href: "/activites/escalade" },
        { icon: Waves, label: "Paddle", href: "/activites/paddle" },
      ],
    }}
    readAlso={{
      title: "À lire aussi",
      cards: [
        {
          title: "Kayak débutant : ce qu’il faut savoir avant de se lancer",
          description:
            "Les repères simples pour comprendre le niveau, la pagaie, l’équipement et le déroulé d’une première sortie.",
        },
        {
          title: "Kayak ou paddle : quelle activité choisir ?",
          description:
            "Deux façons de profiter de la mer, avec des sensations et des formats différents selon tes envies.",
        },
        {
          title: "Les plus belles sorties kayak sur la Côte d’Azur",
          description:
            "Des idées de secteurs à explorer selon la météo, la saison et les sorties proposées par les professionnels locaux.",
        },
        {
          title: "Que prévoir pour une sortie kayak ?",
          description:
            "Tenue, eau, protection solaire, aisance dans l’eau et conseils utiles pour arriver serein le jour J.",
        },
      ],
    }}
    finalCta={{
      title: "Envie d’essayer le kayak ?",
      text: "Découvre la Côte d’Azur autrement depuis l’eau, sans gérer toute l’organisation.",
    }}
  />
);

export default Kayak;
