# Grizzly Business Systems Website
## Claude Code Implementation Blueprint

**Project:** Grizzly Business Systems (GBS)  
**Primary market:** East Texas small businesses  
**Launch focus:** Websites, ongoing website care, CRM/business systems, and CRM + POS  
**Status:** Source-of-truth implementation brief for initial website build  
**Important:** This document defines positioning, information architecture, content direction, product architecture, visual direction, and implementation constraints. It intentionally does **not** finalize numeric pricing.

---

# 1. Core Positioning

Grizzly Business Systems is a local small-business technology company.

The public-facing business is **not** an AI company, generic marketing agency, freelance coding shop, or SaaS startup.

GBS helps small businesses with:

- Professional websites
- Ongoing website care
- Basic CRM/business management systems
- CRM + POS/payment systems
- Business-specific workflows and tools built around how the business actually operates
- Practical systems guidance as part of the sales/intake relationship

The central idea:

> **Technology should fit the business — not force the business to fit the technology.**

However, this is **not** the homepage hero message. Most first-time prospects are more likely to arrive because they need a website. Lead with that need first, then introduce the systems differentiator lower on the page.

GBS should feel like a real local company run by someone who understands small-business operations firsthand.

---

# 2. Brand Positioning Rules

## GBS should feel

- Local
- Practical
- Personal
- Capable
- Plainspoken
- Modern
- Slightly rugged
- Professional without feeling corporate
- Technically strong without sounding like a software company trying to impress investors

## GBS should NOT feel

- Like an AI startup
- Like a generic digital marketing agency
- Like a national faceless SaaS company
- Like a cheap template website mill
- Like a freelance developer who will build anything forever
- Like a management consultant claiming expertise in every industry
- Like a corporate “digital transformation” firm

## Public language rules

Do not use phrases such as:

- AI-powered
- AI agents
- Vibe coding
- Digital transformation
- Cutting-edge solutions
- Revolutionary technology
- Full-service agency
- We can build anything
- Unlimited custom development
- Nationwide service

Do not use profanity in public-facing copy.

The internal advantage may be AI-assisted development and automation, but the customer buys the finished outcome.

---

# 3. Geographic Positioning

GBS should be positioned **East Texas first**.

Preferred local language:

> **Serving Tyler, Whitehouse, Longview, and businesses across East Texas.**

Do not market the company as nationwide at launch.

This does **not** mean GBS must reject remote clients. If a business from another state contacts GBS organically, that is acceptable. The website should simply focus its marketing on the local advantage.

The differentiator is:

> You can actually talk to the person building and supporting your system.

Avoid wording that artificially limits service radius while still keeping the website clearly local.

---

# 4. The Launch Business Structure

At launch, GBS does **not** need two equal top-level “doors” for consulting and technology.

Consulting should **not** have its own primary navigation page yet.

The launch product/service structure is:

## A. Websites + Website Care

A low-friction entry point for local businesses that simply need a better website.

A website project should be structurally presented as:

**One-time setup/build + ongoing monthly care**

Do not finalize or hardcode dollar amounts yet.

Website Care may include:

- Hosting
- Security
- Backups
- Technical updates
- Small ongoing changes/support
- Analytics
- Search visibility / basic ongoing SEO work

SEO belongs inside Website Care rather than being a primary navigation category.

## B. Grizzly CRM

This will be based on a stripped-down, generalized version of the existing BaresTKD CRM.

The CRM should remove martial-arts-specific assumptions and retain reusable small-business functionality.

Potential base features:

- Contacts
- Leads
- Customer/member records
- Notes
- Statuses
- Search/filtering
- Calendar/basic scheduling
- Forms/intake
- Basic reporting
- Business-specific fields/workflows where appropriate

This is the lower software tier.

## C. Grizzly CRM + POS

This is the more capable / more expensive base product.

It includes the CRM foundation plus payment and selling functionality.

Potential features:

- Products and services
- Point of sale
- One-time payments
- Recurring billing
- Checkout pages
- Event/registration checkout
- Transaction history
- Receipts
- Payment records
- More advanced calendar/workflow integration
- Stripe-connected payment infrastructure where appropriate

The website should make this product ladder easy to understand:

> **Start with the CRM. Add POS and payments when the business needs them.**

## D. Custom Workflows / Enhancements

Custom work sits **on top of one of the reusable bases**.

Do not position GBS as a generic custom software development shop.

Preferred idea:

> **We can adapt the system around the way your business actually works.**

