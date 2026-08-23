# Sub-2:00 Half Marathon — 20 Sep 2026

A single-page training plan tracker. Static, no build step, no dependencies.

## Files

| File | What it is |
|---|---|
| `data.js` | **All the numbers and the whole plan.** The only file that changes. |
| `index.html` | Renders `data.js`. Layout and styling. Rarely needs touching. |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is. |

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

Everything lives in the `weeks` array in `data.js`. Each day:

```js
{ date: "2026-09-02", dow: "Wed", type: "workout",
  title: "5 × 1 km @ 5:15–5:20", detail: "400 m jog recovery.", key: true }
```

`type` is one of `rest` · `easy` · `workout` · `long` · `race` — it drives the colour of
the tag. `key: true` highlights a session as one that matters more than the others.
