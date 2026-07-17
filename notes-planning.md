# Window Worx - Website Planning Notes


## Project Overview
- **Business:** Window Worx - Residential Window Cleaning
- **Domain:** window-worx.com
- **Established:** 2009
- **Location:** Waukee, Iowa
- **Phone:** (515) 987-9979
- **Email:** info@window-worx.com
- **Services:** Interior & exterior window cleaning, screen cleaning
- **Target Add-on:** Mid-rise commercial (4-5 story buildings)
- **Team:** 2 operators, family-owned & operated
- **Insurance:** Yes
- **Bonded:** Yes ✅
- **Awards:** Angie's List Super Service Award 2020
- **Current Site:** Single-page WordPress site, mostly 404s, needs full rebuild

## Tech Stack Decision
- **Static Site** (pure HTML/CSS/JS) — hosted on Netlify or Cloudflare Pages
- WordPress hosting can be repurposed or cancelled
- Reason: Maximum speed, security, SEO performance, zero maintenance

## Service Area
### Core Cities (strong targeting):
- Waukee, West Des Moines, Clive, Urbandale

### Metro Cities:
- Des Moines, Johnston, Grimes, Ankeny, Norwalk, Carlisle, Pleasant Hill, Altoona

### Extended Cities:
- Adel, Van Meter, Dallas Center, De Soto, Bondurant, Polk City, Huxley, Slater, Madrid, Woodward, Perry, Winterset, Indianola

