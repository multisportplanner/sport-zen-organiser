import {
  Mountain,
  Footprints,
  Sparkles,
  Heart,
  Compass,
  Cable,
  Trees,
  ShieldCheck,
  Eye,
  Sunrise,
  Route,
  Wind,
} from "lucide-react";
import ActivityPage from "@/components/activity/ActivityPage";

const ViaFerrata = () => (
  <ActivityPage
    slug="via-ferrata"
    seo={{
      title: "Via Ferrata dans les Alpes-Maritimes | MultiSport Planner",
      description:
        "Découvrez la Via Ferrata près de Nice. Une activité outdoor entre randonnée et escalade pour prendre de la hauteur sans gérer l'organisation.",
    }}
    hero={{
      h1: "Via Ferrata dans les Alpes-Maritimes",
      subtitle:
        "Une aventure verticale à vivre sans t'occuper de l'organisation.",
      intro:
        "La Via Ferrata est une activité entre randonnée et escalade qui permet de progresser le long de falaises équipées de câbles, passerelles et échelles sécurisées. Accessible à de nombreux pratiquants selon les parcours, elle offre une expérience unique pour découvrir la montagne autrement. Près de Nice, des Alpes-Maritimes et de l'arrière-pays azuréen, plusieurs itinéraires permettent de découvrir cette activité spectaculaire. Avec MSP, pas besoin de chercher un guide, un groupe ou un créneau. Nous t'aidons à trouver une sortie adaptée à ton niveau et à tes envies.",
    }}
    gallery={{
      images: [
        {
          src: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=900&q=75",
          alt: "Via Ferrata dans les Alpes-Maritimes",
          title: "Prendre de la hauteur en montagne",
        },
        {
          src: "https://images.unsplash.com/photo-1483691278019-cb7253bee49f?auto=format&fit=crop&w=900&q=75",
          alt: "Passage aérien en Via Ferrata",
          title: "Des passages aériens et sécurisés",
        },
        {
          src: "https://images.unsplash.com/photo-1527489377706-5bf97e608852?auto=format&fit=crop&w=900&q=75",
          alt: "Activité montagne près de Nice",
          title: "Une activité outdoor entre ciel et roche",
        },
        {
          src: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=75",
          alt: "Groupe en Via Ferrata sur la Côte d’Azur",
          title: "Une sortie montagne à partager",
        },
      ],
    }}
    whatIsIt={{
      title: "La Via Ferrata, c’est quoi exactement ?",
      intro: [
        "La via ferrata Alpes-Maritimes consiste à progresser sur un parcours équipé en paroi ou en terrain rocheux. On avance à pied sur des vires, des marches naturelles ou des sections plus verticales, tout en restant relié à des câbles de sécurité installés le long de l’itinéraire.",
        "Selon le parcours, la sortie peut intégrer des passerelles, des ponts suspendus, des échelles métalliques et des passages aériens. Le matériel spécifique, comme le casque, le baudrier et les longes de via ferrata, permet de suivre les consignes et de rester sécurisé pendant la progression.",
        "Une sortie peut être encadrée par un professionnel local, surtout pour une première expérience ou une via ferrata débutant. L’objectif est de découvrir la montagne autrement, avec des sensations accessibles et un rythme adapté au groupe.",
      ],
      items: [
        { icon: Footprints, label: "Randonnée verticale" },
        { icon: Wind, label: "Passages aériens" },
        { icon: Mountain, label: "Découverte de la montagne" },
        { icon: ShieldCheck, label: "Activité encadrée possible" },
        { icon: Sparkles, label: "Sensations accessibles" },
        { icon: Cable, label: "Progression sécurisée" },
      ],
      outro: [
        "Entre marche, hauteur, observation et progression sur équipements, la via ferrata Côte d'Azur offre une aventure complète sans être une séance d’escalade classique. Le choix du parcours, de la saison et de l’encadrement reste essentiel pour vivre une sortie cohérente avec ton niveau.",
      ],
    }}
    whyTry={{
      title: "Pourquoi essayer la Via Ferrata ?",
      cards: [
        {
          icon: Sparkles,
          label: "Une aventure hors du commun",
          description:
            "La via ferrata sort du cadre habituel : on avance en hauteur, on franchit des passages équipés et on vit une vraie parenthèse outdoor.",
        },
        {
          icon: Eye,
          label: "Une vue exceptionnelle sur les paysages",
          description:
            "Depuis la paroi, les vallées, les reliefs et l’arrière-pays se découvrent sous un angle spectaculaire.",
        },
        {
          icon: Footprints,
          label: "Une activité entre marche et escalade",
          description:
            "Tu retrouves l’esprit de la randonnée avec une dimension verticale, sans devoir pratiquer l’escalade en autonomie.",
        },
        {
          icon: Heart,
          label: "Une expérience dont on se souvient longtemps",
          description:
            "Les passerelles, les câbles, la hauteur et le sentiment d’avoir osé créent un souvenir fort à partager.",
        },
      ],
    }}
    whyAppealing={{
      title: "Pourquoi la Via Ferrata plaît autant ?",
      intro:
        "La Via Ferrata plaît parce qu’elle mélange aventure, dépassement de soi, découverte, confiance et immersion dans la nature. On avance progressivement, on apprend à gérer la hauteur et on profite d’un décor qui donne envie de lever les yeux.",
      outro: "Aventure · Nature · Confiance · Découverte · Évasion",
      pillars: [
        { icon: Sparkles, label: "Aventure" },
        { icon: Trees, label: "Nature" },
        { icon: ShieldCheck, label: "Confiance" },
        { icon: Compass, label: "Découverte" },
        { icon: Sunrise, label: "Évasion" },
      ],
    }}
    intermediateCta={{
      title: "Envie de tester la Via Ferrata ?",
      text: "Dis-nous ton niveau, ta zone et tes envies. MSP t’aide à trouver une sortie Via Ferrata adaptée, selon les conditions et les disponibilités des professionnels locaux.",
    }}
    places={{
      title: "Où faire de la Via Ferrata dans les Alpes-Maritimes ?",
      intro:
        "Plusieurs secteurs peuvent être envisagés pour une sortie montagne Côte d'Azur. Les possibilités varient selon la saison, les conditions météo, les conditions du parcours et les sorties disponibles avec des professionnels locaux.",
      cards: [
        {
          name: "La Colmiane",
          location: "Vésubie",
          description:
            "Un secteur de montagne connu pour ses activités outdoor, à envisager selon la saison, l’ouverture des itinéraires et les sorties encadrées disponibles.",
        },
        {
          name: "Lantosque",
          location: "Vallée de la Vésubie",
          description:
            "Une zone de l’arrière-pays niçois qui peut offrir une belle ambiance verticale, selon les conditions et l’accompagnement proposé.",
        },
        {
          name: "Peille",
          location: "Proche du littoral azuréen",
          description:
            "Une option intéressante pour une via ferrata Nice ou proche Côte d’Azur, à vérifier selon les périodes, les niveaux et les professionnels disponibles.",
        },
        {
          name: "Tende",
          location: "Roya-Bévéra",
          description:
            "Un secteur montagne plus éloigné, adapté à une sortie à organiser selon le temps disponible, la saison et les conditions locales.",
        },
      ],
    }}
    audience={{
      title: "La Via Ferrata est faite pour toi si…",
      profiles: [
        {
          icon: Mountain,
          label: "Tu veux découvrir la montagne autrement",
        },
        { icon: Sparkles, label: "Tu cherches une activité originale" },
        { icon: Eye, label: "Tu aimes les beaux paysages" },
        { icon: ShieldCheck, label: "Tu veux prendre confiance" },
        { icon: Route, label: "Tu as envie de sortir de ta routine" },
      ],
    }}
    reassurance={{
      title: "Tu hésites à te lancer ?",
      items: [
        {
          q: "Est-ce dangereux ?",
          a: "La Via Ferrata reste une activité de montagne avec de la hauteur, donc elle demande de respecter les consignes et d’utiliser le matériel adapté. Avec un parcours choisi selon ton niveau et un encadrement professionnel possible, la progression se fait dans un cadre sécurisé.",
        },
        {
          q: "Faut-il avoir déjà fait de l'escalade ?",
          a: "Non, ce n’est pas obligatoire. La Via Ferrata est différente de l’escalade : on suit un itinéraire équipé avec câbles, échelons et passerelles. Pour débuter, l’important est de choisir une sortie adaptée.",
        },
        {
          q: "Faut-il être sportif ?",
          a: "Il faut pouvoir marcher, monter et rester actif pendant la sortie, mais certains parcours sont accessibles à des débutants motivés. Le niveau dépend surtout de l’itinéraire, de la durée et du dénivelé.",
        },
        {
          q: "Que faire si j'ai peur du vide ?",
          a: "La peur du vide est fréquente. Un parcours débutant et un encadrement peuvent aider à progresser doucement. Si la hauteur te bloque fortement, MSP peut aussi t’aider à choisir une activité outdoor Alpes-Maritimes plus adaptée pour commencer.",
        },
      ],
    }}
    localSeo={{
      title: "Via Ferrata près de Nice et dans les Alpes-Maritimes",
      paragraphs: [
        "Tu cherches une via ferrata Nice, une via ferrata Alpes-Maritimes ou une sortie montagne Côte d'Azur à vivre sans gérer toute l’organisation ? MSP t’aide à clarifier les options possibles selon ton point de départ, ton niveau, la saison et les sorties disponibles.",
        "Depuis Nice, Antibes, Cannes ou Sophia Antipolis, l’accès à la montagne et à l’arrière-pays niçois permet d’envisager plusieurs activités verticales et outdoor. La Via Ferrata est une bonne option pour prendre de la hauteur tout en restant accompagné dans le choix du parcours.",
        "Les itinéraires et les sorties peuvent varier selon les conditions météo, l’ouverture des parcours, la disponibilité des professionnels locaux et le profil du groupe. L’idée n’est pas de te promettre un lieu fixe à tout prix, mais de trouver une expérience cohérente, réaliste et agréable dans les Alpes-Maritimes.",
      ],
      blocksTitle: "Organiser une sortie Via Ferrata depuis la Côte d'Azur",
      blocks: [
        {
          title: "Depuis Nice",
          description:
            "MSP regarde les options de via ferrata Nice et arrière-pays selon la période, ton niveau et les créneaux encadrés disponibles.",
        },
        {
          title: "Depuis Antibes",
          description:
            "Depuis Antibes, la sortie peut s’organiser sur une demi-journée longue ou une journée selon le secteur retenu et les conditions.",
        },
        {
          title: "Depuis Cannes",
          description:
            "Depuis Cannes, l’objectif est de cibler une activité outdoor Alpes-Maritimes réaliste avec le temps de trajet et le niveau du groupe.",
        },
        {
          title: "Depuis Sophia Antipolis",
          description:
            "Pour un groupe, une équipe ou une sortie entre amis, MSP aide à trouver une formule simple et adaptée aux envies de chacun.",
        },
      ],
    }}
    howItWorks={{
      steps: [
        {
          title: "Tu nous contactes",
          desc: "Un message rapide sur WhatsApp pour nous parler de ton envie de Via Ferrata.",
        },
        {
          title: "Tu nous expliques",
          desc: "Ton niveau, ton point de départ, tes disponibilités et ton rapport à la hauteur.",
        },
        {
          title: "On trouve la sortie",
          desc: "On regarde les options adaptées avec des professionnels locaux selon la saison et les conditions.",
        },
        {
          title: "Tu profites",
          desc: "Tu viens vivre l’aventure verticale sans gérer la recherche, le groupe ou le créneau.",
        },
      ],
    }}
    faq={{
      items: [
        {
          q: "Peut-on faire une Via Ferrata quand on débute ?",
          a: "Oui, certains parcours peuvent convenir à une première expérience. Le choix dépend du niveau du groupe, de la saison, des conditions et des sorties encadrées disponibles.",
        },
        {
          q: "Faut-il avoir déjà fait de l’escalade ?",
          a: "Non, il n’est pas nécessaire d’avoir déjà fait de l’escalade. La Via Ferrata utilise des équipements fixes comme les câbles, échelons et passerelles, avec du matériel spécifique et un encadrement possible.",
        },
        {
          q: "Est-ce dangereux ?",
          a: "Comme toute activité de montagne, la Via Ferrata comporte des risques si elle est mal choisie ou mal pratiquée. Le matériel adapté, le respect des consignes et l’encadrement par des professionnels locaux permettent de pratiquer dans de bonnes conditions.",
        },
        {
          q: "Quelle est la meilleure période ?",
          a: "La meilleure période dépend du secteur, de la météo, de l’exposition et des conditions du parcours. Le printemps, l’été et le début de l’automne sont souvent recherchés, mais chaque sortie doit être vérifiée au moment de l’organisation.",
        },
        {
          q: "Où faire de la Via Ferrata près de Nice ?",
          a: "Selon la saison et les sorties disponibles, des secteurs comme Peille, Lantosque, La Colmiane ou Tende peuvent être envisagés depuis Nice et l’arrière-pays azuréen.",
        },
        {
          q: "Combien coûte une sortie Via Ferrata ?",
          a: "Le prix dépend du prestataire, de la durée, du matériel inclus, du secteur et de la saison. Une sortie encadrée se situe souvent dans une fourchette variable, à confirmer selon les disponibilités du moment.",
        },
      ],
    }}
    related={{
      title: "Découvrir d’autres activités outdoor",
      items: [
        { icon: Mountain, label: "Canyoning", href: "/activites/canyoning" },
        { icon: Sparkles, label: "Rafting", href: "/activites/rafting" },
        { icon: Compass, label: "Kayak", href: "/activites/kayak" },
        { icon: Trees, label: "Escalade", href: "/activites/escalade" },
        { icon: Wind, label: "Paddle", href: "/activites/paddle" },
      ],
    }}
    readAlso={{
      title: "À lire aussi",
      cards: [
        {
          title: "Via Ferrata débutant : tout ce qu’il faut savoir",
          description:
            "Niveau, matériel, hauteur et déroulé : les repères pour préparer une première expérience en confiance.",
        },
        {
          title: "Escalade ou Via Ferrata : quelle activité choisir ?",
          description:
            "Deux façons de découvrir la verticalité, avec des sensations, des techniques et une organisation différentes.",
        },
        {
          title: "Les plus belles Via Ferrata des Alpes-Maritimes",
          description:
            "Quelques idées de secteurs à explorer selon la saison, les conditions et les sorties encadrées disponibles.",
        },
        {
          title: "Que prévoir pour une sortie Via Ferrata ?",
          description:
            "Tenue, chaussures, eau, matériel et conseils simples pour arriver prêt le jour de l’activité.",
        },
      ],
    }}
    finalCta={{
      title: "Envie d’essayer la Via Ferrata ?",
      text: "Prends de la hauteur sans t’occuper de l’organisation : MSP t’aide à trouver une sortie adaptée à ton niveau et à tes envies.",
    }}
  />
);

export default ViaFerrata;
