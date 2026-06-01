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
  Leaf,
  Gamepad2,
  Telescope,
  HandHeart,
  Map,
  PartyPopper,
  RefreshCcw,
} from "lucide-react";
import ActivityPage from "@/components/activity/ActivityPage";

const Canyoning = () => (
  <ActivityPage
    slug="canyoning"
    seo={{
      title: "Canyoning Alpes-Maritimes près de Nice | MultiSport Planner",
      description:
        "Découvrez le canyoning dans les Alpes-Maritimes, près de Nice, Antibes et Cannes. Une activité outdoor simple, ludique et organisée par MSP.",
    }}
    hero={{
      h1: "Canyoning dans les Alpes-Maritimes",
      subtitle: "Une aventure nature à vivre sans t'occuper de l'organisation.",
      intro:
        "Le canyoning, c'est descendre une rivière de montagne à pied, à la nage, en glissant sur des toboggans naturels et en se laissant guider par l'eau. C'est frais, joueur, dépaysant, et accessible à beaucoup plus de monde qu'on ne l'imagine. Avec MSP, tu n'as pas à comparer les prestataires ou organiser le groupe : tu nous dis ce que tu aimerais vivre, on t'aide à trouver une sortie adaptée avec des professionnels locaux, et tu viens profiter.",
    }}
    gallery={{
      images: [
        {
          src: "https://images.unsplash.com/photo-1721338752673-91b7603f2ae0?auto=format&fit=crop&w=900&q=75",
          alt: "Groupe en activité canyoning sur la Côte d'Azur",
          title: "Une immersion nature dès les premiers pas",
          credit: "Photo : Josh Fotheringham / Unsplash",
        },
        {
          src: "https://images.unsplash.com/photo-1690291900903-1bf8f6f54c50?auto=format&fit=crop&w=900&q=75",
          alt: "Descente en rappel pendant une sortie canyoning",
          title: "Des passages guidés, toujours encadrés",
          credit: "Photo : Han-Hsing Tu / Unsplash",
        },
        {
          src: "https://images.pexels.com/photos/29655764/pexels-photo-29655764.jpeg?auto=compress&cs=tinysrgb&w=900",
          alt: "Cascade et eau vive en canyoning",
          title: "La fraîcheur des cascades et des vasques",
          credit: "Photo : Haim Charbit / Pexels",
        },
        {
          src: "https://images.unsplash.com/photo-1689917216699-f4593d22446c?auto=format&fit=crop&w=900&q=75",
          alt: "Toboggan naturel en canyoning",
          title: "Des moments ludiques à vivre ensemble",
          credit: "Photo : Han-Hsing Tu / Unsplash",
        },
      ],
    }}
    whatIsIt={{
      title: "Le canyoning, c'est quoi exactement ?",
      intro: [
        "Le canyoning est une activité outdoor qui consiste à suivre le lit d'un cours d'eau en montagne. Selon le parcours choisi, on alterne marche, nage, passages dans l'eau, toboggans naturels, descentes en rappel et parfois des sauts. Chaque sortie a son rythme, entre vasques claires, rochers et moments plus joueurs.",
        "Dans les Alpes-Maritimes, le canyoning a une saveur particulière. On passe vite de la Côte d'Azur à un décor très nature, avec des itinéraires accessibles depuis Nice, Antibes, Cannes ou Sophia Antipolis. Pour une première expérience de canyoning près de Nice, l'important est de choisir un parcours adapté au groupe, à la saison et aux conditions d'eau.",
        "Si tu es débutant, pas besoin de tout maîtriser avant de venir. L'encadrement professionnel sert à expliquer, rassurer et adapter le rythme. Les sauts restent toujours facultatifs : quand un passage ne te tente pas, les guides proposent généralement une alternative.",
      ],
      items: [
        { icon: Footprints, label: "Marche en rivière" },
        { icon: Waves, label: "Nage en eaux vives" },
        { icon: Sparkles, label: "Toboggans naturels" },
        { icon: ArrowDown, label: "Descentes en rappel" },
        { icon: Mountain, label: "Sauts facultatifs" },
        { icon: TreePine, label: "Immersion nature" },
      ],
      outro: [
        "Le canyoning Côte d'Azur n'est donc pas réservé aux grands sportifs. C'est une manière simple de découvrir les vallées, les rivières et l'arrière-pays. Tu bouges sans compter les efforts, parce que l'attention est dans le paysage, l'eau, le rire du groupe et la fierté d'avoir essayé.",
      ],
    }}
    whyTry={{
      title: "Pourquoi essayer le canyoning ?",
      intro:
        "Le canyoning attire parce qu'il mélange aventure, nature et jeu sans demander de se mettre en mode performance. On vient pour prendre l'air, se rafraîchir, partager un moment et retrouver le plaisir simple de bouger.",
      cards: [
        {
          icon: Mountain,
          label: "Une vraie aventure près de chez toi",
          description:
            "Des canyons et vallées accessibles depuis le littoral, avec un vrai sentiment de déconnexion dès les premiers pas.",
        },
        {
          icon: Smile,
          label: "Une activité ludique et accessible",
          description:
            "Tu marches, tu nages, tu glisses, tu observes. Le mouvement vient naturellement, sans pression sportive.",
        },
        {
          icon: Sparkles,
          label: "Une façon originale de bouger",
          description:
            "Loin des habitudes, le canyon devient un terrain de jeu naturel où chaque passage apporte une petite découverte.",
        },
        {
          icon: Users,
          label: "Une expérience à partager",
          description:
            "Entre amis, en couple, en petit groupe ou en équipe, la sortie crée des souvenirs faciles à raconter.",
        },
      ],
      outro: [
        "Le canyoning est une activité complète : jambes, bras, équilibre, respiration et attention sont sollicités. Pourtant, on ne le vit pas comme une séance classique. On avance étape par étape, porté par l'eau, le décor et le groupe.",
        "C'est l'esprit MSP : le but n'est pas de tenir un chrono ou de prouver quelque chose. Le but est de reprendre goût au mouvement, de rire un peu, de découvrir un lieu et de rentrer avec l'impression d'avoir coupé.",
      ],
    }}
    whyAppealing={{
      title: "Pourquoi le canyoning plaît autant ?",
      intro:
        "Chez MSP, on croit au sport pour le plaisir, pas pour la performance. Le canyoning coche toutes les cases.",
      outro:
        "Ce qui plaît souvent, c'est ce côté très concret : on met les pieds dans l'eau, on suit la rivière, on se laisse surprendre. Les toboggans naturels donnent une sensation de jeu, les vasques turquoise marquent les esprits, et les passages franchis ensemble créent vite des souvenirs. Pour beaucoup, c'est aussi une façon douce de se reconnecter au mouvement : on bouge parce que l'environnement donne envie. C'est le sport version MSP : simple, vivant, organisé, et centré sur le plaisir.",
      pillars: [
        { icon: Heart, label: "Plaisir" },
        { icon: Gamepad2, label: "Jeu" },
        { icon: Telescope, label: "Découverte" },
        { icon: Leaf, label: "Nature" },
        { icon: HandHeart, label: "Convivialité" },
      ],
    }}
    intermediateCta={{
      title: "Envie de tester le canyoning ?",
      text: "Pas besoin de chercher un groupe, de comparer les prestataires ou de gérer l'organisation. MSP t'aide à trouver une sortie adaptée à ton niveau, à tes envies et à ta zone.",
    }}
    places={{
      title: "Les plus beaux canyons des Alpes-Maritimes",
      intro:
        "Les Alpes-Maritimes comptent plusieurs canyons connus pour leurs paysages, leurs eaux claires et leur ambiance nature. Les sorties possibles dépendent toujours de la saison, de la météo, du niveau du groupe, des conditions d'eau et des disponibilités des professionnels locaux.",
      cards: [
        {
          name: "Gorges du Loup",
          location: "Arrière-pays niçois",
          description:
            "Un grand classique proche de Nice, Antibes et Grasse, apprécié pour ses vasques, ses passages ludiques et son cadre accessible. Selon les sorties disponibles et le niveau du groupe, c'est souvent une belle option pour découvrir le canyoning dans une ambiance rassurante.",
        },
        {
          name: "Canyon de la Maglia",
          location: "Vallée de la Roya",
          description:
            "Un canyon emblématique de la Vallée de la Roya, connu pour son décor sauvage et ses eaux limpides. Selon la saison et les conditions, il peut convenir à des personnes déjà à l'aise avec une sortie plus longue, toujours avec des professionnels locaux.",
        },
        {
          name: "Canyon de l'Audin",
          location: "Vallée de la Vésubie",
          description:
            "Un parcours souvent décrit comme joueur, avec des toboggans naturels et des passages variés. En fonction du niveau du groupe et du débit d'eau, il peut offrir une belle expérience de découverte, sans obligation de sauter.",
        },
        {
          name: "Canyon de la Bendola",
          location: "Région de Saorge",
          description:
            "Un canyon plus engagé, dans un décor minéral impressionnant, plutôt destiné aux pratiquants à l'aise et aux groupes adaptés. MSP ne le présente pas comme une promesse de sortie systématique : tout dépend des conditions, de l'encadrement disponible et du profil du groupe.",
        },
      ],
    }}
    audience={{
      title: "Le canyoning est fait pour toi si…",
      intro:
        "Le canyoning est fait pour les personnes qui veulent vivre une activité outdoor originale, bouger sans pression, découvrir la nature autrement et partager un moment simple avec d'autres. Pas besoin d'un profil sportif parfait : il faut surtout avoir envie d'essayer, être à l'aise dans l'eau et choisir une sortie cohérente.",
      profiles: [
        {
          icon: Map,
          label: "Tu veux découvrir une activité outdoor",
          description:
            "Une première sortie pour changer d'air et explorer l'arrière-pays autrement.",
        },
        {
          icon: PartyPopper,
          label: "Tu cherches une sortie originale entre amis",
          description:
            "Un moment commun, simple à vivre, qui change du restaurant ou de la plage.",
        },
        {
          icon: Smile,
          label: "Tu veux bouger sans pression",
          description:
            "On avance au rythme du groupe, sans objectif de performance.",
        },
        {
          icon: Trees,
          label: "Tu aimes la nature",
          description:
            "Rivières, roches, fraîcheur et paysages de montagne au programme.",
        },
        {
          icon: RefreshCcw,
          label: "Tu veux sortir de ta routine",
          description:
            "Une parenthèse dépaysante pour un week-end, une demi-journée ou une journée.",
        },
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
          a: "Jamais. Tous les sauts sont facultatifs. Le moniteur propose toujours une alternative pour descendre en rappel, désescalader ou contourner quand le parcours le permet.",
        },
        {
          q: "Est-ce adapté aux débutants ?",
          a: "Oui. Certains canyons des Alpes-Maritimes sont accessibles dès la première sortie, avec un moniteur diplômé qui adapte le rythme au groupe et aux conditions du jour.",
        },
      ],
    }}
    localSeo={{
      title: "Canyoning près de Nice, Antibes et Sophia Antipolis",
      paragraphs: [
        "Le canyoning près de Nice est une bonne idée pour vivre une activité nature sans partir loin. Depuis Nice, Antibes, Cannes, Sophia Antipolis ou Grasse, on peut rejoindre différents secteurs des Alpes-Maritimes selon les sorties disponibles : arrière-pays niçois, Vallée de la Roya, Vésubie ou vallées proches du littoral.",
        "C'est une activité qui fonctionne bien pour un week-end, une demi-journée ou une journée complète. Elle convient aux amis, aux couples, aux petits groupes et aussi aux formats team building quand le niveau, le timing et l'encadrement sont adaptés.",
        "Avec MSP, l'idée reste simple : le sport sans l'organiser. Tu n'as pas besoin de comparer toutes les options ni de deviner quel canyon correspond à ton groupe. On échange avec toi, on regarde ce qui est réaliste selon la saison, la météo, ton départ et tes envies, puis on t'oriente vers une sortie cohérente.",
        "Que tu partes de Nice, d'Antibes, de Cannes ou de Sophia Antipolis, le canyoning dans les Alpes-Maritimes montre une Côte d'Azur plus fraîche, plus sauvage et plus calme. Une façon simple de profiter de la nature sans transformer l'organisation en casse-tête.",
      ],
      blocks: [
        {
          title: "Depuis Nice et l'arrière-pays niçois",
          description:
            "Depuis Nice, on rejoint facilement des vallées plus fraîches pour une demi-journée ou une journée. L'arrière-pays niçois permet de passer rapidement du bord de mer à une ambiance montagne.",
        },
        {
          title: "Depuis Antibes, Cannes et Sophia Antipolis",
          description:
            "Pour Antibes, Cannes ou Sophia Antipolis, le choix dépend surtout du temps de route, de la saison et du niveau du groupe. MSP t'aide à viser une sortie réaliste plutôt qu'un canyon choisi au hasard.",
        },
        {
          title: "Autour de Grasse",
          description:
            "Grasse est un point de départ pratique pour explorer des secteurs proches de l'ouest des Alpes-Maritimes, avec des parcours souvent appréciés pour une première expérience encadrée.",
        },
        {
          title: "Vallée de la Roya et Vésubie",
          description:
            "La Vallée de la Roya et la Vésubie offrent des décors plus sauvages, à choisir selon les conditions d'eau, la météo et l'expérience du groupe. L'idée est toujours de garder une sortie sûre et adaptée.",
        },
      ],
    }}
    faq={{
      items: [
        {
          q: "Peut-on faire du canyoning quand on débute ?",
          a: "Oui, certaines sorties sont pensées pour les débutants, à condition de choisir un parcours adapté. Le choix dépend de la saison, du niveau d'eau, de la météo et du profil du groupe. Avec un encadrement professionnel, les consignes sont expliquées et le rythme reste progressif.",
        },
        {
          q: "Faut-il savoir nager ?",
          a: "Il faut être à l'aise dans l'eau, car le canyoning peut inclure des passages de nage et des vasques à traverser. Tu n'as pas besoin d'être un nageur expert ou de faire de longues distances. L'important est de ne pas paniquer dans l'eau et de pouvoir suivre les consignes du guide.",
        },
        {
          q: "Les sauts sont-ils obligatoires ?",
          a: "Non, les sauts ne sont pas obligatoires, surtout pour une première sortie. Les guides proposent généralement des alternatives : rappel, désescalade ou autre passage possible selon le canyon. Tu peux donc profiter de l'activité sans te forcer à faire quelque chose qui ne te met pas à l'aise.",
        },
        {
          q: "Quelle est la meilleure période ?",
          a: "La meilleure période se situe généralement du printemps au début de l'automne. Les conditions peuvent changer selon la météo, la température et le niveau d'eau. Avant de confirmer une sortie, les professionnels vérifient toujours si le parcours est adapté et praticable dans de bonnes conditions.",
        },
        {
          q: "Peut-on faire du canyoning près de Nice ?",
          a: "Oui, plusieurs parcours sont accessibles depuis Nice et plus largement depuis Antibes, Cannes, Sophia Antipolis ou Grasse. Selon la sortie choisie, on peut se diriger vers l'arrière-pays niçois, la Vésubie ou la Vallée de la Roya. MSP t'aide à trouver une option réaliste selon ton point de départ et ton niveau.",
        },
        {
          q: "Combien coûte une sortie canyoning ?",
          a: "Le prix varie selon le canyon, la durée, la saison, le matériel inclus et le prestataire. En général, une sortie encadrée se situe souvent entre 50€ et 90€ par personne. Ce n'est pas un tarif fixe MSP : le montant exact dépend de la sortie disponible et du professionnel local.",
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
    readAlso={{
      title: "À lire aussi",
      cards: [
        {
          title: "Quel canyon choisir pour débuter ?",
          description:
            "Un guide pratique pour comprendre les critères importants avant une première sortie.",
        },
        {
          title: "Les plus beaux canyons des Alpes-Maritimes",
          description:
            "Une sélection claire pour repérer les ambiances, les niveaux et les secteurs à privilégier.",
        },
        {
          title: "Que faut-il prévoir pour une sortie canyoning ?",
          description:
            "Matériel, tenue, niveau dans l'eau et conseils simples pour arriver serein le jour J.",
        },
        {
          title: "Canyoning ou rafting : quelle activité choisir ?",
          description:
            "Les différences entre deux expériences outdoor très complémentaires sur la Côte d'Azur.",
        },
      ],
    }}
    finalCta={{ title: "Envie d'essayer le canyoning ?" }}
  />
);

export default Canyoning;
