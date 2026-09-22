# Journey Mechanical Ltd — Website

A static, no-build website for Journey Mechanical Ltd (plumbing, gas fitting &
heating, Lower Mainland, BC). Plain HTML/CSS/JS — no framework, no build
step, deploy anywhere that serves static files.

## Structure

```
index.html          Home
services.html        Plumbing / Gas Fitting / Heating / New Construction detail
about.html            Company story, values, credentials
contact.html          Quote request form, contact info, hours, FAQ
css/style.css         All styles
js/main.js            Nav, scroll reveal, FAQ accordion, form handling
assets/logo.png        Logo (background removed), plus favicon/apple-touch-icon
robots.txt / sitemap.xml
```

## Previewing locally

Any static file server works, e.g.:

```
python3 -m http.server 8080
```

then open `http://localhost:8080/`.

## Deploying

Drag-and-drop or connect this folder to any static host — Netlify, Vercel,
Cloudflare Pages, or GitHub Pages all work with zero configuration since
there's no build step.

## Contact form

The quote form on `contact.html` submits to
[FormSubmit](https://formsubmit.co) at `info@journeymechanical.ca` — no
backend required. **The first submission after launch will trigger a
confirmation email from FormSubmit to that inbox; someone needs to click the
activation link in it before the form will deliver messages.** A hidden
honeypot field (`_honey`) provides basic spam protection.

## Before you launch — things to update

- **Business licence / gas fitter certification numbers** — placeholders
  say "add before launch" in the footer of every page (search for
  `BC Gas Fitter`).
- **Social links** — Facebook/Instagram icons in the footer currently link
  to `#`. Add real profile URLs once they exist.
- **Domain** — `sitemap.xml` and the `<link rel="canonical">` tags use a
  placeholder `journeymechanical.ca`. Update both once the real domain is
  set.
- **Logo / photos** — `assets/logo.png` is your submitted logo with the
  background removed. If you get real project photos later, they can slot
  into the service pages (currently icon-based, no stock photos used).
- **Google Maps embed** — the service-area map on the home and contact
  pages embeds a generic "Lower Mainland, BC" search. Swap in your exact
  business address once you have one to display.
- **Business hours** — currently Mon–Fri 7am–6pm, Sat by appointment, Sun
  closed (contact.html). Update if different.
