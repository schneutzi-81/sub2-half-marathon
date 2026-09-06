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
    lastUpdated: "2026-09-06 18:35 CEST",
    source: "Garmin Connect (Forerunner 970 / HRM 600 / Edge Explore 2) · watch data ends 2026-09-06 18:20 CEST"
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
    goalLabel: "Sub-2:00 is off. So is the PR.",
    targetLabel: "2:12 — finish the thing strong",
    targetPace: "6:15",
    cutoffPace: "5:55"
  },

  /* --- Snapshot of where fitness actually is right now --- */
  status: {
    garminPrediction: "2:02:39",
    predictionNote: "Fourth pull running in the wrong direction: 2:00:42 → 2:00:47 → 2:00:51 → 2:02:39",
    onTrack: false,
    readinessScore: 25,
    readinessLevel: "LOW · the recovery clock this time, not missing sleep",
    recoveryHours: 49.6,
    restingHR: 58,
    rhr7Day: "55 — sleep is being tracked again",
    lastWeekKm: 10.3,
    acuteLoad: 155,
    headline: "Two runs in the last thirteen days. Today's 10.3 km was the whole of the last fortnight's training, and it went at 6:41 /km for HR 141 — nine seconds slower than the same distance on Aug 17, at ten beats higher.",
    warning: "The plan and the log have come apart. Between Aug 26 and today you ran exactly once: 5.8 km on Aug 25. The 13 km, the 4 × 1.5 km threshold session and the 17 km dress rehearsal all went unrun, and by Sep 4 your acute load had decayed to 1 — the block is effectively gone. Sub-2:00 was already off; 2:03:30 is off now too. Sep 20 is still very much worth running, but as a controlled 2:12, not a PR attempt. The two weeks below are rebuilt around that."
  },

  /* --- Fixed reference points from your Garmin history --- */
  benchmarks: [
    { label: "Half Marathon PR",   value: "2:04:51",  note: "5:55 /km — not on the table this time" },
    { label: "10K PR",             value: "54:07",    note: "5:25 /km" },
    { label: "5K PR",              value: "25:43",    note: "5:09 /km" },
    { label: "Latest run",         value: "10.3 km",  note: "Sep 6 · 6:41 /km · HR 141 · TE 3.8 · cadence 150" },
    { label: "Longest run (8 wk)", value: "11.0 km",  note: "Aug 12 · 25 days ago · the race is 21.1 km" },
    { label: "Last 14 days",       value: "16.1 km",  note: "two runs · the plan called for ~66" }
  ],

  /* --- Pace targets the whole plan is built on --- */
  paces: [
    { zone: "Easy",      pace: "6:45–7:05", cue: "HR under 140. Where almost everything now lives.",          tone: "easy" },
    { zone: "Long run",  pace: "6:40–7:00", cue: "Conversational start to finish. No fast finishes.",         tone: "easy" },
    { zone: "Race pace", pace: "6:15",      cue: "The new goal. Should feel almost lazy at km 5.",             tone: "goal" },
    { zone: "Rhythm",    pace: "6:00–6:05", cue: "Short touches only. Reminds the legs what turnover is.",     tone: "goal" },
    { zone: "PR pace",   pace: "5:55",      cue: "What a PR would need. Not available off 16 km a fortnight.", tone: "hard" },
    { zone: "Strides",   pace: "4:45–5:00", cue: "20 seconds. Relaxed and fast, not a sprint.",                tone: "hard" }
  ],

  /* --- The plan. type: rest | easy | workout | long | race --- */
  weeks: [
    {
      id: "w1",
      label: "Week 1 — Reset (as run: 5.8 km)",
      range: "Aug 24 – Aug 30",
      volumeKm: 6,
      focus: "Planned 31 km. One run happened. This is where the block came off the rails.",
      days: [
        { date: "2026-08-24", dow: "Mon", type: "rest", title: "OFF",                 detail: "Done — cardio + two commute rides." },
        { date: "2026-08-25", dow: "Tue", type: "easy", title: "Easy 5 km",           detail: "Done — 5.8 km @ 6:38 /km, HR 136, cadence 153. Still the best-executed easy run in the log. Also the last run for eleven days." },
        { date: "2026-08-26", dow: "Wed", type: "rest", title: "Rest / easy cross",   detail: "Done." },
        { date: "2026-08-27", dow: "Thu", type: "easy", title: "Easy 7 km",           detail: "NOT RUN." },
        { date: "2026-08-28", dow: "Fri", type: "rest", title: "Rest",                detail: "" },
        { date: "2026-08-29", dow: "Sat", type: "easy", title: "Easy 5 km + strides", detail: "NOT RUN." },
        { date: "2026-08-30", dow: "Sun", type: "long", title: "Long 13 km",          detail: "NOT RUN. This was the first real endurance test of the block, and everything downstream follows from it not happening." }
      ]
    },
    {
      id: "w2",
      label: "Week 2 — Keystone (as run: 10.3 km)",
      range: "Aug 31 – Sep 6",
      volumeKm: 10,
      focus: "Planned 35 km with a 17 km dress rehearsal. You got today's 10.3 km — and acute load had already fallen to 1 by Thursday.",
      days: [
        { date: "2026-08-31", dow: "Mon", type: "rest",    title: "OFF",                 detail: "Done — 0.4 km commute roll, HR 86." },
        { date: "2026-09-01", dow: "Tue", type: "easy",    title: "Easy 5 km",           detail: "NOT RUN." },
        { date: "2026-09-02", dow: "Wed", type: "workout", title: "4 × 1.5 km @ 5:30",   detail: "NOT RUN. Your last threshold session of any kind was Jul 14." },
        { date: "2026-09-03", dow: "Thu", type: "rest",    title: "Rest / easy cross",   detail: "Done. Readiness read 74 on an acute load of 1 — a fully rested body carrying no training stimulus at all." },
        { date: "2026-09-04", dow: "Fri", type: "easy",    title: "Easy 4 km + strides", detail: "NOT RUN." },
        { date: "2026-09-05", dow: "Sat", type: "rest",    title: "Rest",                detail: "Done." },
        { date: "2026-09-06", dow: "Sun", type: "long",    title: "Long 17 km — was the dress rehearsal", detail: "Run as 10.3 km @ 6:41 /km, HR 141, TE 3.8, load 122. Honest and sensible after eleven days off — but 6.7 km short, with no goal-pace work in it. It answered the question anyway: 5:50 /km over distance is not there.", key: true }
      ]
    },
    {
      id: "w3",
      label: "Week 3 — Rebuild",
      range: "Sep 7 – Sep 13",
      volumeKm: 27,
      focus: "Get frequency back and put one honest long run in the legs. None of this is about getting fitter — it is about not arriving cold.",
      days: [
        { date: "2026-09-07", dow: "Mon", type: "rest",    title: "OFF",                     detail: "The recovery clock reads 49.6 h from this morning. It does not clear until Wednesday — do not run through it." },
        { date: "2026-09-08", dow: "Tue", type: "easy",    title: "Easy 5 km",               detail: "6:45–7:05 /km, HR under 140. Purely about touching the ground again. · Form: metronome at 155 for 5 min — today's cadence was 150, so start there, not at 165." },
        { date: "2026-09-09", dow: "Wed", type: "rest",    title: "Rest / easy cross",       detail: "Commute rides only. Nothing that lifts your breathing." },
        { date: "2026-09-10", dow: "Thu", type: "workout", title: "Easy 6 km w/ 3 × 1 km @ 6:05", detail: "90s easy jog between reps. Rhythm work, not threshold — 6:05 should feel firm and repeatable, never strained. If rep 3 turns into a fight, that is your answer: race pace is 6:20, not 6:15. · Form: find the pace with quicker turnover, not a longer reach.", key: true },
        { date: "2026-09-11", dow: "Fri", type: "rest",    title: "Rest",                    detail: "" },
        { date: "2026-09-12", dow: "Sat", type: "easy",    title: "Easy 3 km + strides",     detail: "4 × 20s strides. Legs open, nothing more — Sunday is the session that matters." },
        { date: "2026-09-13", dow: "Sun", type: "long",    title: "Long 13 km",              detail: "6:40–7:00 /km, all of it easy, no fast finish. Your longest run since Aug 12, and only 2 km past it — that is deliberate. Seven days out you are banking confidence and one last aerobic touch, not fitness. If anything twinges before km 9, stop at 10 and lose nothing. · Form: checklist at km 5 and km 10 — shoulders down, lean from the ankles, hands relaxed, turnover quick.", key: true }
      ]
    },
    {
      id: "w4",
      label: "Week 4 — Taper & Race",
      range: "Sep 14 – Sep 20",
      volumeKm: 13,
      focus: "Very little running. Arrive rested, and arrive unsurprised by 6:15 /km.",
      days: [
        { date: "2026-09-14", dow: "Mon", type: "rest",    title: "OFF",                     detail: "" },
        { date: "2026-09-15", dow: "Tue", type: "easy",    title: "Easy 5 km + strides",     detail: "4 × 20s strides. · Form: metronome at 158 for 5 min — last cadence session of the block." },
        { date: "2026-09-16", dow: "Wed", type: "rest",    title: "Rest / easy cross",       detail: "" },
        { date: "2026-09-17", dow: "Thu", type: "workout", title: "Easy 5 km w/ 2 km @ 6:15", detail: "The only goal-pace touch of race week. Two kilometres, exactly at 6:15, then stop while it still feels good. You want that pace to feel boring on Sunday. · Form: final rehearsal of race posture — tall, shoulders low, elbows swinging cheek to cheek." },
        { date: "2026-09-18", dow: "Fri", type: "rest",    title: "Rest",                    detail: "" },
        { date: "2026-09-19", dow: "Sat", type: "rest",    title: "Shakeout",                detail: "3 km very easy plus 2 strides, or nothing at all. Both are fine." },
        { date: "2026-09-20", dow: "Sun", type: "race",    title: "RACE — Half Marathon",    detail: "09:00 gun. Target 2:12 off 6:15 /km. You will feel absurdly comfortable through km 8 — that is the plan working, not a reason to speed up. · Form: run the checklist at km 5, 10, 15 and 18 — shoulders down, lean from the ankles, hands relaxed, cadence quick.", key: true }
      ]
    }
  ],

  /* --- Race day execution --- */
  racePlan: {
    projected: "2:11:40",
    splits: [
      { seg: "km 1–5",     pace: "6:25", elapsed: "32:05",   cue: "Slower than your easy runs. Everyone around you will pull away. Let them." },
      { seg: "km 6–15",    pace: "6:15", elapsed: "1:34:35", cue: "Settle in and stop doing maths. This is the pace you rehearsed on Sep 17." },
      { seg: "km 16–21.1", pace: "6:05", elapsed: "2:11:40", cue: "The part you have not trained for. If it is there, take it. If it is not, hold 6:20 and still finish running." }
    ],
    fueling: [
      "Gel at ~40 min",
      "Gel at ~75 min",
      "Gel at ~105 min — on this build, the third one matters more than the first two",
      "Water at every second station"
    ],
    warning: "Your longest run in eight weeks is 11.0 km and you have run 16 km total in the last fortnight. From km 16 onward you are in genuinely unknown territory — you have not been there since spring. Start at 6:25 and the last 5 km are a race. Start at 5:50 chasing the old target and you will be walking by km 15."
  },

  /* --- What actually decides this --- */
  keys: [
    {
      title: "Say it plainly: sub-2:00 is gone, and so is the PR",
      body: "Sub-2:00 needs 5:41 /km for 21.1 km. Your PR needs 5:55. In the last fourteen days you have run 16.1 km, all of it easy, none of it faster than 6:38 /km, and your longest run in eight weeks is 11.0 km set on Aug 12 — 25 days ago. Garmin still says 2:02:39, but that number is extrapolated from a 10 km time trial on Aug 23 and knows nothing about the endurance gap; it has now drifted the wrong way four pulls running, which is the model itself conceding ground. Racing 2:12 is not giving up. It is the only version of Sep 20 that ends with you running across the line."
    },
    {
      title: "The missing fortnight is the whole story",
      body: "Between Aug 26 and Sep 6 you ran once. The 13 km, the threshold session and the 17 km dress rehearsal all went unrun. By Sep 4 your acute load had decayed to 1 — Garmin was describing a completely rested athlete carrying no training stimulus whatsoever. Today's run put it back to 155, which is a start, but two weeks cannot rebuild what four weeks would have banked. Nothing in the plan above pretends otherwise."
    },
    {
      title: "Today's run is the honest data point",
      body: "10.3 km at 6:41 /km, HR 141, TE 3.8. Compare Aug 17: the same 10.3 km at 6:32 /km for HR 131. Nine seconds per kilometre slower at ten beats higher is straightforward detraining, and it is exactly what eleven days off buys you. The upside: it was a comfortable aerobic run with zero anaerobic cost and only a 15-point body battery hit. The engine is fine. The mileage underneath it is not."
    },
    {
      title: "The Sep 13 long run is now the keystone — and it is only 13 km",
      body: "Two weeks out, the temptation is to panic-run something long. Do not. Your recent maximum is 11.0 km, so 13 km is a sensible +2 km and still the longest run you will have done since Aug 12. Anything more, this close in, buys no fitness — the adaptation window has closed — and risks arriving at the start line injured or flat. The Sep 10 rhythm session is the other one that counts: three kilometres at 6:05 will tell you whether 6:15 is the right race pace or whether it should be 6:20."
    },
    {
      title: "Sleep came back. That is a real win — bank it.",
      body: "Last pull, three straight nights had no sleep data and readiness was measuring your watch rather than your body. Last night scored 81, your HRV weekly average is 46 and reporting VERY GOOD, and resting HR has come back down 62 → 58 with the 7-day average at 55. Today's readiness of 25 is honest this time: it is the 49.6 h recovery clock from this morning's run, not three missing inputs. Sleep history is still POOR at 38%, so keep wearing it — over the next fourteen days, sleep is a bigger lever on Sep 20 than any run you could add."
    },
    {
      title: "Cadence is still the one form fault worth working",
      body: "Today's run averaged 150 SPM with a 98.6 cm stride and 269 ms of ground contact — still the long, slow, over-reaching stride, still under the 160 floor against a 170–180 target. Vertical oscillation at 8.3 cm remains in the good band, so leave it alone. Two weeks is far too short to move cadence much, which is why the metronome targets step 155 → 158 rather than chasing 165. It will not change your finish time on Sep 20; it will make km 16 onward less punishing, which on this build is the entire game. Cues adapted from sportcoaching.com.au, 'Best Running Form for Long Distance Success'."
    }
  ],

  /* --- Escape hatch if the body pushes back --- */
  bailout: "If Thursday's 6:05 reps feel like a fight, race at 6:20 /km for a 2:14 and enjoy it. If the Sep 13 long run leaves you sore for more than two days, drop Sep 17's goal-pace touch and just jog race week. If you miss another week of running entirely, treat Sep 20 as a long training run at 6:40 /km, finish comfortably, and start a proper 12-week block on Sep 21 — you have a 2:04:51 half and a 4:24 marathon in your history, so this is rebuildable. The one outcome worth avoiding is going out at 5:50 on Sunday to honour a target the last month did not earn."
};