Custom work should mean:

- Business-specific workflows
- Additional screens
- Industry-specific fields
- Internal process tools
- Reusable modules
- Connections between website, CRM, payments, scheduling, forms, and reporting

Avoid promises that imply permanent unlimited bespoke development.

---

# 5. BaresCRM as the Product Foundation

The existing BaresTKD CRM will be stripped and generalized into the starting point for the GBS CRM.

Claude Code must treat this as a **product architecture direction**, not as permission to blindly clone martial-arts-specific logic.

When creating the reusable GBS base, separate:

## Universal / reusable concepts

- Contacts
- Leads
- Customer records
- Notes
- Search
- Status
- Forms
- Payments
- Products/services
- Calendar
- Checkout
- Reporting
- Basic automation
- User/business settings

## Martial-arts-specific concepts that should NOT become core assumptions

- Belt ranks
- Testing
- Attendance credits
- Martial arts memberships
- Rank eligibility
- Dojo class types
- Parent/student-specific assumptions
- Taekwondo-specific schedules
- Testing dates
- Curriculum logic
- Martial arts terminology

Those may later become optional modules, but should not define the generic GBS foundation.

Do not publicly call this a “Grizzly Platform” until the reusable product actually exists in a sufficiently real form.

Until then, use language such as:

> **Built around the way your business works.**

---

# 6. Pricing Architecture — Layout Decision Only

Numeric pricing is intentionally deferred.

However, the website architecture must support the actual business model now.

## Pricing display model

Use **structured pricing cards**, not a generic “Contact us for pricing” wall.

Each service/product card should support:

- One-time setup/build amount
- Monthly recurring amount
- Short explanation of what each charge covers
- Included features
- Optional “starting at” behavior if later needed

Pricing must be stored in a simple centralized configuration/data object so amounts can be updated without rewriting page markup.

### Launch implementation

Build the pricing component now but place it behind a simple configuration flag such as:

`showPricing = false`

Until final numbers are chosen:

- Do not show fake placeholder dollar amounts publicly.
- Do not use “$XXX.”
- Do not invent pricing.
- The service cards should still explain the **setup + monthly** structure in non-numeric language.
- Once numbers are finalized, enabling pricing should require changing data/configuration rather than redesigning the section.

The site should be visually designed for this eventual structure:

1. Website + Care
2. Grizzly CRM
3. Grizzly CRM + POS
4. Custom Enhancements / scoped work

---

# 7. Recommended Site Map

Keep the launch site small and focused.

## Primary navigation

- Home
- Websites & Systems
- Our Work
- About
- Contact

Primary CTA button in navigation:

> **Tell Us About Your Business**

Do not add “Consulting” as a primary navigation item at launch.

Do not create a separate SEO page at launch.

---

# 8. Homepage Blueprint

## Section 1 — Hero

The hero should first capture the customer who simply needs a website.

### Recommended headline direction

> **Websites built for local businesses.**

### Supporting copy direction

> Professional websites, ongoing support, and business systems built to grow with the way you work.

Local reinforcement:

> Serving Tyler, Whitehouse, Longview, and businesses across East Texas.

### Primary CTA

> **Tell Us About Your Business**

Use **one dominant CTA** in the first viewport.

A secondary text link may be used if visually quiet, such as:

> See what we build

Do not place three competing buttons in the hero.

### Hero visual direction

Use a polished combination of:

- Existing GBS logo
- Website/device mockups
- CRM/dashboard UI imagery
- Real project screenshots where possible

Avoid generic stock photos of people pointing at laptops.

---

## Section 2 — Proof First

Before making large positioning claims, show evidence.

Suggested heading:

> **Real work for real businesses.**

Show 3–6 strong project cards as available.

Each project card should contain:

- Screenshot/image
- Business name
- Type of project
- One-sentence problem
- One-sentence result or functionality delivered
- Link to live site where appropriate

Prioritize live client work over conceptual mockups.

Possible categories:

- Website
- Website + forms
- CRM/system
- Payments/POS
- Internal workflow
- Connected website + business system

Do not fabricate clients, testimonials, statistics, or outcomes.

---

## Section 3 — The Deeper GBS Difference

Now introduce the systems idea.

Suggested headline:

> **Your website is only the beginning.**

Supporting direction:

> Most software asks your business to change the way it works. Grizzly takes the opposite approach. Start with what your business actually needs, then connect the tools around it.

Visual concept:

Website → CRM → Calendar → Payments → Checkout → Reporting

