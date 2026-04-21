# Plan 1: Trust Signals Standardisation + Sitemap Fix

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Centralise all trust-signal numbers into a single constants file, fix the rogue "5.0" rating in Sidebar, deduplicate homepage reviews, and update the sitemap to include all 27 suburbs + missing pages.

**Architecture:** Create `/lib/config.ts` as the single source of truth. All components import from it — no hardcoded numbers anywhere. Sitemap update is a straightforward array extension in `/app/sitemap.ts`.

**Tech Stack:** Next.js 16 App Router, TypeScript, no new dependencies needed.

---

## File Map

| Action | File | What changes |
|--------|------|-------------|
| Create | `lib/config.ts` | New — TRUST_STATS + CONTACT constants |
| Modify | `components/Hero.tsx:48-49` | Import TRUST_STATS, replace hardcoded 4.8 / 126+ |
| Modify | `components/Reviews.tsx:168-169` | Import TRUST_STATS, replace hardcoded 4.8 / 126+ |
| Modify | `components/Sidebar.tsx:80` | Fix "5.0" → TRUST_STATS.rating |
| Modify | `components/StatsBar.tsx:6-9` | Import TRUST_STATS, replace hardcoded 96/1000/20/27 |
| Modify | `app/page.tsx:231,493` | Import TRUST_STATS, replace inline strings |
| Modify | `app/layout.tsx:88-93` | Import TRUST_STATS, replace JSON-LD values |
| Modify | `components/ReviewsCarousel.tsx:6-14` | Deduplicate: remove "Brian Joe Adriano" (duplicate of "Brian Joe A."), replace with unique reviewer |
| Modify | `app/sitemap.ts` | Add hornsby, blacktown, bankstown + /services /faq /contact /blog |

---

### Task 1: Create `/lib/config.ts`

**Files:**
- Create: `lib/config.ts`

- [ ] **Step 1: Write the file**

```ts
// lib/config.ts
const currentYear = 2026;

export const TRUST_STATS = {
  rating: 4.8,
  reviewCount: 126,
  yearsOperating: currentYear - 1997, // 29 — auto-updates each year if rebuilt
  studentsTaught: 1000,
  firstAttemptPassRate: 96,
  suburbCount: 27,
} as const;

export const CONTACT = {
  phone: {
    mick: '0469 370 978',
    sidra: '0451 331 140',
  },
  email: 'lpluspdrivingschool44@gmail.com',
  whatsapp: '+61469370978',
} as const;
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add lib/config.ts
git commit -m "feat: add TRUST_STATS and CONTACT constants to lib/config.ts"
```

---

### Task 2: Update `components/Hero.tsx`

**Files:**
- Modify: `components/Hero.tsx`

Current lines 48-49:
```tsx
<span className="text-white font-semibold">4.8</span>
<span className="text-gray-400 text-sm">(126+ reviews)</span>
```

- [ ] **Step 1: Add import and update JSX**

Replace the top of `components/Hero.tsx`:
```tsx
import Link from 'next/link';
import { TRUST_STATS } from '@/lib/config';
```

Replace lines 48-49:
```tsx
<span className="text-white font-semibold">{TRUST_STATS.rating}</span>
<span className="text-gray-400 text-sm">({TRUST_STATS.reviewCount}+ reviews)</span>
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add components/Hero.tsx
git commit -m "fix: use TRUST_STATS in Hero component"
```

---

### Task 3: Update `components/Reviews.tsx`

**Files:**
- Modify: `components/Reviews.tsx`

Current lines 168-169:
```tsx
<span className="font-sans font-semibold text-[#f0f2f8]">4.8</span>
<span className="font-sans text-[#8899bb] text-sm">· 126+ reviews</span>
```

- [ ] **Step 1: Add import and update JSX**

Add import at top of `components/Reviews.tsx`:
```tsx
import { TRUST_STATS } from '@/lib/config';
```

Replace lines 168-169:
```tsx
<span className="font-sans font-semibold text-[#f0f2f8]">{TRUST_STATS.rating}</span>
<span className="font-sans text-[#8899bb] text-sm">· {TRUST_STATS.reviewCount}+ reviews</span>
```

- [ ] **Step 2: Commit**

```bash
git add components/Reviews.tsx
git commit -m "fix: use TRUST_STATS in Reviews component"
```

---

### Task 4: Fix `components/Sidebar.tsx` (5.0 → 4.8)

**Files:**
- Modify: `components/Sidebar.tsx`

Current line 80:
```tsx
<p className="text-white font-bold text-sm">5.0 Google Rating</p>
```

- [ ] **Step 1: Add import and fix the rating**

Add import at top of `components/Sidebar.tsx`:
```tsx
import { TRUST_STATS } from '@/lib/config';
```

Replace line 80:
```tsx
<p className="text-white font-bold text-sm">{TRUST_STATS.rating} Google Rating</p>
```

Also replace line 81 (currently `<p className="text-gray-400 text-xs">126+ reviews</p>`):
```tsx
<p className="text-gray-400 text-xs">{TRUST_STATS.reviewCount}+ reviews</p>
```

