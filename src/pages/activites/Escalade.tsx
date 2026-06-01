import {
  Mountain,
  Waves,
  Dumbbell,
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
  Focus,
  Hand,
  Trophy,
} from "lucide-react";
import ActivityPage from "@/components/activity/ActivityPage";

const Escalade = () => (
  <ActivityPage
    slug="escalade"
    seo={{
      title: "Escalade dans les Alpes-Maritimes | MultiSport Planner",
      description:
        "Découvrez l’escalade près de Nice, Antibes et Cannes. Une activité outdoor accessible pour prendre de la hauteur sans gérer l’organisation.",
    }}
    hero={{
      h1: "Escalade dans les Alpes-Maritimes",
      subtitle:
        "Une activité outdoor pour prendre de la hauteur sans t’occuper de l’organisation.",
      intro:
        "L’escalade est une activité idéale pour bouger autrement, prendre confiance et découvrir la nature sous un nouvel angle. En salle, sur bloc ou en extérieur, elle permet de progresser à son rythme, sans chercher la performance. Près de Nice, Antibes, Cannes ou Sophia Antipolis, plusieurs lieux permettent de pratiquer l’escalade, que ce soit pour une première découverte, une sortie encadrée ou une activité entre amis. Avec MSP, pas besoin de chercher une salle, un moniteur, un groupe ou un créneau. Nous t’aidons à trouver une sortie escalade adaptée à ton niveau, tes envies et ta zone.",
    }}
    gallery={{
      images: [
        {
          src: "https://images.pexels.com/photos/4615934/pexels-photo-4615934.jpeg?auto=compress&cs=tinysrgb&w=900",
          alt: "Sortie escalade dans les Alpes-Maritimes",
          title: "Prendre de la hauteur sans pression",
          credit: "Photo : Allan Mas / Pexels",
        },
        {
          src: "https://images.pexels.com/photos/1415810/pexels-photo-1415810.jpeg?auto=compress&cs=tinysrgb&w=900",
          alt: "Escalade en falaise sur la Côte d’Azur",
          title: "Découvrir la falaise avec un cadre adapté",
          credit: "Photo : Mikhail Nilov / Pexels",
        },
        {
          src: "https://images.pexels.com/photos/3030404/pexels-photo-3030404.jpeg?auto=compress&cs=tinysrgb&w=900",
          alt: "Groupe en activité escalade",
          title: "Une expérience ludique à partager",
          credit: "Photo : Min An / Pexels",
        },
        {
          src: "https://images.pexels.com/photos/1001845/pexels-photo-1001845.jpeg?auto=compress&cs=tinysrgb&w=900",
          alt: "Escalade débutant près de Nice",
          title: "Progresser à son rythme, étape par étape",
          credit: "Photo : Pixabay / Pexels",
        },
      ],
    }}
    whatIsIt={{
      title: "L’escalade, c’est quoi exactement ?",
      intro: [
        "L’escalade consiste à grimper sur un mur, un bloc ou une falaise en utilisant les prises pour avancer progressivement. Selon le format choisi, on peut découvrir l’activité en salle, essayer le bloc sans corde à faible hauteur ou partir en extérieur avec un encadrement adapté.",
        "L’objectif n’est pas de monter vite ou de chercher la performance. Pour une sortie escalade débutant, l’idée est de comprendre les gestes, apprendre à se placer, progresser avec sécurité et prendre confiance dans un cadre rassurant.",
        "Le matériel adapté et les consignes sont expliqués par les professionnels locaux lorsque la sortie est encadrée. En fonction du niveau du groupe, de la saison et des conditions, MSP t’aide à trouver une option cohérente pour découvrir l’escalade dans les Alpes-Maritimes.",
      ],
      items: [
        { icon: Mountain, label: "Escalade en salle" },
        { icon: Hand, label: "Bloc" },
        { icon: TreePine, label: "Escalade en falaise" },
        { icon: Trophy, label: "Progression à son rythme" },
        { icon: ShieldCheck, label: "Activité encadrée possible" },
        { icon: Focus, label: "Confiance et concentration" },
      ],
      outro: [
        "L’escalade Côte d’Azur peut se vivre comme une découverte simple, une activité outdoor entre amis ou un moment pour sortir de sa routine. Tu bouges, tu réfléchis, tu respires et tu avances prise après prise.",
      ],
    }}
    whyTry={{
      title: "Pourquoi essayer l’escalade ?",
      intro:
        "L’escalade attire parce qu’elle combine mouvement, réflexion, confiance et plaisir. On grimpe à son rythme, on apprend à lire un passage et on ressent vite la satisfaction d’avoir osé essayer.",
      cards: [
        {
          icon: Dumbbell,
          label: "Une activité complète",
          description:
            "L’escalade sollicite le corps, l’équilibre, la coordination et la respiration sans ressembler à une séance classique.",
        },
        {
          icon: Heart,
          label: "Un vrai boost de confiance",
          description:
            "Chaque prise franchie donne une sensation de progression concrète, même quand on débute.",
        },
        {
          icon: Smile,
          label: "Une façon ludique de bouger",
          description:
            "On avance comme dans un jeu, en cherchant le bon chemin plutôt qu’en comptant les efforts.",
        },
        {
          icon: Users,
          label: "Une expérience à partager",
          description:
            "Entre amis, en petit groupe ou avec un encadrant, l’escalade crée des encouragements et des souvenirs communs.",
        },
      ],
    }}
    whyAppealing={{
      title: "Pourquoi l’escalade plaît autant ?",
      intro:
        "Chez MSP, on croit au sport pour le plaisir, pas pour la performance. L’escalade correspond bien à cette vision : elle invite à se concentrer, à essayer, à progresser et à prendre confiance sans se comparer aux autres.",
      outro:
        "Ce qui plaît, c’est le mélange entre challenge accessible, plaisir de grimper, contact avec la nature en extérieur, concentration et satisfaction de dépasser une petite appréhension. Plaisir · Confiance · Progression · Nature · Concentration",
      pillars: [
        { icon: Heart, label: "Plaisir" },
        { icon: Sparkles, label: "Confiance" },
        { icon: Trophy, label: "Progression" },
        { icon: Trees, label: "Nature" },
        { icon: Focus, label: "Concentration" },
      ],
    }}
    intermediateCta={{
      title: "Envie de tester l’escalade ?",
      text: "Pas besoin de choisir seul une salle, un spot ou un moniteur. MSP t’aide à trouver une sortie escalade adaptée à ton niveau, tes envies et ta zone.",
    }}
    places={{
      title: "Où faire de l’escalade dans les Alpes-Maritimes ?",
      intro:
        "Près de Nice, Antibes, Cannes et Sophia Antipolis, plusieurs options existent pour découvrir l’escalade selon la saison, les conditions, les sorties disponibles et le niveau du groupe.",
      cards: [
        {
          name: "Nice",
          location: "Escalade Nice",
          description:
            "Nice permet d’envisager des salles et des sites outdoor selon disponibilité, avec des professionnels locaux pour orienter la sortie en fonction du niveau du groupe.",
        },
        {
          name: "Antibes / Sophia Antipolis",
          location: "Escalade Antibes et Sophia Antipolis",
          description:
            "Un secteur pratique pour une pratique loisir, des sorties encadrées ou une découverte proche du quotidien, selon les créneaux et les sorties disponibles.",
        },
        {
          name: "Saint-Jeannet",
          location: "Site naturel emblématique",
          description:
            "Saint-Jeannet est un site naturel emblématique des Alpes-Maritimes. Les sorties s’y organisent selon les conditions, la saison et l’encadrement adapté.",
        },
        {
          name: "La Turbie",
          location: "Secteur outdoor réputé",
          description:
            "La Turbie fait partie des secteurs outdoor réputés de la Côte d’Azur. Le choix d’un itinéraire dépend toujours des conditions et du niveau du groupe.",
        },
        {
          name: "Gorges du Loup",
          location: "Cadre naturel selon niveau",
          description:
            "Les Gorges du Loup offrent un cadre naturel apprécié, à envisager selon l’encadrement, la météo, la saison et l’expérience des participants.",
        },
      ],
    }}
    audience={{
      title: "L’escalade est faite pour toi si…",
      intro:
        "L’escalade est une bonne option si tu veux bouger autrement, tester une activité outdoor Alpes-Maritimes et vivre une progression simple sans pression.",
      profiles: [
        { icon: Smile, label: "Tu veux bouger sans pression" },
        { icon: Sparkles, label: "Tu cherches une activité ludique" },
        { icon: Heart, label: "Tu veux prendre confiance" },
        { icon: Trees, label: "Tu aimes les activités outdoor" },
        { icon: Compass, label: "Tu veux sortir de ta routine" },
      ],
    }}
    reassurance={{
      title: "Tu hésites à te lancer ?",
      items: [
        {
          q: "Je débute complètement, est-ce que c’est possible ?",
          a: "Oui, l’escalade débutant est justement pensée pour apprendre progressivement. Le plus important est de choisir un format adapté, avec des consignes claires et un rythme qui correspond au groupe.",
        },
        {
          q: "Et si j’ai le vertige ?",
          a: "Le vertige se gère différemment selon les personnes. Une première séance peut commencer en bloc, en salle ou sur des hauteurs limitées. L’idée n’est jamais de forcer, mais de rester dans une zone rassurante.",
        },
        {
          q: "Je n’ai pas beaucoup de force, est-ce gênant ?",
          a: "Non. L’escalade ne repose pas seulement sur les bras. Les jambes, le placement, l’équilibre et la concentration comptent beaucoup. Un encadrant peut aider à trouver les bons gestes dès le départ.",
        },
        {
          q: "Est-ce que c’est sécurisé ?",
          a: "La sécurité dépend du lieu, du matériel, de l’encadrement et des conditions. MSP privilégie des sorties cohérentes avec ton niveau et des professionnels locaux lorsque l’activité nécessite un accompagnement.",
        },
      ],
    }}
    localSeo={{
      title: "Escalade près de Nice, Antibes et Sophia Antipolis",
      paragraphs: [
        "L’escalade dans les Alpes-Maritimes peut se pratiquer sous plusieurs formes : escalade en salle, bloc, sortie découverte ou escalade en falaise. Cette diversité permet de trouver une option adaptée aux débutants comme aux personnes qui veulent simplement reprendre une activité outdoor.",
        "Depuis Nice, Antibes, Cannes ou Sophia Antipolis, il existe différentes possibilités pour organiser une sortie escalade Côte d’Azur, selon les sorties disponibles, la saison, la météo et l’encadrement nécessaire.",
        "Certains secteurs comme Saint-Jeannet, La Turbie ou les Gorges du Loup sont connus pour leur cadre naturel. Le choix du lieu dépend toujours des conditions, du niveau du groupe et des professionnels locaux disponibles.",
        "Avec MSP, tu n’as pas à comparer seul les options. Nous t’aidons à clarifier ton envie, ton niveau et ta zone pour trouver une sortie escalade Nice, escalade Antibes ou escalade Cannes qui reste réaliste et agréable.",
      ],
    }}
    faq={{
      items: [
        {
          q: "Peut-on faire de l’escalade quand on débute ?",
          a: "Oui, il est possible de faire de l’escalade quand on débute. Le plus important est de choisir un format adapté : salle, bloc, initiation ou sortie encadrée selon les conditions et le niveau du groupe.",
        },
        {
          q: "Faut-il être très sportif pour commencer ?",
          a: "Non, il n’est pas nécessaire d’être très sportif pour commencer. L’escalade peut se découvrir progressivement, avec des voies ou des blocs accessibles et un rythme adapté aux participants.",
        },
        {
          q: "Est-ce qu’il faut avoir beaucoup de force dans les bras ?",
          a: "Pas forcément. Les débutants pensent souvent que l’escalade demande surtout les bras, mais les jambes, l’équilibre, le placement et la concentration sont essentiels. On apprend justement à grimper plus efficacement.",
        },
        {
          q: "Peut-on faire de l’escalade si on a le vertige ?",
          a: "Cela dépend du niveau de vertige et du format choisi. Une découverte peut commencer en salle, en bloc ou sur des hauteurs progressives. L’objectif est de rester dans un cadre rassurant et de ne jamais forcer inutilement.",
        },
        {
          q: "Où faire de l’escalade près de Nice ?",
          a: "Autour de Nice, plusieurs possibilités existent selon les sorties disponibles : salles, blocs, sites outdoor et secteurs naturels comme Saint-Jeannet, La Turbie ou d’autres zones des Alpes-Maritimes. MSP t’aide à trouver une option adaptée à ton point de départ.",
        },
        {
          q: "Combien coûte une sortie escalade ?",
          a: "Le prix varie selon le lieu, la durée, le matériel inclus, le niveau d’encadrement et le prestataire. Une séance en salle, une initiation ou une sortie en falaise n’ont pas le même tarif. Le montant exact dépend de la sortie disponible et du professionnel local.",
        },
      ],
    }}
    related={{
      title: "Découvrir d’autres activités outdoor",
      items: [
        { icon: Waves, label: "Canyoning", href: "/activites/canyoning" },
        { icon: Waves, label: "Rafting", href: "/activites/rafting" },
        { icon: Compass, label: "Kayak", href: "/activites/kayak" },
        { icon: Cable, label: "Via Ferrata", href: "/activites/via-ferrata" },
        { icon: Leaf, label: "Paddle", href: "/activites/paddle" },
      ],
    }}
    readAlso={{
      title: "À lire aussi",
      cards: [
        {
          title: "Escalade débutant : ce qu’il faut savoir avant de commencer",
          description:
            "Les bases pour comprendre les formats, le matériel, le rythme et les premières sensations.",
        },
        {
          title: "Escalade en salle ou en extérieur : que choisir ?",
          description:
            "Un comparatif simple pour choisir entre mur, bloc, falaise et sortie encadrée selon tes envies.",
        },
        {
          title: "Les meilleurs spots d’escalade dans les Alpes-Maritimes",
          description:
            "Un guide à venir pour repérer les secteurs connus autour de Nice, Antibes et la Côte d’Azur.",
        },
        {
          title: "Que prévoir pour une première sortie escalade ?",
          description:
            "Tenue, eau, chaussures, matériel et conseils pratiques pour arriver serein le jour de la sortie.",
        },
      ],
    }}
    finalCta={{
      title: "Envie d’essayer l’escalade ?",
      text: "Prends de la hauteur, découvre une activité ludique et laisse MSP t’aider à organiser ta sortie.",
    }}
  />
);

export default Escalade;
