/* ============================================================
   sub2-half-marathon — LIVE DATA  (schema v2)
   ------------------------------------------------------------
   This is the ONLY file that needs updating.
   Ask Claude to re-pull Garmin and rewrite it; index.html
   renders whatever is in here and works out "what's next"
   from today's date. Do not edit index.html to change numbers.

   Times are in seconds wherever the page does maths with them.
   ============================================================ */

window.TRAINING_DATA = {

  meta: {
    lastUpdated: "2026-11-14 18:40 CET",
    source: "Garmin Connect (Forerunner 970) · watch last synced 2026-11-14 ~18:10 CET"
  },

  /* --- Follow-along videos. Tips and schedule days reference them by key. --- */
  videos: {
    strength10: { title: "10-min bodyweight strength for runners", min: 10, url: "https://www.youtube.com/watch?v=dHUqORJAZCI" },
    legsCore12: { title: "12-min lower body & core for runners",   min: 12, url: "https://www.youtube.com/watch?v=4tV3zgVAWuw" },
    strength22: { title: "22-min runner strength (beginner bodyweight + core stability)", min: 22, url: "https://www.youtube.com/watch?v=mLQx5nnr0EI" },
    core10:     { title: "10-min core workout for runners",         min: 10, url: "https://www.youtube.com/watch?v=eiF8aY-MTqU" },
    bulgarian:  { title: "How to do Bulgarian split squats",         min: 5,  url: "https://www.youtube.com/watch?v=VPhhE6bBzZE" },
    stretch7:   { title: "7-min post-run stretch",                    min: 7,  url: "https://www.youtube.com/watch?v=RtO-EDVQpgI" }
  },

  /* --- Daily tips. The page shows three a day, rotating by date, so each
     comes back about once a week. cat: run | recovery | strength | fuel | mobility | sleep | mind --- */
  tips: [
    { cat: "run",      title: "Easy means easy",                 body: "Your 'base' runs are at HR 146–152. Keep them under ~145, even if that means 6:30 /km. That's where the aerobic base for the marathon comes from." },
    { cat: "run",      title: "Strides twice a week",            body: "After an easy run: 4–6 × 20 s fast and relaxed, with a full walk back. It's the cheapest way to get the speed Garmin says is missing." },
    { cat: "run",      title: "Cadence: 160+",                   body: "You've gone from 150 to 157–159. On easy runs, aim for 162–165 with shorter, quicker steps. It means less braking and less load on your knees and shins." },
    { cat: "run",      title: "Three runs is the minimum",        body: "Every week with three runs beats one hero week of 37 km. That consistency is what's been missing since August, not motivation." },
    { cat: "run",      title: "Even pacing wins",                 body: "In races and long runs, make the first 3 km your slowest. Your best results (Bramfeld II, the Hammer Lauf half) came from even splits." },
    { cat: "run",      title: "Hills count as speedwork",         body: "Once a week, 6–8 × 30 s uphill hard with a walk down. That's strength and power for the legs, with less impact than track intervals." },
    { cat: "recovery", title: "Check readiness in the morning",   body: "Under 40: run easy or rest. 40–65: train as planned. Over 65: the hard session can be properly hard. That's better than going by feel after a long work day." },
    { cat: "recovery", title: "No two hard days in a row",        body: "Threshold, intervals and long runs each need a calm day after them. Swimming and easy cycling are fine on those days." },
    { cat: "recovery", title: "Watch your resting HR",            body: "Your normal is 57–58. If it's 5+ beats higher in the morning, you're coming down with something or under-recovered. Make it an easy day." },
    { cat: "strength", title: "10 minutes, three times a week", videos: ["strength10", "legsCore12"],   body: "Calf raises, split squats, glute bridges, side plank. Strong calves and hips protect your Achilles and knees once you build to 40–60 km a week." },
    { cat: "strength", title: "Do Garmin Coach's strength days", videos: ["strength22", "core10"],  body: "The Base Builder and Core Circuit sessions aren't optional. For the marathon goal, they're injury insurance." },
    { cat: "strength", title: "Single-leg strength", videos: ["bulgarian"],              body: "Running is a series of one-legged jumps. 3 × 8 Bulgarian split squats per leg, twice a week, is worth more than any new shoe." },
    { cat: "fuel",     title: "Practise long-run fuelling",       body: "Take a gel or a few sips of sports drink on every run over 75 min. Your gut needs to learn it before the marathon. Never try anything new on race day." },
    { cat: "fuel",     title: "Breakfast before hard sessions",   body: "Have something light with carbs 1–2 hours before threshold or interval sessions (toast, a banana, porridge). An empty tank makes the session worse, not better." },
    { cat: "fuel",     title: "Protein after training",           body: "Have a proper meal with protein within an hour or two: quark, eggs, fish, lentils. That's when the training actually turns into fitness." },
    { cat: "fuel",     title: "Drink before you're thirsty",      body: "Have a glass of water with every meal and before every run. In winter you notice thirst less, but you still lose fluid." },
    { cat: "mobility", title: "Five minutes after every run", videos: ["stretch7"],     body: "Calves against a wall, hip flexors in a lunge, hamstrings lying down. 30–45 s each, before you sit down." },
    { cat: "mobility", title: "Warm up before fast running",      body: "10 min easy jogging, then leg swings, A-skips, 2 strides. Never go into a threshold rep cold. Most strains happen in the first fast minute." },
    { cat: "sleep",    title: "Sleep is training too",           body: "Your best readiness scores follow good nights. 7.5–8 h before key sessions does more for 5:38 /km than an extra run." },
    { cat: "sleep",    title: "Wear the watch at night",         body: "Without sleep data, readiness and HRV are just guessing. That happened in September, and the plan was steering blind." },
    { cat: "mind",     title: "Plan the week on Sunday",         body: "Put the runs in your calendar like customer meetings. With travel and presales trips, an unplanned run is a run that doesn't happen." },
    { cat: "mind",     title: "Have a travel version",           body: "Hotel week? 30 min easy from the door, or treadmill intervals. Three short runs keep the base. Zero runs undo it." }
  ],

  /* --- The two goals. pred = Garmin's current race prediction. --- */
  goals: [
    { id: "hm", label: "Sub-2:00 Half Marathon", distanceKm: 21.0975, goalSec: 7199,  predSec: 7418,  prSec: 7491,  prNote: "Hammer Lauf Hamburg · 19 Apr 2026",
      when: "Spring 2027 — a flat half in April (Hammer Lauf Hamburg ran on 19 Apr this year)" },
    { id: "m",  label: "Sub-4:00 Marathon",       distanceKm: 42.195,  goalSec: 14399, predSec: 16849, prSec: 15889, prNote: "Mitteldeutscher Marathon · 12 Oct 2025",
      when: "Autumn 2027 — after the sub-2 half has proven the speed" }
  ],

  /* --- Garmin race predictions (weekly samples). [date, 5K, 10K, HM, M] in seconds --- */
  predictions: {
    current: { date: "2026-11-14", k5: 1502, k10: 3248, hm: 7418, m: 16849 },
    history: [
      ["2026-08-01", 1494, 3212, 7323, 16290],
      ["2026-08-08", 1502, 3222, 7349, 16328],
      ["2026-08-15", 1512, 3237, 7392, 16387],
      ["2026-08-22", 1484, 3209, 7329, 16280],
      ["2026-08-29", 1477, 3199, 7261, 16095],
      ["2026-09-05", 1514, 3244, 7355, 16368],
      ["2026-09-12", 1524, 3244, 7386, 16480],
      ["2026-09-19", 1539, 3246, 7436, 16644],
      ["2026-09-26", 1556, 3252, 7511, 16867],
      ["2026-10-03", 1534, 3252, 7477, 16822],
      ["2026-10-10", 1509, 3251, 7439, 16690],
      ["2026-10-17", 1493, 3248, 7412, 16680],
      ["2026-10-24", 1494, 3250, 7419, 16692],
      ["2026-10-31", 1482, 3221, 7348, 16664],
      ["2026-11-07", 1489, 3230, 7367, 16720],
      ["2026-11-14", 1502, 3248, 7418, 16849]
    ],
    note: "The half has held at 2:02–2:05 for three months. The marathon has drifted 4:31 → 4:41 since August: Garmin can see the speed, but not the long runs."
  },

  /* --- Snapshot from Garmin today --- */
  status: {
    trainingStatus: "Maintaining",
    readinessScore: 69,
    readinessLevel: "Moderate · good sleep history",
    recoveryHours: 7.8,
    hrvStatus: "Balanced · 7-day avg 42 ms",
    restingHR: 57,
    rhr7Day: 58,
    vo2max: 45.1,
    acuteLoad: 404,
    chronicLoad: 358,
    acwr: "1.1 · optimal",
    loadBalance: "Anaerobic shortage — high-aerobic over target"
  },

  benchmarks: [
    { label: "Half PR",     value: "2:04:51", note: "19 Apr 2026 · 5:55 /km" },
    { label: "Marathon PR", value: "4:24:49", note: "12 Oct 2025 · 6:16 /km" },
    { label: "10K PR",      value: "54:07",   note: "7 Sep 2025 · 5:25 /km" },
    { label: "5K PR",       value: "25:44",   note: "23 Sep 2023 · 5:09 /km" },
    { label: "Last half",   value: "2:11:13", note: "hella HM · 25 Oct 2026 · HR 153" },
    { label: "Longest run", value: "21.4 km", note: "since the April marathon" }
  ],

  /* --- Running km per Mon–Sun week (last one is partial) --- */
  weeklyKm: [
    ["Aug 17", 34.5], ["Aug 24", 5.8], ["Aug 31", 10.3], ["Sep 7", 0], ["Sep 14", 2.3],
    ["Sep 21", 0], ["Sep 28", 12.3], ["Oct 5", 13.8], ["Oct 12", 19.7], ["Oct 19", 36.6],
    ["Oct 26", 15.9], ["Nov 2", 19.4], ["Nov 9", 16.3]
  ],
  weeklyTargetKm: { hm: 40, m: 55 },

  recentRuns: [
    { date: "2026-11-12", name: "Base",          km: 7.26,  time: "43:02",   pace: "5:56", hr: 146, cad: 158 },
    { date: "2026-11-09", name: "Run",           km: 9.02,  time: "54:28",   pace: "6:02", hr: 152, cad: 159 },
    { date: "2026-11-07", name: "Long Run",      km: 12.25, time: "1:14:59", pace: "6:07", hr: 148, cad: 157 },
    { date: "2026-11-05", name: "Threshold",     km: 5.78,  time: "35:04",   pace: "6:04", hr: 147, cad: 156 },
    { date: "2026-10-31", name: "Base",          km: 7.41,  time: "50:42",   pace: "6:51", hr: 135, cad: 154 },
    { date: "2026-10-29", name: "Run (SF)",      km: 8.46,  time: "1:03:18", pace: "7:29", hr: 132, cad: 141 },
    { date: "2026-10-25", name: "hella Half",    km: 21.39, time: "2:11:13", pace: "6:08", hr: 153, cad: 160 },
    { date: "2026-10-19", name: "Base",          km: 10.69, time: "1:12:30", pace: "6:47", hr: 133, cad: 150 }
  ],

  /* --- Events from the Garmin calendar. result only where an activity is linked. --- */
  events: [
    { date: "2025-06-29", name: "hella Hamburg Halbmarathon",          km: 21.1,  result: "2:17:13", note: "watch 21.37 km" },
    { date: "2025-09-07", name: "BARMER Alsterlauf Hamburg",           km: 10,    result: "55:05" },
    { date: "2025-10-03", name: "Köhlbrandbrückenlauf",                km: 12.3,  result: "1:11:45" },
    { date: "2025-10-12", name: "Mitteldeutscher Marathon (Halle)",    km: 42.2,  result: "4:24:49", note: "marathon PR" },
    { date: "2025-11-09", name: "Bramfelder Winterlaufserie I",        km: 23.3,  result: "2:29:33" },
    { date: "2025-12-07", name: "St. Pauli Xmas Run",                  km: 5,     result: "35:06",   note: "fun run" },
    { date: "2025-12-14", name: "Bramfelder Winterlaufserie II",       km: 23.3,  result: "2:20:47" },
    { date: "2026-02-15", name: "Bramfelder Winterlaufserie IV",       km: 18.6,  result: "1:40:14", note: "15.0 km recorded" },
    { date: "2026-03-15", name: "Bramfelder Winterlaufserie V",        km: 23.3,  result: "2:02:18", note: "19.0 km recorded" },
    { date: "2026-04-19", name: "Hammer Lauf Hamburg (half)",          km: 21.1,  result: "2:06:19", note: "half PR 2:04:51 inside it" },
    { date: "2026-04-26", name: "Haspa Marathon Hamburg",              km: 42.2,  result: "4:33:04" },
    { date: "2026-09-06", name: "Alsterlauf",                          km: 10,    result: null,      note: "ran 10.3 km easy instead" },
    { date: "2026-09-20", name: "PSD Bank Halbmarathon",               km: 21.1,  result: null,      note: "not run" },
    { date: "2026-10-25", name: "hella Hamburg Halbmarathon",          km: 21.1,  result: "2:11:13", note: "goal was 2:05" },
    { date: "2026-11-15", name: "Bramfelder Winterlaufserie I",        km: 23.3,  start: "09:30", goal: "2:29:00", upcoming: true },
    { date: "2026-11-29", name: "St. Pauli Xmas Run",                  km: 5,     start: "11:30", goal: "sub-25:00", upcoming: true },
    { date: "2027-01-17", name: "Bramfelder Winterlaufserie III",      km: 23.3,  start: "09:30", goal: "2:10:00", garminPred: "2:18:58", primary: true, upcoming: true }
  ],

  /* --- Roadmap. The page highlights the phase containing today. --- */
  roadmap: [
    { from: "2026-11-01", to: "2027-01-17", title: "1 · Rebuild the base",
      target: "Bramfeld III on 17 Jan · Garmin Coach 23.3 km plan",
      bullets: [
        "Follow the Garmin Coach plan: Base until 22 Nov, Build 23 Nov–20 Dec, Peak to 5 Jan, then taper.",
        "Volume: 20 → 35–40 km a week. The rule that matters most: no week without three runs.",
        "Long run up to 20–23 km by mid-December.",
        "17 Jan: Garmin predicts 2:18:58. Your 2:10 goal is 5:35 /km, faster than sub-2 half pace. Race it at 5:55–6:00 /km."
      ] },
    { from: "2027-01-18", to: "2027-04-30", title: "2 · Sub-2:00 half block",
      target: "A flat spring half in April · 5:38 /km",
      bullets: [
        "40–45 km a week, four runs: one threshold session, one interval session, one long run, one easy run.",
        "Threshold 3 × 2 km at 5:15–5:20. Intervals 6 × 800 m at 4:50.",
        "Long runs 18–22 km, with the last 5 km at 5:40.",
        "Checkpoint in March: 10K under 53:30, or Garmin's half prediction under 2:00.",
        "Add the race to the Garmin calendar so the Coach plan builds towards it."
      ] },
    { from: "2027-05-01", to: "2027-10-31", title: "3 · Sub-4:00 marathon block",
      target: "An autumn marathon · 5:40 /km",
      bullets: [
        "Precondition: half at 1:57 or better. Sub-4 is roughly a 1:55 half plus real long runs.",
        "18-week block at 45 → 60 km a week. Long runs up to 30–32 km, three of them at 28 km or more.",
        "Marathon-pace blocks inside long runs: 2 × 6 km at 5:40.",
        "Practise fuelling on every run over 90 min: 60 g of carbs an hour, from km 5.",
        "Your 2026 Hamburg was 4:33 off about 25 km a week. Volume is the whole difference."
      ] }
  ],

  /* --- Day-by-day. type: rest | easy | workout | long | race | cross
     src: "coach" = from the Garmin Coach plan, "adj" = changed by Claude,
     "plan" = Claude's suggestion beyond what Garmin has scheduled. --- */
  schedule: [
    { date: "2026-11-14", dow: "Sat", type: "cross",   src: "adj",   title: "Swim done, no run", detail: "Garmin Coach had a 15 km long run today. Skip it: tomorrow's race is the long run this week." },
    { date: "2026-11-15", dow: "Sun", type: "race",    src: "adj",   title: "Bramfeld I · 23.3 km · 09:30", detail: "Run it as a long run at 6:20–6:30 /km, which matches your 2:29 goal (6:24). It's longer than anything since April, so start at 6:35 for the first 3 km. Take 2 gels (km 8 and 16). Last year you ran 2:29:33 here: beat it by staying even.", key: true },
    { date: "2026-11-16", dow: "Mon", type: "cross",   src: "coach", title: "Strength: Base Builder 1 (60 min)", videos: ["strength22", "legsCore12"], detail: "From Garmin Coach. The workout is on your watch, or follow one of the videos. Keep it light the day after 23 km; drop the leg work if your calves are sore." },
    { date: "2026-11-17", dow: "Tue", type: "workout", src: "adj",   title: "Threshold · 6.3 km @ 5:05 (Garmin Coach)", detail: "If morning readiness is under 50, move it to Wed. These are the anaerobic and threshold minutes Garmin says you're missing." },
    { date: "2026-11-18", dow: "Wed", type: "rest",    src: "coach", title: "Rest", detail: "" },
    { date: "2026-11-19", dow: "Thu", type: "easy",    src: "coach", title: "Base 8.7 km @ 6:10 + Core Circuit 2", videos: ["core10", "stretch7"], detail: "Keep HR under 145. Your last two 'base' runs were at 146 and 152, which is why the high-aerobic load is over target." },
    { date: "2026-11-20", dow: "Fri", type: "rest",    src: "coach", title: "Rest", detail: "" },
    { date: "2026-11-21", dow: "Sat", type: "easy",    src: "plan",  title: "Easy 5 km + 4 strides", detail: "Follow the Garmin Coach workout if it schedules something different." },
    { date: "2026-11-22", dow: "Sun", type: "long",    src: "plan",  title: "Long 14 km @ 6:30–6:45", detail: "End of the Base phase. Fully conversational.", key: true },

    { date: "2026-11-23", dow: "Mon", type: "rest",    src: "plan",  title: "Rest / strength", videos: ["strength10", "bulgarian"], detail: "Build phase starts. 10 min strength if you have the energy." },
    { date: "2026-11-24", dow: "Tue", type: "workout", src: "plan",  title: "9 km with 5 × 1 km @ 5:10–5:15", detail: "2 min jog between. 2 km warm-up and cool-down. ~9 km total." },
    { date: "2026-11-25", dow: "Wed", type: "rest",    src: "plan",  title: "Rest or swim", detail: "" },
    { date: "2026-11-26", dow: "Thu", type: "easy",    src: "plan",  title: "Easy 8 km", detail: "HR under 145." },
    { date: "2026-11-27", dow: "Fri", type: "rest",    src: "plan",  title: "Rest", detail: "" },
    { date: "2026-11-28", dow: "Sat", type: "easy",    src: "plan",  title: "Shakeout 4 km + 3 strides", detail: "" },
    { date: "2026-11-29", dow: "Sun", type: "race",    src: "plan",  title: "St. Pauli Xmas Run 5K · 11:30", detail: "Race this one, unlike last year's fun run. Garmin predicts 25:02 and your PR is 25:44 from 2023. Start at 5:05 and finish strong. It's an honest speed check, and a sub-25 means sub-2 half speed is already there. Jog 4–5 km afterwards.", key: true },

    { date: "2026-11-30", dow: "Mon", type: "rest",    src: "plan",  title: "Rest", detail: "" },
    { date: "2026-12-01", dow: "Tue", type: "easy",    src: "plan",  title: "Easy 8 km", detail: "" },
    { date: "2026-12-02", dow: "Wed", type: "workout", src: "plan",  title: "8 km with 6 × 800 m @ 4:50–4:55", detail: "400 m jog between. Pace from your 5K result if it moved." },
    { date: "2026-12-03", dow: "Thu", type: "rest",    src: "plan",  title: "Rest / strength", videos: ["legsCore12", "core10"], detail: "" },
    { date: "2026-12-04", dow: "Fri", type: "easy",    src: "plan",  title: "Easy 6 km", detail: "" },
    { date: "2026-12-05", dow: "Sat", type: "rest",    src: "plan",  title: "Rest", detail: "" },
    { date: "2026-12-06", dow: "Sun", type: "long",    src: "plan",  title: "Long 18 km @ 6:25–6:40", videos: ["stretch7"], detail: "First step towards 20–23 km by mid-December.", key: true }
  ],

  paces: [
    { zone: "Easy / base",         pace: "6:15–6:50", cue: "HR under ~145. Most of the week lives here.",              tone: "easy" },
    { zone: "Long run",            pace: "6:20–6:45", cue: "Conversational. Fuel from 75 min on.",                      tone: "easy" },
    { zone: "Marathon goal",       pace: "5:40",      cue: "Sub-4:00 needs 5:41. Practise it in long-run blocks from May.", tone: "goal" },
    { zone: "Half goal",           pace: "5:38",      cue: "Sub-2:00 needs 5:41. The last 5 km of long runs from Feb.",     tone: "goal" },
    { zone: "Threshold",           pace: "5:05–5:20", cue: "Garmin Coach prescribes 5:05. Comfortably hard, 20–30 min total.", tone: "hard" },
    { zone: "Intervals",           pace: "4:50–4:55", cue: "800 m–1 km reps. The anaerobic work Garmin says is short.",   tone: "hard" },
    { zone: "Strides",             pace: "4:30–4:45", cue: "20 s, relaxed and fast.",                                    tone: "hard" }
  ],

  /* --- Read of the data --- */
  keys: [
    { title: "Speed isn't the problem, consistency is",
      body: "Garmin's 10K prediction of 54:08 is, on standard equivalence tables, already close to a 2:00 half. The half prediction (2:03:38) is only 10 s/km off. But from 17 Aug to 8 Nov you averaged 14 km a week, with a month of almost nothing in September. The marathon prediction moving from 4:31 to 4:41 is that gap showing up." },
    { title: "The last six weeks are genuinely better",
      body: "You've run three times a week since October. Your aerobic pace has improved a lot: in September, 6:41 /km cost HR 141; this week, 5:56 cost HR 146. Cadence is up from 150 to 157–159. VO2 max is 45, HRV is balanced, and acute:chronic load is 1.1 (optimal). This is the base to build on. Don't lose it over Christmas." },
    { title: "Easy runs are a bit too hard; hard runs are missing",
      body: "Garmin flags an anaerobic shortage while your high-aerobic load is over target. Your 'base' runs at HR 146–152 sit in the in-between zone. Make easy runs truly easy and do the threshold and interval sessions properly. That's the fastest route to 5:38 /km." },
    { title: "Long runs decide the marathon",
      body: "Your longest run since the April marathon is the 21.4 km half on 25 Oct. Both of your marathons (4:24, 4:33) came from blocks without enough 28–32 km runs. The Bramfeld series (23.3 km every few weeks) is perfect long-run practice for winter. Use it that way and don't race every one." },
    { title: "Order matters: half first, then the marathon",
      body: "Sub-4 is 5:41 /km for 42 km. That's the same pace as a sub-2 half, held for twice the distance. Prove the speed in a spring half first, then spend the summer on volume. If you try both at once, you'll do neither well." }
  ],

  bailout: "If you miss a week, don't make it up. Just restart with the next scheduled session. If readiness is under 40 two mornings in a row, swap the hard session for easy running. If something hurts for more than three days, stop running and see a physio. A week off in November costs nothing; six weeks off in March costs the spring half."
};
