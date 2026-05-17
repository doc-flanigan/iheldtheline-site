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
]
