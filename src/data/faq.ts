export type FaqItem = {
  question: string
  answer: string      // plain English, fact-checked
  sourceUrl?: string
}

export const FAQ: FaqItem[] = [
  {
    question: 'What is Squadron 42?',
    answer:
      'Squadron 42 is a standalone, single-player cinematic space game set in the Star Citizen universe. You play as a new recruit in the United Empire of Earth Navy, serving aboard a capital warship and fighting through a story-driven military campaign. It features a star-studded cast with full motion-capture performances and focuses on blockbuster storytelling blended with immersive gameplay.',
    sourceUrl: 'https://squadron42.com/en/',
  },
  {
    question: 'How is Squadron 42 different from Star Citizen?',
    answer:
      'Star Citizen is an online multiplayer persistent universe — you play with other people in a shared galaxy. Squadron 42 is a separate single-player campaign set in the same universe. The two share an engine and fictional setting but are distinct products sold separately. CIG describes them as companion projects rather than one being a mode of the other.',
    sourceUrl: 'https://robertsspaceindustries.com/en/store/pledge/browse/game-packages',
  },
  {
    question: 'When does Squadron 42 release?',
    answer:
      'Cloud Imperium Games has confirmed 2026 as their target release window. No specific date or quarter has been announced. Chris Roberts has stated the studio will not run a long marketing campaign ahead of launch — when the date is set, players will hear more at that time.',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20960-API',
  },
  {
    question: 'Who is in the cast of Squadron 42?',
    answer:
      'CIG has officially confirmed the following actors: Mark Hamill as Steve "Old Man" Colton, Gary Oldman as Admiral Ernst Bishop, Gillian Anderson as Captain Rachel MacLaren, Henry Cavill as Commander Ryan Enright, Andy Serkis as a Vanduul character, and John Rhys-Davies. All performances were recorded with full motion-capture technology.',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20401-API',
  },
  {
    question: 'Is Squadron 42 included with a Star Citizen package?',
    answer:
      'Squadron 42 is a separate product and requires its own purchase. Some historical pledge packages bundled both Star Citizen and Squadron 42 together, but they are sold as distinct products on the RSI store. Check robertsspaceindustries.com for current package options.',
    sourceUrl: 'https://robertsspaceindustries.com/en/store/pledge/browse/sq42',
  },
  {
    question: 'Is Squadron 42 a single-player game?',
    answer:
      'Yes. Squadron 42 is a fully single-player experience — it is not multiplayer and does not require an internet connection to play the campaign. It is a separate product from Star Citizen, which is the online multiplayer game in the same universe.',
    sourceUrl: 'https://robertsspaceindustries.com/en/store/pledge/browse/sq42',
  },
  {
    question: 'How long is the Squadron 42 campaign?',
    answer:
      'CIG has not published an official runtime. Based on statements made at CitizenCon 2954, the campaign is expected to span multiple chapters and deliver a substantial play time. Chris Roberts has described it as a full-length game comparable to a cinematic single-player blockbuster.',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20262-API',
  },
  {
    question: 'What is the story of Squadron 42?',
    answer:
      'You play as a new recruit in the United Empire of Earth Navy who enlists aboard a capital warship. The campaign follows your character through a military conflict against the Vanduul — a hostile alien species — with a story that includes an origin, missions across different star systems, and interactions with the full celebrity cast. The game is designed to play like a cinematic military space drama.',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20262-API',
  },
  {
    question: 'Will Squadron 42 be on Steam or consoles?',
    answer:
      'No Steam or console release has been announced by CIG. The game is currently sold through the Roberts Space Industries store at robertsspaceindustries.com. CIG has made no official statement about a Steam listing or any console platforms.',
    sourceUrl: 'https://robertsspaceindustries.com/en/store/pledge/browse/sq42',
  },
  {
    question: 'What are the system requirements for Squadron 42?',
    answer:
      'CIG has not yet published official system requirements for Squadron 42. As a guide, the current Star Citizen minimum specifications (since both share the same engine) recommend a modern CPU, 16 GB RAM, a dedicated GPU with at least 4 GB VRAM, and an SSD. Expect full requirements to be published closer to launch.',
    sourceUrl: 'https://robertsspaceindustries.com/en/store/pledge/browse/sq42',
  },
  {
    question: 'Can I play Squadron 42 offline?',
    answer:
      'Yes. Squadron 42 is a standalone single-player campaign that does not require an internet connection to play. This distinguishes it from Star Citizen, which is an always-online multiplayer game.',
    sourceUrl: 'https://robertsspaceindustries.com/en/store/pledge/browse/sq42',
  },
  {
    question: 'Will my Squadron 42 progress carry over to Star Citizen?',
    answer:
      'Cloud Imperium Games has not officially announced any cross-game progression between Squadron 42 and Star Citizen. The two are sold and operate as separate products. No official statement confirming progression transfer has been made.',
    sourceUrl: 'https://robertsspaceindustries.com/en/store/pledge/browse/game-packages',
  },
  {
    question: 'What engine does Squadron 42 use?',
    answer:
      'Squadron 42 runs on Star Engine — Cloud Imperium Games\' proprietary game engine. Star Engine is a heavily modified derivative of CryEngine, rebuilt over many years by CIG specifically for the Star Citizen universe. Both Squadron 42 and Star Citizen share the same engine.',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20262-API',
  },
  {
    question: 'How long is the Squadron 42 campaign?',
    answer:
      'Chris Roberts confirmed in the Chairman\'s Letter 2025 that the campaign is over 40 hours in length, with the team regularly running complete internal playthroughs from beginning to end. At CitizenCon 2954 in October 2024, Roberts stated the campaign would be 30 to 40 hours.',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20960-API',
  },
  {
    question: 'When did Squadron 42 reach feature-complete status?',
    answer:
      'Squadron 42 was declared feature-complete in October 2023, announced at CitizenCon 2953 alongside the release of the "I Held the Line" 26-minute gameplay showcase. Feature-complete means all planned gameplay features were implemented and the project moved into the polishing and refinement phase.',
    sourceUrl: 'https://robertsspaceindustries.com/en/comm-link/transmission/19453-Squadron-42-I-Held-The-Line',
  },
  {
    question: 'What is "I Held the Line"?',
    answer:
      '"I Held the Line" is the title of the 26-minute Squadron 42 gameplay showcase released at CitizenCon 2953 in October 2023. It is also a phrase used by long-time Star Citizen backers who have waited years for Squadron 42 to release. The showcase was released alongside the announcement that Squadron 42 had reached feature-complete status.',
    sourceUrl: 'https://robertsspaceindustries.com/en/comm-link/transmission/19453-Squadron-42-I-Held-The-Line',
  },
  {
    question: 'What is the Odin system?',
    answer:
      'The Odin system is the primary star system setting for Squadron 42, centered on a white dwarf star. It was revealed in the Q3 2025 Squadron 42 subscriber newsletter and contains key locations including Fortune\'s Cross station, The Coil (a network of tunnels), and magnetic aurora phenomena.',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20745-API',
  },
  {
    question: 'Who are the Vanduul?',
    answer:
      'The Vanduul are the primary enemy alien faction in Squadron 42. The player, as a new UEE Navy recruit, fights against the Vanduul as part of the campaign\'s central military conflict. CIG has developed a constructed language for the species and released intercepted in-universe communications in a 2025 newsletter. Andy Serkis portrays a Vanduul character using motion-capture technology.',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20432-API',
  },
  {
    question: 'What is the 42nd Squadron?',
    answer:
      'The 42nd Squadron is the in-universe United Empire of Earth Navy unit that the player character joins in Squadron 42. The May 2025 subscriber newsletter detailed the fictional history of the 42nd Squadron, covering its role in a historical battle and the fighter craft associated with the unit.',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20613-API',
  },
  {
    question: 'Has the Squadron 42 soundtrack been recorded?',
    answer:
      'Yes. The January 2025 Squadron 42 newsletter revealed that the game\'s original score was recorded at Abbey Road Studios with a 96-piece orchestra, a 40-piece choir, and bagpipes — totalling over 164 minutes of original music.',
    sourceUrl: 'https://mailchi.mp/cloudimperiumgames/squadron-42-newsletter-en-1232025',
  },
  {
    question: 'Will there be a Squadron 42 beta or demo?',
    answer:
      'No beta, early access period, or playable demo has been announced by Cloud Imperium Games. CIG has stated that when the release date is set, players will hear more at that time.',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20960-API',
  },
  {
    question: 'Where can I buy Squadron 42?',
    answer:
      'Squadron 42 is sold exclusively through the Roberts Space Industries store at robertsspaceindustries.com. As of June 2026, it is not available on Steam, console platforms, or any other storefront — no such release has been announced by CIG.',
    sourceUrl: 'https://robertsspaceindustries.com/en/store/pledge/browse/sq42',
  },
]
