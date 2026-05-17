export type NewsEntry = {
  date: string        // ISO 8601, e.g. '2025-05-01'
  headline: string
  summary: string     // 2-3 sentences, plain English
  sourceLabel: string // e.g. 'RSI Comm-Link'
  sourceUrl: string
}

export const NEWS: NewsEntry[] = [
  {
    date: '2026-05-06',
    headline: 'Chris Roberts Confirms 2026 Target, Cites Industry Scheduling Factors',
    summary:
      'Cloud Imperium Games CEO Chris Roberts confirmed the team is aiming for an end-of-2026 release for Squadron 42 — a standalone single-player space-combat game — but stopped short of a guaranteed date. Roberts acknowledged that the studio is paying attention to other major releases in the industry when planning its launch window. He added that CIG would not run a long marketing campaign ahead of launch, noting that significant gameplay footage and trailers have already been published.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/21162-Roadmap-Roundup-May-6-2026',
  },
  {
    date: '2025-12-22',
    headline: "Chairman's Letter 2025: All SQ42 Chapters Fully Playable, 40+ Hours Confirmed",
    summary:
      'Chris Roberts published his annual year-end letter confirming that all Squadron 42 chapters are now "fully playable from beginning to end," with the team regularly running complete internal playthroughs. He described the campaign as over forty hours in length and highlighted seamless transitions — moving from on-foot to spacecraft to planetary surfaces without loading screens — as a defining feature. Roberts reiterated 2026 as the release target, stating the studio is "confident in the direction the game is headed and fully focused on delivering."',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20960-API',
  },
  {
    date: '2025-10-11',
    headline: 'CitizenCon Direct 2955: No Squadron 42 Segment; Team in Heads-Down Phase',
    summary:
      'CitizenCon Direct 2955, a roughly two-hour digital showcase broadcast on 11 October 2025, focused entirely on Star Citizen multiplayer updates and contained no Squadron 42 segment. CIG explained that the Squadron 42 team was in a heads-down phase working toward the 2026 release and chose not to divert resources for a live presentation. The last major SQ42 content reveal remains the CitizenCon 2954 live gameplay demonstration from October 2024.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20766-API',
  },
  {
    date: '2025-09-09',
    headline: "SQ42 Q3 2025 Newsletter: Odin System Revealed, Development Tracking Toward 2026",
    summary:
      "The Q3 2025 Squadron 42 subscriber newsletter revealed the Odin system as the primary setting for Squadron 42 — a star system centered on a white dwarf, containing a location called Fortune's Cross station, a network of tunnels called The Coil, and magnetic aurora phenomena. A downloadable map of the system was included. The only development update in the newsletter: development continues tracking towards the intended release in 2026.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20745-API',
  },
  {
    date: '2025-05-01',
    headline: 'SQ42 Newsletter: Ships and Crew of the 42nd Squadron',
    summary:
      'The May 2025 Squadron 42 newsletter, timed to an in-game naval holiday event, focused on the fictional history of the 42nd Squadron — detailing its role in a historical battle, describing fighter craft associated with the unit, and introducing a fictional crew character. Downloadable wallpapers of in-game ships were included. No development milestone was shared.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20613-API',
  },
  {
    date: '2025-03-25',
    headline: 'SQ42 Newsletter: Vanduul Language Codebreaker Contest Launched',
    summary:
      'The March 2025 Squadron 42 newsletter was themed around the Vanduul — the alien species that serves as the primary enemy faction in the game. It provided lore background on the Vanduul and included intercepted in-universe communication samples. A community contest challenged subscribers to interpret six Vanduul phrases and submit video entries, running through April 2025.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20432-API',
  },
  {
    date: '2025-01-01',
    headline: 'SQ42 Newsletter: Live Orchestra Recording of the Game Soundtrack Showcased',
    summary:
      'The January 2025 Squadron 42 newsletter shared a video featuring the game\'s orchestral soundtrack recording session, with before-and-after comparisons between digitally generated score and a full live orchestra. The newsletter also included downloadable wallpapers of Commander Ryan Enright (Henry Cavill) and Captain Rachel MacLaren (Gillian Anderson), along with ringtones from the game\'s score.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20401-API',
  },
  {
    date: '2024-10-19',
    headline:
      'CitizenCon 2954: First-Ever Live Gameplay Reveal of Squadron 42; 2026 Release Window Announced',
    summary:
      "At CitizenCon 2954 in Manchester, UK, game director Rich Tyrer presented the first live on-stage gameplay demonstration of Squadron 42, covering the game's prologue — including the player character's origin, ship-interior movement, turret combat, and a first encounter with the Vanduul alien faction. After minor technical issues on stage, a complete second playthrough with an extended ending was recorded and published to YouTube the same weekend. Chris Roberts confirmed a 2026 release window and a campaign length of thirty to forty hours.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20262-API',
  },
  {
    date: '2024-10-09',
    headline: 'SQ42 Monthly Report — September 2024: Narrative Polish, Zero-G Traversal, Environment Art',
    summary:
      "The September 2024 development report covered work across multiple departments. Narrative designers polished social scenes set in the ship's hangar, gym, bridge, barracks, and mess hall. Animation improved zero-gravity movement and weapon reloading, while the Facial team continued work on the full cast's animations. Environment Art pushed cinematic-quality lighting and worked on planetary content for chapter seven.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20235-API',
  },
  {
    date: '2024-09-11',
    headline: 'SQ42 Monthly Report — August 2024: AI Companion Polish and New Test System',
    summary:
      'The August 2024 report described improvements to AI companion behavior — fine-tuning when friendly characters draw weapons and engage enemies during combat. A new internal testing tool was introduced, letting developers combine character types, weapons, and behaviors into a modular level for rapid comparison and debugging. The Facial Animation team also refined desk-worker idle animations.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20154-API',
  },
  {
    date: '2024-08-14',
    headline: 'SQ42 Monthly Report — July 2024: AI Groups System and Combat Communication',
    summary:
      'July 2024 saw the introduction of a new AI Groups system, letting designers cluster non-player characters so they share awareness — if one enemy spots the player, others in the group are alerted. Improvements were made to AI combat dialogue (spoken lines characters call out during firefights), including new surrender-related lines. Fixes addressed enemies incorrectly detecting the player through walls.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20107-API',
  },
  {
    date: '2024-07-10',
    headline: 'SQ42 Monthly Report — June 2024: NPC Interaction System and Ship AI',
    summary:
      'June 2024 development focused on the framework governing how non-player characters interact with objects — for example, a janitor retrieving a uniform, picking up a mop, and moving between cleaning spots with appropriate animations throughout. Elevator interactions for AI characters were fixed, NPC transitions between indoor and outdoor spaces were improved, and ship AI received updates to point-defense weapons and formation-flying logic.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20051-API',
  },
  {
    date: '2024-06-12',
    headline: 'SQ42 Monthly Report — May 2024: Opening Level Polish and Natural NPC Gaze',
    summary:
      'The May 2024 report described a new technology developed for the opening level so that non-player characters glance naturally at the player, adjusting based on context and situation. AI characters were updated to stop automatically crouching and drawing weapons in crowd scenes where the behavior felt unrealistic. The cafeteria sequence was polished to reduce awkward idle time between interactions.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20012-API',
  },
  {
    date: '2023-10-01',
    headline: 'CitizenCon 2953: "I Held the Line" Trailer Released; Squadron 42 Declared Feature-Complete',
    summary:
      'At CitizenCon 2953, Cloud Imperium Games released a twenty-six-minute gameplay showcase titled "I Held the Line" and announced that Squadron 42 had reached feature-complete status — meaning all planned gameplay features were implemented and the project entered the polishing phase. This was the last major public content reveal before the first live gameplay demonstration at CitizenCon 2954 in October 2024.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/19453-Squadron-42-I-Held-The-Line',
  },
]
