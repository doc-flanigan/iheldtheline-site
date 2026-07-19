export type NewsEntry = {
  date: string        // ISO 8601, e.g. '2025-05-01'
  headline: string
  metaTitle?: string  // short <title> variant, <=46 chars (template appends " | iheldtheline.com")
  summary: string     // 2-3 sentences, plain English
  sourceLabel: string // e.g. 'RSI Comm-Link'
  sourceUrl: string
  slug?: string
}

export const NEWS: NewsEntry[] = [
  {
    slug: 'sq42-playtest-event-october-2026-manchester',
    metaTitle: 'SQ42 Manchester Playtest — Oct 2026',
    date: '2026-07-11',
    headline:
      'CIG Invites Longtime Backers to First Squadron 42 Hands-On — Manchester, October 9–11, 2026',
    summary:
      'Invitation emails from CIG began reaching selected longtime backers in July 2026, inviting "those who Held the Line" to an exclusive three-day event at the Manchester studio on October 9–11, 2026 — including the first hands-on experience with Squadron 42, a studio tour, and time with the development team. Travel and accommodation are at attendees\' own expense. CIG has not published a public comm-link about the event; the details come from the invitation emails recipients have shared, and our playtest-event page tracks everything known so far.',
    sourceLabel: 'CIG invitation email — details & screenshot',
    sourceUrl: 'https://iheldtheline.com/playtest-event',
  },
  {
    slug: 'sq42-q2-2026-newsletter-uees-stanton-crew',
    metaTitle: 'SQ42 Q2 2026 Newsletter: Stanton Crew',
    date: '2026-06-30',
    headline: 'SQ42 Q2 2026 Newsletter: More Crew of the UEES Stanton Introduced',
    summary:
      'The Q2 2026 Squadron 42 newsletter went out to subscribers on June 30, introducing more members of the crew serving aboard the UEES Stanton — characters players will serve alongside during the campaign. The newsletter itself is only viewable by players opted into the SQ42 mailing list; the official "This Week in Star Citizen" post announcing it is the public source. No new development milestone or release-date update was shared.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/21226-This-Week-In-Star-Citizen',
  },
  {
    slug: 'star-citizen-1-billion-funding-sq42-closing-stages',
    metaTitle: '$1B Funding: SQ42 "Closing Stages"',
    date: '2026-05-24',
    headline: 'Star Citizen Crosses $1 Billion in Lifetime Funding; Roberts Says SQ42 in "Closing Stages"',
    summary:
      'Star Citizen passed $1 billion in cumulative crowdfunding on May 24, 2026 — roughly 6.5 million backers, fourteen years after the original campaign. Coverage tied to the milestone quoted Chris Roberts describing Squadron 42 as being in its "closing stages," while repeating that the 2026 target is not a locked guarantee and citing scheduling around other major industry releases (widely read as a reference to Grand Theft Auto VI) as a factor. No new release date was announced.',
    sourceLabel: 'Variety',
    sourceUrl:
      'https://variety.com/2026/gaming/news/star-citizen-1-billion-funding-squadron-42-release-update-1236757420/',
  },
  {
    slug: 'defensecon-2956-fleet-week-replacement',
    metaTitle: 'DefenseCon 2956 Replaces Fleet Week',
    date: '2026-05-14',
    headline: 'DefenseCon 2956 Runs May 14–27, Standing In for Fleet Week as CIG Focuses on SQ42 and Alpha 4.8',
    summary:
      "Drake Interplanetary hosted DefenseCon 2956 at Area18's Bevic Convention Center from May 14 through 27, 2026, taking over the traditional Fleet Week slot with a free-fly period, new ship reveals, and coverage of the Alpha 4.8 patch (Tactical Strike Groups, new FPS gear). CIG framed the event as evidence it is concentrating resources on Star Citizen live content and Squadron 42 polish rather than a large CitizenCon-style production this year.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/21134-Countdown-To-DefenseCon',
  },
  {
    slug: 'citizencon-2026-cancelled',
    metaTitle: 'No CitizenCon in 2026',
    date: '2026-05-07',
    headline: 'CIG Cancels CitizenCon for 2026, Citing Full Focus on Shipping Squadron 42',
    summary:
      "An Inside Star Citizen episode confirmed there would be no CitizenCon this year — neither in-person nor a digital \"Direct\" broadcast — so the studio can stay focused on Alpha 4.8 content and getting Squadron 42 out the door. It's the second year running without a dedicated SQ42 CitizenCon segment, following CitizenCon Direct 2955 in October 2025.",
    sourceLabel: 'Massively Overpowered',
    sourceUrl:
      'https://massivelyop.com/2026/05/07/star-citizen-hypes-its-may-14-defensecon-event-alpha-4-8s-group-activity-and-april-dev-progress/',
  },
  {
    slug: 'chris-roberts-2026-target-gta6',
    metaTitle: 'Chris Roberts Confirms 2026 SQ42 Target',
    date: '2026-05-06',
    headline: 'Chris Roberts Confirms 2026 Target, Cites Industry Scheduling Factors',
    summary:
      'Chris Roberts stated in a May 2026 interview that Squadron 42 is targeting a release by the end of 2026, but he stopped short of a firm guarantee. He cited a major upcoming industry release — widely understood to refer to Grand Theft Auto VI — as something CIG is factoring into its launch-window planning. The May 6 Roadmap Roundup the same week was a routine community-team development update covering Alpha 4.8 feature progress.',
    sourceLabel: 'This Week in Videogames',
    sourceUrl:
      'https://opencritic.com/news/30770/star-citizen-lead-says-he-wants-squadron-42-out-this-year-but-gta-6-might-get-in-the-way',
  },
  {
    slug: 'chairmans-letter-2025-40-hours-feature-playable',
    metaTitle: "Chairman's Letter 2025: SQ42 Playable",
    date: '2025-12-22',
    headline: "Chairman's Letter 2025: All SQ42 Chapters Fully Playable, 40+ Hours Confirmed",
    summary:
      'Chris Roberts published his annual year-end letter confirming that all Squadron 42 chapters are now "fully playable from beginning to end," with the team regularly running complete internal playthroughs. He described the campaign as over forty hours in length and highlighted seamless transitions — moving from on-foot to spacecraft to planetary surfaces without loading screens — as a defining feature. Roberts reiterated 2026 as the release target, stating the studio is "confident in the direction the game is headed and fully focused on delivering."',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20960-API',
  },
  {
    slug: 'citizencon-direct-2955-no-sq42-segment',
    metaTitle: 'CitizenCon Direct 2955: No SQ42 Segment',
    date: '2025-10-11',
    headline: 'CitizenCon Direct 2955: No Squadron 42 Segment; Team in Heads-Down Phase',
    summary:
      'CitizenCon Direct 2955 aired on October 11, 2025 as a two-hour online-only event focused entirely on Star Citizen multiplayer updates. Squadron 42 had no segment; CIG explained the team was in a heads-down phase working toward the 2026 release and chose not to divert resources for the presentation. The last major SQ42 content reveal remains the CitizenCon 2954 live gameplay demonstration from October 2024.',
    sourceLabel: 'PCGamesN',
    sourceUrl: 'https://www.pcgamesn.com/star-citizen/squadron-42-citizencon-2025',
  },
  {
    slug: 'q3-2025-newsletter-odin-system',
    metaTitle: 'SQ42 Q3 2025 Newsletter: Odin System',
    date: '2025-09-09',
    headline: "SQ42 Q3 2025 Newsletter: Odin System Revealed, Development Tracking Toward 2026",
    summary:
      "The Q3 2025 Squadron 42 subscriber newsletter revealed the Odin system as the primary setting for Squadron 42 — a star system centered on a white dwarf, containing a location called Fortune's Cross station, a network of tunnels called The Coil, and magnetic aurora phenomena. A downloadable map of the system was included. The only development update in the newsletter: development continues tracking towards the intended release in 2026.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20745-API',
  },
  {
    slug: 'sq42-newsletter-may-2025-42nd-squadron',
    metaTitle: 'SQ42 Newsletter: The 42nd Squadron',
    date: '2025-05-01',
    headline: 'SQ42 Newsletter: Ships and Crew of the 42nd Squadron',
    summary:
      'The May 2025 Squadron 42 newsletter, timed to an in-game naval holiday event, focused on the fictional history of the 42nd Squadron — detailing its role in a historical battle, describing fighter craft associated with the unit, and introducing a fictional crew character. Downloadable wallpapers of in-game ships were included. No development milestone was shared.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20613-API',
  },
  {
    slug: 'sq42-newsletter-march-2025-vanduul-contest',
    metaTitle: 'SQ42 Newsletter: Vanduul Codebreaker',
    date: '2025-03-25',
    headline: 'SQ42 Newsletter: Vanduul Language Codebreaker Contest Launched',
    summary:
      'The March 2025 Squadron 42 newsletter was themed around the Vanduul — the alien species that serves as the primary enemy faction in the game. It provided lore background on the Vanduul and included intercepted in-universe communication samples. A community contest challenged subscribers to interpret six Vanduul phrases and submit video entries, running through April 2025.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20432-API',
  },
  {
    slug: 'sq42-newsletter-january-2025-abbey-road',
    metaTitle: 'SQ42 Newsletter: Abbey Road Orchestra',
    date: '2025-01-01',
    headline: 'SQ42 Newsletter: Live Orchestra Recording of the Game Soundtrack Showcased',
    summary:
      'The January 2025 Squadron 42 newsletter, titled "Echoes of the Verse," featured a video showcasing the game\'s orchestral soundtrack recording session at Abbey Road Studios — a 96-piece orchestra, 40-piece choir, and bagpipes recording over 164 minutes of original score. The newsletter also included downloadable Squadron 42 ship wallpapers and ringtones drawn from the game\'s score.',
    sourceLabel: 'RSI Newsletter',
    sourceUrl: 'https://mailchi.mp/cloudimperiumgames/squadron-42-newsletter-en-1232025',
  },
  {
    slug: 'citizencon-2954-gameplay-reveal-2026-window',
    metaTitle: 'CitizenCon 2954: SQ42 Gameplay + 2026 Window',
    date: '2024-10-19',
    headline:
      'CitizenCon 2954: First-Ever Live Gameplay Reveal of Squadron 42; 2026 Release Window Announced',
    summary:
      "At CitizenCon 2954 in Manchester, UK, game director Rich Tyrer presented the first live on-stage gameplay demonstration of Squadron 42, covering the game's prologue — including the player character's origin, ship-interior movement, turret combat, and a first encounter with the Vanduul alien faction. After minor technical issues on stage, a complete second playthrough with an extended ending was recorded and published to YouTube the same weekend. Chris Roberts confirmed a 2026 release window and a campaign length of thirty to forty hours.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20262-API',
  },
  {
    slug: 'monthly-report-september-2024',
    metaTitle: 'SQ42 Monthly Report — September 2024',
    date: '2024-10-09',
    headline: 'SQ42 Monthly Report — September 2024: Narrative Polish, Zero-G Traversal, Environment Art',
    summary:
      "The September 2024 development report covered work across multiple departments. Narrative designers polished social scenes set in the ship's hangar, gym, bridge, barracks, and mess hall. Animation improved zero-gravity movement and weapon reloading, while the Facial team continued work on the full cast's animations. Environment Art pushed cinematic-quality lighting and worked on planetary content for chapter seven.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20235-API',
  },
  {
    slug: 'monthly-report-august-2024',
    metaTitle: 'SQ42 Monthly Report — August 2024',
    date: '2024-09-11',
    headline: 'SQ42 Monthly Report — August 2024: AI Companion Polish and New Test System',
    summary:
      'The August 2024 report described improvements to AI companion behavior — fine-tuning when friendly characters draw weapons and engage enemies during combat. A new internal testing tool was introduced, letting developers combine character types, weapons, and behaviors into a modular level for rapid comparison and debugging. The Facial Animation team also refined desk-worker idle animations.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20154-API',
  },
  {
    slug: 'monthly-report-july-2024',
    metaTitle: 'SQ42 Monthly Report — July 2024',
    date: '2024-08-14',
    headline: 'SQ42 Monthly Report — July 2024: AI Groups System and Combat Communication',
    summary:
      'July 2024 saw the introduction of a new AI Groups system, letting designers cluster non-player characters so they share awareness — if one enemy spots the player, others in the group are alerted. Improvements were made to AI combat dialogue (spoken lines characters call out during firefights), including new surrender-related lines. Fixes addressed enemies incorrectly detecting the player through walls.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20107-API',
  },
  {
    slug: 'monthly-report-june-2024',
    metaTitle: 'SQ42 Monthly Report — June 2024',
    date: '2024-07-10',
    headline: 'SQ42 Monthly Report — June 2024: NPC Interaction System and Ship AI',
    summary:
      'June 2024 development focused on the framework governing how non-player characters interact with objects — for example, a janitor retrieving a uniform, picking up a mop, and moving between cleaning spots with appropriate animations throughout. Elevator interactions for AI characters were fixed, NPC transitions between indoor and outdoor spaces were improved, and ship AI received updates to point-defense weapons and formation-flying logic.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20051-API',
  },
  {
    slug: 'monthly-report-may-2024',
    metaTitle: 'SQ42 Monthly Report — May 2024',
    date: '2024-06-12',
    headline: 'SQ42 Monthly Report — May 2024: Opening Level Polish and Natural NPC Gaze',
    summary:
      'The May 2024 Squadron 42 monthly report introduced new "Look At" NPC gaze technology for the opening level, giving characters profiles to glance or stare based on context and situation. The report also covered improvements to NPC trolley-pushing and elevator interactions, zero-gravity animation refinements, and chapter 1 cinematic polish including helmet-removal and turret-interaction scenes.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl: 'https://robertsspaceindustries.com/en/comm-link/transmission/20012-Squadron-42-Monthly-Report-May-2024',
  },
  {
    slug: 'citizencon-2953-i-held-the-line-feature-complete',
    metaTitle: 'CitizenCon 2953: SQ42 Feature-Complete',
    date: '2023-10-21',
    headline: 'CitizenCon 2953: "I Held the Line" Trailer Released; Squadron 42 Declared Feature-Complete',
    summary:
      'At CitizenCon 2953, Cloud Imperium Games released a twenty-six-minute gameplay showcase titled "I Held the Line" and announced that Squadron 42 had reached feature-complete status — meaning all planned gameplay features were implemented and the project entered the polishing phase. This was the last major public content reveal before the first live gameplay demonstration at CitizenCon 2954 in October 2024.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/19453-Squadron-42-I-Held-The-Line',
  },

  // ── Historical backfill (2012 → Sep 2023), added 2026-07-04 ─────────────────
  // Every entry verified against the cited official source (comm-link body,
  // official YouTube upload, or CIG Kickstarter). See docs/claims ledger.
  {
    date: '2023-09-13',
    headline: 'August 2023 report lands — the last SQ42 monthly update before CitizenCon 2953',
    summary:
      'The August 2023 development report was dominated by polish: AI perception, cover-usage refinements, vehicle UI nearing feature-complete on the loadout terminal, weapon audio, and ambient soundscapes. The audio team even teased, "We are excited for the community to get their hands on these weapons." It would be the final monthly report published before CitizenCon 2953 on October 21, 2023 — where the era of waiting ended.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/19474-Squadron-42-Monthly-Report-August-2023',
  },
  {
    date: '2023-07-05',
    headline: 'June 2023 report: new combat AI switched on across all of Squadron 42',
    summary:
      "The June 2023 monthly report showed a project deep in finishing work: the long-in-development flight combat AI rework was finalized and enabled throughout the entire campaign, with the team moving on to tuning and tweaking. Other updates were chapter-level polish — The Coil's electromagnetic gas clouds, scene animation passes, and bridge crew setups. The monthly report drumbeat had continued unbroken through the first half of 2023, even as CIG stayed silent on a date.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/19373-Squadron-42-Monthly-Report-June-2023',
  },
  {
    date: '2022-12-30',
    headline: 'Year-end Letter from the Chairman: SQ42 team growing, tech flowing into Star Citizen',
    summary:
      'Closing out 2022, Chris Roberts reported record revenue (up 30% over 2021) and said CIG had hired more than ever, continuing to build out the Squadron 42 and Persistent Universe teams. He promised that toward the end of 2023, Squadron 42-related work — improved player traversal, a new interaction system, FPS scanning, the new Star Map, and building-blocks MFDs — would start arriving in Star Citizen. The letter also announced that in-person CitizenCon would return in 2023 in Los Angeles.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/19078-Letter-From-The-Chairman',
  },
  {
    date: '2022-10-08',
    headline: 'CitizenCon 2952 streams as "the Journey to 4.0" — no Squadron 42 on the program',
    summary:
      "CIG's annual convention returned as a digital-only broadcast on Twitch on Saturday, October 8, 2022. The official event page billed the show entirely as \"the Journey to 4.0\" — a day of Star Citizen persistent-universe development updates — and no Squadron 42 panel appeared on the published program. For campaign fans, another CitizenCon came and went without a reveal.",
    sourceLabel: 'RSI — CitizenCon 2952',
    sourceUrl: 'https://robertsspaceindustries.com/en/citizencon2022',
  },
  {
    date: '2022-05-18',
    headline: 'Letter from the Chairman: Chris Roberts embeds with the SQ42 team in Manchester',
    summary:
      'In a year-in-review letter, Chris Roberts revealed he had been spending most of his time since fall 2021 at the UK studio in Manchester, working side-by-side with the Squadron 42 team "as we focus on finishing and polishing the content and features." It was the clearest official signal yet that the campaign had moved into a finishing phase — but the letter offered no release window, and fans kept waiting.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/18696-Letter-From-The-Chairman',
  },
  {
    date: '2022-02-02',
    headline: 'Squadron 42 monthly reports keep coming in 2022 — now via newsletter first',
    summary:
      'CIG published the January 2022 Squadron 42 development report, noting it was a cross-post of the monthly SQ42 newsletter, republished as a Comm-Link for easy reference. Despite fan worries after the combined November/December 2021 report, the cadence never actually broke: a Squadron 42 report went out every month of 2022 (with November and December again merged). The January edition covered uniforms, battle flow, dead-body investigation, and level design work to make campaign chapters flow into each other without loading screens.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/18547-Squadron-42-Monthly-Report-January-2022',
  },
  {
    date: '2022-01-19',
    headline: 'Combined November & December 2021 report closes out the year — steady work, no dates',
    summary:
      "CIG closed out 2021 with a combined November & December Squadron 42 report covering security AI, cinematics, and combat work. The year ended as it began: steady development updates, no release window. The report series continued into 2022, but by this point all forward-looking SQ42 release information had been absent from public communications for over a year, with Chris Roberts' October 2020 'done when it is done' as the last official word on timing.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/18519-Squadron-42-Monthly-Report-November-December-2021',
  },
  {
    date: '2021-11-10',
    headline: 'October 2021 SQ42 Monthly Report — the last single-month report of the year',
    summary:
      "The Squadron 42 Monthly Report for October 2021 covered AI behaviors, backend services, and cinematics work, ending with the series' usual \"we'll see you next month.\" It was the final standalone monthly report published within 2021 — November and December were rolled into a combined report, following the same holiday pattern CIG used in 2019 and 2020. The reports remained progress narratives without any release timing, consistent with CIG's decision to stop publishing SQ42 dates.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/18388-Squadron-42-Monthly-Report-October-2021',
  },
  {
    date: '2021-09-08',
    headline: "CIG shifts core gameplay teams to 'Squadron 42 first' development",
    summary:
      'In the September 8, 2021 Roadmap Roundup, CIG announced that its Core Gameplay teams (Actor Feature, Actor Tech, Weapon Feature, Weapon Content) were shifting focus to deliver features for Squadron 42 first, before releasing them to the Star Citizen Persistent Universe. CIG framed the trade-off openly: SQ42 gains resources and dedicated focus, while some Persistent Universe features would shift on the Release View. Later roundups extended this, including a dedicated SQ42 Character Art team.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/spectrum-dispatch/18305-Roadmap-Roundup-September-8th-2021',
  },
  {
    date: '2020-12-23',
    headline: 'New public roadmap goes live; SQ42 release dates disappear in favor of a Progress Tracker',
    summary:
      "CIG launched its rebuilt public roadmap, replacing the old date-driven view (which had carried SQ42 beta targets) with a team-based Progress Tracker showing what each team — including dedicated Squadron 42 teams — is working on each quarter. CIG stated plainly that the Progress Tracker \"should not be used to determine when a deliverable will hit the live servers.\" From this point on, the public roadmap carried no release window for Squadron 42.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/comm-link/spectrum-dispatch/17939-Roadmap-Roundup-December-23rd-2020',
  },
  {
    slug: 'done-when-it-is-done-letter-2020',
    metaTitle: "'Done When It Is Done' — 2020 Letter",
    date: '2020-10-10',
    headline: "Chris Roberts on SQ42: 'it will be done when it is done, and that will not be this year'",
    summary:
      "In a Letter from the Chairman published on Star Citizen Day, Chris Roberts directly addressed Squadron 42's status: the game would not release in 2020, and he declined to give any date — \"the best answer I can give you is that it will be done when it is done.\" He acknowledged community frustration that the SQ42 roadmap had stopped being updated, said the team was in \"close out\" mode, and explained the new roadmap would show what teams are working on rather than dated deliverables, because CIG's estimates \"can be wrong and often are.\"",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/17805-Letter-From-The-Chairman',
  },
  {
    date: '2020-10-10',
    headline: 'The Briefing Room premieres — a new quarterly Squadron 42 dev-update show',
    summary:
      "Alongside the Chairman's letter, CIG launched \"The Briefing Room,\" announced as an in-depth quarterly show dedicated to Squadron 42 development, described by Chris Roberts as \"kind of like a really, really big sprint report\" with deep dives into features and content. Episode 1 ran an hour and eighteen minutes, and Roberts recorded a separate on-camera SQ42 progress update introducing the series. Both went up on the official Star Citizen YouTube channel on October 10, 2020.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/17816-Squadron-42-Update-The-Briefing-Room',
  },
  {
    date: '2020-08-19',
    headline: 'Roadmap Update: CIG says the date-based public roadmap misrepresents SQ42 progress',
    summary:
      "In the \"Star Citizen & Squadron 42 Roadmap Update,\" CIG said the existing public roadmap had become \"less representative of our actual progress\" because it only displayed features with estimated release dates — so much of the 450-person team's work on Star Citizen and Squadron 42 wasn't shown at all. CIG announced it would replace it with a team-based roadmap showing what nearly every team is working on, while keeping SQ42 story spoilers behind closed doors. In practice, this began the shift away from publishing forward-looking SQ42 release estimates.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/17727-Star-Citizen-Squadron-42-Roadmap-Update',
  },
  {
    date: '2019-12-25',
    headline: "CIG releases a Squadron 42 visual teaser as a holiday 'sneak peek'",
    summary:
      "On Christmas Day 2019, CIG published the \"Squadron 42 Holiday Sneak Peek,\" a visual update reel highlighting environments, ships, and characters worked on during 2019 (the video \"Squadron 42: 2019 Visual Teaser\" went up on the official Star Citizen YouTube channel the same day). CIG itself acknowledged in the post that \"it's been a while since last we shared a significant look at Squadron 42,\" and promised more updates the following year.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/17405-Squadron-42-Holiday-Sneak-Peek',
  },
  {
    date: '2018-11-05',
    headline: 'First dedicated Squadron 42 Monthly Report published',
    summary:
      "CIG published its first Squadron 42 Monthly Report as a comm-link, cross-posting the September 2018 edition of the new Squadron 42 newsletter so the community could reference it, and committing to the same process for future reports. This began the dedicated monthly SQ42 development reporting cadence that separated the campaign's progress updates from Star Citizen's.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/16792-Squadron-42-Monthly-Report-September-2018',
  },
  {
    slug: 'sq42-citizencon-2948-trailer',
    metaTitle: 'SQ42 Trailer Debuts at CitizenCon 2948',
    date: '2018-10-12',
    headline: 'Squadron 42 cinematic trailer debuts at CitizenCon 2948',
    summary:
      'CIG published the Squadron 42 CitizenCon trailer, a cinematic piece inviting players to "join the brave men and women of the 2nd Fleet as they stand strong against the greatest threats the UEE has ever faced." The trailer, shown around CitizenCon 2948 in Austin, closed on the campaign\'s signature question: "Will you answer the call?"',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/16801-Squadron-42-CitizenCon-Trailer',
  },
  {
    date: '2018-01-25',
    headline: "'Welcome to the Coil' episode tours a key Squadron 42 location",
    summary:
      'A Squadron 42-focused Around the Verse episode took an in-depth look at the Coil, a foreboding, mysterious region that serves as a distinctive setting in the campaign. Developers walked through the design challenges of bringing the hazardous environment to life in-game, continuing the steady drip of SQ42 material that followed the vertical slice reveal.',
    sourceLabel: 'Star Citizen YouTube',
    sourceUrl: 'https://www.youtube.com/watch?v=Yi9WdFRq8oA',
  },
  {
    slug: 'sq42-vertical-slice-holiday-special-2017',
    metaTitle: 'SQ42 Vertical Slice — 2017 Holiday Special',
    date: '2017-12-22',
    headline: "Holiday Special debuts first extended Squadron 42 'vertical slice' gameplay",
    summary:
      "CIG's annual Holiday Special, hosted by Chris Roberts, gave the public its first extended look at Squadron 42 with pre-alpha work-in-progress gameplay from the game's \"vertical slice.\" A standalone demo published the same day showcased Navy life aboard an Idris frigate and a rescue mission at an abandoned moon outpost. This was the long-promised gameplay showing that had been pulled from CitizenCon the year before.",
    sourceLabel: 'Star Citizen YouTube',
    sourceUrl: 'https://www.youtube.com/watch?v=tpVzJiarjvc',
  },
  {
    date: '2016-12-23',
    headline: 'Star Citizen and Squadron 42 switch to Amazon Lumberyard engine',
    summary:
      "CIG announced that Star Citizen and Squadron 42 were now being built on Amazon's Lumberyard game engine, with the press release noting both games were backed by a record $139 million in crowdfunding at the time. The announcement landed the same day Star Citizen Alpha 2.6 with Star Marine went live to all backers.",
    sourceLabel: 'RSI Press Release',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/press/15660-Star-Citizen-And-Squadron-42-Utilize-Amazon-Lumberyard-Game-Engine',
  },
  {
    date: '2016-11-19',
    headline: 'Chris Roberts: no more hard dates for Squadron 42 in anniversary letter',
    summary:
      "In a Letter from the Chairman marking four years since the original crowdfunding campaign closed, Chris Roberts addressed schedule criticism directly. He wrote that CIG had \"not been keen to give hard dates on the project\" after the initial estimates, which were made when the project was far smaller in scope, and that any release talk had always carried qualifiers like \"we're hoping to.\" The letter cemented the no-firm-dates stance that defined Squadron 42 communications after the missed 2016 window.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/comm-link/transmission/15603-Letter-From-The-Chairman',
  },
  {
    slug: 'sq42-2016-delay-citizencon-2946',
    metaTitle: 'SQ42 2016 Release Slips — CitizenCon 2946',
    date: '2016-10-09',
    headline: 'Squadron 42 demo pulled from CitizenCon 2946 as hoped-for 2016 release slips',
    summary:
      "The Squadron 42 gameplay demo expected at CitizenCon 2946 was not shown, and the campaign — which backers had hoped would ship in 2016 — did not launch that year. CIG's own Monthly Studio Report for October 2016 acknowledged in writing that the team \"didn't wind up being able to show off\" its Squadron 42 efforts at the event, and CIG shifted to an open-ended, quality-first schedule with no new release date.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/15587-Monthly-Studio-Report-October-2016',
  },
  {
    date: '2016-03-18',
    headline: 'Andy Serkis joins Squadron 42 to bring the Vanduul to life',
    summary:
      "CIG introduced actor Andy Serkis as part of Squadron 42, showing how his performance-capture work brings the game's alien antagonists, the Vanduul, to life. The comm-link also teased background on the Vanduul language, which players would be able to learn themselves.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/comm-link/transmission/15254-Squadron-42-Meet-Andy-Serkis',
  },
  {
    date: '2015-11-19',
    headline: "Behind-the-scenes videos show Mark Hamill's mo-cap work and the SQ42 character pipeline",
    summary:
      "CIG published two Squadron 42 behind-the-scenes features: one following Mark Hamill's performance-capture work as Steve 'Old Man' Colton, and a companion piece detailing the character pipeline used to bring the cast into the game. These were the first close looks at the mo-cap shoots behind the CitizenCon casting announcement.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/15069-Squadron-42-Behind-The-Scenes-Mark-Hamill',
  },
  {
    slug: 'sq42-cast-reveal-citizencon-2015',
    metaTitle: 'SQ42 Cast Reveal — CitizenCon 2015',
    date: '2015-10-10',
    headline: 'CitizenCon 2015: Hollywood performance-capture cast revealed for Squadron 42',
    summary:
      "During the CitizenCon 2015 presentation, CIG revealed a star performance-capture cast for Squadron 42, headlined by Gary Oldman, Mark Hamill, Gillian Anderson, John Rhys-Davies, and Andy Serkis, and announced a 2016 release window for the campaign. CIG posted the full presentation as an official livestream replay. Hamill's role as Steve 'Old Man' Colton and Anderson's casting were subsequently confirmed in official comm-links.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/15002-CIG-Replay-CitizenCon-2015-Livestream',
  },
  {
    date: '2015-10-10',
    headline: "Squadron 42's opening cinematic, the Bishop Senate Speech, debuts at CitizenCon 2015",
    summary:
      "CIG premiered Squadron 42's opening cinematic at CitizenCon 2015 and published it on the official Star Citizen YouTube channel the same day. The scene shows Admiral Bishop delivering a call-to-arms address before the UEE Senate, establishing the war footing that frames the campaign. CIG's own video description identifies it as the opening cinematic for Squadron 42 as seen during CitizenCon 2015.",
    sourceLabel: 'Star Citizen YouTube',
    sourceUrl: 'https://www.youtube.com/watch?v=8EC4WHPxnrk',
  },
  {
    date: '2015-10-10',
    headline: "'The Morrow Tour' — Squadron 42's first extended gameplay demo — shown at CitizenCon 2015",
    summary:
      "CIG released the live version of The Morrow Tour, a work-in-progress gameplay excerpt from Squadron 42 shown during the CitizenCon 2015 presentation, on the official YouTube channel the day of the event. It was the campaign's first substantial public gameplay showing.",
    sourceLabel: 'Star Citizen YouTube',
    sourceUrl: 'https://www.youtube.com/watch?v=qexLUpQJPw8',
  },
  {
    date: '2013-11-22',
    headline: '$29M stretch goal funds enhanced Squadron 42 mission design at Foundry 42',
    summary:
      'A Letter from the Chairman marked the $29 million funding milestone and dedicated the new money to Foundry 42, the UK studio building Squadron 42. Roberts framed the campaign as a true successor to Wing Commander that would open with an epic battle instead of a training patrol and feature missions seamlessly combining ship boarding with space combat. The post also included a behind-the-scenes video introducing the Foundry 42 team.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/13389-Letter-From-The-Chairman-29-Million-Squadron-42',
  },
  {
    date: '2012-11-19',
    headline: 'Crowdfunding finale: $5.5M unlocks motion capture for Squadron 42',
    summary:
      "In the campaign's last hours, pledges passed $5.5 million, unlocking motion capture for Squadron 42 along with the Bengal carrier and a backer ship skin. Roberts wrote that the campaign had originally asked for $2 million and that the everything-unlocked $6 million goal — including 100 star systems, a full orchestral score, and a free Squadron 42 mission disk called Behind Enemy Lines — was suddenly in sight as the Kickstarter closed that day.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/12811-55-Million-On-To-The-Stars',
  },
  {
    date: '2012-10-18',
    headline: 'Star Citizen campaign adds a Kickstarter after community demand',
    summary:
      "Eight days into the campaign, Chris Roberts announced a parallel Kickstarter after over 1,000 backers asked for the option alongside RSI's own pledge system. Combined pledges crossed $1 million that same morning. The Kickstarter ran alongside the RSI site for the rest of the campaign, with Squadron 42 included in the game packages being funded.",
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/12738-A-Letter-From-Chris-Roberts',
  },
  {
    slug: 'squadron-42-announced-gdc-2012',
    metaTitle: 'Squadron 42 Announced at GDC 2012',
    date: '2012-10-10',
    headline: 'Chris Roberts unveils Star Citizen and Squadron 42 at GDC Online',
    summary:
      'Chris Roberts returned to game development with an announcement at GDC Online in Austin on October 10, 2012, revealing Star Citizen together with Squadron 42, its Wing Commander-style single-player military campaign. Backer demand was heavy enough to crash the brand-new RSI crowdfunding site. A comm-link two days later confirmed the pitch centered on both games and that the outage had interrupted record-pace pledging.',
    sourceLabel: 'RSI Comm-Link',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/12730-A-Message-From-Chris-Roberts',
  },
]