This may borrow conceptually from the original GBS “One System. All Connected.” material.

Possible short statement:

> **Technology should fit your business — not the other way around.**

This is a key brand line but should appear **below the website-focused hero**, not replace it.

---

## Section 4 — Services / Product Ladder

Use clear cards or a progressive diagram.

### Card 1 — Website + Care

Focus:

- Modern website
- Mobile-first
- Forms/contact flow
- Hosting
- Ongoing care
- Search visibility/basic SEO
- Someone local to call when something needs attention

Core message:

> Get the website right first, then keep it running without having to become your own web department.

### Card 2 — Grizzly CRM

Focus:

- Contacts
- Leads
- Customer records
- Notes
- Calendar
- Forms
- Basic reporting
- Business-specific organization

Core message:

> Stop piecing the business together across notes, spreadsheets, inboxes, and disconnected tools.

### Card 3 — Grizzly CRM + POS

Focus:

- Everything in CRM
- Products/services
- Payments
- Checkout
- Recurring billing
- Transactions
- Selling directly through connected workflows

Core message:

> Manage the customer relationship and the money in the same system.

### Card 4 — Custom Workflows

Focus:

- Extend the system
- Adapt screens/processes
- Add industry-specific workflows
- Solve specific internal pain points

Core message:

> When the off-the-shelf version almost works, Grizzly can adapt the system around the way your business actually operates.

Avoid the phrase “unlimited feature requests.”

---

## Section 5 — “We Use This Ourselves”

This should be an important trust section.

Suggested heading:

> **Built from running a real small business.**

Use Bares Taekwondo Fitness as the flagship origin/proof example.

Story direction:

Grizzly did not begin as a theoretical software idea. The founder was running a local brick-and-mortar business and became frustrated with paying for software that did not fit the way the business actually operated.

That led to building internal systems for things such as:

- Customer/member management
- Scheduling
- Memberships
- Payments
- Checkout
- Attendance
- Forms
- Business workflows
- Website connections

Important distinction:

Do not claim every piece of BaresTKD software is already generalized and ready to sell.

Instead:

> The experience of building and using these systems in a real operating business is what shaped Grizzly.

Where visually appropriate, show real screenshots from BaresTKD systems with sensitive/customer information removed.

Possible line:

> **We don't just build business systems. We run our own business on them.**

---

## Section 6 — How It Works

Keep this very simple.

### 1. Tell us what is not working

Short call/form. No bloated discovery process.

### 2. Start with what you actually need

Website, CRM, payments, or a combination.

### 3. Build from there

Add functionality when it solves a real problem.

This communicates modular growth without pretending GBS already has a mature SaaS platform.

---

## Section 7 — Local Relationship

Suggested heading:

> **Local service. Real support.**

Copy direction:

GBS is based in East Texas and built around direct relationships with small-business owners.

Emphasize:

- Direct communication
- No giant support queue
- No anonymous agency handoffs
- Someone who understands the system can actually talk to the customer

Avoid attacking competitors by name.

---

## Section 8 — Final CTA

One strong CTA.

Suggested heading:

> **What are you trying to fix?**

Supporting copy:

> Whether you need a better website or your current tools are making the business harder than they should, tell us what is going on.

Button:

> **Tell Us About Your Business**

---

# 9. Websites & Systems Page

This page should go deeper than the homepage.

Suggested order:

1. Website overview
2. Website Care
3. Grizzly CRM
4. Grizzly CRM + POS
5. Custom workflows
6. How systems connect
7. Pricing structure component (hidden until configured)
8. CTA

## Opening copy direction

> **Start with what you need. Add the rest when it makes sense.**

Explain that not every customer needs a CRM or POS.

A business may only need:

- A website
- Website + care
- CRM
- CRM + POS
- A connected combination

Do not create artificial package dependencies that force every customer into the biggest plan.

---

# 10. Our Work Page

This page matters heavily.

It should contain:

- Website portfolio
- Software/system screenshots
- Short case-study cards
- Live links where appropriate
- BaresTKD as an internal system case study
- Future client system examples

## Case study format

Keep each one short:

**Business**  
**Problem**  
**What GBS built**  
**Result / what became easier**

Only state measurable outcomes if they are real and documented.

Do not invent review counts, conversion lifts, revenue increases, or time savings.

---

# 11. About Page

Do not write a generic corporate founder biography.

The key origin story:

> **I got tired of paying for software that didn't work the way my business worked, so I started building my own.**

