export type VideoEntry = {
  date: string
  title: string
  description: string  // one line
  thumbnailUrl: string // relative public path or remote URL (must match next.config remotePatterns)
  sourceUrl: string    // YouTube or RSI canonical URL
  duration?: string    // ISO 8601, e.g. 'PT12M30S'
}

export const VIDEOS: VideoEntry[] = [
  {
    date: '2024-10-19',
    title: 'Squadron 42 — Official Gameplay Reveal | CitizenCon 2954',
    description:
      "The first live on-stage gameplay demo of Squadron 42, covering the game's prologue — origin story, ship-interior movement, turret combat, and a first Vanduul encounter. Includes the studio re-recording with an extended ending. Chris Roberts confirmed the 2026 release window and 30-to-40-hour campaign length.",
    thumbnailUrl: 'https://img.youtube.com/vi/Vjju3L3XDoQ/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=Vjju3L3XDoQ',
    duration: 'PT1H5M',
  },
  {
    date: '2023-10-01',
    title: 'Squadron 42: I Held the Line — Feature-Complete Reveal | CitizenCon 2953',
    description:
      'A twenty-six-minute gameplay showcase released at CitizenCon 2953 alongside the announcement that Squadron 42 had reached feature-complete status. Shows squad-based combat, formation flying with the 42nd Squadron, and on-foot and space-combat sequences.',
    thumbnailUrl: 'https://img.youtube.com/vi/IDtjzLzs7V8/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=IDtjzLzs7V8',
    duration: 'PT26M',
  },
  {
    date: '2020-10-10',
    title: 'SQ42 Update & The Briefing Room Introduction',
    description:
      'A development update video introducing The Briefing Room series, with behind-the-scenes commentary from the Squadron 42 team on the current state of the game.',
    thumbnailUrl: 'https://img.youtube.com/vi/dO-fWiYJ1I4/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=dO-fWiYJ1I4',
  },
  {
    date: '2020-10-10',
    title: 'Squadron 42: The Briefing Room — Episode 1',
    description:
      'A developer update video focused on the interrupt system (which lets scripted story events blend seamlessly into gameplay) and level design, featuring commentary from the development team.',
    thumbnailUrl: 'https://img.youtube.com/vi/y-uR8lJFbMY/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=y-uR8lJFbMY',
    duration: 'PT22M',
  },
  {
    date: '2019-12-25',
    title: 'Squadron 42 — 2019 Visual Teaser',
    description:
      'A short holiday visual teaser released as a progress update, showing in-engine environments and characters from the game.',
    thumbnailUrl: 'https://img.youtube.com/vi/_aCE7gxQOVY/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=_aCE7gxQOVY',
    duration: 'PT2M30S',
  },
  {
    date: '2018-10-10',
    title: 'Squadron 42 — Official Cinematic Trailer | CitizenCon 2018',
    description:
      'The cinematic trailer that introduced the celebrity cast publicly — including Mark Hamill, Gillian Anderson, Gary Oldman, and others — showing in-engine character models from the game.',
    thumbnailUrl: 'https://img.youtube.com/vi/ki0aKYyFUBc/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=ki0aKYyFUBc',
    duration: 'PT3M30S',
  },
  {
    date: '2018-10-10',
    title: 'Squadron 42 — Cinematic Teaser | CitizenCon 2018',
    description:
      'A short cinematic teaser released at CitizenCon 2018, presenting in-engine character visuals and atmosphere ahead of the full trailer.',
    thumbnailUrl: 'https://img.youtube.com/vi/VppjX4to9s4/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=VppjX4to9s4',
    duration: 'PT1M30S',
  },
  {
    date: '2018-06-28',
    title: 'Squadron 42: Around the Verse — Strengthening the Core Tech',
    description:
      'An Around the Verse developer update covering core technology improvements for Squadron 42, including engine and systems work in progress at the time.',
    thumbnailUrl: 'https://img.youtube.com/vi/tatAd1GT9eM/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=tatAd1GT9eM',
  },
  {
    date: '2018-05-31',
    title: 'Squadron 42: Around the Verse — Scanners Aglow, Torpedoes in Tow',
    description:
      'An Around the Verse episode covering scanner systems and torpedo mechanics being developed for Squadron 42.',
    thumbnailUrl: 'https://img.youtube.com/vi/tPa8KIgSh3Y/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=tPa8KIgSh3Y',
  },
  {
    date: '2018-03-29',
    title: 'Squadron 42: Around the Verse — Flight Intelligence',
    description:
      'An Around the Verse developer update covering AI flight intelligence systems — how enemy and allied ships think, maneuver, and engage in space combat.',
    thumbnailUrl: 'https://img.youtube.com/vi/zQQYS7ibtvo/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=zQQYS7ibtvo',
  },
  {
    date: '2018-02-22',
    title: 'Squadron 42: Around the Verse — The Living Idris',
    description:
      'An Around the Verse episode showcasing the Idris capital ship as a living environment — crew routines, interior design, and how NPCs populate and animate the ship.',
    thumbnailUrl: 'https://img.youtube.com/vi/CP_GTmqs2Zg/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=CP_GTmqs2Zg',
  },
  {
    date: '2018-01-26',
    title: 'Squadron 42: Around the Verse — Welcome to the Coil',
    description:
      'An Around the Verse episode introducing The Coil — the hazardous tunnel network that features as a key location in Squadron 42.',
    thumbnailUrl: 'https://img.youtube.com/vi/Yi9WdFRq8oA/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=Yi9WdFRq8oA',
  },
  {
    date: '2018-01-26',
    title: 'Star Citizen: Reverse the Verse LIVE — Squadron 42 Q&A',
    description:
      'A live developer Q&A session where the Squadron 42 team answered community questions about the game\'s development, story, and mechanics.',
    thumbnailUrl: 'https://img.youtube.com/vi/fS6FpCpt5m4/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=fS6FpCpt5m4',
  },
  {
    date: '2017-12-23',
    title: 'Squadron 42: Around the Verse — Holiday Special 2017',
    description:
      'The Holiday Special 2017 Around the Verse episode accompanying the vertical slice gameplay release, with developer commentary on the work shown.',
    thumbnailUrl: 'https://img.youtube.com/vi/tpVzJiarjvc/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=tpVzJiarjvc',
  },
  {
    date: '2017-12-23',
    title: 'Squadron 42 — Pre-Alpha Vertical Slice Gameplay (with Director\'s Commentary)',
    description:
      'The Holiday Special 2017 vertical slice with full director\'s commentary from Chris Roberts, covering a mid-story section aboard an Idris frigate and a rescue mission at an abandoned moon outpost.',
    thumbnailUrl: 'https://img.youtube.com/vi/qcHAfaQh3QE/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=qcHAfaQh3QE',
  },
  {
    date: '2017-12-22',
    title: 'Squadron 42 — Pre-Alpha Vertical Slice Gameplay | Holiday Special 2017',
    description:
      "The raw Holiday Special 2017 vertical slice gameplay, showing a mid-story section set aboard an Idris frigate and a rescue mission at an abandoned moon outpost — the most detailed gameplay footage released before the 2023 and 2024 reveals.",
    thumbnailUrl: 'https://img.youtube.com/vi/BHR1aEdTA4M/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=BHR1aEdTA4M',
    duration: 'PT1H',
  },
  {
    date: '2017-12-21',
    title: 'Squadron 42: Around the Verse — Holiday Special Teaser',
    description:
      'A short teaser released ahead of the Holiday Special 2017, hinting at the upcoming vertical slice gameplay reveal.',
    thumbnailUrl: 'https://img.youtube.com/vi/0_9nQhsWyVU/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=0_9nQhsWyVU',
  },
  {
    date: '2015-11-19',
    title: 'Squadron 42: Behind the Scenes — Mark Hamill',
    description:
      'Behind-the-scenes footage of Mark Hamill\'s motion-capture recording session for his role as Steve "Old Man" Colton in Squadron 42.',
    thumbnailUrl: 'https://img.youtube.com/vi/3vRE6LtYBHg/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=3vRE6LtYBHg',
  },
  {
    date: '2015-11-19',
    title: 'Squadron 42: Meet the "Old Man" — Mark Hamill Teaser',
    description:
      'A short teaser introducing Mark Hamill\'s character Steve "Old Man" Colton, released alongside the CitizenCon 2015 content.',
    thumbnailUrl: 'https://img.youtube.com/vi/ZjSXcdvd-ME/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=ZjSXcdvd-ME',
  },
  {
    date: '2015-10-10',
    title: 'Squadron 42: The Morrow Tour — Live Gameplay | CitizenCon 2015',
    description:
      "The first substantial public gameplay footage of Squadron 42, showing the player aboard a navy capital ship called the Idris — moving through corridors, interacting with crew, and engaging in a mission sequence.",
    thumbnailUrl: 'https://img.youtube.com/vi/qexLUpQJPw8/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=qexLUpQJPw8',
    duration: 'PT22M',
  },
  {
    date: '2012-10-01',
    title: 'Squadron 42 — Original Kickstarter Cinematic Trailer',
    description:
      'The original cinematic trailer that accompanied the 2012 crowdfunding announcement of Squadron 42 and Star Citizen, showing the first public glimpse of the game\'s visual direction.',
    thumbnailUrl: 'https://img.youtube.com/vi/WpgUuGunU0o/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=WpgUuGunU0o',
    duration: 'PT3M',
  },
]
