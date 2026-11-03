/**
 * Minimal 24x24 line icons used across the landing page.
 * Shape coordinates mirror the original inline SVGs exactly.
 */
export const icons = {
  'arrow-right': [
    { type: 'path', d: 'M5 12h14M13 6l6 6-6 6' },
  ],
  power: [
    { type: 'rect', x: 3, y: 5, width: 18, height: 14, rx: 2 },
    { type: 'path', d: 'M13 8l-3 4h3l-2 4' },
  ],
  cooling: [
    { type: 'circle', cx: 12, cy: 12, r: 2.4 },
    {
      type: 'path',
      d: 'M12 3a4 4 0 0 1 0 6M21 12a4 4 0 0 1-6 0M12 21a4 4 0 0 1 0-6M3 12a4 4 0 0 1 6 0',
    },
  ],
  infrastructure: [
    { type: 'rect', x: 4, y: 3, width: 16, height: 18, rx: 2 },
    {
      type: 'path',
      d: 'M8 7h4M8 11h4M8 15h4M16 7h0M16 11h0M16 15h0',
    },
  ],
  hvac: [
    { type: 'path', d: 'M3 8h11a3 3 0 1 0-3-3' },
    { type: 'path', d: 'M3 12h15a3 3 0 1 1-3 3' },
    { type: 'path', d: 'M3 16h7' },
  ],
  wrench: [
    {
      type: 'path',
      d: 'M14 7a4 4 0 0 1-5 5l-6 6 2 2 6-6a4 4 0 0 0 5-5l-2 2-2-2 2-2z',
    },
  ],
  shield: [
    { type: 'path', d: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z' },
    { type: 'path', d: 'M9 12l2 2 4-4' },
  ],
  'power-backup': [
    { type: 'path', d: 'M4 17a8 8 0 0 1 16 0' },
    { type: 'path', d: 'M3 17h18v2H3z' },
    { type: 'path', d: 'M12 9V5M9 10V7M15 10V7' },
  ],
  route: [
    { type: 'circle', cx: 5, cy: 6, r: 2 },
    { type: 'circle', cx: 19, cy: 18, r: 2 },
    { type: 'path', d: 'M7 6h8a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h8' },
  ],
  pulse: [
    { type: 'path', d: 'M2 12h3l2-6 4 12 3-8 2 2h6' },
  ],
  leaf: [
    { type: 'path', d: 'M5 19c8 2 14-4 14-14C9 5 3 11 5 19z' },
    { type: 'path', d: 'M5 19C8 15 11 12 15 10' },
  ],
  'industry-datacenter': [
    { type: 'rect', x: 4, y: 3, width: 16, height: 18, rx: 2 },
    { type: 'path', d: 'M8 7h4M8 11h4M8 15h4' },
  ],
  'industry-healthcare': [
    { type: 'rect', x: 4, y: 4, width: 16, height: 16, rx: 2 },
    { type: 'path', d: 'M12 8v8M8 12h8' },
  ],
  'industry-it': [
    { type: 'rect', x: 3, y: 4, width: 18, height: 12, rx: 2 },
    { type: 'path', d: 'M8 20h8M12 16v4' },
  ],
  'industry-banking': [
    { type: 'path', d: 'M3 10l9-6 9 6' },
    { type: 'path', d: 'M5 10v8M10 10v8M14 10v8M19 10v8M3 20h18' },
  ],
  'industry-hospitality': [
    { type: 'path', d: 'M3 18h18M5 18a7 7 0 0 1 14 0M12 8V6M10 6h4' },
  ],
  'industry-manufacturing': [
    { type: 'path', d: 'M3 20V10l6 4V10l6 4V6h6v14z' },
  ],
  'industry-warehouse': [
    { type: 'path', d: 'M3 9l9-5 9 5v11H3z' },
    { type: 'path', d: 'M7 20v-6h10v6' },
  ],
  'industry-commercial': [
    { type: 'rect', x: 5, y: 3, width: 14, height: 18, rx: 1 },
    { type: 'path', d: 'M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2' },
  ],
  'industry-solar': [
    { type: 'circle', cx: 12, cy: 12, r: 4 },
    {
      type: 'path',
      d: 'M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5',
    },
  ],
  'industry-education': [
    { type: 'path', d: 'M2 9l10-5 10 5-10 5z' },
    { type: 'path', d: 'M6 11v5c3 2 9 2 12 0v-5' },
  ],
  pin: [
    { type: 'path', d: 'M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z' },
    { type: 'circle', cx: 12, cy: 10, r: 2.5 },
  ],
  close: [
    { type: 'path', d: 'M6 6l12 12M18 6L6 18' },
  ],
}
