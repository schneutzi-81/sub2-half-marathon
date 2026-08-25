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
    lastUpdated: "2026-08-25 11:58 CEST",
    source: "Garmin Connect (Forerunner 970 / HRM 600 / Edge Explore 2) · watch last synced 2026-08-25 07:32 CEST"
  },

  race: {
    name: "Half Marathon",
    date: "2026-09-20",
    distanceKm: 21.0975,
    goalLabel: "Sub-2:00 is off the table",
    targetLabel: "2:03:30 (PR by 1:21)",
    targetPace: "5:51",
    cutoffPace: "5:55"
  },

  /* --- Snapshot of where fitness actually is right now --- */
  status: {
    garminPrediction: "2:00:47",
    predictionNote: "Speed-derived. It does not know your longest run is 12 km.",
    onTrack: false,
    readinessScore: 27,
    readinessLevel: "LOW · HIGH RECOVERY NEEDS",
    recoveryHours: 48.8,
    restingHR: 57,
    rhr7Day: 57,
    lastWeekKm: 34.5,
    acuteLoad: 435,
    headline: "Recovery is healing. Endurance is not there, and 26 days will not build it.",
    warning: "Sub-2:00 is no longer a realistic target for Sep 20 — your longest run in eight weeks is 12.3 km and the race is 21.1 km. The plan below is rebuilt around a PR attempt at 2:03:30. Read the three keys at the bottom before you argue with it."
  },

  /* --- Fixed reference points from your Garmin history --- */
  benchmarks: [
    { label: "Half Marathon PR",   value: "2:04:51",     note: "the number to beat" },
    { label: "10K PR",             value: "54:07",       note: "5:25 /km" },
    { label: "5K PR",              value: "25:43",       note: "5:09 /km" },
    { label: "Latest 10K",         value: "54:47",       note: "Aug 23 · 5:28 /km · HR 158 · TE 5.0 (max)" },
    { label: "Longest run (8 wk)", value: "12.3 km",     note: "Jun 25 · this is the whole problem" },
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
      volumeKm: 30,
      focus: "Let the 48-hour clock run out, then start the only thing that matters: time on feet.",
      days: [
        { date: "2026-08-24", dow: "Mon", type: "rest",    title: "OFF",                detail: "Done — cardio + commute rides. Correct call." },
        { date: "2026-08-25", dow: "Tue", type: "easy",    title: "Easy 5 km — or rest", detail: "Readiness 27 and 48h still on the clock. If it feels like work, walk home. 6:50–7:10 /km, HR under 135." },
        { date: "2026-08-26", dow: "Wed", type: "rest",    title: "Rest / easy cross",   detail: "Commute rides fine. Nothing that raises your breathing." },
        { date: "2026-08-27", dow: "Thu", type: "easy",    title: "Easy 7 km + strides", detail: "Recovery clock is clear by now. 6 × 20s strides after." },
        { date: "2026-08-28", dow: "Fri", type: "rest",    title: "Rest",                detail: "" },
        { date: "2026-08-29", dow: "Sat", type: "easy",    title: "Easy 5 km",           detail: "6:45–7:05 /km" },
        { date: "2026-08-30", dow: "Sun", type: "long",    title: "Long 13 km",          detail: "6:30–6:45 /km, all easy. No fast finish. This is a distance rehearsal, not a workout.", key: true }
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
        { date: "2026-09-01", dow: "Tue", type: "easy",    title: "Easy 5 km",              detail: "6:45–7:05 /km" },
        { date: "2026-09-02", dow: "Wed", type: "workout", title: "4 × 1.5 km @ 5:30",      detail: "90s jog float between. ~9 km with warm-up + cool-down. Threshold, not a race." },
        { date: "2026-09-03", dow: "Thu", type: "rest",    title: "Rest / easy cross",      detail: "" },
        { date: "2026-09-04", dow: "Fri", type: "easy",    title: "Easy 4 km + strides",    detail: "4 × 20s strides." },
        { date: "2026-09-05", dow: "Sat", type: "rest",    title: "Rest",                   detail: "" },
        { date: "2026-09-06", dow: "Sun", type: "long",    title: "Long 17 km — DRESS REHEARSAL", detail: "First 12 km @ 6:25, middle-to-late 5 km @ 5:50. Race kit, race breakfast, race gels. This tells you whether 5:50 is real over distance.", key: true }
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
        { date: "2026-09-08", dow: "Tue", type: "easy",    title: "Easy 5 km",           detail: "6:45–7:05 /km" },
        { date: "2026-09-09", dow: "Wed", type: "workout", title: "3 × 2 km @ 5:45",     detail: "3 min jog between. ~10 km total. This is goal pace — it should feel controlled, never strained." },
        { date: "2026-09-10", dow: "Thu", type: "rest",    title: "Rest / easy cross",   detail: "" },
        { date: "2026-09-11", dow: "Fri", type: "easy",    title: "Easy 4 km + strides", detail: "" },
        { date: "2026-09-12", dow: "Sat", type: "rest",    title: "Rest",                detail: "" },
        { date: "2026-09-13", dow: "Sun", type: "long",    title: "Long 14 km",          detail: "6:20–6:35 /km, final 3 km @ 5:50. Shorter on purpose — seven days out you bank recovery, not fitness." }
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
        { date: "2026-09-15", dow: "Tue", type: "easy",    title: "Easy 6 km + strides",  detail: "4 × 20s strides." },
        { date: "2026-09-16", dow: "Wed", type: "workout", title: "5 km w/ 3 km @ 5:50",  detail: "Last touch of goal pace. Stop while it still feels good." },
        { date: "2026-09-17", dow: "Thu", type: "rest",    title: "Rest",                 detail: "" },
        { date: "2026-09-18", dow: "Fri", type: "easy",    title: "Easy 4 km",            detail: "3 strides. Legs open, nothing more." },
        { date: "2026-09-19", dow: "Sat", type: "rest",    title: "Rest / shakeout",      detail: "Optional 15 min very easy." },
        { date: "2026-09-20", dow: "Sun", type: "race",    title: "RACE — Half Marathon", detail: "Target 2:03:30. That is a PR by 1:21. Go get it.", key: true }
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
    warning: "You have not run past 12 km in eight weeks. The risk is not the first half — it is km 16 onward. Start at 6:00 /km and you get to race the last 5 km. Start at 5:35 and you will walk them."
  },

  /* --- The three things that decide this --- */
  keys: [
    {
      title: "Speed is not the limiter. Endurance is.",
      body: "Aug 23 you ran 10 km at 5:28 /km — faster than goal pace — but it cost a maximum aerobic training effect of 5.0 and a 48-hour recovery clock. Meanwhile your longest run in eight weeks is 12.3 km and your 10-week average is 21 km/wk. Garmin's 2:00:47 is extrapolated from speed and knows nothing about that gap. Speed you have; the ability to hold it for 21 km you do not, and four weeks is not enough to build it."
    },
    {
      title: "The Sep 6 long run is the keystone",
      body: "17 km, two weeks out, with 5 km at goal pace inside it. If you nail exactly one session in this block, nail that one. It is also your honest read on race day: if 5:50 falls apart in that middle block, race at 6:00 /km and take the PR that is sitting right there."
    },
    {
      title: "Your easy runs are still too fast",
      body: "The log is full of runs at HR 138–158 — the moderate rut that costs recovery without building endurance. Easy means HR under 140 and 6:45–7:05 /km. Resting HR has drifted 55 → 57 and readiness is 27/100; that is your body asking for the easy days to be genuinely easy. Keep the bike commutes, keep them flat and gentle."
    }
  ],

  /* --- Escape hatch if the body pushes back --- */
  bailout: "If readiness is under 30 two mornings running, drop that week's Wednesday workout entirely and keep the long run — endurance beats sharpness this close in. If the Sep 6 17 km leaves you shelled for more than two days, race at 6:00 /km for a 2:06 and treat Sep 20 as the tune-up for a proper 12-week block. A PR you finish strong is worth more than a sub-2 you blow up chasing."
};
