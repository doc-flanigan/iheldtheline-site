export const RELEASE = {
  year: 2027,
  // Human-readable window label — CIG's target is a quarter, not a full year.
  label: 'Q2 2027',
  windowStart: '2027-04-01',
  windowEnd: '2027-06-30',
  startLabel: 'Apr 2027',
  endLabel: 'Jun 2027',
  // The delay announcement that set this window — the countdown runs from here
  // to the start of the window while the window is still in the future.
  // When an exact date is announced, set these to that announcement instead.
  announced: '2026-08-27',
  announcedLabel: 'Aug 2026',
  disclaimer:
    'No specific release date has been announced by CIG. Q2 2027 is their stated target window, set in the August 27, 2026 Letter from the Chairman after the 2026 target was dropped to avoid launching alongside GTA 6.',
  windowPassedNote:
    'The Q2 2027 target window has ended without a confirmed release. CIG has not announced an updated date — this tracker will be updated when they do.',
  // Exact launch day, once CIG announces one (ISO YYYY-MM-DD). While null the
  // homepage tracks the window above; once set it counts down to this day.
  // Runbook: docs/release-date-announcement-runbook.md
  date: null as string | null,
  dateLabel: null as string | null,
  dateNote: null as string | null,
  lastVerified: '2026-08-27',
}
