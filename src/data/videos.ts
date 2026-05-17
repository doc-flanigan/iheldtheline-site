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
    date: '2017-12-22',
    title: 'Squadron 42 — Pre-Alpha Vertical Slice Gameplay | Holiday Special 2017',
    description:
      "A one-hour gameplay demonstration released with director's commentary from Chris Roberts, showing a mid-story section set aboard an Idris frigate and a rescue mission at an abandoned moon outpost — the most detailed gameplay footage released before the 2023 and 2024 reveals.",
    thumbnailUrl: 'https://img.youtube.com/vi/BHR1aEdTA4M/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=BHR1aEdTA4M',
    duration: 'PT1H',
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
