/* ============================================================
   sub2-half-marathon — LIVE DATA
   ------------------------------------------------------------
   This is the ONLY file that needs updating.
   Ask Claude to re-pull Garmin and rewrite it; index.html
   renders whatever is in here. Do not edit index.html to
   change numbers.
   ============================================================ */

window.TRAINING_DATA = {

  meta: {
    /* lastUpdated = when this file was last pulled from Garmin.
       watchSynced = when the watch itself last reached Garmin Connect.
       If watchSynced is hours old, the numbers below are that stale. */
    lastUpdated: "2026-08-26 08:09 CEST",
    source: "Garmin Connect (Forerunner 970 / HRM 600 / Edge Explore 2) · watch data ends 2026-08-26 07:56 CEST"
  },

  race: {
    name: "Half Marathon",
    date: "2026-09-20",
    /* Gun time as an absolute instant. The explicit +02:00 offset matters:
       it keeps the countdown correct from any timezone, and Sep 20 is still
       CEST (DST ends Oct 25). If your wave goes off later than the gun,
       put the wave time here instead. */
    startsAt: "2026-09-20T09:00:00+02:00",
    startLabel: "09:00 CEST",
    distanceKm: 21.0975,
    goalLabel: "Sub-2:00 is off the table",
    targetLabel: "2:03:30 (PR by 1:21)",
    targetPace: "5:51",
    cutoffPace: "5:55"
  },

  /* --- Snapshot of where fitness actually is right now --- */
  status: {
    garminPrediction: "2:00:51",
    predictionNote: "Drifting the wrong way: 2:00:42 → 2:00:47 → 2:00:51",
    onTrack: false,
    readinessScore: 26,
    readinessLevel: "LOW · sleep + HRV inputs missing",
    recoveryHours: 46.9,
    restingHR: 62,
    rhr7Day: "58 — 3 nights untracked",
    lastWeekKm: 34.5,
    acuteLoad: 481,
    headline: "Tuesday's easy run was exactly right. The watch has not recorded a night's sleep since Aug 23, and it is quietly wrecking these numbers.",
    warning: "Two things. Sub-2:00 is still not realistic for Sep 20 — your longest run in eight weeks has now dropped to 11.0 km against a 21.1 km race. And your last three nights have no sleep data, so today's readiness (26) and resting HR (62) are measuring your watch, not your body. Wear it to bed tonight before reading anything into them."
  },

  /* --- Fixed reference points from your Garmin history --- */
  benchmarks: [
    { label: "Half Marathon PR",   value: "2:04:51",     note: "the number to beat" },
    { label: "10K PR",             value: "54:07",       note: "5:25 /km" },
    { label: "5K PR",              value: "25:43",       note: "5:09 /km" },
    { label: "Latest 10K",         value: "54:47",       note: "Aug 23 · 5:28 /km · HR 158 · TE 5.0 (max)" },
    { label: "Longest run (8 wk)", value: "11.0 km",     note: "Aug 12 · was 12.3, the big one rolled out" },
    { label: "Volume (10 wk avg)", value: "21 km/wk",    note: "peak 34.5 · plan needs ~34" }
  ],

  /* --- Pace targets the whole plan is built on --- */
  paces: [
    { zone: "Easy",         pace: "6:45–7:05", cue: "HR under 140. Should feel embarrassing.",   tone: "easy" },
    { zone: "Long run",     pace: "6:20–6:40", cue: "Conversational the whole way. No heroics.", tone: "easy" },
    { zone: "Goal pace",    pace: "5:50",      cue: "Race rhythm. Controlled, not strained.",    tone: "goal" },
    { zone: "PR cutoff",    pace: "5:55",      cue: "Slower than this = no PR.",                 tone: "goal" },
    { zone: "Threshold",    pace: "5:30",      cue: "Comfortably hard. 1.5–2 km reps.",          tone: "hard" },
    { zone: "Strides",      pace: "4:45–5:00", cue: "20 seconds. Relaxed and fast, not a sprint.", tone: "hard" }
  ],

  /* --- The plan. type: rest | easy | workout | long | race --- */
  weeks: [
    {
      id: "w1",
      label: "Week 1 — Reset",
      range: "Aug 24 – Aug 30",
      volumeKm: 31,
      focus: "Two days banked and on plan. Sunday's 13 km is the first real test.",
      days: [
        { date: "2026-08-24", dow: "Mon", type: "rest",    title: "OFF",                 detail: "Done — cardio + two commute rides. Correct call." },
        { date: "2026-08-25", dow: "Tue", type: "easy",    title: "Easy 5 km",           detail: "Done — 5.8 km @ 6:38 /km, HR 136. On plan. A touch quick for easy, but the HR was honest. · Form: cadence was 153 SPM — your best easy run yet, still under the 160 floor." },
        { date: "2026-08-26", dow: "Wed", type: "rest",    title: "Rest / easy cross",   detail: "Commute rides fine — yesterday's two were HR 107 and 111, which is exactly right. Nothing that raises your breathing." },
        { date: "2026-08-27", dow: "Thu", type: "easy",    title: "Easy 7 km",           detail: "Recovery clock still reads 46.9 h, so keep this genuinely easy and skip the strides. 6:45–7:05 /km, HR under 140. · Form: set a metronome to 158 and hold it for 5 min mid-run. Practise form changes on easy days first." },
        { date: "2026-08-28", dow: "Fri", type: "rest",    title: "Rest",                detail: "" },
        { date: "2026-08-29", dow: "Sat", type: "easy",    title: "Easy 5 km + strides", detail: "6:45–7:05 /km. 6 × 20s strides after if Thursday felt fine. · Form: strides are cadence practice. Quick and quiet — if you hear your feet slap, you are overstriding." },
        { date: "2026-08-30", dow: "Sun", type: "long",    title: "Long 13 km",          detail: "6:30–6:45 /km, all easy. No fast finish. This is 2 km longer than anything you have run in eight weeks — treat it with respect. · Form: checklist at km 6 and km 11 — shoulders dropped, lean from the ankles not the waist, hands relaxed, cadence still quick.", key: true }
      ]
    },
    {
      id: "w2",
      label: "Week 2 — Keystone",
      range: "Aug 31 – Sep 6",
      volumeKm: 35,
      focus: "The Sunday 17 km is the single most important session left in this block.",
      days: [
        { date: "2026-08-31", dow: "Mon", type: "rest",    title: "OFF",                    detail: "" },
        { date: "2026-09-01", dow: "Tue", type: "easy",    title: "Easy 5 km",              detail: "6:45–7:05 /km · Form: metronome 160 for 5 min. Breathe 3 steps in, 2 out." },
        { date: "2026-09-02", dow: "Wed", type: "workout", title: "4 × 1.5 km @ 5:30",      detail: "90s jog float between. ~9 km with warm-up + cool-down. Threshold, not a race. · Form: as the pace lifts, resist reaching. Foot lands under the hips; elbows ~90°, swinging cheek to cheek, never across the midline." },
        { date: "2026-09-03", dow: "Thu", type: "rest",    title: "Rest / easy cross",      detail: "" },
        { date: "2026-09-04", dow: "Fri", type: "easy",    title: "Easy 4 km + strides",    detail: "4 × 20s strides. · Form: eyes 10–20 m ahead, imagine a string pulling up from the crown of your head." },
        { date: "2026-09-05", dow: "Sat", type: "rest",    title: "Rest",                   detail: "" },
        { date: "2026-09-06", dow: "Sun", type: "long",    title: "Long 17 km — DRESS REHEARSAL", detail: "First 12 km @ 6:25, middle-to-late 5 km @ 5:50. Race kit, race breakfast, race gels. This tells you whether 5:50 is real over distance. · Form: checklist at km 6, 11 and 15. Hip extensors fail first — when push-off shortens, shorten the stride and keep the turnover rather than reaching for pace.", key: true }
      ]
    },
    {
      id: "w3",
      label: "Week 3 — Sharpen",
      range: "Sep 7 – Sep 13",
      volumeKm: 33,
      focus: "Long run comes back down. Goal pace should start feeling automatic.",
      days: [
        { date: "2026-09-07", dow: "Mon", type: "rest",    title: "OFF",                 detail: "" },
        { date: "2026-09-08", dow: "Tue", type: "easy",    title: "Easy 5 km",           detail: "6:45–7:05 /km · Form: metronome 162 for 5 min." },
        { date: "2026-09-09", dow: "Wed", type: "workout", title: "3 × 2 km @ 5:45",     detail: "3 min jog between. ~10 km total. This is goal pace — it should feel controlled, never strained. · Form: goal pace comes from quicker turnover, not a longer reach." },
        { date: "2026-09-10", dow: "Thu", type: "rest",    title: "Rest / easy cross",   detail: "" },
        { date: "2026-09-11", dow: "Fri", type: "easy",    title: "Easy 4 km + strides", detail: "Form: relaxed hands, low shoulders. Nothing forced." },
        { date: "2026-09-12", dow: "Sat", type: "rest",    title: "Rest",                detail: "" },
        { date: "2026-09-13", dow: "Sun", type: "long",    title: "Long 14 km",          detail: "6:20–6:35 /km, final 3 km @ 5:50. Shorter on purpose — seven days out you bank recovery, not fitness. · Form: checklist at km 5, 9 and 12. The final 3 km at 5:50 is where crossing arms creep in." }
      ]
    },
    {
      id: "w4",
      label: "Week 4 — Taper & Race",
      range: "Sep 14 – Sep 20",
      volumeKm: 17,
      focus: "Volume drops hard, intensity stays sharp. Arrive fresh, not fitter.",
      days: [
        { date: "2026-09-14", dow: "Mon", type: "rest",    title: "OFF",                  detail: "" },
        { date: "2026-09-15", dow: "Tue", type: "easy",    title: "Easy 6 km + strides",  detail: "4 × 20s strides. · Form: metronome 165 for 5 min — last cadence session of the block." },
        { date: "2026-09-16", dow: "Wed", type: "workout", title: "5 km w/ 3 km @ 5:50",  detail: "Last touch of goal pace. Stop while it still feels good. · Form: final rehearsal of race posture. Tall, shoulders low, cheek to cheek." },
        { date: "2026-09-17", dow: "Thu", type: "rest",    title: "Rest",                 detail: "" },
        { date: "2026-09-18", dow: "Fri", type: "easy",    title: "Easy 4 km",            detail: "3 strides. Legs open, nothing more. · Form: nothing left to fix. Just feel the rhythm." },
        { date: "2026-09-19", dow: "Sat", type: "rest",    title: "Rest / shakeout",      detail: "Optional 15 min very easy." },
        { date: "2026-09-20", dow: "Sun", type: "race",    title: "RACE — Half Marathon", detail: "09:00 gun. Target 2:03:30 — a PR by 1:21. Go get it. · Form: run the checklist at km 5, 10, 15 and 18 — shoulders down, lean from the ankles, hands relaxed, cadence quick.", key: true }
      ]
    }
  ],

  /* --- Race day execution --- */
  racePlan: {
    projected: "2:03:24",
    splits: [
      { seg: "km 1–5",     pace: "6:00", elapsed: "30:00",   cue: "Deliberately slow. It will feel far too easy — that is exactly correct." },
      { seg: "km 6–15",    pace: "5:50", elapsed: "1:28:20", cue: "Settle into goal rhythm. Lock in and stop doing maths." },
      { seg: "km 16–21.1", pace: "5:45", elapsed: "2:03:24", cue: "Whatever is left. This is the part your long runs bought you — and the part they only just bought." }
    ],
    fueling: [
      "Gel at ~40 min",
      "Gel at ~75 min",
      "Gel at ~105 min — the third one matters more than you think",
      "Water at every second station"
    ],
    warning: "You have not run past 11 km in eight weeks. The risk is not the first half — it is km 16 onward. Start at 6:00 /km and you get to race the last 5 km. Start at 5:35 and you will walk them."
  },

  /* --- What actually decides this --- */
  keys: [
    {
      title: "Wear the watch to bed — it is corrupting this page",
      body: "No sleep recorded for the nights into Aug 24, 25 or 26. Garmin derives resting HR mainly from sleep, so without it your RHR gets computed from daytime lows and reads high — which is almost certainly the whole 57 → 62 'rise'. Readiness is worse: sleep, sleep-history and HRV are all reporting NONE today, so a score of 26 is three missing inputs, not a verdict on your legs. Fix this first, then trust the numbers again."
    },
    {
      title: "Speed is not the limiter. Endurance is — and it slipped.",
      body: "Aug 23 you ran 10 km at 5:28 /km, faster than goal pace, but it cost a maximum aerobic training effect of 5.0. Meanwhile your longest run in eight weeks just fell from 12.3 km to 11.0 km, because the June long run aged out of the window. The race is 21.1 km. Garmin's 2:00:51 is extrapolated from speed and knows nothing about that gap — and it has now drifted the wrong way three pulls running."
    },
    {
      title: "The Sep 6 long run is the keystone",
      body: "17 km, two weeks out, with 5 km at goal pace inside it. If you nail exactly one session in this block, nail that one. It is also your honest read on race day: if 5:50 falls apart in that middle block, race at 6:00 /km and take the PR that is sitting right there."
    },
    {
      title: "Your cadence is the one form fault worth fixing",
      body: "Across your last eight runs cadence averages 151 SPM and falls as low as 136 — under the 160 floor on every easy run, against a 170–180 target. It only reaches 163 on your fastest run, which means at easy pace you are reaching with a long, slow stride: the classic overstride, and a braking action that costs you most over distance. That is the same km-16-onward fade this whole plan is built around. Vertical oscillation (8.2 cm) is already in the good band, so leave it alone. The per-session Form cues below build cadence gradually — the source recommends only 5–10% over six weeks, which is why the metronome targets step 158 → 160 → 162 → 165 rather than jumping to 175. Cues adapted from sportcoaching.com.au, 'Best Running Form for Long Distance Success'."
    },
    {
      title: "Tuesday was the template",
      body: "5.8 km at 6:38 /km, HR 136 — that is what an easy run is supposed to look like, and it is a real change from the HR 138–158 rut the rest of your log sits in. The commute rides at HR 107 and 111 are ideal too. Keep both exactly as they are; they are the reason Sunday's 13 km will be survivable."
    }
  ],

  /* --- Escape hatch if the body pushes back --- */
  bailout: "If readiness is under 30 two mornings running WITH sleep actually tracked, drop that week's Wednesday workout and keep the long run — endurance beats sharpness this close in. If the Sep 6 17 km leaves you shelled for more than two days, race at 6:00 /km for a 2:06 and treat Sep 20 as the tune-up for a proper 12-week block. A PR you finish strong is worth more than a sub-2 you blow up chasing."
};