## Color Scheme
- Primary: Charcoal (#1a1a2e) — modern, premium, trustworthy
- Secondary: Lime Green (#799f18) — matches original logo
- Accent: Amber (#f59e0b) — warmth, calls-to-action, highlights
- Font: Inter (sans-serif) — clean, modern, highly readable
- Backgrounds: White (#ffffff), Cool gray (#f1f5f9), Warm amber (#fffbeb)

## Pages to Build
1. index.html — Homepage
2. residential-window-cleaning.html — Residential services
3. interior-exterior-cleaning.html — Inside & out services
4. screen-cleaning.html — Screen cleaning & repair
5. mid-rise-commercial.html — Commercial/mid-rise services
6. service-areas.html — All service area cities
7. gallery.html — Before/after photos
8. about.html — About us / family story
9. reviews.html — Testimonials & reviews
10. faq.html — Frequently asked questions
11. contact.html — Free quote / contact
12. pricing-guide.html — Pricing guide
13. blog/ — Blog posts directory

## ✅ STATUS — Site Built (13 pages + blog + CSS + JS)
- [x] All 13 pages created with full content
- [x] Schema installed (LocalBusiness, Service, FAQ, AggregateRating, BreadcrumbList, Article, OfferCatalog)
- [x] Forms with Netlify data attributes (7 forms across site)
- [x] Mobile responsive CSS
- [x] JS (mobile menu, FAQ accordion, lightbox, ZIP auto-fill, scroll animations)
- [x] Logo placeholder SVG
- [x] **Phone button visibility** — Header phone now has background + padding; Hero phone button now has semi-transparent bg with backdrop blur
- [x] **Home link behavior** — `href="/"` confirmed working on web server (Netlify/MAMP); opens C: drive only when opened as local file
- [x] **CSS file fully restored** — Fixed truncation at end of style.css, added missing sections (`.checklist`, `.about-story`, `.values-grid`, `.value-item`, `.sidebar-card`, `.sticky-phone`, `.back-to-top`, responsive media queries, utility & print styles)

## ✅ DECISIONS MADE
- **Hours:** Mon-Fri 8am-5pm, Sat-Sun Closed ✅ (updated everywhere)
- **Address:** "Waukee, IA 50263" in schema ✅ (no street address for now — decide later)
- **Prices:** Ranges only ✅ — Small: $100–$175, Average: $175–$300, Large: $300–$450, XL: $400+ (per pricing-guide.html)
- **Brand colors:** Navy (#0a3661) + green (#799f18) accent — matching the actual logo ✅
- **Design approach:** Keep existing pure HTML/CSS/JS — refined CSS for premium/established vibe (max speed, zero bloat) ✅
- **Design refresh (Mar 2025):** Modern/premium vibe — charcoal (#1a1a2e) + lime green (#799f18) + amber (#f59e0b) color scheme, Inter sans-serif throughout, refined spacing, subtle animations, green accent buttons, glassmorphism header, micro-interactions throughout ✅
- **Google Review link:** https://g.page/r/CUNeHJdhUB8FEBM/review ✅
- **Angie's List:** https://www.angi.com/companylist/us/ia/waukee/window-worx-reviews-1.htm ✅

## 🚀 NEXT PHASE — LAUNCH
### Images needed (highest priority):



- [x] Hero photo (homepage) → `images/hero-windows-1200x800.webp`
- [x] Team photo (about page) → `images/jim_team.jpg` + `images/nolan_team.jpg`
- [x] Gallery photos → using actual work photos from your files
- [ ] Blog post images → `images/blog/*.webp`

### Before launch:
- [x] Get your Google Business Place ID (from GBP dashboard → Info → Place ID)
- [x] Replace GBP review link on reviews.html with actual Place ID
- [x] Replace Angie's List review link
- [x] **Replace placeholder GA4 ID** — ✅ Replaced with `G-706TBFHW4C` across all 16 HTML files
- [ ] Deploy to Netlify (drag folder → done)
- [ ] Set up 301 redirects from old WordPress URLs
- [ ] Submit sitemap to Google Search Console
- [ ] Connect custom domain

- [x] Bonded status (yes/no?)
- [ ] Confirm you're happy with the design before launch
- [ ] Upload your photos so I can swap placeholders
- [ ] Angie's List profile URL

## ✅ BLOG EXPANDED (Feb 2025)
Built 8 new blog posts → **10 total** (was 2). All with Article schema, meta tags, internal links, CTAs.

| # | Post | Target Keywords |
|:---:|---|:---:|
| 1 | `why-regular-window-cleaning-prevents-damage.html` | window cleaning prevents damage, hard water stains, window inspection |
| 2 | `window-cleaning-cost-guide.html` | window cleaning cost Iowa, how much to clean windows |
| 3 | `spring-window-cleaning-tips-iowa.html` | spring window cleaning tips, Iowa window cleaning |
| 4 | `best-window-cleaners-west-des-moines.html` | best window cleaners West Des Moines |
| 5 | `commercial-window-cleaning-des-moines.html` | commercial window cleaning Des Moines |
| 6 | `screen-repair-vs-replacement.html` | window screen repair, screen cleaning Iowa |
| 7 | `why-professional-window-cleaning-worth-it.html` | professional window cleaning benefits |
| 8 | `window-cleaning-mistakes-to-avoid.html` | window cleaning mistakes, DIY window cleaning tips |
| 9 | `how-often-clean-windows.html` | how often to clean windows (existing) |
| 10 | `diy-vs-professional-window-cleaning.html` | DIY vs professional window cleaning (existing) |

Also updated: `blog/index.html` listing + `sitemap.xml` with all new URLs.

## SEO Keywords by Page
- Home: window cleaning Waukee IA, residential window washing Waukee
- Residential: residential window cleaning Des Moines, house window washing
- Interior/Exterior: inside outside window cleaning near me, track cleaning
- Screen: window screen cleaning Iowa, screen repair
- Mid-Rise: commercial window cleaning Des Moines, low rise window cleaning
- About: family owned window cleaning Waukee since 2009
- Service Areas: window cleaning [city] IA (15+ cities)
- FAQ: window cleaning cost, how much to clean windows, free estimate
- Pricing: window cleaning prices Iowa, residential window washing rates

## Content Needed (TO DO)
- [x] Business physical address (for schema/GBP)
- [x] Hours of operation confirmation
- [ ] Brand colors confirmation
- [ ] Logo file (high-res)
- [ ] Photos: work photos, before/after, team photos
- [ ] Review content (copy from existing platforms)
- [ ] Pricing ranges (if any)
- [ ] Google Business Profile access details
- [x] Confirm bonded status
- [ ] Specific service details (track cleaning? chandeliers? etc.)

## Commercial/Mid-Rise Plan (deferred)
Will execute later — see notes from strategy discussion:

### Low-Effort Moves (Do These First)
- [ ] **Update GBP** — Add "Commercial Cleaning Service" as secondary category
- [ ] **GBP services** — Add "commercial window cleaning" to services list
- [ ] **Reviews** — Ask 1 commercial client/month for a review mentioning "commercial window cleaning"
- [ ] **Homepage link** — Already in nav ✅

### Content (2-3 Blog Posts)
- [ ] "Commercial Window Cleaning for Des Moines Property Managers"
- [ ] "How Often Should Storefronts Be Cleaned?"
- [ ] "Why Mid-Rise Buildings (4-5 Stories) Need Professional Window Cleaners"

### Free Listings
- [ ] Nextdoor Business Page
- [ ] Yelp for Business
- [ ] MerchantCircle
- [ ] Hotfrog
- [ ] Manta

### Networking
- [ ] Des Moines Chamber of Commerce
- [ ] BNI group

### 30-Day Plan
```
Week 1: Update GBP (add commercial category + services)
Week 1: Add "Free Commercial Quote" CTA on mid-rise page
Week 2: Write 1 blog post targeting commercial keywords
Week 3: List on 3 free directories (Nextdoor, Yelp, Manta)
Week 4: Ask 1 commercial client for a review mentioning "commercial window cleaning"
```

---

## Reddit Strategy (deferred)
Will plan later — potential subreddits: r/desmoines, r/Iowa, r/HomeImprovement, r/Homeowners

## Implementation Phases
### Phase 1: Foundation
- [ ] Build website structure
- [ ] Implement schema
- [ ] Add content & photos

### Phase 2: Launch
- [ ] Set up hosting (Netlify/Cloudflare)
- [ ] 301 redirects from old site
- [ ] Google Search Console
- [ ] Google Analytics

### Phase 3: Growth
- [ ] Google Business Profile optimization
- [ ] Citation building
- [ ] Review campaign
- [ ] Blog content
- [ ] Reddit strategy

## 🧪 SEO AUDIT (March 2025)
Full technical/content review. Overall score: **~8/10** (blog expanded from 2→10 posts)

### ✅ What's Done Well
- [x] Clean semantic HTML with proper heading hierarchy
- [x] Schema markup (LocalBusiness, OfferCatalog, BreadcrumbList, AggregateRating, Service)
- [x] Canonical tags on every page
- [x] Robots.txt + sitemap.xml correct
- [x] Mobile responsive (3 breakpoints: 992px, 768px, 480px)
- [x] Static site = fast performance (no frameworks, deferred JS)
- [x] Open Graph + Twitter Card meta on every page
- [x] 404.html has `noindex, follow`
- [x] Breadcrumb navigation on interior pages
- [x] Strong localized content targeting specific cities
- [x] FAQ page content ready for rich snippets

### 🔴 CRITICAL ISSUES (Fix ASAP)
- [x] **contact.html wrong `<title>` tag** — FIXED ✅
- [x] **Inconsistent logo references** (`logo.png` vs `logo.svg`) — FIXED ✅
- [x] **Missing FAQPage schema** on faq.html — ADDED ✅
- [x] **GA4 installed on all pages** — ✅ Replaced with real ID `G-706TBFHW4C`

### 🟡 SIGNIFICANT ISSUES

- [ ] **Contact & pricing pages got overwritten during GA4 edit** — Restored from memory ✅
- [x] **Blog is too thin** — only 2 posts. Need 8-12+ targeting long-tail local keywords ✅ NOW 10 POSTS (Feb 2025)
- [x] **Homepage H1 doesn't contain primary keyword** — FIXED ✅ (now: "Professional Window Cleaning in Waukee — Windows So Clean, You'll See the Difference")
- [x] **Missing `sameAs` in LocalBusiness schema** — ADDED ✅ (Google + Angie's List links)
- [x] **Hero image is CSS background-image** — FIXED ✅ (converted to `<img>` with `alt` text + `fetchpriority="high"` for LCP)
- [ ] **No content hub / city-specific landing pages** — create dedicated pages or blog posts for each of the 15+ service cities (e.g., "window-cleaning-ankeny.html")

### 🔵 MINOR / GOOD-TO-FIX

- [x] **AggregateRating inconsistency** — FIXED ✅ (both pages now say 4.9)
- [x] **BreadcrumbList schema missing on about.html** — ADDED ✅
- [x] **Add `loading="lazy"` to non-critical images** and `fetchpriority="high"` on hero image — FIXED ✅ (hero has `fetchpriority="high"`, gallery + content images have `loading="lazy"`)
- [x] **Sticky phone button double emoji** (`📞 📞`) — FIXED ✅ (index.html cleaned up)
- [ ] **Sitemap priority values** — blog posts at 0.4 should be higher relative to 404 page at 0.1.

### 📊 SEO SCORECARD

| Category | Score | Notes |
|---|---|---|
| Technical SEO | 7.5/10 | Strong foundation, GA4 installed ✅ |
| On-Page SEO | 7/10 | Titles good, schema in place |
| Content | 8/10 | Good core pages, blog expanded to 10 posts ✅ |
| Local SEO | 7/10 | Solid city targeting, schema present |
| Performance | 8/10 | Static site — very fast |
| User Experience | 7/10 | Clean design, good CTAs |

### 🎯 PRIORITY ACTION ITEMS (Ranked)

1. **Fix contact.html `<title>` tag** — most critical, actively harming SEO
2. **Add FAQPage schema** to faq.html — easy rich snippet win
3. **Install GA4** + connect Google Search Console — data-driven decisions
4. **Add `sameAs` links** to LocalBusiness schema (GBP, Angie's List)
5. **GA4 installed** — `G-706TBFHW4C` on all 16 pages ✅
6. ~~**Expand blog** — create 6-10+ posts targeting long-tail local keywords~~ ✅ DONE (10 posts)
6. **Fix homepage H1** to include "window cleaning Waukee" keyword
7. **Standardize logo** to one format (SVG) across all pages
8. **Create city-specific pages/blog posts** for all 15+ service cities
9. **Add `loading="lazy"`** to non-critical images for performance
10. **Fix AggregateRating inconsistency** across schema instances
