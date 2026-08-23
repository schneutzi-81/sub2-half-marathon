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
    lastUpdated: "2026-08-23",
    source: "Garmin Connect (Forerunner 970 / HRM 600 / Edge Explore 2)"
  },

  race: {
    name: "Half Marathon",
    date: "2026-09-20",
    distanceKm: 21.0975,
    goalLabel: "Sub 2:00:00",
    targetLabel: "1:57:50",
    targetPace: "5:35",
    cutoffPace: "5:41"
  },

  /* --- Snapshot of where fitness actually is right now --- */
  status: {
    garminPrediction: "2:00:42",
    predictionNote: "42 seconds the wrong side of goal",
    onTrack: false,
    readinessScore: 10,
    readinessLevel: "POOR",
    recoveryHours: 96,
    restingHR: 55,
    rhr7Day: 58,
    lastWeekKm: 34.5,
    acuteLoad: 591,
    headline: "Speed is there. Durability at 21 km is not — yet.",
    warning: "Readiness 10/100, 96h recovery clock, last run flagged OVERREACHING_VO2MAX. Week 1 starts with real rest."
  },

  /* --- Fixed reference points from your Garmin history --- */
  benchmarks: [
    { label: "Half Marathon PR",  value: "2:04:51",     note: "need ~5 min off" },
    { label: "10K PR",            value: "54:07",       note: "5:25 /km" },
    { label: "5K PR",             value: "25:43",       note: "5:09 /km" },
    { label: "Latest 10K",        value: "54:47",       note: "Aug 23 · 5:28 /km · HR 158" },
    { label: "Longest run (90d)", value: "21.2 km",     note: "May 25 · 7:02 /km" },
    { label: "Recent volume",     value: "15–34 km/wk", note: "the weak link" }
  ],

  /* --- Pace targets the whole plan is built on --- */
  paces: [
    { zone: "Easy",         pace: "6:45–7:00", cue: "HR under 140. Should feel embarrassing.", tone: "easy" },
    { zone: "Long run",     pace: "6:15–6:30", cue: "Conversational, steady.",                 tone: "easy" },
    { zone: "Goal pace",    pace: "5:35",      cue: "Race rhythm. Controlled, not strained.",  tone: "goal" },
    { zone: "Sub-2 cutoff", pace: "5:41",      cue: "Slower than this = miss.",                tone: "goal" },
    { zone: "Threshold",    pace: "5:30",      cue: "Comfortably hard. 2 km reps.",            tone: "hard" },
    { zone: "1 km reps",    pace: "5:15–5:20", cue: "Hard but repeatable. Not a sprint.",      tone: "hard" }
  ],

  /* --- The plan. type: rest | easy | workout | long | race --- */
  weeks: [
    {
      id: "w1",
      label: "Week 1 — Rebuild",
      range: "Aug 24 – Aug 30",
      volumeKm: 37,
      focus: "Clear the 96-hour recovery clock, then reintroduce quality.",
      days: [
        { date: "2026-08-24", dow: "Mon", type: "rest",    title: "OFF",             detail: "Full rest. The 96h recovery clock is not a suggestion." },
        { date: "2026-08-25", dow: "Tue", type: "easy",    title: "Easy 6 km",       detail: "6:45–7:00 /km · HR under 140" },
        { date: "2026-08-26", dow: "Wed", type: "workout", title: "3 × 2 km @ 5:30", detail: "3 min jog float between. ~11 km with warm-up + cool-down." },
        { date: "2026-08-27", dow: "Thu", type: "rest",    title: "Rest / cross",    detail: "Optional easy 40 min bike or swim. Easy means easy." },
        { date: "2026-08-28", dow: "Fri", type: "easy",    title: "Easy 6 km",       detail: "6:45–7:00 /km" },
        { date: "2026-08-29", dow: "Sat", type: "rest",    title: "Rest / yoga",     detail: "" },
        { date: "2026-08-30", dow: "Sun", type: "long",    title: "Long 14 km",      detail: "6:15–6:30 /km, final 3 km @ 5:35" }
      ]
    },
    {
      id: "w2",
      label: "Week 2 — Peak",
      range: "Aug 31 – Sep 6",
      volumeKm: 41,
      focus: "Biggest week. The Sunday 18 km is the keystone session of the whole block.",
      days: [
        { date: "2026-08-31", dow: "Mon", type: "rest",    title: "OFF",                  detail: "" },
        { date: "2026-09-01", dow: "Tue", type: "easy",    title: "Easy 7 km",            detail: "6:45–7:00 /km" },
        { date: "2026-09-02", dow: "Wed", type: "workout", title: "5 × 1 km @ 5:15–5:20", detail: "400 m jog recovery. ~11 km total." },
        { date: "2026-09-03", dow: "Thu", type: "rest",    title: "Rest / cross",         detail: "" },
        { date: "2026-09-04", dow: "Fri", type: "easy",    title: "Easy 5 km + strides",  detail: "6 × 20s strides after." },
        { date: "2026-09-05", dow: "Sat", type: "rest",    title: "Rest",                 detail: "" },
        { date: "2026-09-06", dow: "Sun", type: "long",    title: "Long 18 km — DRESS REHEARSAL", detail: "Middle 8 km @ 5:40. Race kit, race breakfast, race gels. This one tells you whether 5:35 is real.", key: true }
      ]
    },
    {
      id: "w3",
      label: "Week 3 — Sharpen",
      range: "Sep 7 – Sep 13",
      volumeKm: 40,
      focus: "Same volume, lower intensity. Goal pace should start feeling automatic.",
      days: [
        { date: "2026-09-07", dow: "Mon", type: "rest",    title: "OFF",                 detail: "" },
        { date: "2026-09-08", dow: "Tue", type: "easy",    title: "Easy 6 km",           detail: "6:45–7:00 /km" },
        { date: "2026-09-09", dow: "Wed", type: "workout", title: "2 × 4 km @ 5:35",     detail: "4 min jog between. ~13 km total. This is goal pace — it should feel controlled." },
        { date: "2026-09-10", dow: "Thu", type: "rest",    title: "Rest / cross",        detail: "" },
        { date: "2026-09-11", dow: "Fri", type: "easy",    title: "Easy 5 km + strides", detail: "" },
        { date: "2026-09-12", dow: "Sat", type: "rest",    title: "Rest",                detail: "" },
        { date: "2026-09-13", dow: "Sun", type: "long",    title: "Long 16 km",          detail: "6:10–6:25 /km steady" }
      ]
    },
    {
      id: "w4",
      label: "Week 4 — Taper & Race",
      range: "Sep 14 – Sep 20",
      volumeKm: 18,
      focus: "Volume drops hard, intensity stays sharp. Arrive fresh, not fitter.",
      days: [
        { date: "2026-09-14", dow: "Mon", type: "rest",    title: "OFF",                  detail: "" },
        { date: "2026-09-15", dow: "Tue", type: "easy",    title: "Easy 6 km + strides",  detail: "4 × 20s strides." },
        { date: "2026-09-16", dow: "Wed", type: "workout", title: "5 km w/ 3 km @ 5:35",  detail: "Last touch of goal pace. Stop while it still feels good." },
        { date: "2026-09-17", dow: "Thu", type: "rest",    title: "Rest",                 detail: "" },
        { date: "2026-09-18", dow: "Fri", type: "easy",    title: "Easy 4 km",            detail: "3 strides. Legs open, nothing more." },
        { date: "2026-09-19", dow: "Sat", type: "rest",    title: "Rest / shakeout",      detail: "Optional 15 min very easy." },
        { date: "2026-09-20", dow: "Sun", type: "race",    title: "RACE — Half Marathon", detail: "Target 1:57:50. Go get it.", key: true }
      ]
    }
  ],

  /* --- Race day execution --- */
  racePlan: {
    projected: "1:58:08",
    splits: [
      { seg: "km 1–5",     pace: "5:45", elapsed: "28:45",   cue: "Deliberately slow. It will feel too easy — that is correct." },
      { seg: "km 6–15",    pace: "5:35", elapsed: "1:24:35", cue: "Settle into goal rhythm. Lock in and stop doing maths." },
      { seg: "km 16–21.1", pace: "5:30", elapsed: "1:58:08", cue: "Whatever is left. This is what the long runs bought you." }
    ],
    fueling: [
      "Gel at ~45 min",
      "Gel at ~80 min",
      "Water at every second station"
    ],
    warning: "The most common way to miss sub-2 is running the first 5 km at 5:20."
  },

  /* --- The three things that decide this --- */
  keys: [
    {
      title: "Your easy runs are too fast",
      body: "Your log is full of runs at HR 140–158 — the moderate rut. Easy means HR under 140 and 6:45–7:00 /km. That is what lets the two quality sessions actually land."
    },
    {
      title: "The Week 2 long run is the keystone",
      body: "If you nail exactly one session in this block, nail the 18 km. It is the rehearsal that tells you whether 5:35 /km is real over distance."
    },
    {
      title: "Keep the bike and swim easy",
      body: "Great aerobic volume without the pounding — but keep them off Wednesdays and Sundays, and do not let the commute rides turn into intervals."
    }
  ],

  /* --- Escape hatch if the body pushes back --- */
  bailout: "If readiness is under 30 two mornings running, cut that week's Wednesday workout to 3 × 1 km and keep the long run. Endurance beats sharpness this close in."
};