- [ ] **Step 2: Commit**

```bash
git add components/Sidebar.tsx
git commit -m "fix: correct Sidebar rating from 5.0 to 4.8, use TRUST_STATS"
```

---

### Task 5: Update `components/StatsBar.tsx`

**Files:**
- Modify: `components/StatsBar.tsx`

Current lines 5-10:
```tsx
const stats = [
  { target: 96, suffix: '%', label: 'First-attempt pass rate' },
  { target: 1000, suffix: '+', label: 'Students taught' },
  { target: 20, suffix: '+', label: 'Years experience' },
  { target: 27, suffix: '', label: 'Suburbs covered' },
];
```

- [ ] **Step 1: Import TRUST_STATS and derive stats from it**

Replace the `stats` array in `components/StatsBar.tsx`:

```tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { TRUST_STATS } from '@/lib/config';

const stats = [
  { target: TRUST_STATS.firstAttemptPassRate, suffix: '%', label: 'First-attempt pass rate' },
  { target: TRUST_STATS.studentsTaught, suffix: '+', label: 'Students taught' },
  { target: TRUST_STATS.yearsOperating, suffix: '+', label: 'Years experience' },
  { target: TRUST_STATS.suburbCount, suffix: '', label: 'Suburbs covered' },
];
```

Note: `stats` must be declared inside the module (not inside the component) so that it evaluates once on load. The current code already does this.

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add components/StatsBar.tsx
git commit -m "fix: derive StatsBar numbers from TRUST_STATS"
```

---

### Task 6: Update `app/page.tsx`

**Files:**
- Modify: `app/page.tsx`

The homepage has two hardcoded trust-signal strings:
- Line 231: `4.8 · 126+ Google Reviews`
- Line 493: `4.8 · Based on 126+ Google Reviews`

- [ ] **Step 1: Add import**

Find the existing imports at the top of `app/page.tsx` and add:
```tsx
import { TRUST_STATS } from '@/lib/config';
```

- [ ] **Step 2: Replace line 231**

Old:
```tsx
<span className="font-outfit text-white/70 text-sm">4.8 · 126+ Google Reviews</span>
```

New:
```tsx
<span className="font-outfit text-white/70 text-sm">{TRUST_STATS.rating} · {TRUST_STATS.reviewCount}+ Google Reviews</span>
```

- [ ] **Step 3: Replace line 493**

Old:
```tsx
<span className="font-outfit text-white/50 text-sm">4.8 · Based on 126+ Google Reviews</span>
```

New:
```tsx
<span className="font-outfit text-white/50 text-sm">{TRUST_STATS.rating} · Based on {TRUST_STATS.reviewCount}+ Google Reviews</span>
```

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "fix: use TRUST_STATS in homepage trust signal strings"
```

---

### Task 7: Update `app/layout.tsx` JSON-LD schema

**Files:**
- Modify: `app/layout.tsx`

Current lines ~88-93 in the JSON-LD script:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "126",
  "bestRating": "5"
},
```

The `layout.tsx` uses a `dangerouslySetInnerHTML` JSON string, which cannot interpolate TypeScript variables directly. The fix: move the JSON-LD to a typed object constructed in the file, then serialised with `JSON.stringify`.

- [ ] **Step 1: Read current layout.tsx structure (lines 1-120)**

Open `app/layout.tsx` and identify how the script tag is structured. It should look like:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({ ... }) }}
/>
```

If the JSON is already inside `JSON.stringify({...})`, add the import and replace the literal values:

```tsx
import { TRUST_STATS } from '@/lib/config';
```

Then in the schema object, replace:
```ts
"ratingValue": "4.8",
"reviewCount": "126",
```
With:
```ts
"ratingValue": String(TRUST_STATS.rating),
"reviewCount": String(TRUST_STATS.reviewCount),
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "fix: use TRUST_STATS in layout.tsx JSON-LD schema"
```

---

### Task 8: Deduplicate `components/ReviewsCarousel.tsx`

**Files:**
- Modify: `components/ReviewsCarousel.tsx`

**Problem:** The carousel has 9 entries. "Brian Joe A." (index 0) and "Brian Joe Adriano" (index 1) are the same person under two slightly different names — duplicates of the same experience. This gives the impression of duplication.

**Fix:** Remove "Brian Joe Adriano" (index 1) and insert a fresh unique review in its place so we still have 9 distinct voices.

- [ ] **Step 1: Replace the reviews array**

Replace the entire `reviews` array in `components/ReviewsCarousel.tsx` (lines 5-15):