Build from there.

Explain:

- The founder operates a real East Texas small business.
- Building tools for that business exposed how often small companies are forced into software that is too expensive, too complicated, or built around someone else's workflow.
- Grizzly exists to offer a more practical alternative.
- The company starts with the real problem, not with a pre-decided software stack.

Tone should remain grounded and modest.

Do not imply expertise in every business category.

---

# 12. Contact / Intake Page

Keep intake conversational.

Suggested fields:

- Name
- Business name
- Email
- Phone
- Website (optional)
- What do you need help with?
- “What is driving you crazy right now?” or similarly conversational long-text field
- Preferred contact method (optional)

Possible need selector:

- I need a website
- I need help with my current website
- I need a CRM/business system
- I need payments/POS
- I need something custom
- I am not sure yet

Do not require financial documents or sensitive information before the first conversation.

The initial conversation may be positioned as a free short conversation to determine fit.

Do not market that call as a separate consulting product.

---

# 13. GBS Logo and Visual Identity

## Existing logo is mandatory

Use the **existing approved GBS / Grizzly Business Systems logo asset**.

Do not:

- Redraw the logo
- Reinterpret the bear
- Generate a new bear mark
- Replace the logo with text
- Change letter proportions
- Invent a new GBS icon
- Change brand colors arbitrarily

The logo uses the established Grizzly identity with the bear-integrated “G,” bold “GBS” lettering, and full “GRIZZLY BUSINESS SYSTEMS” name beneath/alongside depending on the existing asset variation.

If multiple historical logo files are present in the project, use the **owner-approved current logo asset** rather than selecting a new variation based on taste.

## Logo placements

Use the logo in:

- Header/navigation
- Footer
- OpenGraph/share image where appropriate
- Favicon/app-icon treatment if a suitable simplified existing asset is available
- CRM/product mockups where branding is shown

Do not create a favicon by crudely cropping the full horizontal logo. Use a clean existing bear/G mark or create the favicon only from an approved brand asset.

---

# 14. Visual Design Direction

Use the existing GBS brand palette as the source of truth.

General visual feel:

- White / warm off-white backgrounds
- Olive / heather green
- Warm brown
- Sand / tan
- Charcoal / near-black text
- Light neutral borders
- Plenty of whitespace

Avoid:

- Neon colors
- Blue SaaS gradients
- Purple AI branding
- Glassmorphism everywhere
- Overly dark cyber/tech look
- Corporate stock imagery
- Excessive rounded “startup” cards
- Animated gimmicks that slow the site

Typography should be:

- Strong
- Clean
- Readable
- Slightly bold/rugged in headings
- Highly legible in body copy

Use the logo colors to derive the exact interface palette rather than inventing unrelated hex values.

---

# 15. UX Rules

- Mobile-first
- Fast load times
- Clear click targets
- Minimal navigation
- One primary CTA per major viewport/section
- Sticky header is acceptable if subtle
- No giant popups on entry
- No chat widget at launch unless explicitly added later
- No autoplay video
- No fake urgency
- No countdown timers
- No “limited spots” gimmicks
- No excessive animations

Animations, if used:

- Small fades
- Gentle slide/scale
- Subtle hover states

Performance matters more than visual tricks.

---

# 16. SEO / Local Search Foundations

SEO should be implemented as part of the website foundation and Website Care positioning, not marketed as a standalone headline service.

Initial site should include:

- Semantic HTML
- Correct title/meta descriptions
- OpenGraph metadata
- LocalBusiness / Organization structured data where appropriate
- Sitemap
- robots.txt
- Canonical URLs
- Proper heading hierarchy
- Descriptive alt text
- Strong mobile performance
- Fast image delivery
- East Texas location language used naturally
- Service-area references without keyword stuffing

Potential local terms may include:

- Tyler TX web design
- East Texas web design
- small business websites Tyler TX
- business CRM East Texas
- small business systems Tyler TX

Do not stuff these unnaturally into every section.

---

# 17. Technical Implementation Direction

Claude Code should favor a clean, maintainable implementation.

Unless the existing project dictates otherwise:

- Component-based structure
- Central content/config files
- Central service/product data
- Central pricing configuration
- Reusable CTA component
- Reusable project/case-study cards
- Reusable product/service cards
- Reusable logo component
- Responsive image handling
- Accessible form labels
- Basic form validation
- Clear environment configuration

Avoid overengineering.

The first version of the marketing site does not need:

