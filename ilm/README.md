# ILM — Online Tutoring Platform

> علم · knowledge · education

A web-based tutoring platform connecting tutors and students with live sessions, whiteboard tools, and student management.

## Features

- Animated charcoal splash screen
- Tutor dashboard with stats, session tracking, and earnings
- Student roster with progress tracking
- Live whiteboard with drawing tools
- Messaging between tutors and students
- Scheduling and session management
- Settings and profile management

## Project Structure

```
ilm/
├── index.html          # App shell + splash screen
├── css/
│   ├── main.css        # Design system, layout, components
│   └── splash.css      # Charcoal animation styles
├── js/
│   ├── app.js          # Routing, navigation, splash transition
│   └── pages.js        # Page HTML templates
└── README.md
```

## Getting Started

No build tools needed. Just open `index.html` in a browser, or serve with any static server:

```bash
# Python
python3 -m http.server 3000

# Node
npx serve .
```

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your site will be live at `https://yourusername.github.io/ilm`

## Roadmap

- [ ] Live video integration (WebRTC or Daily.co)
- [ ] Real backend (Node/Express or Supabase)
- [ ] Parent portal and kid profiles
- [ ] Payment integration (Stripe)
- [ ] Calendar sync
- [ ] Mobile app

## Tech Stack

- Vanilla HTML, CSS, JavaScript (no framework)
- Google Fonts: Playfair Display + DM Sans
- No dependencies, no build step

---

Built with ❤️ for accessible education.
