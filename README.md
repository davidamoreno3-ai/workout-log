# Workout Log

A private, local-only logger for a fixed 6-day training split. Runs entirely in your browser — no server, no account, no data leaving your device.

## The split

| Day | Session |
| --- | --- |
| Tuesday | Legs 1 |
| Wednesday | Push 1 |
| Thursday | Pull 1 (+ cardio) |
| Friday | Legs 2 |
| Saturday | Push 2 (+ cardio) |
| Sunday | Pull 2 |

It opens on today's session and you can tap any other day to switch.

## Calendar

Every session is filed under a specific date. Tap the date in the header to open a month calendar:

- A dot under a day means a workout is logged on that date.
- Tapping a day loads it — whatever you logged there, or a fresh session for whichever day of the split that weekday calls for. Picking a rest day keeps the session already on screen, so you can still file a workout there.
- The date in the header turns amber whenever you're on a day other than today, and **Jump to today** brings you back.

## Logging a session

- Tap an exercise to expand it, then enter the weight once and reps per set.
- **Name** renames the exercise — for when you swap a movement or your gym calls the machine something else. The rename sticks for every session and shows up in the copy log. Clear the field to get the built-in name back.
- Rate each set 0–5 RIR (reps in reserve). Red = 0–1, green = 2–3 (the target), blue = 4–5.
- Exercises marked left/right get a separate RIR rating per side.
- **Copy log** produces a plain-text summary you can paste anywhere.
- **Save session** stores the session and carries each weight forward, so the next time you open that day it pre-fills with what you last lifted.

Entries autosave as you type, so switching days or dates, or closing the tab mid-workout, doesn't lose anything. Clearing every entry for a date removes that session, and its dot, again.

## Running it

Open `index.html` in a browser, or serve the folder statically:

```
python3 -m http.server 8080
```

then visit `http://localhost:8080`. Serving it (rather than opening the file directly) is what lets the service worker register.

## Putting it on a phone's Home Screen

It ships a web app manifest, icons and a service worker, so it installs as a standalone app — no browser chrome, its own icon in the app switcher, and it opens with no signal.

1. Host it over HTTPS. GitHub Pages serves this repo as-is: **Settings → Pages → Deploy from a branch**, pick `main` and the `/ (root)` folder, then open `https://<user>.github.io/workout-log/`.
2. **iPhone:** open that URL in Safari, then Share → *Add to Home Screen*.
   **Android:** open it in Chrome, then ⋮ → *Add to Home screen* / *Install app*.

Two things worth knowing:

- The service worker serves the cached copy first and refreshes in the background, so a new version lands on the launch *after* the one that fetched it. Open it twice to pick up a change.
- Installed apps can keep storage separate from the browser that installed them, so a session logged in Safari may not show up in the Home Screen copy. Log a set after installing to see which way your phone behaves, and use **Copy log** for anything you'd hate to lose.

## Data storage

Weights (`workout-weights`), renamed exercises (`workout-names`) and the last 200 sessions (`workout-sessions`) are kept in the browser's `localStorage`, keyed by date. When the cap is hit the oldest dates are dropped. Nothing is uploaded anywhere, and the data is tied to the specific browser/device/profile you use — clearing site data deletes it.