- User accounts
- Client portal
- CRM login
- Payment processing
- Complex CMS
- AI chat
- Blog engine
- Multitenancy

Those are separate product concerns.

---

# 18. Suggested Data / Config Model

Use a simple source-of-truth structure so content can be changed without rewriting components.

Example conceptual structure:

```js
siteConfig = {
  businessName: "Grizzly Business Systems",
  serviceArea: [
    "Tyler",
    "Whitehouse",
    "Longview",
    "East Texas"
  ],
  primaryCTA: "Tell Us About Your Business",
  showPricing: false
}

services = [
  {
    id: "website",
    name: "Website + Care",
    setupPrice: null,
    monthlyPrice: null,
    features: []
  },
  {
    id: "crm",
    name: "Grizzly CRM",
    setupPrice: null,
    monthlyPrice: null,
    features: []
  },
  {
    id: "crm-pos",
    name: "Grizzly CRM + POS",
    setupPrice: null,
    monthlyPrice: null,
    features: []
  },
  {
    id: "custom",
    name: "Custom Enhancements",
    setupPrice: null,
    monthlyPrice: null,
    features: []
  }
]
```

This is illustrative, not mandatory syntax.

---

# 19. Content / Claims Guardrails

Claude Code must not invent:

- Customer names
- Testimonials
- Case-study results
- Revenue gains
- Conversion percentages
- Years in business
- Client counts
- Pricing
- Guarantees
- Service areas beyond what is specified
- Certifications
- Partnerships
- Awards

Use placeholders or clearly marked TODOs where real content/assets are not yet available.

---

# 20. Important Business Constraints for Future Development

These rules should remain in the project documentation because they affect future decisions.

1. **Do not market AI.** AI may reduce internal labor, but it is not the product promise.
2. **Stay East Texas-first.** Remote work may happen organically.
3. **Websites are the primary acquisition entry point.**
4. **Website Care is part of the intended recurring model.**
5. **Pricing uses setup + recurring structure.**
6. **Do not invent numeric pricing until the owner finalizes it.**
7. **Consulting is not a separate launch door/page.**
8. **Do not pretend there is a mature “Grizzly Platform” before the reusable base exists.**
9. **GBS CRM will come from a generalized/stripped version of BaresCRM.**
10. **CRM + POS is the higher software base.**
11. **Custom work extends reusable bases rather than becoming endless one-off software.**
12. **Show real proof early.**
13. **Bares Taekwondo Fitness is the flagship internal proof case.**
14. **Use the existing GBS logo. Do not redesign it.**
15. **No public profanity.**
16. **Avoid corporate jargon.**
17. **One clear primary CTA.**
18. **Do not force every client into every product.**
19. **SEO lives inside website/build/care delivery, not as a headline business identity.**
20. **Human-to-human service remains important. Do not put AI between GBS clients and their customers by default.**

---

# 21. Recommended Homepage Order — Final

For clarity, the initial homepage should be built in this order:

1. **Header / GBS logo / navigation**
2. **Website-focused hero**
3. **Proof / real work**
4. **“Your website is only the beginning” systems section**
5. **Service/product ladder**
   - Website + Care
   - CRM
   - CRM + POS
   - Custom workflows
6. **BaresTKD / “we run our own business on it” proof**
7. **How it works**
8. **Local service / direct support section**
9. **Final CTA**
10. **Footer**

---

# 22. Initial Build Priority

## Phase 1 — Marketing site

Build:

- Home
- Websites & Systems
- Our Work
- About
- Contact
- Responsive header/footer
- Contact/intake form UI
- Real asset slots
- Portfolio/case study component
- Pricing component with `showPricing = false`
- Local SEO foundation
- Existing GBS logo integration

## Phase 2 — Content population

Add:

- Real client screenshots
- Live site links
- BaresTKD system screenshots
- Final business contact information
- Final copy polish
- Final pricing once approved

## Phase 3 — Product work, separate from marketing-site build

Begin generalizing BaresCRM into:

- Grizzly CRM base
- Grizzly CRM + POS base

Do not let Phase 3 block the public marketing site.

---

# 23. Working Definition of Success

The site should make a local small-business owner think:

> “These people can build me a good website, I can actually call them when I need help, and if my business needs something more complicated later, they can probably handle that too.”

It should **not** require the visitor to understand CRM architecture, software development, AI, automation, or SaaS.

Start simple.

Show proof.

Earn trust.

Then reveal the deeper capability.