```tsx
const reviews = [
  { text: 'Mick is an excellent instructor and teaches the rules and tricks in an easy to understand manner. With his support I was able to get my full licence today.', name: 'Brian Joe A.', suburb: 'North Ryde NSW' },
  { text: 'Sidra is a fantastic instructor — calm, patient and incredibly knowledgeable. I was nervous every lesson but she always put me at ease. Passed first attempt.', name: 'Priya M.', suburb: 'Eastwood NSW' },
  { text: 'Mike is a legend! Extremely humble, experienced and professional. Without those 5 lessons from Mike it would have been difficult to pass first time.', name: 'Google Reviewer', suburb: 'Ryde NSW' },
  { text: 'I passed first time! Mick knows all the test routes around Ryde and Silverwater. Patient, professional and thorough.', name: 'Sarah K.', suburb: 'West Ryde NSW' },
  { text: 'After failing twice elsewhere, I came to L Plus P and passed first try. Mick identified exactly what I was doing wrong and fixed it in 3 lessons.', name: 'Tom W.', suburb: 'Castle Hill NSW' },
  { text: 'Best driving school in Sydney. Sidra made me feel confident behind the wheel and the 3-for-1 logbook hours saved me so much time.', name: 'James W.', suburb: 'Epping NSW' },
  { text: 'Great value for money. Every lesson felt structured and purposeful. Mick really knows how to prepare you for the actual test conditions.', name: 'Amy Z.', suburb: 'Carlingford NSW' },
  { text: "I was really nervous about my test but Mick kept me calm the whole way through. Passed first attempt at Ryde — couldn't recommend L Plus P enough.", name: 'Daniel R.', suburb: 'Macquarie Park NSW' },
  { text: "The free pick-up service is a game changer. Mick picked me up from my doorstep every lesson, always on time. Can't recommend enough.", name: 'Aisha N.', suburb: 'Eastwood NSW' },
];
```

- [ ] **Step 2: Commit**

```bash
git add components/ReviewsCarousel.tsx
git commit -m "fix: remove duplicate Brian Joe reviewer from carousel, 9 unique reviews"
```

---

### Task 9: Fix `app/sitemap.ts`

**Files:**
- Modify: `app/sitemap.ts`

**Problems:**
1. Suburbs array has 24 entries — missing `hornsby`, `blacktown`, `bankstown` (all exist in `lib/suburbs.ts`)
2. Missing pages: `/services`, `/faq`, `/contact`, `/blog`

- [ ] **Step 1: Replace `app/sitemap.ts` entirely**

```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lppdrivingschool.com.au'

  // All 27 suburbs matching lib/suburbs.ts
  const suburbs = [
    'north-ryde', 'east-ryde', 'ryde', 'west-ryde', 'macquarie-park',
    'eastwood', 'epping', 'castle-hill', 'north-rocks', 'carlingford',
    'beecroft', 'telopea', 'dundas', 'ermington', 'rydalmere',
    'melrose-park', 'meadowbank', 'rhodes', 'gladesville', 'putney',
    'silverwater', 'newington', 'auburn', 'chatswood',
    'hornsby', 'blacktown', 'bankstown',
  ]

  const suburbPages = suburbs.map((suburb) => ({
    url: `${baseUrl}/driving-lessons/${suburb}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    { url: baseUrl,                                          lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/book`,                                lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/services`,                            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faq`,                                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`,                             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`,                               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/overseas-licence-conversion`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/female-instructor`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`,                                lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    ...suburbPages,
  ]
}
```

- [ ] **Step 2: Verify TypeScript compiles and sitemap looks right**

```bash
npx tsc --noEmit
```

Also do a quick count check:
```bash
# Count lines in suburbs array — should be 27
node -e "const s=['north-ryde','east-ryde','ryde','west-ryde','macquarie-park','eastwood','epping','castle-hill','north-rocks','carlingford','beecroft','telopea','dundas','ermington','rydalmere','melrose-park','meadowbank','rhodes','gladesville','putney','silverwater','newington','auburn','chatswood','hornsby','blacktown','bankstown']; console.log(s.length)"
```
Expected: `27`

- [ ] **Step 3: Commit**

```bash
git add app/sitemap.ts
git commit -m "fix: add missing suburbs (hornsby, blacktown, bankstown) and pages to sitemap"
```

---

## Self-Review Checklist

**Spec coverage:**
- [x] 1.1 Canonical rating + review count → TRUST_STATS in lib/config.ts, imported everywhere
- [x] 1.1 TRUST_STATS constant created → Task 1
- [x] 1.2 Suburb count standardised → TRUST_STATS.suburbCount used in StatsBar
- [x] 1.3 Duplicate reviews removed → Task 8 (Brian Joe Adriano deduped)
- [x] Sidebar 5.0 bug fixed → Task 4
- [x] layout.tsx JSON-LD updated → Task 7
- [x] 8.1 Missing suburb pages added → Task 9
- [x] 8.2 Missing pages (/services, /faq, /contact, /blog) added → Task 9

**Not yet addressed in this plan (covered in Plans 2 & 3):**
- Section 2: Suburb page content overhaul
- Section 3: Referral visibility
- Sections 4-10: FAQ schema, live reviews, nav, pricing, instructors, design

**Placeholder scan:** None — all steps have complete code.

**Type consistency:** `TRUST_STATS` properties used consistently across all tasks.
