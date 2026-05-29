import {
  Mountain,
  Waves,
  Footprints,
  ArrowDown,
  Sparkles,
  Heart,
  Smile,
  Users,
  TreePine,
  Compass,
  Cable,
  Trees,
  UserPlus,
  Briefcase,
  Leaf,
  PartyPopper,
  Gamepad2,
  Telescope,
  HandHeart,
} from "lucide-react";
import ActivityPage from "@/components/activity/ActivityPage";

const Canyoning = () => (
  <ActivityPage
    slug="canyoning"
    seo={{
      title: "Canyoning dans les Alpes-Maritimes | MultiSport Planner",
      description:
        "Découvrez le canyoning dans les Alpes-Maritimes. Une activité nature et ludique entre cascades, toboggans naturels et eaux turquoise.",
    }}
    hero={{
      h1: "Canyoning dans les Alpes-Maritimes",
      subtitle: "Une aventure nature à vivre sans t'occuper de l'organisation.",
      intro:
        "Le canyoning, c'est descendre une rivière de montagne à pied, à la nage, en glissant sur des toboggans naturels et en se laissant guider par l'eau. Accessible aux débutants, encadré par des moniteurs diplômés. MSP s'occupe de trouver la sortie, le groupe et le créneau qui te conviennent. Tu n'as plus qu'à venir profiter.",
    }}
    whatIsIt={{
      title: "Le canyoning, c'est quoi exactement ?",
      items: [
        { icon: Footprints, label: "Marche en rivière" },
        { icon: Waves, label: "Nage en eaux vives" },
        { icon: Sparkles, label: "Toboggans naturels" },
        { icon: ArrowDown, label: "Descentes en rappel" },
        { icon: Mountain, label: "Sauts facultatifs" },
        { icon: TreePine, label: "Immersion nature" },
      ],
    }}
    whyTry={{
      title: "Pourquoi essayer le canyoning ?",
      cards: [
        {
          icon: Mountain,
          label: "Une vraie aventure près de chez toi",
          description:
            "Des canyons spectaculaires à moins d'une heure de Nice, dans un cadre sauvage et préservé.",
        },
        {
          icon: Smile,
          label: "Une activité ludique et accessible",
          description:
            "Pas besoin d'être sportif. Tu marches, tu nages, tu glisses, tu t'amuses.",
        },
        {
          icon: Sparkles,
          label: "Une façon originale de bouger",
          description:
            "Loin des salles de sport, on bouge en s'amusant dans un terrain de jeu naturel.",
        },
        {
          icon: Users,
          label: "Une expérience à partager",
          description:
            "Avec tes amis, en couple ou en groupe, c'est une sortie qui crée des souvenirs.",
        },
      ],
    }}
    whyAppealing={{
      title: "Pourquoi le canyoning plaît autant ?",
      intro:
        "Chez MSP on croit au sport pour le plaisir, pas pour la performance. Le canyoning coche toutes les cases.",
      pillars: [
        { icon: Heart, label: "Plaisir" },
        { icon: Gamepad2, label: "Jeu" },
        { icon: Telescope, label: "Découverte" },
        { icon: Leaf, label: "Nature" },
        { icon: HandHeart, label: "Convivialité" },
      ],
    }}
    places={{
      title: "Les plus beaux canyons des Alpes-Maritimes",
      cards: [
        {
          name: "Gorges du Loup",
          location: "Arrière-pays niçois",
          description:
            "Un grand classique à proximité de Nice et Antibes. Cascades, vasques turquoise et sauts variés, parfait pour une première expérience.",
        },
        {
          name: "Canyon de la Maglia",
          location: "Vallée de la Roya",
          description:
            "L'un des plus mythiques des Alpes-Maritimes. Eaux limpides, ambiance sauvage et journée complète d'aventure.",
        },
        {
          name: "Canyon de l'Audin",
          location: "Vallée de la Vésubie",
          description:
            "Un canyon ludique et joueur, avec de nombreux toboggans et sauts facultatifs. Idéal pour découvrir l'activité en s'amusant.",
        },
        {
          name: "Canyon de la Bendola",
          location: "Région de Saorge",
          description:
            "Un parcours technique et engagé pour les amateurs d'aventure, dans un décor minéral spectaculaire.",
        },
      ],
    }}
    audience={{
      title: "À qui s'adresse le canyoning ?",
      profiles: [
        { icon: UserPlus, label: "Débutants" },
        { icon: Users, label: "Groupes d'amis" },
        { icon: Heart, label: "Couples" },
        { icon: Briefcase, label: "Team building" },
        { icon: Trees, label: "Amateurs de nature" },
      ],
    }}
    reassurance={{
      title: "Tu hésites à te lancer ?",
      items: [
        {
          q: "Faut-il être sportif ?",
          a: "Non. Il faut être en bonne santé et à l'aise dans l'eau, mais aucune préparation physique particulière n'est demandée pour les parcours d'initiation.",
        },
        {
          q: "Les sauts sont-ils obligatoires ?",
          a: "Jamais. Tous les sauts sont facultatifs. Le moniteur propose toujours une alternative pour descendre en rappel ou en désescalade.",
        },
        {
          q: "Est-ce adapté aux débutants ?",
          a: "Oui. Beaucoup de canyons des Alpes-Maritimes sont accessibles dès la première sortie, encadrés par un moniteur diplômé qui adapte le rythme au groupe.",
        },
      ],
    }}
    localSeo={{
      title: "Canyoning près de Nice, Antibes et Sophia Antipolis",
      paragraphs: [
        "Les Alpes-Maritimes offrent un terrain de jeu exceptionnel pour le canyoning. Depuis Nice, Antibes ou Cannes, la plupart des canyons sont accessibles en moins d'une heure de route, ce qui rend l'activité parfaite pour une demi-journée ou une journée complète.",
        "Que tu habites à Sophia Antipolis, en centre-ville à Nice ou sur la côte vers Cannes, MSP te propose une sortie adaptée à ta zone, ton niveau et tes envies. L'arrière-pays niçois et la vallée de la Roya regroupent certains des plus beaux canyons d'Europe.",
        "Pas besoin de chercher un prestataire, de comparer les avis ou d'appeler dix structures : tu nous dis ce que tu veux, on organise tout avec nos partenaires locaux de confiance.",
      ],
    }}
    faq={{
      items: [
        {
          q: "Peut-on faire du canyoning quand on débute ?",
          a: "Oui, plusieurs canyons des Alpes-Maritimes sont parfaitement adaptés aux débutants. Le moniteur t'explique tout sur place, pas besoin d'expérience préalable.",
        },
        {
          q: "Faut-il savoir nager ?",
          a: "Il faut être à l'aise dans l'eau. Pas besoin d'être un nageur confirmé, mais savoir flotter et faire quelques mètres est nécessaire pour profiter de l'activité en sécurité.",
        },
        {
          q: "Les sauts sont-ils obligatoires ?",
          a: "Non, jamais. Chaque saut peut être contourné par un rappel ou une désescalade. Tu fais uniquement ce qui te met à l'aise.",
        },
        {
          q: "Quelle est la meilleure période ?",
          a: "La saison du canyoning dans les Alpes-Maritimes s'étend généralement de mai à octobre, avec un pic en juin, juillet et août pour profiter des eaux les plus accueillantes.",
        },
        {
          q: "Peut-on faire du canyoning près de Nice ?",
          a: "Oui, plusieurs canyons sont accessibles en moins d'une heure depuis Nice, notamment dans l'arrière-pays niçois et la vallée de la Vésubie.",
        },
        {
          q: "Combien coûte une sortie canyoning ?",
          a: "Le tarif dépend du canyon et de la durée. Compte généralement entre 50 et 90 € par personne pour une sortie encadrée par un moniteur diplômé.",
        },
      ],
    }}
    related={{
      title: "Découvrir d'autres activités outdoor",
      items: [
        { icon: Waves, label: "Rafting" },
        { icon: Compass, label: "Kayak" },
        { icon: Cable, label: "Via Ferrata" },
        { icon: TreePine, label: "Escalade" },
        { icon: Waves, label: "Paddle" },
      ],
    }}
    finalCta={{ title: "Envie d'essayer le canyoning ?" }}
  />
);

export default Canyoning;
