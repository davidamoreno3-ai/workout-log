# Workout Log

A private, local-only logger for a 6-day training split. Runs entirely in your browser — no server, no account, no data leaving your device.

## The split

It ships with this week, which you can then edit to taste:

| Day | Session |
| --- | --- |
| Tuesday | Legs 1 |
| Wednesday | Push 1 |
| Thursday | Pull 1 (+ cardio) |
| Friday | Legs 2 |
| Saturday | Push 2 (+ cardio) |
| Sunday | Pull 2 |

The schedule is only a default. It opens on whatever the weekday calls for, and tapping another day switches to it — that choice is then remembered for that date, whether or not you log anything, so closing the app or moving around the calendar won't put you back on the scheduled session.

## Calendar

Every session is filed under a specific date. Tap the date in the header to open a month calendar:

- A dot under a day means a workout is logged on that date.
- Tapping a day loads it — the session you chose for that date, else whatever you logged there, else a fresh one for whichever day of the split that weekday calls for. Picking a rest day keeps the session already on screen, so you can still file a workout there.
- The date in the header turns amber whenever you're on a day other than today, and **Jump to today** brings you back.

## Logging a session

- Tap an exercise to expand it. Each set has its own weight and reps, so ramps and drop-offs record properly.
- **All sets** fills every set with one weight — the usual case for straight sets. Adjust individual sets underneath afterwards; the field then reads *Mixed* until they agree again.
- The number beside a collapsed exercise is its weight, or a range like `90–120` when the sets differ.
- Rate each set 0–5 RIR (reps in reserve). Red = 0–1, green = 2–3 (the target), blue = 4–5.
- Exercises marked left/right get a separate RIR rating per side.
- **Copy log** produces a plain-text summary you can paste anywhere.
- **Save session** stores the session and carries each exercise's opening weight forward, so the next time you open that day it pre-fills with where you started last time rather than where you ramped to.

Entries autosave as you type, so switching days or dates, or closing the tab mid-workout, doesn't lose anything. Clearing every entry for a date removes that session, and its dot, again.

## Changing the program

The built-in split is only a starting point — every edit below sticks for that day of the week, in every future session.

Inside an expanded exercise:

- **Name** — for when you swap a movement or your gym calls the machine something else. Clear the field to get the built-in name back; the placeholder always shows what that was.
- **Target** — the rep or time range shown under the exercise name.
- **Measure** — whether the exercise is counted in **Reps** or **Time**. On Time, the set boxes are labelled `sec` and the copy log reads `1. 50 sec @ BW`. The Plank ships on Time; anything else can be switched.
- **Rest** — rest between sets for that exercise: 2:00, 1:30, 1:00 or :30. When every exercise you logged shares a rest, the copy log states it once at the top; when they differ, each exercise carries its own (`T-Bar Row — rest 1:00:`).
- **+ Set** / **− Set** — adds or drops a set. `− Set` removes the last one and stops at one set.

**Edit exercises**, below the list, switches the list into edit mode:

- **↑ / ↓** move an exercise up or down the day's order.
- **×** removes it from that day.
- **+ Add exercise** appends a blank one and opens it ready to be named.

Removing an exercise only takes it off the plan — sessions you already logged keep their data, and it reappears if you add the exercise back. Likewise, shortening an exercise to fewer sets never truncates a session you logged with more.

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

- The service worker goes to the network first and falls back to its cache, so a new version lands the next time you open the app with a connection, and the app still opens without one. The version it's running is printed at the very bottom.
- Installed apps can keep storage separate from the browser that installed them, so a session logged in Safari may not show up in the Home Screen copy. Log a set after installing to see which way your phone behaves, and use **Copy log** for anything you'd hate to lose.

## Data storage

Your edited program (`workout-plan`), weights (`workout-weights`), the session chosen per date (`workout-picks`) and the last 200 sessions (`workout-sessions`) are kept in the browser's `localStorage`, keyed by date. When the cap is hit the oldest dates are dropped. Nothing is uploaded anywhere, and the data is tied to the specific browser/device/profile you use — clearing site data deletes it.
