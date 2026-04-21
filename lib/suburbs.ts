export interface Suburb {
  slug: string;
  name: string;
  testCentre: string;
}

export const suburbs: Suburb[] = [
  { slug: 'north-ryde', name: 'North Ryde', testCentre: 'Ryde' },
  { slug: 'east-ryde', name: 'East Ryde', testCentre: 'Ryde' },
  { slug: 'ryde', name: 'Ryde', testCentre: 'Ryde' },
  { slug: 'west-ryde', name: 'West Ryde', testCentre: 'Ryde' },
  { slug: 'macquarie-park', name: 'Macquarie Park', testCentre: 'Ryde' },
  { slug: 'eastwood', name: 'Eastwood', testCentre: 'Ryde' },
  { slug: 'epping', name: 'Epping', testCentre: 'Ryde' },
  { slug: 'castle-hill', name: 'Castle Hill', testCentre: 'Castle Hill' },
  { slug: 'north-rocks', name: 'North Rocks', testCentre: 'Castle Hill' },
  { slug: 'carlingford', name: 'Carlingford', testCentre: 'Castle Hill' },
  { slug: 'beecroft', name: 'Beecroft', testCentre: 'Hornsby' },
  { slug: 'telopea', name: 'Telopea', testCentre: 'Ryde' },
  { slug: 'dundas', name: 'Dundas', testCentre: 'Ryde' },
  { slug: 'ermington', name: 'Ermington', testCentre: 'Ryde' },
  { slug: 'rydalmere', name: 'Rydalmere', testCentre: 'Silverwater' },
  { slug: 'melrose-park', name: 'Melrose Park', testCentre: 'Silverwater' },
  { slug: 'meadowbank', name: 'Meadowbank', testCentre: 'Ryde' },
  { slug: 'rhodes', name: 'Rhodes', testCentre: 'Silverwater' },
  { slug: 'gladesville', name: 'Gladesville', testCentre: 'Ryde' },
  { slug: 'putney', name: 'Putney', testCentre: 'Ryde' },
  { slug: 'silverwater', name: 'Silverwater', testCentre: 'Silverwater' },
  { slug: 'newington', name: 'Newington', testCentre: 'Silverwater' },
  { slug: 'auburn', name: 'Auburn', testCentre: 'Silverwater' },
  { slug: 'chatswood', name: 'Chatswood', testCentre: 'Chatswood' },
];

export function getSuburbBySlug(slug: string): Suburb | undefined {
  return suburbs.find((s) => s.slug === slug);
}
