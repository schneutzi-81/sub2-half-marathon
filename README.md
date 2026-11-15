# Sub-2:00 Half · Sub-4:00 Marathon

A single-page training tracker built from Garmin Connect data. Static, no build step, no dependencies.

Live at **https://schneutzi-81.github.io/sub2-half-marathon/**

What the page shows:

- **What to do next.** Today's or the next session, worked out from today's date against the schedule in `data.js`.
- **Both goals vs. Garmin.** The gap between Garmin's race prediction and each goal, with the trend since August.
- **Status.** Training status, readiness, HRV, VO2 max, load balance and weekly volume against what each goal needs.
- **Roadmap.** Rebuild (to Jan 2027) → sub-2 half (spring 2027) → sub-4 marathon (autumn 2027).
- **Schedule and races.** Three weeks day by day (Garmin Coach sessions plus adjustments), and every race in the Garmin calendar with results.

## Files

| File | What it is |
|---|---|
| `data.js` | **All the numbers and the whole plan.** The only file that changes. |
| `index.html` | Renders `data.js`. Layout and styling. Rarely needs touching. |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is. |
| `manifest.webmanifest`, `apple-touch-icon.png`, `icon-*.png` | Home-screen app name and icon. |

## Put it on your iPhone home screen

It opens full screen, with its own icon, just like an app.

1. Open **https://schneutzi-81.github.io/sub2-half-marathon/** in **Safari**. It has to be Safari (on iOS 16.4+ Chrome works too, via its Share button).
2. Tap the **Share** button (the square with an arrow pointing up).
3. Scroll down and tap **Add to Home Screen**.
4. Keep the name **Sub-2** and tap **Add**.

The icon on your home screen always loads the latest version from GitHub Pages, so nothing needs reinstalling after an update. Ticked-off sessions are stored on the phone itself.

On Android: open the link in Chrome → ⋮ menu → **Add to Home screen**.

## Run it locally

Open `index.html` in a browser. That's it — it works straight off the filesystem.

## Deploy to GitHub Pages

```bash
cd sub2-half-marathon
git init
git add .
git commit -m "Sub-2 half marathon plan"
git branch -M main
git remote add origin https://github.com/<you>/sub2-half-marathon.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save.**

Live in a minute or two at `https://<you>.github.io/sub2-half-marathon/`.

> Make the repo **private** if you'd rather not publish your resting heart rate to the
> internet. Private repos need GitHub Pro for Pages; otherwise just run it locally.

## Updating it

GitHub Pages is static — the page cannot reach Garmin itself (auth + CORS both block it).
So updates go through Claude, which has read access to your Garmin account:

1. Open the page, hit **Copy prompt** at the bottom.
2. Paste it to Claude.
3. Claude re-pulls Garmin, rewrites `data.js`, and adjusts the remaining weeks if the
   training has drifted from plan.
4. `git add data.js && git commit -m "update" && git push` — Pages redeploys itself.

Worth doing after each Sunday long run — that's when the picture actually changes.

## Ticked-off sessions

Checkboxes persist in `localStorage`, per browser. They are **not** in `data.js` and don't
sync between your phone and laptop. Rewriting `data.js` doesn't wipe them.

## Editing the plan by hand

Day-by-day sessions live in the `schedule` array in `data.js` and are grouped into Mon–Sun weeks automatically. Each day:

```js
{ date: "2026-11-24", dow: "Tue", type: "workout", src: "plan",
  title: "9 km with 5 × 1 km @ 5:10–5:15", detail: "2 min jog between.", key: true }
```

`type` is one of `rest` · `easy` · `workout` · `long` · `race` · `cross`. `src` is `coach` (Garmin Coach), `adj` (adjusted) or `plan` (suggested) — it drives the colour of
the tag. `key: true` highlights a session as one that matters more than the others.


## Daily training interface

The mobile interface has Today, Week and Progress views. `app.js` renders the existing
`data.js` schema, and `app.css` contains responsive styles. `sw.js` caches the plan for
offline use after an online visit. Online requests refresh the cached files.

Session outcomes, effort, soreness, actual minutes and date changes are saved in this
browser under `sub2.training.v2`. Existing checklist completions are migrated. Use
Progress → Export backup / Restore a backup to transfer notes; restores merge by session.
Session keys use the original date and occurrence on that date, so keep dates stable
when refreshing the plan. Moving a session does not change its key or Garmin workouts.
Do not reorder multiple sessions sharing an original date when refreshing data.

Time-limited options are easy-run replacements, not equivalent versions of quality
workouts. Recovery metrics always display the Garmin snapshot timestamp. There is no
live Garmin connection or automatic activity matching.

For development, serve the directory with a static HTTP server. No build step is needed.
Bump the cache name in `sw.js` when changing the application shell.
